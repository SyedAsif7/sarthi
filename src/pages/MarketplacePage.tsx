import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  CheckCircle, 
  MapPin, 
  Users, 
  Hotel, 
  Palette, 
  Utensils, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Heart,
  Plus
} from 'lucide-react';
import { MARKETPLACE_ITEMS } from '../data/marketplace';
import { MarketplaceItem, MarketplaceCategory } from '../types';
import { triggerConfetti } from '../utils/toast';

interface MarketplacePageProps {
  onSelectItem: (item: MarketplaceItem) => void;
  onAddItemToTrip: (item: MarketplaceItem) => void;
}

export const MarketplacePage: React.FC<MarketplacePageProps> = ({
  onSelectItem,
  onAddItemToTrip,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Offerings', icon: ShoppingBag },
    { id: 'guide', label: 'Verified Local Guides', icon: Users },
    { id: 'homestay', label: 'Authentic Homestays', icon: Hotel },
    { id: 'handicraft', label: 'Tribal Handicrafts', icon: Palette },
    { id: 'food', label: 'Local Food & Cooking', icon: Utensils },
    { id: 'experience', label: 'Cultural Experiences & Eco Tours', icon: Compass },
  ];

  const filteredItems = activeCategory === 'all'
    ? MARKETPLACE_ITEMS
    : MARKETPLACE_ITEMS.filter((item) => {
        if (activeCategory === 'experience') {
          return item.category === 'experience' || item.category === 'ecotour';
        }
        return item.category === activeCategory;
      });

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-100 px-3.5 py-1 rounded-full">
          Grassroots Economic Empowerment
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Experience Local Jharkhand
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Connect directly with certified tribal guides, community-managed eco-homestays, and master Dhokra & Sohrai artisans.
        </p>
      </div>

      {/* SIH Direct Benefit Model Banner */}
      <div className="max-w-6xl mx-auto p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-gold-400/30">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-gold-300">0% Commission • 100% Direct Benefit to Indigenous Communities</h3>
            <p className="text-xs text-forest-200">
              SARTHI empowers local hosts with direct digital discovery without extractive intermediary platform cuts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded-full bg-forest-800 text-turquoise-300 text-xs font-semibold border border-forest-700">
            840+ Active Providers
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                isActive
                  ? 'bg-forest-900 text-gold-400 border-forest-900 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-forest-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* MARKETPLACE ITEMS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-forest-950/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {item.category}
                </span>
                {item.verified && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 fill-white text-emerald-600" />
                    Verified ✓
                  </span>
                )}
              </div>

              {/* Price Tag on Image */}
              <div className="absolute bottom-3 right-3 bg-white/95 text-forest-950 px-3 py-1 rounded-xl text-xs font-bold shadow-md">
                ₹{item.price.toLocaleString('en-IN')} <span className="text-[10px] text-slate-500 font-normal">{item.priceUnit}</span>
              </div>

              {/* Rating Tag */}
              <div className="absolute bottom-3 left-3 text-white flex items-center gap-1 text-xs">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                <span className="font-bold">{item.rating}</span>
                <span className="text-[11px] text-slate-300">({item.reviewsCount})</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-forest-900 transition-colors font-serif">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-forest-800 font-medium">{item.subtitle}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{item.location}</span>
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Guide specifics */}
                {item.details.languages && (
                  <div className="text-[11px] text-slate-500 pt-1">
                    <strong className="text-slate-700">Languages:</strong> {item.details.languages.join(', ')}
                  </div>
                )}
              </div>

              {/* Action Buttons as specified in prompt: [View Profile / Details] [Add to Trip] */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectItem(item)}
                  className="flex-1 py-2.5 rounded-xl bg-forest-50 hover:bg-forest-900 text-forest-900 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>
                    {item.category === 'guide' ? 'View Profile' : item.category === 'homestay' ? 'View Details' : 'Explore Products'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    onAddItemToTrip(item);
                    triggerConfetti();
                  }}
                  className="p-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs transition-transform active:scale-95 shadow-sm"
                  title="Add to Trip Itinerary"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
