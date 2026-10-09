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
  Globe, 
  Leaf, 
  HeartHandshake, 
  Award,
  ShoppingBag
} from 'lucide-react';
import { DESTINATIONS, HEART_OF_INDIA_CARDS } from '../data/destinations';
import { Destination } from '../types';
import { getImpactTierBadge } from '../utils/impactScore';

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
  // Representative Pan-India + Regional flagship destinations
  const spitiDest = DESTINATIONS.find(d => d.id === 'spiti-valley') || DESTINATIONS[0];
  const munroeDest = DESTINATIONS.find(d => d.id === 'munroe-island') || DESTINATIONS[2];
  const ajantaDest = DESTINATIONS.find(d => d.id === 'ajanta-ellora') || DESTINATIONS[0];
  const mawlynnongDest = DESTINATIONS.find(d => d.id === 'mawlynnong') || DESTINATIONS[4];
  const khuriDest = DESTINATIONS.find(d => d.id === 'jaisalmer-desert-park') || DESTINATIONS[6];
  const dassamDest = DESTINATIONS.find(d => d.id === 'dassam-falls') || DESTINATIONS[1];
  const netarhatDest = DESTINATIONS.find(d => d.id === 'netarhat') || DESTINATIONS[3];
  const majuliDest = DESTINATIONS.find(d => d.id === 'majuli-island') || DESTINATIONS[8];
  const betlaDest = DESTINATIONS.find(d => d.id === 'betla-national-park') || DESTINATIONS[5];

  const panIndiaShowcase = [
    {
      title: 'Spiti Valley',
      state: 'Himachal Pradesh',
      subtitle: '12,500 ft Trans-Himalayan Plateau & Solar Homestays',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🏔️',
      dest: spitiDest,
    },
    {
      title: 'Munroe Island',
      state: 'Kerala',
      subtitle: 'Silent Mangrove Canoe Punting & Coir Homestays',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🌴',
      dest: munroeDest,
    },
    {
      title: 'Ajanta & Ellora',
      state: 'Maharashtra',
      subtitle: 'UNESCO Rock-Cut Caves & Zero-Emission Electric Shuttle Transit',
      image: 'https://images.unsplash.com/photo-1600100397608-f010f443a6d9?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🏛️',
      dest: ajantaDest,
    },
    {
      title: 'Khuri Desert',
      state: 'Rajasthan',
      subtitle: 'Thatched Mud Jhopas & Manganiyar Ballad Heritage',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🏜️',
      dest: khuriDest,
    },
    {
      title: 'Mawlynnong',
      state: 'Meghalaya',
      subtitle: 'Living Root Bridges & 100% Organic Village Co-ops',
      image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🌿',
      dest: mawlynnongDest,
    },
    {
      title: 'Netarhat',
      state: 'Jharkhand',
      subtitle: 'Queen of Chotanagpur, Pine Woods & Magnolia Point',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🌲',
      dest: netarhatDest,
    },
    {
      title: 'Dassam Falls',
      state: 'Jharkhand',
      subtitle: 'Sacred Kanchi River 44m Cascade & Tribal Cuisines',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🌊',
      dest: dassamDest,
    },
    {
      title: 'Majuli Island',
      state: 'Assam',
      subtitle: 'World\'s Largest River Island & Neo-Vaishnavite Satras',
      image: 'https://images.unsplash.com/photo-1616489953149-8d77d73010b9?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🏝️',
      dest: majuliDest,
    },
    {
      title: 'Betla Sanctuary',
      state: 'Jharkhand',
      subtitle: 'Palamu Tiger Reserve & 16th-Century Chero Fort',
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
      badgeIcon: '🏛️',
      dest: betlaDest,
    },
  ];

  const culturalCraftCards = [
    {
      title: 'Indigenous Mud Wall Murals (Sohrai & Rogan)',
      subtitle: 'GI-tagged natural ochre murals in Jharkhand & 300-year-old castor oil Rogan art in Kutch, Gujarat',
      tag: 'Ancient Living Art',
      type: 'art',
    },
    {
      title: 'Bio-Engineered Living Root Bridges (Jingkieng Jri)',
      subtitle: 'Century-old suspension bridges hand-guided from living Ficus elastica roots across Meghalaya streams',
      tag: 'Indigenous Bio-Engineering',
      type: 'nature',
    },
    {
      title: '4,000-Year-Old Lost-Wax Metal Casting (Dhokra)',
      subtitle: 'Non-ferrous bell metal figurines shaped by indigenous artisan collectives in Jharkhand, Odisha, and Bengal',
      tag: 'GI Cultural Heritage',
      type: 'craft',
    },
  ];

  return (
    <div className="space-y-16 pb-24 animate-fadeIn">
      
      {/* ==================================================== */}
      {/* 1. HERO SECTION (PAN-INDIA SUSTAINABLE SPLIT)        */}
      {/* ==================================================== */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-900">
        
        {/* Split Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] sm:h-[560px] w-full relative">
          
          {/* Left: Roaring Waterfall in Dense Green Jungle */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80"
              alt="Indian Waterfall Landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>

          {/* Right: Himalayan Vista / Heritage Silhouette */}
          <div className="relative h-full w-full overflow-hidden hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80"
              alt="Spiti Valley Trans-Himalayan Vista"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Subtle Tribal / Geographical Pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#E5A93C_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        </div>

        {/* Hero Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-12 md:px-16 max-w-2xl text-left space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider w-fit">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Pan-India Sustainable & Cultural Tourism</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight sm:leading-none">
            India: <br />
            <span className="text-stone-100 font-normal">Living Heritage,</span> <br />
            <span className="text-amber-400">Wild Sanctuaries & Eco Wonders</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone-200 max-w-lg leading-relaxed">
            AI-powered journeys across 28 States and 8 Union Territories. Seamlessly connecting travelers with verified community homestays, certified local guides, GI craft clusters, and explainable SARTHI Impact Scores.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onPlanTripClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-[#d89b2b] text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Plan AI Journey</span>
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm backdrop-blur-md border border-white/30 transition-all flex items-center justify-center text-center cursor-pointer"
            >
              <span>Explore All 36 Destinations</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. THE EXPLAINABLE SARTHI IMPACT ENGINE SHOWCASE     */}
      {/* ==================================================== */}
      <section className="p-6 sm:p-10 rounded-3xl bg-forest-950 text-white border-2 border-forest-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-forest-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>National Innovation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              The SARTHI Impact Score: Transparent & Responsible
            </h2>
            <p className="text-xs sm:text-sm text-forest-200 max-w-2xl leading-relaxed">
              Every destination and AI itinerary is objectively scored from 0 to 100 across three verifiable pillars so travelers create lasting community benefit rather than over-tourism strain.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30 text-xs font-bold">
              🌟 Eco Pioneer: 85–100
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
              🍃 High Sustainable: 75–84
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-forest-900/80 border border-forest-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
              🚆
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white">Carbon Efficiency</h3>
                <span className="text-xs font-bold text-cyan-300">30 Points</span>
              </div>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Prioritizes Indian Railways electric corridors and shared transit over private diesel SUVs, cutting per-passenger emissions by ~75%.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-forest-900/80 border border-forest-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
              🏡
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white">Community Economic Retention</h3>
                <span className="text-xs font-bold text-amber-300">35 Points</span>
              </div>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Guarantees 78%–94% of travel spend flows directly to certified village homestay families, tribal guides, and GI craft co-operatives.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-forest-900/80 border border-forest-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              🌿
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white">Conservation & Sacred Habitat</h3>
                <span className="text-xs font-bold text-emerald-300">35 Points</span>
              </div>
              <p className="text-xs text-forest-200 mt-1 leading-relaxed">
                Strict adherence to carrying capacity, seasonal wildlife quietude, plastic-free trails, and reverence for ancient sacred groves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. EXPERIENCES AWAIT (PAN-INDIA FLAGSHIP CARDS)      */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
              Living Pan-India Destinations
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Handpicked destinations with verified community homestays, pristine ecosystems, and cultural heritage.
            </p>
          </div>

          <button
            onClick={onExploreClick}
            className="text-xs sm:text-sm font-bold text-[#C85A32] hover:text-[#994020] flex items-center gap-1 group cursor-pointer"
          >
            <span>View All (36)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {panIndiaShowcase.map((card, idx) => {
            const impactScore = card.dest.sarthiImpactScore?.overallScore || 85;

            return (
              <div
                key={idx}
                onClick={() => onSelectDestination(card.dest)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group flex flex-col hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                    <span>{card.badgeIcon}</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded-full bg-forest-900/90 text-white text-[10px] font-bold shadow-sm flex items-center gap-1 backdrop-blur-xs">
                    <Leaf className="w-3 h-3 text-gold-400" />
                    <span>{impactScore}/100</span>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-full">
                      {card.state}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 group-hover:text-[#2D5A27] transition-colors font-serif">
                      {card.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs">
                    <span className="font-bold text-[#2D5A27]">₹{card.dest.approxCost} / day</span>
                    <span className="text-[#C85A32] font-semibold group-hover:underline flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. LIVING INDIGENOUS TRADITIONS & GI CRAFTS          */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
              Living Traditions & Indigenous Crafts
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Preserved across India through bio-engineering, lost-wax metallurgy, and tribal cooperatives.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('marketplace')}
            className="text-xs sm:text-sm font-bold text-[#C85A32] hover:text-[#994020] flex items-center gap-1 group cursor-pointer"
          >
            <span>Artisan Co-ops</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {culturalCraftCards.map((art, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab('marketplace')}
              className="bg-[#FAF7F0] rounded-3xl p-6 border border-[#E5DFD0] shadow-soft hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="h-32 w-full rounded-2xl bg-[#EFECE1] flex items-center justify-center relative overflow-hidden p-4 border border-[#E0D9C8]">
                <div className="text-[#C85A32] flex items-center justify-center gap-6">
                  <svg viewBox="0 0 64 64" className="w-16 h-16 fill-current stroke-current">
                    <circle cx="32" cy="12" r="5" />
                    <path d="M32 18 v16 M20 22 l12 6 l12 -6 M24 34 l8 16 l8 -16" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M16 26 l6 -4 M48 26 l-6 -4" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <svg viewBox="0 0 64 64" className="w-16 h-16 fill-current stroke-current">
                    <circle cx="32" cy="14" r="5" />
                    <path d="M32 20 v14 M22 26 l10 4 l10 -4 M26 34 l6 16 l6 -16" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <ellipse cx="32" cy="30" rx="8" ry="4" fill="none" strokeWidth="2.5" />
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
                <span>Support Master Artisans</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. CULTURAL SPOTLIGHT: LIVING HERITAGE ACROSS INDIA  */}
      {/* ==================================================== */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] bg-[#E8F0E6] px-3.5 py-1 rounded-full">
            Pan-India Cultural Spotlight
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
            Living Cultural Heritage Across India
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Ancient sacred groves, GI artisan traditions, farm-to-fork millets, and community stewardship across India's vibrant biogeographical zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEART_OF_INDIA_CARDS.map((card, idx) => (
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
                  className="w-full py-2 rounded-xl bg-[#F5F2EB] hover:bg-[#2D5A27] text-stone-800 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
      {/* 6. NATIONAL SUSTAINABLE ARCHITECTURAL BANNER         */}
      {/* ==================================================== */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#243E1B] via-[#1B3214] to-[#243E1B] p-8 sm:p-12 text-white shadow-2xl border-4 border-amber-400/30">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>National Tourism Innovation • SARTHI AI Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif leading-snug">
            "From 'I want to travel consciously across India' to a personalized, low-carbon journey in one unified platform."
          </h2>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <p className="text-xs uppercase tracking-wider text-amber-200 font-bold mb-3">
              Explainable Sustainable Tourism Formula
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-stone-100">
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">28 States & 8 UTs Data</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">Low-Carbon Corridors</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">Verified Homestay Co-ops</span>
              <span className="text-amber-400 font-bold">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20">SARTHI Impact Score</span>
              <span className="text-amber-400 font-bold">=</span>
              <span className="px-4 py-1.5 rounded-xl bg-[#E5A93C] text-stone-950 font-bold shadow-md">
                Regenerative Indian Tourism
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onPlanTripClick}
              className="px-8 py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My AI Trip</span>
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>View Govt / Admin Impact Portal</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
