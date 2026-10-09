# SARTHI AI — Pan-India Intelligent Sustainable & Cultural Tourism Platform 🌿

> **Focus:** Sustainable, Cultural, and Indigenous Tourism  
> **Coverage:** 28 Indian States & 8 Union Territories  
> **Key Innovation:** Explainable SARTHI Impact Score (0–100) & Low-Carbon AI Itineraries  

---

## 🎯 Executive Summary & Value Proposition

Travelers exploring India often struggle with fragmented platforms for destination discovery, route planning, certified village homestays, and authentic indigenous artisans. At the same time, rural communities, forest guides, and GI craftspeople face barriers to digital discoverability.

**SARTHI AI** resolves this with an integrated, intelligent, and regenerative tourism platform:

$$\text{28 States Data} + \text{Low-Carbon Corridors} + \text{Verified Homestays} + \text{SARTHI Impact Score} = \text{Regenerative Indian Tourism}$$

*From "I want to explore India consciously" to a complete personalized journey with verified community impact.*

---

## 🚀 Live Demo & Quick Launch

The application is running locally on the development server:
- **Local URL:** [http://localhost:5173/](http://localhost:5173/)
- **Admin / Govt Portal:** [http://localhost:5173/#/admin](http://localhost:5173/#/admin)

### ⚡ Feature Walkthrough Flow

Click the **"Demo Walkthrough"** button in the header or explore the platform:
1. **Home Page:** Split hero showcasing living heritage, national flagship spots (Spiti, Munroe Island, Mawlynnong, Khuri, Netarhat), and the SARTHI Impact Engine.
2. **Interactive Map:** Nationwide Leaflet map with State/UT filter, dynamic bounds fitting, and green impact markers.
3. **AI Trip Planner:**
   - Select destination State/UT, starting gateway, budget, and transportation mode.
   - Synthesizes day-by-day routes, verified village homestays, and calculates the **Explainable SARTHI Impact Score**.
   - 1-Click WhatsApp sharing and printable PDF / TXT exports.
4. **Destination Directory & Audio Guide:**
   - Explore 36 authenticated destinations with multi-criteria filters (State, Zone, Impact Tier, Budget).
   - Modal with crowd status, live climate, and dual-language (English / Hindi) TTS Audio Tour Guides.
5. **SARTHI AI Assistant:** Dual-engine intelligent companion (Gemini API + smart local fallback) answering queries on Spiti, Kerala Responsible Tourism, Meghalaya root bridges, Dhokra craft, and sustainability scores.
6. **Local Marketplace:** Direct 0% commission marketplace connecting travelers to certified local guides, organic homestays, and GI handicrafts.
7. **Government Analytics Dashboard (`/admin`):** Statewide and nationwide administrative dashboard with real-time Recharts visualizations tracking tourist footfall, economic payouts directly to tribal communities, and eco-conservation metrics.

---

## 🏛️ Platform Architecture

- **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide React icons
- **Maps:** Leaflet & OpenStreetMap with custom SVG markers and dynamic polyline route tracking
- **Analytics:** Recharts data visualizations (Area, Bar, Donut charts)
- **Sustainability Engine:** Explainable SARTHI Impact Score evaluating Carbon Efficiency (30), Community Economic Retention (35), and Conservation Sensitivity (35)
- **AI Engine:**
  - **Hybrid Dual-Engine Architecture:**
    - Checks for `VITE_GEMINI_API_KEY` in environment variables.
    - If configured, routes queries through Google Gemini API.
    - If offline/unconfigured, seamlessly utilizes SARTHI’s local intelligent recommendation engine covering nationwide destinations, tribal foods, festivals, and emergency rules.
- **Design Philosophy:** Organic forest greens (`#2D5224`), warm amber/gold (`#E5A93C`), terracotta (`#C85A32`), and clean voyage map tiles.

---

## 📁 Project Structure

```
Sarti/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive brand navbar with state & language pills
│   │   ├── Footer.tsx             # Sustainable tourism credentials & links
│   │   ├── InteractiveMap.tsx     # Leaflet map with pan-India center & state filter
│   │   ├── DestinationModal.tsx   # Detailed modal with SARTHI Impact Score card & audio guide
│   │   ├── MarketplaceModal.tsx   # Verified guide & homestay direct booking
│   │   └── QuickDemoModal.tsx     # 1-Click platform walkthrough guide
│   ├── pages/
│   │   ├── HomePage.tsx           # Hero, pan-India showcase, living cultural crafts
│   │   ├── TripPlannerPage.tsx    # State-aware AI trip planner form & dynamic itinerary
│   │   ├── ChatAssistantPage.tsx  # SARTHI AI tourism assistant
│   │   ├── ExplorePage.tsx        # Searchable destination directory with state & tier filters
│   │   ├── MarketplacePage.tsx    # Verified guides, homestays, handicrafts
│   │   ├── CulturalCalendarPage.tsx# Cultural calendar dataset
│   │   ├── SafetyPage.tsx         # Helplines (112, 108, 1363), hospitals, forest rules
│   │   ├── ProfilePage.tsx        # Tourist profile, saved trips, wishlist
│   │   └── AdminDashboardPage.tsx # Govt analytics (/admin) with Recharts
│   ├── data/
│   │   ├── destinations.ts        # 36 authenticated Indian destinations across 15+ States/UTs
│   │   ├── marketplace.ts         # Verified guides, homestays, handicrafts
│   │   ├── festivals.ts           # Cultural calendar dataset
│   │   ├── safetyData.ts          # Helplines, hospitals, trail protocols
│   │   └── adminAnalytics.ts      # Administrative sample metrics
│   ├── services/
│   │   ├── itineraryEngine.ts     # Dynamic state routing & budget engine
│   │   └── chatService.ts         # Dual-mode AI assistant (Gemini + Local)
│   ├── types/
│   │   └── index.ts               # Core TypeScript definitions (SarthiImpactScore, Destination)
│   ├── utils/
│   │   ├── impactScore.ts         # Explainable 3-pillar impact calculation
│   │   └── toast.ts               # Confetti celebration & formatting
│   ├── App.tsx                    # Master state coordinator & tab router
│   ├── index.css                  # Tailwind styles & theme variables
│   └── main.tsx                   # React root entry
├── index.html                     # HTML shell with Google fonts & Leaflet
├── tailwind.config.js             # Forest, gold, turquoise, coral palette
└── package.json                   # Dependencies
```
