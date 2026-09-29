import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Compass, 
  MapPin, 
  ShoppingBag, 
  User, 
  ArrowRight,
  ShieldCheck,
  Zap,
  RotateCcw,
  CheckCircle2,
  HelpCircle
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
    { label: 'Plan 3-day trip under ₹10,000', icon: '🗺️' },
    { label: 'Best waterfalls near Ranchi?', icon: '🌊' },
    { label: 'Where can I experience tribal culture?', icon: '🏹' },
    { label: 'Best places for a family trip?', icon: '👨‍👩‍👧‍👦' },
    { label: 'Suggest a budget trip for two people', icon: '💰' },
    { label: 'What should I visit during monsoon?', icon: '🌧️' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (contextItineraryPrompt) {
      handleSendMessage(contextItineraryPrompt);
    }
  }, [contextItineraryPrompt]);

  const handleResetChat = () => {
    setMessages(INITIAL_CHAT_MESSAGES);
  };

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
          text: `Johar! I encountered a temporary connection issue, but Dassam and Hundru Falls are roaring and best visited before 4 PM! Click below to plan your trip:`,
          timestamp: 'Just now',
          suggestedActions: [
            { label: '✨ Open AI Trip Planner', actionType: 'plan' }
          ]
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

  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-bold text-base sm:text-lg text-stone-900 font-serif mt-3 mb-1.5 border-l-3 border-[#C85A32] pl-2">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('* ') || line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-xs sm:text-sm text-stone-700 my-1 leading-relaxed">
            {formatBold(line.substring(2))}
          </li>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-amber-500 pl-3 my-2 text-xs italic text-stone-700 bg-amber-50/70 py-1.5 rounded-r-xl">
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

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-fadeIn">
      
      {/* 1. PAGE TITLE & STATUS HEADER */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <div className="relative">
            <div className="w-16 h-16 rounded-3xl bg-[#2D5224] text-amber-300 flex items-center justify-center font-bold text-2xl shadow-md border-2 border-amber-400">
              🌿
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
                Sarthi AI
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                Online
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Ask anything about your Jharkhand journey
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[11px] text-stone-500">
              <span className="px-2 py-0.5 rounded-md bg-stone-100 font-medium">✨ Real-time Itineraries</span>
              <span className="px-2 py-0.5 rounded-md bg-stone-100 font-medium">🌊 Waterfalls</span>
              <span className="px-2 py-0.5 rounded-md bg-stone-100 font-medium">🍲 Tribal Foods</span>
              <span className="px-2 py-0.5 rounded-md bg-stone-100 font-medium">🛡️ Safety Guidance</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs flex items-center gap-1.5 transition-colors shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Chat</span>
        </button>
      </div>

      {/* 2. SUGGESTED QUESTIONS GRID */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-wider text-center">
          Suggested Questions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q.label)}
              className="p-3 rounded-2xl bg-white hover:bg-[#FAF7F0] text-stone-800 text-xs font-semibold border border-stone-200/90 shadow-xs hover:border-[#2D5224] transition-all text-left flex items-center gap-2 group active:scale-98"
            >
              <span className="text-base group-hover:scale-110 transition-transform">{q.icon}</span>
              <span className="truncate">{q.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. CONVERSATION MAIN CONTAINER */}
      <div className="bg-white rounded-3xl shadow-card border border-stone-200/90 overflow-hidden flex flex-col h-[580px]">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 bg-[#FAF8F4]">
          {messages.map((msg) => {
            const isSarthi = msg.sender === 'sarthi';

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isSarthi ? 'justify-start' : 'justify-end'}`}
              >
                {/* Bot Avatar */}
                {isSarthi && (
                  <div className="w-9 h-9 rounded-2xl bg-[#2D5224] text-amber-300 flex items-center justify-center shrink-0 shadow-sm border border-white">
                    🌿
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] sm:max-w-[80%] rounded-3xl p-4 sm:p-5 shadow-xs space-y-3 ${
                    isSarthi
                      ? 'bg-white border border-stone-200/90 text-stone-900 shadow-soft'
                      : 'bg-[#2D5224] text-white rounded-br-none shadow-md'
                  }`}
                >
                  <div className="space-y-1">
                    {isSarthi ? (
                      renderFormattedText(msg.text)
                    ) : (
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">{msg.text}</p>
                    )}
                  </div>

                  {/* Action Suggestion Pills */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(act)}
                          className="px-3 py-1 rounded-xl bg-[#F5F2EB] hover:bg-[#2D5224] text-stone-800 hover:text-white text-xs font-semibold border border-stone-200 transition-all flex items-center gap-1 shadow-xs"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[10px] ${isSarthi ? 'text-stone-400' : 'text-stone-300'} text-right`}>
                    {msg.timestamp}
                  </div>
                </div>

                {/* User Avatar */}
                {!isSarthi && (
                  <div className="w-9 h-9 rounded-2xl bg-[#E5A93C] text-stone-950 flex items-center justify-center shrink-0 font-bold shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#2D5224] text-amber-300 flex items-center justify-center shrink-0">
                🌿
              </div>
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-[#2D5224] animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-stone-500 font-medium ml-1">Sarthi is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-stone-200">
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
              placeholder="Ask anything about Jharkhand destinations, budgets, homestays..."
              className="flex-1 px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#2D5224] text-xs sm:text-sm bg-stone-50/60"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-3 rounded-2xl bg-[#2D5224] hover:bg-[#203D19] disabled:opacity-40 text-amber-300 font-bold transition-transform active:scale-95 shadow-md shrink-0"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-[10px] text-center text-stone-400 mt-2">
            SARTHI AI Assistant • Smart India Hackathon 2026 • Team Vertex (SSIEMS)
          </p>
        </div>

      </div>

    </div>
  );
};
