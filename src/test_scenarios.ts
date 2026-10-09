import { generateItinerary } from './services/itineraryEngine';
import { DESTINATIONS } from './data/destinations';
import { TripPlanRequest } from './types/index';

function runScenarioTests() {
  console.log('====================================================');
  console.log('SARTHI AI: KALAM STREAM CHALLENGE 2026 TEST SUITE');
  console.log('Testing 3 Representative Scenarios Across India');
  console.log('====================================================\n');

  const scenarios: { name: string; req: TripPlanRequest }[] = [
    {
      name: 'Scenario 1: Rajasthan — Cultural & Heritage Tourism',
      req: {
        startingLocation: 'Jaipur / Jodhpur',
        selectedState: 'Rajasthan',
        destinationRegion: 'Thar Desert & Aravalli Forts',
        budget: 15000,
        isCustomBudget: false,
        numberOfDays: 3,
        numberOfTravellers: 2,
        travelDate: '2026-10-20',
        interests: ['Culture', 'Heritage'],
        travelStyle: 'Comfort',
        preferredLanguage: 'English',
        transportation: 'Train'
      }
    },
    {
      name: 'Scenario 2: Kerala — Nature & Sustainable Tourism',
      req: {
        startingLocation: 'Kochi / Kollam',
        selectedState: 'Kerala',
        destinationRegion: 'Backwaters & Western Ghats Biosphere',
        budget: 14000,
        isCustomBudget: false,
        numberOfDays: 3,
        numberOfTravellers: 2,
        travelDate: '2026-10-25',
        interests: ['Nature', 'Eco-Tourism'],
        travelStyle: 'Budget',
        preferredLanguage: 'English',
        transportation: 'Train'
      }
    },
    {
      name: 'Scenario 3: Maharashtra — Heritage & Local Tourism',
      req: {
        startingLocation: 'Mumbai / Chhatrapati Sambhajinagar',
        selectedState: 'Maharashtra',
        destinationRegion: 'Sahyadri Western Ghats & Rock-Cut Heritage',
        budget: 16000,
        isCustomBudget: false,
        numberOfDays: 3,
        numberOfTravellers: 2,
        travelDate: '2026-11-05',
        interests: ['Heritage', 'Culture', 'Local Cuisines'],
        travelStyle: 'Comfort',
        preferredLanguage: 'Marathi',
        transportation: 'Train'
      }
    }
  ];

  let allPassed = true;

  scenarios.forEach((sc, idx) => {
    console.log(`----------------------------------------------------`);
    console.log(`Running [${idx + 1}/3]: ${sc.name}`);
    console.log(`----------------------------------------------------`);

    const itin = generateItinerary(sc.req);

    // 1. Destination verification
    const stateDestinations = itin.days.map(d => d.activities[0].location);
    console.log(`• Title: "${itin.title}"`);
    console.log(`• Selected State: ${itin.selectedState}`);
    console.log(`• Total Waypoints: ${itin.routeCoordinates.length} (Gateway + ${itin.days.length} Days)`);
    console.log(`• Total Distance: ${itin.totalDistanceKm} km (${itin.estimatedTravelTime})`);

    // Verify coordinates exist for interactive map
    const coordsValid = itin.routeCoordinates.every(
      rc => Array.isArray(rc.coordinates) && rc.coordinates.length === 2 && !isNaN(rc.coordinates[0]) && !isNaN(rc.coordinates[1])
    );
    console.log(`• Map Coordinates Valid: ${coordsValid ? 'PASS ✓' : 'FAIL ✗'}`);
    if (!coordsValid) allPassed = false;

    // 2. Budget verification
    const budgetOk = itin.estimatedSpend <= itin.totalBudget && itin.remainingBudget >= 0;
    console.log(`• Budget Check: Total ₹${itin.totalBudget.toLocaleString()} | Spend: ₹${itin.estimatedSpend.toLocaleString()} | Savings Buffer: ₹${itin.remainingBudget.toLocaleString()}`);
    console.log(`  -> Budget Adherence: ${budgetOk ? 'PASS (Estimated spend <= Budget) ✓' : 'FAIL (Budget Exceeded) ✗'}`);
    if (!budgetOk) allPassed = false;

    // 3. Impact Score verification
    const score = itin.sarthiImpactScore;
    if (!score || !score.categories) {
      console.log('• SARTHI Impact Score: FAIL (Categories missing) ✗');
      allPassed = false;
      return;
    }

    const { 
      environmentalSustainability, 
      localEconomicContribution, 
      culturalHeritageEngagement, 
      sustainableTransportation, 
      responsibleTourismPractices 
    } = score.categories;

    const weightsOk = 
      environmentalSustainability.maxScore === 30 &&
      localEconomicContribution.maxScore === 25 &&
      culturalHeritageEngagement.maxScore === 20 &&
      sustainableTransportation.maxScore === 15 &&
      responsibleTourismPractices.maxScore === 10;

    const sumScore = 
      environmentalSustainability.score + 
      localEconomicContribution.score + 
      culturalHeritageEngagement.score + 
      sustainableTransportation.score + 
      responsibleTourismPractices.score;

    const scoreMatch = sumScore === score.overallScore;

    console.log(`• SARTHI Impact Score: ${score.overallScore}/100 [${score.tier}]`);
    console.log(`  - Environmental Sustainability: ${environmentalSustainability.score}/30 pts`);
    console.log(`  - Local Economic Contribution:  ${localEconomicContribution.score}/25 pts`);
    console.log(`  - Cultural Heritage Engagement: ${culturalHeritageEngagement.score}/20 pts`);
    console.log(`  - Sustainable Transportation:   ${sustainableTransportation.score}/15 pts`);
    console.log(`  - Responsible Tourism Practices:${responsibleTourismPractices.score}/10 pts`);
    console.log(`  - 5-Pillar Sum Validation: ${scoreMatch && weightsOk ? `PASS (Sum ${sumScore} = Overall ${score.overallScore}) ✓` : 'FAIL ✗'}`);
    if (!scoreMatch || !weightsOk) allPassed = false;

    // 4. Recommendation Reason verification
    const activitiesWithReasons = itin.days.flatMap(d => d.activities).filter(a => !!a.recommendationReason);
    const totalActivities = itin.days.flatMap(d => d.activities).length;
    console.log(`• Explainable Recommendation Reasons: ${activitiesWithReasons.length}/${totalActivities} activities annotated with reasons`);
    console.log(`  Sample: "${activitiesWithReasons[0]?.recommendationReason?.substring(0, 80)}..."`);
    if (activitiesWithReasons.length < totalActivities) allPassed = false;

    // 5. Compare Travel Plans verification
    const comp = itin.comparisonMetrics;
    if (comp) {
      console.log(`• Itinerary Comparison Metrics Generated: PASS ✓`);
      console.log(`  - Plan A Cost: ₹${comp.planA.estimatedSpend} vs Plan B Cost: ₹${comp.planB.estimatedSpend}`);
      console.log(`  - Plan A Distance: ${comp.planA.totalDistanceKm}km vs Plan B Distance: ${comp.planB.totalDistanceKm}km`);
      console.log(`  - Plan A Score: ${comp.planA.impactScore}/100 vs Plan B Score: ${comp.planB.impactScore}/100`);
      console.log(`  - Plan A Community Retention: ~${comp.planA.communityRetentionPct}% vs Plan B: ~${comp.planB.communityRetentionPct}%`);
      console.log(`  - Plan A Cultural Experiences: ${comp.planA.culturalExperiencesCount} vs Plan B: ${comp.planB.culturalExperiencesCount}`);
      console.log(`  - Comparison Takeaway: "${comp.comparisonHighlights.summaryText}"`);
    } else {
      console.log(`• Itinerary Comparison Metrics: FAIL (Missing) ✗`);
      allPassed = false;
    }
    console.log('');
  });

  console.log('====================================================');
  console.log(`OVERALL TEST STATUS: ${allPassed ? 'ALL SCENARIOS PASSED SUCCESSFULLY ✓' : 'SOME CHECKS FAILED ✗'}`);
  console.log('====================================================');
}

runScenarioTests();
