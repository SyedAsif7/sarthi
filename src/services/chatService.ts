import { ChatMessage } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { MARKETPLACE_ITEMS } from '../data/marketplace';
import { FESTIVALS } from '../data/festivals';

// Check if Gemini API key exists in environment
const GEMINI_API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'sarthi',
    text: `Johar! 🙏 I am **Sarthi**, your AI travel companion for Jharkhand.\n\nI can help you craft customized itineraries, discover hidden cascading waterfalls, connect with verified tribal guides, or recommend authentic local food spots like hot Dhuska and Rugra curries.\n\nHow can I help plan your Jharkhand journey today?`,
    timestamp: 'Just now',
    suggestedActions: [
      { label: 'Plan a 3-day trip under ₹10,000', actionType: 'plan' },
      { label: 'Best waterfalls near Ranchi?', actionType: 'explore', payload: 'waterfalls' },
      { label: 'Where can I experience tribal culture?', actionType: 'marketplace', payload: 'culture' },
      { label: 'What should I visit during monsoon?', actionType: 'prompt', payload: 'What should I visit during monsoon?' },
    ]
  }
];

export async function askSarthiAI(
  userQuery: string,
  chatHistory: ChatMessage[] = []
): Promise<ChatMessage> {
  const queryLower = userQuery.toLowerCase().trim();

  // If Gemini API Key is provided, attempt to call Gemini API
  if (GEMINI_API_KEY) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `You are SARTHI, an intelligent AI travel companion for Jharkhand developed by Team Vertex for Smart India Hackathon 2026.
You are warm, knowledgeable, culturally respectful, and provide structured, actionable travel advice with budget estimates in INR (₹).
Ground your responses in authentic Jharkhand locations (Ranchi, Netarhat, Betla, Deoghar, Patratu, Dassam, Hundru, Jonha, Parasnath).
Mention local tribal foods (Dhuska, Chilka Roti, Rugra, Bamboo Shoot Karil) and culture (Sarhul, Sohrai, Karma, Dhokra art).
User Query: "${userQuery}"`
                  }
                ]
              }
            ]
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
          return {
            id: `msg-${Date.now()}`,
            sender: 'sarthi',
            text: generatedText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedActions: [
              { label: '✨ Open AI Trip Planner', actionType: 'plan' },
              { label: '🗺️ View on Map', actionType: 'map' },
              { label: '🛍️ Browse Marketplace', actionType: 'marketplace' }
            ]
          };
        }
      }
    } catch (err) {
      console.warn('Gemini API call failed, seamlessly falling back to local Sarthi engine:', err);
    }
  }

  // Realistic Smart Local Fallback Engine (Runs offline & instant for SIH presentation)
  await new Promise((resolve) => setTimeout(resolve, 600)); // Natural thinking latency

  // 1. "Plan a 3-day trip under ₹10,000" or budget queries
  if (queryLower.includes('3-day') || queryLower.includes('3 day') || queryLower.includes('10,000') || queryLower.includes('10000') || (queryLower.includes('plan') && queryLower.includes('trip'))) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 🌿 Curated 3-Day Jharkhand Journey under ₹10,000 (For 2 Travellers)

Here is a recommended budget itinerary maximizing nature, waterfalls, and local heritage:

* **Day 1: Ranchi Waterfall Circuit & Tribal Flavors**
  * Morning: **Dassam Falls** (44m cascade on Kanchi River)
  * Lunch: Traditional hot *Dhuska & Chana Sabzi* at Bundu roadside eatery (~₹160)
  * Afternoon: **Hundru Falls** (Subarnarekha canyon & 700 rock stairs)
  * Stay: Verified Dassam Tribal Village Homestay (~₹1,400/night)
  * *Day 1 Spend: ~₹2,900*

* **Day 2: Queen of Chotanagpur (Netarhat)**
  * Morning: Scenic drive through Lohardaga ghats to Netarhat (156 km)
  * Afternoon: Pine Forest walk & Upper Ghaghri Falls
  * Sunset: Iconic crimson sunset at **Magnolia Point**
  * Dinner: Local *Bamboo Shoot (Karil) curry* & Madua Roti
  * Stay: Netarhat Eco Pine Homestay (~₹1,500/night)
  * *Day 2 Spend: ~₹3,300*

* **Day 3: Serpentine Ghats & Reservoir Thrills (Patratu)**
  * Morning: Dawn sunrise at Koel Viewpoint, return towards Patratu
  * Midday: Drive through the famous 16-turn **Patratu Valley**
  * Afternoon: Boating & lake island stroll at Patratu Lake Resort
  * Evening: Return to Ranchi Junction / Birsa Munda Airport
  * *Day 3 Spend: ~₹2,800*

**Total Estimated Spend:** ₹9,000 | **Buffer Remaining:** ₹1,000`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '✨ Customize in Trip Planner', actionType: 'plan' },
        { label: '🗺️ View Route on Map', actionType: 'map' },
        { label: '🏡 View Netarhat Homestay', actionType: 'marketplace', payload: 'homestay' }
      ]
    };
  }

  // 2. "Best waterfalls near Ranchi?"
  if (queryLower.includes('waterfall') || queryLower.includes('falls') || queryLower.includes('fall')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 🌊 Top 4 Majestic Waterfalls Near Ranchi

Ranchi is rightfully hailed as the **"City of Waterfalls"**. Here are the must-visit cascades within 45 km:

1. **Dassam Falls (40 km)**:
   * River: Kanchi River | Height: 44 meters
   * Highlight: 10 distinct crystalline streams plunging over ancient granite.
   * Best Time: 09:00 AM – 12:00 PM for optimal photography lighting.

2. **Hundru Falls (45 km)**:
   * River: Subarnarekha River | Height: 98 meters (One of Jharkhand's tallest)
   * Highlight: Dramatic mist cloud created at the bottom of the gorge. Over 700 paved stairs down to the plunge pool.

3. **Jonha Falls / Gautamdhara (42 km)**:
   * River: Raru River | Height: 43 meters
   * Highlight: Ancient Buddhist shrine atop the cliff where Lord Buddha is believed to have stayed.

4. **Hirni Falls (68 km)**:
   * Location: Dense sal forests of West Singhbhum border. Pristine and undisturbed.

> **Safety Advisory:** Rocks near plunge pools are extremely slippery with invisible algae. Please stay behind state tourism railings.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '🗺️ See Waterfalls on Map', actionType: 'map' },
        { label: '🧑‍🌾 Hire Waterfall Guide Amit Kumar', actionType: 'marketplace', payload: 'guide' },
        { label: '✨ Generate Waterfall Tour', actionType: 'plan' }
      ]
    };
  }

  // 3. "Where can I experience tribal culture?"
  if (queryLower.includes('tribal') || queryLower.includes('culture') || queryLower.includes('tradition') || queryLower.includes('artisan')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 🏹 Authentic Tribal & Cultural Experiences in Jharkhand

Jharkhand is home to 32 indigenous tribal communities (including Santhal, Munda, Oraon, Ho, and Kharia). Here is how you can immerse respectfully:

* **Sacred Grove (Sarna) Walk (Khunti)**:
  Join village elders to understand *Sarnaism*—the ancient religion where nature and sacred Sal trees are worshipped as supreme deities.
* **Sohrai & Khobar Art Villages (Hazaribagh)**:
  Visit villages where tribal women paint intricate GI-tagged murals on mud walls using natural ochre and manganese soils.
* **4,000-Year-Old Dhokra Brass Casting (Khunti / Ranchi)**:
  Interact with master artisans using the ancient lost-wax bell metal casting technique.
* **State Tribal Research Institute & Museum (Morabadi, Ranchi)**:
  Exhibits life-size tribal dwellings, ceremonial musical instruments, and traditional hunting weapons.
* **Folk Festivals**:
  Experience *Sarhul* (Spring Sal blossom fest in April) and *Karma* (brotherhood harvest dance in September).`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '🛍️ Shop Dhokra & Sohrai Crafts', actionType: 'marketplace', payload: 'handicraft' },
        { label: '📅 View Cultural Calendar', actionType: 'marketplace', payload: 'calendar' },
        { label: '🏡 Book Khunti Tribal Homestay', actionType: 'marketplace', payload: 'homestay' }
      ]
    };
  }

  // 4. "Best places for a family trip?"
  if (queryLower.includes('family') || queryLower.includes('children') || queryLower.includes('parents')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 👨‍👩‍👧‍👦 Best Family-Friendly Itinerary in Jharkhand

For comfortable travel with children and elders, we recommend:

1. **Patratu Lake Resort & Valley**:
   * Smooth 40-minute expressway drive from Ranchi.
   * Speedboat rides, manicured gardens, children play zones, and safe floating restaurant dining.
2. **Betla National Park**:
   * Open jeep jungle safaris where kids can spot wild elephants, deer herds, and hornbills safely from gypsy vehicles.
3. **Deoghar & Trikut Ropeway**:
   * Scenic cable car ride over Trikuta Hills and spiritual blessings at Baba Baidyanath Jyotirlinga.
4. **Ranchi City Parks**:
   * Rock Garden overlooking Kanke Dam and Bhagwan Birsa Munda Zoological Biological Park.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '✨ Plan Family Trip', actionType: 'plan' },
        { label: '🗺️ Explore Patratu Valley', actionType: 'explore', payload: 'patratu-valley' }
      ]
    };
  }

  // 5. "What should I visit during monsoon?"
  if (queryLower.includes('monsoon') || queryLower.includes('rain') || queryLower.includes('july') || queryLower.includes('august')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 🌧️ Monsoon in Jharkhand (July – September): A Lush Green Wonderland

Monsoon transforms the Chotanagpur Plateau into vibrant emerald green carpet with roaring cascades:

* **Top Monsoon Sights**:
  1. **Dassam & Hundru Falls**: Waterfall volume reaches its thunderous maximum.
  2. **Patratu Valley**: The ghats are shrouded in floating monsoon clouds—resembling European alpine roads!
  3. **Lodh Falls (Latehar)**: Jharkhand's highest cascade (143m) produces deafening mist heard miles away.
  4. **Shravani Mela in Deoghar**: Saffron-clad holy pilgrims walking in rains with unwavering devotion.

* **Monsoon Cuisines to Try**:
  * Hot crispy **Dhuska** dipped in spicy Ghugni with ginger chai.
  * Wild **Rugra** (earthy forest mushrooms only found during monsoon rains).

⚠️ **Monsoon Travel Advisory**: Drive cautiously on winding ghat roads with headlights on; never swim in waterfall plunge pools during active rainfall.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '🛡️ View Monsoon Safety Tips', actionType: 'map', payload: 'safety' },
        { label: '✨ Generate Monsoon Trip', actionType: 'plan' }
      ]
    };
  }

  // 6. Food queries
  if (queryLower.includes('food') || queryLower.includes('eat') || queryLower.includes('dish') || queryLower.includes('dhuska')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'sarthi',
      text: `### 🍲 Traditional Jharkhand Gastronomy

Jharkhand's cuisine is rooted in earthy forest produce, indigenous millets, and minimal oil:

1. **Dhuska**: Deep-fried savory rice and chana dal pancake, crispy outside and spongy inside, served with spicy chickpea curry and boiled potato sabzi.
2. **Chilka Roti**: Soft paper-thin crepes made from newly harvested rice and split black gram.
3. **Rugra / Puttu**: Wild subterranean mushroom found near Sal tree roots in monsoon. Has a texture similar to tender mutton!
4. **Bamboo Shoot Karil**: Young tender bamboo shoots pickled or curried with mustard paste.
5. **Marua (Finger Millet) Roti**: Highly nutritious slow-roasted flatbread eaten with roasted garlic-tomato chokha.
6. **Deoghar Peda**: Famous caramelized mawa sweet slow-cooked over wood fire in Deoghar.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: '🧑‍🍳 Book Tribal Cooking Class', actionType: 'marketplace', payload: 'food' },
        { label: '✨ Add Food Trail to Trip', actionType: 'plan' }
      ]
    };
  }

  // Generic conversational response
  return {
    id: `msg-${Date.now()}`,
    sender: 'sarthi',
    text: `### 🌿 Sarthi Travel Advice for: "${userQuery}"

Jharkhand offers an extraordinary blend of untouched natural splendor, cascading waterfalls, wildlife reserves, and centuries-old tribal heritage.

**Quick Recommendations:**
* **Nature & Waterfalls**: Visit **Dassam Falls**, **Hundru Falls**, or **Jonha Falls** within 45 km of Ranchi.
* **Hill Station Retreat**: Spend 2 days in **Netarhat** for pine forests and Magnolia sunset.
* **Wildlife Adventure**: Head to **Betla National Park** in Latehar for elephant and gaur safaris.
* **Spiritual Peace**: Explore the sacred **Baba Baidyanath Jyotirlinga** in Deoghar or summit **Parasnath Hill**.

Would you like me to generate a complete custom day-by-day itinerary with budget breakdown for you?`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestedActions: [
      { label: '✨ Generate My AI Trip', actionType: 'plan' },
      { label: '🗺️ Open Interactive Map', actionType: 'map' },
      { label: '📍 Explore All Destinations', actionType: 'explore' }
    ]
  };
}
