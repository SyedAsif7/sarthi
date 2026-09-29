# SARTHI — Your Intelligent Travel Companion for Jharkhand 🌿
**Smart India Hackathon (SIH) 2026 Prototype**

> **Problem Statement ID:** 26204  
> **Theme:** Travel & Tourism  
> **Category:** Software  
> **Developed by:** Team Vertex (SSIEMS)

---

## 🎯 Executive Summary & Value Proposition

Tourists visiting Jharkhand historically had to navigate disjointed platforms for destination discovery, route mapping, local homestays, verified forest guides, and tribal cultural activities. At the same time, indigenous artisans, guides, and homestay hosts lacked digital discoverability.

**SARTHI** resolves this with an integrated, AI-driven tourism ecosystem:
$$\text{Tourism Data} + \text{User Preferences} + \text{AI Personalization} + \text{Interactive Maps} + \text{Local Communities} = \text{Personalized Tourism Ecosystem}$$

*From "I want to visit Jharkhand" to a complete personalized journey in one platform.*

---

## 🚀 Live Demo & Quick Launch

The application is running locally on the development server:
- **Local URL:** [http://localhost:5173/](http://localhost:5173/)
- **Admin / Govt Portal:** [http://localhost:5173/#/admin](http://localhost:5173/#/admin)

### ⚡ 2–3 Minute SIH Presentation Flow

Click the **"Demo Walkthrough"** button in the header or follow this exact presentation script:
1. **Home Page:** Show the hero section ("Discover Jharkhand Like Never Before"), quick metrics (14+ waterfalls, 32 tribes, 840+ hosts), and featured destinations.
2. **AI Trip Planner:** Click **"Plan My Trip"** or **"Auto-Run Preset"**.
   - Input: Budget `₹10,000`, Days: `3`, Travellers: `2`, Interests: `Nature + Culture`.
   - Click **"✨ Generate My AI Trip"**.
   - Observe the multi-stage loading animation (*"Sarthi is creating your perfect journey..."*).
3. **Itinerary & Budget Breakdown:**
   - Total Budget: `₹10,000` | Estimated Spend: `₹9,200` | Remaining: `₹800`.
   - Inspect Day 1 (Ranchi & Waterfalls), Day 2 (Netarhat Pine Mist), Day 3 (Patratu Valley).
   - Itemized daily spend: Food, Transport, Stay, Activities.
4. **Interactive Route Map:** Click **"View Route"** to open Leaflet OpenStreetMap with polyline route nodes, distance, and travel time.
5. **Sarthi AI Assistant:** Ask *"Which waterfalls should I visit?"* or *"Plan a 3-day trip under ₹10,000"*.
6. **Local Marketplace:** Showcase verified guides (*Amit Kumar, ₹800/day*), homestays (*Netarhat Eco Homestay*), and GI-tagged *Dhokra brass* & *Sohrai paintings*.
7. **Government Analytics Dashboard (`/admin`):** Conclude on the administrative dashboard with real-time Recharts visualizations showing tourist footfall, economic payouts directly to tribal communities, and eco-conservation metrics.

---

## 🏛️ Platform Architecture

- **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide React icons
- **Maps:** Leaflet & OpenStreetMap with custom SVG markers and dynamic polyline route tracking
- **Analytics:** Recharts data visualizations (Area, Bar, Donut charts)
- **AI Engine:**
  - **Hybrid Dual-Engine Architecture:**
    - Checks for `VITE_GEMINI_API_KEY` in environment variables.
    - If configured, routes queries through Google Gemini API.
    - If offline/unconfigured, seamlessly utilizes Sarthi’s local intelligent recommendation engine covering destinations, tribal foods, festivals, and emergency rules.
- **Design Philosophy:** Inspired by Jharkhand’s lush Sal forests (`#14532d`), Sohrai earth pigments (`#d97706`), clear reservoir turquoise (`#0d9488`), and cream backgrounds (`#faf8f4`).

---

## 📁 Project Structure

```
Sarti/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive brand navbar with SIH badge
│   │   ├── Footer.tsx             # SIH credentials & team credits
│   │   ├── InteractiveMap.tsx     # Leaflet map with destination popups & route trail
│   │   ├── DestinationModal.tsx   # Detailed modal with timings, food, safety
│   │   ├── MarketplaceModal.tsx   # Verified guide & homestay demo booking
│   │   └── QuickDemoModal.tsx     # 1-Click SIH jury presentation guide
│   ├── pages/
│   │   ├── HomePage.tsx           # Hero, featured destinations, Heart of Jharkhand
│   │   ├── TripPlannerPage.tsx    # AI trip planner form & dynamic itinerary
│   │   ├── ChatAssistantPage.tsx  # ChatGPT-style Sarthi AI tourism assistant
│   │   ├── ExplorePage.tsx        # Searchable destination directory with multi-filters
│   │   ├── MarketplacePage.tsx    # Verified guides, homestays, handicrafts
│   │   ├── CulturalCalendarPage.tsx# Festivals (Sarhul, Karma, Tusu, Sohrai, Shravani)
│   │   ├── SafetyPage.tsx         # Helplines (112, 108, 1363), hospitals, forest rules
│   │   ├── ProfilePage.tsx        # Tourist profile, saved trips, wishlist
│   │   └── AdminDashboardPage.tsx # Govt analytics (/admin) with Recharts
│   ├── data/
│   │   ├── destinations.ts        # Seeded Jharkhand destination dataset
│   │   ├── marketplace.ts         # Verified guides, homestays, handicrafts
│   │   ├── festivals.ts           # Cultural calendar dataset
│   │   ├── safetyData.ts          # Helplines, hospitals, trail protocols
│   │   └── adminAnalytics.ts      # SIH administrative sample data
│   ├── services/
│   │   ├── itineraryEngine.ts     # Local heuristic itinerary generator
│   │   └── chatService.ts         # Dual-mode AI assistant (Gemini + Local)
│   ├── types/
│   │   └── index.ts               # Core TypeScript definitions
│   ├── utils/
│   │   └── toast.ts               # Confetti celebration & formatting
│   ├── App.tsx                    # Master state coordinator & tab router
│   ├── index.css                  # Tailwind styles & theme variables
│   └── main.tsx                   # React root entry
├── index.html                     # HTML shell with Google fonts & Leaflet
├── tailwind.config.js             # Forest, gold, turquoise, coral palette
└── package.json                   # Dependencies
```

---

## 👥 Team Vertex — SSIEMS
- **Problem Statement ID:** 26204
- **Theme:** Travel & Tourism
- **SIH 2026**
