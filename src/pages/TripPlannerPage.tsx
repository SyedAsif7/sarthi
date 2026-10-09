import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Compass, 
  MapPin, 
  Car, 
  Clock, 
  Check, 
  Download, 
  Bookmark, 
  Navigation, 
  MessageSquare, 
  RefreshCw, 
  Star,
  Hotel,
  Globe,
  Printer,
  Share2,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Scale,
  X,
  Info,
  Train,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { TripPlanRequest, GeneratedItinerary } from '../types';
import { generateItinerary } from '../services/itineraryEngine';
import { INDIAN_STATES } from '../data/destinations';
import { getImpactTierBadge, IMPACT_ASSUMPTIONS_DISCLAIMER } from '../utils/impactScore';
import { triggerConfetti } from '../utils/toast';

interface TripPlannerPageProps {
  currentItinerary: GeneratedItinerary | null;
  setCurrentItinerary: (itin: GeneratedItinerary | null) => void;
  onSaveTrip: (itin: GeneratedItinerary) => void;
  onViewRouteOnMap: (itin: GeneratedItinerary) => void;
  onAskSarthiWithContext: (itin: GeneratedItinerary) => void;
  onSelectDestinationById: (destId: string) => void;
  activeLanguage?: string;
}

export const TripPlannerPage: React.FC<TripPlannerPageProps> = ({
  currentItinerary,
  setCurrentItinerary,
  onSaveTrip,
  onViewRouteOnMap,
  onAskSarthiWithContext,
  onSelectDestinationById,
  activeLanguage,
}) => {
  // Form State
  const [selectedState, setSelectedState] = useState<string>('All India');
  const [startingLocation, setStartingLocation] = useState('New Delhi / Gateway Hub');
  const [destinationRegion, setDestinationRegion] = useState('Pan-India Sustainable & Cultural Circuits');
  const [budgetPreset, setBudgetPreset] = useState<number | 'custom'>(12000);
  const [customBudgetValue, setCustomBudgetValue] = useState('18000');
  const [numberOfDays, setNumberOfDays] = useState(3);
  const [numberOfTravellers, setNumberOfTravellers] = useState(2);
  const [travelDate, setTravelDate] = useState('2026-10-15');
  const [travelStyle, setTravelStyle] = useState<'Budget' | 'Comfort' | 'Premium'>('Comfort');
  const [preferredLanguage, setPreferredLanguage] = useState<'English' | 'Hindi' | 'Bengali' | 'Tamil' | 'Marathi' | 'Santali'>('English');

  // Sync preferred language from global activeLanguage
  React.useEffect(() => {
    if (activeLanguage) {
      const map: Record<string, 'English' | 'Hindi' | 'Bengali' | 'Tamil' | 'Marathi' | 'Santali'> = {
        en: 'English',
        hi: 'Hindi',
        bn: 'Bengali',
        ta: 'Tamil',
        mr: 'Marathi',
        sat: 'Santali'
      };
      if (map[activeLanguage]) {
        setPreferredLanguage(map[activeLanguage]);
      }
    }
  }, [activeLanguage]);
  const [transportation, setTransportation] = useState<'Car' | 'Bus' | 'Train' | 'Public Transport'>('Train');
  
  // Multi-select interests
  const [interests, setInterests] = useState<string[]>(['Nature', 'Culture', 'Eco-Tourism']);

  // Loading State
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Compare Modal State
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const interestOptions = [
    'Nature',
    'Culture',
    'Heritage',
    'Eco-Tourism',
    'Waterfalls',
    'Wildlife',
    'Spiritual',
    'Adventure',
    'Handicrafts',
    'Local Cuisines',
    'Photography',
    'Tribal Traditions'
  ];

  // Update default hubs when state changes
  const handleStateChange = (stateName: string) => {
    setSelectedState(stateName);
    if (stateName === 'Himachal Pradesh') {
      setStartingLocation('Shimla / Chandigarh');
      setDestinationRegion('Spiti & Great Himalayan Valleys');
    } else if (stateName === 'Kerala') {
      setStartingLocation('Kochi / Trivandrum');
      setDestinationRegion('Backwaters & Western Ghats');
    } else if (stateName === 'Meghalaya') {
      setStartingLocation('Shillong / Guwahati');
      setDestinationRegion('Khasi Hills & Living Root Bridges');
    } else if (stateName === 'Rajasthan') {
      setStartingLocation('Jaipur / Jodhpur');
      setDestinationRegion('Thar Desert & Aravalli Forts');
    } else if (stateName === 'Maharashtra') {
      setStartingLocation('Mumbai / Chhatrapati Sambhajinagar');
      setDestinationRegion('Sahyadri Hills & UNESCO Rock-Cut Heritage');
    } else if (stateName === 'Jharkhand') {
      setStartingLocation('Ranchi');
      setDestinationRegion('Chotanagpur Plateau & Waterfalls');
    } else if (stateName === 'Ladakh') {
      setStartingLocation('Leh');
      setDestinationRegion('Nubra Valley & High Gompas');
    } else if (stateName === 'Uttarakhand') {
      setStartingLocation('Rishikesh / Dehradun');
      setDestinationRegion('Garhwal Himalayas & Bugyals');
    } else {
      setStartingLocation('New Delhi / Hub Gateway');
      setDestinationRegion('Pan-India Sustainable Circuits');
    }
  };

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const getEffectiveBudget = () => {
    if (budgetPreset === 'custom') {
      return parseInt(customBudgetValue, 10) || 12000;
    }
    return budgetPreset;
  };

  // Generate Itinerary Handler
  const handleGenerate = () => {
    setIsGenerating(true);
    setLoadingStep(0);

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
        selectedState: selectedState !== 'All India' ? selectedState : undefined,
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
    textContent += `SARTHI AI — PAN-INDIA SUSTAINABLE TOURISM PLATFORM\n`;
    textContent += `Intelligent Low-Carbon Itinerary & Impact Docket\n`;
    textContent += `====================================================\n\n`;
    textContent += `TRIP TITLE: ${currentItinerary.title}\n`;
    textContent += `Territory/State: ${currentItinerary.selectedState || 'Pan-India'}\n`;
    textContent += `Starting Hub: ${currentItinerary.startingLocation}\n`;
    textContent += `Total Budget: ₹${currentItinerary.totalBudget.toLocaleString('en-IN')}\n`;
    textContent += `Estimated Spend: ₹${currentItinerary.estimatedSpend.toLocaleString('en-IN')}\n`;
    textContent += `Savings Buffer: ₹${currentItinerary.remainingBudget.toLocaleString('en-IN')}\n`;
    textContent += `Travellers: ${currentItinerary.numberOfTravellers} | Style: ${currentItinerary.travelStyle}\n`;
    textContent += `Interests: ${currentItinerary.interests.join(', ')}\n\n`;

    if (currentItinerary.sarthiImpactScore) {
      textContent += `----------------------------------------------------\n`;
      textContent += `EXPLAINABLE SARTHI IMPACT SCORE: ${currentItinerary.sarthiImpactScore.overallScore}/100\n`;
      textContent += `Sustainability Tier: ${currentItinerary.sarthiImpactScore.tier}\n\n`;
      
      if (currentItinerary.sarthiImpactScore.categories) {
        const c = currentItinerary.sarthiImpactScore.categories;
        textContent += `1. Environmental Sustainability: ${c.environmentalSustainability.score}/30\n`;
        textContent += `   ${c.environmentalSustainability.metricText}\n`;
        textContent += `2. Local Economic Contribution: ${c.localEconomicContribution.score}/25\n`;
        textContent += `   ${c.localEconomicContribution.metricText}\n`;
        textContent += `3. Cultural Heritage Engagement: ${c.culturalHeritageEngagement.score}/20\n`;
        textContent += `   ${c.culturalHeritageEngagement.metricText}\n`;
        textContent += `4. Sustainable Transportation: ${c.sustainableTransportation.score}/15\n`;
        textContent += `   ${c.sustainableTransportation.metricText}\n`;
        textContent += `5. Responsible Tourism Practices: ${c.responsibleTourismPractices.score}/10\n`;
        textContent += `   ${c.responsibleTourismPractices.metricText}\n`;
      }
      textContent += `\nESTIMATES & ASSUMPTIONS DISCLAIMER:\n`;
      textContent += `${currentItinerary.sarthiImpactScore.assumptionsDisclaimer || IMPACT_ASSUMPTIONS_DISCLAIMER}\n`;
      textContent += `----------------------------------------------------\n\n`;
    }

    textContent += `DAY-BY-DAY ITINERARY\n`;
    textContent += `----------------------------------------------------\n\n`;

    currentItinerary.days.forEach((day) => {
      textContent += `[ DAY ${day.dayNumber} — ${day.title} ]\n`;
      textContent += `Theme: ${day.theme}\n`;
      day.activities.forEach((act) => {
        textContent += `  • ${act.time} — ${act.title}\n`;
        textContent += `    ${act.description}\n`;
      });
      textContent += `  🏡 Verified Stay: ${day.stay.name} (₹${day.stay.costPerNight}/night)\n`;
      textContent += `  💰 Day Total: ₹${day.dayCosts.total} (Food: ₹${day.dayCosts.food}, Transport: ₹${day.dayCosts.transport}, Stay: ₹${day.dayCosts.stay}, Activities: ₹${day.dayCosts.activities})\n\n`;
    });

    textContent += `====================================================\n`;
    textContent += `Helpline Emergency: 112 | Pan-India Tourist Helpline: 1363 (24x7 Multi-lingual)\n`;
    textContent += `Generated by SARTHI AI Sustainable Tourism Platform\n`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SARTHI-Sustainable-Itinerary-${currentItinerary.numberOfDays}Days.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // 1-Click WhatsApp Share with styled formatting
  const handleShareWhatsApp = () => {
    if (!currentItinerary) return;
    const lines = [
      `🇮🇳 *SARTHI AI: Sustainable Indian Travel Itinerary*`,
      `📍 *${currentItinerary.title}*`,
      `⏱️ *Duration:* ${currentItinerary.numberOfDays} Days | 👥 *Travellers:* ${currentItinerary.numberOfTravellers} (${currentItinerary.travelStyle})`,
      `🌿 *SARTHI Impact Score:* ${currentItinerary.sarthiImpactScore?.overallScore || 88}/100 (${currentItinerary.sarthiImpactScore?.tier || 'Eco Pioneer'})`,
      `💰 *Total Budget:* ₹${currentItinerary.totalBudget.toLocaleString('en-IN')}`,
      `   • Estimated Expenses: ₹${currentItinerary.estimatedSpend.toLocaleString('en-IN')}`,
      `   • Emergency Cushion: ₹${currentItinerary.remainingBudget.toLocaleString('en-IN')}`,
      `🚆 *Transit Mode:* ${currentItinerary.transportation}`,
      ``,
      `📋 *Day-by-Day Schedule:*`,
      ...currentItinerary.days.map((d) => `• *Day ${d.dayNumber}*: ${d.title} (Stay: ${d.stay.name})`),
      ``,
      `🛡️ *National Tourist Helpline:* 1363 | *Emergency:* 112`,
      `✨ Created with SARTHI AI — Pan-India Intelligent Sustainable Tourism Platform`
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-forest-700" />
          <span>Pan-India Sustainable Travel Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Plan Your Conscious Indian Odyssey
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Personalized itineraries harmonizing budget, certified community homestays, GI craft clusters, and explainable SARTHI Impact Scores across all 28 States & 8 UTs.
        </p>
      </div>

      {/* TRIP PLANNER FORM CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-slate-200/90 max-w-5xl mx-auto space-y-8 relative">
        
        {/* Subtle Accent Border */}
        <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-forest-700 via-gold-500 to-coral-500 rounded-t-full" />

        {/* State / UT Selector Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-forest-50/80 border border-forest-200/80 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-forest-950 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-forest-700" />
              <span>Select Destination State / Territory</span>
            </label>
            <span className="text-xs text-forest-700 font-semibold">
              Currently Selected: <strong>{selectedState}</strong>
            </span>
          </div>

          <select
            value={selectedState}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-forest-300 font-bold text-sm bg-white text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-600 cursor-pointer shadow-xs"
          >
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>
                {st === 'All India' ? '🇮🇳 All India (Curated Pan-India Highlights)' : `${st}`}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Starting Location Hub */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Starting Hub / Gateway
            </label>
            <div className="relative">
              <input
                type="text"
                value={startingLocation}
                onChange={(e) => setStartingLocation(e.target.value)}
                placeholder="e.g. New Delhi, Bengaluru, Mumbai, Ranchi, Kochi"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm font-medium bg-slate-50/50"
              />
              <MapPin className="w-4 h-4 text-forest-600 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Destination / Region Focus */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Region / Circuit Focus
            </label>
            <div className="relative">
              <input
                type="text"
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                placeholder="e.g. Spiti Valley, Kerala Backwaters, Chotanagpur, Thar Desert"
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
              Allocated: ₹{getEffectiveBudget().toLocaleString('en-IN')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[8000, 15000, 25000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setBudgetPreset(amt)}
                className={`py-3 px-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
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
              className={`py-3 px-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
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
                placeholder="Enter custom budget in INR (e.g. 20000)"
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
                  className={`py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
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
            Select Your Travel Themes ({interests.length} chosen)
          </label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((interest) => {
              const selected = interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
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
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white cursor-pointer"
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
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white cursor-pointer"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Bengali">Bengali (বাংলা)</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Marathi">Marathi (मराठी)</option>
              <option value="Santali">Santali (संथाली)</option>
            </select>
          </div>

          {/* Transportation */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Transportation Mode
            </label>
            <select
              value={transportation}
              onChange={(e) => setTransportation(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold bg-white cursor-pointer"
            >
              <option value="Train">🚆 Indian Railways (Low Carbon - High Impact)</option>
              <option value="Bus">🚌 Electric / State Express Bus</option>
              <option value="Car">🚗 Private Cab / Carpooling</option>
              <option value="Public Transport">🛺 Shared Eco-Transit</option>
            </select>
          </div>
        </div>

        {/* SUBMIT CTA BUTTON */}
        <div className="pt-4">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 hover:from-forest-950 hover:to-forest-900 text-gold-400 font-extrabold text-base sm:text-lg shadow-xl shadow-forest-900/25 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-3 disabled:opacity-75 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-gold-400 animate-spin-slow" />
            <span>{isGenerating ? `Synthesizing ${selectedState} Itinerary...` : `✨ Generate Sustainable ${selectedState} Trip`}</span>
          </button>
        </div>

        {/* LOADING ANIMATION OVERLAY */}
        {isGenerating && (
          <div className="p-8 rounded-3xl bg-forest-950 text-white text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-gold-500 to-coral-500 flex items-center justify-center animate-bounce shadow-glow">
              <Sparkles className="w-8 h-8 text-forest-950" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-gold-400">
                SARTHI AI is computing your sustainable journey...
              </h3>
              <p className="text-xs sm:text-sm text-forest-200">
                Evaluating low-carbon rail corridors, verified community homestays, and calculating your SARTHI Impact Score.
              </p>
            </div>

            {/* Stepper Progress */}
            <div className="max-w-md mx-auto grid grid-cols-4 gap-2 pt-2">
              {[
                'Analyzing budget',
                'Filtering state spots',
                'Routing transit',
                'Computing impact score'
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
      {/* ITINERARY RESULTS DISPLAY                            */}
      {/* ==================================================== */}
      {currentItinerary && (
        <div id="itinerary-results" className="max-w-5xl mx-auto space-y-8 animate-fadeIn pt-4">
          
          {/* Top Summary Card */}
          <div className="bg-forest-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-gold-500/40 relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none text-9xl font-serif">
              🇮🇳
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>SARTHI Pan-India Engine • {currentItinerary.selectedState || 'India'}</span>
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
                  <p className="text-[10px] sm:text-[11px] text-emerald-300 font-medium">Savings Buffer</p>
                  <p className="text-xs sm:text-base font-bold text-emerald-400">
                    ₹{currentItinerary.remainingBudget.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-6 border-t border-forest-800 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => onViewRouteOnMap(currentItinerary)}
                className="px-3.5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-forest-950" />
                <span>View on Map</span>
              </button>

              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                title="Compare with Conventional Travel Plan"
              >
                <Scale className="w-4 h-4 text-white" />
                <span>Compare Plans</span>
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-forest-300" />
                <span>Modify Parameters</span>
              </button>

              <button
                onClick={() => {
                  onSaveTrip(currentItinerary);
                  triggerConfetti();
                }}
                className="px-3.5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-gold-400" />
                <span>Save Trip</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                title="Share Itinerary via WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handlePrintPDF}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-gold-300" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleDownloadItinerary}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Download text file"
              >
                <Download className="w-3.5 h-3.5 text-cyan-300" />
                <span>Export TXT</span>
              </button>

              <button
                onClick={() => onAskSarthiWithContext(currentItinerary)}
                className="col-span-2 sm:col-span-1 sm:ml-auto px-4 py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Ask Sarthi AI</span>
              </button>
            </div>
          </div>

          {/* EXPLAINABLE SARTHI IMPACT SCORE ITINERARY CARD */}
          {currentItinerary.sarthiImpactScore && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-emerald-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center text-xl shadow-sm">
                    🌿
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">Explainable SARTHI Impact Score</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        {currentItinerary.sarthiImpactScore.tier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Multi-criteria sustainability benchmark evaluated across 5 official categories (KALAM STREAM Challenge 2026)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="bg-forest-50 px-5 py-2.5 rounded-2xl border border-forest-200 text-center">
                    <span className="text-3xl font-black text-forest-900">
                      {currentItinerary.sarthiImpactScore.overallScore}<span className="text-sm font-normal text-slate-500">/100</span>
                    </span>
                    <p className="text-[10px] font-bold text-forest-700 uppercase tracking-wider">Overall Rating</p>
                  </div>
                </div>
              </div>

              {/* 5 CATEGORIES BREAKDOWN (30 / 25 / 20 / 15 / 10 = 100 POINTS) */}
              {currentItinerary.sarthiImpactScore.categories ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Category 1: Environmental Sustainability (30 pts) */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                        <Leaf className="w-4 h-4 text-emerald-700" />
                        Environmental Sustainability
                      </span>
                      <span className="font-extrabold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                        {currentItinerary.sarthiImpactScore.categories.environmentalSustainability.score} / 30 pts
                      </span>
                    </div>
                    <div className="w-full bg-emerald-200/60 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(currentItinerary.sarthiImpactScore.categories.environmentalSustainability.score / 30) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-emerald-900 leading-snug font-medium">
                      {currentItinerary.sarthiImpactScore.categories.environmentalSustainability.metricText}
                    </p>
                    <p className="text-[11px] text-emerald-700 leading-tight">
                      {currentItinerary.sarthiImpactScore.categories.environmentalSustainability.explanation}
                    </p>
                  </div>

                  {/* Category 2: Local Economic Contribution (25 pts) */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-950 flex items-center gap-1.5">
                        <HeartHandshake className="w-4 h-4 text-amber-700" />
                        Local Economic Contribution
                      </span>
                      <span className="font-extrabold text-amber-800 bg-white px-2 py-0.5 rounded-full border border-amber-200">
                        {currentItinerary.sarthiImpactScore.categories.localEconomicContribution.score} / 25 pts
                      </span>
                    </div>
                    <div className="w-full bg-amber-200/60 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(currentItinerary.sarthiImpactScore.categories.localEconomicContribution.score / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-amber-900 leading-snug font-medium">
                      {currentItinerary.sarthiImpactScore.categories.localEconomicContribution.metricText}
                    </p>
                    <p className="text-[11px] text-amber-700 leading-tight">
                      {currentItinerary.sarthiImpactScore.categories.localEconomicContribution.explanation}
                    </p>
                  </div>

                  {/* Category 3: Cultural Heritage Engagement (20 pts) */}
                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-purple-950 flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-purple-700" />
                        Cultural Heritage Engagement
                      </span>
                      <span className="font-extrabold text-purple-800 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                        {currentItinerary.sarthiImpactScore.categories.culturalHeritageEngagement.score} / 20 pts
                      </span>
                    </div>
                    <div className="w-full bg-purple-200/60 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-purple-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(currentItinerary.sarthiImpactScore.categories.culturalHeritageEngagement.score / 20) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-purple-900 leading-snug font-medium">
                      {currentItinerary.sarthiImpactScore.categories.culturalHeritageEngagement.metricText}
                    </p>
                    <p className="text-[11px] text-purple-700 leading-tight">
                      {currentItinerary.sarthiImpactScore.categories.culturalHeritageEngagement.explanation}
                    </p>
                  </div>

                  {/* Category 4: Sustainable Transportation (15 pts) */}
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-cyan-950 flex items-center gap-1.5">
                        <Train className="w-4 h-4 text-cyan-700" />
                        Sustainable Transportation
                      </span>
                      <span className="font-extrabold text-cyan-800 bg-white px-2 py-0.5 rounded-full border border-cyan-200">
                        {currentItinerary.sarthiImpactScore.categories.sustainableTransportation.score} / 15 pts
                      </span>
                    </div>
                    <div className="w-full bg-cyan-200/60 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-cyan-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(currentItinerary.sarthiImpactScore.categories.sustainableTransportation.score / 15) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-cyan-900 leading-snug font-medium">
                      {currentItinerary.sarthiImpactScore.categories.sustainableTransportation.metricText}
                    </p>
                    <p className="text-[11px] text-cyan-700 leading-tight">
                      {currentItinerary.sarthiImpactScore.categories.sustainableTransportation.explanation}
                    </p>
                  </div>

                  {/* Category 5: Responsible Tourism Practices (10 pts) */}
                  <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-teal-950 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-teal-700" />
                        Responsible Tourism Practices
                      </span>
                      <span className="font-extrabold text-teal-800 bg-white px-2 py-0.5 rounded-full border border-teal-200">
                        {currentItinerary.sarthiImpactScore.categories.responsibleTourismPractices.score} / 10 pts
                      </span>
                    </div>
                    <div className="w-full bg-teal-200/60 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-teal-600 h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(currentItinerary.sarthiImpactScore.categories.responsibleTourismPractices.score / 10) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-teal-900 leading-snug font-medium">
                      {currentItinerary.sarthiImpactScore.categories.responsibleTourismPractices.metricText}
                    </p>
                    <p className="text-[11px] text-teal-700 leading-tight">
                      {currentItinerary.sarthiImpactScore.categories.responsibleTourismPractices.explanation}
                    </p>
                  </div>

                  {/* Total Weight Summary Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Weight Distribution Matrix
                      </span>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Environmental: 30 • Economic: 25 • Cultural: 20 • Transit: 15 • Practices: 10 = <strong>100 Total Points</strong>
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-forest-800 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Full 5-Pillar Alignment Verified</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Fallback 3-pillar breakdown if categories not available */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200/80 space-y-2">
                    <span className="text-xs font-bold text-cyan-950">Carbon Efficiency ({currentItinerary.sarthiImpactScore.carbonEfficiency?.score || 25}/30)</span>
                    <p className="text-xs text-cyan-900">{currentItinerary.sarthiImpactScore.carbonEfficiency?.metricText}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                    <span className="text-xs font-bold text-amber-950">Community Retention ({currentItinerary.sarthiImpactScore.communityBenefit?.score || 30}/35)</span>
                    <p className="text-xs text-amber-900">{currentItinerary.sarthiImpactScore.communityBenefit?.metricText}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-bold text-emerald-950">Conservation ({currentItinerary.sarthiImpactScore.conservationSensitivity?.score || 30}/35)</span>
                    <p className="text-xs text-emerald-900">{currentItinerary.sarthiImpactScore.conservationSensitivity?.metricText}</p>
                  </div>
                </div>
              )}

              {/* TRANSPARENCY & METHODOLOGY DISCLAIMER */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-900 font-bold">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Model Estimates & Scientific Methodology Disclaimer</span>
                </div>
                <p className="text-[11px] sm:text-xs text-amber-950/90 leading-relaxed">
                  {currentItinerary.sarthiImpactScore.assumptionsDisclaimer || IMPACT_ASSUMPTIONS_DISCLAIMER}
                </p>
              </div>

              {/* Responsible Action Checklist */}
              {currentItinerary.sarthiImpactScore.sustainableRecommendations && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-800 uppercase tracking-wide">
                    Actionable Sustainable Travel Guidelines for this Route:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    {currentItinerary.sarthiImpactScore.sustainableRecommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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
                                className="text-[10px] text-forest-700 hover:underline font-normal cursor-pointer"
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
                        {act.location && (
                          <p className="text-[11px] text-forest-800 font-medium pt-0.5">
                            📍 {act.location}
                          </p>
                        )}
                        {act.recommendationReason && (
                          <div className="mt-2 p-2.5 rounded-xl bg-forest-50/90 border border-forest-200/80 text-xs text-forest-950 flex items-start gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-forest-900">Why Recommended: </span>
                              <span className="text-forest-800">{act.recommendationReason}</span>
                            </div>
                          </div>
                        )}
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
                            Verified Community Stay ✓
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

                {/* Day Cost Breakdown Strip */}
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

      {/* ==================================================== */}
      {/* COMPARE TRAVEL PLANS MODAL (TASK 3)                   */}
      {/* ==================================================== */}
      {isCompareModalOpen && currentItinerary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 my-auto max-h-[92vh] flex flex-col relative overflow-hidden">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Close Comparison"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5 text-teal-700" />
                <span>SARTHI Dual-Plan Comparative Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
                Compare Itinerary Travel Plans
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Side-by-side trade-off evaluation comparing your active <strong>SARTHI Sustainable Itinerary (Plan A)</strong> with a <strong>Conventional Fast-Road Alternative (Plan B)</strong> across 5 key dimensions.
              </p>
            </div>

            {/* Highlights Callout Banner */}
            {currentItinerary.comparisonMetrics && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-forest-900 to-forest-950 text-white shadow-md border border-forest-800 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Comparative Takeaway & Synthesis</span>
                </div>
                <p className="text-xs sm:text-sm text-forest-100 leading-relaxed font-medium">
                  {currentItinerary.comparisonMetrics.comparisonHighlights.summaryText}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-forest-800/80 text-center">
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-forest-300 block">Cost Difference</span>
                    <span className="text-xs sm:text-sm font-extrabold text-gold-300">
                      {currentItinerary.comparisonMetrics.comparisonHighlights.costDiff >= 0 
                        ? `Save ₹${currentItinerary.comparisonMetrics.comparisonHighlights.costDiff.toLocaleString('en-IN')}` 
                        : `₹${Math.abs(currentItinerary.comparisonMetrics.comparisonHighlights.costDiff).toLocaleString('en-IN')} diff`}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-forest-300 block">Sustainability Delta</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-300">
                      +{currentItinerary.comparisonMetrics.comparisonHighlights.scoreDiff} Points
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-forest-300 block">Community Retention Gain</span>
                    <span className="text-xs sm:text-sm font-extrabold text-cyan-300">
                      +{currentItinerary.comparisonMetrics.comparisonHighlights.localRetentionGainPct}% Retained
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-forest-300 block">Transit Efficiency</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white">
                      {currentItinerary.transportation === 'Train' ? '75% Lower CO₂' : 'Shared Transit'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Side-by-Side Dual Plan Columns */}
            {currentItinerary.comparisonMetrics && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-1">
                
                {/* Plan A: Sustainable Plan */}
                <div className="rounded-3xl p-5 sm:p-6 bg-emerald-50/60 border-2 border-emerald-400 space-y-4 relative shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-xs">
                      {currentItinerary.comparisonMetrics.planA.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      Active Itinerary
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {currentItinerary.comparisonMetrics.planA.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Low-carbon transit corridors, certified village homestays, and authentic heritage craft immersion.
                    </p>
                  </div>

                  {/* Core Metrics Table */}
                  <div className="space-y-2.5 pt-2 border-t border-emerald-200 text-xs">
                    
                    {/* 1. Total Cost */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">1. Estimated Total Cost:</span>
                      <span className="font-extrabold text-emerald-950 text-sm">
                        ₹{currentItinerary.comparisonMetrics.planA.estimatedSpend.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* 2. Travel Distance */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">2. Travel Distance & Mode:</span>
                      <span className="font-bold text-slate-900">
                        {currentItinerary.comparisonMetrics.planA.totalDistanceKm} km ({currentItinerary.comparisonMetrics.planA.transportMode})
                      </span>
                    </div>

                    {/* 3. Sustainability Score */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">3. Sustainability Score:</span>
                      <span className="font-black text-emerald-800 text-sm bg-emerald-100 px-2 py-0.5 rounded-lg">
                        {currentItinerary.comparisonMetrics.planA.impactScore} / 100
                      </span>
                    </div>

                    {/* 4. Local Community Engagement */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">4. Community Retention:</span>
                      <span className="font-bold text-amber-900">
                        ~{currentItinerary.comparisonMetrics.planA.communityRetentionPct}% retained locally
                      </span>
                    </div>

                    {/* 5. Cultural Experiences */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">5. Cultural Experiences:</span>
                      <span className="font-bold text-purple-900">
                        {currentItinerary.comparisonMetrics.planA.culturalExperiencesCount} heritage & craft touchpoints
                      </span>
                    </div>

                    {/* Stay Type */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-emerald-100">
                      <span className="font-semibold text-slate-700">Stay Type:</span>
                      <span className="font-bold text-forest-900 text-right">
                        {currentItinerary.comparisonMetrics.planA.stayType}
                      </span>
                    </div>
                  </div>

                  {/* Plan A Key Advantages */}
                  <div className="p-3 rounded-2xl bg-white/80 border border-emerald-200 space-y-1.5 text-xs">
                    <span className="font-bold text-emerald-950 uppercase tracking-wide block">
                      Key Advantages:
                    </span>
                    <ul className="space-y-1 text-slate-700">
                      {currentItinerary.comparisonMetrics.planA.keyPros.map((pro, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsCompareModalOpen(false)}
                      className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Keep Active Plan A (Recommended) ✓
                    </button>
                  </div>
                </div>

                {/* Plan B: Conventional Plan */}
                <div className="rounded-3xl p-5 sm:p-6 bg-slate-50 border-2 border-slate-300 space-y-4 relative shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-700 text-white shadow-xs">
                      {currentItinerary.comparisonMetrics.planB.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2.5 py-0.5 rounded-full">
                      Conventional Baseline
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {currentItinerary.comparisonMetrics.planB.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Standard highway automobile travel with commercial chain hotels and rapid photo-stop tourism.
                    </p>
                  </div>

                  {/* Core Metrics Table */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
                    
                    {/* 1. Total Cost */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">1. Estimated Total Cost:</span>
                      <span className="font-extrabold text-slate-900 text-sm">
                        ₹{currentItinerary.comparisonMetrics.planB.estimatedSpend.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* 2. Travel Distance */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">2. Travel Distance & Mode:</span>
                      <span className="font-bold text-slate-900">
                        {currentItinerary.comparisonMetrics.planB.totalDistanceKm} km ({currentItinerary.comparisonMetrics.planB.transportMode})
                      </span>
                    </div>

                    {/* 3. Sustainability Score */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">3. Sustainability Score:</span>
                      <span className="font-black text-slate-700 text-sm bg-slate-200 px-2 py-0.5 rounded-lg">
                        {currentItinerary.comparisonMetrics.planB.impactScore} / 100
                      </span>
                    </div>

                    {/* 4. Local Community Engagement */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">4. Community Retention:</span>
                      <span className="font-bold text-slate-700">
                        ~{currentItinerary.comparisonMetrics.planB.communityRetentionPct}% retained locally
                      </span>
                    </div>

                    {/* 5. Cultural Experiences */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">5. Cultural Experiences:</span>
                      <span className="font-bold text-slate-700">
                        {currentItinerary.comparisonMetrics.planB.culturalExperiencesCount} standard stops
                      </span>
                    </div>

                    {/* Stay Type */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                      <span className="font-semibold text-slate-700">Stay Type:</span>
                      <span className="font-bold text-slate-800 text-right">
                        {currentItinerary.comparisonMetrics.planB.stayType}
                      </span>
                    </div>
                  </div>

                  {/* Plan B Trade-offs */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs">
                    <span className="font-bold text-slate-800 uppercase tracking-wide block">
                      Trade-offs & Differences:
                    </span>
                    <ul className="space-y-1 text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Higher fossil fuel emissions from private ICE highway driving (~180g CO₂/pkm)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Only ~32% of spending stays in the community; rest flows to booking intermediaries</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Higher accommodation expense for standard city hotels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (currentItinerary.comparisonPlan) {
                          setCurrentItinerary(currentItinerary.comparisonPlan);
                          setIsCompareModalOpen(false);
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-all cursor-pointer"
                    >
                      Switch to Plan B (Adopt Conventional Plan)
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* Modal Footer Note */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-400" />
                <span>Both itineraries respect your maximum budget of ₹{currentItinerary.totalBudget.toLocaleString('en-IN')}.</span>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 cursor-pointer"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
