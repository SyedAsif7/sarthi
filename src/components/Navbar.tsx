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
  PlayCircle
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
  currentLanguage = 'en',
  onChangeLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<string>('en');

  const nativeLanguages = [
    { code: 'hi', label: 'हिंदी' },
    { code: 'sat', label: 'संथाली' },
    { code: 'ho', label: 'हो' },
    { code: 'mun', label: 'मुंडारी' },
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore', icon: MapPin },
    { id: 'planner', label: 'AI Trip Planner', icon: Sparkles, highlight: true },
    { id: 'assistant', label: 'Sarthi AI', icon: Bot, isNew: true },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'calendar', label: 'Festivals', icon: Calendar },
    { id: 'safety', label: 'Safety', icon: ShieldCheck },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'admin', label: 'Govt Portal', icon: BarChart3, admin: true },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLangClick = (code: string) => {
    setActiveLang(code);
    if (onChangeLanguage) onChangeLanguage(code);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#344E28] text-white shadow-md relative overflow-hidden transition-all select-none">
      
      {/* Organic Curved Wave Banner from the Screenshot */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M150,0 C280,120 380,20 500,80 L500,0 L150,0 Z" fill="#994D2A" />
        </svg>
      </div>
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#E5A93C] opacity-30 blur-2xl pointer-events-none" />

      {/* Top Tribal Languages Bar */}
      <div className="relative z-10 border-b border-white/10 px-4 sm:px-8 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-stone-200">
          <span className="text-amber-400 font-bold tracking-wide">🌿 SARTHI</span>
        </div>

        {/* Tribal Languages matching screenshot: हिंदी | संथाली | हो | मुंडारी */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          {nativeLanguages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLangClick(l.code)}
              className={`transition-colors hover:text-amber-300 ${
                activeLang === l.code ? 'text-amber-400 font-bold underline underline-offset-4' : 'text-stone-200'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('profile')}
            className="text-stone-200 hover:text-amber-300 ml-1"
            title="User Profile"
          >
            <User className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with Hiker/Traveler Icon matching screenshot */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Custom SVG Hiker Figure in Warm Amber / Gold */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E5A93C] text-[#243E1B] flex items-center justify-center font-bold shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                {/* Hiker with backpack and walking stick */}
                <circle cx="12" cy="4" r="2" />
                <path d="M12 6v5l-3 4" />
                <path d="M12 11l4 2-1 5" />
                <path d="M10 7H8v4l2 1" />
                <path d="M17 10l-2 9" />
                <path d="M17 19l2 2" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight font-serif text-white group-hover:text-amber-300 transition-colors">
                  Explore Jharkhand
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-stone-950">
                  SARTHI
                </span>
              </div>
              <p className="text-[11px] text-stone-300 font-medium tracking-wide hidden sm:block">
                The Land of Forests, Waterfalls and Wonders
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              if (item.admin) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-sm'
                        : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>Admin</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white/20 text-white font-bold shadow-xs'
                      : item.highlight
                      ? 'text-amber-300 bg-white/10 hover:bg-white/20 font-bold border border-amber-400/40'
                      : 'text-stone-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-300'}`} />
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Demo Walkthrough Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoGuide}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C85A32] hover:opacity-95 text-stone-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <PlayCircle className="w-4 h-4 text-stone-950" />
              <span>Demo Walkthrough</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#243E1B] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
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
      )}

    </header>
  );
};
