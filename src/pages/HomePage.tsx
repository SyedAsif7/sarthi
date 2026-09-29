import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Star, 
  Trees, 
  Droplets, 
  PawPrint, 
  Mountain, 
  ShieldCheck, 
  Users, 
  Heart,
  Calendar,
  ShoppingBag,
  Clock,
  Award
} from 'lucide-react';
import { DESTINATIONS, CATEGORIES, HEART_OF_JHARKHAND_CARDS } from '../data/destinations';
import { Destination } from '../types';

interface HomePageProps {
  onPlanTripClick: () => void;
  onExploreClick: () => void;
  onSelectDestination: (dest: Destination) => void;
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onPlanTripClick,
  onExploreClick,
  onSelectDestination,
  setActiveTab,
}) => {
  // Key destinations for the "Experiences Await" grid matching the screenshot
  const ranchiDest = DESTINATIONS.find(d => d.id === 'ranchi') || DESTINATIONS[0];
  const betlaDest = DESTINATIONS.find(d => d.id === 'betla-national-park') || DESTINATIONS[4];
  const dassamDest = DESTINATIONS.find(d => d.id === 'dassam-falls') || DESTINATIONS[1];
  const deogharDest = DESTINATIONS.find(d => d.id === 'deoghar') || DESTINATIONS[5];
  const netarhatDest = DESTINATIONS.find(d => d.id === 'netarhat') || DESTINATIONS[3];
  const patratuDest = DESTINATIONS.find(d => d.id === 'patratu-valley') || DESTINATIONS[6];

  const primaryCards = [
    {
      title: 'Ranchi',
      subtitle: 'City of Waterfalls & Sal Forests',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
      category: 'Waterfalls',
      badgeIcon: '🌊',
      dest: dassamDest,
    },
    {
      title: 'Betla National Park & Fort',
      subtitle: 'Palamu Tiger Reserve & 16th-Century Chero Fort',
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
      category: 'Heritage & Wildlife',
      badgeIcon: '🏛️',
      dest: betlaDest,
    },
    {
      title: 'Netarhat',
      subtitle: 'Queen of Chotanagpur, Pine Woods & Magnolia Point',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      category: 'Nature',
      badgeIcon: '🌲',
      dest: netarhatDest,
    },
    {
      title: 'Deoghar',
      subtitle: 'Sacred Baidyanath Jyotirlinga & Trikut Ropeway',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      category: 'Spiritual',
      badgeIcon: '🕉️',
      dest: deogharDest,
    },
  ];

  // Tribal Art & Cultural Folk showcase cards matching the bottom row in screenshot
  const tribalArtCards = [
    {
      title: 'Santhal & Munda Tribal Dance',
      subtitle: 'Ancient Mandar drum rhythms and collective village harmony',
      tag: 'Living Folk Heritage',
      svgType: 'dance1',
    },
    {
      title: 'Sohrai Natural Earth Wall Murals',
      subtitle: 'GI-tagged indigenous wildlife murals using natural ochres',
      tag: '4,000-Yr Traditional Art',
      svgType: 'art1',
    },
    {
      title: 'Chhau Martial Mask Dance',
      subtitle: 'UNESCO Intangible Cultural Heritage of Jharkhand',
      tag: 'Martial Folk Art',
      svgType: 'dance2',
    },
  ];

  return (
    <div className="space-y-16 pb-24 animate-fadeIn">
      
      {/* ==================================================== */}
      {/* 1. HERO SECTION (MATCHING SCREENSHOT SPLIT DESIGN)   */}
      {/* ==================================================== */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-900">
        
        {/* Split Background Images: Waterfall on Left, Sunset Temple on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[480px] sm:h-[540px] w-full relative">
          
          {/* Left: Roaring Waterfall in Dense Green Jungle */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80"
              alt="Jharkhand Waterfall Dassam"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          </div>

          {/* Right: Sunset Ancient Temple Silhouette */}
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80"
              alt="Jharkhand Heritage Temple at Sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Subtle Tribal Pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#E5A93C_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        </div>

        {/* Hero Text Content matching screenshot */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-2xl text-left space-y-6">

          {/* Exact Heading from screenshot */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight sm:leading-none">
            Jharkhand: <br />
            <span className="text-stone-100 font-normal">The Land of Forests</span> <br />
            <span className="text-amber-400">Waterfalls and Wonders</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-200 max-w-lg leading-relaxed">
            AI-powered journeys. Authentic local experiences. Seamlessly connecting travelers with verified tribal guides, homestays, and sacred groves.
          </p>

          {/* Exact Button from screenshot: [Start Your Journey] */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onPlanTripClick}
              className="px-8 py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-[#d89b2b] text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Start Your Journey</span>
            </button>

            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm backdrop-blur-md border border-white/30 transition-all"
            >
              <span>Explore All Destinations</span>
            </button>
          </div>

        </div>

      </section>

      {/* ==================================================== */}
      {/* 2. "EXPERIENCES AWAIT" SECTION (MATCHING SCREENSHOT) */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
              Experiences Await
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Handpicked destinations with iconic cascades, wildlife reserves, and centuries of tribal heritage.
            </p>
          </div>

          <button
            onClick={onExploreClick}
            className="text-xs sm:text-sm font-bold text-[#C85A32] hover:text-[#994020] flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Primary Destination Cards matching screenshot style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {primaryCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => onSelectDestination(card.dest)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group flex flex-col hover:-translate-y-1"
            >
              {/* Image Container with circular terracotta badge on top-left */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Circular Terracotta Badge on Top-Left matching screenshot */}
                <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                  <span>{card.badgeIcon}</span>
                </div>

                {/* Rating on Top-Right */}
                <div className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded-full bg-white/95 text-stone-900 text-[11px] font-bold shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{card.dest.rating}</span>
                </div>
              </div>

              {/* Title & Subtitle below photo */}
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-stone-900 group-hover:text-[#2D5A27] transition-colors font-serif">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs">
                  <span className="font-bold text-[#2D5A27]">₹{card.dest.approxCost} / person</span>
                  <span className="text-[#C85A32] font-semibold group-hover:underline flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. TRIBAL ART & FOLK DANCE CARDS (SCREENSHOT ROW 2) */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
              Living Tribal Traditions
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Preserved across 32 indigenous communities through folk dance, natural mural painting, and community drumming.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('calendar')}
            className="text-xs sm:text-sm font-bold text-[#C85A32] hover:text-[#994020] flex items-center gap-1 group"
          >
            <span>Festivals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tribalArtCards.map((art, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab('marketplace')}
              className="bg-[#FAF7F0] rounded-3xl p-6 border border-[#E5DFD0] shadow-soft hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              {/* Artistic Tribal Silhouette Illustration in Terracotta */}
              <div className="h-32 w-full rounded-2xl bg-[#EFECE1] flex items-center justify-center relative overflow-hidden p-4 border border-[#E0D9C8]">
                
                {/* SVG Tribal Dancer Silhouette matching the terracotta drawings in screenshot */}
                <div className="text-[#C85A32] flex items-center justify-center gap-6">
                  {/* Dancer figure 1 */}
                  <svg viewBox="0 0 64 64" className="w-16 h-16 fill-current stroke-current">
                    <circle cx="32" cy="12" r="5" />
                    <path d="M32 18 v16 M20 22 l12 6 l12 -6 M24 34 l8 16 l8 -16" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M16 26 l6 -4 M48 26 l-6 -4" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>

                  {/* Mandar drum musician figure 2 */}
                  <svg viewBox="0 0 64 64" className="w-16 h-16 fill-current stroke-current">
                    <circle cx="32" cy="14" r="5" />
                    <path d="M32 20 v14 M22 26 l10 4 l10 -4 M26 34 l6 16 l6 -16" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {/* Mandar drum shape */}
                    <ellipse cx="32" cy="30" rx="8" ry="4" fill="none" strokeWidth="2.5" />
                  </svg>

                  {/* Dancer figure 3 */}
                  <svg viewBox="0 0 64 64" className="w-16 h-16 fill-current stroke-current">
                    <circle cx="32" cy="12" r="5" />
                    <path d="M32 18 v16 M22 24 l10 6 l10 -6 M22 34 l10 16 l10 -16" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#C85A32] text-white text-[10px] font-bold">
                    {art.tag}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-base text-stone-900 group-hover:text-[#C85A32] transition-colors font-serif">
                  {art.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">
                  {art.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#2D5A27] font-bold">
                <span>Experience with Local Hosts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. EXPERIENCE THE HEART OF JHARKHAND                 */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] bg-[#E8F0E6] px-3.5 py-1 rounded-full">
            Cultural Discovery
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
            Experience the Heart of Jharkhand
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Earthy cuisines, lost-wax Dhokra castings, and eco-homestays empowering local indigenous families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEART_OF_JHARKHAND_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-soft hover:shadow-card transition-all group flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-stone-950 text-[10px] font-bold">
                    {card.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="font-bold text-lg font-serif">{card.title}</h3>
                  <p className="text-[11px] text-stone-300">{card.subtitle}</p>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-stone-600 leading-relaxed">
                  {card.description}
                </p>

                <button
                  onClick={() => setActiveTab(card.route)}
                  className="w-full py-2 rounded-xl bg-[#F5F2EB] hover:bg-[#2D5A27] text-stone-800 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Discover {card.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. SIH 2026 ARCHITECTURAL BANNER                     */}
      {/* ==================================================== */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#243E1B] via-[#1B3214] to-[#243E1B] p-8 sm:p-12 text-white shadow-2xl border-4 border-amber-400/30">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            Smart India Hackathon 2026 • Problem Statement ID: 26204
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif leading-snug">
            "From 'I want to visit Jharkhand' to a complete personalized journey in one platform."
          </h2>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <p className="text-xs uppercase tracking-wider text-amber-200 font-bold mb-3">
              Integrated Tourism Platform Formula
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-stone-100">
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">Tourism Data</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">User Preferences</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">AI Personalization</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">Interactive Maps</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">Local Communities</span>
              <span className="text-amber-400 font-bold">=</span>
              <span className="px-4 py-1.5 rounded-xl bg-[#E5A93C] text-stone-950 font-bold shadow-md">
                Personalized Tourism Ecosystem
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onPlanTripClick}
              className="px-8 py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My AI Trip</span>
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-transform hover:scale-105 active:scale-95"
            >
              <span>View Govt / Admin Impact Portal</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
