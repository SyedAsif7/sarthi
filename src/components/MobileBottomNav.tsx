import React from 'react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  Bot, 
  ShoppingBag, 
  User 
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const bottomItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore', icon: MapPin },
    { id: 'planner', label: 'Plan Trip', icon: Sparkles, highlight: true },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'marketplace', label: 'Market', icon: ShoppingBag },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-2xl py-1 px-2 safe-area-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.highlight) {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex flex-col items-center justify-center -mt-5 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                  isActive 
                    ? 'bg-[#E5A93C] text-stone-950 ring-4 ring-white' 
                    : 'bg-[#2D5A27] text-amber-300 ring-4 ring-white'
                }`}>
                  <Sparkles className="w-5 h-5 fill-current animate-pulse" />
                </div>
                <span className={`text-[10px] font-bold mt-0.5 ${isActive ? 'text-[#2D5A27]' : 'text-stone-600'}`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive ? 'text-[#2D5A27] font-bold' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
