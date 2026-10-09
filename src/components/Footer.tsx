import React from 'react';
import { Compass, Sparkles, Shield, Heart, Award, ArrowUpRight, Globe, Leaf } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-forest-950 text-white pt-16 pb-12 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Decorative Pattern Background subtle overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 p-1 flex items-center justify-center shadow-lg border border-white/20 overflow-hidden shrink-0">
                <img 
                  src="/sarthi-ai-logo.png" 
                  alt="SARTHI AI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif tracking-tight text-gold-400">SARTHI AI</h3>
                <p className="text-xs text-forest-200 uppercase tracking-widest font-semibold">
                  Pan-India Sustainable & Cultural Tourism
                </p>
              </div>
            </div>
            
            <p className="text-forest-200 text-sm leading-relaxed pr-6">
              Empowering conscious travelers with hyper-personalized low-carbon AI itineraries while boosting digital visibility, economic retention, and direct livelihoods for India’s indigenous artisans, homestay hosts, and village guides.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-gold-300 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5 text-gold-400" />
                28 States & 8 Union Territories
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                Explainable Impact Score
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-gold-400 font-semibold text-sm tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-sm text-forest-200">
              <li>
                <button onClick={() => setActiveTab('planner')} className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>AI Trip Planner</span>
                  <Sparkles className="w-3 h-3 text-gold-400" />
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('assistant')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  SARTHI AI Assistant
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('explore')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  Explore Destinations
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('map')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  Interactive Route Map
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('marketplace')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  Local Marketplace & Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Cultural & Safety */}
          <div className="space-y-3">
            <h4 className="text-gold-400 font-semibold text-sm tracking-wider uppercase">Discovery & Care</h4>
            <ul className="space-y-2 text-sm text-forest-200">
              <li>
                <button onClick={() => setActiveTab('calendar')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  Festivals & Cultural Calendar
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('safety')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  Tourist Safety & Emergency
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Govt / Admin Analytics</span>
                  <ArrowUpRight className="w-3 h-3 text-forest-400" />
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('profile')} className="hover:text-gold-400 transition-colors cursor-pointer">
                  My Trips & Profile
                </button>
              </li>
            </ul>
          </div>

          {/* Sustainable Tourism Focus */}
          <div className="space-y-3">
            <h4 className="text-gold-400 font-semibold text-sm tracking-wider uppercase">Sustainable Principles</h4>
            <div className="space-y-1.5 text-xs text-forest-200">
              <div className="p-3 bg-forest-900/80 rounded-xl border border-forest-800 space-y-1">
                <p className="font-bold text-white">Focus: Sustainable & Cultural</p>
                <p className="text-forest-300">Transit: Low-Carbon Rail Corridors</p>
                <p className="text-forest-300">Stay: Certified Village Homestays</p>
                <p className="text-gold-400 font-semibold pt-1">Direct Livelihood Retention: ~82%</p>
              </div>
              <p className="text-[11px] text-forest-400 pt-1 flex items-center gap-1">
                <Heart className="w-3 h-3 text-coral-500 fill-coral-500" />
                Built for indigenous community empowerment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-forest-400 gap-4">
          <p>© 2026 SARTHI AI. Pan-India Intelligent Sustainable & Cultural Tourism Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Privacy & Data Ethics</span>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Tribal GI Protection</span>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">State Tourism Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
