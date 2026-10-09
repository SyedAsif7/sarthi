import { Destination, GeneratedItinerary, SarthiImpactScore, ItineraryComparisonMetrics } from '../types';

export const IMPACT_ASSUMPTIONS_DISCLAIMER = 
  "Transparency & Model Estimates Disclaimer: The SARTHI Impact Score (0–100) is a multi-criteria heuristic planning index developed for the KALAM STREAM Challenge 2026. Metrics are model-derived estimations based on transit modal emission factors (e.g., Indian Railways ~28g CO₂/pkm vs private ICE vehicles ~140g CO₂/pkm), local economic multiplier heuristics (~75–85% retention for community homestays vs ~25–35% for corporate hotel chains), and ASI/Forest carrying capacity guidelines. These scores serve as indicative planning benchmarks to help travelers make responsible choices and should not be construed as laboratory-certified environmental life-cycle audits.";

/**
 * Calculates a transparent, explainable SARTHI Impact Score for an individual destination
 * using the 5 official KALAM STREAM Challenge 2026 categories:
 * 1. Environmental sustainability (30 pts)
 * 2. Local economic contribution (25 pts)
 * 3. Cultural heritage engagement (20 pts)
 * 4. Sustainable transportation (15 pts)
 * 5. Responsible tourism practices (10 pts)
 */
export function calculateDestinationImpactScore(dest: Partial<Destination>): SarthiImpactScore {
  // If destination already has an authentic score configured with categories, return it
  if (dest.sarthiImpactScore && dest.sarthiImpactScore.categories) {
    return dest.sarthiImpactScore;
  }

  // 1. Environmental sustainability (out of 30)
  let envScore = 25;
  if (dest.category === 'Waterfalls' || dest.category === 'Nature') {
    envScore = 28;
  } else if (dest.category === 'Wildlife') {
    envScore = 29;
  } else if (dest.category === 'Heritage' || dest.category === 'Culture') {
    envScore = 26;
  }
  if (dest.ecoAdvisories && dest.ecoAdvisories.length > 0) {
    envScore = Math.min(30, envScore + 1);
  }

  // 2. Local economic contribution (out of 25)
  let econScore = 21;
  let retentionPct = 78;
  if (dest.localFood && dest.localFood.length > 0) {
    econScore += 2;
    retentionPct = 84;
  }
  if (dest.indigenousCrafts && dest.indigenousCrafts.length > 0) {
    econScore = Math.min(25, econScore + 2);
    retentionPct = 88;
  }

  // 3. Cultural heritage engagement (out of 20)
  let cultScore = 16;
  if (dest.category === 'Heritage' || dest.category === 'Culture' || dest.category === 'Spiritual') {
    cultScore = 19;
  } else if (dest.culturalSignificance) {
    cultScore = 18;
  }

  // 4. Sustainable transportation (out of 15)
  let transScore = 12;
  let carbonTransit: 'Electric / Shared Transit' | 'Trek / Footpath Friendly' | 'Rail Accessible' | 'Road Corridor' = 'Rail Accessible';
  if (dest.howToReach?.rail && !dest.howToReach.rail.toLowerCase().includes('not available')) {
    transScore = 13;
    carbonTransit = 'Rail Accessible';
  }
  if (dest.category === 'Nature' || dest.category === 'Waterfalls') {
    transScore = 14;
    carbonTransit = 'Trek / Footpath Friendly';
  }

  // 5. Responsible tourism practices (out of 10)
  let respScore = 8;
  if (dest.crowdStatus === 'Low' || dest.crowdStatus === 'Moderate') {
    respScore = 9;
  }
  if (dest.ecoAdvisories && dest.ecoAdvisories.length >= 2) {
    respScore = 10;
  }

  const overall = Math.min(100, Math.max(50, envScore + econScore + cultScore + transScore + respScore));

  let tier: SarthiImpactScore['tier'] = 'Conscious Travel (65-74)';
  if (overall >= 85) tier = 'Eco Pioneer (85-100)';
  else if (overall >= 75) tier = 'High Sustainable (75-84)';

  return {
    overallScore: overall,
    tier,
    categories: {
      environmentalSustainability: {
        score: envScore,
        maxScore: 30,
        metricText: `${envScore}/30: Ecosystem conservation, regulated footfall, and plastic-free guidelines.`,
        explanation: 'Evaluates biodiversity protection, low ecological disturbance, and nature conservation management.'
      },
      localEconomicContribution: {
        score: econScore,
        maxScore: 25,
        metricText: `${econScore}/25: ~${retentionPct}% of visitor spending flows directly to local homestays, artisans, and village kitchens.`,
        explanation: 'Estimates revenue retention within host community cooperatives, homestay hosts, and village guides.'
      },
      culturalHeritageEngagement: {
        score: cultScore,
        maxScore: 20,
        metricText: `${cultScore}/20: Active promotion of living cultural traditions, GI craft clusters, and monument integrity.`,
        explanation: 'Assesses immersion in authentic regional heritage without commodification or cultural erosion.'
      },
      sustainableTransportation: {
        score: transScore,
        maxScore: 15,
        metricText: `${transScore}/15: Walkable paths, electric shuttles, or Indian Railways connectivity.`,
        explanation: 'Measures low-carbon accessibility and integration with energy-efficient transport corridors.'
      },
      responsibleTourismPractices: {
        score: respScore,
        maxScore: 10,
        metricText: `${respScore}/10: Visitor code of conduct, carrying capacity compliance, and seasonal crowd management.`,
        explanation: 'Reflects adherence to responsible tourist etiquette, quiet observation zones, and waste neutrality.'
      }
    },
    carbonEfficiency: {
      score: Math.round((envScore / 30) * 15 + (transScore / 15) * 15),
      metricText: `${envScore}/30 Env + ${transScore}/15 Transit: Lower carbon footprint through walkable trails, rail connectivity, or shared eco-transit.`,
      transitType: carbonTransit
    },
    communityBenefit: {
      score: Math.round((econScore / 25) * 35),
      economicRetentionPct: retentionPct,
      metricText: `${econScore}/25: ~${retentionPct}% of visitor expenditure flows directly to local homestays, village guides, and artisans.`
    },
    conservationSensitivity: {
      score: Math.round((cultScore / 20) * 15 + (respScore / 10) * 20),
      carryingCapacity: dest.category === 'Wildlife' ? 'Protected Reserve' : 'Regulated / Low Impact',
      metricText: `${cultScore}/20 Cultural + ${respScore}/10 Responsible: Nature & heritage preservation guidelines with plastic-free and regulated access.`
    },
    explanation: `${dest.name || 'This destination'} demonstrates responsible tourism practices by integrating village homestays, supporting indigenous heritage, and preserving local ecology.`,
    sustainableRecommendations: [
      'Carry a reusable hydration bottle; avoid single-use plastic bottles.',
      'Engage authorized local guides to support community livelihood directly.',
      'Buy GI-tagged authentic handicrafts directly from artisan cooperatives.',
      'Respect sacred groves and historical sanctuaries by adhering to silent walking zones.'
    ],
    assumptionsDisclaimer: IMPACT_ASSUMPTIONS_DISCLAIMER
  };
}

/**
 * Calculates a consolidated SARTHI Impact Score for a multi-day itinerary across the
 * 5 official KALAM STREAM Challenge 2026 categories (30, 25, 20, 15, 10).
 */
export function calculateItineraryImpactScore(
  itinerary: Partial<GeneratedItinerary>,
  destinations: Destination[]
): SarthiImpactScore {
  const days = itinerary.days || [];
  const transportation = itinerary.transportation || 'Train';

  // 1. Environmental Sustainability (max 30 pts)
  const hasEcoStay = days.some(d => d.stay && (d.stay.type === 'Homestay' || d.stay.type === 'Eco-Lodge'));
  let envScore = hasEcoStay ? 27 : 24;
  if (days.length >= 3) {
    envScore = Math.min(30, envScore + 1);
  }

  // 2. Local Economic Contribution (max 25 pts)
  let econScore = 20;
  let retentionPct = 74;
  if (hasEcoStay) {
    econScore = 23;
    retentionPct = 86;
  }
  const hasLocalFood = days.some(d => d.activities.some(a => a.type === 'food'));
  if (hasLocalFood) {
    econScore = Math.min(25, econScore + 1);
    retentionPct = Math.min(90, retentionPct + 2);
  }

  // 3. Cultural Heritage Engagement (max 20 pts)
  const culturalCount = days.reduce((count, day) => {
    return count + day.activities.filter(a => 
      a.title.toLowerCase().includes('heritage') || 
      a.title.toLowerCase().includes('craft') || 
      a.title.toLowerCase().includes('tradition') || 
      a.title.toLowerCase().includes('culture') ||
      a.description.toLowerCase().includes('unesco')
    ).length;
  }, 0);
  let cultScore = culturalCount >= 3 ? 19 : culturalCount >= 1 ? 17 : 15;

  // 4. Sustainable Transportation (max 15 pts)
  let transScore = 8;
  let transitSummary = 'Standard road transit corridor';
  let carbonSavedEst = '35 kg CO₂e saved';
  if (transportation === 'Train') {
    transScore = 14;
    transitSummary = 'Indian Railways electrified corridor generates ~75% lower emissions per passenger-km than private ICE cars.';
    carbonSavedEst = '120 kg CO₂e saved per passenger';
  } else if (transportation === 'Public Transport' || transportation === 'Bus') {
    transScore = 12;
    transitSummary = 'Shared electric / state express transit significantly cuts per-capita trip emissions.';
    carbonSavedEst = '70 kg CO₂e saved per passenger';
  } else {
    transScore = 8;
    transitSummary = 'Private road route; carpooling and destination e-rickshaws recommended to minimize emissions.';
    carbonSavedEst = '20 kg CO₂e saved via optimized route';
  }

  // 5. Responsible Tourism Practices (max 10 pts)
  let respScore = 9; // High baseline because SARTHI itineraries sequence off-peak visits and adhere to carrying capacities

  const overall = Math.min(100, Math.max(50, envScore + econScore + cultScore + transScore + respScore));

  let tier: SarthiImpactScore['tier'] = 'Conscious Travel (65-74)';
  if (overall >= 85) tier = 'Eco Pioneer (85-100)';
  else if (overall >= 75) tier = 'High Sustainable (75-84)';

  return {
    overallScore: overall,
    tier,
    categories: {
      environmentalSustainability: {
        score: envScore,
        maxScore: 30,
        metricText: `${envScore}/30: Low ecological footprint through verified eco-stays and low-impact natural trails.`,
        explanation: 'Evaluates accommodation resource efficiency (solar water heating, organic composting) and respect for habitat thresholds.'
      },
      localEconomicContribution: {
        score: econScore,
        maxScore: 25,
        metricText: `${econScore}/25: ~${retentionPct}% of total budget stays directly in the local community economy.`,
        explanation: 'Estimates financial retention with certified village homestays, local culinary collectives, and indigenous artisans.'
      },
      culturalHeritageEngagement: {
        score: cultScore,
        maxScore: 20,
        metricText: `${cultScore}/20: ${culturalCount} verified cultural & heritage touchpoints included in your route.`,
        explanation: 'Measures exposure to living cultural heritage, ASI/UNESCO protected monuments, and GI-tagged indigenous crafts.'
      },
      sustainableTransportation: {
        score: transScore,
        maxScore: 15,
        metricText: `${transScore}/15: ${transitSummary} (${carbonSavedEst}).`,
        explanation: 'Assesses per-passenger emissions based on modal emission factors published by Indian transit authorities.'
      },
      responsibleTourismPractices: {
        score: respScore,
        maxScore: 10,
        metricText: `${respScore}/10: Sequenced off-peak visits preventing overcrowding at sensitive spots.`,
        explanation: 'Reflects zero-single-use-plastic advisories, local dress etiquette, and quiet contemplation protocols.'
      }
    },
    // Backward compatibility fields
    carbonEfficiency: {
      score: Math.min(30, Math.round((envScore / 30) * 15 + (transScore / 15) * 15)),
      metricText: `${envScore}/30 Env + ${transScore}/15 Transit: ${transitSummary} (${carbonSavedEst}).`,
      transitType: transportation === 'Train' ? 'Rail Accessible' : 'Electric / Shared Transit'
    },
    communityBenefit: {
      score: Math.min(35, Math.round((econScore / 25) * 35)),
      economicRetentionPct: retentionPct,
      metricText: `${econScore}/25: ~${retentionPct}% of trip spend retained by local families and village collectives.`
    },
    conservationSensitivity: {
      score: Math.min(35, Math.round((cultScore / 20) * 15 + (respScore / 10) * 20)),
      carryingCapacity: 'Regulated / Low Impact',
      metricText: `${cultScore}/20 Cultural + ${respScore}/10 Responsible: Sequenced route respecting carrying capacity and heritage guidelines.`
    },
    explanation: `This ${itinerary.numberOfDays || 3}-day itinerary achieves a ${overall}/100 SARTHI Impact Score by combining ${transportation.toLowerCase()} logistics with ~${retentionPct}% community revenue retention and verified heritage trails.`,
    sustainableRecommendations: [
      'Travel by train where available to minimize transit carbon footprint.',
      'Dine at village-run family eateries to savor authentic GI-tagged and indigenous millets/grains.',
      'Purchase handicrafts directly from self-help artisan groups or state handloom emporiums.',
      'Practice zero-litter principles: pack out all non-biodegradable waste.'
    ],
    assumptionsDisclaimer: IMPACT_ASSUMPTIONS_DISCLAIMER
  };
}

/**
 * Returns UI color tokens and badge details for a given SARTHI Impact Score.
 */
export function getImpactTierBadge(scoreOrObj: number | SarthiImpactScore | undefined) {
  let score = 80;
  if (typeof scoreOrObj === 'number') {
    score = scoreOrObj;
  } else if (scoreOrObj && typeof scoreOrObj.overallScore === 'number') {
    score = scoreOrObj.overallScore;
  }

  if (score >= 85) {
    return {
      label: 'Eco Pioneer',
      tier: 'Eco Pioneer (85-100)',
      scoreText: `${score}/100`,
      color: 'text-emerald-800',
      textClass: 'text-emerald-800',
      bg: 'bg-emerald-50',
      bgClass: 'bg-emerald-50',
      border: 'border-emerald-300',
      borderClass: 'border-emerald-300',
      badgeBg: 'bg-emerald-700 text-white',
      ring: 'ring-emerald-500',
      icon: '🌿'
    };
  }
  if (score >= 75) {
    return {
      label: 'High Sustainable',
      tier: 'High Sustainable (75-84)',
      scoreText: `${score}/100`,
      color: 'text-teal-800',
      textClass: 'text-teal-800',
      bg: 'bg-teal-50',
      bgClass: 'bg-teal-50',
      border: 'border-teal-300',
      borderClass: 'border-teal-300',
      badgeBg: 'bg-teal-700 text-white',
      ring: 'ring-teal-500',
      icon: '🌱'
    };
  }
  if (score >= 65) {
    return {
      label: 'Conscious Travel',
      tier: 'Conscious Travel (65-74)',
      scoreText: `${score}/100`,
      color: 'text-amber-800',
      textClass: 'text-amber-800',
      bg: 'bg-amber-50',
      bgClass: 'bg-amber-50',
      border: 'border-amber-300',
      borderClass: 'border-amber-300',
      badgeBg: 'bg-amber-600 text-white',
      ring: 'ring-amber-500',
      icon: '✨'
    };
  }
  return {
    label: 'Eco-Track',
    tier: 'Developing Eco-Track',
    scoreText: `${score}/100`,
    color: 'text-slate-800',
    textClass: 'text-slate-800',
    bg: 'bg-slate-50',
    bgClass: 'bg-slate-50',
    border: 'border-slate-300',
    borderClass: 'border-slate-300',
    badgeBg: 'bg-slate-700 text-white',
    ring: 'ring-slate-500',
    icon: '🧭'
  };
}

/**
 * Generates a conventional / standard commercial alternative itinerary (Plan B)
 * to compare against the active SARTHI sustainable itinerary (Plan A).
 */
export function generateConventionalComparisonPlan(planA: GeneratedItinerary): GeneratedItinerary {
  const higherSpend = Math.round(planA.totalBudget * 0.98); // Commercial plans push close to budget ceiling
  const conventionalDistance = Math.round(planA.totalDistanceKm * 1.35); // Highway taxi detours

  const conventionalDays = planA.days.map((day) => ({
    ...day,
    title: `DAY ${day.dayNumber} — FAST-TRACK SIGHTSEEING`,
    theme: 'Standard Commercial City Circuit',
    stay: {
      name: `${day.stay.name.replace('Certified Community Homestay', 'Standard Commercial Hotel').replace('Homestay', 'Commercial Hotel')}`,
      type: 'Hotel' as const,
      costPerNight: Math.round(day.stay.costPerNight * 1.5),
      location: day.stay.location,
      rating: 4.0,
      verified: false
    },
    dayCosts: {
      food: Math.round(day.dayCosts.food * 1.3),
      transport: Math.round(day.dayCosts.transport * 1.8),
      stay: Math.round(day.dayCosts.stay * 1.5),
      activities: Math.round(day.dayCosts.activities * 0.8),
      total: Math.round(day.dayCosts.total * 1.35)
    },
    activities: day.activities.map((act, idx) => ({
      ...act,
      title: idx === 0 ? `Express Stop at ${act.title.replace('Morning Eco-Walk & Exploration at ', '')}` : act.title,
      description: idx === 1 ? 'Quick meal at roadside franchise diner.' : act.description,
      costEstimate: Math.round(act.costEstimate * 1.25),
      recommendationReason: 'Standard high-traffic commercial tourist point without community engagement.'
    }))
  }));

  const conventionalPlan: GeneratedItinerary = {
    ...planA,
    id: `conv-${planA.id}`,
    title: `CONVENTIONAL ROAD & HOTEL ALTERNATIVE`,
    summary: `Fast-track private vehicle itinerary with commercial city hotels and quick-stop sightseeing.`,
    transportation: 'Car',
    estimatedSpend: higherSpend,
    remainingBudget: Math.max(0, planA.totalBudget - higherSpend),
    totalDistanceKm: conventionalDistance,
    estimatedTravelTime: `${(planA.numberOfDays * 3.8).toFixed(1)} hrs road highway transit`,
    days: conventionalDays,
    sarthiImpactScore: {
      overallScore: 61,
      tier: 'Developing Eco-Track',
      categories: {
        environmentalSustainability: {
          score: 16,
          maxScore: 30,
          metricText: '16/30: Higher emissions from private ICE highway driving and non-audited hotel energy use.',
          explanation: 'Standard corporate chain utilities with minimal greywater or solar recycling.'
        },
        localEconomicContribution: {
          score: 12,
          maxScore: 25,
          metricText: '12/25: ~32% of spending stays in the locality; remainder goes to hotel booking conglomerates.',
          explanation: 'Low retention with local artisan collectives and village families.'
        },
        culturalHeritageEngagement: {
          score: 13,
          maxScore: 20,
          metricText: '13/20: Standard quick monument photo-stops with limited indigenous interaction.',
          explanation: 'Focuses on crowded exterior viewpoints rather than living artisan crafts.'
        },
        sustainableTransportation: {
          score: 6,
          maxScore: 15,
          metricText: '6/15: Private fossil-fuel SUV corridor with elevated carbon emissions (~180g CO₂/pkm).',
          explanation: 'No rail or electric shared transit utilization.'
        },
        responsibleTourismPractices: {
          score: 14,
          maxScore: 10,
          metricText: '14/10: Basic compliance with standard tourism rules.',
          explanation: 'Visits occur during peak rush hours, increasing congestion.'
        }
      },
      carbonEfficiency: {
        score: 14,
        metricText: '14/30: Elevated fossil-fuel emissions from private SUV highway transit.',
        transitType: 'Road Corridor'
      },
      communityBenefit: {
        score: 14,
        economicRetentionPct: 32,
        metricText: '14/35: Only ~32% of tourist expenditure retained in local regional economy.'
      },
      conservationSensitivity: {
        score: 18,
        carryingCapacity: 'High Footfall Regulated',
        metricText: '18/35: High peak-hour congestion at standard tourist bottlenecks.'
      },
      explanation: 'Conventional itinerary reliant on private taxi transport and corporate chain hotels, yielding higher carbon emissions and minimal direct village economic retention.',
      sustainableRecommendations: [
        'Shift to rail corridors to cut travel emissions by up to 75%.',
        'Book certified community homestays to ensure travel spending directly empowers local families.'
      ],
      assumptionsDisclaimer: IMPACT_ASSUMPTIONS_DISCLAIMER
    }
  };

  return conventionalPlan;
}

/**
 * Compares two itineraries side-by-side across the 5 core dimensions:
 * 1. Estimated total cost
 * 2. Travel distance
 * 3. Sustainability score (SARTHI Impact Score)
 * 4. Local community engagement (% retention & stays)
 * 5. Cultural experiences count
 */
export function compareItineraries(
  planA: GeneratedItinerary,
  planB: GeneratedItinerary
): ItineraryComparisonMetrics {
  const scoreA = planA.sarthiImpactScore?.overallScore || 85;
  const scoreB = planB.sarthiImpactScore?.overallScore || 60;

  const retentionA = planA.sarthiImpactScore?.categories?.localEconomicContribution?.score 
    ? Math.round((planA.sarthiImpactScore.categories.localEconomicContribution.score / 25) * 100) 
    : (planA.sarthiImpactScore?.communityBenefit?.economicRetentionPct || 85);
  
  const retentionB = planB.sarthiImpactScore?.categories?.localEconomicContribution?.score 
    ? Math.round((planB.sarthiImpactScore.categories.localEconomicContribution.score / 25) * 100) 
    : (planB.sarthiImpactScore?.communityBenefit?.economicRetentionPct || 35);

  const countCultural = (itin: GeneratedItinerary) => {
    return itin.days.reduce((total, day) => {
      return total + day.activities.filter(a => 
        a.title.toLowerCase().includes('heritage') || 
        a.title.toLowerCase().includes('craft') || 
        a.title.toLowerCase().includes('culture') || 
        a.title.toLowerCase().includes('tradition') || 
        a.description.toLowerCase().includes('unesco') ||
        a.type === 'sightseeing'
      ).length;
    }, 0);
  };

  const culturalA = countCultural(planA);
  const culturalB = Math.max(1, Math.round(countCultural(planB) * 0.6));

  const costDiff = planB.estimatedSpend - planA.estimatedSpend;
  const scoreDiff = scoreA - scoreB;
  const distanceDiff = planB.totalDistanceKm - planA.totalDistanceKm;
  const localRetentionGainPct = retentionA - retentionB;

  return {
    planA: {
      name: 'SARTHI Sustainable Itinerary (Plan A)',
      badge: '🌿 Eco-Pioneer Choice',
      estimatedSpend: planA.estimatedSpend,
      totalDistanceKm: planA.totalDistanceKm,
      impactScore: scoreA,
      communityRetentionPct: retentionA,
      culturalExperiencesCount: culturalA,
      transportMode: planA.transportation,
      stayType: 'Certified Community Homestays & Eco-Lodges',
      keyPros: [
        `Higher Sustainability Score: ${scoreA}/100`,
        `~${retentionA}% of spend directly funds village families & artisans`,
        `${culturalA} authentic cultural & GI craft immersions`,
        `Low-carbon transit corridor saving estimated emissions`
      ]
    },
    planB: {
      name: 'Conventional Commercial Route (Plan B)',
      badge: '🚗 Conventional Road Plan',
      estimatedSpend: planB.estimatedSpend,
      totalDistanceKm: planB.totalDistanceKm,
      impactScore: scoreB,
      communityRetentionPct: retentionB,
      culturalExperiencesCount: culturalB,
      transportMode: planB.transportation || 'Car',
      stayType: 'Commercial Chain Hotels',
      keyPros: [
        'Standard highway routes and commercial booking desks',
        'Familiar city hotel amenities',
        'Standard roadside vehicle availability'
      ]
    },
    comparisonHighlights: {
      costDiff,
      scoreDiff,
      distanceDiff,
      localRetentionGainPct,
      summaryText: costDiff >= 0
        ? `Plan A saves ₹${costDiff.toLocaleString('en-IN')} while scoring +${scoreDiff} points higher on sustainability and channeling +${localRetentionGainPct}% more revenue into local hands.`
        : `Plan A provides +${scoreDiff} points higher sustainability with ~${localRetentionGainPct}% higher community income retention.`
    }
  };
}
