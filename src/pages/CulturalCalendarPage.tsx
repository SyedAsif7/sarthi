import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  HeartHandshake, 
  Trees, 
  CheckCircle2 
} from 'lucide-react';
import { FESTIVALS } from '../data/festivals';
import { FestivalItem } from '../types';
import { triggerConfetti } from '../utils/toast';

interface CulturalCalendarPageProps {
  onAddFestivalToTrip: (fest: FestivalItem) => void;
  onExploreLocation: (locationStr: string) => void;
}

export const CulturalCalendarPage: React.FC<CulturalCalendarPageProps> = ({
  onAddFestivalToTrip,
  onExploreLocation,
}) => {
  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Header as requested in prompt */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-coral-700 bg-coral-100 px-3.5 py-1 rounded-full">
          Cultural Heritage & Seasons
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          What's Happening in Jharkhand?
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Sync your journey with nature worship, ancient agricultural rhythms, and sacred tribal fairs celebrated with Mandar drums and Sal flowers.
        </p>
      </div>

      {/* Festivals Grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        {FESTIVALS.map((fest) => (
          <div
            key={fest.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col md:flex-row group"
          >
            {/* Image */}
            <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
              <img
                src={fest.image}
                alt={fest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
              
              {/* Date Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-gold-500 text-forest-950 text-xs font-bold shadow-md">
                  {fest.monthDate}
                </span>
              </div>

              {/* Upcoming Date */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[11px] text-gold-300 font-semibold uppercase">Next Observance</p>
                <p className="text-sm font-bold font-mono">{fest.upcomingDate}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-slate-900 group-hover:text-forest-800 transition-colors">
                      {fest.name}
                    </h3>
                    {fest.hindiName && (
                      <p className="text-xs text-gold-700 font-semibold">{fest.hindiName}</p>
                    )}
                  </div>

                  <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-forest-700" />
                    <span>{fest.location}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {fest.description}
                </p>

                {/* Cultural Significance as requested in prompt */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Cultural Significance
                  </h4>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {fest.culturalSignificance}
                  </p>
                </div>

                {/* Rituals List */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Rituals & Sights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {fest.rituals.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to Trip */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Best places:</span> {fest.bestPlacesToObserve.join(' • ')}
                </div>

                <button
                  onClick={() => {
                    onAddFestivalToTrip(fest);
                    triggerConfetti();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-400 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Trip</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
