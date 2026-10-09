import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Bot, 
  ShoppingBag, 
  Calendar, 
  ShieldCheck, 
  User, 
  BarChart3, 
  Menu, 
  X,
  PlayCircle,
  Globe,
  ChevronDown,
  Navigation
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDemoGuide: () => void;
  currentLanguage?: string;
  onChangeLanguage?: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenDemoGuide,
  onChangeLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<string>('en');
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const nativeLanguages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'mr', label: 'मराठी' },
    { code: 'sat', label: 'संथाली' },
  ];

  const primaryNavItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore India', icon: MapPin },
    { id: 'planner', label: 'AI Trip Planner', icon: Sparkles, highlight: true },
    { id: 'map', label: 'Interactive Map', icon: Navigation },
    { id: 'marketplace', label: 'Artisans & Stays', icon: ShoppingBag },
  ];

  const secondaryNavItems = [
    { id: 'assistant', label: 'SARTHI AI Assistant', icon: Bot, badge: 'AI' },
    { id: 'calendar', label: 'Festivals & Heritage', icon: Calendar },
    { id: 'safety', label: 'Safety & Help', icon: ShieldCheck },
    { id: 'admin', label: 'Govt Impact Portal', icon: BarChart3, admin: true },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLangClick = (code: string) => {
    setActiveLang(code);
    if (onChangeLanguage) onChangeLanguage(code);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2D5224] text-white shadow-lg relative overflow-visible transition-all select-none">
      
      {/* Organic Curved Wave Banner */}
      <div className="absolute top-0 right-0 w-3/5 h-full pointer-events-none opacity-45 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M120,0 C260,130 380,10 500,70 L500,0 L120,0 Z" fill="#994D2A" />
        </svg>
      </div>
      <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#E5A93C] opacity-25 blur-3xl pointer-events-none" />

      {/* TOP BAR: Clean Language Switcher & Utility */}
      <div className="relative z-20 border-b border-white/10 px-4 sm:px-8 py-1.5 flex items-center justify-between text-xs bg-black/10 backdrop-blur-xs">
        <div className="flex items-center gap-2 text-stone-200">
          <img src="/sarthi-ai-logo.png" alt="SARTHI AI" className="w-4 h-4 object-contain" />
          <span className="text-amber-400 font-extrabold tracking-wide flex items-center gap-1.5">
            <span>SARTHI AI</span>
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="text-[11px] text-stone-300 font-medium hidden sm:inline">
            Pan-India Intelligent Sustainable & Cultural Tourism Platform
          </span>
        </div>

        {/* Native Language Pills */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1 text-stone-300">
            <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] text-stone-400 hidden md:inline">Language:</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {nativeLanguages.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLangClick(l.code)}
                className={`px-2 py-0.5 rounded-lg text-[11px] sm:text-xs transition-all ${
                  activeLang === l.code 
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-xs' 
                    : 'text-stone-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="h-3 w-px bg-white/20 hidden sm:block mx-1" />

          {/* Profile Quick Trigger */}
          <button
            onClick={() => handleNavClick('profile')}
            className={`p-1 rounded-lg transition-colors flex items-center gap-1 ${
              activeTab === 'profile' ? 'text-amber-400 bg-white/15' : 'text-stone-200 hover:text-white hover:bg-white/10'
            }`}
            title="My Profile & Saved Trips"
          >
            <User className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium hidden md:inline">Profile</span>
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION ROW */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with sarthi-ai-logo.png */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/10 p-1 flex items-center justify-center shadow-md shadow-amber-950/40 group-hover:scale-105 transition-transform duration-300 border border-white/20 overflow-hidden shrink-0">
              <img 
                src="/sarthi-ai-logo.png" 
                alt="SARTHI AI Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight font-serif text-white group-hover:text-amber-300 transition-colors">
                  SARTHI AI
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-stone-950">
                  INDIA
                </span>
              </div>
              <p className="text-[11px] text-stone-300 font-medium tracking-wide hidden sm:block">
                Sustainable & Cultural Tourism Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white/20 text-white font-bold shadow-xs'
                      : item.highlight
                      ? 'text-amber-300 bg-amber-400/15 hover:bg-amber-400/25 font-bold border border-amber-400/40'
                      : 'text-stone-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : item.highlight ? 'text-amber-300' : 'text-stone-300'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* "More" Dropdown for Secondary Sections */}
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  secondaryNavItems.some(i => i.id === activeTab)
                    ? 'bg-white/20 text-white'
                    : 'text-stone-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-stone-900/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/15 z-50 animate-fadeIn space-y-1">
                  {secondaryNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                          isActive
                            ? 'bg-amber-400 text-stone-950 font-bold'
                            : 'text-stone-200 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.label}</span>
                        </div>
                        {item.admin && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                            Govt
                          </span>
                        )}
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Demo Guide Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoGuide}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C85A32] hover:opacity-95 text-stone-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <PlayCircle className="w-4 h-4 text-stone-950" />
              <span>Demo Tour</span>
            </button>
          </div>

          {/* Mobile Controls (Demo + Hamburger) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemoGuide}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-400 text-stone-950 text-xs font-bold shadow-sm"
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Demo</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-200 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE EXPANDED MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E3618] border-t border-white/10 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          
          {/* Main Experience Group */}
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-wider font-bold text-amber-300/80 px-2">Main Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {primaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 font-bold'
                        : 'bg-white/10 text-stone-200 hover:bg-white/20'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Features Group */}
          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-wider font-bold text-amber-300/80 px-2">Explore & Support</p>
            <div className="grid grid-cols-2 gap-2">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 font-bold'
                        : 'bg-white/10 text-stone-200 hover:bg-white/20'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language selector in drawer */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-stone-400">Language:</span>
            <div className="flex gap-1.5">
              {nativeLanguages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangClick(l.code)}
                  className={`px-2 py-0.5 rounded-md text-[11px] ${
                    activeLang === l.code ? 'bg-amber-400 text-stone-950 font-bold' : 'text-stone-300 bg-white/10'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

    </header>
  );
};
