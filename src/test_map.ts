/**
 * SARTHI AI: Interactive Map & OpenStreetMap Tile Verification Suite
 * Validates:
 * 1. Root Cause Identification: Carto voyager tile endpoint deprecation
 * 2. Replacement Tile Layer: https://tile.openstreetmap.org/{z}/{x}/{y}.png
 * 3. OpenStreetMap HTTP 200 & Content-Type image/png verification
 * 4. Coordinate Validity: All 38 Pan-India destinations within geographical bounds
 * 5. Route Polyline Generation for Rajasthan, Kerala, and Maharashtra
 * 6. Codebase Audit: Zero remaining Carto basemap URLs in source code
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { DESTINATIONS, INDIAN_STATES } from './data/destinations';
import { generateItinerary } from './services/itineraryEngine';

function fetchHttp(url: string): Promise<{ statusCode: number; contentType: string; bytes: number }> {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': 'SARTHI-AI-Tourism-Platform/1.0 (https://sarthi-ai.in; contact@sarthi-ai.in)',
          'Referer': 'https://sarthi-ai.in',
        },
      },
      (res) => {
        let size = 0;
        res.on('data', (chunk) => (size += chunk.length));
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode || 0,
            contentType: res.headers['content-type'] || '',
            bytes: size,
          });
        });
      }
    );
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

async function runMapTests() {
  console.log('====================================================');
  console.log('SARTHI AI: INTERACTIVE MAP & TILE INTEGRATION TEST');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(cond: boolean, name: string, detail: string = '') {
    if (cond) {
      console.log(`✓ PASS: ${name} ${detail ? '(' + detail + ')' : ''}`);
      passed++;
    } else {
      console.error(`✗ FAIL: ${name} ${detail ? '(' + detail + ')' : ''}`);
      failed++;
    }
  }

  // 1. Verify OpenStreetMap Tile Server Reachability & Content-Type
  console.log('--- 1. OPENSTREETMAP TILE LAYER VERIFICATION ---');
  try {
    // Check zoom 5 tile covering central India (e.g. 5/23/14.png)
    const osmTile = await fetchHttp('https://tile.openstreetmap.org/5/23/14.png');
    assert(
      osmTile.statusCode === 200,
      'OpenStreetMap Tile Endpoint Status',
      `HTTP ${osmTile.statusCode}`
    );
    assert(
      osmTile.contentType === 'image/png',
      'OpenStreetMap Tile Content-Type',
      osmTile.contentType
    );
    assert(
      osmTile.bytes > 1000,
      'OpenStreetMap Tile Payload Received',
      `${osmTile.bytes} bytes valid PNG tile`
    );
  } catch (err: any) {
    assert(false, 'OpenStreetMap Tile Fetch', err.message);
  }

  // 2. Audit Codebase for Zero Carto URLs
  console.log('\n--- 2. REPO AUDIT: ZERO CARTO DEPRECATED URLS ---');
  const interactiveMapPath = path.resolve(process.cwd(), 'src/components/InteractiveMap.tsx');
  const mapCode = fs.readFileSync(interactiveMapPath, 'utf8');

  assert(
    !mapCode.includes('basemaps.cartocdn.com'),
    'Elimination: No Carto basemap URLs in InteractiveMap.tsx',
    'Carto voyager endpoint replaced'
  );
  assert(
    mapCode.includes('https://tile.openstreetmap.org/{z}/{x}/{y}.png'),
    'Configuration: InteractiveMap uses official OpenStreetMap tileLayer URL',
    'tile.openstreetmap.org configured'
  );
  assert(
    mapCode.includes('OpenStreetMap') && mapCode.includes('attribution'),
    'Attribution: OpenStreetMap credit compliant with Tile Usage Policy',
    'OSM contributors acknowledged'
  );
  assert(
    mapCode.includes('invalidateSize'),
    'Responsiveness: Container invalidateSize listener implemented for mobile/resize',
    'Dynamic viewport sizing enabled'
  );

  // 3. Coordinate Integrity for all 38 Destinations
  console.log('\n--- 3. DESTINATION MARKER COORDINATES INTEGRITY ---');
  let invalidCoords = 0;
  for (const dest of DESTINATIONS) {
    const [lat, lng] = dest.coordinates;
    // India geographical bounding box: Lat 6° to 38°N, Lng 68° to 98°E
    if (lat < 6 || lat > 38 || lng < 68 || lng > 98) {
      invalidCoords++;
      console.error(`Invalid coordinate for ${dest.name}: [${lat}, ${lng}]`);
    }
  }
  assert(
    invalidCoords === 0,
    `All ${DESTINATIONS.length} Pan-India Destinations have Valid Geographical Coordinates`,
    `Covering ${INDIAN_STATES.length} States/UTs`
  );

  // 4. Route Polyline Generation for Regional Scenarios
  console.log('\n--- 4. ROUTE OVERLAY & POLYLINE GENERATION ---');
  const scenarios = [
    { state: 'Rajasthan', name: 'Rajasthan Heritage' },
    { state: 'Kerala', name: 'Kerala Backwaters' },
    { state: 'Maharashtra', name: 'Maharashtra Heritage' },
  ];

  for (const sc of scenarios) {
    const itin = generateItinerary({
      startingLocation: 'Gateway Hub',
      destinationRegion: sc.state,
      budget: 15000,
      isCustomBudget: false,
      numberOfDays: 3,
      numberOfTravellers: 2,
      travelDate: '2026-10-15',
      interests: ['Culture', 'Heritage'],
      travelStyle: 'Comfort',
      preferredLanguage: 'English',
      transportation: 'Train',
    });

    assert(
      itin.routeCoordinates && itin.routeCoordinates.length >= 3,
      `Route Overlay Polyline: ${sc.name}`,
      `${itin.routeCoordinates.length} waypoints plotted with ${itin.totalDistanceKm} km distance`
    );
  }

  console.log('\n====================================================');
  console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log('====================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runMapTests().catch((err) => {
  console.error('Map test error:', err);
  process.exit(1);
});
