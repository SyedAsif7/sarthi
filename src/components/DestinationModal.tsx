import React from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Clock, 
  Calendar, 
  Compass, 
  ShieldAlert, 
  CloudSun, 
  Utensils, 
  CheckCircle2, 
  Plus, 
  Navigation
} from 'lucide-react';
import { Destination } from '../types';
import { triggerConfetti } from '../utils/toast';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onAddToTrip: (dest: Destination) => void;
  onViewOnMap: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onAddToTrip,
  onViewOnMap,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-forest-600/90 text-white text-xs font-semibold backdrop-blur-md">
                  {destination.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-gold-500/90 text-forest-950 text-xs font-bold backdrop-blur-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {destination.rating} ({destination.reviewsCount} reviews)
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs backdrop-blur-md">
                  {destination.district} District
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif">{destination.name}</h2>
              {destination.hindiName && (
                <p className="text-gold-300 text-sm font-medium mt-0.5">{destination.hindiName}</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  onAddToTrip(destination);
                  triggerConfetti();
                }}
                className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Trip</span>
              </button>
              <button
                onClick={() => {
                  onViewOnMap(destination);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-forest-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
              >
                <Navigation className="w-4 h-4 text-forest-700" />
                <span>View on Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Overview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-cream-100 border border-gold-200/60">
            <div>
              <p className="text-xs text-slate-500 font-medium">Approx Cost</p>
              <p className="text-lg font-bold text-forest-900">₹{destination.approxCost} <span className="text-xs font-normal text-slate-500">/person</span></p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Timings</p>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>{destination.timings}</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Best Time</p>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{destination.bestTime}</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Live Weather</p>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <CloudSun className="w-3.5 h-3.5 text-turquoise-600 shrink-0" />
                <span>{destination.weatherPlaceholder.temp} • {destination.weatherPlaceholder.condition}</span>
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-forest-950 font-serif border-l-4 border-gold-500 pl-3">
              About this Destination
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {destination.about}
            </p>
          </div>

          {/* Things to Do */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-forest-950 font-serif border-l-4 border-forest-600 pl-3">
              Things to Do & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.thingsToDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-forest-50/60 border border-forest-100 text-xs sm:text-sm text-forest-950">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Reach & Nearby */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* How to Reach */}
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Compass className="w-4 h-4 text-forest-700" />
                <span>How to Reach</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong className="text-slate-900">✈️ Air:</strong> {destination.howToReach.air}</p>
                <p><strong className="text-slate-900">🚆 Rail:</strong> {destination.howToReach.rail}</p>
                <p><strong className="text-slate-900">🚗 Road:</strong> {destination.howToReach.road}</p>
              </div>
            </div>

            {/* Local Food to Try */}
            <div className="space-y-3 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
              <h4 className="text-sm font-bold text-amber-950 flex items-center gap-1.5 uppercase tracking-wide">
                <Utensils className="w-4 h-4 text-amber-700" />
                <span>Local Cuisines to Savor</span>
              </h4>
              <div className="space-y-2 text-xs text-amber-900">
                {destination.localFood.map((food, idx) => (
                  <div key={idx} className="border-b border-amber-200/50 pb-1.5 last:border-0 last:pb-0">
                    <p className="font-bold text-amber-950">{food.name}</p>
                    <p className="text-slate-600">{food.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety Information Alert */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">Tourist Safety Advisory</h4>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                {destination.safetyInfo}
              </p>
            </div>
          </div>

          {/* Entry Fee & Nearby */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div>
              <span className="font-semibold text-slate-700">Entry Fee:</span> {destination.entryFee}
            </div>
            <div>
              <span className="font-semibold text-slate-700">Nearby Attractions:</span> {destination.nearbyAttractions.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
