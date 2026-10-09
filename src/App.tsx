import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickDemoModal } from './components/QuickDemoModal';
import { DestinationModal } from './components/DestinationModal';
import { MarketplaceModal } from './components/MarketplaceModal';
import { InteractiveMap } from './components/InteractiveMap';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { MobileBottomNav } from './components/MobileBottomNav';

import { HomePage } from './pages/HomePage';
import { TripPlannerPage } from './pages/TripPlannerPage';
import { ChatAssistantPage } from './pages/ChatAssistantPage';
import { ExplorePage } from './pages/ExplorePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { CulturalCalendarPage } from './pages/CulturalCalendarPage';
import { SafetyPage } from './pages/SafetyPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

import { Destination, GeneratedItinerary, MarketplaceItem, FestivalItem } from './types';
import { DESTINATIONS } from './data/destinations';
import { generateItinerary } from './services/itineraryEngine';
import { triggerConfetti } from './utils/toast';

export function App() {
  // Navigation Tab State
  const [activeTab, setActiveTab] = useState<string>('home');

  // Active Itinerary State (pre-seeded with default 3-day itinerary so the Map & Results are immediately impressive!)
  const [currentItinerary, setCurrentItinerary] = useState<GeneratedItinerary | null>(() => {
    return generateItinerary({
      startingLocation: 'New Delhi / Gateway Hub',
      destinationRegion: 'Himachal Pradesh (Spiti & Kullu)',
      budget: 15000,
      isCustomBudget: false,
      numberOfDays: 3,
      numberOfTravellers: 2,
      travelDate: '2026-10-15',
      interests: ['Nature', 'Culture', 'Adventure'],
      travelStyle: 'Comfort',
      preferredLanguage: 'English',
      transportation: 'Train'
    });
  });

  // Saved Trips and Wishlist
  const [savedTrips, setSavedTrips] = useState<GeneratedItinerary[]>([]);
  const [savedDestinationIds, setSavedDestinationIds] = useState<string[]>(['spiti-valley', 'munroe-island']);

  // Modals State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedMarketplaceItem, setSelectedMarketplaceItem] = useState<MarketplaceItem | null>(null);
  const [isDemoGuideOpen, setIsDemoGuideOpen] = useState(false);
  const [focusedDestinationOnMap, setFocusedDestinationOnMap] = useState<Destination | null>(null);
  const [contextPromptForChat, setContextPromptForChat] = useState<string>('');
  const [exploreCategoryFilter, setExploreCategoryFilter] = useState<string>('All');

  // Offline and PWA Install States
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [installPromptEvent, setInstallPromptEvent] = useState<any>(null);

  // Handle URL hash changes & Offline/Install listeners
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const validTabs = ['home', 'explore', 'planner', 'map', 'marketplace', 'assistant', 'chat', 'calendar', 'safety', 'profile', 'admin'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash === 'chat' ? 'assistant' : hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPromptEvent(e);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    const choice = await installPromptEvent.userChoice;
    if (choice && choice.outcome === 'accepted') {
      setInstallPromptEvent(null);
    }
  };

  // Update hash when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      if (window.location.hash) {
        window.history.pushState('', document.title, window.location.pathname);
      }
    } else {
      window.location.hash = `/${tab}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add Destination to Saved / Wishlist
  const handleAddToTrip = (dest: Destination) => {
    if (!savedDestinationIds.includes(dest.id)) {
      setSavedDestinationIds([...savedDestinationIds, dest.id]);
    }
  };

  // Save Itinerary
  const handleSaveTrip = (itin: GeneratedItinerary) => {
    if (!savedTrips.some(t => t.id === itin.id)) {
      setSavedTrips([itin, ...savedTrips]);
    }
  };

  // Delete Saved Itinerary
  const handleRemoveTrip = (tripId: string) => {
    setSavedTrips(savedTrips.filter(t => t.id !== tripId));
  };

  // View Route on Map
  const handleViewRouteOnMap = (itin: GeneratedItinerary) => {
    setCurrentItinerary(itin);
    handleTabChange('map');
  };

  // Ask Sarthi with Trip Context
  const handleAskSarthiWithContext = (itin: GeneratedItinerary) => {
    setContextPromptForChat(
      `I have a ${itin.numberOfDays}-day trip planned for ${itin.destinationRegion} with budget ₹${itin.totalBudget}. Which waterfalls and local food spots should I not miss?`
    );
    handleTabChange('assistant');
  };

  // Run Demo Preset (from Demo Guide)
  const handleRunDemoPreset = () => {
    const preset = generateItinerary({
      startingLocation: 'Ranchi',
      destinationRegion: 'Chotanagpur Waterfalls & Netarhat',
      budget: 10000,
      isCustomBudget: false,
      numberOfDays: 3,
      numberOfTravellers: 2,
      travelDate: '2026-10-15',
      interests: ['Nature', 'Waterfalls', 'Culture'],
      travelStyle: 'Comfort',
      preferredLanguage: 'English',
      transportation: 'Car'
    });
    setCurrentItinerary(preset);
    handleTabChange('planner');
    triggerConfetti();

    setTimeout(() => {
      const el = document.getElementById('itinerary-results');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f4]">
      
      {/* Offline Alert Bar (Resilience Feature for Remote Areas) */}
      {isOffline && (
        <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-emerald-800 shadow-inner z-50 sticky top-0 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>🌲 <strong>Offline Forest Mode:</strong> Cellular network is unreachable. Cached itineraries, destinations, and emergency numbers (112, 108, 1363) are active!</span>
        </div>
      )}

      {/* PWA Install Notification (when installable) */}
      {installPromptEvent && (
        <div className="bg-gold-500 text-forest-950 text-xs py-1.5 px-4 font-bold flex items-center justify-between gap-2 shadow-sm z-40 sticky top-0">
          <div className="flex items-center gap-2 truncate">
            <span>📲</span>
            <span className="truncate">Install SARTHI on your phone for full offline access in forest areas</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleInstallApp}
              className="px-3 py-1 rounded-lg bg-forest-950 text-gold-300 hover:bg-forest-900 text-xs font-extrabold shadow-sm active:scale-95 transition-transform"
            >
              Install App
            </button>
            <button
              onClick={() => setInstallPromptEvent(null)}
              className="text-forest-950/70 hover:text-forest-950 text-xs p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenDemoGuide={() => setIsDemoGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-24 lg:pb-8">
        
        {/* HOME PAGE */}
        {activeTab === 'home' && (
          <HomePage
            onPlanTripClick={() => handleTabChange('planner')}
            onExploreClick={() => handleTabChange('explore')}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            setActiveTab={handleTabChange}
          />
        )}

        {/* AI TRIP PLANNER PAGE */}
        {activeTab === 'planner' && (
          <TripPlannerPage
            currentItinerary={currentItinerary}
            setCurrentItinerary={setCurrentItinerary}
            onSaveTrip={handleSaveTrip}
            onViewRouteOnMap={handleViewRouteOnMap}
            onAskSarthiWithContext={handleAskSarthiWithContext}
            onSelectDestinationById={(destId) => {
              const d = DESTINATIONS.find(x => x.id === destId);
              if (d) setSelectedDestination(d);
            }}
          />
        )}

        {/* SARTHI AI ASSISTANT PAGE */}
        {activeTab === 'assistant' && (
          <ChatAssistantPage
            onNavigateTab={handleTabChange}
            onExploreFilter={(cat) => {
              setExploreCategoryFilter(cat);
              handleTabChange('explore');
            }}
            contextItineraryPrompt={contextPromptForChat}
          />
        )}

        {/* EXPLORE DESTINATIONS PAGE */}
        {activeTab === 'explore' && (
          <ExplorePage
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onAddToTrip={handleAddToTrip}
            preselectedCategory={exploreCategoryFilter}
          />
        )}

        {/* INTERACTIVE MAP PAGE */}
        {activeTab === 'map' && (
          <div className="space-y-6 pb-20 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-100 px-3.5 py-1 rounded-full">
                National Spatial Exploration
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
                Interactive Pan-India Tourism Map
              </h1>
              <p className="text-sm text-slate-600">
                Spatial discovery across 15+ States and Union Territories with state filtering, route visualization, and explainable SARTHI Impact Scores.
              </p>
            </div>

            <InteractiveMap
              currentItinerary={currentItinerary}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              onAddToTrip={handleAddToTrip}
              focusedDestination={focusedDestinationOnMap}
            />
          </div>
        )}

        {/* LOCAL MARKETPLACE PAGE */}
        {activeTab === 'marketplace' && (
          <MarketplacePage
            onSelectItem={(item) => setSelectedMarketplaceItem(item)}
            onAddItemToTrip={(item) => {
              handleTabChange('planner');
            }}
          />
        )}

        {/* CULTURAL CALENDAR / FESTIVALS PAGE */}
        {activeTab === 'calendar' && (
          <CulturalCalendarPage
            onAddFestivalToTrip={(fest) => {
              handleTabChange('planner');
            }}
            onExploreLocation={() => handleTabChange('explore')}
          />
        )}

        {/* SAFETY & PRACTICAL INFORMATION PAGE */}
        {activeTab === 'safety' && (
          <SafetyPage />
        )}

        {/* USER PROFILE PAGE */}
        {activeTab === 'profile' && (
          <ProfilePage
            savedTrips={savedTrips}
            savedDestinationIds={savedDestinationIds}
            onOpenTrip={(trip) => {
              setCurrentItinerary(trip);
              handleTabChange('planner');
            }}
            onRemoveTrip={handleRemoveTrip}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onPlanTripClick={() => handleTabChange('planner')}
          />
        )}

        {/* GOVERNMENT / ADMIN ANALYTICS DASHBOARD (/admin) */}
        {activeTab === 'admin' && (
          <AdminDashboardPage />
        )}

      </main>
      <FloatingChatWidget
        onNavigateTab={handleTabChange}
        onOpenTripPlanner={() => handleTabChange('planner')}
      />

      {/* Global Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onAddToTrip={handleAddToTrip}
        onViewOnMap={(dest) => {
          setFocusedDestinationOnMap(dest);
          handleTabChange('map');
        }}
      />

      <MarketplaceModal
        item={selectedMarketplaceItem}
        onClose={() => setSelectedMarketplaceItem(null)}
        onBookSuccess={() => {
          // Booking success
        }}
      />

      <QuickDemoModal
        isOpen={isDemoGuideOpen}
        onClose={() => setIsDemoGuideOpen(false)}
        setActiveTab={handleTabChange}
        onRunDemoPreset={handleRunDemoPreset}
      />

      {/* Mobile Bottom Navigation Bar (App Experience) */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

    </div>
  );
}

export default App;
