import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Send, 
  Sparkles, 
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
  X,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  ArrowRight
} from 'lucide-react';
import { ChatMessage } from '../types';
import { askSarthiAI, loadChatSession, saveChatSession, clearChatSession } from '../services/chatService';
import { INDIAN_LANGUAGES, LanguageConfig, getUILabels, detectIndianLanguage } from '../data/languages';

interface ChatAssistantPageProps {
  onNavigateTab: (tab: string) => void;
  onExploreFilter?: (cat: string) => void;
  contextItineraryPrompt?: string;
}

interface PromptTopic {
  id: string;
  category: 'itinerary' | 'homestay' | 'culture' | 'impact' | 'safety';
  icon: string;
  label: string;
  prompt: string;
  desc: string;
}

const REGIONAL_QUICK_CARDS = [
  {
    region: 'Kerala',
    icon: '🌴',
    title: 'Kerala Backwaters & Hills',
    prompt: 'Suggest a sustainable 3-day itinerary for Kerala backwaters in Munroe Island and spice plantation homestays in Wayanad',
    tag: 'Solar Boats & Coir Co-ops'
  },
  {
    region: 'Rajasthan',
    icon: '🏰',
    title: 'Rajasthan Desert & Crafts',
    prompt: 'Plan an eco-friendly cultural trip to Rajasthan covering Jaisalmer, Khuri mud jhopas, and block printing artisan hamlets',
    tag: 'GI Crafts & Heritage'
  },
  {
    region: 'Maharashtra',
    icon: '🏛️',
    title: 'Maharashtra Heritage & Nature',
    prompt: 'Tell me about Ajanta and Ellora caves with electric bus transit, Kaas biodiversity plateau, and Warli indigenous art in Maharashtra',
    tag: 'UNESCO Caves & Warli'
  },
  {
    region: 'Himachal Pradesh',
    icon: '🏔️',
    title: 'Himachal & Spiti High Altitude',
    prompt: 'Create a low-carbon 4-day travel plan for Spiti Valley with passive-solar homestays and high altitude acclimatization',
    tag: 'Solar Stays & Gompas'
  },
  {
    region: 'Northeast India',
    icon: '🌿',
    title: 'Meghalaya & Assam Rainforests',
    prompt: 'How to plan an eco-tour to Cherrapunji living root bridges in Meghalaya and Majuli river island in Assam?',
    tag: 'Living Bridges & Satras'
  }
];

const TOPIC_CATEGORIES = [
  { id: 'all', label: 'All Topics', icon: '✨' },
  { id: 'itinerary', label: 'Eco Circuits', icon: '🗺️' },
  { id: 'homestay', label: 'Verified Homestays', icon: '🏡' },
  { id: 'culture', label: 'Living Crafts & GI', icon: '🎨' },
  { id: 'impact', label: 'SARTHI Impact Score', icon: '🌱' },
  { id: 'safety', label: 'Safety & Helplines', icon: '🛡️' },
];

const CURATED_PROMPTS: PromptTopic[] = [
  {
    id: 'cp-1',
    category: 'itinerary',
    icon: '🏛️',
    label: 'Maharashtra World Heritage Circuit',
    prompt: 'Plan a 3-day sustainable heritage trip to Ajanta and Ellora caves in Maharashtra with electric bus transit',
    desc: 'UNESCO rock-cut architecture & Chhatrapati Sambhajinagar circuit'
  },
  {
    id: 'cp-2',
    category: 'itinerary',
    icon: '🏔️',
    label: 'Spiti 4-Day Eco Circuit',
    prompt: 'Plan an eco-friendly 4-day itinerary in Spiti Valley with high altitude acclimatization',
    desc: 'Langza fossil terraces, Key Gompa & solar homestays'
  },
  {
    id: 'cp-3',
    category: 'itinerary',
    icon: '🌴',
    label: 'Kerala Backwater Low-Carbon',
    prompt: 'Suggest a low-carbon 3-day itinerary across Kerala backwaters and silent canoe trails',
    desc: 'Munroe Island silent punting & organic coir co-ops'
  },
  {
    id: 'cp-4',
    category: 'itinerary',
    icon: '💰',
    label: 'Budget Trip Under ₹10,000',
    prompt: 'Create a 3-day budget travel plan under ₹10,000 using Indian Railways',
    desc: 'Low-carbon railway transit and verified village stays'
  },
  {
    id: 'cp-5',
    category: 'homestay',
    icon: '☀️',
    label: 'Spiti Passive-Solar Stays',
    prompt: 'Recommend certified passive-solar homestays in Spiti Valley (Kaza and Kibber)',
    desc: 'Zero-waste local family lodges with compost systems'
  },
  {
    id: 'cp-6',
    category: 'homestay',
    icon: '🛶',
    label: 'Munroe Island Canoe Stays',
    prompt: 'Tell me about community-run eco homestays in Munroe Island, Kerala',
    desc: 'Silent canoe included, organic red-rice breakfast'
  },
  {
    id: 'cp-7',
    category: 'culture',
    icon: '🖌️',
    label: 'Kutch Rogan & Sohrai Murals',
    prompt: 'Where can I meet master Rogan art and Sohrai mural craftspeople in India?',
    desc: 'Castor oil mineral art & GI-tagged ochre frescoes'
  },
  {
    id: 'cp-8',
    category: 'culture',
    icon: '📜',
    label: 'Odisha Pattachitra Scrolls',
    prompt: 'How do I visit Raghurajpur heritage craft village in Odisha for Pattachitra?',
    desc: 'Ancient palm leaf etching and natural lampblack art'
  },
  {
    id: 'cp-9',
    category: 'impact',
    icon: '🌱',
    label: 'How Impact Score Works',
    prompt: 'How does the SARTHI Impact Score assess carbon, community, and conservation out of 100 points?',
    desc: '0-100 explainable scoring across 5 verifiable categories'
  },
  {
    id: 'cp-10',
    category: 'safety',
    icon: '📞',
    label: '1363 National Tourist Helpline',
    prompt: 'How does the 1363 24x7 multi-lingual tourist helpline assist travelers in India?',
    desc: 'Ministry of Tourism multi-lingual emergency & dispute aid'
  },
  {
    id: 'cp-11',
    category: 'impact',
    icon: '🚆',
    label: 'Train vs SUV Carbon Savings',
    prompt: 'How much carbon do I save by taking Indian Railways compared to private SUVs?',
    desc: 'Cutting per-passenger emissions by ~75% across corridors'
  },
  {
    id: 'cp-12',
    category: 'culture',
    icon: '🎨',
    label: 'Warli Art in Maharashtra',
    prompt: 'Where can I meet indigenous Warli tribal artists and learn traditional painting in Maharashtra?',
    desc: 'Palghar & Dahanu living traditions with GI tag'
  }
];

export const ChatAssistantPage: React.FC<ChatAssistantPageProps> = ({
  onNavigateTab,
  onExploreFilter,
  contextItineraryPrompt,
}) => {
  // Messages state with session restoration
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadChatSession());
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('auto');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [languageSearch, setLanguageSearch] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showPrompts, setShowPrompts] = useState(true);

  const abortControllerRef = useRef<AbortController | null>(null);
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Active UI labels based on language
  const currentLangConfig = useMemo(() => {
    return INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];
  }, [selectedLanguage]);

  const labels = useMemo(() => {
    return getUILabels(selectedLanguage === 'auto' ? 'en' : selectedLanguage);
  }, [selectedLanguage]);

  // Filtered languages for modal search
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isStreaming]);

  // Persist session whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      saveChatSession(messages);
    }
  }, [messages]);

  // Handle incoming context prompt from Trip Planner
  useEffect(() => {
    if (contextItineraryPrompt) {
      handleSendMessage(contextItineraryPrompt);
    }
  }, [contextItineraryPrompt]);

  // Clean up audio and recognition on unmount
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

  // Textarea auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [inputValue]);

  const handleResetChat = () => {
    if (confirm('Are you sure you want to clear your current conversation history?')) {
      clearChatSession();
      setMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: 'sarthi',
          text: currentLangConfig.greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: '✨ Plan an Eco Trip', actionType: 'plan' },
            { label: '🏛️ Maharashtra World Heritage', actionType: 'prompt', payload: 'Tell me about Ajanta and Ellora caves in Maharashtra' },
            { label: '🌴 Kerala Backwater Homestays', actionType: 'explore', payload: 'Kerala' }
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
      console.warn('Failed to copy text:', err);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping || isStreaming) return;

    // Detect language if auto
    let effectiveLang = selectedLanguage;
    if (selectedLanguage === 'auto') {
      const detected = detectIndianLanguage(query);
      effectiveLang = detected.code;
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      languageCode: effectiveLang
    };

    const assistantMsgId = `sarthi-${Date.now() + 1}`;
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
          setIsTyping(false); // first chunk arrived
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId
                ? { ...m, text: accumulated, isStreaming: true }
                : m
            )
          );
        }
      });

      // Finalize message with complete metadata
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
                  text: 'Namaste! A temporary connection issue occurred. Incredible sustainable Indian destinations await—try the options below:',
                  isStreaming: false,
                  error: true,
                  suggestedActions: [
                    { label: '✨ Open AI Trip Planner', actionType: 'plan' },
                    { label: '🗺️ Explore Map', actionType: 'map' }
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

  // Safe and rich Markdown formatting with Indian script support
  const renderFormattedMarkdown = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-bold text-sm sm:text-base text-stone-900 font-serif mt-3 mb-1.5 flex items-center gap-1.5 border-l-4 border-[#2D5224] pl-2.5 bg-emerald-50/70 py-1 rounded-r-xl">
            <span>🌿</span>
            <span>{line.replace('### ', '')}</span>
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="font-extrabold text-base sm:text-lg text-[#2D5224] font-serif mt-4 mb-1.5 border-b border-stone-200 pb-1">
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('* ') || line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-sm text-stone-700 leading-relaxed pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] shrink-0 mt-2" />
            <span>{formatBold(line.substring(2))}</span>
          </div>
        );
      }
      const numberMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numberMatch) {
        return (
          <div key={idx} className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-stone-700 leading-relaxed pl-1">
            <span className="w-5 h-5 rounded-full bg-amber-100 text-[#8F4316] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {numberMatch[1]}
            </span>
            <span>{formatBold(numberMatch[2])}</span>
          </div>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-amber-500 pl-3 my-2 text-xs sm:text-sm italic text-stone-700 bg-amber-50/80 py-1.5 rounded-r-xl">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-1.5" />;
      }
      return (
        <p key={idx} className="text-xs sm:text-sm text-stone-800 leading-relaxed">
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

  const filteredPrompts = activeCategory === 'all'
    ? CURATED_PROMPTS
    : CURATED_PROMPTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-20 animate-fadeIn font-sans">
      
      {/* 1. STICKY MODERN CHATGPT HEADER */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-stone-200/90 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5224] via-amber-400 to-[#C85A32]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF9F5] p-1 flex items-center justify-center shadow-sm border border-[#D4AF37] overflow-hidden">
                <img src="/sarthi-ai-logo.png" alt="SARTHI AI" className="w-full h-full object-contain" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                <h1 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
                  {labels.appTitle}
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-[#B48216] border border-amber-300 text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1">
                  <span>🇮🇳</span>
                  <span>Pan-India</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#204D35] text-[10px] font-extrabold uppercase tracking-wide border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                  {labels.online}
                </span>
              </div>
              <p className="text-xs text-stone-600 line-clamp-1">
                {labels.subtitle}
              </p>
            </div>
          </div>

          {/* Controls: Searchable Language Selector + Clear Chat */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsLanguageModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-stone-200 cursor-pointer shadow-2xs"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#204D35]" />
              <span className="text-sm">{currentLangConfig.flag}</span>
              <span className="max-w-[100px] truncate">{currentLangConfig.name}</span>
              <ChevronDown className="w-3 h-3 text-stone-500" />
            </button>

            <button
              onClick={handleResetChat}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-stone-200 cursor-pointer shadow-2xs"
              title={labels.clearChat}
            >
              <Trash2 className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">{labels.clearChat}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. REGIONAL QUICK SUGGESTION CARDS (Kerala, Rajasthan, Maharashtra, Himachal, Northeast) */}
      <div className="bg-[#FAF9F5] p-3.5 rounded-3xl border border-[#E8E2D5] space-y-2.5 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              Popular Sustainable Regions
            </span>
          </div>
          <span className="text-[10px] text-stone-500">Tap to explore</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {REGIONAL_QUICK_CARDS.map((rc) => (
            <button
              key={rc.region}
              onClick={() => handleSendMessage(rc.prompt)}
              disabled={isTyping || isStreaming}
              className="bg-white hover:bg-emerald-50/60 p-2.5 rounded-2xl border border-stone-200 hover:border-emerald-400 text-left transition-all shadow-2xs cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <span className="text-lg">{rc.icon}</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-[#204D35] truncate mt-1">
                  {rc.region}
                </p>
                <p className="text-[10px] text-stone-500 line-clamp-1">
                  {rc.tag}
                </p>
              </div>
              <span className="text-[9px] text-[#204D35] font-semibold mt-1 group-hover:underline">
                Explore →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. CURATED TOPICS DRAWER (TOGGLEABLE) */}
      <div className="bg-[#FAF9F5] p-4 rounded-3xl border border-[#E8E2D5] space-y-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#204D35]" />
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              {labels.curatedTopics}
            </span>
          </div>
          <button
            onClick={() => setShowPrompts(!showPrompts)}
            className="text-[11px] text-[#204D35] hover:underline font-semibold cursor-pointer"
          >
            {showPrompts ? 'Hide Suggestions ▲' : 'Show Suggestions ▼'}
          </button>
        </div>

        {showPrompts && (
          <>
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {TOPIC_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all flex items-center gap-1 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#204D35] text-white shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Prompt Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              {filteredPrompts.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSendMessage(item.prompt)}
                  disabled={isTyping || isStreaming}
                  className="bg-white hover:bg-emerald-50/50 p-3 rounded-2xl border border-stone-200/80 hover:border-emerald-300 text-left transition-all group flex flex-col justify-between gap-1 shadow-2xs disabled:opacity-50 cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-base p-1.5 bg-[#FAF7F0] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-stone-900 group-hover:text-[#2D5224] line-clamp-1">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-stone-400 group-hover:text-[#2D5224] pt-1 border-t border-stone-100">
                    <span>{labels.tapToAsk}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 3. CONVERSATION STREAM */}
      <div className="space-y-4 min-h-[340px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} transition-all`}
          >
            {msg.sender === 'user' ? (
              // User Chat Bubble
              <div className="max-w-[85%] sm:max-w-[75%] bg-[#204D35] text-white rounded-3xl rounded-tr-md p-4 shadow-sm space-y-1">
                <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-medium">
                  {msg.text}
                </p>
                <div className="text-[10px] text-emerald-200/70 text-right">
                  {msg.timestamp}
                </div>
              </div>
            ) : (
              // SARTHI Assistant Message Card
              <div className="w-full bg-white rounded-3xl rounded-tl-md p-5 shadow-xs border border-stone-200/90 space-y-3 transition-all hover:border-stone-300">
                {/* Assistant Message Header */}
                <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] p-0.5 border border-[#D4AF37] flex items-center justify-center overflow-hidden">
                      <img src="/sarthi-ai-logo.png" alt="SARTHI" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 font-serif">
                        SARTHI AI
                      </span>
                      {msg.source && (
                        <span className="ml-1.5 text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 text-[#204D35] font-mono border border-emerald-200">
                          {msg.source === 'gemini' ? 'Google Gemini Flash' : 'SARTHI Verified Engine'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions: Copy, Read Aloud */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopyMessage(msg.id, msg.text)}
                      className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-xs transition-colors cursor-pointer"
                      title={copiedMessageId === msg.id ? labels.copied : labels.copy}
                    >
                      {copiedMessageId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => handleSpeakMessage(msg.id, msg.text, msg.languageCode)}
                      className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-xs transition-colors cursor-pointer"
                      title={speakingMessageId === msg.id ? labels.speaking : labels.readAloud}
                    >
                      {speakingMessageId === msg.id ? (
                        <VolumeX className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Formatted Markdown Body */}
                <div className="text-stone-800 text-xs sm:text-sm leading-relaxed space-y-1">
                  {msg.text ? (
                    renderFormattedMarkdown(msg.text)
                  ) : (
                    // Typing dots while awaiting first token
                    <div className="flex items-center gap-1.5 py-2">
                      <span className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce" />
                      <span className="text-xs text-stone-400 ml-2">Consulting pan-India eco-tourism engine...</span>
                    </div>
                  )}

                  {msg.isStreaming && (
                    <span className="inline-block w-1.5 h-3.5 bg-[#2D5224] ml-1 animate-pulse align-middle" />
                  )}
                </div>

                {/* Suggested Action Buttons */}
                {msg.suggestedActions && msg.suggestedActions.length > 0 && !msg.isStreaming && (
                  <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-2">
                    {msg.suggestedActions.map((act, aIdx) => (
                      <button
                        key={aIdx}
                        onClick={() => handleActionClick(act)}
                        className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-emerald-50 text-stone-800 hover:text-[#2D5224] text-xs font-semibold border border-stone-200 hover:border-emerald-300 transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Timestamp */}
                <div className="text-[10px] text-stone-400 text-right">
                  {msg.timestamp}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 4. CHATGPT-INSPIRED INPUT AREA */}
      <div className="sticky bottom-0 bg-[#faf8f4]/90 backdrop-blur-md pt-2 pb-1 space-y-2">
        {/* Stop Generation or Retry Button */}
        {isStreaming ? (
          <div className="flex justify-center">
            <button
              onClick={handleStopGeneration}
              className="px-4 py-1.5 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center gap-2 shadow-md hover:bg-stone-800 transition-all cursor-pointer animate-fadeIn"
            >
              <Square className="w-3 h-3 fill-current" />
              <span>{labels.stop}</span>
            </button>
          </div>
        ) : messages.length > 1 && (
          <div className="flex justify-end pr-2">
            <button
              onClick={handleRetryLast}
              disabled={isTyping}
              className="text-[11px] text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{labels.retry}</span>
            </button>
          </div>
        )}

        {/* Input Bar Container */}
        <div className="bg-white rounded-3xl p-2 sm:p-2.5 border border-stone-300 shadow-md focus-within:border-[#2D5224] focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
          <div className="flex items-end gap-2">
            {/* Voice Input Button */}
            <button
              onClick={handleToggleVoiceInput}
              className={`p-2.5 rounded-2xl transition-all cursor-pointer shrink-0 ${
                isListening
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'text-stone-500 hover:bg-stone-100 hover:text-stone-800'
              }`}
              title={isListening ? labels.listening : labels.voiceInput}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Multiline Auto-Growing Textarea */}
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={labels.inputPlaceholder}
              maxLength={2000}
              className="flex-1 bg-transparent border-0 resize-none text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none py-2 px-1 max-h-36 leading-relaxed"
            />

            {/* Send / Stop Button */}
            {isStreaming ? (
              <button
                onClick={handleStopGeneration}
                className="p-2.5 rounded-2xl bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shrink-0 shadow-sm"
                title={labels.stop}
              >
                <Square className="w-4 h-4 fill-current" />
              </button>
            ) : (
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 rounded-2xl bg-[#2D5224] text-white hover:bg-[#23421c] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0 shadow-sm"
                title={labels.send}
              >
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Keyboard Helper & Estimates Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 px-2 gap-1 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D5224]" />
            <span>{labels.disclaimer}</span>
          </div>
          <span className="hidden sm:inline text-stone-400">
            Enter ↵ to send • Shift+Enter for newline
          </span>
        </div>
      </div>

      {/* 5. SEARCHABLE 22+ INDIAN LANGUAGES MODAL */}
      {isLanguageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-[#FAF7F0]">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#2D5224]" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 font-serif">
                    {labels.selectLanguage}
                  </h3>
                  <p className="text-[11px] text-stone-600">
                    22 Scheduled Languages of India + English with Script Auto-Detection
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsLanguageModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-stone-200/70 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-stone-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={languageSearch}
                  onChange={(e) => setLanguageSearch(e.target.value)}
                  placeholder={labels.searchLanguage}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 focus:border-[#2D5224] focus:outline-none"
                  autoFocus
                />
              </div>
            </div>

            {/* Languages Grid */}
            <div className="p-4 overflow-y-auto space-y-2 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredLanguages.map((lang) => {
                  const isSelected = selectedLanguage === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        setIsLanguageModalOpen(false);
                      }}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#2D5224] bg-emerald-50/70 ring-1 ring-[#2D5224]'
                          : 'border-stone-200/80 hover:border-emerald-300 hover:bg-[#FAF7F0]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{lang.flag}</span>
                          <span className="text-xs font-bold text-stone-900">
                            {lang.name}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#2D5224]">
                          {lang.nativeName}
                        </p>
                        <p className="text-[10px] text-stone-500 line-clamp-1">
                          {lang.region}
                        </p>
                      </div>

                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#2D5224] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-stone-100 bg-[#FAF7F0] text-center text-[11px] text-stone-500">
              SARTHI automatically translates and matches user language when Auto Detect is chosen.
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
