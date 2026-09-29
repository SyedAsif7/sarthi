import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickDemoModal } from './components/QuickDemoModal';
import { DestinationModal } from './components/DestinationModal';
import { MarketplaceModal } from './components/MarketplaceModal';
import { InteractiveMap } from './components/InteractiveMap';
import { FloatingChatWidget } from './components/FloatingChatWidget';

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
      startingLocation: 'Ranchi',
      destinationRegion: 'Chotanagpur Plateau & Waterfalls',
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
  });

  // Saved Trips and Wishlist
  const [savedTrips, setSavedTrips] = useState<GeneratedItinerary[]>([]);
  const [savedDestinationIds, setSavedDestinationIds] = useState<string[]>(['dassam-falls', 'netarhat']);

  // Modals State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedMarketplaceItem, setSelectedMarketplaceItem] = useState<MarketplaceItem | null>(null);
  const [isDemoGuideOpen, setIsDemoGuideOpen] = useState(false);
  const [focusedDestinationOnMap, setFocusedDestinationOnMap] = useState<Destination | null>(null);
  const [contextPromptForChat, setContextPromptForChat] = useState<string>('');
  const [exploreCategoryFilter, setExploreCategoryFilter] = useState<string>('All');

  // Handle URL hash changes (e.g. /admin)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'admin') {
        setActiveTab('admin');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when tab changes to admin or others
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'admin') {
      window.location.hash = '/admin';
    } else {
      if (window.location.hash === '#/admin') {
        window.history.pushState('', document.title, window.location.pathname);
      }
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

  // Run Hackathon Demo Preset (from Demo Guide)
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
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenDemoGuide={() => setIsDemoGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
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

        {/* EXPLORE JHARKHAND PAGE */}
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
                Geographic Exploration
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
                Jharkhand Tourism Map
              </h1>
              <p className="text-sm text-slate-600">
                Interactive spatial view of waterfalls, national parks, and heritage circuits with route clustering.
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

        {/* GOVERNMENT / SIH ADMIN ANALYTICS DASHBOARD (/admin) */}
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

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

    </div>
  );
}

export default App;
