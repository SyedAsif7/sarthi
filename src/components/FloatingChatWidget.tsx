import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Compass, 
  PhoneCall, 
  HelpCircle, 
  Calendar, 
  Bot, 
  User, 
  ArrowRight,
  Maximize2,
  RotateCcw,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { askSarthiAI } from '../services/chatService';
import { ChatMessage } from '../types';

interface FloatingChatWidgetProps {
  onNavigateTab: (tab: string) => void;
  onOpenTripPlanner: () => void;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onNavigateTab,
  onOpenTripPlanner,
}) => {
  const [isOpen, setIsOpen] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth > 768;
  });
  const [selectedLang, setSelectedLang] = useState<'en' | 'hi' | 'sat' | 'ho' | 'mun'>('en');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const initialWelcomeText = `Johar! 🙏 I am **Sarthi**, your AI travel companion for Jharkhand.\n\nI can help you create budget itineraries, find secret waterfalls, or connect with verified local tribal guides. What would you like to explore today?`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'fw-1',
      sender: 'sarthi',
      text: initialWelcomeText,
      timestamp: 'Just now',
      suggestedActions: [
        { label: '🗺️ 3-Day Trip under ₹10k', actionType: 'plan' },
        { label: '🌊 Top Waterfalls', actionType: 'explore', payload: 'waterfalls' },
        { label: '🏹 Tribal Culture', actionType: 'marketplace', payload: 'culture' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const languages = [
    { id: 'en', label: 'English', flag: '🇬🇧' },
    { id: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { id: 'sat', label: 'संथाली', flag: '🇮🇳' },
    { id: 'ho', label: 'हो', flag: '🇮🇳' },
    { id: 'mun', label: 'मुंडारी', flag: '🇮🇳' },
  ];

  const quickPillCategories = [
    { id: 'waterfalls', label: '🌊 Best Waterfalls', prompt: 'Best waterfalls near Ranchi?' },
    { id: 'itinerary', label: '🗺️ Plan 3-Day Trip', prompt: 'Plan a 3-day trip under ₹10,000' },
    { id: 'culture', label: '🏹 Tribal Culture', prompt: 'Where can I experience tribal culture?' },
    { id: 'food', label: '🍲 Local Food & Dhuska', prompt: 'What are the traditional local foods in Jharkhand?' },
    { id: 'homestays', label: '🏡 Eco Homestays', prompt: 'Recommend good homestays in Netarhat and Betla' },
    { id: 'safety', label: '🛡️ Safety & Helplines', prompt: 'What are the emergency tourist helplines in Jharkhand?' },
  ];

  const handleLanguageChange = (langId: any) => {
    setSelectedLang(langId);
    let greeting = `Johar! How can I help you explore Jharkhand?`;
    if (langId === 'hi') greeting = `जोहार! 🙏 सार्थी में आपका स्वागत है। झारखंड यात्रा के लिए आप क्या जानना चाहते हैं?`;
    if (langId === 'sat') greeting = `ᱡᱚᱦᱟᱨ (Johar)! ᱥᱟᱨᱛᱷᱤ ᱨᱮ ᱟᱯᱮᱭᱟᱜ ᱥᱟᱜᱩᱱ ᱫᱟᱨᱟᱢ᱾ ᱪᱮᱫ ᱜᱚᱲᱚ ᱫᱚᱨᱠᱟᱨ?`;
    if (langId === 'ho') greeting = `ᱡᱚᱦᱟᱨ (Johar)! Welcome to Ho cultural trails. How may I assist your trip?`;
    if (langId === 'mun') greeting = `जोहार! मुंडारी संस्कृति एवं जलप्रपातों की यात्रा के लिए आपका स्वागत है।`;

    setMessages((prev) => [
      ...prev,
      {
        id: `lang-${Date.now()}`,
        sender: 'sarthi',
        text: greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'sarthi',
        text: initialWelcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: '🗺️ 3-Day Trip under ₹10k', actionType: 'plan' },
          { label: '🌊 Top Waterfalls', actionType: 'explore', payload: 'waterfalls' }
        ]
      }
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
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
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'sarthi',
          text: `Johar! Dassam, Hundru, and Netarhat are our top recommendations right now. Click "Suggest Itinerary" to create a custom budget plan!`,
          timestamp: 'Just now',
          suggestedActions: [
            { label: '✨ Launch Trip Planner', actionType: 'plan' }
          ]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: { label: string; actionType: string; payload?: string }) => {
    if (action.actionType === 'plan') {
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

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end select-none">
      
      {/* FLOATING CHAT CARD */}
      {isOpen && (
        <div className="mb-2 sm:mb-3 w-[calc(100vw-1.5rem)] sm:w-[420px] max-w-[420px] h-[70vh] sm:h-[540px] max-h-[580px] bg-[#FAF8F4] rounded-3xl shadow-2xl border border-stone-200/90 flex flex-col overflow-hidden animate-fadeIn relative">
          
          {/* 1. HEADER WITH BOT STATUS & CONTROLS */}
          <div className="bg-[#2D5224] px-4 py-3 text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#243E1B] flex items-center justify-center font-bold text-sm shadow-sm">
                  🌿
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#2D5224]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white flex items-center gap-1.5 font-serif">
                  <span>Sarthi AI</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-stone-950 font-bold uppercase">
                    SIH 2026
                  </span>
                </h4>
                <p className="text-[10px] text-stone-200">
                  Intelligent Travel Assistant
                </p>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset Conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  onNavigateTab('assistant');
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Expand to Full View"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. NATIVE LANGUAGE SELECTOR STRIP */}
          <div className="bg-[#EFECE1] px-3 py-1.5 border-b border-[#E0D9C8] flex items-center justify-between text-[11px] shrink-0">
            <span className="text-stone-500 font-semibold text-[10px] uppercase">Language:</span>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {languages.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleLanguageChange(l.id)}
                  className={`px-2 py-0.5 rounded-full font-medium transition-all ${
                    selectedLang === l.id
                      ? 'bg-[#2D5224] text-white font-bold shadow-xs'
                      : 'text-stone-700 hover:bg-[#E2DBD0]'
                  }`}
                >
                  <span>{l.flag} {l.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. CATEGORIZED QUICK PILLS */}
          <div className="p-2.5 bg-[#FAF7F0] border-b border-[#E8E2D5] shrink-0">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
              {quickPillCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSendMessage(c.prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white text-[10px] font-bold whitespace-nowrap shrink-0 transition-transform active:scale-95 shadow-xs"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. MESSAGES CONVERSATION SCROLL AREA */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs bg-[#FAF8F4]">
            {messages.map((m) => {
              const isSarthi = m.sender === 'sarthi';

              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${isSarthi ? 'justify-start' : 'justify-end'}`}
                >
                  {isSarthi && (
                    <div className="w-6 h-6 rounded-full bg-[#2D5224] text-amber-300 flex items-center justify-center shrink-0 text-[10px] font-bold shadow-xs mt-0.5">
                      🌿
                    </div>
                  )}

                  <div
                    className={`max-w-[86%] rounded-2xl p-3 leading-relaxed ${
                      isSarthi
                        ? 'bg-white text-stone-800 border border-stone-200/90 shadow-soft'
                        : 'bg-[#2D5224] text-white font-medium rounded-br-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line text-xs">{m.text}</p>

                    {/* Action buttons attached to AI response */}
                    {m.suggestedActions && m.suggestedActions.length > 0 && (
                      <div className="pt-2 mt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                        {m.suggestedActions.map((act, i) => (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act)}
                            className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-[#2D5224] text-stone-800 hover:text-white font-semibold text-[10px] transition-colors flex items-center gap-1"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    )}

                    <span className={`text-[9px] block text-right mt-1.5 ${isSarthi ? 'text-stone-400' : 'text-stone-300'}`}>
                      {m.timestamp}
                    </span>
                  </div>

                  {!isSarthi && (
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      <User className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-stone-500 text-[11px] p-2 bg-white rounded-xl w-fit shadow-xs border border-stone-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5224] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 font-medium text-xs">Sarthi is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 5. INPUT BAR & CONTROLS */}
          <div className="p-2.5 bg-white border-t border-stone-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-[#F5F2EB] rounded-full px-3.5 py-1.5 border border-[#E0D9C8] focus-within:border-[#2D5224] transition-colors"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Sarthi anything about Jharkhand..."
                className="flex-1 bg-transparent text-xs font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-7 h-7 rounded-full bg-[#2D5224] hover:bg-[#203D19] text-white flex items-center justify-center transition-all disabled:opacity-40 shrink-0 active:scale-95"
              >
                <Send className="w-3.5 h-3.5 -ml-0.5" />
              </button>
            </form>
            <p className="text-[9px] text-center text-stone-400 mt-1.5">
              🌿 Sarthi AI • Offline Smart Engine + Gemini API Ready • SIH 2026
            </p>
          </div>

        </div>
      )}

      {/* CIRCULAR GREEN FLOATING TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D5224] hover:bg-[#203D19] text-white flex items-center justify-center shadow-xl shadow-[#2D5224]/30 transition-all hover:scale-105 active:scale-95 group relative"
        aria-label="Toggle Sarthi AI Assistant"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#2D5224]" />
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C85A32] border-2 border-white flex items-center justify-center text-[9px] font-bold text-white animate-pulse">
            1
          </span>
        )}
      </button>

    </div>
  );
};
