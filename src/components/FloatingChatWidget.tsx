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
  Maximize2
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
  const [isOpen, setIsOpen] = useState(true); // Open by default just like in screenshot!
  const [selectedLang, setSelectedLang] = useState<'en' | 'hi' | 'sat' | 'ho' | 'mun'>('en');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'fw-1',
      sender: 'sarthi',
      text: `Johar! 🙏 Welcome to Jharkhand. I can generate instant itineraries, suggest hidden waterfalls, or connect you with verified local tribal guides. How may I assist you today?`,
      timestamp: 'Just now',
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
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickPill = (type: string) => {
    if (type === 'faqs') {
      handleSendMessage('What are the best waterfalls and seasons to visit Jharkhand?');
    } else if (type === 'itinerary') {
      onOpenTripPlanner();
    } else if (type === 'activity') {
      onNavigateTab('marketplace');
    } else if (type === 'support') {
      onNavigateTab('safety');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* FLOATING CHAT CARD (Shown when isOpen is true) */}
      {isOpen && (
        <div className="mb-3 w-[360px] sm:w-[420px] max-w-[95vw] h-[520px] bg-[#F5F2EB] rounded-3xl shadow-2xl border border-[#E0D9C8] flex flex-col overflow-hidden animate-fadeIn relative">
          
          {/* Top Bar: Multi-language selector matching screenshot */}
          <div className="bg-[#EFECE3] px-3.5 py-2.5 border-b border-[#E2DBD0] flex items-center justify-between">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
              {languages.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleLanguageChange(l.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedLang === l.id
                      ? 'bg-[#2D5A27] text-white shadow-sm'
                      : 'text-stone-700 hover:bg-[#E5E0D4]'
                  }`}
                >
                  <span className="text-[11px]">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-1">
              <button
                onClick={() => onNavigateTab('assistant')}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-[#E5E0D4] transition-colors"
                title="Full Screen Assistant"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-[#E5E0D4] transition-colors"
                title="Minimize Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Action Terracotta Pills matching screenshot */}
          <div className="p-3 bg-[#FAF8F3] border-b border-[#E8E2D5] space-y-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => handleQuickPill('faqs')}
                className="px-3 py-1.5 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>💡</span>
                <span>FAQS</span>
              </button>

              <button
                onClick={() => handleQuickPill('itinerary')}
                className="px-3 py-1.5 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>🗺️</span>
                <span>Suggest Itinerary</span>
              </button>

              <button
                onClick={() => handleQuickPill('activity')}
                className="px-3 py-1.5 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>🏕️</span>
                <span>Book an Activity</span>
              </button>

              <button
                onClick={() => handleQuickPill('support')}
                className="px-3 py-1.5 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>🎧</span>
                <span>Live Support Info</span>
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => {
              const isSarthi = m.sender === 'sarthi';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${isSarthi ? 'justify-start' : 'justify-end'}`}
                >
                  {isSarthi && (
                    <div className="w-6 h-6 rounded-full bg-[#2D5A27] text-amber-300 flex items-center justify-center shrink-0 text-[10px] font-bold">
                      🌿
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      isSarthi
                        ? 'bg-white text-stone-800 border border-[#E5DFD3] shadow-xs'
                        : 'bg-[#2D5A27] text-white font-medium rounded-br-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                    <span className={`text-[9px] block text-right mt-1 ${isSarthi ? 'text-stone-400' : 'text-stone-300'}`}>
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-stone-500 text-[11px] p-2 bg-white/70 rounded-xl w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 font-medium">Sarthi is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar matching screenshot with Send plane icon */}
          <div className="p-2.5 bg-white border-t border-[#E8E2D5]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-[#F5F2EB] rounded-full px-3.5 py-1.5 border border-[#E0D9C8]"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 bg-transparent text-xs font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-7 h-7 rounded-full bg-[#2D5A27] hover:bg-[#23471e] text-white flex items-center justify-center transition-all disabled:opacity-40 shrink-0"
              >
                <Send className="w-3.5 h-3.5 -ml-0.5" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* CIRCULAR GREEN FLOATING TRIGGER BUTTON matching screenshot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#2D5A27] hover:bg-[#23471e] text-white flex items-center justify-center shadow-xl shadow-[#2D5A27]/30 transition-all hover:scale-105 active:scale-95 group relative"
        aria-label="Toggle Sarthi AI Assistant"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#2D5A27]" />
        
        {/* Glowing badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C85A32] border-2 border-white flex items-center justify-center text-[9px] font-bold text-white animate-pulse">
            1
          </span>
        )}
      </button>

    </div>
  );
};
