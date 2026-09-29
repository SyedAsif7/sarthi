import { TripPlanRequest, GeneratedItinerary, DayPlan, ItineraryActivity } from '../types';
import { DESTINATIONS } from '../data/destinations';

export function generateItinerary(request: TripPlanRequest): GeneratedItinerary {
  const daysCount = Math.min(Math.max(request.numberOfDays, 1), 7);
  const travellers = Math.max(request.numberOfTravellers, 1);
  const budget = request.budget || 10000;
  
  // Style multipliers
  const styleMultiplier = request.travelStyle === 'Premium' ? 1.4 : request.travelStyle === 'Comfort' ? 1.0 : 0.75;
  
  // Target spend: 90% to 94% of budget so there's always a realistic cushion/remaining savings
  const targetTotalSpend = Math.round(budget * (0.88 + Math.random() * 0.06));
  const targetDailySpend = Math.round(targetTotalSpend / daysCount);

  // Day plans generation based on interests and days
  const generatedDays: DayPlan[] = [];
  const routePoints: { name: string; coordinates: [number, number]; day: number }[] = [];

  // Starting location point
  const startCoords: [number, number] = [23.3441, 85.3096]; // Default Ranchi
  routePoints.push({ name: `${request.startingLocation || 'Ranchi'} (Start)`, coordinates: startCoords, day: 0 });

  // Curate Day Themes
  const themes = [
    {
      title: 'Ranchi Waterfall Circuit & Iconic Cascades',
      theme: 'Waterfalls & Tribal Cuisines',
      stops: ['dassam-falls', 'hundru-falls'],
      foodName: 'Authentic Jharkhand Lunch (Dhuska, Ghugni & Sattu Sherbet)',
      stay: { name: 'Dassam Tribal Village Homestay', type: 'Homestay' as const, cost: 1400, location: 'Near Dassam Valley', rating: 4.8 },
      routeNotes: 'Scenic highway NH-33 through green sal forest canopy and gentle plateau curves'
    },
    {
      title: 'Netarhat — The Queen of Chotanagpur',
      theme: 'Pine Forests, Mountain Mist & Sunset',
      stops: ['netarhat'],
      foodName: 'Traditional Bamboo Shoot Karil & Madua Roti at Netarhat Chalet',
      stay: { name: 'Netarhat Eco Pine Homestay', type: 'Eco-Lodge' as const, cost: 1600, location: 'Magnolia Ridge, Netarhat', rating: 4.9 },
      routeNotes: 'Ascend the winding ghat roads through dense sal and bamboo belts'
    },
    {
      title: 'Betla Wildlife Safari & Palamu Heritage',
      theme: 'Jungle Safaris & 16th-Century Chero Forts',
      stops: ['betla-national-park'],
      foodName: 'Desi Clay Pot Country Chicken & Steamed Leaf Dumplings',
      stay: { name: 'Betla Forest Edge Retreat', type: 'Resort' as const, cost: 1750, location: 'Near Betla Sanctuary Gate', rating: 4.7 },
      routeNotes: 'Palamu Tiger Reserve corridor along North Koel and Auranga river basin'
    },
    {
      title: 'Patratu Valley Winding Ghats & Dam Water Sports',
      theme: 'Hairpin Ghats, Speed Boating & Sunset Reservoir',
      stops: ['patratu-valley'],
      foodName: 'Crisp Lake Freshwater Fish Fry & Charred Litti Chokha',
      stay: { name: 'Patratu Valley View Cottage', type: 'Homestay' as const, cost: 1800, location: 'Patratu Lake Promenade', rating: 4.8 },
      routeNotes: 'Famous 16-turn serpentine mountain highway offering panoramic bird-eye views'
    },
    {
      title: 'Jonha (Gautamdhara) & Sacred Tribal Groves',
      theme: 'Ancient Buddhist Legends & Village Haat',
      stops: ['jonha-falls'],
      foodName: 'Wild Forest Mushroom (Rugra) Curry & Red Rice Pitha',
      stay: { name: 'Khunti Sarna Tribal Homestay', type: 'Homestay' as const, cost: 1200, location: 'Khunti Countryside', rating: 4.9 },
      routeNotes: 'Passing through Mundari tribal villages, weekly weekly haats, and sacred sal groves'
    },
    {
      title: 'Deoghar Holy Baidyanath Dham & Trikut Ropeway',
      theme: 'Sacred Jyotirlinga Darshan & Vedic Heritage',
      stops: ['deoghar'],
      foodName: 'Pure Ghee Kachori-Jalebi Breakfast & Golden Deoghar Peda',
      stay: { name: 'Baidyanath Heritage Inn', type: 'Hotel' as const, cost: 1500, location: 'Tower Chowk, Deoghar', rating: 4.7 },
      routeNotes: 'Via pilgrimage corridor with views of Trikuta Hill range'
    },
    {
      title: 'Parasnath (Shikharji) Spiritual Mountain Trek',
      theme: 'Highest Summit of Jharkhand & Jain Heritage',
      stops: ['parasnath'],
      foodName: 'Pure Satvik Jain Thali & Giridih Chena Sweets',
      stay: { name: 'Madhuban Mountain Foot Inn', type: 'Homestay' as const, cost: 1300, location: 'Madhuban Base, Parasnath', rating: 4.8 },
      routeNotes: 'Forested pilgrimage trail ascending to 1,365m summit'
    }
  ];

  // Pick suitable themes based on interests
  const hasSpiritual = request.interests.includes('Spiritual') || request.interests.includes('Religious');
  const hasWildlife = request.interests.includes('Wildlife');
  const hasAdventure = request.interests.includes('Adventure');

  const orderedThemes = [...themes];
  if (hasSpiritual && daysCount >= 2) {
    // move Deoghar or Parasnath earlier
    const deogharIdx = orderedThemes.findIndex(t => t.stops.includes('deoghar'));
    if (deogharIdx > 1) {
      const item = orderedThemes.splice(deogharIdx, 1)[0];
      orderedThemes.splice(1, 0, item);
    }
  }
  if (hasWildlife && daysCount >= 3) {
    const betlaIdx = orderedThemes.findIndex(t => t.stops.includes('betla-national-park'));
    if (betlaIdx > 2) {
      const item = orderedThemes.splice(betlaIdx, 1)[0];
      orderedThemes.splice(2, 0, item);
    }
  }
  if (hasAdventure && daysCount >= 2) {
    const patratuIdx = orderedThemes.findIndex(t => t.stops.includes('patratu-valley'));
    if (patratuIdx > 1) {
      const item = orderedThemes.splice(patratuIdx, 1)[0];
      orderedThemes.splice(1, 0, item);
    }
  }

  let totalAccumulatedSpend = 0;

  for (let i = 0; i < daysCount; i++) {
    const themeConfig = orderedThemes[i % orderedThemes.length];
    const dayNumber = i + 1;

    // Distribute daily budget realistically
    const dayBase = targetDailySpend;
    const stayCost = Math.round((themeConfig.stay.cost * styleMultiplier * (travellers > 2 ? 1.5 : 1)) / 100) * 100;
    const foodCost = Math.round((400 * travellers * styleMultiplier) / 50) * 50;
    const transportCost = Math.round((600 * styleMultiplier * (request.transportation === 'Car' ? 1.5 : 0.8)) / 50) * 50;
    const activitiesCost = Math.round((dayBase - (stayCost + foodCost + transportCost)) / 50) * 50;
    const cleanActivitiesCost = Math.max(activitiesCost, 300 * travellers);

    const dayTotal = stayCost + foodCost + transportCost + cleanActivitiesCost;
    totalAccumulatedSpend += dayTotal;

    // Find destination details for stops
    const primaryDest = DESTINATIONS.find(d => d.id === themeConfig.stops[0]) || DESTINATIONS[0];
    const secondaryDest = themeConfig.stops[1] ? DESTINATIONS.find(d => d.id === themeConfig.stops[1]) : null;

    if (primaryDest) {
      routePoints.push({
        name: primaryDest.name,
        coordinates: primaryDest.coordinates,
        day: dayNumber
      });
    }
    if (secondaryDest) {
      routePoints.push({
        name: secondaryDest.name,
        coordinates: secondaryDest.coordinates,
        day: dayNumber
      });
    }

    const activities: ItineraryActivity[] = [
      {
        time: '08:30 AM',
        title: `Departure & Morning Exploration at ${primaryDest.name}`,
        destinationId: primaryDest.id,
        description: primaryDest.shortDescription,
        type: 'sightseeing',
        duration: '2.5 hours',
        location: `${primaryDest.district}, Jharkhand`,
        costEstimate: Math.round(cleanActivitiesCost * 0.4),
        image: primaryDest.image,
        coordinates: primaryDest.coordinates
      },
      {
        time: '12:30 PM',
        title: 'Authentic Local Food Experience',
        description: themeConfig.foodName,
        type: 'food',
        duration: '1.5 hours',
        location: `Local Cultural Dining, ${primaryDest.district}`,
        costEstimate: foodCost,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
      },
      {
        time: secondaryDest ? '02:30 PM' : '03:00 PM',
        title: secondaryDest ? `Afternoon Visit to ${secondaryDest.name}` : `Nature Trail & Viewpoint at ${primaryDest.name}`,
        destinationId: secondaryDest ? secondaryDest.id : primaryDest.id,
        description: secondaryDest 
          ? secondaryDest.shortDescription 
          : `Explore the surroundings, interact with local village artisans and enjoy evening sunset.`,
        type: 'sightseeing',
        duration: '2.5 hours',
        location: secondaryDest ? secondaryDest.district : primaryDest.district,
        costEstimate: Math.round(cleanActivitiesCost * 0.6),
        image: secondaryDest ? secondaryDest.image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        coordinates: secondaryDest ? secondaryDest.coordinates : primaryDest.coordinates
      },
      {
        time: '06:30 PM',
        title: `Evening Check-in at ${themeConfig.stay.name}`,
        description: `Relax at the verified ${themeConfig.stay.type.toLowerCase()}, savor organic herbal tea and evening cultural storytelling.`,
        type: 'checkin',
        duration: 'Overnight',
        location: themeConfig.stay.location,
        costEstimate: stayCost,
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80'
      }
    ];

    generatedDays.push({
      dayNumber,
      title: `DAY ${dayNumber} — ${themeConfig.title.toUpperCase()}`,
      theme: themeConfig.theme,
      activities,
      stay: {
        ...themeConfig.stay,
        costPerNight: stayCost,
        verified: true
      },
      dayCosts: {
        food: foodCost,
        transport: transportCost,
        stay: stayCost,
        activities: cleanActivitiesCost,
        total: dayTotal
      },
      routeNotes: themeConfig.routeNotes
    });
  }

  // Adjust if total spend slightly exceeds budget
  let finalSpend = totalAccumulatedSpend;
  if (finalSpend >= budget && budget > 3000) {
    finalSpend = Math.round(budget * 0.92);
  }
  const remaining = Math.max(0, budget - finalSpend);

  const interestSummary = request.interests.length > 0 
    ? request.interests.slice(0, 3).join(' + ') 
    : 'Nature + Culture';

  return {
    id: `trip-${Date.now()}`,
    title: `YOUR ${daysCount}-DAY JHARKHAND JOURNEY`,
    summary: `Tailored for ${travellers} traveler${travellers > 1 ? 's' : ''} highlighting ${interestSummary} within a ₹${budget.toLocaleString('en-IN')} budget.`,
    startingLocation: request.startingLocation || 'Ranchi',
    destinationRegion: request.destinationRegion || 'Chotanagpur Plateau & Surrounds',
    totalBudget: budget,
    estimatedSpend: finalSpend,
    remainingBudget: remaining,
    numberOfDays: daysCount,
    numberOfTravellers: travellers,
    interests: request.interests,
    travelStyle: request.travelStyle,
    preferredLanguage: request.preferredLanguage,
    transportation: request.transportation,
    days: generatedDays,
    routeCoordinates: routePoints,
    totalDistanceKm: 45 * daysCount + 20,
    estimatedTravelTime: `${(daysCount * 2.5).toFixed(1)} hrs total driving`,
    createdAt: new Date().toISOString()
  };
}
