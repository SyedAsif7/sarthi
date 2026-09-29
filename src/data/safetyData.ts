import { SafetyContact, HospitalInfo } from '../types';

export const SAFETY_CONTACTS: SafetyContact[] = [
  {
    title: 'National Emergency Response System',
    number: '112',
    category: 'Emergency',
    description: 'Unified 24x7 all-in-one emergency number for Police, Fire, and Medical assistance.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Jharkhand Tourist Police Helpline',
    number: '1363 / +91 651 2400493',
    category: 'Helpline',
    description: 'Dedicated tourism facilitation, route guidance, and dispute resolution for visitors.',
    iconName: 'PhoneCall'
  },
  {
    title: 'Medical Ambulance Support',
    number: '108',
    category: 'Medical',
    description: 'Free statewide government emergency patient transport ambulance service.',
    iconName: 'Ambulance'
  },
  {
    title: 'Women Safety & Support Helpline',
    number: '1091 / +91 97714 32100',
    category: 'Emergency',
    description: 'Round-the-clock rapid response unit for women travelers and distress support.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Jharkhand Forest & Wildlife Rescue',
    number: '+91 651 2480355',
    category: 'Forest',
    description: 'Wildlife distress, sanctuary permissions, and forest ranger control room.',
    iconName: 'Trees'
  },
  {
    title: 'State Disaster Management Authority (JSDMA)',
    number: '1070 / +91 651 2446923',
    category: 'Emergency',
    description: 'Flash flood alerts, rockslide advisories, and weather crisis coordination.',
    iconName: 'AlertTriangle'
  }
];

export const HOSPITALS: HospitalInfo[] = [
  {
    name: 'Rajendra Institute of Medical Sciences (RIMS)',
    city: 'Ranchi',
    district: 'Ranchi',
    phone: '+91 651 2541533',
    is24x7Emergency: true,
    address: 'Bariatu, Ranchi, Jharkhand 834009 (Premier Level 1 Trauma Care)'
  },
  {
    name: 'Tata Main Hospital (TMH)',
    city: 'Jamshedpur',
    district: 'East Singhbhum',
    phone: '+91 657 2224555',
    is24x7Emergency: true,
    address: 'C Road, Northern Town, Bistupur, Jamshedpur 831001'
  },
  {
    name: 'AIIMS Deoghar (Super-Speciality)',
    city: 'Deoghar',
    district: 'Deoghar',
    phone: '+91 6432 298644',
    is24x7Emergency: true,
    address: 'NH 114A, Kunda, Jasidih, Deoghar 814142'
  },
  {
    name: 'Sadar Hospital Latehar (Netarhat & Betla Access)',
    city: 'Latehar',
    district: 'Latehar',
    phone: '+91 6565 242202',
    is24x7Emergency: true,
    address: 'Main Road, Latehar, Jharkhand 829206'
  },
  {
    name: 'Medica Superspecialty Hospital',
    city: 'Ranchi',
    district: 'Ranchi',
    phone: '+91 651 6606000',
    is24x7Emergency: true,
    address: 'Piska More, Ratu Road, Ranchi 834005'
  }
];

export const FOREST_AND_TRAIL_GUIDELINES = [
  {
    category: 'Waterfall Safety Rules',
    rules: [
      'Never step beyond protective metal railings or venture into plunge pools; sudden underwater whirlpools exist at Dassam and Hundru.',
      'Rock surfaces surrounding cascades are coated with invisible slick green algae; wear rubber-lugged trekking shoes.',
      'During monsoon (July–September), water levels can surge within 10 minutes due to upstream dam releases. Heed siren alarms.',
      'Consumption of alcohol at water bodies is strictly prohibited by Jharkhand Tourism regulations.'
    ]
  },
  {
    category: 'Betla Sanctuary & Forest Protocol',
    rules: [
      'Hiring an authorized Forest Department eco-guide is mandatory for all private and gypsy safaris.',
      'Maintain absolute silence. Do not blow vehicle horns, play loud music, or feed wild animals.',
      'In the event of elephant herd encounters, maintain a minimum 50-meter distance and never switch off vehicle engines or block escape routes.',
      'Smoking, lighting campfires, and plastic littering are punishable offenses under the Wildlife Protection Act.'
    ]
  },
  {
    category: 'Ghat Driving & Trekking Advisories',
    rules: [
      'Ghat sections like Patratu Valley and Netarhat Pass feature sharp blind turns. Keep headlights on in foggy conditions and stay within 30 km/h.',
      'In dense monsoon jungle hikes (Hirni / Saranda), apply salt, mustard oil, or insect repellent to ankles to prevent leech attachments.',
      'Always start return journeys from secluded forest viewpoints at least 45 minutes prior to sunset.'
    ]
  }
];

export const DEMO_WEATHER_ALERTS = [
  {
    region: 'Chotanagpur Plateau (Ranchi, Khunti, Ramgarh)',
    status: 'Pleasant & Favorable',
    tempRange: '18°C – 28°C',
    alertLevel: 'Green (Normal)',
    note: 'Clear morning skies with gentle western breeze. Perfect conditions for outdoor waterfall sightseeing.'
  },
  {
    region: 'Netarhat & Latehar Highlands',
    status: 'Crisp Mountain Weather',
    tempRange: '12°C – 22°C',
    alertLevel: 'Green (Normal)',
    note: 'Dense dawn fog between 05:00 AM and 07:00 AM at Koel Viewpoint. Light woolens advised for sunrise watchers.'
  },
  {
    region: 'Santhal Parganas (Deoghar & Dumka)',
    status: 'Mild Sun & Warm Afternoon',
    tempRange: '20°C – 31°C',
    alertLevel: 'Green (Normal)',
    note: 'High pilgrim footfall near Baidyanath Mandir. Hydration recommended during noon hours.'
  }
];
