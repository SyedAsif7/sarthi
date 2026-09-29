export type DestinationCategory = 
  | 'Nature' 
  | 'Waterfalls' 
  | 'Culture' 
  | 'Wildlife' 
  | 'Adventure' 
  | 'Spiritual' 
  | 'Heritage';

export interface Destination {
  id: string;
  name: string;
  hindiName?: string;
  district: string;
  category: DestinationCategory;
  rating: number;
  reviewsCount: number;
  approxCost: number; // in INR per person
  bestTime: string;
  timings: string;
  entryFee: string;
  distanceRanchi: number; // km from Ranchi
  coordinates: [number, number]; // [lat, lng]
  image: string;
  gallery?: string[];
  shortDescription: string;
  about: string;
  thingsToDo: string[];
  nearbyAttractions: string[];
  howToReach: {
    air: string;
    rail: string;
    road: string;
  };
  localFood: {
    name: string;
    description: string;
  }[];
  safetyInfo: string;
  weatherPlaceholder: {
    temp: string;
    condition: string;
    forecast: string;
  };
  crowdStatus?: 'Low' | 'Moderate' | 'High / Peak Rush';
  crowdAdvice?: string;
  ecoAdvisories?: string[];
  audioGuideText?: string;
  audioGuideHindi?: string;
}

export interface TripPlanRequest {
  startingLocation: string;
  destinationRegion: string;
  budget: number;
  isCustomBudget: boolean;
  numberOfDays: number;
  numberOfTravellers: number;
  travelDate: string;
  interests: string[];
  travelStyle: 'Budget' | 'Comfort' | 'Premium';
  preferredLanguage: 'English' | 'Hindi' | 'Santhali' | 'Ho' | 'Mundari' | 'Marathi';
  transportation: 'Car' | 'Bus' | 'Train' | 'Public Transport';
}

export interface ItineraryActivity {
  time: string;
  title: string;
  destinationId?: string;
  description: string;
  type: 'sightseeing' | 'food' | 'travel' | 'checkin' | 'leisure';
  duration: string;
  location: string;
  costEstimate: number;
  image?: string;
  coordinates?: [number, number];
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  dateStr?: string;
  theme: string;
  activities: ItineraryActivity[];
  stay: {
    name: string;
    type: 'Homestay' | 'Resort' | 'Hotel' | 'Eco-Lodge';
    costPerNight: number;
    rating: number;
    location: string;
    verified: boolean;
  };
  dayCosts: {
    food: number;
    transport: number;
    stay: number;
    activities: number;
    total: number;
  };
  routeNotes?: string;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  summary: string;
  startingLocation: string;
  destinationRegion: string;
  totalBudget: number;
  estimatedSpend: number;
  remainingBudget: number;
  numberOfDays: number;
  numberOfTravellers: number;
  interests: string[];
  travelStyle: string;
  preferredLanguage: string;
  transportation: string;
  days: DayPlan[];
  routeCoordinates: { name: string; coordinates: [number, number]; day: number }[];
  totalDistanceKm: number;
  estimatedTravelTime: string;
  createdAt: string;
}

export type MarketplaceCategory = 
  | 'guide' 
  | 'homestay' 
  | 'handicraft' 
  | 'food' 
  | 'experience' 
  | 'ecotour';

export interface MarketplaceItem {
  id: string;
  title: string;
  subtitle: string;
  category: MarketplaceCategory;
  rating: number;
  reviewsCount: number;
  price: number;
  priceUnit: string; // e.g. "/day", "/night", "each", "/person"
  image: string;
  location: string;
  verified: boolean;
  badge?: string;
  description: string;
  details: {
    languages?: string[];
    experienceYears?: number;
    speciality?: string;
    amenities?: string[];
    artisanName?: string;
    material?: string;
    duration?: string;
    groupSize?: string;
  };
  contactPhone?: string;
}

export interface FestivalItem {
  id: string;
  name: string;
  hindiName?: string;
  monthDate: string;
  upcomingDate: string;
  location: string;
  image: string;
  description: string;
  culturalSignificance: string;
  rituals: string[];
  bestPlacesToObserve: string[];
}

export interface SafetyContact {
  title: string;
  number: string;
  category: 'Emergency' | 'Helpline' | 'Medical' | 'Forest';
  description: string;
  iconName: string;
}

export interface HospitalInfo {
  name: string;
  city: string;
  district: string;
  phone: string;
  is24x7Emergency: boolean;
  address: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinedDate: string;
  budgetPreference: string;
  favoriteCategories: DestinationCategory[];
  preferredLanguage: string;
  savedTrips: GeneratedItinerary[];
  savedDestinations: string[]; // destination IDs
  wishlistCount: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'sarthi';
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    actionType: 'plan' | 'explore' | 'map' | 'marketplace' | 'prompt';
    payload?: string;
  }[];
}
