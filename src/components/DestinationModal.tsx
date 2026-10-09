import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Calendar, 
  Compass, 
  ShieldAlert, 
  CloudSun, 
  Utensils, 
  CheckCircle2, 
  Plus, 
  Navigation,
  Volume2,
  Play,
  Square,
  Users,
  Leaf,
  Sparkles,
  Info,
  Award,
  Layers,
  HeartHandshake,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import { Destination } from '../types';
import { calculateDestinationImpactScore, getImpactTierBadge } from '../utils/impactScore';
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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioLang, setAudioLang] = useState<'en' | 'hi'>('en');

  // Cancel audio when destination changes or modal closes
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [destination]);

  if (!destination) return null;

  const impact = destination.sarthiImpactScore || calculateDestinationImpactScore(destination);
  const tierBadge = getImpactTierBadge(impact);

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech audio is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const narration = audioLang === 'hi'
      ? (destination.audioGuideHindi || destination.about)
      : (destination.audioGuideText || destination.about);

    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.lang = audioLang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleLanguageSwitch = (lang: 'en' | 'hi') => {
    setAudioLang(lang);
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  // Crowd status badge styling
  const getCrowdBg = (status?: string) => {
    switch (status) {
      case 'Low':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'Moderate':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'High / Peak Rush':
        return 'bg-rose-50 text-rose-800 border-rose-300';
      default:
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
    }
  };

  const getCrowdDot = (status?: string) => {
    switch (status) {
      case 'Low':
        return 'bg-emerald-500';
      case 'Moderate':
        return 'bg-amber-500';
      case 'High / Peak Rush':
        return 'bg-rose-500 animate-pulse';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={() => {
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            onClose();
          }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-transparent" />
          
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
                  {destination.district}, <strong className="text-gold-300 font-semibold">{destination.state}</strong>
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
                className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Trip</span>
              </button>
              <button
                onClick={() => {
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  onViewOnMap(destination);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-forest-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-forest-700" />
                <span>View on Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          
          {/* EXPLAINABLE SARTHI IMPACT SCORE CARD */}
          <div className="p-5 sm:p-6 rounded-3xl bg-forest-950 text-white shadow-xl border border-forest-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-forest-800/80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center font-bold text-lg shadow-inner">
                  🌿
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white tracking-wide">Explainable SARTHI Impact Score</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30">
                      Verified Metric
                    </span>
                  </div>
                  <p className="text-xs text-forest-300 mt-0.5">
                    Transparent assessment of carbon transit, community economic retention & habitat conservation
                  </p>
                </div>
              </div>

              {/* Overall Score Dial */}
              <div className="flex items-center gap-3 bg-forest-900/90 px-4 py-2.5 rounded-2xl border border-forest-700/80">
                <div className="text-right">
                  <div className="text-2xl font-black text-gold-400 leading-none">
                    {impact.overallScore}<span className="text-xs text-forest-300 font-normal">/100</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-300 mt-1">{impact.tier}</div>
                </div>
              </div>
            </div>

            {/* 5 Categories or 3 Pillars Progress */}
            {impact.categories ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-4 border-b border-forest-800/80">
                {/* 1. Environmental */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      Environmental
                    </span>
                    <span className="font-bold text-emerald-300">{impact.categories.environmentalSustainability.score}/30</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${(impact.categories.environmentalSustainability.score / 30) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.categories.environmentalSustainability.metricText}
                  </p>
                </div>

                {/* 2. Economic */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                      Local Economy
                    </span>
                    <span className="font-bold text-amber-300">{impact.categories.localEconomicContribution.score}/25</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${(impact.categories.localEconomicContribution.score / 25) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.categories.localEconomicContribution.metricText}
                  </p>
                </div>

                {/* 3. Cultural */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-purple-400" />
                      Cultural Heritage
                    </span>
                    <span className="font-bold text-purple-300">{impact.categories.culturalHeritageEngagement.score}/20</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-purple-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${(impact.categories.culturalHeritageEngagement.score / 20) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.categories.culturalHeritageEngagement.metricText}
                  </p>
                </div>

                {/* 4. Transit */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-cyan-400" />
                      Sustainable Transit
                    </span>
                    <span className="font-bold text-cyan-300">{impact.categories.sustainableTransportation.score}/15</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-cyan-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${(impact.categories.sustainableTransportation.score / 15) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.categories.sustainableTransportation.metricText}
                  </p>
                </div>

                {/* 5. Practices */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      Responsible Practices
                    </span>
                    <span className="font-bold text-teal-300">{impact.categories.responsibleTourismPractices.score}/10</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-teal-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${(impact.categories.responsibleTourismPractices.score / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.categories.responsibleTourismPractices.metricText}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-forest-800/80">
                {/* Pillar 1: Carbon */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-cyan-400" />
                      Carbon Efficiency
                    </span>
                    <span className="font-bold text-cyan-300">{impact.carbonEfficiency?.score || 25}/30</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-cyan-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${((impact.carbonEfficiency?.score || 25) / 30) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.carbonEfficiency?.transitType} • {impact.carbonEfficiency?.metricText}
                  </p>
                </div>

                {/* Pillar 2: Community */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                      Community Benefit
                    </span>
                    <span className="font-bold text-amber-300">{impact.communityBenefit?.score || 30}/35</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${((impact.communityBenefit?.score || 30) / 35) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    ~{impact.communityBenefit?.economicRetentionPct || 80}% spend retained by local homestays & guides
                  </p>
                </div>

                {/* Pillar 3: Conservation */}
                <div className="space-y-1.5 p-3 rounded-xl bg-forest-900/60 border border-forest-800/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Conservation
                    </span>
                    <span className="font-bold text-emerald-300">{impact.conservationSensitivity?.score || 30}/35</span>
                  </div>
                  <div className="w-full bg-forest-950 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${((impact.conservationSensitivity?.score || 30) / 35) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-forest-300 leading-tight">
                    {impact.conservationSensitivity?.carryingCapacity || 'Regulated / Low Impact'} guidelines adhered
                  </p>
                </div>
              </div>
            )}

            {/* Explanation & Recommendations */}
            <div className="pt-3 space-y-2 text-xs">
              <p className="text-forest-200 leading-relaxed italic">
                "{impact.explanation}"
              </p>
              {impact.sustainableRecommendations && impact.sustainableRecommendations.length > 0 && (
                <div className="pt-1">
                  <span className="font-bold text-gold-300 block mb-1">Sustainable Traveler Actions:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-forest-300">
                    {impact.sustainableRecommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* AUDIO TOUR GUIDE PLAYER */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 text-white shadow-md border border-forest-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center shrink-0">
                <Volume2 className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>SARTHI Audio Tour Guide</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  </h3>
                  {isPlayingAudio && (
                    <span className="flex items-center gap-0.5 ml-2">
                      <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-4 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  )}
                </div>
                <p className="text-xs text-forest-200 mt-0.5 line-clamp-1">
                  Narrated heritage insights in {audioLang === 'hi' ? 'Hindi' : 'English'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Language Switcher for Audio */}
              <div className="flex items-center bg-black/30 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => handleLanguageSwitch('en')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    audioLang === 'en' ? 'bg-gold-500 text-forest-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSwitch('hi')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    audioLang === 'hi' ? 'bg-gold-500 text-forest-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  हिंदी
                </button>
              </div>

              {/* Play / Stop Button */}
              <button
                onClick={handleToggleAudio}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-rose-500 hover:bg-rose-600 text-white'
                    : 'bg-gold-500 hover:bg-gold-400 text-forest-950'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Listen Guide</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* REAL-TIME CROWD & LIVE CLIMATE DOCKET */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Live Crowd Meter */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-5 h-5 text-forest-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Carrying Capacity & Footfall</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border flex items-center gap-1.5 ${getCrowdBg(destination.crowdStatus)}`}>
                    <span className={`w-2 h-2 rounded-full ${getCrowdDot(destination.crowdStatus)}`} />
                    {destination.crowdStatus || 'Moderate'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {destination.crowdAdvice || 'Best to arrive early morning or during off-peak weekdays.'}
                </p>
              </div>
            </div>

            {/* Live Weather Forecast */}
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-teal-200 flex items-center justify-center shrink-0 shadow-sm">
                <CloudSun className="w-5 h-5 text-teal-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">Current Climate</span>
                  <span className="text-xs font-extrabold text-teal-900">
                    {destination.weatherPlaceholder.temp}
                  </span>
                </div>
                <p className="text-xs text-teal-800 mt-1 font-medium">
                  {destination.weatherPlaceholder.condition} • {destination.weatherPlaceholder.forecast}
                </p>
              </div>
            </div>
          </div>

          {/* Overview Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 rounded-2xl bg-cream-100 border border-gold-200/60">
            <div>
              <p className="text-xs text-slate-500 font-medium">Approx Cost</p>
              <p className="text-lg font-bold text-forest-900">₹{destination.approxCost} <span className="text-xs font-normal text-slate-500">/day</span></p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Visiting Timings</p>
              <p className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>{destination.timings}</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Best Season</p>
              <p className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-1">
                <Calendar className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{destination.bestTime}</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Entry Fee</p>
              <p className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-1">
                <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{destination.entryFee}</span>
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

          {/* Living Cultural Heritage & Indigenous Insights */}
          {destination.culturalSignificance && (
            <div className="space-y-3 p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <h3 className="text-base font-bold text-amber-950 font-serif flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                <span>Living Cultural Heritage & Traditions</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                {destination.culturalSignificance}
              </p>
            </div>
          )}

          {/* Indigenous Crafts / GI Tagged Products */}
          {destination.indigenousCrafts && destination.indigenousCrafts.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <h3 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-700" />
                <span>Certified GI Crafts & Local Artisan Products</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {destination.indigenousCrafts.map((craft, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-emerald-900 bg-white/80 p-2.5 rounded-xl border border-emerald-100 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{craft}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          {/* Eco-Tourism & Conservation Advisories */}
          {destination.ecoAdvisories && destination.ecoAdvisories.length > 0 && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 flex items-start gap-3">
              <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Eco-Tourism & Nature Conservation Guidelines
                </h4>
                <ul className="text-xs text-emerald-800 space-y-1 list-disc list-inside">
                  {destination.ecoAdvisories.map((eco, idx) => (
                    <li key={idx}>{eco}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How to Reach & Local Cuisines */}
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">Traveler Safety Advisory</h4>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                {destination.safetyInfo}
              </p>
            </div>
          </div>

          {/* Entry Fee & Nearby */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 gap-2">
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
