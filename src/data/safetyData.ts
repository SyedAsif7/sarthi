import { SafetyContact, HospitalInfo } from '../types';

export const SAFETY_CONTACTS: SafetyContact[] = [
  {
    title: 'National Emergency Response System',
    number: '112',
    category: 'Emergency',
    description: 'Unified 24x7 all-in-one national emergency number for Police, Fire, and Medical assistance.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'National Tourist Helpline (Incredible India)',
    number: '1363 / 1800-111-363',
    category: 'Helpline',
    description: 'Ministry of Tourism 24x7 multi-lingual tourist assistance, travel guidance, and dispute resolution.',
    iconName: 'PhoneCall'
  },
  {
    title: 'Medical Ambulance Emergency Support',
    number: '108',
    category: 'Medical',
    description: 'Toll-free nationwide government emergency patient transport and life-support ambulance service.',
    iconName: 'Ambulance'
  },
  {
    title: 'National Women Helpline & Support',
    number: '1091 / 181',
    category: 'Emergency',
    description: 'Round-the-clock rapid response unit for women travelers and distress support across India.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Indian Railways Security Helpline (RailMadad)',
    number: '139',
    category: 'Helpline',
    description: '24x7 integrated Indian Railways security, medical emergencies, transit tracking, and onboard assistance.',
    iconName: 'Train'
  },
  {
    title: 'National Disaster Response Force (NDRF)',
    number: '1078 / 1070',
    category: 'Emergency',
    description: 'Flash flood alerts, landslide advisories, and national weather crisis search-and-rescue coordination.',
    iconName: 'AlertTriangle'
  }
];

export const HOSPITALS: HospitalInfo[] = [
  {
    name: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    city: 'New Delhi',
    district: 'National Capital Region',
    phone: '+91 11 26588500',
    is24x7Emergency: true,
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029 (Apex Level-1 Trauma Care)'
  },
  {
    name: 'AIIMS Rishikesh (High-Altitude Trauma & Emergency)',
    city: 'Rishikesh',
    district: 'Dehradun / Uttarakhand',
    phone: '+91 135 2462929',
    is24x7Emergency: true,
    address: 'Virbhadra Road, Rishikesh, Uttarakhand 249203'
  },
  {
    name: 'Christian Medical College & Hospital (CMC)',
    city: 'Vellore',
    district: 'Tamil Nadu',
    phone: '+91 416 2281000',
    is24x7Emergency: true,
    address: 'Ida Scudder Road, Vellore, Tamil Nadu 632004'
  },
  {
    name: 'Rajendra Institute of Medical Sciences (RIMS)',
    city: 'Ranchi',
    district: 'Ranchi / Jharkhand',
    phone: '+91 651 2541533',
    is24x7Emergency: true,
    address: 'Bariatu, Ranchi, Jharkhand 834009 (Premier Level 1 Regional Trauma Care)'
  },
  {
    name: 'Postgraduate Institute of Medical Education & Research (PGIMER)',
    city: 'Chandigarh',
    district: 'Chandigarh / Punjab-Haryana',
    phone: '+91 172 2747585',
    is24x7Emergency: true,
    address: 'Sector 12, Chandigarh 160012 (Premier Multi-Speciality Emergency)'
  }
];

export const FOREST_AND_TRAIL_GUIDELINES = [
  {
    category: 'Himalayan High-Altitude Acclimatization & Trails',
    rules: [
      'Ascend gradually beyond 9,000 ft (Spiti, Ladakh, Garhwal); schedule at least 48 hours for physiological acclimatization.',
      'Stay hydrated with 3–4 liters of water daily; carry Diamox only after medical consultation.',
      'Leave No Trace: Pack out all non-biodegradable waste. High-altitude ecosystems decompose plastic at near-zero rates.',
      'Wear layered thermal garments and windcheaters; mountain weather can fluctuate by 15°C within two hours.'
    ]
  },
  {
    category: 'Waterfalls, Rivers & Backwater Safety Rules',
    rules: [
      'Never step beyond protective railings or venture into plunge pools with submerged whirlpools (e.g. Dassam, Hundru, Athirappilly).',
      'Rock surfaces around waterfalls and mangrove jetties carry slick algae coats; use rubber-lugged trekking footwear.',
      'Life jackets are strictly mandatory on all wooden rowboats, shikaras, and backwater canoe excursions.',
      'Monsoon currents (July–September) can surge within 10 minutes due to upstream dam gates; heed siren warnings.'
    ]
  },
  {
    category: 'National Park & Wildlife Safari Protocol',
    rules: [
      'Hiring an authorized Forest Department eco-guide is mandatory across national parks (Kaziranga, Jim Corbett, Betla, Periyar).',
      'Maintain absolute silence. Honking horns, playing amplified music, or teasing wildlife carries severe penalties under the Wildlife Protection Act.',
      'Maintain a minimum 50-meter safety distance during wild elephant and tiger sightings; never block animal migration corridors.',
      'Smoking and lighting open campfires are strictly prohibited inside core and buffer zones.'
    ]
  },
  {
    category: 'Mountain Ghat Driving & Remote Trail Advisories',
    rules: [
      'Ghat sections (Western Ghats, Rohtang, Patratu) feature sharp hairpins; keep low-beam headlights on in fog and maintain speed under 35 km/h.',
      'During monsoon rainforest hikes (Meghalaya, Western Ghats), apply salt or citronella repellent to prevent leeches.',
      'Always conclude secluded wilderness walks at least 45 minutes prior to official sunset.'
    ]
  }
];

export const DEMO_WEATHER_ALERTS = [
  {
    region: 'Trans-Himalayan Plateau (Spiti & Ladakh)',
    status: 'Crisp Alpine Clear',
    tempRange: '6°C – 16°C',
    alertLevel: 'Green (Optimal)',
    note: 'Clear starry night skies and high UV index. Polarized sunglasses and sun protection essential.'
  },
  {
    region: 'Western Ghats & Kerala Backwaters (Kollam, Wayanad)',
    status: 'Pleasant Tropical Breeze',
    tempRange: '23°C – 31°C',
    alertLevel: 'Green (Normal)',
    note: 'Calm waters across Vembanad and Ashtamudi lakes. Perfect for solar canoe and kayaking trails.'
  },
  {
    region: 'Chotanagpur Plateau & Sal Forests (Ranchi, Netarhat)',
    status: 'Pleasant & Favorable',
    tempRange: '18°C – 28°C',
    alertLevel: 'Green (Normal)',
    note: 'Clear morning skies with gentle western breeze. Perfect conditions for outdoor waterfall sightseeing.'
  },
  {
    region: 'Thar Desert Fringe (Jaisalmer & Khuri Dunes)',
    status: 'Golden Sun & Cool Nights',
    tempRange: '14°C – 29°C',
    alertLevel: 'Green (Normal)',
    note: 'Moderate daytime warmth tapering to crisp starry nights. Ideal for eco-tent campouts and stargazing.'
  }
];
