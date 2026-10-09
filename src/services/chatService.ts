import { ChatMessage } from '../types';
import { detectIndianLanguage } from '../data/languages';
import { generateVerifiedFallbackResponse } from '../utils/fallbackChat';

const STORAGE_KEY = 'sarthi_chat_history_v1';

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'sarthi',
    text: `Namaste! 🙏 I am **SARTHI AI**, your Pan-India Intelligent Sustainable & Cultural Tourism Companion.\n\nI help you discover India's extraordinary living heritage across all 28 States and 8 Union Territories—from Himalayan solar homestays in Spiti and high mountain passes in Ladakh to the serene backwaters of Kerala, Living Root Bridges of Meghalaya, desert artisan hamlets of Rajasthan & Kutch, and UNESCO stone monuments of Ajanta, Ellora & Hampi.\n\nEvery journey features an **Explainable SARTHI Impact Score** (0–100) assessing your carbon transit efficiency, village community spend retention, and protected habitat stewardship.\n\nWhere across India would you like to journey next? You can ask in any of India’s 22 scheduled languages!`,
    timestamp: 'Just now',
    suggestedActions: [
      { label: '🌱 How is the SARTHI Impact Score calculated?', actionType: 'prompt', payload: 'How is the SARTHI Impact Score calculated?' },
      { label: '🏛️ UNESCO Ajanta & Ellora caves guide', actionType: 'prompt', payload: 'Tell me about Ajanta and Ellora caves in Maharashtra' },
      { label: '🏔️ Plan a 4-day eco-trip to Himachal or Spiti', actionType: 'plan' },
      { label: '🌴 Responsible backwater homestays in Kerala', actionType: 'explore', payload: 'Kerala' },
      { label: '🏜️ Living craft trails in Rajasthan & Kutch', actionType: 'explore', payload: 'Rajasthan' }
    ]
  }
];

// Session Storage Persistence (Client-Side, Bounded, No Secrets / PII)
export function saveChatSession(messages: ChatMessage[]) {
  try {
    const sanitized = messages.slice(-20).map(m => ({
      id: m.id,
      sender: m.sender,
      text: m.text,
      timestamp: m.timestamp,
      suggestedActions: m.suggestedActions,
      languageCode: m.languageCode,
      source: m.source
    }));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
  } catch (err) {
    console.warn('Unable to persist chat to sessionStorage:', err);
  }
}

export function loadChatSession(): ChatMessage[] {
  try {
    const data = sessionStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Unable to load chat from sessionStorage:', err);
  }
  return INITIAL_CHAT_MESSAGES;
}

export function clearChatSession() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export interface AskSarthiOptions {
  language?: string;
  onChunk?: (currentText: string, chunk: string) => void;
  signal?: AbortSignal;
}

/**
 * Ask SARTHI AI with streaming support and secure server integration.
 * Communicates exclusively with protected POST /api/chat.
 * Never touches or exposes API keys on the frontend.
 */
export async function askSarthiAI(
  userQuery: string,
  chatHistory: ChatMessage[] = [],
  options: AskSarthiOptions = {}
): Promise<ChatMessage> {
  const query = userQuery.trim();
  const selectedLang = options.language || 'auto';
  
  // Resolve language code
  const effectiveLang = selectedLang === 'auto'
    ? detectIndianLanguage(query).code
    : selectedLang;

  // Format bounded history for server
  const boundedHistory = chatHistory.slice(-8).map(m => ({
    role: (m.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
    content: m.text.slice(0, 1000)
  }));

  let accumulatedText = '';
  let source: 'openai' | 'gemini' | 'sarthi-engine' = 'sarthi-engine';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: query,
        history: boundedHistory,
        language: effectiveLang,
        stream: true
      }),
      signal: options.signal
    });

    if (response.ok && response.body) {
      const contentType = response.headers.get('content-type') || '';

      if (contentType.includes('text/event-stream')) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('data: ')) {
              const dataStr = trimmed.slice(6).trim();
              if (dataStr === '[DONE]') {
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
                  accumulatedText += parsed.chunk;
                  source = 'gemini';
                  if (options.onChunk) {
                    options.onChunk(accumulatedText, parsed.chunk);
                  }
                }
              } catch {
                // partial chunk, continue
              }
            }
          }
        }
      } else {
        const data = await response.json();
        if (data.reply) {
          accumulatedText = data.reply;
          source = data.source || 'sarthi-engine';
        }
      }
    } else {
      console.warn('POST /api/chat returned status:', response.status);
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      // User clicked stop generating
      if (accumulatedText) {
        return {
          id: `msg-${Date.now()}`,
          sender: 'sarthi',
          text: accumulatedText + '\n\n*(Generation stopped by user)*',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          languageCode: effectiveLang,
          source
        };
      }
    }
    console.warn('Network or server connection issue, using verified SARTHI engine:', err);
  }

  // Fallback to verified local generator if stream produced empty output
  if (!accumulatedText.trim()) {
    accumulatedText = generateVerifiedFallbackResponse(query, effectiveLang);
    source = 'sarthi-engine';
  }

  return {
    id: `msg-${Date.now()}`,
    sender: 'sarthi',
    text: accumulatedText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    languageCode: effectiveLang,
    source,
    suggestedActions: [
      { label: '✨ Open AI Trip Planner', actionType: 'plan' },
      { label: '🗺️ View on Map', actionType: 'map' },
      { label: '📍 Explore All Destinations', actionType: 'explore' }
    ]
  };
}
