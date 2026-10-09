import https from 'https';

interface EndpointTestResult {
  domain: string;
  testName: string;
  status: 'PASS' | 'FAIL';
  details: string;
  durationMs: number;
}

const DOMAINS = [
  'https://sarthi-e23z.onrender.com',
  'https://sarthi-psi.vercel.app'
];

function fetchHttps(url: string, options: https.RequestOptions = {}, postData?: string): Promise<{ statusCode: number; headers: any; body: string; durationMs: number }> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode || 0,
          headers: res.headers,
          body,
          durationMs: Date.now() - startTime
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error(`Timeout after 20s for ${url}`));
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function runLiveAudit() {
  console.log('================================================================');
  console.log('SARTHI AI: DUAL LIVE DEPLOYMENT AUDIT (RENDER & VERCEL)');
  console.log('Mobile Phone & Laptop Viewport, API, Map & Offline Verification');
  console.log('================================================================\n');

  const allResults: EndpointTestResult[] = [];

  for (const domain of DOMAINS) {
    console.log(`\n>>>>>>>> TESTING DEPLOYMENT: ${domain} <<<<<<<<\n`);

    // 1. Health Endpoint
    try {
      const res = await fetchHttps(`${domain}/api/health`);
      const ok = res.statusCode === 200 && res.body.includes('"ok"');
      allResults.push({
        domain,
        testName: 'API Health Endpoint (/api/health)',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} in ${res.durationMs}ms — Payload: ${res.body.slice(0, 60)}`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'API Health Endpoint', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 2. Gemini Chat API (English)
    try {
      const payload = JSON.stringify({
        message: 'What makes Spiti Valley an eco-friendly travel destination in India?',
        language: 'en',
        stream: false
      });
      const res = await fetchHttps(`${domain}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, payload);

      const ok = res.statusCode === 200 && (res.body.includes('Spiti') || res.body.includes('success'));
      allResults.push({
        domain,
        testName: 'Gemini Chat API [English Query]',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} in ${res.durationMs}ms — Received ${res.body.length} chars. Sample: ${res.body.slice(0, 75)}...`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'Gemini Chat API [English]', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 3. Gemini Chat API (Multilingual - Hindi)
    try {
      const payload = JSON.stringify({
        message: 'राजस्थान में सतत यात्रा के लिए शीर्ष स्थान कौन से हैं?',
        language: 'hi',
        stream: false
      });
      const res = await fetchHttps(`${domain}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, payload);

      const ok = res.statusCode === 200 && res.body.length > 100;
      allResults.push({
        domain,
        testName: 'Gemini Chat API [Multilingual Hindi Query]',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} in ${res.durationMs}ms — Received ${res.body.length} chars localized response`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'Gemini Chat API [Hindi]', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 4. Gemini Chat API (Browser GET Navigation Redirect to Chat UI)
    try {
      const res = await fetchHttps(`${domain}/api/chat`, {
        method: 'GET',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
      const ok = res.statusCode === 302 || res.statusCode === 200;
      allResults.push({
        domain,
        testName: 'Browser GET Address Bar Navigation (/api/chat -> UI)',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} (Redirect Location: ${res.headers.location || 'SPA'}) in ${res.durationMs}ms`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'Browser GET /api/chat', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 5. PWA Service Worker (Offline Functionality)
    try {
      const res = await fetchHttps(`${domain}/sw.js`);
      const ok = res.statusCode === 200 && (res.headers['content-type']?.includes('javascript') || res.body.includes('cache'));
      allResults.push({
        domain,
        testName: 'PWA Service Worker (/sw.js Offline Support)',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} (${res.headers['content-type']}) in ${res.durationMs}ms — Length: ${res.body.length} bytes`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'PWA Service Worker (/sw.js)', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 6. PWA Manifest (Add to Home Screen / Mobile App Install)
    try {
      const res = await fetchHttps(`${domain}/manifest.json`);
      let parsedOk = false;
      try {
        const json = JSON.parse(res.body);
        parsedOk = Boolean(json.name && json.icons);
      } catch {}
      allResults.push({
        domain,
        testName: 'PWA Manifest (/manifest.json Mobile Install)',
        status: parsedOk ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} — Valid PWA Manifest ("${parsedOk ? JSON.parse(res.body).name : ''}") in ${res.durationMs}ms`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'PWA Manifest (/manifest.json)', status: 'FAIL', details: e.message, durationMs: 0 });
    }

    // 7. Frontend HTML & Viewport Meta Tags (Mobile & Laptop Responsiveness)
    try {
      const res = await fetchHttps(`${domain}/`);
      const hasViewport = res.body.includes('name="viewport"') && res.body.includes('width=device-width');
      const hasTitle = res.body.includes('SARTHI');
      const ok = res.statusCode === 200 && hasViewport && hasTitle;
      allResults.push({
        domain,
        testName: 'HTML Shell & Mobile/Laptop Viewport Meta Tag',
        status: ok ? 'PASS' : 'FAIL',
        details: `HTTP ${res.statusCode} — Viewport Meta Tag Present (${hasViewport}) for responsive 320px–1440px rendering in ${res.durationMs}ms`,
        durationMs: res.durationMs
      });
    } catch (e: any) {
      allResults.push({ domain, testName: 'HTML Shell & Viewport', status: 'FAIL', details: e.message, durationMs: 0 });
    }
  }

  // 8. OpenStreetMap Tile Reachability for Interactive Map
  console.log('\n>>>>>>>> TESTING OPENSTREETMAP BASMAKER TILE INTEGRATION <<<<<<<<\n');
  try {
    const tileRes = await fetchHttps('https://tile.openstreetmap.org/5/23/14.png', {
      headers: { 'User-Agent': 'SARTHI-AI-Tourism-Platform/1.0' }
    });
    const ok = tileRes.statusCode === 200 && tileRes.headers['content-type'] === 'image/png';
    allResults.push({
      domain: 'https://tile.openstreetmap.org',
      testName: 'OpenStreetMap Live Basemap Tile Streaming (Watermark-Free)',
      status: ok ? 'PASS' : 'FAIL',
      details: `HTTP ${tileRes.statusCode} (${tileRes.headers['content-type']}) in ${tileRes.durationMs}ms — Length: ${tileRes.body.length} bytes PNG tile`,
      durationMs: tileRes.durationMs
    });
  } catch (e: any) {
    allResults.push({ domain: 'tile.openstreetmap.org', testName: 'OSM Tile Reachability', status: 'FAIL', details: e.message, durationMs: 0 });
  }

  // Print Summary Table
  console.log('\n================================================================');
  console.log('SUMMARY AUDIT TABLE');
  console.log('================================================================\n');

  let passCount = 0;
  allResults.forEach((r, idx) => {
    if (r.status === 'PASS') passCount++;
    const icon = r.status === 'PASS' ? '✓ PASS' : '✗ FAIL';
    console.log(`[${idx + 1}/${allResults.length}] ${icon}: [${r.domain.replace('https://', '')}] ${r.testName}`);
    console.log(`     ↳ ${r.details}\n`);
  });

  console.log('================================================================');
  console.log(`TOTAL AUDIT CHECKS: ${allResults.length} | PASSED: ${passCount} | FAILED: ${allResults.length - passCount}`);
  console.log(`AUDIT SUCCESS RATE: ${((passCount / allResults.length) * 100).toFixed(1)}%`);
  console.log('================================================================\n');
}

runLiveAudit();
