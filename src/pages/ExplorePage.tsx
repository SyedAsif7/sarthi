import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Calendar, 
  ArrowRight, 
  Plus, 
  Volume2, 
  Globe, 
  Leaf, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DESTINATIONS, INDIAN_STATES, ALL_ZONES } from '../data/destinations';
import { Destination } from '../types';
import { getImpactTierBadge, calculateDestinationImpactScore } from '../utils/impactScore';
import { triggerConfetti } from '../utils/toast';

interface ExplorePageProps {
  onSelectDestination: (dest: Destination) => void;
  onAddToTrip: (dest: Destination) => void;
  preselectedCategory?: string;
  preselectedState?: string;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onSelectDestination,
  onAddToTrip,
  preselectedCategory,
  preselectedState,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>(preselectedState || 'All India');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>(preselectedCategory || 'All');
  const [sustainabilityTier, setSustainabilityTier] = useState<string>('All');
  const [budgetFilter, setBudgetFilter] = useState<string>('All');
  const [crowdFilter, setCrowdFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'impact' | 'cost-low' | 'cost-high'>('rating');

  const categories = ['All', 'Nature', 'Culture', 'Heritage', 'Wildlife', 'Spiritual', 'Waterfalls', 'Adventure'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      // Search
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.district.toLowerCase().includes(query) ||
        d.state.toLowerCase().includes(query) ||
        d.shortDescription.toLowerCase().includes(query) ||
        (d.hindiName && d.hindiName.includes(query)) ||
        (d.zone && d.zone.toLowerCase().includes(query));

      // State
      const matchesState = 
        selectedState === 'All India' || d.state.toLowerCase() === selectedState.toLowerCase();

      // Zone
      const matchesZone =
        selectedZone === 'All' || (d.zone && d.zone.toLowerCase() === selectedZone.toLowerCase());

      // Category
      const matchesCategory = 
        selectedCategory === 'All' || d.category.toLowerCase() === selectedCategory.toLowerCase();

      // Sustainability Tier
      const impact = d.sarthiImpactScore || calculateDestinationImpactScore(d);
      let matchesTier = true;
      if (sustainabilityTier === 'Eco Pioneer') matchesTier = impact.overallScore >= 85;
      else if (sustainabilityTier === 'High Sustainable') matchesTier = impact.overallScore >= 75 && impact.overallScore < 85;
      else if (sustainabilityTier === 'Conscious Travel') matchesTier = impact.overallScore < 75;

      // Budget
      let matchesBudget = true;
      if (budgetFilter === 'under-1500') matchesBudget = d.approxCost <= 1500;
      else if (budgetFilter === '1500-2500') matchesBudget = d.approxCost > 1500 && d.approxCost <= 2500;
      else if (budgetFilter === 'above-2500') matchesBudget = d.approxCost > 2500;

      // Crowd
      const matchesCrowd = crowdFilter === 'All' || d.crowdStatus === crowdFilter;

      return matchesSearch && matchesState && matchesZone && matchesCategory && matchesTier && matchesBudget && matchesCrowd;
    }).sort((a, b) => {
      const impactA = a.sarthiImpactScore?.overallScore || 80;
      const impactB = b.sarthiImpactScore?.overallScore || 80;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'impact') return impactB - impactA;
      if (sortBy === 'cost-low') return a.approxCost - b.approxCost;
      if (sortBy === 'cost-high') return b.approxCost - a.approxCost;
      return 0;
    });
  }, [searchQuery, selectedState, selectedZone, selectedCategory, sustainabilityTier, budgetFilter, crowdFilter, sortBy]);

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-100 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-forest-700" />
          <span>Pan-India Sustainable Directory</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Explore Living India
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Discover {DESTINATIONS.length} authentic eco-destinations, sacred tribal waterfalls, trans-Himalayan plateaus, and living craft hamlets across 16+ States and Union Territories.
        </p>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-slate-200/90 space-y-4 max-w-6xl mx-auto">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by state, district, or landmark (e.g. Spiti, Munroe, Dassam, Khuri, Mawlynnong, Kerala, Himachal...)"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm font-medium bg-slate-50/50"
          />
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          
          {/* State / UT Filter */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">State / UT</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold bg-white text-forest-950 focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Zone Filter */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Region Zone</label>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              {ALL_ZONES.map((z) => (
                <option key={z} value={z}>{z} India</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Theme / Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Sustainability Tier Filter */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">SARTHI Impact Tier</label>
            <select
              value={sustainabilityTier}
              onChange={(e) => setSustainabilityTier(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              <option value="All">All Impact Tiers</option>
              <option value="Eco Pioneer">🌟 Eco Pioneer (85-100)</option>
              <option value="High Sustainable">🍃 High Sustainable (75-84)</option>
              <option value="Conscious Travel">🌿 Conscious Travel (65-74)</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Budget / Day</label>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              <option value="All">All Budgets</option>
              <option value="under-1500">Under ₹1,500</option>
              <option value="1500-2500">₹1,500 – ₹2,500</option>
              <option value="above-2500">Above ₹2,500</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold bg-white text-slate-900 focus:outline-none focus:border-forest-600 cursor-pointer"
            >
              <option value="rating">★ Highest Rating</option>
              <option value="impact">🌿 SARTHI Impact Score</option>
              <option value="cost-low">₹ Cost: Low to High</option>
              <option value="cost-high">₹ Cost: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter and Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span>Showing <strong>{filteredDestinations.length}</strong> authenticated Indian destinations</span>
          {(searchQuery || selectedState !== 'All India' || selectedZone !== 'All' || selectedCategory !== 'All' || sustainabilityTier !== 'All' || budgetFilter !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedState('All India');
                setSelectedZone('All');
                setSelectedCategory('All');
                setSustainabilityTier('All');
                setBudgetFilter('All');
                setCrowdFilter('All');
              }}
              className="text-forest-700 font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* DESTINATIONS GRID */}
      <div className="max-w-6xl mx-auto">
        {filteredDestinations.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <div className="text-4xl">🔍</div>
            <h3 className="text-lg font-bold text-slate-800">No destinations match this filter combination</h3>
            <p className="text-xs text-slate-500">Try broadening your State or category selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => {
              const impact = dest.sarthiImpactScore || calculateDestinationImpactScore(dest);
              const tierBadge = getImpactTierBadge(impact);

              return (
                <div
                  key={dest.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Category */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-forest-950/85 text-white text-[11px] font-semibold backdrop-blur-md">
                        {dest.category}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-bold flex items-center gap-1 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                        {dest.rating}
                      </span>
                    </div>

                    {/* State & District */}
                    <div className="absolute bottom-3 left-3 text-white flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="font-semibold">{dest.district}, <strong className="text-gold-300 font-bold">{dest.state}</strong></span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-forest-800 transition-colors font-serif line-clamp-1">
                          {dest.name}
                        </h3>
                      </div>
                      {dest.hindiName && (
                        <p className="text-xs text-gold-700 font-medium">{dest.hindiName}</p>
                      )}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {dest.shortDescription}
                      </p>
                    </div>

                    {/* SARTHI Impact Badge & Audio Guide */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${tierBadge.bgClass} ${tierBadge.textClass} ${tierBadge.borderClass}`}>
                        <Leaf className="w-3 h-3 text-emerald-600" />
                        <span>Impact {impact.overallScore}/100</span>
                        <span className="text-[9px] opacity-80">({tierBadge.tier.split(' ')[0]})</span>
                      </span>

                      {dest.audioGuideText && (
                        <span className="px-2 py-0.5 rounded-full bg-forest-50 text-forest-800 text-[10px] font-semibold border border-forest-200 flex items-center gap-1">
                          <Volume2 className="w-2.5 h-2.5 text-gold-600" />
                          <span>Audio Guide</span>
                        </span>
                      )}
                    </div>

                    {/* Best Time & Approx Cost */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gold-600" />
                          <span>Season:</span>
                        </span>
                        <span className="font-semibold text-slate-800 truncate max-w-[170px]">{dest.bestTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">Est. Cost</span>
                          <p className="text-sm font-bold text-forest-900">₹{dest.approxCost} <span className="font-normal text-xs text-slate-500">/ day</span></p>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              onAddToTrip(dest);
                              triggerConfetti();
                            }}
                            className="p-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 transition-colors cursor-pointer"
                            title="Add to Itinerary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onSelectDestination(dest)}
                            className="px-3.5 py-2 rounded-xl bg-forest-900 group-hover:bg-forest-800 text-gold-400 group-hover:text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
