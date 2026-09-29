import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Compass, 
  MapPin, 
  ShoppingBag, 
  User, 
  CornerDownLeft,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ChatMessage } from '../types';
import { INITIAL_CHAT_MESSAGES, askSarthiAI } from '../services/chatService';

interface ChatAssistantPageProps {
  onNavigateTab: (tab: string) => void;
  onExploreFilter?: (cat: string) => void;
  contextItineraryPrompt?: string;
}

export const ChatAssistantPage: React.FC<ChatAssistantPageProps> = ({
  onNavigateTab,
  onExploreFilter,
  contextItineraryPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Plan a 3-day trip under ₹10,000',
    'Best waterfalls near Ranchi?',
    'Where can I experience tribal culture?',
    'Best places for a family trip?',
    'Suggest a budget trip for two people.',
    'What should I visit during monsoon?'
  ];

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // If there's an incoming context prompt from Trip Planner
  useEffect(() => {
    if (contextItineraryPrompt) {
      handleSendMessage(contextItineraryPrompt);
    }
  }, [contextItineraryPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    try {
      const response = await askSarthiAI(query, messages);
      setMessages((prev) => [...prev, response]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'sarthi',
          text: `Johar! I encountered a temporary connection issue, but here is what I know: Dassam and Hundru Falls are roaring and best visited before 4 PM!`,
          timestamp: 'Just now',
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: { label: string; actionType: string; payload?: string }) => {
    if (action.actionType === 'prompt' && action.payload) {
      handleSendMessage(action.payload);
    } else if (action.actionType === 'plan') {
      onNavigateTab('planner');
    } else if (action.actionType === 'map') {
      onNavigateTab('map');
    } else if (action.actionType === 'marketplace') {
      onNavigateTab('marketplace');
    } else if (action.actionType === 'explore') {
      if (action.payload && onExploreFilter) {
        onExploreFilter(action.payload);
      }
      onNavigateTab('explore');
    }
  };

  // Helper to format basic markdown (bold, lists, headings)
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Headings
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-bold text-base sm:text-lg text-forest-950 font-serif mt-3 mb-1.5">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('* ') || line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-xs sm:text-sm text-slate-700 my-1 leading-relaxed">
            {formatBold(line.substring(2))}
          </li>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-gold-500 pl-3 my-2 text-xs italic text-slate-600 bg-gold-50/50 py-1 rounded-r-lg">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-1.5" />;
      }
      return (
        <p key={idx} className="text-xs sm:text-sm text-slate-800 leading-relaxed">
          {formatBold(line)}
        </p>
      );
    });
  };

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-forest-950">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-fadeIn">
      
      {/* Title & Subtitle as requested in prompt */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-turquoise-100 text-turquoise-900 text-xs font-bold uppercase tracking-wider">
          <Bot className="w-3.5 h-3.5 text-turquoise-700" />
          <span>Conversational Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
          Sarthi AI
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Ask anything about your Jharkhand journey
        </p>

        <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
          <span className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <Zap className="w-3 h-3 text-emerald-600" />
            Gemini API Ready + Offline Fallback Engine
          </span>
        </div>
      </div>

      {/* Suggested Questions Pills */}
      <div className="space-y-2">
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
          Suggested Questions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-forest-50 text-slate-700 hover:text-forest-900 text-xs font-semibold border border-slate-200 shadow-sm transition-all hover:border-forest-300"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* CHAT CONTAINER */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-200/90 overflow-hidden flex flex-col h-[560px]">
        
        {/* Chat Messages Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 bg-cream-50/40">
          {messages.map((msg) => {
            const isSarthi = msg.sender === 'sarthi';

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isSarthi ? 'justify-start' : 'justify-end'}`}
              >
                {/* Bot Avatar */}
                {isSarthi && (
                  <div className="w-9 h-9 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 shadow-sm border border-forest-800">
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 shadow-sm space-y-3 ${
                    isSarthi
                      ? 'bg-white border border-slate-200 text-slate-900'
                      : 'bg-forest-900 text-white rounded-br-none shadow-md'
                  }`}
                >
                  <div className="space-y-1">
                    {isSarthi ? (
                      renderFormattedText(msg.text)
                    ) : (
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">{msg.text}</p>
                    )}
                  </div>

                  {/* Action Pills */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(act)}
                          className="px-3 py-1 rounded-xl bg-forest-50 hover:bg-forest-900 text-forest-900 hover:text-white text-xs font-semibold border border-forest-200 transition-all flex items-center gap-1 shadow-xs"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[10px] ${isSarthi ? 'text-slate-400' : 'text-forest-300'} text-right`}>
                    {msg.timestamp}
                  </div>
                </div>

                {/* User Avatar */}
                {!isSarthi && (
                  <div className="w-9 h-9 rounded-2xl bg-gold-500 text-forest-950 flex items-center justify-center shrink-0 font-bold shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-forest-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-forest-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-forest-600 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-slate-500 font-medium ml-1">Sarthi is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Sarthi anything about Jharkhand destinations, budgets, homestays..."
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm bg-slate-50/50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-3 rounded-2xl bg-forest-900 hover:bg-forest-800 disabled:opacity-50 text-gold-400 font-bold transition-transform active:scale-95 shadow-md shrink-0"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            SARTHI AI Assistant • SIH 2026 Innovation by Team Vertex • SSIEMS
          </p>
        </div>

      </div>

    </div>
  );
};
