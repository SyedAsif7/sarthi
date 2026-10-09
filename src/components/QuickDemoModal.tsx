import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Bot, 
  ShoppingBag, 
  BarChart3, 
  Play,
  RotateCcw
} from 'lucide-react';

interface QuickDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
  onRunDemoPreset: () => void;
}

export const QuickDemoModal: React.FC<QuickDemoModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
  onRunDemoPreset,
}) => {
  if (!isOpen) return null;

  const demoSteps = [
    {
      step: 1,
      title: 'Home & Discovery',
      desc: 'Explore the hero section, quick stats, featured destinations & cultural pillars.',
      tab: 'home',
      actionText: 'Go to Home',
      icon: MapPin
    },
    {
      step: 2,
      title: 'AI Trip Planner',
      desc: 'Inputs: Budget ₹10,000, 3 Days, 2 Travellers, Interests: Nature + Culture.',
      tab: 'planner',
      actionText: 'Open Trip Planner & Auto-fill',
      icon: Sparkles,
      triggerPreset: true
    },
    {
      step: 3,
      title: 'Generated Itinerary & Budget Breakdown',
      desc: 'Inspect day-by-day plan, ₹9,200 spend vs ₹10,000 budget, stay, food, activities.',
      tab: 'planner',
      actionText: 'Review Itinerary',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Interactive Route Map',
      desc: 'Visualize the geographical cluster: Start → Dassam → Hundru → Netarhat on Leaflet map.',
      tab: 'map',
      actionText: 'View Route Map',
      icon: MapPin
    },
    {
      step: 5,
      title: 'Sarthi AI Assistant',
      desc: 'Ask: "Which waterfalls should I visit?" or prompt for local tribal cuisines.',
      tab: 'assistant',
      actionText: 'Chat with Sarthi AI',
      icon: Bot
    },
    {
      step: 6,
      title: 'Local Marketplace',
      desc: 'Verified local guides (Amit Kumar ₹800/day), Eco homestays & Dhokra crafts.',
      tab: 'marketplace',
      actionText: 'Open Marketplace',
      icon: ShoppingBag
    },
    {
      step: 7,
      title: 'Government / Sustainable Admin Analytics',
      desc: 'Sustainable tourism metrics, tourist footfall, and direct revenue to tribal artisans.',
      tab: 'admin',
      actionText: 'View Admin Portal',
      icon: BarChart3
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-forest-900 via-forest-800 to-forest-950 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Interactive Platform Walkthrough</h3>
                <p className="text-xs text-forest-200">
                  Recommended Feature Exploration Guide
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-forest-800/80 hover:bg-forest-700 flex items-center justify-center text-forest-200 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 p-3 bg-forest-800/60 rounded-xl border border-forest-700 flex items-center justify-between gap-3">
            <div className="text-xs text-gold-300">
              <span className="font-bold">⚡ 1-Click Itinerary Preset:</span> Auto-fills ₹12,000 budget, 3 days, 2 travellers, Nature + Culture and switches to Trip Planner!
            </div>
            <button
              onClick={() => {
                onRunDemoPreset();
                onClose();
              }}
              className="px-3.5 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Auto-Run Preset</span>
            </button>
          </div>
        </div>

        {/* Steps List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {demoSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="flex items-start justify-between gap-4 p-3.5 rounded-2xl border border-slate-200 hover:border-forest-300 hover:bg-forest-50/40 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-forest-700" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (item.triggerPreset) {
                      onRunDemoPreset();
                    } else {
                      setActiveTab(item.tab);
                    }
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-forest-900 text-slate-700 group-hover:text-white text-xs font-semibold shrink-0 flex items-center gap-1 transition-all"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Problem Statement ID: 26204 | Theme: Travel & Tourism</span>
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
