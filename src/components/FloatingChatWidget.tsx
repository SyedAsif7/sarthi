import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Maximize2,
  Minimize2,
  RotateCcw,
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff,
  Copy,
  Check,
  Search,
  Globe,
  Square,
  RefreshCw,
  Layers,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  ArrowRight
} from 'lucide-react';
import { askSarthiAI, loadChatSession, saveChatSession, clearChatSession } from '../services/chatService';
import { ChatMessage } from '../types';
import { INDIAN_LANGUAGES, LanguageConfig, getUILabels, detectIndianLanguage } from '../data/languages';

interface FloatingChatWidgetProps {
  onNavigateTab: (tab: string) => void;
  onOpenTripPlanner: () => void;
  activeLanguage?: string;
  onChangeLanguage?: (lang: string) => void;
}

interface QuickPrompt {
  id: string;
  category: 'itinerary' | 'homestay' | 'culture' | 'impact' | 'safety';
  label: string;
  prompt: string;
  icon: string;
}

const CHAT_CATEGORIES = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'itinerary', label: 'Eco Tours', icon: '🗺️' },
  { id: 'homestay', label: 'Homestays', icon: '🏡' },
  { id: 'culture', label: 'Crafts', icon: '🎨' },
  { id: 'impact', label: 'Score', icon: '🌱' },
  { id: 'safety', label: 'Helpline', icon: '🛡️' },
];

const PROMPT_SUGGESTIONS: QuickPrompt[] = [
  { id: 'p1', category: 'itinerary', icon: '🏛️', label: 'Maharashtra Ajanta & Ellora', prompt: 'Tell me about Ajanta and Ellora caves in Maharashtra with electric bus transit' },
  { id: 'p2', category: 'itinerary', icon: '🏔️', label: 'Spiti 4-Day Eco Circuit', prompt: 'Plan an eco-friendly 4-day itinerary in Spiti Valley with high altitude acclimatization' },
  { id: 'p3', category: 'itinerary', icon: '🌴', label: 'Kerala Backwater 3-Day', prompt: 'Suggest a low-carbon 3-day itinerary across Kerala backwaters and silent canoe trails' },
  { id: 'p4', category: 'itinerary', icon: '💰', label: 'Budget Trip Under ₹10,000', prompt: 'Create a 3-day budget travel plan under ₹10,000 using Indian Railways' },
  { id: 'p5', category: 'homestay', icon: '☀️', label: 'Spiti Solar Hearth Stays', prompt: 'Recommend certified passive-solar homestays in Spiti Valley (Kaza and Kibber)' },
  { id: 'p6', category: 'homestay', icon: '🛶', label: 'Munroe Backwater Coir Stays', prompt: 'Tell me about community-run eco homestays in Munroe Island, Kerala' },
  { id: 'p7', category: 'culture', icon: '🖌️', label: 'Kutch Rogan & Mud Murals', prompt: 'Where can I meet master Rogan art and Sohrai mural craftspeople?' },
  { id: 'p8', category: 'culture', icon: '📜', label: 'Odisha Pattachitra Scrolls', prompt: 'How do I visit Raghurajpur heritage craft village in Odisha for Pattachitra?' },
  { id: 'p9', category: 'impact', icon: '🌱', label: 'How Impact Score Works', prompt: 'How does the SARTHI Impact Score assess carbon, community, and conservation?' },
  { id: 'p10', category: 'safety', icon: '📞', label: '1363 Tourist Helpline', prompt: 'How does the 1363 24x7 multi-lingual tourist helpline assist travelers in India?' },
];

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onNavigateTab,
  onOpenTripPlanner,
  activeLanguage,
  onChangeLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(activeLanguage || 'auto');

  useEffect(() => {
    if (activeLanguage) {
      setSelectedLanguage(activeLanguage);
    }
  }, [activeLanguage]);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [languageSearch, setLanguageSearch] = useState('');
  
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadChatSession());
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [showPromptsDrawer, setShowPromptsDrawer] = useState(false);
  const [selectedPromptCategory, setSelectedPromptCategory] = useState<string>('all');

  const abortControllerRef = useRef<AbortController | null>(null);
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentLangConfig = useMemo(() => {
    return INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];
  }, [selectedLanguage]);

  const labels = useMemo(() => {
    return getUILabels(selectedLanguage === 'auto' ? 'en' : selectedLanguage);
  }, [selectedLanguage]);

  const filteredLanguages = useMemo(() => {
    if (!languageSearch.trim()) return INDIAN_LANGUAGES;
    const q = languageSearch.toLowerCase().trim();
    return INDIAN_LANGUAGES.filter(
      l => l.name.toLowerCase().includes(q) || 
           l.nativeName.toLowerCase().includes(q) || 
           l.region.toLowerCase().includes(q) ||
           l.code.toLowerCase().includes(q)
    );
  }, [languageSearch]);

  const scrollToBottom = () => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isStreaming, isOpen]);

  useEffect(() => {
    if (messages.length > 0) {
      saveChatSession(messages);
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);

  const handleResetChat = () => {
    if (confirm('Clear chat history?')) {
      clearChatSession();
      setMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: 'sarthi',
          text: currentLangConfig.greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: '✨ Plan Trip', actionType: 'plan' },
            { label: '🏛️ Maharashtra Heritage', actionType: 'prompt', payload: 'Tell me about Ajanta and Ellora caves in Maharashtra' },
            { label: '🌴 Kerala Homestays', actionType: 'explore', payload: 'Kerala' }
          ]
        }
      ]);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
    }
  };

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
    setIsTyping(false);
  };

  const handleToggleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(labels.speechUnavailable);
      return;
    }

    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = currentLangConfig.speechCode || 'en-IN';
      recognition.interimResults = true;
      recognition.continuous = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => (result as any)[0].transcript)
          .join('');
        setInputValue(transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.warn('Speech recognition error:', err);
      setIsListening(false);
    }
  };

  const handleSpeakMessage = (msgId: string, text: string, langCode?: string) => {
    if (!('speechSynthesis' in window)) {
      alert(labels.ttsUnavailable);
      return;
    }

    if (speakingMessageId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#`~\[\]]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    const targetLang = langCode || (selectedLanguage === 'auto' ? 'en' : selectedLanguage);
    const langObj = INDIAN_LANGUAGES.find(l => l.code === targetLang);
    utterance.lang = langObj?.speechCode || 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingMessageId(null);
    utterance.onerror = () => setSpeakingMessageId(null);

    window.speechSynthesis.speak(utterance);
    setSpeakingMessageId(msgId);
  };

  const handleCopyMessage = async (msgId: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(msgId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.warn('Failed to copy message:', err);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping || isStreaming) return;

    if (showPromptsDrawer) setShowPromptsDrawer(false);

    let effectiveLang = selectedLanguage;
    if (selectedLanguage === 'auto') {
      const detected = detectIndianLanguage(query);
      effectiveLang = detected.code;
    }

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      languageCode: effectiveLang
    };

    const assistantMsgId = `fw-${Date.now() + 1}`;
    const initialAssistantMsg: ChatMessage = {
      id: assistantMsgId,
      sender: 'sarthi',
      text: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true,
      languageCode: effectiveLang
    };

    setMessages((prev) => [...prev, userMsg, initialAssistantMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);
    setIsStreaming(true);

    abortControllerRef.current = new AbortController();

    try {
      const response = await askSarthiAI(query, messages, {
        language: effectiveLang,
        signal: abortControllerRef.current.signal,
        onChunk: (accumulated) => {
          setIsTyping(false);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId
                ? { ...m, text: accumulated, isStreaming: true }
                : m
            )
          );
        }
      });

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? { ...response, id: assistantMsgId, isStreaming: false }
            : m
        )
      );
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsgId
              ? {
                  ...m,
                  text: 'Namaste! A connection issue occurred. Please try planning your trip below:',
                  isStreaming: false,
                  error: true,
                  suggestedActions: [
                    { label: '✨ Launch Trip Planner', actionType: 'plan' }
                  ]
                }
              : m
          )
        );
      }
    } finally {
      setIsTyping(false);
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleRetryLast = () => {
    const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
    if (lastUserMsg) {
      handleSendMessage(lastUserMsg.text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleActionClick = (action: { label: string; actionType: string; payload?: string }) => {
    if (action.actionType === 'prompt' && action.payload) {
      handleSendMessage(action.payload);
    } else if (action.actionType === 'plan') {
      onOpenTripPlanner();
      if (window.innerWidth < 768) setIsOpen(false);
    } else if (action.actionType === 'map') {
      onNavigateTab('map');
      if (window.innerWidth < 768) setIsOpen(false);
    } else if (action.actionType === 'marketplace') {
      onNavigateTab('marketplace');
      if (window.innerWidth < 768) setIsOpen(false);
    } else if (action.actionType === 'explore') {
      onNavigateTab('explore');
      if (window.innerWidth < 768) setIsOpen(false);
    }
  };

  const renderFormattedMarkdown = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-bold text-xs sm:text-sm text-stone-900 font-serif mt-2 mb-1 flex items-center gap-1.5 border-l-3 border-[#2D5224] pl-2 bg-emerald-50/60 py-0.5 rounded-r">
            <span>🌿</span>
            <span>{line.replace('### ', '')}</span>
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="font-extrabold text-xs sm:text-sm text-[#2D5224] font-serif mt-3 mb-1 border-b border-stone-200 pb-0.5">
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('* ') || line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-0.5 text-xs text-stone-700 leading-relaxed pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] shrink-0 mt-1.5" />
            <span>{formatBold(line.substring(2))}</span>
          </div>
        );
      }
      const numberMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numberMatch) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-xs text-stone-700 leading-relaxed pl-1">
            <span className="w-4 h-4 rounded-full bg-amber-100 text-[#8F4316] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              {numberMatch[1]}
            </span>
            <span>{formatBold(numberMatch[2])}</span>
          </div>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-3 border-amber-500 pl-2 my-1 text-xs italic text-stone-700 bg-amber-50/80 py-1 rounded-r">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-1" />;
      }
      return (
        <p key={idx} className="text-xs text-stone-800 leading-relaxed">
          {formatBold(line)}
        </p>
      );
    });
  };

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-stone-950">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const filteredPrompts = selectedPromptCategory === 'all'
    ? PROMPT_SUGGESTIONS
    : PROMPT_SUGGESTIONS.filter((p) => p.category === selectedPromptCategory);

  return (
    <>
      {/* 1. FLOATING LAUNCHER BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 animate-bounceOnce">
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#2D5224] to-[#1e3c17] hover:from-[#23421c] hover:to-[#172f12] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-amber-300/40 cursor-pointer"
            aria-label="Open SARTHI AI Chatbot"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden border border-amber-300">
                <img src="/sarthi-ai-logo.png" alt="SARTHI" className="w-full h-full object-contain" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#2D5224] animate-pulse" />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold font-serif tracking-wide text-white group-hover:text-amber-200 transition-colors">
                Ask SARTHI AI
              </span>
              <span className="text-[10px] text-emerald-100 font-medium line-clamp-1">
                22 Indian Languages • 0-100 Impact Score
              </span>
            </div>

            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse ml-1" />
          </button>
        </div>
      )}

      {/* 2. CHAT PANEL / FULLSCREEN MODAL */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-in-out flex flex-col shadow-2xl border border-stone-200/90 overflow-hidden bg-white ${
            isExpanded
              ? 'inset-0 sm:inset-4 sm:rounded-3xl'
              : 'bottom-0 right-0 w-full sm:bottom-6 sm:right-6 sm:w-[420px] h-[92vh] sm:h-[620px] rounded-t-3xl sm:rounded-3xl'
          }`}
        >
          {/* STICKY HEADER */}
          <div className="bg-[#FAF7F0] p-3.5 border-b border-stone-200/90 flex items-center justify-between shrink-0 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5224] via-amber-400 to-[#C85A32]" />

            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-white p-0.5 flex items-center justify-center border border-amber-300 shadow-2xs overflow-hidden">
                  <img src="/sarthi-ai-logo.png" alt="SARTHI" className="w-full h-full object-contain" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-xs sm:text-sm text-stone-900 font-serif">
                    SARTHI AI
                  </h3>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold uppercase">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-stone-600 truncate max-w-[170px]">
                  Pan-India Sustainable Travel
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              {/* Language Selector Button */}
              <button
                onClick={() => setIsLanguageModalOpen(true)}
                className="px-2 py-1 rounded-lg bg-white hover:bg-stone-100 text-stone-800 text-[11px] font-semibold flex items-center gap-1 border border-stone-200 cursor-pointer shadow-2xs"
                title="Change Language"
              >
                <span>{currentLangConfig.flag}</span>
                <span className="max-w-[60px] truncate">{currentLangConfig.name}</span>
                <ChevronDown className="w-2.5 h-2.5 text-stone-500" />
              </button>

              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-stone-200/70 text-stone-600 transition-colors cursor-pointer"
                title="Clear Chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-stone-200/70 text-stone-600 transition-colors hidden sm:block cursor-pointer"
                title={isExpanded ? 'Minimize' : 'Maximize'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-stone-200/70 text-stone-600 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SUGGESTED PROMPTS DRAWER */}
          <div className="bg-[#FAF7F0]/80 border-b border-stone-200/70 px-3 py-2 shrink-0">
            <div className="flex items-center justify-between text-[11px]">
              <button
                onClick={() => setShowPromptsDrawer(!showPromptsDrawer)}
                className="text-stone-700 hover:text-[#2D5224] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#2D5224]" />
                <span>{labels.curatedTopics}</span>
                <span>{showPromptsDrawer ? '▲' : '▼'}</span>
              </button>
              <span className="text-[10px] text-stone-400">Tap to ask</span>
            </div>

            {showPromptsDrawer && (
              <div className="mt-2 space-y-2 animate-fadeIn max-h-48 overflow-y-auto pr-1">
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                  {CHAT_CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedPromptCategory(c.id)}
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 cursor-pointer ${
                        selectedPromptCategory === c.id
                          ? 'bg-[#2D5224] text-white'
                          : 'bg-white text-stone-700 border border-stone-200'
                      }`}
                    >
                      <span>{c.icon}</span> <span>{c.label}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {filteredPrompts.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSendMessage(p.prompt)}
                      className="bg-white hover:bg-emerald-50 p-2 rounded-xl border border-stone-200 text-left text-[11px] font-medium text-stone-800 hover:text-[#2D5224] transition-colors flex items-center justify-between cursor-pointer shadow-2xs"
                    >
                      <span className="truncate pr-1">{p.icon} {p.label}</span>
                      <ArrowRight className="w-3 h-3 shrink-0 text-stone-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* MESSAGE STREAM */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#FCFBF8]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} transition-all`}
              >
                {msg.sender === 'user' ? (
                  <div className="max-w-[85%] bg-[#204D35] text-white rounded-2xl rounded-tr-xs p-3 shadow-2xs space-y-0.5">
                    <p className="text-xs leading-relaxed whitespace-pre-wrap font-medium">
                      {msg.text}
                    </p>
                    <div className="text-[9px] text-emerald-200/70 text-right">
                      {msg.timestamp}
                    </div>
                  </div>
                ) : (
                  <div className="w-full bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-2xs border border-stone-200/90 space-y-2">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-stone-900 font-serif">SARTHI AI</span>
                        {msg.source && (
                          <span className="text-[9px] px-1.5 py-0.2 bg-emerald-50 text-[#204D35] rounded font-mono border border-emerald-200">
                            {msg.source === 'gemini' ? 'Google Gemini Flash' : 'SARTHI Verified'}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleCopyMessage(msg.id, msg.text)}
                          className="p-1 rounded hover:bg-stone-100 text-stone-400 hover:text-stone-700 cursor-pointer"
                          title="Copy"
                        >
                          {copiedMessageId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                        <button
                          onClick={() => handleSpeakMessage(msg.id, msg.text, msg.languageCode)}
                          className="p-1 rounded hover:bg-stone-100 text-stone-400 hover:text-stone-700 cursor-pointer"
                          title="Read Aloud"
                        >
                          {speakingMessageId === msg.id ? <VolumeX className="w-3 h-3 text-amber-600" /> : <Volume2 className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    <div className="text-stone-800 text-xs leading-relaxed space-y-1">
                      {msg.text ? (
                        renderFormattedMarkdown(msg.text)
                      ) : (
                        <div className="flex items-center gap-1 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce" />
                        </div>
                      )}

                      {msg.isStreaming && (
                        <span className="inline-block w-1.5 h-3 bg-[#2D5224] ml-1 animate-pulse align-middle" />
                      )}
                    </div>

                    {msg.suggestedActions && msg.suggestedActions.length > 0 && !msg.isStreaming && (
                      <div className="pt-1.5 border-t border-stone-100 flex flex-wrap gap-1.5">
                        {msg.suggestedActions.map((act, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleActionClick(act)}
                            className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] hover:bg-emerald-50 text-stone-800 hover:text-[#2D5224] text-[11px] font-semibold border border-stone-200 transition-colors cursor-pointer"
                          >
                            {act.label}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="text-[9px] text-stone-400 text-right">
                      {msg.timestamp}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="p-2.5 bg-white border-t border-stone-200/90 shrink-0 space-y-1.5">
            {isStreaming ? (
              <div className="flex justify-center">
                <button
                  onClick={handleStopGeneration}
                  className="px-3 py-1 rounded-full bg-stone-900 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm hover:bg-stone-800 transition-all cursor-pointer"
                >
                  <Square className="w-2.5 h-2.5 fill-current" />
                  <span>{labels.stop}</span>
                </button>
              </div>
            ) : messages.length > 1 && (
              <div className="flex justify-end pr-1">
                <button
                  onClick={handleRetryLast}
                  disabled={isTyping}
                  className="text-[10px] text-stone-400 hover:text-stone-700 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>{labels.retry}</span>
                </button>
              </div>
            )}

            <div className="bg-[#FAF7F0] rounded-2xl p-1.5 border border-stone-200 focus-within:border-[#2D5224] focus-within:ring-1 focus-within:ring-emerald-200 transition-all flex items-end gap-1.5">
              <button
                onClick={handleToggleVoiceInput}
                className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'text-stone-500 hover:bg-white'
                }`}
                title={isListening ? labels.listening : labels.voiceInput}
              >
                {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              </button>

              <textarea
                ref={textareaRef}
                rows={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={labels.inputPlaceholder}
                maxLength={2000}
                className="flex-1 bg-transparent border-0 resize-none text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none py-1.5 px-1 max-h-28 leading-relaxed"
              />

              {isStreaming ? (
                <button
                  onClick={handleStopGeneration}
                  className="p-2 rounded-xl bg-stone-900 text-white cursor-pointer shrink-0"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              ) : (
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 rounded-xl bg-[#2D5224] text-white hover:bg-[#23421c] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[9px] text-stone-400 px-1">
              <span>Verified Pan-India planning estimates</span>
              <span>Enter ↵ to send</span>
            </div>
          </div>

          {/* SEARCHABLE LANGUAGE SELECTOR MODAL */}
          {isLanguageModalOpen && (
            <div className="absolute inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-fadeIn">
              <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col max-h-[80%]">
                <div className="p-3 border-b border-stone-100 flex items-center justify-between bg-[#FAF7F0]">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#2D5224]" />
                    <span className="text-xs font-bold text-stone-900 font-serif">Select Language</span>
                  </div>
                  <button
                    onClick={() => setIsLanguageModalOpen(false)}
                    className="p-1 rounded-lg hover:bg-stone-200 text-stone-500 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-2 border-b border-stone-100">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      value={languageSearch}
                      onChange={(e) => setLanguageSearch(e.target.value)}
                      placeholder={labels.searchLanguage}
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 focus:border-[#2D5224] focus:outline-none"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="p-2 overflow-y-auto space-y-1 flex-1">
                  {filteredLanguages.map((lang) => {
                    const isSelected = selectedLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsLanguageModalOpen(false);
                        }}
                        className={`w-full p-2 rounded-xl text-left border text-xs flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-[#2D5224] bg-emerald-50 text-[#2D5224] font-bold'
                            : 'border-transparent hover:bg-stone-100 text-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <div>
                            <div>{lang.name}</div>
                            <div className="text-[10px] text-stone-500">{lang.nativeName}</div>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5224]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
