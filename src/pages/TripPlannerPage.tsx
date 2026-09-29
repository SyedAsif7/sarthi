import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Compass, 
  MapPin, 
  DollarSign, 
  Car, 
  Languages, 
  ShieldCheck, 
  Clock, 
  Check, 
  Download, 
  Bookmark, 
  Navigation, 
  MessageSquare, 
  RefreshCw, 
  Star,
  Hotel,
  CheckCircle2,
  ChevronDown,
  Info,
  Printer,
  Share2
} from 'lucide-react';
import { TripPlanRequest, GeneratedItinerary, Destination } from '../types';
import { generateItinerary } from '../services/itineraryEngine';
import { triggerConfetti, formatINR } from '../utils/toast';

interface TripPlannerPageProps {
  currentItinerary: GeneratedItinerary | null;
  setCurrentItinerary: (itin: GeneratedItinerary | null) => void;
  onSaveTrip: (itin: GeneratedItinerary) => void;
  onViewRouteOnMap: (itin: GeneratedItinerary) => void;
  onAskSarthiWithContext: (itin: GeneratedItinerary) => void;
  onSelectDestinationById: (destId: string) => void;
}

export const TripPlannerPage: React.FC<TripPlannerPageProps> = ({
  currentItinerary,
  setCurrentItinerary,
  onSaveTrip,
  onViewRouteOnMap,
  onAskSarthiWithContext,
  onSelectDestinationById,
}) => {
  // Form State
  const [startingLocation, setStartingLocation] = useState('Ranchi');
  const [destinationRegion, setDestinationRegion] = useState('Chotanagpur Plateau & Waterfalls');
  const [budgetPreset, setBudgetPreset] = useState<number | 'custom'>(10000);
  const [customBudgetValue, setCustomBudgetValue] = useState('15000');
  const [numberOfDays, setNumberOfDays] = useState(3);
  const [numberOfTravellers, setNumberOfTravellers] = useState(2);
  const [travelDate, setTravelDate] = useState('2026-10-15');
  const [travelStyle, setTravelStyle] = useState<'Budget' | 'Comfort' | 'Premium'>('Comfort');
  const [preferredLanguage, setPreferredLanguage] = useState<'English' | 'Hindi' | 'Marathi'>('English');
  const [transportation, setTransportation] = useState<'Car' | 'Bus' | 'Train' | 'Public Transport'>('Car');
  
  // Multi-select interests
  const [interests, setInterests] = useState<string[]>(['Nature', 'Waterfalls', 'Culture']);

  // Loading State
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const interestOptions = [
    'Nature',
    'Waterfalls',
    'Adventure',
    'Culture',
    'Wildlife',
    'Religious',
    'Food',
    'Photography',
    'Tribal Heritage',
    'Relaxation'
  ];

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const getEffectiveBudget = () => {
    if (budgetPreset === 'custom') {
      return parseInt(customBudgetValue, 10) || 10000;
    }
    return budgetPreset;
  };

  // Generate Itinerary Handler
  const handleGenerate = () => {
    setIsGenerating(true);
    setLoadingStep(0);

    // Multi-stage realistic loading experience
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          return 3;
        }
        return prev + 1;
      });
    }, 450);

    setTimeout(() => {
      clearInterval(stepInterval);
      const req: TripPlanRequest = {
        startingLocation,
        destinationRegion,
        budget: getEffectiveBudget(),
        isCustomBudget: budgetPreset === 'custom',
        numberOfDays,
        numberOfTravellers,
        travelDate,
        interests,
        travelStyle,
        preferredLanguage,
        transportation
      };

      const result = generateItinerary(req);
      setCurrentItinerary(result);
      setIsGenerating(false);
      triggerConfetti();

      // Scroll smoothly down to itinerary
      setTimeout(() => {
        const el = document.getElementById('itinerary-results');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1800);
  };

  // Download Itinerary as structured text docket
  const handleDownloadItinerary = () => {
    if (!currentItinerary) return;

    let textContent = `====================================================\n`;
    textContent += `SARTHI — AI TRAVEL COMPANION FOR JHARKHAND\n`;
    textContent += `Team Vertex | Smart India Hackathon 2026\n`;
    textContent += `====================================================\n\n`;
    textContent += `TRIP TITLE: ${currentItinerary.title}\n`;
    textContent += `Starting Point: ${currentItinerary.startingLocation}\n`;
    textContent += `Total Budget: ₹${currentItinerary.totalBudget.toLocaleString('en-IN')}\n`;
    textContent += `Estimated Spend: ₹${currentItinerary.estimatedSpend.toLocaleString('en-IN')}\n`;
    textContent += `Remaining Cushion: ₹${currentItinerary.remainingBudget.toLocaleString('en-IN')}\n`;
    textContent += `Travellers: ${currentItinerary.numberOfTravellers} | Style: ${currentItinerary.travelStyle}\n`;
    textContent += `Interests: ${currentItinerary.interests.join(', ')}\n\n`;
    textContent += `----------------------------------------------------\n`;
    textContent += `DAY-BY-DAY ITINERARY\n`;
    textContent += `----------------------------------------------------\n\n`;

    currentItinerary.days.forEach((day) => {
      textContent += `[ DAY ${day.dayNumber} — ${day.title} ]\n`;
      textContent += `Theme: ${day.theme}\n`;
      day.activities.forEach((act) => {
        textContent += `  • ${act.time} — ${act.title}\n`;
        textContent += `    ${act.description}\n`;
      });
      textContent += `  🏡 Stay: ${day.stay.name} (₹${day.stay.costPerNight}/night)\n`;
      textContent += `  💰 Day Total: ₹${day.dayCosts.total} (Food: ₹${day.dayCosts.food}, Transport: ₹${day.dayCosts.transport}, Stay: ₹${day.dayCosts.stay}, Activities: ₹${day.dayCosts.activities})\n\n`;
    });

    textContent += `====================================================\n`;
    textContent += `Helpline Emergency: 112 | Tourist Police: 1363\n`;
    textContent += `Generated by SARTHI SIH 2026\n`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sarthi-Jharkhand-Itinerary-${currentItinerary.numberOfDays}Days.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // 1-Click WhatsApp Share with styled formatting
  const handleShareWhatsApp = () => {
    if (!currentItinerary) return;
    const lines = [
      `🌲 *SARTHI: Jharkhand AI Travel Itinerary*`,
      `📍 *${currentItinerary.title}*`,
      `⏱️ *Duration:* ${currentItinerary.numberOfDays} Days | 👥 *Travellers:* ${currentItinerary.numberOfTravellers} (${currentItinerary.travelStyle})`,
      `💰 *Total Budget:* ₹${currentItinerary.totalBudget.toLocaleString('en-IN')}`,
      `   • Estimated Expenses: ₹${currentItinerary.estimatedSpend.toLocaleString('en-IN')}`,
      `   • Emergency Cushion: ₹${currentItinerary.remainingBudget.toLocaleString('en-IN')}`,
      `🚗 *Transport:* ${currentItinerary.transportation}`,
      ``,
      `📋 *Day-by-Day Schedule:*`,
      ...currentItinerary.days.map((d) => `• *Day ${d.dayNumber}*: ${d.title} (Stay: ${d.stay.name})`),
      ``,
      `🛡️ *Helpline:* 112 | *Tourist Police:* 1363`,
      `✨ Created with SARTHI — Intelligent Travel Companion for Jharkhand (SIH 2026)`
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Browser Print / Save PDF Handler
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Intelligent Travel Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Tell Sarthi About Your Dream Trip
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Personalized itineraries harmonizing budget, scenic clusters, local tribal homestays, and regional food culture.
        </p>
      </div>

      {/* TRIP PLANNER FORM CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-slate-200/90 max-w-5xl mx-auto space-y-8 relative">
        
        {/* Subtle Tribal Border top accent */}
        <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-forest-700 via-gold-500 to-coral-500 rounded-t-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Starting Location */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Starting Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={startingLocation}
                onChange={(e) => setStartingLocation(e.target.value)}
                placeholder="e.g. Ranchi, Jamshedpur, Bokaro, Kolkata"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm font-medium bg-slate-50/50"
              />
              <MapPin className="w-4 h-4 text-forest-600 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Destination / Region */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Destination / Region
            </label>
            <div className="relative">
              <input
                type="text"
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                placeholder="e.g. Chotanagpur, Netarhat, Betla, Deoghar"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm font-medium bg-slate-50/50"
              />
              <Compass className="w-4 h-4 text-forest-600 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>

        {/* Budget Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Total Trip Budget
            </label>
            <span className="text-xs font-bold text-forest-800">
              Selected: ₹{getEffectiveBudget().toLocaleString('en-IN')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[5000, 10000, 20000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setBudgetPreset(amt)}
                className={`py-3 px-4 rounded-2xl border text-sm font-bold transition-all ${
                  budgetPreset === amt
                    ? 'bg-forest-900 text-gold-400 border-forest-900 shadow-md shadow-forest-900/15'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-forest-400'
                }`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setBudgetPreset('custom')}
              className={`py-3 px-4 rounded-2xl border text-sm font-bold transition-all ${
                budgetPreset === 'custom'
                  ? 'bg-forest-900 text-gold-400 border-forest-900 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-forest-400'
              }`}
            >
              Custom Budget
            </button>
          </div>

          {budgetPreset === 'custom' && (
            <div className="pt-2">
              <input
                type="number"
                value={customBudgetValue}
                onChange={(e) => setCustomBudgetValue(e.target.value)}
                placeholder="Enter custom budget in INR (e.g. 15000)"
                className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold focus:outline-none focus:border-forest-600"
              />
            </div>
          )}
        </div>

        {/* Number of Days & Travellers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Days */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Number of Days
            </label>
            <div className="grid grid-cols-6 gap-1.5">
              {[1, 2, 3, 4, 5, 7].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setNumberOfDays(d)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    numberOfDays === d
                      ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-forest-50'
                  }`}
                >
                  {d === 7 ? '7+' : d}
                </button>
              ))}
            </div>
          </div>

          {/* Travellers */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Number of Travellers
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="20"
                value={numberOfTravellers}
                onChange={(e) => setNumberOfTravellers(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 font-bold text-sm bg-slate-50/50"
              />
              <span className="text-xs text-slate-500 shrink-0 font-medium">People</span>
            </div>
          </div>

          {/* Travel Date */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Travel Date
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 font-medium text-sm bg-slate-50/50"
            />
          </div>
        </div>

        {/* Interests Multi-Select */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Select Your Interests ({interests.length} selected)
          </label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((interest) => {
              const selected = interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
                    selected
                      ? 'bg-forest-900 text-gold-400 border-forest-900 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-forest-300'
                  }`}
                >
                  {selected && <Check className="w-3.5 h-3.5 text-gold-400" />}
                  <span>{interest}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Travel Style, Language, Transportation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-slate-100">
          
          {/* Style */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Travel Style
            </label>
            <select
              value={travelStyle}
              onChange={(e) => setTravelStyle(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="Budget">Budget (Homestays & Shared)</option>
              <option value="Comfort">Comfort (Private Cab & Eco-Resort)</option>
              <option value="Premium">Premium (Valley Cottages & VIP)</option>
            </select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Preferred Language
            </label>
            <select
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Marathi">Marathi (मराठी)</option>
            </select>
          </div>

          {/* Transportation */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Transportation
            </label>
            <select
              value={transportation}
              onChange={(e) => setTransportation(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="Car">Private Car / Taxi</option>
              <option value="Bus">Tourist Bus / Volvo</option>
              <option value="Train">Express Train Circuit</option>
              <option value="Public Transport">Local Public Transport</option>
            </select>
          </div>
        </div>

        {/* SUBMIT CTA BUTTON */}
        <div className="pt-4">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 hover:from-forest-950 hover:to-forest-900 text-gold-400 font-extrabold text-base sm:text-lg shadow-xl shadow-forest-900/25 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-3 disabled:opacity-75"
          >
            <Sparkles className="w-5 h-5 text-gold-400 animate-spin-slow" />
            <span>{isGenerating ? 'Synthesizing Jharkhand Itinerary...' : '✨ Generate My AI Trip'}</span>
          </button>
        </div>

        {/* LOADING ANIMATION OVERLAY AS REQUESTED IN PROMPT */}
        {isGenerating && (
          <div className="p-8 rounded-3xl bg-forest-950 text-white text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-gold-500 to-coral-500 flex items-center justify-center animate-bounce shadow-glow">
              <Sparkles className="w-8 h-8 text-forest-950" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-gold-400">
                Sarthi is creating your perfect journey...
              </h3>
              <p className="text-xs sm:text-sm text-forest-200">
                Optimizing scenic waterfall clusters, local homestays, and realistic travel budgets.
              </p>
            </div>

            {/* Stepper Progress */}
            <div className="max-w-md mx-auto grid grid-cols-4 gap-2 pt-2">
              {[
                'Analyzing budget',
                'Clustering spots',
                'Routing paths',
                'Pairing homestays'
              ].map((stepText, idx) => (
                <div key={idx} className="space-y-1">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx <= loadingStep ? 'bg-gold-400' : 'bg-forest-800'
                    }`}
                  />
                  <p className={`text-[10px] ${idx <= loadingStep ? 'text-gold-300 font-bold' : 'text-forest-400'}`}>
                    {stepText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ==================================================== */}
      {/* ITINERARY RESULTS DISPLAY AS REQUESTED IN PROMPT     */}
      {/* ==================================================== */}
      {currentItinerary && (
        <div id="itinerary-results" className="max-w-5xl mx-auto space-y-8 animate-fadeIn pt-4">
          
          {/* Top Summary Card */}
          <div className="bg-forest-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-gold-500/40 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none text-9xl font-serif">
              🌿
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-bold uppercase tracking-wider">
                  AI Generated Itinerary • Sarthi v2.4
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
                  {currentItinerary.title}
                </h2>
                <p className="text-xs sm:text-sm text-forest-200">
                  {currentItinerary.summary}
                </p>
              </div>

              {/* Top Budget Breakdown */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 bg-white/10 p-2.5 sm:p-4 rounded-2xl backdrop-blur-md border border-white/15 text-center shrink-0 w-full md:w-auto">
                <div>
                  <p className="text-[10px] sm:text-[11px] text-forest-300 font-medium">Total Budget</p>
                  <p className="text-xs sm:text-base font-bold text-white">
                    ₹{currentItinerary.totalBudget.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="border-x border-white/20 px-1 sm:px-2">
                  <p className="text-[10px] sm:text-[11px] text-gold-300 font-medium">Estimated Spend</p>
                  <p className="text-xs sm:text-base font-bold text-gold-400">
                    ₹{currentItinerary.estimatedSpend.toLocaleString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-300 font-medium">Remaining Cushion</p>
                  <p className="text-xs sm:text-base font-bold text-emerald-400">
                    ₹{currentItinerary.remainingBudget.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Responsive grid on mobile, flex on desktop */}
            <div className="mt-6 pt-6 border-t border-forest-800 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => onViewRouteOnMap(currentItinerary)}
                className="px-3.5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-forest-950" />
                <span>View Route</span>
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5 text-forest-300" />
                <span>Modify Trip</span>
              </button>

              <button
                onClick={() => {
                  onSaveTrip(currentItinerary);
                  triggerConfetti();
                }}
                className="px-3.5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Bookmark className="w-3.5 h-3.5 text-gold-400" />
                <span>Save Trip</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                title="Share Itinerary via WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handlePrintPDF}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-gold-300" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleDownloadItinerary}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                title="Download text file"
              >
                <Download className="w-3.5 h-3.5 text-turquoise-400" />
                <span>Export TXT</span>
              </button>

              <button
                onClick={() => onAskSarthiWithContext(currentItinerary)}
                className="col-span-2 sm:col-span-1 sm:ml-auto px-4 py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Ask Sarthi</span>
              </button>
            </div>
          </div>

          {/* DAY BY DAY EXPANDED TIMELINE */}
          <div className="space-y-8">
            {currentItinerary.days.map((day) => (
              <div
                key={day.dayNumber}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/90 space-y-6"
              >
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                      {day.title}
                    </h3>
                    <p className="text-xs text-forest-800 font-semibold mt-0.5">
                      Theme: {day.theme}
                    </p>
                  </div>

                  {/* Day Cost Badge */}
                  <div className="px-4 py-1.5 rounded-xl bg-forest-50 border border-forest-200 text-right">
                    <span className="text-[10px] text-slate-500 font-medium uppercase">Day Total</span>
                    <p className="text-sm font-extrabold text-forest-900">
                      ₹{day.dayCosts.total.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Activities Timeline */}
                <div className="space-y-4">
                  {day.activities.map((act, actIdx) => (
                    <div
                      key={actIdx}
                      className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-forest-300 transition-all"
                    >
                      {/* Time Pill */}
                      <div className="w-24 shrink-0 font-mono font-bold text-xs text-forest-900 flex items-center gap-1.5 pt-1">
                        <Clock className="w-3.5 h-3.5 text-gold-600" />
                        <span>{act.time}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <span>{act.title}</span>
                            {act.destinationId && (
                              <button
                                onClick={() => onSelectDestinationById(act.destinationId!)}
                                className="text-[10px] text-forest-700 hover:underline font-normal"
                              >
                                [Details]
                              </button>
                            )}
                          </h4>
                          <span className="text-xs font-semibold text-slate-600">
                            ~₹{act.costEstimate}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stay Recommendation Card */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                      <Hotel className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-amber-950">Recommended Stay: {day.stay.name}</h4>
                        {day.stay.verified && (
                          <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.2 rounded-full font-bold">
                            Verified ✓
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-800">
                        {day.stay.type} • {day.stay.location} • ★ {day.stay.rating}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-amber-950">₹{day.stay.costPerNight}</span>
                    <span className="text-xs text-amber-800 font-normal"> / night</span>
                  </div>
                </div>

                {/* Day Cost Breakdown Strip as requested in prompt:
                    Estimated: Food ₹800, Transport ₹1,000, Stay ₹1,500, Activities ₹500
                    Day Total: ₹3,800 */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <span><strong>Food:</strong> ₹{day.dayCosts.food}</span>
                    <span><strong>Transport:</strong> ₹{day.dayCosts.transport}</span>
                    <span><strong>Stay:</strong> ₹{day.dayCosts.stay}</span>
                    <span><strong>Activities:</strong> ₹{day.dayCosts.activities}</span>
                  </div>
                  <div className="font-bold text-slate-900">
                    Day Total: ₹{day.dayCosts.total}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
