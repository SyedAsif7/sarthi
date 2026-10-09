import { TripPlanRequest, GeneratedItinerary, DayPlan, ItineraryActivity, Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { 
  calculateItineraryImpactScore, 
  generateConventionalComparisonPlan, 
  compareItineraries 
} from '../utils/impactScore';

const STATE_STARTING_HUBS: Record<string, { city: string; coordinates: [number, number]; region: string }> = {
  'Himachal Pradesh': { city: 'Shimla / Mandi', coordinates: [31.1048, 77.1734], region: 'Western Himalayas' },
  'Kerala': { city: 'Kochi / Kollam', coordinates: [9.9312, 76.2673], region: 'Malabar Coast & Backwaters' },
  'Meghalaya': { city: 'Shillong / Guwahati', coordinates: [25.5788, 91.8933], region: 'Khasi Hills & Meghalaya Plateau' },
  'Rajasthan': { city: 'Jaipur / Jodhpur', coordinates: [26.9124, 75.7873], region: 'Thar Desert & Aravalli Ranges' },
  'Maharashtra': { city: 'Mumbai / Chhatrapati Sambhajinagar', coordinates: [19.8762, 75.3433], region: 'Deccan Traps & Sahyadri Western Ghats' },
  'Uttarakhand': { city: 'Rishikesh / Haridwar', coordinates: [30.0869, 78.2676], region: 'Garhwal Himalayas & Alaknanda Valley' },
  'Madhya Pradesh': { city: 'Jabalpur / Bhopal', coordinates: [23.1815, 79.9864], region: 'Heart of India & Central Satpura' },
  'Tamil Nadu': { city: 'Madurai / Tiruchirappalli', coordinates: [9.9252, 78.1198], region: 'Coromandel Plains & Western Ghats' },
  'Ladakh': { city: 'Leh', coordinates: [34.1526, 77.5771], region: 'Trans-Himalayan Cold Desert Plateau' },
  'Odisha': { city: 'Bhubaneswar / Puri', coordinates: [20.2961, 85.8245], region: 'Coastal Plain & Eastern Ghats' },
  'Karnataka': { city: 'Bengaluru / Mysuru', coordinates: [12.9716, 77.5946], region: 'Deccan Plateau & Western Ghats' },
  'Assam': { city: 'Guwahati / Jorhat', coordinates: [26.1445, 91.7362], region: 'Brahmaputra Valley & River Islands' },
  'West Bengal': { city: 'Siliguri / New Jalpaiguri', coordinates: [26.7271, 88.3953], region: 'Eastern Himalayan Tea Terraces' },
  'Goa': { city: 'Panaji / Madgaon', coordinates: [15.4909, 73.8278], region: 'Konkan Coastline & Mandovi River Basin' },
  'Gujarat': { city: 'Bhuj / Ahmedabad', coordinates: [23.2420, 69.6669], region: 'Great Rann & Kutch Peninsula' },
  'Jharkhand': { city: 'Ranchi', coordinates: [23.3441, 85.3096], region: 'Chotanagpur Plateau & Sal Forests' }
};

/**
 * Calculates realistic road/rail transit distance (in km) between coordinates using Haversine formula
 * multiplied by Indian highway/railway tortuosity factor (~1.25x).
 */
function calculateTransitDistanceKm(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371; // Earth radius in km
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const directLine = R * c;
  // Apply Indian terrain tortuosity factor (1.25x for plains/rail, slightly higher for ghats)
  return Math.max(15, Math.round(directLine * 1.25));
}

export function generateItinerary(request: TripPlanRequest): GeneratedItinerary {
  const daysCount = Math.min(Math.max(request.numberOfDays, 1), 7);
  const travellers = Math.max(request.numberOfTravellers, 1);
  const budget = Math.max(request.budget || 12000, 3000);
  
  // Style multipliers
  const styleMultiplier = request.travelStyle === 'Premium' ? 1.35 : request.travelStyle === 'Comfort' ? 1.0 : 0.75;
  
  // Target spend: strictly capped at 86% - 92% of budget to guarantee savings buffer
  const targetTotalSpend = Math.round(budget * (0.86 + Math.random() * 0.06));
  const targetDailySpend = Math.round(targetTotalSpend / daysCount);

  // Selected state handling
  const chosenState = request.selectedState && request.selectedState !== 'All India' 
    ? request.selectedState 
    : undefined;

  // Filter pool of destinations
  let pool: Destination[] = [];
  if (chosenState) {
    pool = DESTINATIONS.filter(d => d.state.toLowerCase() === chosenState.toLowerCase());
  }
  
  // Fallback to all destinations if pool is too small or chosenState is 'All India'
  if (pool.length === 0) {
    pool = [...DESTINATIONS];
  }

  // Interest match scoring
  const userInterests = request.interests && request.interests.length > 0 ? request.interests : ['Nature', 'Culture'];
  
  const scoredDestinations = pool.map(d => {
    let score = 0;
    if (userInterests.some(interest => 
      d.category.toLowerCase().includes(interest.toLowerCase()) || 
      interest.toLowerCase().includes(d.category.toLowerCase())
    )) {
      score += 6;
    }
    // High rating bonus
    score += (d.rating || 4.5);
    // Sustainability bonus
    if (d.sarthiImpactScore?.tier === 'Eco Pioneer (85-100)') {
      score += 3;
    }
    return { dest: d, score };
  }).sort((a, b) => b.score - a.score);

  const selectedDests: Destination[] = [];
  for (const item of scoredDestinations) {
    if (!selectedDests.some(d => d.id === item.dest.id)) {
      selectedDests.push(item.dest);
    }
  }

  // Ensure we have enough destinations to cycle through
  if (selectedDests.length === 0) {
    selectedDests.push(...DESTINATIONS.slice(0, 5));
  }

  // Determine starting point hub
  const stateHub = chosenState && STATE_STARTING_HUBS[chosenState]
    ? STATE_STARTING_HUBS[chosenState]
    : selectedDests[0] && STATE_STARTING_HUBS[selectedDests[0].state]
      ? STATE_STARTING_HUBS[selectedDests[0].state]
      : { city: request.startingLocation || 'New Delhi / Gateway Hub', coordinates: [28.6139, 77.2090] as [number, number], region: 'National Gateway Hub' };

  const routePoints: { name: string; coordinates: [number, number]; day: number }[] = [];
  routePoints.push({ 
    name: `${request.startingLocation || stateHub.city} (Gateway)`, 
    coordinates: stateHub.coordinates, 
    day: 0 
  });

  const generatedDays: DayPlan[] = [];
  let calculatedDistanceKm = 0;
  let prevCoord: [number, number] = stateHub.coordinates;

  for (let i = 0; i < daysCount; i++) {
    const dayNumber = i + 1;
    const primaryDest = selectedDests[i % selectedDests.length];
    const secondaryDest = selectedDests.length > 1 ? selectedDests[(i + 1) % selectedDests.length] : null;

    // Calculate leg transit distance
    const legDistance = calculateTransitDistanceKm(prevCoord, primaryDest.coordinates);
    calculatedDistanceKm += legDistance;
    prevCoord = primaryDest.coordinates;

    // Distribute daily budget realistically
    const dayBase = targetDailySpend;
    const baseStayCost = primaryDest.approxCost ? Math.round(primaryDest.approxCost * 1.05) : 1400;
    const stayCost = Math.round((baseStayCost * styleMultiplier * (travellers > 2 ? 1.35 : 1)) / 100) * 100;
    const foodCost = Math.round((420 * travellers * styleMultiplier) / 50) * 50;
    const transportCost = Math.round((450 * styleMultiplier * (request.transportation === 'Car' ? 1.4 : request.transportation === 'Train' ? 0.75 : 0.85)) / 50) * 50;
    
    // Calculate activities budget ensuring strict adherence
    const allocatedSoFar = stayCost + foodCost + transportCost;
    const remainingForActivities = Math.max(300 * travellers, dayBase - allocatedSoFar);
    const cleanActivitiesCost = Math.round(remainingForActivities / 50) * 50;

    const dayTotal = stayCost + foodCost + transportCost + cleanActivitiesCost;

    // Route points
    routePoints.push({
      name: primaryDest.name,
      coordinates: primaryDest.coordinates,
      day: dayNumber
    });

    const localDish = primaryDest.localFood && primaryDest.localFood.length > 0 
      ? primaryDest.localFood.map(f => f.name).join(', ')
      : 'Authentic Regional Organic Thali with Millets and Local Spices';

    const stayName = `${primaryDest.name} Certified Community Homestay`;
    const stayLocation = `${primaryDest.district}, ${primaryDest.state}`;

    const whyPrimaryRecommended = primaryDest.recommendationReason || 
      `Recommended as this ${primaryDest.category} site matches your interest in ${userInterests.join(', ')} while upholding high sustainability ratings (${primaryDest.sarthiImpactScore?.overallScore || 90}/100) and supporting local conservation.`;

    const whySecondaryRecommended = secondaryDest?.recommendationReason ||
      `Recommended to deepen immersion into indigenous crafts, local farmer cooperatives, and regional living culture in ${primaryDest.district}.`;

    const activities: ItineraryActivity[] = [
      {
        time: '08:30 AM',
        title: `Morning Eco-Walk & Heritage Exploration at ${primaryDest.name}`,
        destinationId: primaryDest.id,
        description: primaryDest.shortDescription,
        type: 'sightseeing',
        duration: '2.5 hours',
        location: `${primaryDest.district}, ${primaryDest.state}`,
        costEstimate: Math.round(cleanActivitiesCost * 0.45),
        image: primaryDest.image,
        coordinates: primaryDest.coordinates,
        recommendationReason: whyPrimaryRecommended
      },
      {
        time: '12:45 PM',
        title: 'Authentic Sustainable Regional Gastronomy',
        description: `Indulge in farm-to-table cuisine: ${localDish}. Freshly prepared using locally grown organic millets and native ingredients.`,
        type: 'food',
        duration: '1.5 hours',
        location: `Local Women's Self-Help Diner, ${primaryDest.district}`,
        costEstimate: foodCost,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        recommendationReason: 'Recommended to keep food expenditure directly within local farming families and experience authentic GI-tagged culinary traditions.'
      },
      {
        time: '03:15 PM',
        title: secondaryDest && secondaryDest.id !== primaryDest.id
          ? `Afternoon Cultural Immersion at ${secondaryDest.name}` 
          : `Indigenous Crafts & Heritage Trail at ${primaryDest.name}`,
        destinationId: secondaryDest ? secondaryDest.id : primaryDest.id,
        description: primaryDest.culturalSignificance 
          ? `Discover living heritage: ${primaryDest.culturalSignificance.substring(0, 160)}...`
          : 'Interact with resident master artisans, understand centuries-old traditional crafts, and purchase directly without middlemen.',
        type: 'sightseeing',
        duration: '2.5 hours',
        location: secondaryDest ? `${secondaryDest.district}, ${secondaryDest.state}` : `${primaryDest.district}, ${primaryDest.state}`,
        costEstimate: Math.round(cleanActivitiesCost * 0.55),
        image: secondaryDest ? secondaryDest.image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        coordinates: secondaryDest ? secondaryDest.coordinates : primaryDest.coordinates,
        recommendationReason: whySecondaryRecommended
      },
      {
        time: '06:45 PM',
        title: `Evening Check-in at ${stayName}`,
        description: `Settle into a verified sustainable homestay. Experience solar-powered hospitality, organic herbal refreshments, and fireside cultural oral histories.`,
        type: 'checkin',
        duration: 'Overnight',
        location: stayLocation,
        costEstimate: stayCost,
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80',
        recommendationReason: 'Recommended certified community homestay retaining ~85% of accommodation fees locally with solar water heating and zero single-use plastic.'
      }
    ];

    generatedDays.push({
      dayNumber,
      title: `DAY ${dayNumber} — ${primaryDest.name.toUpperCase()} & ${primaryDest.category.toUpperCase()} TRAIL`,
      theme: `${primaryDest.category} & Living Cultural Heritage`,
      activities,
      stay: {
        name: stayName,
        type: 'Homestay' as const,
        costPerNight: stayCost,
        location: stayLocation,
        rating: 4.8,
        verified: true
      },
      dayCosts: {
        food: foodCost,
        transport: transportCost,
        stay: stayCost,
        activities: cleanActivitiesCost,
        total: dayTotal
      },
      routeNotes: `Transit leg: ~${legDistance} km via ${request.transportation.toLowerCase()} corridor connecting ${primaryDest.district} eco-trails and village artisan clusters.`
    });
  }

  // Calculate total accumulated spend
  let totalAccumulatedSpend = generatedDays.reduce((sum, d) => sum + d.dayCosts.total, 0);

  // STRICT BUDGET ADHERENCE ENFORCEMENT:
  // If total spend exceeds budget or comes too close to ceiling, scale costs down proportionally
  // so estimatedSpend <= budget ALWAYS (maintaining a healthy 8-12% buffer).
  if (totalAccumulatedSpend > budget * 0.92) {
    const scaleFactor = (budget * 0.88) / totalAccumulatedSpend;
    totalAccumulatedSpend = 0;
    
    generatedDays.forEach(day => {
      day.dayCosts.stay = Math.round((day.dayCosts.stay * scaleFactor) / 50) * 50;
      day.dayCosts.food = Math.round((day.dayCosts.food * scaleFactor) / 50) * 50;
      day.dayCosts.transport = Math.round((day.dayCosts.transport * scaleFactor) / 50) * 50;
      day.dayCosts.activities = Math.round((day.dayCosts.activities * scaleFactor) / 50) * 50;
      day.dayCosts.total = day.dayCosts.stay + day.dayCosts.food + day.dayCosts.transport + day.dayCosts.activities;
      day.stay.costPerNight = day.dayCosts.stay;
      totalAccumulatedSpend += day.dayCosts.total;
    });
  }

  const finalSpend = Math.min(totalAccumulatedSpend, Math.round(budget * 0.92));
  const remainingSavings = Math.max(0, budget - finalSpend);

  const interestSummary = userInterests.slice(0, 3).join(' + ');
  const territoryTitle = chosenState ? chosenState.toUpperCase() : 'PAN-INDIA';

  // Construct draft itinerary object
  const draftItinerary: GeneratedItinerary = {
    id: `trip-${Date.now()}`,
    title: `YOUR ${daysCount}-DAY ${territoryTitle} SUSTAINABLE JOURNEY`,
    summary: `Personalized itinerary for ${travellers} traveler${travellers > 1 ? 's' : ''} highlighting ${interestSummary} with verified community homestays and ${request.transportation.toLowerCase()} transit within your ₹${budget.toLocaleString('en-IN')} budget.`,
    startingLocation: request.startingLocation || stateHub.city,
    destinationRegion: chosenState ? `${chosenState} (${stateHub.region})` : (request.destinationRegion || 'Pan-India Cultural & Eco Circuits'),
    selectedState: chosenState || 'All India',
    totalBudget: budget,
    estimatedSpend: finalSpend,
    remainingBudget: remainingSavings,
    numberOfDays: daysCount,
    numberOfTravellers: travellers,
    interests: userInterests,
    travelStyle: request.travelStyle,
    preferredLanguage: request.preferredLanguage || 'English',
    transportation: request.transportation,
    days: generatedDays,
    routeCoordinates: routePoints,
    totalDistanceKm: calculatedDistanceKm + (daysCount * 18), // includes local sightseeing transit
    estimatedTravelTime: `${((calculatedDistanceKm / 45) + (daysCount * 0.8)).toFixed(1)} hrs total scenic transit`,
    createdAt: new Date().toISOString()
  };

  // Compute explainable SARTHI Impact Score across the 5 categories (30, 25, 20, 15, 10)
  draftItinerary.sarthiImpactScore = calculateItineraryImpactScore(draftItinerary, DESTINATIONS);

  // Generate conventional comparison plan and compute side-by-side comparison metrics (Task 3)
  const conventionalComparison = generateConventionalComparisonPlan(draftItinerary);
  draftItinerary.comparisonPlan = conventionalComparison;
  draftItinerary.comparisonMetrics = compareItineraries(draftItinerary, conventionalComparison);

  return draftItinerary;
}
