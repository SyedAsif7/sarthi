import React, { useState } from 'react';
import { 
  X, 
  Star, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Calendar, 
  UserCheck, 
  ShoppingBag, 
  Heart,
  ShieldCheck,
  Check
} from 'lucide-react';
import { MarketplaceItem } from '../types';
import { triggerConfetti } from '../utils/toast';

interface MarketplaceModalProps {
  item: MarketplaceItem | null;
  onClose: () => void;
  onBookSuccess?: (item: MarketplaceItem) => void;
}

export const MarketplaceModal: React.FC<MarketplaceModalProps> = ({
  item,
  onClose,
  onBookSuccess,
}) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDates, setBookingDates] = useState('2026-10-15');
  const [guestCount, setGuestCount] = useState(2);

  if (!item) return null;

  const handleBooking = () => {
    triggerConfetti();
    setBookingConfirmed(true);
    if (onBookSuccess) onBookSuccess(item);
  };

  const getActionLabel = () => {
    switch (item.category) {
      case 'guide': return 'Book Guide (Demo)';
      case 'homestay': return 'Reserve Homestay (Demo)';
      case 'handicraft': return 'Order Authentic Craft (Demo)';
      case 'experience': return 'Enroll in Experience (Demo)';
      case 'food': return 'Book Food Trail (Demo)';
      default: return 'Confirm Request (Demo)';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-forest-600 text-white text-[11px] font-bold uppercase tracking-wider">
                {item.category}
              </span>
              {item.verified && (
                <span className="px-2.5 py-0.5 rounded-full bg-turquoise-600 text-white text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 fill-white text-turquoise-600" />
                  Verified Provider
                </span>
              )}
              {item.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500 text-forest-950 text-[11px] font-bold">
                  {item.badge}
                </span>
              )}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-serif">{item.title}</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">{item.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Rate & Rating Pill */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-forest-50/60 border border-forest-100">
            <div>
              <p className="text-xs text-forest-800 font-semibold uppercase tracking-wider">Price / Offering</p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-bold text-forest-950">₹{item.price.toLocaleString('en-IN')}</span>
                <span className="text-xs text-forest-700 font-medium">{item.priceUnit}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-gold-600 font-bold text-base">
                <Star className="w-4 h-4 fill-current" />
                <span>{item.rating}</span>
                <span className="text-xs text-slate-500 font-normal">({item.reviewsCount} reviews)</span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1 justify-end mt-0.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{item.location}</span>
              </p>
            </div>
          </div>

          {/* Bio / Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">About Provider & Experience</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Details & Amenities Grid */}
          {item.details && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {item.details.languages && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800">Languages Spoken:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.details.languages.map((lang, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white rounded-md border border-slate-200 text-slate-700">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.details.experienceYears && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800">Local Experience:</span>
                  <p className="text-slate-700 mt-1">{item.details.experienceYears}+ years in the region</p>
                </div>
              )}

              {item.details.speciality && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                  <span className="font-bold text-slate-800">Speciality:</span>
                  <p className="text-slate-700 mt-0.5">{item.details.speciality}</p>
                </div>
              )}

              {item.details.amenities && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                  <span className="font-bold text-slate-800">Included Amenities / Perks:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.details.amenities.map((am, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-lg bg-forest-100 text-forest-900 font-medium">
                        ✓ {am}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.details.artisanName && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 sm:col-span-2">
                  <span className="font-bold text-amber-950">Master Artisan:</span>
                  <p className="text-amber-900 mt-0.5">{item.details.artisanName} • {item.details.material}</p>
                </div>
              )}
            </div>
          )}

          {/* Direct Community Livelihood Guarantee */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <p className="text-xs text-emerald-800">
              <strong className="font-semibold">Direct Community Benefit Model:</strong> 100% of the funds go directly to the verified local host or artisan collective with 0% platform intermediary commission.
            </p>
          </div>

          {/* Interactive Demo Booking State */}
          {bookingConfirmed ? (
            <div className="p-5 rounded-2xl bg-emerald-100 border border-emerald-300 text-center space-y-2 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-emerald-950 font-bold text-base">Booking Request Sent Successfully!</h4>
              <p className="text-xs text-emerald-800">
                The provider has been notified via Sarthi SMS. An automated reservation token #JH-{Math.floor(100000 + Math.random() * 900000)} has been created in your profile.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-1.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-colors"
              >
                Close & Continue Exploring
              </button>
            </div>
          ) : (
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase">Preferred Date</label>
                  <input
                    type="date"
                    value={bookingDates}
                    onChange={(e) => setBookingDates(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-forest-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase">Party Size</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-forest-600"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Travellers</option>
                    <option value={4}>4 Travellers (Family)</option>
                    <option value={6}>6+ Travellers</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleBooking}
                  className="flex-1 py-3 rounded-2xl bg-forest-900 hover:bg-forest-800 text-gold-400 hover:text-white font-bold text-sm shadow-lg shadow-forest-900/20 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{getActionLabel()}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Safe Direct Mode: Certified local community host direct connection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
