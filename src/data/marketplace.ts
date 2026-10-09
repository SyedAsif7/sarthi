import { MarketplaceItem } from '../types';

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  // GUIDES
  {
    id: 'guide-amit-kumar',
    title: 'Amit Kumar',
    subtitle: 'Local Guide — Ranchi & Waterfall Circuit',
    category: 'guide',
    rating: 4.8,
    reviewsCount: 164,
    price: 800,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    location: 'Ranchi, Dassam & Hundru',
    verified: true,
    badge: 'Government Certified ✓',
    description: 'Certified tourism guide with 8+ years navigating the Chotanagpur plateau, secret waterfall trails, and Ranchi heritage circuits.',
    details: {
      languages: ['Hindi', 'English', 'Sadri'],
      experienceYears: 8,
      speciality: 'Waterfall Hikes, Photography Spots & Local History',
      duration: 'Full Day (8-9 hours)'
    },
    contactPhone: '+91 98351 XXXXX'
  },
  {
    id: 'guide-sunita-oraon',
    title: 'Sunita Oraon',
    subtitle: 'Indigenous Eco & Forest Guide — Netarhat',
    category: 'guide',
    rating: 4.9,
    reviewsCount: 198,
    price: 950,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    location: 'Netarhat & Mahuadanr',
    verified: true,
    badge: 'Women Guide of the Year ✓',
    description: 'Deep ancestral knowledge of Kurukh tribal traditions, medicinal forest plants, Koel viewpoints, and bird habitats in Netarhat.',
    details: {
      languages: ['Kurukh', 'Hindi', 'English'],
      experienceYears: 6,
      speciality: 'Tribal Ethnobotany, Sunrise/Sunset Trails & Stargazing',
      duration: 'Flexible Full Day'
    },
    contactPhone: '+91 94311 XXXXX'
  },
  {
    id: 'guide-rajesh-munda',
    title: 'Rajesh Munda',
    subtitle: 'Heritage & Village Historian — Khunti',
    category: 'guide',
    rating: 4.8,
    reviewsCount: 122,
    price: 750,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    location: 'Khunti, Ulihatu & Dassam',
    verified: true,
    badge: 'Birsa Munda Heritage Specialist ✓',
    description: 'Direct descendant of the Ulihatu resistance warriors, narrating vivid oral histories of Bhagwan Birsa Munda and tribal autonomy.',
    details: {
      languages: ['Mundari', 'Hindi'],
      experienceYears: 9,
      speciality: 'Freedom Movement History, Village Architecture & Sacred Groves',
      duration: 'Full Day'
    },
    contactPhone: '+91 97712 XXXXX'
  },
  {
    id: 'guide-deepak-soren',
    title: 'Deepak Soren',
    subtitle: 'Spiritual & Temple Guide — Deoghar',
    category: 'guide',
    rating: 4.9,
    reviewsCount: 230,
    price: 850,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    location: 'Deoghar & Basukinath',
    verified: true,
    badge: 'Veda & Temple Certified ✓',
    description: 'Authorized Panda & historical scholar guiding pilgrims seamlessly through Baidyanath rituals, Trikut ropeway, and Satsang Ashram.',
    details: {
      languages: ['Hindi', 'Bengali', 'English', 'Santhali'],
      experienceYears: 11,
      speciality: 'Smooth VIP Darshan, Vedic Mythology & Local Temple Secrets',
      duration: 'Full Day'
    },
    contactPhone: '+91 93344 XXXXX'
  },

  // HOMESTAYS
  {
    id: 'homestay-netarhat-eco',
    title: 'Netarhat Eco Pine Homestay',
    subtitle: 'Run by Mangra Family — Netarhat Plateau',
    category: 'homestay',
    rating: 4.7,
    reviewsCount: 142,
    price: 1200,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80',
    location: 'Near Pine Forest, Netarhat',
    verified: true,
    badge: 'Eco-Tourism Certified ✓',
    description: 'Cozy solar-powered stone cottage nestled in a fragrant pine grove with home-cooked tribal meals and campfire under the stars.',
    details: {
      amenities: ['Solar 24x7 Power', 'Organic Farm Meals', 'Campfire Area', 'Attached Hot Water Bath', 'Terrace Viewpoint'],
      speciality: 'Farm-fresh pears and herbal tea served complimentary'
    },
    contactPhone: '+91 94313 XXXXX'
  },
  {
    id: 'homestay-betla-retreat',
    title: 'Betla Forest Edge Retreat',
    subtitle: 'Community Lodge — Palamu Sanctuary Border',
    category: 'homestay',
    rating: 4.8,
    reviewsCount: 95,
    price: 1650,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    location: '2 km from Betla Safari Gate',
    verified: true,
    badge: 'Wildlife Verified ✓',
    description: 'Wake up to the calls of peacocks and spotted deer. Built using eco-friendly bamboo and clay with traditional verandahs.',
    details: {
      amenities: ['Safari Jeep Booking Desk', 'Desi Clay Oven Food', 'Wildlife Library', 'Free Wi-Fi in Lounge'],
      speciality: 'Authentic Village Clay Oven Chicken and Madua Roti'
    },
    contactPhone: '+91 99341 XXXXX'
  },
  {
    id: 'homestay-patratu-cottage',
    title: 'Patratu Valley View Cottage',
    subtitle: 'Hillside Wooden Cottage — Ramgarh',
    category: 'homestay',
    rating: 4.6,
    reviewsCount: 88,
    price: 2100,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    location: 'Overlooking Patratu Dam',
    verified: true,
    badge: 'Lake Front ✓',
    description: 'Unmatched sunrise views over the winding valley roads and reservoir with private wooden balcony and barbecue amenities.',
    details: {
      amenities: ['Lake View Balcony', 'AC & Geyser', 'Boat Ride Discounts', 'Fresh Lake Fish Meals'],
      speciality: 'Direct sunset panoramic view over Patratu Dam'
    },
    contactPhone: '+91 98355 XXXXX'
  },
  {
    id: 'homestay-khunti-village',
    title: 'Khunti Sarna Tribal Homestay',
    subtitle: 'Authentic Mud & Thatch Cottage — Khunti',
    category: 'homestay',
    rating: 4.9,
    reviewsCount: 110,
    price: 1100,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
    location: 'Bundu-Khunti Countryside',
    verified: true,
    badge: '100% Tribal Community Run ✓',
    description: 'Live like a local in painted mud-walled cottages with cow-dung polished floors, open inner courtyard, and traditional hospitality.',
    details: {
      amenities: ['Sohrai Hand-painted Walls', 'Traditional Charpai Cots', 'Fresh Well Water', 'Guided Village Walk Included'],
      speciality: 'Participate in morning rice de-husking and pottery'
    },
    contactPhone: '+91 97711 XXXXX'
  },

  // HANDICRAFTS
  {
    id: 'craft-dhokra-elephant',
    title: 'Dhokra Lost-Wax Bell Metal Elephant',
    subtitle: 'Handmade by Budheshwar Karmakar — Khunti',
    category: 'handicraft',
    rating: 4.9,
    reviewsCount: 87,
    price: 1450,
    priceUnit: 'each',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    location: 'Khunti Artisan Cluster',
    verified: true,
    badge: 'GI Tag Product ✓',
    description: 'A 4,000-year-old non-ferrous metal casting craft dating back to the Indus Valley civilization. Each sculpture is unique with no duplicate mold.',
    details: {
      artisanName: 'Budheshwar Karmakar (National Merit Awardee)',
      material: 'Brass, Bronze & Beeswax lost-wax casting',
      amenities: ['Authenticity Certificate', 'Gift Box Included']
    }
  },
  {
    id: 'craft-sohrai-canvas',
    title: 'Original Sohrai Tribal Wall Art on Canvas',
    subtitle: 'Painted with Natural Earth Pigments — Hazaribagh',
    category: 'handicraft',
    rating: 5.0,
    reviewsCount: 104,
    price: 2200,
    priceUnit: 'each',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    location: 'Hazaribagh Sohrai Collective',
    verified: true,
    badge: 'GI Tagged Artform ✓',
    description: 'Depicts wild animals, peacock motifs, and sacred lotus. Created by tribal women using crushed yellow clay (Dudhi matti), red hematite, and charcoal.',
    details: {
      artisanName: 'Malati Devi & Women Cooperative',
      material: 'Stretched Cotton Canvas with Natural Soil Pigments (16x24 inches)',
      amenities: ['Signed by Artisan', 'Artisan Video Story QR']
    }
  },
  {
    id: 'craft-bamboo-lamp',
    title: 'Handcrafted Tribal Bamboo Desk Lamp',
    subtitle: 'Sustainable Craft — Latehar Forest Cluster',
    category: 'handicraft',
    rating: 4.7,
    reviewsCount: 65,
    price: 650,
    priceUnit: 'each',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
    location: 'Latehar Bamboo Workers Society',
    verified: true,
    badge: '100% Eco-Friendly ✓',
    description: 'Intricately hand-chiseled seasoned wild bamboo lattice creating soothing ambient shadow patterns on your living room wall.',
    details: {
      artisanName: 'Latehar Self-Help Group',
      material: 'Treated Forest Bamboo with Warm LED fitting',
      amenities: ['Plug & Play Cable', 'Zero Plastic Packaging']
    }
  },
  {
    id: 'craft-lac-bangles',
    title: 'Traditional Pure Lac Studded Bangles Set',
    subtitle: 'Hand-shaped from Tree Lacquer — Ranchi',
    category: 'handicraft',
    rating: 4.8,
    reviewsCount: 78,
    price: 380,
    priceUnit: 'set of 4',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    location: 'Ranchi Lac Cooperative',
    verified: true,
    badge: 'State Heritage ✓',
    description: 'Jharkhand produces 50%+ of India’s lac. Artisans soften natural resin over hot charcoal to embed vibrant glass beads and mirrors.',
    details: {
      artisanName: 'Karamchand Lac Works',
      material: 'Natural Shellac Resin & Glass beads',
      amenities: ['Available in 2.4, 2.6, 2.8 Sizes']
    }
  },

  // CULTURAL EXPERIENCES & ECO TOURS
  {
    id: 'exp-sacred-grove',
    title: 'Sacred Grove (Sarna) & Forest Spirit Walk',
    subtitle: 'Spiritual Immersion with Tribal Elders',
    category: 'experience',
    rating: 4.9,
    reviewsCount: 82,
    price: 499,
    priceUnit: '/person',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    location: 'Khunti Sacred Sarna Forest',
    verified: true,
    badge: 'Verified Heritage Experience ✓',
    description: 'Learn the sacred philosophy of the Sarna religion, where nature is supreme deity. Walk with village Pahan (priest) through pristine untouched virgin Sal forest.',
    details: {
      duration: '3 Hours (Morning 07:00 AM)',
      groupSize: 'Max 8 people',
      amenities: ['Sal leaf herbal tea', 'Blessing thread', 'Traditional flute demonstration']
    }
  },
  {
    id: 'exp-chhau-dance',
    title: 'Chhau Martial Mask Dance Workshop & Show',
    subtitle: 'UNESCO Intangible Cultural Heritage',
    category: 'experience',
    rating: 4.9,
    reviewsCount: 94,
    price: 650,
    priceUnit: '/person',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    location: 'Saraikela / Ranchi Center',
    verified: true,
    badge: 'UNESCO Heritage ✓',
    description: 'Witness the acrobatic leaps and dramatic clay mask expressions of the Saraikela Chhau dance, followed by a hands-on mask sculpting session.',
    details: {
      duration: '2.5 Hours (Evening 05:30 PM)',
      groupSize: 'Max 15 people',
      amenities: ['Live Dhol & Shehnai ensemble', 'Take-home mini clay mask souvenir']
    }
  },
  {
    id: 'exp-cooking-class',
    title: 'Tribal Farm Cooking: Dhuska, Rugra & Bamboo Stew',
    subtitle: 'From Harvest to Plate with Village Chefs',
    category: 'food',
    rating: 4.8,
    reviewsCount: 115,
    price: 550,
    priceUnit: '/person',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    location: 'Bundu Countryside Farm',
    verified: true,
    badge: 'Culinary Masterclass ✓',
    description: 'Pluck fresh greens from organic vegetable patches, learn to ferment rice batter, grind spices on a sil-batta stone, and feast on Sal-leaf leaf plates.',
    details: {
      duration: '3.5 Hours (Lunch included)',
      groupSize: 'Max 10 people',
      amenities: ['Full 5-course Jharkhand Thali', 'Printed recipe booklet with nutrition tips']
    }
  },

  // PAN-INDIA NATIONWIDE LISTINGS
  {
    id: 'guide-tenzin-norbu',
    title: 'Tenzin Norbu',
    subtitle: 'High-Altitude Eco & Monastic Guide — Spiti Valley',
    category: 'guide',
    rating: 4.9,
    reviewsCount: 184,
    price: 1200,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    location: 'Kaza, Kibber & Pin Valley, Himachal Pradesh',
    verified: true,
    badge: 'IMF Mountain Certified ✓',
    description: 'Native Spitian guide with 10+ years leading trans-Himalayan treks, snow leopard conservation corridors, and thousand-year-old Gompas.',
    details: {
      languages: ['Bhoti / Spitian', 'Hindi', 'English'],
      experienceYears: 10,
      speciality: 'High-Altitude Acclimatization, Monastic Frescoes & Fossil Trails',
      duration: 'Full Day'
    },
    contactPhone: '+91 94180 XXXXX'
  },
  {
    id: 'guide-sreejith-k',
    title: 'Sreejith K.',
    subtitle: 'Backwater Naturalist & Canoe Guide — Munroe Island',
    category: 'guide',
    rating: 4.9,
    reviewsCount: 210,
    price: 900,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    location: 'Munroe Island & Ashtamudi Lake, Kerala',
    verified: true,
    badge: 'Kerala Tourism Approved ✓',
    description: 'Expert canoeist and ornithologist guiding travelers silently through narrow mangrove waterways, tidal lagoons, and migratory bird habitats.',
    details: {
      languages: ['Malayalam', 'English', 'Tamil'],
      experienceYears: 8,
      speciality: 'Mangrove Ecology, Silent Canoe Punting & Migratory Birds',
      duration: 'Morning / Sunset Shifts'
    },
    contactPhone: '+91 94470 XXXXX'
  },
  {
    id: 'guide-bhanwar-khan',
    title: 'Bhanwar Khan',
    subtitle: 'Thar Desert Camel Tracker & Folk Bard — Jaisalmer',
    category: 'guide',
    rating: 4.8,
    reviewsCount: 156,
    price: 850,
    priceUnit: '/day',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    location: 'Khuri Sand Dunes, Jaisalmer, Rajasthan',
    verified: true,
    badge: 'Heritage Folk Custodian ✓',
    description: 'Third-generation camel caravan tracker and Manganiyar musician guiding offbeat camel expeditions across pristine, non-commercial desert ridges.',
    details: {
      languages: ['Marwari', 'Hindi', 'English'],
      experienceYears: 12,
      speciality: 'Desert Navigation, Stargazing Constellations & Folk Ballads',
      duration: 'Full Day / Overnight'
    },
    contactPhone: '+91 94141 XXXXX'
  },
  {
    id: 'homestay-spiti-solar',
    title: 'Spiti Solar Hearth Homestay',
    subtitle: 'Zero-Waste Community Stay — Kaza',
    category: 'homestay',
    rating: 4.9,
    reviewsCount: 128,
    price: 1800,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    location: 'Near Ki Gompa, Spiti, Himachal Pradesh',
    verified: true,
    badge: '100% Solar Heated ✓',
    description: 'Traditional passive-solar mud and timber home overlooking snow-crested Himalayan peaks. Serving organic roasted barley tsampa and sea-buckthorn tea.',
    details: {
      amenities: ['Passive Solar Heating', 'Dry Compost Toilet System', 'Organic Farm Meals', 'Stargazing Rooftop'],
      speciality: 'Zero single-use plastic zone with filtered mountain spring water'
    },
    contactPhone: '+91 94182 XXXXX'
  },
  {
    id: 'homestay-munroe-coir',
    title: 'Munroe Backwaters Coir Eco-Lodge',
    subtitle: 'Island Farmstead by Ashtamudi Lake',
    category: 'homestay',
    rating: 4.8,
    reviewsCount: 144,
    price: 2200,
    priceUnit: '/night',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
    location: 'Munroe Island, Kollam, Kerala',
    verified: true,
    badge: 'Responsible Tourism Certified ✓',
    description: 'Stay in a century-old heritage courtyard home nestled under coconut groves. Complimentary silent wooden canoe punting included every morning.',
    details: {
      amenities: ['Canoe Punting Included', 'Traditional Clay Oven Kitchen', 'Attached Bath', 'Ayurvedic Herb Garden'],
      speciality: 'Home-steamed organic red rice puttu and freshly harvested banana chips'
    },
    contactPhone: '+91 98471 XXXXX'
  },
  {
    id: 'craft-rogan-art',
    title: 'Authentic Rogan Painted Silk Tapestry',
    subtitle: 'Castor Oil Mineral Art — Kutch',
    category: 'handicraft',
    rating: 5.0,
    reviewsCount: 92,
    price: 3200,
    priceUnit: 'each',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    location: 'Nirona Craft Village, Kutch, Gujarat',
    verified: true,
    badge: 'Padma Shri Artisan Guild ✓',
    description: '300-year-old art form where boiled castor oil paste is drawn with a brass stylus directly onto wild Tussar silk into intricate floral mandalas.',
    details: {
      artisanName: 'Khatri Family Collective (National Awardees)',
      material: 'Wild Tussar Silk with Castor Oil and Natural Earth Dyes',
      amenities: ['Framed Presentation', 'Artisan Certificate of Authenticity']
    }
  },
  {
    id: 'craft-pattachitra-scroll',
    title: 'Odisha Pattachitra Palm Leaf Etched Scroll',
    subtitle: 'Ancient Etching Heritage — Raghurajpur',
    category: 'handicraft',
    rating: 4.9,
    reviewsCount: 88,
    price: 1950,
    priceUnit: 'each',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    location: 'Raghurajpur Heritage Craft Village, Puri, Odisha',
    verified: true,
    badge: 'GI Tagged Heritage ✓',
    description: 'Hand-inscribed on dried palm leaves (Tala Pattachitra) using an iron stylus and natural lampblack ink depicting mythological and forest folklore.',
    details: {
      artisanName: 'Mahapatra Master Chitrakar Guild',
      material: 'Seasoned Palm Fronds, Tamarind Seed Gum & Lampblack',
      amenities: ['Folding Scroll Format', 'GI Tag Verification Stamp']
    }
  },
  {
    id: 'exp-spiti-stargazing',
    title: 'Trans-Himalayan Stargazing & Marine Fossil Trail',
    subtitle: '14,000 ft High Altitude Geo-Immersion — Langza',
    category: 'experience',
    rating: 4.9,
    reviewsCount: 76,
    price: 750,
    priceUnit: '/person',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
    location: 'Langza Village, Spiti Valley, Himachal Pradesh',
    verified: true,
    badge: 'Dark Sky Certified Guide ✓',
    description: 'Walk across prehistoric seabed terraces to locate 200-million-year-old ammonite fossils, followed by celestial observation of the Milky Way core.',
    details: {
      duration: '3.5 Hours (Late Evening)',
      groupSize: 'Max 8 people',
      amenities: ['Telescope Observation', 'Warm Herbal Tea', 'Fossil Identification Guide']
    }
  }
];
