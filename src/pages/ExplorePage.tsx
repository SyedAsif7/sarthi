import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Calendar, 
  DollarSign, 
  ArrowRight, 
  SlidersHorizontal,
  Compass,
  Check,
  Plus,
  Volume2,
  Users
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types';
import { triggerConfetti } from '../utils/toast';

interface ExplorePageProps {
  onSelectDestination: (dest: Destination) => void;
  onAddToTrip: (dest: Destination) => void;
  preselectedCategory?: string;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onSelectDestination,
  onAddToTrip,
  preselectedCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(preselectedCategory || 'All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [budgetFilter, setBudgetFilter] = useState<string>('All');
  const [crowdFilter, setCrowdFilter] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'rating' | 'cost-low' | 'cost-high' | 'distance'>('rating');

  const districts = ['All', 'Ranchi', 'Latehar', 'Deoghar', 'Ramgarh', 'Giridih', 'West Singhbhum', 'Palamu'];
  const categories = ['All', 'Waterfalls', 'Nature', 'Wildlife', 'Spiritual', 'Adventure', 'Culture'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      // Search
      const matchesSearch = 
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.hindiName && d.hindiName.includes(searchQuery));

      // Category
      const matchesCategory = 
        selectedCategory === 'All' || d.category.toLowerCase() === selectedCategory.toLowerCase();

      // District
      const matchesDistrict = 
        selectedDistrict === 'All' || d.district.toLowerCase().includes(selectedDistrict.toLowerCase());

      // Budget
      let matchesBudget = true;
      if (budgetFilter === 'under-500') matchesBudget = d.approxCost <= 500;
      if (budgetFilter === '500-1000') matchesBudget = d.approxCost > 500 && d.approxCost <= 1000;
      if (budgetFilter === 'above-1000') matchesBudget = d.approxCost > 1000;

      // Crowd
      const matchesCrowd = crowdFilter === 'All' || d.crowdStatus === crowdFilter;

      // Rating
      const matchesRating = d.rating >= minRating;

      return matchesSearch && matchesCategory && matchesDistrict && matchesBudget && matchesCrowd && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'cost-low') return a.approxCost - b.approxCost;
      if (sortBy === 'cost-high') return b.approxCost - a.approxCost;
      if (sortBy === 'distance') return a.distanceRanchi - b.distanceRanchi;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedDistrict, budgetFilter, crowdFilter, minRating, sortBy]);

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-100 px-3.5 py-1 rounded-full">
          Destination Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Explore Jharkhand
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Discover hidden gems, cascading waterfalls, ancient shrines, and pristine wildlife sanctuaries across 24 districts.
        </p>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-200/90 space-y-5 max-w-6xl mx-auto">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Where do you want to explore? (e.g. Dassam, Netarhat, Deoghar, waterfalls...)"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm font-medium bg-slate-50/50"
          />
        </div>

        {/* Filter Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs">
          
          {/* Category Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* District Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600"
            >
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Budget</label>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600"
            >
              <option value="All">All Budgets</option>
              <option value="under-500">Under ₹500 / person</option>
              <option value="500-1000">₹500 – ₹1,000</option>
              <option value="above-1000">Above ₹1,000</option>
            </select>
          </div>

          {/* Crowd Footfall Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Crowd Level</label>
            <select
              value={crowdFilter}
              onChange={(e) => setCrowdFilter(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600"
            >
              <option value="All">All Footfall</option>
              <option value="Low">🟢 Low Crowd</option>
              <option value="Moderate">🟡 Moderate</option>
              <option value="High / Peak Rush">🔴 Peak Rush</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full p-2.5 rounded-xl border border-slate-200 font-medium bg-white focus:outline-none focus:border-forest-600"
            >
              <option value="rating">Highest Rated</option>
              <option value="cost-low">Cost: Low to High</option>
              <option value="cost-high">Cost: High to Low</option>
              <option value="distance">Distance from Ranchi</option>
            </select>
          </div>
        </div>

        {/* Results Counter and Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span>Showing <strong>{filteredDestinations.length}</strong> matching destinations</span>
          {(searchQuery || selectedCategory !== 'All' || selectedDistrict !== 'All' || budgetFilter !== 'All' || crowdFilter !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDistrict('All');
                setBudgetFilter('All');
                setCrowdFilter('All');
              }}
              className="text-forest-700 font-bold hover:underline"
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
            <h3 className="text-lg font-bold text-slate-800">No destinations found matching criteria</h3>
            <p className="text-xs text-slate-500">Try broadening your search term or category filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
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
                    <span className="px-2.5 py-1 rounded-full bg-forest-950/80 text-white text-[11px] font-semibold backdrop-blur-md">
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

                  {/* District & Distance */}
                  <div className="absolute bottom-3 left-3 text-white flex items-center gap-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{dest.district} • {dest.distanceRanchi} km from Ranchi</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-forest-800 transition-colors font-serif">
                      {dest.name}
                    </h3>
                    {dest.hindiName && (
                      <p className="text-xs text-gold-700 font-medium">{dest.hindiName}</p>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.shortDescription}
                    </p>
                  </div>

                  {/* Crowd Footfall & Audio Guide Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${
                      dest.crowdStatus === 'Low' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                      dest.crowdStatus === 'Moderate' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                      'bg-rose-50 text-rose-800 border-rose-300'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        dest.crowdStatus === 'Low' ? 'bg-emerald-500' :
                        dest.crowdStatus === 'Moderate' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                      <span>{dest.crowdStatus || 'Moderate'}</span>
                    </span>

                    {dest.audioGuideText && (
                      <span className="px-2 py-0.5 rounded-full bg-forest-50 text-forest-800 text-[10px] font-semibold border border-forest-200 flex items-center gap-1">
                        <Volume2 className="w-2.5 h-2.5 text-gold-600" />
                        <span>Audio Tour</span>
                      </span>
                    )}
                  </div>

                  {/* Best Time & Approx Cost */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        <span>Best Time:</span>
                      </span>
                      <span className="font-semibold text-slate-800 truncate max-w-[170px]">{dest.bestTime}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Est. Cost</span>
                        <p className="text-sm font-bold text-forest-900">₹{dest.approxCost} <span className="font-normal text-xs text-slate-500">/ person</span></p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            onAddToTrip(dest);
                            triggerConfetti();
                          }}
                          className="p-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 transition-colors"
                          title="Add to Itinerary"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onSelectDestination(dest)}
                          className="px-3.5 py-2 rounded-xl bg-forest-900 group-hover:bg-forest-800 text-gold-400 group-hover:text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
