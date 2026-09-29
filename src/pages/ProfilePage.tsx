import React, { useState } from 'react';
import { 
  User, 
  Bookmark, 
  History, 
  Heart, 
  Settings, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Trash2, 
  CheckCircle,
  Award
} from 'lucide-react';
import { GeneratedItinerary, Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface ProfilePageProps {
  savedTrips: GeneratedItinerary[];
  savedDestinationIds: string[];
  onOpenTrip: (trip: GeneratedItinerary) => void;
  onRemoveTrip: (tripId: string) => void;
  onSelectDestination: (dest: Destination) => void;
  onPlanTripClick: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  savedTrips,
  savedDestinationIds,
  onOpenTrip,
  onRemoveTrip,
  onSelectDestination,
  onPlanTripClick,
}) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'history' | 'wishlist' | 'preferences'>('saved');

  // Seeded mock previous completed trips for a realistic feel
  const previousTrips = [
    {
      id: 'prev-1',
      title: 'Netarhat & Betla Wildlife Expedition',
      date: 'January 2026',
      days: 3,
      spend: '₹8,650',
      rating: 5,
      highlights: 'Magnolia sunset, Koel dawn view, spotted wild elephant herd in Betla'
    },
    {
      id: 'prev-2',
      title: 'Deoghar Shravani Pilgrimage & Trikut Ropeway',
      date: 'August 2025',
      days: 2,
      spend: '₹4,800',
      rating: 5,
      highlights: 'Baba Baidyanath Abhishek, Trikut Parvat ropeway, authentic Deoghar Peda'
    }
  ];

  const wishlistDestinations = DESTINATIONS.filter((d) => savedDestinationIds.includes(d.id));

  return (
    <div className="space-y-10 pb-20 animate-fadeIn max-w-6xl mx-auto">
      
      {/* 1. TOURIST PROFILE HEADER CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest-700 via-gold-500 to-coral-500" />

        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-forest-900 to-forest-700 text-gold-400 font-bold text-2xl flex items-center justify-center shadow-lg border-2 border-gold-400">
            AS
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-bold font-serif text-slate-900">Aarav Sharma</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-900 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3 h-3 text-gold-600" />
                Sarthi Explorer
              </span>
            </div>
            <p className="text-xs text-slate-500">aarav.sharma@example.com • +91 98765 43210</p>
            <p className="text-xs text-forest-800 font-medium pt-0.5">
              Member since Jan 2026 • 2 Trips Completed in Jharkhand
            </p>
          </div>
        </div>

        {/* Quick Stats Pill */}
        <div className="grid grid-cols-3 gap-3 bg-cream-100/70 p-4 rounded-2xl border border-gold-200/60 text-center w-full md:w-auto">
          <div>
            <p className="text-[11px] text-slate-500 font-medium">Saved Trips</p>
            <p className="text-lg font-bold text-forest-900">{savedTrips.length}</p>
          </div>
          <div className="border-x border-gold-200/60 px-3">
            <p className="text-[11px] text-slate-500 font-medium">Completed</p>
            <p className="text-lg font-bold text-forest-900">2</p>
          </div>
          <div>
            <p className="text-[11px] text-slate-500 font-medium">Wishlist</p>
            <p className="text-lg font-bold text-forest-900">{savedDestinationIds.length}</p>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION SUB-TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'saved'
              ? 'bg-forest-900 text-gold-400 shadow-sm'
              : 'bg-white text-slate-600 hover:bg-forest-50'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>My Sarthi Trips ({savedTrips.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'history'
              ? 'bg-forest-900 text-gold-400 shadow-sm'
              : 'bg-white text-slate-600 hover:bg-forest-50'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Previous Trips (2)</span>
        </button>

        <button
          onClick={() => setActiveTab('wishlist')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'wishlist'
              ? 'bg-forest-900 text-gold-400 shadow-sm'
              : 'bg-white text-slate-600 hover:bg-forest-50'
          }`}
        >
          <Heart className="w-3.5 h-3.5" />
          <span>Wishlist ({savedDestinationIds.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('preferences')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'preferences'
              ? 'bg-forest-900 text-gold-400 shadow-sm'
              : 'bg-white text-slate-600 hover:bg-forest-50'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Travel Preferences</span>
        </button>
      </div>

      {/* 3. TAB PANELS */}
      {/* A. MY SARTHI TRIPS */}
      {activeTab === 'saved' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              My Sarthi Trips
            </h2>
            <button
              onClick={onPlanTripClick}
              className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plan New Trip</span>
            </button>
          </div>

          {savedTrips.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mx-auto text-xl">
                🌿
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-800">No Saved Trips Yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Use the AI Trip Planner to create an itinerary tailored to your budget and click "Save Trip" to store it here.
                </p>
              </div>
              <button
                onClick={onPlanTripClick}
                className="px-5 py-2.5 rounded-xl bg-forest-900 text-gold-400 font-bold text-xs shadow-md"
              >
                Launch AI Trip Planner
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover:shadow-card transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-900 text-[10px] font-bold">
                        {trip.numberOfDays} Days Journey
                      </span>
                      <button
                        onClick={() => onRemoveTrip(trip.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Delete Trip"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 font-serif">{trip.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{trip.summary}</p>
                    
                    <div className="flex items-center gap-4 text-xs pt-1 text-slate-600">
                      <span><strong>Budget:</strong> ₹{trip.totalBudget.toLocaleString('en-IN')}</span>
                      <span><strong>Spend:</strong> ₹{trip.estimatedSpend.toLocaleString('en-IN')}</span>
                      <span><strong>Style:</strong> {trip.travelStyle}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Saved {new Date(trip.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => onOpenTrip(trip)}
                      className="px-4 py-2 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-400 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Open Trip</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* B. PREVIOUS COMPLETED TRIPS */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Previous Completed Trips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousTrips.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Completed ✓
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{p.date}</span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 font-serif">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Highlights:</strong> {p.highlights}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-500">Duration: {p.days} Days • Total: {p.spend}</span>
                  <span className="text-gold-500 font-bold">★★★★★ 5.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* C. WISHLIST */}
      {activeTab === 'wishlist' && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Saved Wishlist Destinations ({wishlistDestinations.length})
          </h2>

          {wishlistDestinations.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
              <div className="text-3xl">❤️</div>
              <h3 className="text-base font-bold text-slate-800">Your Wishlist is Empty</h3>
              <p className="text-xs text-slate-500">Click "+ Trip" on any destination in Explore or Map to save it here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistDestinations.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all group flex flex-col justify-between"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-forest-950/80 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                      {dest.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="font-bold text-base text-slate-900 font-serif">{dest.name}</h4>
                    <p className="text-xs text-slate-500">{dest.district} District • ₹{dest.approxCost}/person</p>
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="w-full mt-2 py-2 rounded-xl bg-forest-900 text-gold-400 font-bold text-xs hover:bg-forest-800 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* D. PREFERENCES */}
      {activeTab === 'preferences' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Traveler Preferences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Default Budget Preference</label>
              <p className="font-bold text-forest-900 text-base">₹10,000 – ₹15,000 (Comfort Tier)</p>
              <p className="text-xs text-slate-500">Prefers verified homestays and private vehicle transfers.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Preferred Language</label>
              <p className="font-bold text-forest-900 text-base">English & Hindi</p>
              <p className="text-xs text-slate-500">Local dialect support: Sadri / Mundari phrases enabled.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 md:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Favorite Categories</label>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Waterfalls', 'Nature', 'Tribal Culture', 'Wildlife'].map((cat, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-forest-100 text-forest-900 font-bold text-xs">
                    ✓ {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
