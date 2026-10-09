import { Destination } from '../types';

export const INDIAN_STATES = [
  'All India',
  'Assam',
  'Goa',
  'Gujarat',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Madhya Pradesh',
  'Maharashtra',
  'Meghalaya',
  'Odisha',
  'Rajasthan',
  'Tamil Nadu',
  'Uttarakhand',
  'West Bengal'
];

export const ALL_ZONES = ['All', 'North', 'South', 'East', 'West', 'Northeast', 'Central'];

export const DESTINATIONS: Destination[] = [
  // ==========================================
  // HIMACHAL PRADESH
  // ==========================================
  {
    id: 'spiti-valley',
    name: 'Spiti Valley & Kibber',
    hindiName: 'स्पीति घाटी एवं किब्बर',
    district: 'Lahaul and Spiti',
    state: 'Himachal Pradesh',
    zone: 'North',
    category: 'Nature',
    rating: 4.9,
    reviewsCount: 2150,
    approxCost: 1800,
    bestTime: 'May to October',
    timings: 'Open 24 Hours (Monasteries 06:00 AM – 06:00 PM)',
    entryFee: 'Free (Inner Line permit required for non-Indians)',
    coordinates: [32.2276, 78.0710],
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'High-altitude cold desert trans-Himalayan plateau with 1,000-year-old Buddhist monasteries and solar-powered homestays.',
    about: 'Spiti Valley ("The Middle Land" between India and Tibet) sits at an average altitude of 12,500 feet. Renowned for dramatic windswept gorges, ancient Key and Dhankar Gompas, and the high-altitude wildlife haven of Kibber Sanctuary, Spiti is a pioneer in responsible mountain tourism where local youth run solar-heated homestays and snow leopard monitoring cooperatives.',
    thingsToDo: [
      'Stargazing at Kibber (4,270m) under certified bortle-class dark skies',
      'Morning prayer meditation at 11th-century Key Monastery',
      'Visit Chicham Bridge, Asia\'s highest suspension suspension bridge at 4,145m',
      'Post a handwritten postcard from Hikkim, the world\'s highest post office (4,400m)',
      'Fossil spotting at Langza village beneath the Chau Chau Kang Nilda peak'
    ],
    nearbyAttractions: ['Chandratal Lake', 'Pin Valley National Park', 'Dhankar Fort Gompa'],
    howToReach: {
      air: 'Bhuntar Airport, Kullu (235 km) or Chandigarh International Airport (460 km)',
      rail: 'Shimla Toy Train or Chandigarh Railway Station (440 km)',
      road: 'Scenic route via Manali-Atal Tunnel-Kunzum Pass (June-Oct) or year-round via Shimla-Kinnaur'
    },
    localFood: [
      { name: 'Spitian Thukpa & Tingmo', description: 'Steamed flower buns served with hearty mountain barley and vegetable broth' },
      { name: 'Sea Buckthorn Herbal Tea', description: 'Antioxidant-rich wild Himalayan berry tea harvested sustainably by village women' }
    ],
    safetyInfo: 'Strict acclimatization protocol: Spend 48 hours acclimatizing in Kaza. Carry Diamox, thermal layers, and reusable water flasks; single-use plastic bottles are discouraged.',
    weatherPlaceholder: {
      temp: '14°C',
      condition: 'Sunny Alpine Air',
      forecast: 'Crisp mountain breeze with clear night skies'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Early season (May-June) and autumn (September) offer peaceful monastery visits and vivid autumn foliage.',
    ecoAdvisories: [
      'Zero single-use plastic: use community water refill filtration stations in Kaza',
      'Homestays rely on dry composting toilets: follow high-altitude water conservation practices',
      'Leave no trace on high mountain passes: pack out all non-biodegradable waste'
    ],
    audioGuideText: 'Welcome to Spiti Valley, the mystical trans-Himalayan expanse of Himachal Pradesh. Carved over millennia by the Spiti River, this high desert plateau has fostered sustainable human settlement for over a thousand years through collective irrigation and Tibetan Buddhist wisdom.',
    audioGuideHindi: 'हिमाचल प्रदेश की पावन स्पीति घाटी में आपका स्वागत है। 12,500 फीट की ऊंचाई पर स्थित यह शीत मरुस्थल अपनी प्राचीन बौद्ध धरोहर, सौर-ऊर्जा संचालित होमस्टे और स्नो लेपर्ड संरक्षण के लिए जाना जाता है।',
    sarthiImpactScore: {
      overallScore: 94,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Solar-powered homestays, non-motorized village walking trails, and community carpool hubs.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 88,
        metricText: '34/35: ~88% of tourist spend stays directly with local farming and pastoral families in Spitian villages.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: Protected biosphere buffer zone with community-enforced ban on plastic water bottles and wildlife poaching.'
      },
      explanation: 'Spiti Valley ranks as an exemplary Eco Pioneer: local communities run 100% of village homestays, dry-composting protects scarce water resources, and solar power warms remote rooms at 4,000 meters.',
      sustainableRecommendations: [
        'Stay at community-run village homestays rather than concrete commercial hotels.',
        'Refill drinking water at Ecosphere filtered refill points in Kaza.',
        'Purchase hand-knitted yak-wool socks and sea-buckthorn jam from women\'s self-help groups.',
        'Do not fly drones near sacred Gompas or disturbance zones of snow leopards.'
      ]
    }
  },
  {
    id: 'tirthan-valley',
    name: 'Tirthan Valley & GHNP Eco-Zone',
    hindiName: 'तीर्थन घाटी एवं ग्रेट हिमालयन नेशनल पार्क',
    district: 'Kullu',
    state: 'Himachal Pradesh',
    zone: 'North',
    category: 'Wildlife',
    rating: 4.8,
    reviewsCount: 1680,
    approxCost: 1400,
    bestTime: 'March to June and September to November',
    timings: 'Park gates: 07:00 AM – 05:30 PM',
    entryFee: '₹100 for Indian adults, ₹400 for foreign visitors',
    coordinates: [31.6421, 77.3421],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Pristine Himalayan river valley gateway to UNESCO Great Himalayan National Park with traditional Kathkuni timber-stone architecture.',
    about: 'Flanked by the crystalline, free-flowing Tirthan River, this valley is the eco-tourism buffer gateway to the UNESCO World Heritage Great Himalayan National Park. Strict community protection has kept the river free of major dams, preserving Himalayan trout, western tragopan pheasants, and virgin deodar forests.',
    thingsToDo: [
      'Eco-trek through the Great Himalayan National Park eco-zone with local biodiversity guides',
      'Day hike to the cascading Chhoie Waterfall and Jalori Pass (3,120m)',
      'Explore the ancient 1,500-year-old Kathkuni timber tower of Chehni Kothi',
      'Catch-and-release brown trout angling with state eco-permits',
      'Participate in village wood-carving workshops at Sai Ropa'
    ],
    nearbyAttractions: ['Jalori Pass & Serolsar Lake', 'Chehni Kothi', 'Great Himalayan National Park Core Zone'],
    howToReach: {
      air: 'Bhuntar Airport Kullu (48 km) - 1.5 hours by taxi',
      rail: 'Chandigarh Junction (240 km) or Kiratpur Sahib',
      road: 'Delhi to Aut tunnel via NH-21, divert towards Larji and Banjar'
    },
    localFood: [
      { name: 'Kulluvi Siddu with Ghee', description: 'Steamed wheat dough buns stuffed with spiced walnut and poppy seed paste' },
      { name: 'Wild Guchhi (Morel) Rice', description: 'Rare wild forest morel mushrooms harvested ethically by high-altitude gatherers' }
    ],
    safetyInfo: 'Trekking permits are mandatory from the Forest Department office at Sai Ropa. Wear sturdy waterproof boots for boulder crossings.',
    weatherPlaceholder: {
      temp: '18°C',
      condition: 'Fresh Forest Canopy',
      forecast: 'Crisp mountain air along the river corridor'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Deliberately uncommercialized with limited vehicular congestion; weekdays are deeply tranquil.',
    ecoAdvisories: [
      'UNESCO World Heritage buffer zone: plastic-free enforcement',
      'All treks must be accompanied by certified local village biodiversity trackers',
      'Zero disturbance to riverside breeding zones of Himalayan aquatic life'
    ],
    audioGuideText: 'Welcome to Tirthan Valley, home to the sacred Tirthan River fed by pristine glacial springs. Here, traditional Kathkuni architecture stands resilient against earthquakes, while local biodiversity committees safeguard the rare Western Tragopan pheasant.',
    audioGuideHindi: 'तीर्थन घाटी में आपका स्वागत है। यूनेस्को विश्व धरोहर ग्रेट हिमालयन नेशनल पार्क की गोद में बसी यह शांत घाटी अपनी काष्ठ-कुणी वास्तुकला, देवदार के जंगलों और स्वच्छ नदी के लिए विश्व प्रसिद्ध है।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Network of non-motorized trail treks; certified eco-homestays utilizing natural spring gravity water.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 85,
        metricText: '33/35: Community Women\'s Eco-Development Committees (Welfare Trust) receive revenue from all guided treks.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Protected Reserve',
        metricText: '32/35: Stringent UNESCO World Heritage conservation guidelines limiting commercial vehicular incursions.'
      },
      explanation: 'Tirthan Valley is celebrated globally for participatory conservation: former poachers now operate as certified wildlife spotters and trail guides, preserving one of Earth\'s premier biodiversity sanctuaries.',
      sustainableRecommendations: [
        'Hire biodiversity guides certified by the Great Himalayan National Park Society.',
        'Stay in heritage Kathkuni homestays made with local stone, mud, and sustainable timber.',
        'Refrain from playing loud amplified music anywhere along the river eco-corridor.'
      ]
    }
  },

  // ==========================================
  // KERALA
  // ==========================================
  {
    id: 'munroe-island',
    name: 'Munroe Island & Ashtamudi',
    hindiName: 'मुनरो द्वीप एवं अष्टमुडी झील',
    district: 'Kollam',
    state: 'Kerala',
    zone: 'South',
    category: 'Culture',
    rating: 4.8,
    reviewsCount: 1840,
    approxCost: 950,
    bestTime: 'October to March',
    timings: 'Canoe rides: 06:00 AM – 06:30 PM',
    entryFee: 'Free village entry; Country canoe guided cruise ~₹600-₹900/canoe',
    coordinates: [8.9917, 76.6117],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Silent mangrove canal village cluster at the confluence of Kallada River and Ashtamudi Lake, leading India\'s Responsible Tourism Mission.',
    about: 'Comprising a cluster of eight small island hamlets, Munroe Island is named after British Resident Col. John Munro who oversaw land reclamation in the early 19th century. Today, Munroe is celebrated as the flagship pioneer of the Kerala Responsible Tourism (RT) Mission: motorboats are prohibited in shallow canals, replaced by silent hand-poled wooden country canoes that pass under lush coconut fronds without disturbing aquatic ecosystems.',
    thingsToDo: [
      'Early morning silent country-canoe cruise through narrow arching mangrove canals',
      'Watch traditional coir-yarn spinning and handloom weaving in village courtyards',
      'Experience sustainable prawn filtration and bio-organic pearl spot (Karimeen) farming',
      'Cycle along narrow village island paths connecting historic Dutch churches and duck farms',
      'Taste traditional Kerala Sadhya cooked with backyard organic spices'
    ],
    nearbyAttractions: ['Ashtamudi Lake Ramsar Wetland', 'Jatayu Earth\'s Center', 'Thangassery Lighthouse'],
    howToReach: {
      air: 'Trivandrum International Airport (75 km) - 1.5 hours',
      rail: 'Munroe Island Railway Station (local trains) or Kollam Junction (25 km)',
      road: 'Smooth state highway from Kollam or Kundara with frequent ferry crossings'
    },
    localFood: [
      { name: 'Pearl Spot (Karimeen) Pollichathu', description: 'Freshwater fish marinated in shallots and wrapped in charred banana leaves' },
      { name: 'Appam with Coconut Vegetable Stew', description: 'Lacy fermented rice crepes with fragrant coconut milk simmered with organic ginger and curry leaves' }
    ],
    safetyInfo: 'Life jackets are mandatory on all canoe excursions. Respect the privacy of local island families while photographing canal courtyards.',
    weatherPlaceholder: {
      temp: '28°C',
      condition: 'Tropical Lake Breeze',
      forecast: 'Pleasant morning backwater mist'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: '06:00 AM to 08:30 AM sunrise canoe rides offer tranquil bird encounters and gentle water light.',
    ecoAdvisories: [
      'Silent canoe zone: motorized propeller boats strictly barred in narrow mangrove channels',
      'Plastic-free island initiatives: avoid bringing plastic bottles into the backwaters',
      'Direct community benefit: book canoes through registered RT village coordinators'
    ],
    audioGuideText: 'Welcome to Munroe Island, nestled where the Kallada River meets the Ramsar wetland of Ashtamudi Lake. Here, the rhythms of life are tuned to water: coconut coir spinning, mangrove preservation, and sustainable canal stewardship.',
    audioGuideHindi: 'केरल के मुनरो द्वीप में आपका स्वागत है। अष्टमुडी झील के बैकवाटर में बसा यह द्वीप भारत के \'रिस्पॉन्सिबल टूरिज्म\' का प्रतीक है, जहां शांत देशी डोंगी नावों से मैंग्रोव नहरों का भ्रमण किया जाता है।',
    sarthiImpactScore: {
      overallScore: 93,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 29,
        metricText: '29/30: 100% human-powered non-motorized wooden canoes, village cycling trails, and direct rail halt.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 89,
        metricText: '34/35: Verified Kerala Responsible Tourism model: 89% of tourist payments reach canoe oarsmen, homestay families, and coir weavers directly.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '30/35: Mangrove planting programs and Ramsar wetland conservation preventing shoreline soil erosion.'
      },
      explanation: 'Munroe Island is an exemplary model of high-impact community tourism: by substituting noisy motorboats with traditional wooden canoes, travelers reduce aquatic emissions to zero while directly funding island livelihoods.',
      sustainableRecommendations: [
        'Choose silent country canoes over commercial diesel houseboats.',
        'Eat home-cooked meals hosted by island families to support the village kitchen collective.',
        'Purchase coir doormats and handwoven palm leaf craft directly from artisan households.'
      ]
    }
  },
  {
    id: 'wayanad',
    name: 'Wayanad Eco-Biosphere',
    hindiName: 'वायनाड जैव-आरक्षित क्षेत्र',
    district: 'Wayanad',
    state: 'Kerala',
    zone: 'South',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 2310,
    approxCost: 1200,
    bestTime: 'September to March',
    timings: '08:00 AM – 05:00 PM',
    entryFee: 'Edakkal Caves ₹50, Chembra Peak pass ₹750/group',
    coordinates: [11.6854, 76.1320],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Misty Western Ghats mountain haven with prehistoric Neolithic rock art, bamboo craft cooperatives, and shade-grown organic coffee agroforestry.',
    about: 'Perched on the southern tip of the Deccan plateau within the Nilgiri Biosphere Reserve, Wayanad combines dense moist-deciduous forests with certified organic spices, shade-grown coffee, and indigenous Paniya and Kurichiya tribal heritage. The Neolithic petroglyphs at Edakkal Caves date back to 6,000 BCE, representing human civilization\'s earliest expressions in South India.',
    thingsToDo: [
      'Hike the stone pathway to Edakkal Caves to observe prehistoric petroglyphs',
      'Walk through community-owned bamboo forests and attend bamboo craft workshops at Uravu',
      'Trek with certified forest wardens to Chembra Peak\'s heart-shaped lake (Hridaya Saras)',
      'Spot wild Asiatic elephants and Malabar giant squirrels in Wayanad Wildlife Sanctuary',
      'Tour organic shade-grown Robusta coffee, cardamom, and black pepper plantations'
    ],
    nearbyAttractions: ['Banasura Sagar Earth Dam', 'Kuruva Island River Delta', 'Pookode Natural Lake'],
    howToReach: {
      air: 'Calicut International Airport Kozhikode (85 km) - 2.5 hours',
      rail: 'Kozhikode Railway Station (75 km) with nationwide express trains',
      road: 'Scenic drive up the famous 9 hairpin bends of Thamarassery Churam ghat'
    },
    localFood: [
      { name: 'Malabar Bamboo Biryani', description: 'Fragrant Kaima rice and spiced vegetables slow-cooked inside hollow bamboo stems' },
      { name: 'Wayanad Wild Forest Honey & Puttu', description: 'Organic forest honey gathered by indigenous tribes paired with steamed rice-coconut cylinders' }
    ],
    safetyInfo: 'Leech socks and rainproof gear are advised during post-monsoon treks. Stick to designated forest trail hours (07:00 AM - 05:00 PM).',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Misty Forest Breeze',
      forecast: 'Refreshing highland temperatures'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Edakkal Caves has a daily entry cap of 1,920 visitors: arrive before 09:30 AM to secure morning entry passes.',
    ecoAdvisories: [
      'Chembra Peak has a strict carrying capacity cap of 200 trekkers per day',
      'Zero single-use plastic policy across all forest check-posts',
      'Support Uravu: an indigenous bamboo eco-initiative employing over 300 rural women'
    ],
    audioGuideText: 'Welcome to Wayanad, nestled among the mist-draped peaks of the Western Ghats. In the Edakkal rock shelters, prehistoric human beings carved stone records over 8,000 years ago, while surrounding forests sustain indigenous agroforestry and bamboo craftsmanship.',
    audioGuideHindi: 'वायनाड के पावन पर्वतीय वनों में आपका स्वागत है। नीलगिरि बायोस्फीयर का हिस्सा यह क्षेत्र 8,000 वर्ष पुराने एडाक्कल गुफा चित्रों, जैविक मसालों और बांस शिल्प के लिए जाना जाता है।',
    sarthiImpactScore: {
      overallScore: 89,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: High canopy shade-grown agroforestry sequestering carbon; walking-friendly plantation trails.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 83,
        metricText: '32/35: Direct fair-trade purchasing for tribal honey collectors and women bamboo craft artisans at Uravu cooperative.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Strictly regulated daily trekking caps at Chembra Peak and wildlife corridor protection.'
      },
      explanation: 'Wayanad demonstrates how responsible tourism protects forest biodiversity while fostering rural employment through community agroforestry and sustainable bamboo design.',
      sustainableRecommendations: [
        'Visit Uravu Indigenous Science & Technology center in Thrikkaipetta to purchase zero-plastic bamboo products.',
        'Respect the strict daily visitor limits at Edakkal Caves and Chembra Peak.',
        'Buy shade-grown organic coffee and spices directly from farmer cooperatives.'
      ]
    }
  },

  // ==========================================
  // MEGHALAYA
  // ==========================================
  {
    id: 'mawlynnong',
    name: 'Mawlynnong & Living Root Bridges',
    hindiName: 'मावलिनॉन्ग एवं जीवित जड़ पुल',
    district: 'East Khasi Hills',
    state: 'Meghalaya',
    zone: 'Northeast',
    category: 'Culture',
    rating: 4.9,
    reviewsCount: 2420,
    approxCost: 850,
    bestTime: 'October to April',
    timings: '07:00 AM – 06:00 PM',
    entryFee: 'Village entry ₹50 per vehicle, Living Root Bridge entry ₹40/adult',
    coordinates: [25.2014, 91.9160],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Celebrated as "Asia\'s Cleanest Village", renowned for bio-engineered living Ficus root bridges and Khasi matrilineal community homestays.',
    about: 'Tucked into the lush southern slopes of the East Khasi Hills near the Indo-Bangladesh border, Mawlynnong earned international renown when Discover India crowned it the cleanest village in Asia. The indigenous Khasi community maintains 100% literacy, matrilineal lineage, and communal cleanliness: handmade conical bamboo dustbins (khoh) line every stone pathway, composted waste fertilizes organic orchards, and neighboring Riwai village features a 180-year-old Jingkieng Jri (Living Root Bridge) bio-engineered from living Ficus elastica aerial roots.',
    thingsToDo: [
      'Walk across the 180-year-old single-decker Riwai Living Root Bridge over the crystal Thyllong River',
      'Climb the Sky Walk: an 85-foot eco-friendly bamboo lookout tower offering panoramic views of Bangladesh plains',
      'Stroll through flower-bordered cobbled village lanes kept immaculate by children and elders alike',
      'Stay in traditional bamboo-and-thatch Khasi homestays run by village women',
      'Learn about Khasi matrilineal inheritance and sacred forest stewardship'
    ],
    nearbyAttractions: ['Dawki Umngot River (Transparent boating)', 'Shnongpdeng River Camp', 'Cherrapunji Waterfalls'],
    howToReach: {
      air: 'Shillong Airport Umroi (90 km) or Guwahati Lokpriya Gopinath Bordoloi Airport (170 km)',
      rail: 'Guwahati Railway Station (165 km) - 4.5 hours by taxi',
      road: 'Scenic mountain highway from Shillong (78 km) via Pynursla'
    },
    localFood: [
      { name: 'Jadoh with Local Wild Herbs', description: 'Traditional Khasi red hill rice cooked with fragrant bay leaves and black sesame' },
      { name: 'Tungrymbai & Bamboo Shoot Chutney', description: 'Fermented soybean paste sautéed with wild ginger and chili' }
    ],
    safetyInfo: 'Stone pathways around root bridges can be slippery during rains; wear shoes with strong rubber grip. Smoking and littering carry community fines.',
    weatherPlaceholder: {
      temp: '20°C',
      condition: 'Clean Mountain Breezes',
      forecast: 'Clear skies with tropical cloud blankets'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Visit on weekdays or early morning before day-tripper buses arrive from Shillong.',
    ecoAdvisories: [
      '100% plastic ban: bamboo baskets line every walkway; do not discard plastic wrappers',
      'Living root bridges are living organisms: do not pull or climb outside designated stone root tracks',
      'Village homestay tariff is fixed by the village council, ensuring equitable income distribution'
    ],
    audioGuideText: 'Welcome to Mawlynnong, celebrated across the world as an inspiring model of indigenous civic pride. Here, community cleanliness is not a government program, but a sacred generational Khasi value, paired with living root bridges that grow stronger with age.',
    audioGuideHindi: 'मावलिनॉन्ग में आपका स्वागत है, जिसे एशिया का सबसे स्वच्छ गांव कहा जाता है। खासी समुदाय के इस गांव में रहने वाले लोग जीवित फिकस पेड़ों की जड़ों से पुल बनाते हैं जो सैकड़ों साल तक जीवित रहते हैं।',
    sarthiImpactScore: {
      overallScore: 96,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 29,
        metricText: '29/30: Bio-engineered living infrastructure requiring zero concrete or industrial steel; walkable village.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 35,
        economicRetentionPct: 92,
        metricText: '35/35: 92% of all tourism fees and homestay payments are managed directly by the village Dorbar Shnong (village council).'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: Exemplary community-driven waste management: all organic waste is composted and used in vegetable gardens.'
      },
      explanation: 'Mawlynnong scores a phenomenal 96/100: the living root bridge is the pinnacle of regenerative bio-engineering, growing stronger over centuries while providing a living bridge across flood-prone monsoon rivers.',
      sustainableRecommendations: [
        'Stay overnight in a community homestay to experience dawn village rhythms.',
        'Deposit any unavoidable waste only into the conical bamboo \'khoh\' baskets.',
        'Never pull or step with heavy boots onto the fragile emerging roots of the living bridges.'
      ]
    }
  },
  {
    id: 'cherrapunji',
    name: 'Cherrapunji (Sohra) & Nohkalikai',
    hindiName: 'चेरापूंजी (सोहरा) एवं नोहकालिकाई',
    district: 'East Khasi Hills',
    state: 'Meghalaya',
    zone: 'Northeast',
    category: 'Waterfalls',
    rating: 4.8,
    reviewsCount: 3100,
    approxCost: 900,
    bestTime: 'October to May (Monsoon for roaring cascades)',
    timings: '07:00 AM – 05:00 PM',
    entryFee: 'Nohkalikai viewpoint ₹50/adult',
    coordinates: [25.2758, 91.7328],
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The cloud-kissed precipice of Meghalaya featuring India\'s tallest plunge waterfall (340m), ancient limestone caves, and sacred forest groves.',
    about: 'Historically known as Sohra, Cherrapunji sits on a high plateau dropping dramatically into the river plains of Bangladesh. Famed as one of the wettest places on planet Earth, it is home to Nohkalikai Falls — India\'s tallest plunge cascade dropping 340 meters into a turquoise-green pool — as well as Mawsmai limestone cave formations and the ancient Mawphlang Sacred Grove preserved by Khasi taboos for over 800 years.',
    thingsToDo: [
      'Gaze at the roaring 340-meter plunge of Nohkalikai Falls from the cliff viewing terrace',
      'Explore the ancient limestone fossil chambers and stalactites of Mawsmai and Arwah caves',
      'Walk through the Mawphlang Sacred Grove with an authorized indigenous storyteller',
      'Trek the scenic descent to the Double Decker Living Root Bridge at Nongriat (3,500 stone stairs)',
      'Taste wild Khasi orange honey and roasted cinnamon bark'
    ],
    nearbyAttractions: ['Nongriat Double Decker Living Root Bridge', 'Seven Sisters Falls', 'Mawsmai Cave'],
    howToReach: {
      air: 'Shillong Airport (80 km) or Guwahati Airport (165 km)',
      rail: 'Guwahati Junction (150 km) - 4 hours scenic drive',
      road: 'Well-paved mountain highway crossing Mawkdok Dympep Bridge'
    },
    localFood: [
      { name: 'Dohneiiong with Red Rice', description: 'Tender country preparation with roasted black sesame seeds and local garlic' },
      { name: 'Sohiong Wild Blackberry Juice', description: 'Tart seasonal berry beverage harvested from plateau hill shrubs' }
    ],
    safetyInfo: 'Sudden dense mists can reduce road visibility on cliff roads: drive with fog lights. The Nongriat trek requires good physical stamina (3,500 stairs each way).',
    weatherPlaceholder: {
      temp: '17°C',
      condition: 'Misty Cloud Veils',
      forecast: 'Enchanting plateau cloudscapes with crisp breezes'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Early morning hours (08:00 AM - 10:30 AM) offer crystal-clear visibility before afternoon cloud cover rolls in.',
    ecoAdvisories: [
      'Mawphlang Sacred Grove taboo: not a single leaf, twig, or stone may be removed from the sacred forest',
      'Pack out all plastics on the Nongriat trek: support village plastic-recovery deposit counters'
    ],
    audioGuideText: 'Welcome to Sohra, known to the world as Cherrapunji. Where moist monsoon winds from the Bay of Bengal collide with the Khasi cliffs, nature creates the grandest cloud kingdom on earth. Below Nohkalikai Falls, pristine turquoise waters tell ancestral Khasi folklore.',
    audioGuideHindi: 'चेरापूंजी (सोहरा) में आपका स्वागत है। 340 मीटर की ऊंचाई से गिरने वाला नोहकालिकाई जलप्रपात भारत का सबसे ऊंचा जलप्रपात है, जहां मेघों और बादलों का अनंत सौंदर्य देखने को मिलता है।',
    sarthiImpactScore: {
      overallScore: 90,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: World-class walking and stair-trek corridors connecting cliff hamlets; low motorized reliance.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 84,
        metricText: '33/35: Indigenous guides, village porters, and local community guest houses sustain Khasi families in Nongriat and Sohra.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Centuries-old sacred grove taboos safeguard pristine old-growth botanical ecosystems without modern chemicals.'
      },
      explanation: 'Cherrapunji demonstrates indigenous conservation at its best: the sacred forest laws prove that traditional tribal respect for nature protects rare orchids and ancient trees far more effectively than fences.',
      sustainableRecommendations: [
        'Take an authorized guide through Mawphlang Sacred Forest and strictly obey tribal reverence rules.',
        'Support village homestays at Nongriat at the foot of the Double Decker Root Bridge.',
        'Carry reusable water containers during the 3,500-step trek down the gorge.'
      ]
    }
  },

  // ==========================================
  // RAJASTHAN
  // ==========================================
  {
    id: 'jaisalmer-desert-park',
    name: 'Khuri & Desert National Park, Jaisalmer',
    hindiName: 'खूड़ी एवं डेजर्ट नेशनल पार्क, जैसलमेर',
    district: 'Jaisalmer',
    state: 'Rajasthan',
    zone: 'West',
    category: 'Wildlife',
    rating: 4.8,
    reviewsCount: 2280,
    approxCost: 1500,
    bestTime: 'October to March',
    timings: '06:00 AM – 07:00 PM',
    entryFee: 'Desert National Park entry ₹100/adult; Camel eco-safari ~₹500-₹800',
    coordinates: [26.6174, 70.7224],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Untouched Thar Desert sand dunes, critical habitat of the critically endangered Great Indian Bustard, and traditional mud-thatch Bhunga eco-stays.',
    about: 'While commercialized dune clusters face heavy jeep safaris, Khuri and the vast Desert National Park (3,162 sq km) represent authentic desert conservation. Here, local pastoralists protect shifting sand dunes, chinkara gazelles, desert foxes, and the last remaining breeding populations of the critically endangered Great Indian Bustard (Godawan). Sustainable travelers stay in traditional earthen Bhunga cottages plastered with cow dung and limestone, savoring organic millet meals by desert bonfires to the tunes of Manganiyar musicians.',
    thingsToDo: [
      'Silent sunset camel trek over non-motorized rolling sand dunes in Khuri',
      'Birdwatching expedition in Desert National Park to spot the rare Great Indian Bustard and Steppe Eagles',
      'Stay in eco-friendly mud-plastered Bhunga huts with natural thermal cooling',
      'Listen to soul-stirring Manganiyar and Langa folk melodies beneath clear starry desert skies',
      'Learn traditional desert water-harvesting techniques (Bawari & Kuis) from village elders'
    ],
    nearbyAttractions: ['Jaisalmer Golden Fort', 'Kuldhara Abandoned Heritage Village', 'Sam Sand Dunes'],
    howToReach: {
      air: 'Jaisalmer Airport (JSA) (45 km) - seasonal commercial flights, or Jodhpur Airport (310 km)',
      rail: 'Jaisalmer Railway Station (45 km) with direct trains from Delhi, Jaipur, and Mumbai',
      road: 'Scenic desert highway NH-11 connecting Jodhpur, Bikaner, and Jaisalmer'
    },
    localFood: [
      { name: 'Ker Sangri with Bajra Roti', description: 'Indigenous desert beans and wild berries cooked with dried mango powder and pure ghee' },
      { name: 'Gatte Ki Sabzi', description: 'Gram flour dumplings simmered in curd gravy flavored with roasted cumin' }
    ],
    safetyInfo: 'Carry warm woollens for desert nights (temperatures can plunge to 5°C). Avoid noisy off-roading quad bikes in wildlife conservation zones.',
    weatherPlaceholder: {
      temp: '24°C',
      condition: 'Golden Desert Sun',
      forecast: 'Clear desert sunshine transitioning to cool starlit night'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Far more tranquil than commercial Sam dunes: Khuri offers peaceful dune solitary contemplation.',
    ecoAdvisories: [
      'Strict ban on off-road motorized dune-bashing inside Desert National Park',
      'Protect the Great Indian Bustard: maintain silence and do not approach breeding enclosures',
      'Water is precious in Thar: observe strict desert water conservation practices in homestays'
    ],
    audioGuideText: 'Welcome to the golden sands of Khuri on the edge of Desert National Park. Here in the heart of the Thar, life has thrived for centuries on minimal water, guided by deep reverence for the land, desert wildlife, and desert bards.',
    audioGuideHindi: 'थार मरुस्थल के खूड़ी एवं डेजर्ट नेशनल पार्क में आपका स्वागत है। यहां प्रकृति प्रेमी विलुप्तप्राय गोडावण (ग्रेट इंडियन बस्टर्ड), पारंपरिक मिट्टी के भूंगा आवासों और मंगणियार संगीत का अनुभव करते हैं।',
    sarthiImpactScore: {
      overallScore: 91,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Camel-powered and walking dune explorations; mud-thatch architecture eliminating air-conditioning needs.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 86,
        metricText: '33/35: Directly sustains traditional camel owners, village potter families, and legendary Manganiyar folk performers.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Protected Reserve',
        metricText: '31/35: Vital sanctuary corridor for the Great Indian Bustard (fewer than 150 individuals remaining in the wild).'
      },
      explanation: 'Khuri and Desert National Park protect fragile arid biodiversity while sustaining pastoral communities through non-invasive camel tours and vernacular desert architecture.',
      sustainableRecommendations: [
        'Choose silent camel safaris in Khuri instead of carbon-heavy off-road diesel jeep bashing.',
        'Support Manganiyar folk musicians directly through community evening cultural performances.',
        'Drink water from refillable containers to keep pristine desert dunes free of plastic waste.'
      ]
    }
  },
  {
    id: 'kumbhalgarh',
    name: 'Kumbhalgarh & Ranakpur',
    hindiName: 'कुंभलगढ़ एवं रणकपुर',
    district: 'Rajsamand & Pali',
    state: 'Rajasthan',
    zone: 'West',
    category: 'Heritage',
    rating: 4.8,
    reviewsCount: 2650,
    approxCost: 1200,
    bestTime: 'October to March',
    timings: 'Fort: 09:00 AM – 06:00 PM; Light & Sound show: 06:45 PM',
    entryFee: 'Fort entry ₹40 for Indian adults, ₹600 for foreigners',
    coordinates: [25.1479, 73.5873],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The Great Wall of India (36 km continuous rampart) encircled by the Aravalli wildlife sanctuary and solar-conserved Ranakpur marble temples.',
    about: 'Perched 1,100 meters high in the Aravalli mountain ranges, Kumbhalgarh Fort is a UNESCO World Heritage citadel with the second-longest continuous wall in the world (36 km), second only to the Great Wall of China. Surrounding the fortress lies the Kumbhalgarh Wildlife Sanctuary, home to Indian wolves, leopards, and four-horned antelopes. Down in the valley stands the 15th-century Ranakpur Jain Temple, a marvel of 1,444 uniquely hand-carved marble pillars illuminated purely by natural solar daylight.',
    thingsToDo: [
      'Trek along segments of the legendary 36-kilometer fortified perimeter ramparts',
      'Watch the evening light and sound illumination casting golden glow over Badal Mahal',
      'Guided eco-walk through Kumbhalgarh Wildlife Sanctuary looking for Aravalli leopards and birds',
      'Marvel at the 1,444 non-identical carved pillars of the solar-cooled Ranakpur Jain Temple',
      'Experience rural shepherd culture with local Raika pastoralist communities'
    ],
    nearbyAttractions: ['Ranakpur Jain Temples', 'Haldighati Historic Battlefield', 'Udaipur City Palace (85 km)'],
    howToReach: {
      air: 'Maharana Pratap Airport Udaipur (95 km) - 2 hours by cab',
      rail: 'Falna Railway Station (50 km) or Udaipur City (85 km)',
      road: 'Scenic state highway via Gogunda through lush Aravalli valleys'
    },
    localFood: [
      { name: 'Mewari Dal Baati Churma', description: 'Hard wheat rolls baked over cow-dung embers, soaked in pure ghee with spiced lentils' },
      { name: 'Rabdi Ghewar', description: 'Honeycomb sweet pastry topped with creamy reduced saffron milk' }
    ],
    safetyInfo: 'The walk up the ramparts to Badal Mahal is steep; wear comfortable walking shoes and carry sun protection.',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Aravalli Mountain Breeze',
      forecast: 'Clear skies with pleasant hilltop evening breezes'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Morning hours (09:00 AM - 11:30 AM) offer optimal light for photography along the outer battlements.',
    ecoAdvisories: [
      'UNESCO Heritage site: no defacing of 15th-century stone masonry',
      'Ranakpur Temple sacred zone: strictly vegetarian and alcohol-free area; leather items prohibited inside',
      'Support Raika pastoral cooperatives working to preserve indigenous camel breeds'
    ],
    audioGuideText: 'Welcome to Kumbhalgarh, the unconquered mountain citadel of Mewar. Built by Rana Kumbha in the 15th century, its 36-kilometer rampart snakes across the Aravalli hills, wide enough for eight horses to gallop abreast.',
    audioGuideHindi: 'मेवाड़ के अजेय दुर्ग कुंभलगढ़ में आपका स्वागत है। 36 किलोमीटर लंबी इसकी प्राचीर चीन की महान दीवार के बाद दुनिया की दूसरी सबसे लंबी दीवार है। पास में स्थित रणकपुर मंदिर अपनी संगमरमर नक्काशी के लिए विख्यात है।',
    sarthiImpactScore: {
      overallScore: 88,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 25,
        metricText: '25/30: Passive architectural cooling: thick stone walls and natural breezes eliminate mechanical cooling in monuments.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 80,
        metricText: '32/35: Tourism benefits local Mewari guides, artisan stone carvers, and Raika camel pastoralists.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Strict UNESCO heritage guidelines preventing modern commercial constructions within the buffer zone.'
      },
      explanation: 'Kumbhalgarh represents ancient architectural sustainability: passive airflow designs, rainwater harvesting stepwells, and natural stone construction have withstood six centuries with zero environmental degradation.',
      sustainableRecommendations: [
        'Walk through the fortress ramparts instead of using motorized vehicles inside heritage perimeters.',
        'Engage certified local Mewari heritage guides for authentic historical context.',
        'Support local Raika camel wool cooperatives producing eco-friendly textiles.'
      ]
    }
  },

  // ==========================================
  // UTTARAKHAND
  // ==========================================
  {
    id: 'chopta-tungnath',
    name: 'Chopta, Tungnath & Chandrashila',
    hindiName: 'चोपता, तुंगनाथ एवं चंद्रशिला',
    district: 'Rudraprayag',
    state: 'Uttarakhand',
    zone: 'North',
    category: 'Spiritual',
    rating: 4.9,
    reviewsCount: 2950,
    approxCost: 1100,
    bestTime: 'April to November (Snow treks in winter)',
    timings: 'Trek route open 24 Hours; Temple: 06:00 AM – 07:00 PM (May-Nov)',
    entryFee: 'Free entry (Kedarnath Wildlife Sanctuary eco-charge ~₹150)',
    coordinates: [30.4883, 79.2173],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The "Mini Switzerland of India" featuring alpine bugyals, world\'s highest Shiva temple (3,680m), and 360-degree Himalayan summit vistas at Chandrashila.',
    about: 'Situated at 2,680 meters in the Garhwal Himalayas, Chopta is an alpine meadow (bugyal) surrounded by dense rhododendron and deodar forests within the Kedarnath Wildlife Sanctuary. The stone trail ascends to Tungnath, the highest among the sacred Panch Kedar temples and the highest Shiva shrine in the world at 3,680 meters. Continuing further up leads to the summit of Chandrashila (4,000m), offering an awe-inspiring 360-degree panorama of Nanda Devi, Trishul, and Chaukhamba peaks.',
    thingsToDo: [
      'Embark on the 4.5 km sacred stone-paved trek from Chopta to the 1,000-year-old Tungnath Temple',
      'Summit Chandrashila (4,000m) at dawn to witness sunrise over Nanda Devi, Chaukhamba & Kedar Dome',
      'Spot the Himalayan Monal (state bird of Uttarakhand) and musk deer in surrounding oak groves',
      'Camp in eco-friendly solar-powered tented homestays in Duggalbitta',
      'Trek through blooming scarlet rhododendron forests during April and May'
    ],
    nearbyAttractions: ['Deoria Tal Lake', 'Ukhimath Omkareshwar Temple', 'Rohini Bugyal'],
    howToReach: {
      air: 'Jolly Grant Airport Dehradun (220 km) - 6.5 hours',
      rail: 'Rishikesh / Haridwar Railway Station (205 km) with direct connections across India',
      road: 'NH-58 from Rishikesh via Devprayag, Rudraprayag, and Kund'
    },
    localFood: [
      { name: 'Garhwali Kafuli with Mandua Roti', description: 'Thick nutritious gravy of forest spinach and fenugreek paired with finger millet bread' },
      { name: 'Gahat (Kulath) Dal Soup', description: 'High-altitude brown lentil soup known for keeping the body warm in cold mountain weather' }
    ],
    safetyInfo: 'Take rest breaks to prevent altitude sickness; high winds at Chandrashila summit require windproof jackets. Carry hydration flasks.',
    weatherPlaceholder: {
      temp: '11°C',
      condition: 'Crisp Mountain Wind',
      forecast: 'Crystal-clear summit views with chilly evening winds'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Begin the trek at 04:30 AM to reach Chandrashila summit for the breathtaking golden sunrise.',
    ecoAdvisories: [
      'Kedarnath Wildlife Sanctuary plastic-free zone: leave no trash or plastic wrappers along the trail',
      'Strictly avoid walking on fragile alpine meadow moss beds: stay on demarcated stone pathways',
      'Doli/pony operators follow community welfare codes with veterinary check-posts'
    ],
    audioGuideText: 'Welcome to Chopta and the sacred heights of Tungnath. Believed to have been founded by the Pandavas in the Mahabharata, this ancient stone temple stands at 3,680 meters, where prayers have echoed through snow, cloud, and mountain breezes for over a millennium.',
    audioGuideHindi: 'उत्तराखंड के चोपता एवं तुंगनाथ धाम में आपका स्वागत है। 3,680 मीटर की ऊंचाई पर स्थित तुंगनाथ विश्व का सबसे ऊंचा शिव मंदिर है, जिसके ऊपर चंद्रशिला शिखर से नंदा देवी और चौखंभा का विहंगम दृश्य दिखाई देता है।',
    sarthiImpactScore: {
      overallScore: 91,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Strictly non-motorized high-altitude footpath; clean gravity-fed mountain spring water.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 86,
        metricText: '33/35: Local Garhwali village youths manage homestays, trail guiding, and traditional mountain cuisine.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Protected Reserve',
        metricText: '30/35: Forest Department regulated trail within the Kedarnath Musk Deer Wildlife Sanctuary.'
      },
      explanation: 'Chopta-Tungnath combines profound spiritual heritage with low-footprint alpine trekking. Local communities enforce zero-litter norms to safeguard the endangered Himalayan Monal and musk deer habitats.',
      sustainableRecommendations: [
        'Always pack out your personal trash and snacks wrappers; leave nothing behind.',
        'Stay on paved stone trails to prevent soil erosion on delicate alpine bugyals.',
        'Hire local Garhwali guides from Sari or Makku villages to support mountain livelihoods.'
      ]
    }
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund',
    hindiName: 'फूलों की घाटी एवं हेमकुंड साहिब',
    district: 'Chamoli',
    state: 'Uttarakhand',
    zone: 'North',
    category: 'Nature',
    rating: 4.9,
    reviewsCount: 2120,
    approxCost: 1600,
    bestTime: 'July to September (Peak bloom: late July – mid August)',
    timings: 'Entry gate: 07:00 AM – 02:00 PM (Must exit by 05:00 PM, overnight stay prohibited in valley)',
    entryFee: '₹150 for Indian citizens (valid 3 days), ₹600 for foreign nationals',
    coordinates: [30.7280, 79.6053],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO World Heritage alpine floral wonderland with over 500 species of wild Himalayan blooms, framed by snow-capped peaks and glaciers.',
    about: 'Discovered to the modern world by mountaineer Frank S. Smythe in 1931, the Valley of Flowers National Park is a high-altitude Himalayan valley nestled at 3,600 meters in the Nanda Devi Biosphere Reserve. Over 500 endemic species of wild flowers — including the legendary blue poppy, brahma kamal, and cobra lily — carpet the valley floor against backdrop glaciers. To protect this fragile ecology, human habitation and overnight camping are strictly banned inside the core valley: all visitors must return to Ghangaria base by 5:00 PM.',
    thingsToDo: [
      'Trek the pristine 4 km floral trail from Ghangaria into the heart of the UNESCO World Heritage valley',
      'Photograph rare botanical treasures including the blue poppy, Himalayan bellflower, and morina',
      'Visit the memorial grave of British botanist Joan Margaret Legge overlooking the floral meadow',
      'Undertake the spiritual ascent to Hemkund Sahib (4,329m), the world\'s highest Sikh Gurudwara and glacial lake',
      'Enjoy langar (community meal) and warm herbal tea served with selfless devotion at Hemkund Sahib'
    ],
    nearbyAttractions: ['Hemkund Sahib Glacial Lake', 'Badrinath Temple (25 km from Govindghat)', 'Mana — First Indian Village'],
    howToReach: {
      air: 'Jolly Grant Airport Dehradun (290 km)',
      rail: 'Rishikesh Railway Station (275 km) or Haridwar',
      road: 'Drive along NH-58 to Govindghat, followed by a 13 km trek/helicopter to Ghangaria base camp'
    },
    localFood: [
      { name: 'Hot Langar Khichdi & Kheer at Hemkund', description: 'Nourishing lentil rice prepared with selfless love by volunteers in high-altitude freezing temperatures' },
      { name: 'Garhwali Jhangora (Barnyard Millet) Kheer', description: 'Creamy high-altitude organic millet dessert sweetened with jaggery' }
    ],
    safetyInfo: 'Trek requires good stamina. No overnight stays permitted inside the valley: all visitors must exit before 5:00 PM to allow wildlife undisturbed space.',
    weatherPlaceholder: {
      temp: '13°C',
      condition: 'Misty Alpine Meadows',
      forecast: 'Intermittent mountain showers nourishing wildflower blooms'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Late July to mid-August offers peak floral bloom; book Ghangaria accommodations in advance.',
    ecoAdvisories: [
      'Strictly zero single-use plastic: forest checkpost registers plastic bottles with security deposit',
      'Plucking even a single flower or plant specimen carries heavy legal penalties under Wildlife Act',
      'Strict non-motorized zone: all movement inside the valley is purely on foot'
    ],
    audioGuideText: 'Welcome to the Valley of Flowers National Park, a UNESCO World Heritage sanctuary of unmatched beauty. When the snow melts in July, the valley awakens into a living botanical canvas of over 500 wildflower species, watered by the pristine Pushpawati River.',
    audioGuideHindi: 'फूलों की घाटी राष्ट्रीय उद्यान में आपका स्वागत है। नंदा देवी बायोस्फीयर की गोद में 3,600 मीटर की ऊंचाई पर स्थित यह घाटी 500 से अधिक दुर्लभ हिमालयी फूलों की प्रजातियों से आच्छादित रहती है।',
    sarthiImpactScore: {
      overallScore: 97,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 30,
        metricText: '30/30: Strictly 100% foot-walking core zone; zero motorized vehicles, horses, or helicopters inside the floral valley.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 86,
        metricText: '33/35: Local Bhotia and Garhwali porters, guides, and lodge owners in Ghangaria and Govindghat derive seasonal livelihood.'
      },
      conservationSensitivity: {
        score: 34,
        carryingCapacity: 'Protected Reserve',
        metricText: '34/35: Zero human habitation inside the core park; mandatory 5 PM exit policy safeguards snow leopard and musk deer territory.'
      },
      explanation: 'The Valley of Flowers is the gold standard of nature conservation in the Himalayas: by banning all overnight stays and draft animals inside the core zone, humanity has preserved pristine natural evolution.',
      sustainableRecommendations: [
        'Never pluck or touch rare botanical species like the Blue Poppy and Brahma Kamal.',
        'Carry all personal wrappers and trash back to Ghangaria base camp for eco-disposal.',
        'Support local certified mountain guides from Govindghat who understand botanical preservation.'
      ]
    }
  },

  // ==========================================
  // MADHYA PRADESH
  // ==========================================
  {
    id: 'khajuraho-panna',
    name: 'Khajuraho & Panna Tiger Biosphere',
    hindiName: 'खजुराहो एवं पन्ना टाइगर बायोस्फीयर',
    district: 'Chhatarpur & Panna',
    state: 'Madhya Pradesh',
    zone: 'Central',
    category: 'Heritage',
    rating: 4.8,
    reviewsCount: 3200,
    approxCost: 1100,
    bestTime: 'October to March',
    timings: 'Temples: Sunrise to Sunset (06:00 AM – 06:00 PM)',
    entryFee: 'Western Group of Temples ₹40 for Indian adults, ₹600 for foreigners',
    coordinates: [24.8318, 79.9199],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO Chandela sandstone temple marvels celebrated for intricate stone carvings, paired with the successful tiger rewilding of Panna National Park.',
    about: 'Built between 950 and 1050 CE by the Chandela dynasty, the Khajuraho Group of Monuments represents the pinnacle of Indian temple architecture and stone craftsmanship. Just 25 km away lies the Panna Biosphere Reserve along the Ken River, globally celebrated as one of wildlife history\'s greatest conservation triumphs, where tigers were successfully re-established after local extinction through visionary forest management and community wardens.',
    thingsToDo: [
      'Marvel at the magnificent architectural balance of the Kandariya Mahadeva Temple',
      'Attend the evening light & sound show narrated by Bollywood legend Amitabh Bachchan',
      'Take a morning boat safari on the pristine Ken River in Panna Tiger Reserve to spot gharials',
      'Explore the Pandav Falls and Raneh Falls canyon carved through multi-colored crystalline granite',
      'Visit local stone-carver workshops to observe ancient chiseling techniques passed through generations'
    ],
    nearbyAttractions: ['Panna Tiger Reserve', 'Raneh Falls Grand Canyon of Ken', 'Pandav Falls'],
    howToReach: {
      air: 'Khajuraho Airport (HJR) (5 km from temple complex) with daily flights',
      rail: 'Khajuraho Railway Station (8 km) or Mahoba (75 km)',
      road: 'NH-39 connecting Jhansi, Orchha, Satna, and Khajuraho'
    },
    localFood: [
      { name: 'Bundelkhandi Thali & Moong Dal Halwa', description: 'Rustic slow-cooked lentils with whole wheat breads, fresh churned butter, and aromatic ghee halwa' },
      { name: 'Panna Keeda & Aam Panna Drink', description: 'Refreshing roasted raw mango beverage infused with cumin and black salt' }
    ],
    safetyInfo: 'Hire only government-certified guides with official photo ID badges displayed outside the Western Group gate.',
    weatherPlaceholder: {
      temp: '25°C',
      condition: 'Warm Sun & Historic Breeze',
      forecast: 'Pleasant winter sunshine ideal for stone photography'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Sunrise hours (06:30 AM - 08:30 AM) offer glorious amber light on the sandstone carvings with minimal crowds.',
    ecoAdvisories: [
      'Archaeological Survey of India protected monuments: strictly do not touch or lean on delicate sculptures',
      'Panna Tiger Reserve eco-code: maintain silence during boat and gypsy safaris along the Ken River',
      'Support local Bundelkhandi terracotta and brass artisan cooperatives'
    ],
    audioGuideText: 'Welcome to Khajuraho, where ancient stone speaks of celestial musicians, philosophers, warriors, and everyday human joy. Carved out of golden sandstone by the Chandela rulers over a thousand years ago, these temples stand as a timeless celebration of life in all its dimensions.',
    audioGuideHindi: 'चंदेल राजाओं की ऐतिहासिक नगरी खजुराहो में आपका स्वागत है। 1,000 वर्ष पुराने ये बलुआ पत्थर के मंदिर भारतीय मूर्तिकला और वास्तुकला के सर्वोच्च शिखर का प्रतिनिधित्व करते हैं। पास ही पन्ना राष्ट्रीय उद्यान वन्यजीव संरक्षण की अनूठी मिसाल है।',
    sarthiImpactScore: {
      overallScore: 89,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Bicycle-friendly flat terrain connecting temple complexes; direct railway terminal.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 82,
        metricText: '32/35: Local Bundelkhandi guides, stone sculptors, and village eco-safari drivers directly benefit from tourist spend.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Panna\'s world-renowned tiger recovery program balances buffer-zone village livelihood with wildlife corridor protection.'
      },
      explanation: 'Khajuraho and Panna demonstrate the harmony between ancient cultural heritage and modern ecological restoration: UNESCO monuments are protected by careful zoning, while the Ken River sustains re-introduced tiger populations.',
      sustainableRecommendations: [
        'Rent a bicycle to explore the Eastern and Southern temple groups at a leisurely, zero-emission pace.',
        'Take an authorized Ken River boat safari to observe endangered gharials without disturbing their river banks.',
        'Buy miniature stone souvenirs directly from certified artisan cooperatives near the Jain museum.'
      ]
    }
  },
  {
    id: 'kanha-national-park',
    name: 'Kanha Tiger Reserve & Baiga Trails',
    hindiName: 'कान्हा राष्ट्रीय उद्यान एवं बैगा संस्कृति',
    district: 'Mandla & Balaghat',
    state: 'Madhya Pradesh',
    zone: 'Central',
    category: 'Wildlife',
    rating: 4.9,
    reviewsCount: 2750,
    approxCost: 2000,
    bestTime: 'October to June (Peak sightings: March – May)',
    timings: 'Safari: 06:00 AM – 10:30 AM & 02:30 PM – 05:30 PM (Closed Wednesday afternoons)',
    entryFee: 'Core Gypsy Safari ~₹7,500/vehicle (up to 6 persons including guide and permit)',
    coordinates: [22.3345, 80.6115],
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The majestic Sal and bamboo wilderness that inspired Rudyard Kipling\'s Jungle Book, home to the Royal Bengal Tiger and the revived hard-ground Barasingha.',
    about: 'Spanning 940 sq km of core tiger habitat, Kanha National Park is one of Asia\'s finest wildlife reserves. It is celebrated globally for bringing the endangered hard-ground Barasingha (swamp deer) back from the brink of extinction (from only 66 individuals in 1970 to over 1,000 today). Surrounding the reserve live the indigenous Baiga and Gond tribes, renowned for their intimate forest knowledge, geometric tattoo art (Godna), and traditional mud houses.',
    thingsToDo: [
      'Dawn jeep safari through Kanha\'s expansive maidans (meadows) to spot Royal Bengal tigers and Barasingha',
      'Observe herds of gaur (Indian bison), leopards, dholes (wild dogs), and over 300 bird species',
      'Walk through an authentic Baiga tribal village accompanied by a certified community naturalist',
      'Sunset viewpoint at Bamni Dadar overlooking the vast meandering canopy of the Banjar valley',
      'Visit the Kanha Museum to learn about scientific grassland regeneration and species re-introduction'
    ],
    nearbyAttractions: ['Bandhavgarh National Park', 'Pench Tiger Reserve', 'Amarkantak Sacred Source of Narmada'],
    howToReach: {
      air: 'Jabalpur Airport (160 km) - 3.5 hours, or Nagpur International Airport (260 km)',
      rail: 'Jabalpur Railway Station (160 km) or Gondia Junction (145 km)',
      road: 'Excellent state highway network connecting Jabalpur, Mandla, and Kanha gates (Khatia & Mukki)'
    },
    localFood: [
      { name: 'Baiga Kodo-Kutki Millet Khichdi', description: 'Ancient indigenous small millets harvested by tribal farmers, cooked with wild forest vegetables' },
      { name: 'Mahua Flower Jam & Desi Clay Pot Curry', description: 'Fragrant sweet reduction of wild Mahua blossoms paired with village earthen pot cooked lentil dishes' }
    ],
    safetyInfo: 'Never step out of gypsy vehicles inside the park. Wear neutral-toned clothing (khaki, olive, brown) to avoid startling animals.',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Morning Mist & Golden Grasslands',
      forecast: 'Crisp dawn morning giving way to warm afternoon sunshine'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Book safari permits 60-90 days in advance on the official MP Forest portal: slots are strictly limited to prevent vehicular overcrowding.',
    ecoAdvisories: [
      'Strict carrying capacity: limited gypsy permits per zone per day to safeguard animal movement corridors',
      'Zero single-use plastic inside core zones: tourists must carry reusable water bottles',
      'Support the Baiga tribal community eco-guides: 100% of village walk revenue goes to the tribal development council'
    ],
    audioGuideText: 'Welcome to Kanha National Park, the timeless heart of India\'s Sal forests. Here, amidst sweeping open maidans and ancient bamboo groves, visionary conservation brought the Barasingha back to life and preserved the Royal Bengal tiger for future generations.',
    audioGuideHindi: 'कान्हा राष्ट्रीय उद्यान में आपका स्वागत है। मोगली और जंगल बुक की प्रेरणा रहा यह उद्यान बाघों, दुर्लभ बारहसिंगा और बैगा जनजातीय संस्कृति का विश्वविख्यात संगम है।',
    sarthiImpactScore: {
      overallScore: 94,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Strictly regulated safari routes; solar-powered forest guard camps and eco-lodges.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 88,
        metricText: '34/35: Over 70% of park naturalists and lodge staff belong to local Gond and Baiga forest-dwelling families.'
      },
      conservationSensitivity: {
        score: 33,
        carryingCapacity: 'Protected Reserve',
        metricText: '33/35: Legendary habitat management: Asia\'s most successful Barasingha and tiger recovery program.'
      },
      explanation: 'Kanha is a global benchmark for wildlife conservation: human resettlement out of core zones was matched with long-term employment of indigenous communities in tourism and anti-poaching squads.',
      sustainableRecommendations: [
        'Book only through eco-certified lodges that employ local Gond and Baiga naturalists.',
        'Take a guided village culture walk to support tribal schools and women\'s Godna craft cooperatives.',
        'Obey the speed and distance limits strictly during safaris to give tigers and deer unhurried space.'
      ]
    }
  },

  // ==========================================
  // TAMIL NADU
  // ==========================================
  {
    id: 'chettinad',
    name: 'Chettinad Heritage & Athangudi',
    hindiName: 'चेट्टीनाड धरोहर एवं अथांगुड़ी',
    district: 'Sivaganga',
    state: 'Tamil Nadu',
    zone: 'South',
    category: 'Culture',
    rating: 4.8,
    reviewsCount: 1750,
    approxCost: 1100,
    bestTime: 'October to March',
    timings: 'Heritage Mansions: 09:00 AM – 06:00 PM',
    entryFee: 'Mansion visit tickets ₹50-₹100/mansion',
    coordinates: [10.0760, 78.7844],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Network of 73 heritage villages famed for grand palatial mansions, handmade Athangudi vegetable-dye tiles, and legendary aromatic cuisine.',
    about: 'Spread across 73 villages in southern Tamil Nadu, Chettinad is the historic homeland of the Nattukottai Chettiars, an enterprising merchant community who traded across Burma, Ceylon, and Southeast Asia in the 19th and 20th centuries. Their grand palatial mansions feature Burmese teak pillars, Belgian crystal mirrors, Italian marble floors, and indigenous Athangudi tiles handmade from local sand, cement, and vegetable dyes. The passive ventilation of these courtyards keeps interiors naturally cool during hot summers without artificial air conditioning.',
    thingsToDo: [
      'Explore the opulent 1,000-window Chettinad Palace and Kanadukathan heritage mansions',
      'Watch master artisans create handmade, sun-dried Athangudi floral floor tiles without electric kilns',
      'Savor an authentic 18-course Chettinad feast served on fresh banana leaves',
      'Cycle through the quiet heritage streets of Kanadukathan and Kottaiyur',
      'Shop for traditional handwoven Kandangi cotton sarees and antique brass cookware'
    ],
    nearbyAttractions: ['Madurai Meenakshi Temple (85 km)', 'Thanjavur Brihadeeswara Temple (90 km)', 'Pudukkottai Rock-Cut Temples'],
    howToReach: {
      air: 'Tiruchirappalli (Trichy) International Airport (85 km) - 1.5 hours by cab, or Madurai Airport (90 km)',
      rail: 'Karaikudi Junction (12 km) with direct trains from Chennai, Bengaluru, and Coimbatore',
      road: 'Well-maintained 4-lane national highways connecting Trichy, Madurai, and Karaikudi'
    },
    localFood: [
      { name: 'Chettinad Kuzhi Paniyaram & Chutneys', description: 'Crispy fried fermented rice-lentil batter balls served with four varieties of fresh stone-ground chutneys' },
      { name: 'Kandarappam & Seeyam', description: 'Heritage sweet rice-jaggery delicacies slow-fried in cold-pressed sesame oil' }
    ],
    safetyInfo: 'Chettinad is peaceful and pedestrian-friendly. Carry sun hats for mid-afternoon street walks.',
    weatherPlaceholder: {
      temp: '27°C',
      condition: 'Sunny Heritage Breeze',
      forecast: 'Pleasant evening courtyard breezes'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Atmospheric and peaceful all year: ideal for slow travel, architectural studies, and culinary exploration.',
    ecoAdvisories: [
      'Preserve architectural heritage: support adaptive reuse of ancestral mansions as eco-heritage homestays',
      'Athangudi tiles are 100% handmade and sun-cured: support artisanal workshops to prevent loss of this craft',
      'Dine on traditional banana leaves: biodegradable dining with zero plastic tableware'
    ],
    audioGuideText: 'Welcome to Chettinad, where merchant heritage created a grand architectural symphony. Step through carved Burmese teak doorways into open central courtyards tiled with handmade Athangudi vegetable-dye tiles, designed to capture sunlight, rain, and cool evening air.',
    audioGuideHindi: 'तमिलनाडु के चेट्टीनाड में आपका स्वागत है। 73 गांवों में फैले इस क्षेत्र की 1,000 खिड़कियों वाली ऐतिहासिक हवेलियां, अथांगुड़ी हस्तनिर्मित टाइलें और विश्वविख्यात चेट्टीनाड व्यंजन भारतीय संस्कृति की अनूठी धरोहर हैं।',
    sarthiImpactScore: {
      overallScore: 90,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Vernacular courtyard architecture provides passive natural cooling; flat cycling streets.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 83,
        metricText: '32/35: Tourism revives hereditary tile artisans, Kandangi saree weavers, and local chef families.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '30/35: Adaptive restoration of historic mansions into heritage boutique stays prevents demolition.'
      },
      explanation: 'Chettinad demonstrates sustainable heritage conservation: by converting neglected 150-year-old mansions into homestays, the community finances historic architectural preservation while providing green rural employment.',
      sustainableRecommendations: [
        'Stay in restored heritage mansions run by Chettiar families rather than modern concrete hotels.',
        'Order handloom Kandangi cotton sarees directly from the Chettinad Weavers Cooperative in Karaikudi.',
        'Visit an Athangudi tile workshop to support sun-dried artisanal craftsmanship.'
      ]
    }
  },
  {
    id: 'nilgiris-coonoor',
    name: 'Nilgiris, Coonoor & Toda Trails',
    hindiName: 'नीलगिरि, कुन्नूर एवं तोड़ा संस्कृति',
    district: 'Nilgiris',
    state: 'Tamil Nadu',
    zone: 'South',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 2890,
    approxCost: 1300,
    bestTime: 'October to May',
    timings: 'Heritage Toy Train: 07:10 AM from Mettupalayam; Viewpoints: 08:00 AM – 06:00 PM',
    entryFee: 'Toy Train ~₹200-₹500 (book in advance); Viewpoints ₹20-₹40',
    coordinates: [11.3530, 76.7959],
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO Mountain Toy Train, sacred Shola cloud forest ecology, organic high-grown tea gardens, and indigenous Toda tribal embroidery.',
    about: 'Rising sharply above the plains to over 2,000 meters in the Western Ghats, the Nilgiris (Blue Mountains) feature a unique ecosystem of high-altitude Shola grasslands and stunted cloud forests. The UNESCO World Heritage Nilgiri Mountain Railway operates the historic metre-gauge steam rack-and-pinion locomotive. On the upper plateau live the indigenous Toda pastoral community, renowned for their barrel-vaulted bamboo-thatch temples and distinctive GI-tagged black-and-red Toda embroidery (Pukhoor).',
    thingsToDo: [
      'Ride the UNESCO Nilgiri Mountain Railway Toy Train crossing 250 bridges and 16 tunnels',
      'Walk through ancient Shola forest nature trails with certified local tribal naturalists',
      'Visit a traditional Toda tribal hamlet (Mund) and observe barrel-vaulted temple architecture',
      'Tour high-elevation bio-dynamic tea factories in Coonoor and participate in tea-tasting cuppings',
      'Hike to Dolphin\'s Nose and Lamb\'s Rock viewpoints overlooking the deep Catherine Falls gorge'
    ],
    nearbyAttractions: ['Ooty Botanical Gardens & Doddabetta Peak', 'Mukurthi National Park', 'Pykara Lake & Falls'],
    howToReach: {
      air: 'Coimbatore International Airport (CJB) (70 km) - 2.5 hours scenic drive up the Mettupalayam ghat',
      rail: 'Mettupalayam Railway Station (Rack Railway start) or Coimbatore Junction (75 km)',
      road: 'Scenic 14-hairpin mountain highway from Mettupalayam to Coonoor and Ooty'
    },
    localFood: [
      { name: 'Toda Buffalo Butter & Curd Rice', description: 'Rich nutritious dairy prepared from sacred indigenous Toda long-horned water buffalo milk' },
      { name: 'Nilgiri Tea & Homemade Spiced Chocolates', description: 'Fresh aromatic high-grown orthodox black tea paired with artisanal cocoa' }
    ],
    safetyInfo: 'The Nilgiris has a strict ban on single-use plastic bottles and bags across the entire district: carry reusable containers. Mountain trains sell out weeks in advance.',
    weatherPlaceholder: {
      temp: '16°C',
      condition: 'Crisp Mountain Breeze',
      forecast: 'Cool highland temperatures with fragrant eucalyptus mist'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Coonoor and Kotagiri offer far more peaceful, eco-conscious experiences than congested central Ooty.',
    ecoAdvisories: [
      'Strict Nilgiris plastic ban: single-use plastic bottles, covers, and plates are legally prohibited in the district',
      'Do not touch or disturb the sacred Toda buffalo temples: respect indigenous religious sanctity',
      'Shola forest conservation: stay strictly on designated walking tracks to prevent trampling of rare orchids'
    ],
    audioGuideText: 'Welcome to the Nilgiri Blue Mountains, a UNESCO Biosphere Reserve where ancient Shola cloud forests meet the historic steam whistles of the Nilgiri Mountain Railway. Here, the pastoral Toda community has safeguarded mountain grasslands for generations.',
    audioGuideHindi: 'नीलगिरि की नीली पहाड़ियों में आपका स्वागत है। यूनेस्को टॉय ट्रेन, शोला वनों की जैव-विविधता और तोड़ा जनजाति की पारंपरिक कशीदाकारी (पुखूर) इस पर्वतीय क्षेत्र को अत्यंत पावन और अनूठा बनाते हैं।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: UNESCO heritage electric/steam railway network; district-wide ban on single-use plastics.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 84,
        metricText: '33/35: Directly supports Toda women\'s embroidery cooperatives (Shalom-Toda Craft) and small tea grower cooperatives.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Stringent environmental regulations in place since 2000 banning plastic packaging and toxic agrochemicals.'
      },
      explanation: 'The Nilgiris district is one of India\'s leading eco-districts: with strict zero-plastic legislation and UNESCO World Heritage railway preservation, it balances historic tourism with watershed conservation.',
      sustainableRecommendations: [
        'Ride the historic Nilgiri Mountain Railway to cut vehicular carbon emissions up the ghats.',
        'Purchase authentic GI-tagged Toda hand-embroidered shawls directly from certified tribal cooperatives.',
        'Choose tea from smallholder organic cooperative gardens in Kotagiri and Coonoor.'
      ]
    }
  },

  // ==========================================
  // LADAKH
  // ==========================================
  {
    id: 'hemis-nubra',
    name: 'Hemis, Nubra & Pangong Eco-Trails',
    hindiName: 'हेमिस, नुब्रा एवं पैंगोंग इको-ट्रेल्स',
    district: 'Leh',
    state: 'Ladakh',
    zone: 'North',
    category: 'Wildlife',
    rating: 4.9,
    reviewsCount: 3410,
    approxCost: 2200,
    bestTime: 'May to September',
    timings: 'Monasteries: 07:00 AM – 06:00 PM; Khardung La open daylight hours',
    entryFee: 'Ladakh Environmental Fee ₹350, Monastery entry ₹50-₹100',
    coordinates: [33.9126, 77.7064],
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'High-altitude cold desert trans-Himalayan kingdom featuring snow leopard sanctuaries, solar homestays, and high-altitude glacial lakes.',
    about: 'Perched over 3,500 meters amidst the towering Karakoram and Zanskar ranges, Ladakh is a world-leading model in high-altitude cold desert sustainability. Hemis National Park is the undisputed snow leopard capital of the world, where former shepherd communities now act as protectors and homestay hosts under the Snow Leopard Conservancy India Trust. In the Nubra Valley, double-humped Bactrian camels roam white sand dunes framed by snow-capped peaks, powered by 100% solar micro-grids.',
    thingsToDo: [
      'Winter wildlife tracking expedition in Hemis National Park looking for wild snow leopards and blue sheep (Bharal)',
      'Cross the Khardung La Pass (5,359m) into the breathtaking dune-valleys of Nubra',
      'Walk alongside double-humped Bactrian camels on the white sand dunes of Hunder',
      'Gaze at the shifting turquoise hues of Pangong Tso lake at 4,225 meters',
      'Attend early morning butter-lamp chanting at the historic 17th-century Hemis Gompa'
    ],
    nearbyAttractions: ['Pangong Tso Lake', 'Thiksey & Diskit Monasteries', 'Tso Moriri Biosphere Reserve'],
    howToReach: {
      air: 'Kushok Bakula Rimpochee Airport Leh (IXL) - direct flights from Delhi, Mumbai, Srinagar',
      rail: 'Nearest railhead is Jammu Tawi (700 km) or Chandigarh',
      road: 'Legendary Manali-Leh Highway (open June-Sept) or Srinagar-Leh Highway via Zoji La'
    },
    localFood: [
      { name: 'Ladakhi Skyu & Butter Tea (Gur Gur Chai)', description: 'Hand-rolled wheat pasta simmered in root vegetable broth, paired with warm yak-butter salted tea' },
      { name: 'Buckwheat Khambir with Apricot Jam', description: 'Traditional sourdough whole-wheat bread paired with sun-dried organic Raktsey Karpo apricots' }
    ],
    safetyInfo: 'Mandatory 48-hour rest upon arrival in Leh for acclimatization. Altitude Sickness (AMS) can be life-threatening without gradual acclimation.',
    weatherPlaceholder: {
      temp: '15°C',
      condition: 'Brilliant High Altitude Sun',
      forecast: 'Clear blue skies with thin, crisp mountain atmosphere'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Shoulder months (May and September) offer golden poplar trees, serene monasteries, and minimal vehicle congestion.',
    ecoAdvisories: [
      'Ladakh Ecological Development Group (LEDeG) code: use dry-composting Ladakhi toilets to save precious desert water',
      'Strict ban on driving vehicles onto the shores or fragile wetland beds of Pangong Tso and Tso Moriri',
      'Refill drinking water at certified ozone-water refill stations in Leh instead of buying single-use bottles'
    ],
    audioGuideText: 'Welcome to the land of high passes, Ladakh. In this stark and glorious trans-Himalayan kingdom, indigenous Buddhist and pastoral communities have thrived on glacial meltwater, solar architecture, and deep spiritual reverence for all living beings.',
    audioGuideHindi: 'लद्दाख की पावन भूमि में आपका स्वागत है। 11,500 फीट से अधिक की ऊंचाई पर स्थित हेमिस राष्ट्रीय उद्यान स्नो लेपर्ड का विश्व प्रसिद्ध घर है। यहां सौर-ऊर्जा संचालित होमस्टे और बौद्ध मठ जीवन को नई दिशा देते हैं।',
    sarthiImpactScore: {
      overallScore: 95,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 29,
        metricText: '29/30: Passive solar trombe-wall architecture heats rooms; village solar micro-grids replace diesel generators.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 90,
        metricText: '34/35: Himalayan Homestay model: 90% of tourist revenue stays with village women in Rumbak, Hunder, and Hemis.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Protected Reserve',
        metricText: '32/35: Snow Leopard Conservancy India Trust has transformed former predator conflicts into community conservation income.'
      },
      explanation: 'Ladakh is an international legend in high-altitude sustainability: solar trombe-wall architecture keeps homes warm without firewood, and community homestays safeguard snow leopards.',
      sustainableRecommendations: [
        'Stay in community homestays that use dry-composting toilets to protect Ladakh\'s fragile water table.',
        'Never drive vehicles off designated tracks near Pangong Tso to protect rare black-necked crane nesting grounds.',
        'Buy authentic certified Ladakhi Pashmina shawls and dried apricots directly from local cooperatives in Leh.'
      ]
    }
  },

  // ==========================================
  // ODISHA
  // ==========================================
  {
    id: 'raghurajpur',
    name: 'Raghurajpur Heritage Craft Village',
    hindiName: 'रघुराजपुर धरोहर शिल्प ग्राम',
    district: 'Puri',
    state: 'Odisha',
    zone: 'East',
    category: 'Culture',
    rating: 4.9,
    reviewsCount: 1980,
    approxCost: 800,
    bestTime: 'October to March',
    timings: '08:00 AM – 06:30 PM',
    entryFee: 'Free entry to the heritage village',
    coordinates: [19.8833, 85.8167],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'India\'s first certified Heritage Crafts Village where every single household practices GI-tagged Pattachitra painting and Gotipua dance.',
    about: 'Situated amidst coconut, palm, and betel nut groves on the banks of the sacred Bhargabi River near Puri, Raghurajpur is a living open-air museum. Every single one of its 140 households is an active family of Chitrakaras (traditional painters). Renowned for GI-tagged Pattachitra (cloth-scroll paintings made with natural stone pigments and tamarind seed glue), palm-leaf engravings (Tala Pattachitra), and cow-dung papier-mâché masks, the village is also the historic cradle of Gotipua dance — the ancient acrobatic precursor to classical Odissi.',
    thingsToDo: [
      'Walk through the dual-row village street where every mud-and-brick house is adorned with vibrant mythological murals',
      'Sit alongside master Chitrakaras to watch them grind conch shells and mineral stones into natural pigments',
      'Watch a spellbinding performance of classical Gotipua acrobatic dance at the village Gurukul',
      'Try your hand at etching intricate scenes onto dried palm leaves with a fine iron stylus',
      'Buy certified authentic Pattachitra artwork directly from the artisan who created it'
    ],
    nearbyAttractions: ['Puri Jagannath Temple (14 km)', 'Konark Sun Temple (35 km)', 'Chilika Lake Mangalajodi'],
    howToReach: {
      air: 'Biju Patnaik International Airport Bhubaneswar (50 km) - 1 hour via NH-316',
      rail: 'Puri Railway Station (14 km) or Bhubaneswar Junction (50 km)',
      road: 'Located just 1.5 km off the Bhubaneswar-Puri National Highway (NH-316)'
    },
    localFood: [
      { name: 'Authentic Chhena Poda', description: 'Caramelized roasted cottage cheese cake baked in Sal leaves over hot charcoal embers' },
      { name: 'Odia Dalma with Rice', description: 'Wholesome lentil stew simmered with raw papaya, pumpkin, and roasted cumin ghee tadka' }
    ],
    safetyInfo: 'The village is very welcoming. Always ask permission before photographing artists while they are working on fine-line detailing.',
    weatherPlaceholder: {
      temp: '26°C',
      condition: 'Tropical Coastal Sun',
      forecast: 'Pleasant winter coastal breeze'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Visiting between 10:00 AM and 03:00 PM allows unhurried studio conversations with national-award-winning master artists.',
    ecoAdvisories: [
      '100% natural organic materials: artists use only stone pigments, conch shells, soot, and tamarind seed glue',
      'Direct artisan economy: buy straight from the creators to bypass commercial middlemen',
      'Keep village walkways clean: dispose of all waste in village entrance bins'
    ],
    audioGuideText: 'Welcome to Raghurajpur, where art is not a profession but a way of life. For over a thousand years, the Chitrakara families of this village have kept alive the divine scrolls of Lord Jagannath, painting stories on hand-treated cloth and dried palm leaves.',
    audioGuideHindi: 'ओडिशा के विश्वविख्यात रघुराजपुर धरोहर शिल्प ग्राम में आपका स्वागत है। 140 परिवारों के इस गांव में हर घर चित्रकार का है, जहां जीआई-टैग प्राप्त पट्टचित्र, ताड़पत्र नक्काशी और गोटीपुआ नृत्य की पावन परंपरा जीवित है।',
    sarthiImpactScore: {
      overallScore: 94,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Compact pedestrian-only heritage street; zero industrial chemical emissions in art creation.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 35,
        economicRetentionPct: 94,
        metricText: '35/35: 94% of artwork purchase value goes directly into the hands of resident master artisans and their families.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Uses 100% biodegradable organic ingredients: cotton cloth, tamarind seed gum, conch shell white, and natural mineral stones.'
      },
      explanation: 'Raghurajpur is an exemplary cultural eco-village: every product is 100% organic, hand-crafted without toxic chemicals, and directly sustains three generations of indigenous artists living under one roof.',
      sustainableRecommendations: [
        'Purchase authentic Pattachitra scrolls directly from the artist inside their home studio.',
        'Contribute to the Gotipua Dance Gurukul to help train the next generation of young dancers.',
        'Refrain from bargaining aggressively on handmade pieces that take up to four months of labor.'
      ]
    }
  },
  {
    id: 'chilika-mangalajodi',
    name: 'Chilika Lake & Mangalajodi Eco-Tourism',
    hindiName: 'चिलिका झील एवं मंगलाजोड़ी इको-टूरिज्म',
    district: 'Khurda & Ganjam',
    state: 'Odisha',
    zone: 'East',
    category: 'Wildlife',
    rating: 4.8,
    reviewsCount: 2210,
    approxCost: 950,
    bestTime: 'November to February (Peak migratory bird season)',
    timings: 'Boat excursions: 06:00 AM – 05:00 PM',
    entryFee: 'Wetland entry free; Non-motorized country boat with community spotter ~₹1,200/boat',
    coordinates: [19.9114, 85.4269],
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Asia\'s largest brackish water lagoon and a global conservation legend where former bird poachers became world-class bird protectors and guides.',
    about: 'Spreading across over 1,100 sq km, Chilika Lake is Asia\'s largest brackish lagoon and a designated Ramsar Wetland of International Importance. At the freshwater edge lies Mangalajodi, celebrated globally as one of wildlife conservation\'s greatest human turnaround stories: in the late 1990s, local poachers who hunted thousands of migratory birds were persuaded by conservationists to form the \'Sri Sri Mahavir Pakshi Suraksha Samiti\'. Today, these former poachers use their extraordinary tracking skills to steer silent hand-poled wooden catamarans, guiding birdwatchers right up to over 150 species of migratory waterfowl without a single drop of engine fuel or noise.',
    thingsToDo: [
      'Take an early dawn silent country-boat safari guided by a former poacher turned master naturalist',
      'Photograph over 150 species of migratory waterfowl including Northern Pintails, Purple Swamphens, and Black-tailed Godwits',
      'Spot the critically endangered Irrawaddy dolphins near the Satapada outer channel',
      'Visit the historic Kalijai Temple island shrine in the blue expanse of the central lagoon',
      'Taste fresh freshwater lagoon mud crabs and prawns prepared with Odia mustard spices'
    ],
    nearbyAttractions: ['Satapada Dolphin Sanctuary', 'Kalijai Temple Island', 'Puri Heritage Beach (55 km)'],
    howToReach: {
      air: 'Biju Patnaik Airport Bhubaneswar (70 km) - 1.5 hours',
      rail: 'Mukteswar / Balugaon Railway Station (15 km) on Howrah-Chennai line',
      road: 'NH-16 connects Bhubaneswar and Balugaon with smooth 4-lane expressway'
    },
    localFood: [
      { name: 'Chilika Kankada (Crab) Curry', description: 'Fresh sweet lagoon crab cooked in rich Odia ginger-garlic and stone-ground garam masala' },
      { name: 'Chhena Jhili of Nimapada', description: 'Delicate fresh cottage cheese spirals soaked in light cardamom sugar syrup' }
    ],
    safetyInfo: 'Wear life jackets on all boat rides. Telephoto lenses (300mm+) are recommended for ethical long-range bird photography.',
    weatherPlaceholder: {
      temp: '24°C',
      condition: 'Gentle Lagoon Breeze',
      forecast: 'Crisp morning mist over mirror-like waters'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Dawn boat rides (06:00 AM - 08:30 AM) offer the most active bird feeding behavior and magnificent morning reflections.',
    ecoAdvisories: [
      'Strictly motorized boats barred in Mangalajodi marsh: only hand-poled wooden country boats permitted',
      'Maintain total silence: loud noises disturb flocking migratory birds flying from Siberia and Central Asia',
      'Zero plastic policy inside the wetland sanctuary waters'
    ],
    audioGuideText: 'Welcome to Mangalajodi on the shores of Chilika Lake. What was once a tragic hunting marsh is today a peaceful sanctuary of life, where former poachers have become proud protectors, guiding travelers on silent wooden boats through clouds of migratory birds.',
    audioGuideHindi: 'चिलिका झील के मंगलाजोड़ी में आपका स्वागत है। कभी शिकारियों का गढ़ रहा यह आर्द्रभूमि क्षेत्र आज विश्व के सबसे बड़े संरक्षण चमत्कारों में गिना जाता है, जहां साइबेरिया से आने वाले लाखों प्रवासी पक्षियों की रक्षा स्थानीय ग्रामीण करते हैं।',
    sarthiImpactScore: {
      overallScore: 96,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 30,
        metricText: '30/30: 100% human-poled silent wooden country catamarans; zero fossil fuels or noise pollution in bird zones.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 91,
        metricText: '34/35: 91% of boat guide fees go directly to the village Bird Protection Committee and reformed poacher families.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Protected Reserve',
        metricText: '32/35: Global Ramsar wetland sanctuary with strict caps on number of boats allowed in marsh channels at one time.'
      },
      explanation: 'Mangalajodi Chilika is a world-class triumph of eco-tourism: transforming destructive wildlife hunting into dignified, sustainable community livelihoods that protect over 300,000 migratory waterfowl each winter.',
      sustainableRecommendations: [
        'Book your boat through the Sri Sri Mahavir Pakshi Suraksha Samiti to directly support reformed poachers.',
        'Choose silent hand-poled catamarans at Mangalajodi over motorized diesel launches at Satapada.',
        'Never request boatmen to flush or startle resting birds into flight for photography.'
      ]
    }
  },

  // ==========================================
  // KARNATAKA
  // ==========================================
  {
    id: 'hampi-heritage',
    name: 'Hampi Heritage & Anegundi',
    hindiName: 'हम्पी धरोहर एवं अनेगुंडी',
    district: 'Vijayanagara',
    state: 'Karnataka',
    zone: 'South',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 3820,
    approxCost: 1050,
    bestTime: 'October to March',
    timings: '06:00 AM – 06:00 PM',
    entryFee: 'Vittala Temple & Zenana Enclosure ₹40 for Indian adults, ₹600 for foreigners',
    coordinates: [15.3350, 76.4600],
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO World Heritage 14th-century Vijayanagara imperial capital ruins set amidst a surreal granite boulder landscape and Tungabhadra river otter sanctuary.',
    about: 'Covering 4,100 hectares along the Tungabhadra River, Hampi was the capital of the flourishing Vijayanagara Empire in the 14th to 16th centuries — in its heyday, the second-largest city in the medieval world after Beijing. Its architectural marvels include the stone chariot at Vittala Temple, the Virupaksha Temple with active worship since the 7th century, and the Lotus Mahal. Across the river lies Anegundi, an eco-village cradle of the empire where the Kishkinda Trust trains local women in sustainable banana-fiber crafts and heritage homestays.',
    thingsToDo: [
      'Cycle through the monumental ruins of the Sacred Centre and Royal Enclosure at sunrise',
      'Marvel at the iconic monolithic Stone Chariot and musical pillars at Vittala Temple',
      'Cross the Tungabhadra River on a traditional circular woven bamboo coracle boat',
      'Climb the 575 stone stairs of Anjanadri Hill (birthplace of Lord Hanuman) for panoramic sunset views',
      'Visit the Kishkinda Trust in Anegundi to see eco-friendly banana-fiber weaving and recycled paper art'
    ],
    nearbyAttractions: ['Tungabhadra Otter Sanctuary', 'Daroji Sloth Bear Sanctuary (15 km)', 'Pattadakal & Badami Caves'],
    howToReach: {
      air: 'Jindal Vijayanagar Airport Bellary/Toranagallu (35 km) or Hubli Airport (145 km)',
      rail: 'Hosapete Junction (HPT) (12 km away) with direct daily express trains from Bengaluru, Goa, Hyderabad',
      road: 'Smooth 4-lane highway NH-50 connecting Bengaluru (340 km) and Hyderabad (370 km)'
    },
    localFood: [
      { name: 'Karnataka Jolada Rotti Oota', description: 'Nutritious sorghum flatbreads served with stuffed brinjal curry (Ennegai), spicy peanut chutney, and buttermilk' },
      { name: 'Bisi Bele Bath & Filter Coffee', description: 'Comforting rice-lentil dish cooked with tamarind, vegetables, and aromatic spices' }
    ],
    safetyInfo: 'The granite boulders retain heat: wear sun hats and carry water. Electric buggies are available for seniors between the parking area and Vittala Temple.',
    weatherPlaceholder: {
      temp: '26°C',
      condition: 'Sunny Boulder Canopy',
      forecast: 'Warm sunshine with cooling river breezes at dusk'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Early mornings (06:00 AM - 09:00 AM) and late afternoons (04:00 PM - 06:30 PM) offer magical golden lighting on the boulder monuments.',
    ecoAdvisories: [
      'UNESCO World Heritage site: do not climb onto or deface ancient carved temple pillars',
      'Tungabhadra River Otter Sanctuary: zero plastic disposal along the rocky river corridor',
      'Support the Kishkinda Trust: empowers rural women through zero-waste banana-fiber products'
    ],
    audioGuideText: 'Welcome to Hampi, where stones tell the story of the mighty Vijayanagara Empire. Set in a breathtaking landscape of billion-year-old granite boulders, this city was described by medieval travelers as a paradise of diamonds, silk, and architectural genius.',
    audioGuideHindi: 'विजयनगर साम्राज्य की ऐतिहासिक राजधानी हम्पी में आपका स्वागत है। यूनेस्को विश्व धरोहर यह स्थल अपने एकाश्म पत्थर के रथ, संगीत स्तंभों, तुंगभद्रा नदी के कोराकल नौका विहार और अनेगुंडी हस्तशिल्प के लिए जाना जाता है।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Electric buggies inside monument core; popular cycling culture; circular bamboo coracle boats.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 85,
        metricText: '33/35: The Kishkinda Trust and local Anegundi homestays ensure women artisans and youth guides earn fair livelihoods.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Strict Archaeological Survey of India preservation zoning coupled with Tungabhadra smooth-coated otter protection.'
      },
      explanation: 'Hampi and Anegundi demonstrate that heritage conservation extends beyond stone monuments: by turning agricultural banana-stem waste into export-quality crafts, local women achieve economic independence while safeguarding imperial history.',
      sustainableRecommendations: [
        'Explore the monument complexes by bicycle or electric buggy rather than hiring private cars.',
        'Purchase banana-fiber bags, mats, and baskets from the Kishkinda Trust workshop in Anegundi.',
        'Stay in rural heritage homestays on the Anegundi side to distribute tourism spend equitably.'
      ]
    }
  },
  {
    id: 'coorg-devarakadu',
    name: 'Coorg (Kodagu) & Sacred Groves',
    hindiName: 'कूर्ग (कोडागु) एवं देवराकाडू',
    district: 'Kodagu',
    state: 'Karnataka',
    zone: 'South',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 2980,
    approxCost: 1400,
    bestTime: 'October to April',
    timings: '08:00 AM – 06:00 PM',
    entryFee: 'Abbey Falls ₹15; Plantation eco-walks ₹200-₹400',
    coordinates: [12.3375, 75.8069],
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The "Scotland of India" renowned for shade-grown organic coffee agroforestry, misty Western Ghats waterfalls, and indigenous Devarakadu sacred groves.',
    about: 'Nestled on the eastern slopes of the Western Ghats, Coorg (Kodagu) is India\'s premier coffee-growing district and a biological treasure trove. Unlike monoculture plantations elsewhere in the world, Coorg coffee is grown entirely under a two-tier natural rainforest canopy of native wild fig, rosewood, and silver oak trees, acting as a critical wildlife corridor for wild elephants and hornbills. The indigenous martial Kodava community preserves over 1,200 Devarakadu (Sacred Groves) — community-protected climax forest sanctuaries where logging, hunting, and axes have been forbidden for centuries.',
    thingsToDo: [
      'Take a guided walking tour through a shade-grown Arabica and Robusta organic coffee plantation',
      'Visit a centuries-old Devarakadu (Sacred Grove) to observe ancient indigenous community nature worship',
      'Trek through misty shola forests to the summit of Tadiandamol (1,748m), Coorg\'s highest peak',
      'Watch water plunge 70 feet down volcanic rocks at Abbey Falls and Iruppu Falls',
      'Experience authentic Kodava hospitality in certified eco-homestays on ancestral coffee estates'
    ],
    nearbyAttractions: ['Dubare Elephant Camp', 'Nagarhole National Park & Tiger Reserve', 'Namdroling Golden Temple Bylakuppe'],
    howToReach: {
      air: 'Kannur International Airport (CNN) (90 km) or Mangalore Airport (140 km), Bengaluru Airport (280 km)',
      rail: 'Mysuru Junction (115 km) or Hassan (110 km) with express trains from across India',
      road: 'Scenic 4-lane highway from Mysuru to Madikeri through sandalwood and teak forests'
    },
    localFood: [
      { name: 'Kodava Akki Roti & Bamboo Shoot Curry', description: 'Delicate roasted rice flatbreads paired with seasonal wild bamboo shoots stewed with local spices' },
      { name: 'Kachampuli Spiced Preparations', description: 'Dishes seasoned with Coorg\'s dark, tangy vinegar extracted from wild Garcinia gummi-gutta fruits' }
    ],
    safetyInfo: 'Leech socks are useful during monsoon and post-monsoon plantation treks. Respect family customs when staying on Kodava ancestral estates.',
    weatherPlaceholder: {
      temp: '20°C',
      condition: 'Misty Coffee Canopy',
      forecast: 'Cool mountain breezes with fragrant coffee blossom scents'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Weekday plantation stays in southern Coorg (Virajpet/Kutta) offer deep tranquility away from crowded Madikeri.',
    ecoAdvisories: [
      'Sacred Grove preservation: strictly do not remove plants, branches, or stones from Devarakadu forests',
      'Support shade-grown coffee: biodiversity-friendly agroforestry prevents clear-cutting of rainforest canopies',
      'Conserve water: Western Ghats are the vital source of the sacred Kaveri River'
    ],
    audioGuideText: 'Welcome to Coorg, the misty mountain realm of Kodagu. Here, coffee is cultivated not by clearing the jungle, but by embracing it: under the protective canopy of towering rainforest trees, accompanied by ancient sacred groves protected by the Kodava people.',
    audioGuideHindi: 'कर्नाटक के कोडागु (कूर्ग) में आपका स्वागत है। कावेरी नदी के उद्गम स्थल पर बसा यह पर्वतीय क्षेत्र अपनी छाया-आधारित जैविक कॉफी, \'देवराकाडू\' पवित्र वनों और समृद्ध कोडावा संस्कृति के लिए प्रसिद्ध है।',
    sarthiImpactScore: {
      overallScore: 91,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Two-tier native tree canopy sequesters thousands of tons of carbon per hectare; walkable estate trails.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 85,
        metricText: '33/35: Farm-stay model ensures tourism income flows directly to family coffee growers and local farm workers.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Over 1,200 community-protected Devarakadu sacred groves safeguard endemic Western Ghats flora and fauna.'
      },
      explanation: 'Coorg demonstrates regenerative agriculture: shade-grown coffee plantations preserve over 270 native tree species and act as wildlife stepping-stones between Brahmagiri and Pushpagiri sanctuaries.',
      sustainableRecommendations: [
        'Stay on family-run estate homestays rather than large commercial concrete resorts.',
        'Buy certified shade-grown bird-friendly coffee directly from local grower cooperatives.',
        'Visit sacred groves only with an authorized elder or guide who respects community customs.'
      ]
    }
  },

  // ==========================================
  // ASSAM
  // ==========================================
  {
    id: 'majuli-island',
    name: 'Majuli Island & Neo-Vaishnavite Satras',
    hindiName: 'माजुली द्वीप एवं नव-वैष्णव सत्र',
    district: 'Majuli',
    state: 'Assam',
    zone: 'Northeast',
    category: 'Culture',
    rating: 4.8,
    reviewsCount: 1650,
    approxCost: 850,
    bestTime: 'October to March (Raas Mahotsav in November)',
    timings: 'Satras: 08:00 AM – 06:00 PM; Ferries: 07:00 AM – 04:00 PM',
    entryFee: 'Free entry to Satras; Ferry ride ~₹15-₹30/person',
    coordinates: [26.9500, 94.2167],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The world\'s largest inhabited river island on the sacred Brahmaputra, cradle of 15th-century Neo-Vaishnavite monastic art and Mishing tribal bamboo culture.',
    about: 'Formed by the mighty Brahmaputra and Subansiri rivers, Majuli is the world\'s largest inhabited freshwater river island and the spiritual heart of Assamese culture. Established by the 15th-century saint-reformer Srimanta Sankardeva, Majuli\'s historic Satras (monasteries) preserve ancient traditions of Sattriya classical dance, Bhaona theatre, hand-beaten clay pottery without a wheel, and traditional bamboo-and-paper-mâché mask-making at Samaguri Satra. Alongside, the indigenous Mishing tribe lives in raised bamboo stilt houses (Chang Ghar) harmonious with the annual river floods.',
    thingsToDo: [
      'Cross the mighty Brahmaputra River by public ferry from Nimati Ghat to Majuli',
      'Visit Samaguri Satra to witness master artisans sculpt traditional mythological masks from bamboo and clay',
      'Watch celibate monks perform the graceful spiritual rhythms of Sattriya classical dance at Uttar Kamalabari Satra',
      'Cycle through Mishing tribal villages built on raised bamboo stilts amidst mustard fields and wetlands',
      'Observe ancient Neolithic pottery techniques in Salmora village where women shape pots purely by hand'
    ],
    nearbyAttractions: ['Kaziranga National Park (90 km from Jorhat)', 'Sivasagar Ahom Dynasty Monuments (60 km)', 'Kakochang Waterfalls'],
    howToReach: {
      air: 'Jorhat Airport (Rowriah) (25 km from Nimati Ghat) or Dibrugarh Airport (130 km)',
      rail: 'Jorhat Town Railway Station (18 km from ferry ghat) with express trains',
      road: 'Drive to Nimati Ghat (near Jorhat) and take the 1-hour scenic government ferry across the Brahmaputra'
    },
    localFood: [
      { name: 'Mishing Tribal Thali', description: 'Steamed rice cooked in fragrant Taro leaves, fresh herbs, smoked river fish, and bamboo shoot chutney' },
      { name: 'Assamese Pitha & Komal Saul', description: 'Magic instant rice soaked in warm milk with organic sugarcane jaggery' }
    ],
    safetyInfo: 'Last government ferry departs back to the mainland around 03:30-04:00 PM: plan crossing times carefully. Village homestays have warm solar water.',
    weatherPlaceholder: {
      temp: '21°C',
      condition: 'Peaceful River Breeze',
      forecast: 'Gentle river breezes with golden sunrise over wetlands'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Deeply peaceful year-round; the Raas Mahotsav festival in November is spectacular and should be booked months in advance.',
    ecoAdvisories: [
      'Majuli battles natural riverbank erosion: support bamboo planting initiatives along vulnerable river edges',
      'Plastic-free island protocol: carry non-plastic bags and bottles during island cycling',
      'Respect the peace of monastic Satras: remove shoes and speak softly in prayer courtyards'
    ],
    audioGuideText: 'Welcome to Majuli, the sacred island child of the mighty Brahmaputra River. For over 500 years, this island sanctuary has nurtured Srimanta Sankardeva\'s vision of egalitarian spiritual brotherhood through music, monastic dance, and bamboo craftsmanship.',
    audioGuideHindi: 'ब्रह्मपुत्र नदी के मध्य बसे विश्व के सबसे बड़े नदी द्वीप माजुली में आपका स्वागत है। 15वीं शताब्दी से यहां के वैष्णव सत्रों में सत्रिया नृत्य, मुखौटा कला और मिशिंग जनजातीय संस्कृति की अनूठी गंगा-जमुनी तहज़ीब जीवित है।',
    sarthiImpactScore: {
      overallScore: 95,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 29,
        metricText: '29/30: Island cycling is the primary tourist transit; public river ferry transit; bamboo Chang Ghar stilt stays.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 35,
        economicRetentionPct: 92,
        metricText: '35/35: 92% of tourist spend stays directly with Mishing tribal homestay hosts and master mask-maker monastic families.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Indigenous bamboo architectural adaptations allow communities to live harmoniously with river hydrology.'
      },
      explanation: 'Majuli is a living testament to climate-adaptive cultural resilience: Mishing bamboo stilt architecture and Sankardeva\'s Satras preserve world-class intangible cultural heritage while adapting gracefully to the Brahmaputra\'s annual floods.',
      sustainableRecommendations: [
        'Rent a bicycle to explore the island\'s Satras and Mishing villages at a peaceful pace.',
        'Purchase authentic handmade theatrical masks directly from the master artists at Samaguri Satra.',
        'Stay in Mishing-run bamboo stilt homestays to support island riverbank conservation.'
      ]
    }
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga Tiger & Rhino Biosphere',
    hindiName: 'काजीरंगा राष्ट्रीय उद्यान',
    district: 'Golaghat & Nagaon',
    state: 'Assam',
    zone: 'Northeast',
    category: 'Wildlife',
    rating: 4.9,
    reviewsCount: 3620,
    approxCost: 1900,
    bestTime: 'November to April',
    timings: '07:00 AM – 11:30 AM & 01:30 PM – 04:30 PM',
    entryFee: 'Entry fee ₹100 for Indian adults, ₹650 for foreign nationals + gypsy safari charge ~₹2,500-₹3,500',
    coordinates: [26.5775, 93.1711],
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO World Heritage flood-plain sanctuary safeguarding two-thirds of the world\'s Great One-Horned Rhinoceroses and highest tiger density.',
    about: 'Spanning the floodplains of the Brahmaputra River, Kaziranga National Park is one of the world\'s most celebrated conservation success stories. From just a handful of one-horned rhinos in 1905, passionate state protection and local Karbi and Assamese forest wardens have nurtured the population to over 2,600 rhinos today. It also boasts the highest density of Royal Bengal tigers in protected areas worldwide, vast herds of wild Asiatic water buffalo, eastern swamp deer, and thousands of migratory birds.',
    thingsToDo: [
      'Early morning safari through the elephant-grass marshes of Central (Kohora) or Western (Bagori) ranges',
      'Observe the magnificent Greater One-Horned Rhinoceros grazing peacefully in wet grasslands',
      'Spot wild Asian elephants, wild water buffalo, and otters along the Diphlu River corridor',
      'Visit the Kaziranga National Orchid and Biodiversity Park showcasing over 500 indigenous orchid species',
      'Learn about high-ground wildlife flood shelters (chaporis) built to protect animals during monsoon overflows'
    ],
    nearbyAttractions: ['Kakochang Waterfalls', 'Hoollongapar Gibbon Sanctuary (India\'s only ape)', 'Majuli Island'],
    howToReach: {
      air: 'Jorhat Airport (95 km) or Guwahati Lokpriya Gopinath Bordoloi Airport (225 km)',
      rail: 'Jakhalabandha (40 km) or Furkating Junction (75 km), Guwahati (215 km)',
      road: 'Smooth 4-lane Asian Highway AH-1 / NH-715 passing right by Kohora park gate'
    },
    localFood: [
      { name: 'Traditional Assamese Thali', description: 'Fragrant Joha rice served with Khar (alkaline papaya dish), Maasor Tenga (tangy tomato-elephant apple fish curry), and roasted pitika' },
      { name: 'Kaji Nemu Scented Refreshers', description: 'Assam\'s famous GI-tagged oblong aromatic lemon juice infused with wild mint' }
    ],
    safetyInfo: 'Always remain inside safari vehicles. Never use camera flash on rhinos or elephant herds with calves.',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Morning Grassland Mist',
      forecast: 'Sunny winter grassland skies with cool evening dew'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Bagori and Agaratoli ranges offer quieter, exceptional bird and rhino encounters away from central Kohora congestion.',
    ecoAdvisories: [
      'UNESCO World Heritage sanctuary: strict prohibition on single-use plastics inside the park',
      'Animal corridor protection: vehicle speed limits (40 km/h) enforced on NH-715 with sensor cameras',
      'Support Karbi tribal eco-tourism guides and community cultural centers'
    ],
    audioGuideText: 'Welcome to Kaziranga National Park, where the tall elephant grass of the Brahmaputra floodplains shelters two-thirds of the world\'s one-horned rhinos. Here, dedicated forest guards and local communities have defended wildlife with unmatched bravery.',
    audioGuideHindi: 'यूनेस्को विश्व धरोहर काजीरंगा राष्ट्रीय उद्यान में आपका स्वागत है। असम के ब्रह्मपुत्र कछार में फैला यह अभयारण्य दुनिया के दो-तिहाई एक-सींग वाले गैंडों और रॉयल बंगाल टाइगर का सबसे सुरक्षित प्राकृतिक आवास है।',
    sarthiImpactScore: {
      overallScore: 93,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Strictly regulated safari routes; speed-monitored wildlife highway corridors reducing roadkill.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 86,
        metricText: '33/35: Forest fringe villages are partners in conservation: local youth serve as forest guards, trackers, and lodge hosts.'
      },
      conservationSensitivity: {
        score: 33,
        carryingCapacity: 'Protected Reserve',
        metricText: '33/35: Gold-standard anti-poaching and artificial flood highland management ensuring species survival during monsoon floods.'
      },
      explanation: 'Kaziranga is an international beacon of species recovery: through dedicated community partnerships, it reversed the near-extinction of the Greater One-Horned Rhinoceros to over 2,600 animals today.',
      sustainableRecommendations: [
        'Visit the Kaziranga National Orchid and Biodiversity Park to support indigenous botanical preservation.',
        'Drive slowly along the highway animal corridors to give elephants and deer safe passage.',
        'Choose community-run eco-resorts that support local village schooling and anti-poaching fringe welfare.'
      ]
    }
  },

  // ==========================================
  // WEST BENGAL
  // ==========================================
  {
    id: 'darjeeling-makaibari',
    name: 'Darjeeling & Makaibari Bio-Organic Tea',
    hindiName: 'दार्जिलिंग एवं मकईबाड़ी बायो-ऑर्गेनिक टी',
    district: 'Darjeeling',
    state: 'West Bengal',
    zone: 'East',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 3150,
    approxCost: 1300,
    bestTime: 'March to May and October to December',
    timings: 'Tiger Hill sunrise: 04:30 AM; Tea estates: 08:00 AM – 04:30 PM',
    entryFee: 'Tiger Hill entry ₹50; Makaibari factory tour & tea tasting ~₹300',
    coordinates: [27.0410, 88.2663],
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The "Queen of the Hills" featuring the UNESCO Himalayan Toy Train, Kanchenjunga sunrise views, and the world\'s first certified bio-dynamic tea garden.',
    about: 'Perched at 2,050 meters in the Lesser Himalayas, Darjeeling is world-famous for its sweeping views of Mt. Kanchenjunga (8,586m) and the UNESCO World Heritage Darjeeling Himalayan Railway (1881). Down the misty slopes in Kurseong lies Makaibari Tea Estate — the world\'s oldest tea factory (1859) and the first certified bio-dynamic tea estate in the world. At Makaibari, 70% of the estate is maintained as virgin subtropical forest, and local tea plucker families run an award-winning community homestay program.',
    thingsToDo: [
      'Watch dawn sunrise illuminate the golden snows of Mt. Kanchenjunga from Tiger Hill',
      'Ride the historic steam-hauled UNESCO Darjeeling Himalayan Toy Train around the Batasia Loop',
      'Take a guided walking tour of Makaibari\'s bio-dynamic tea garden to learn permaculture and organic composting',
      'Stay in certified tea-plucker family homestays at Makaibari, plucking tea with local women at dawn',
      'Visit the Himalayan Mountaineering Institute (HMI) museum and Padmaja Naidu Himalayan Zoo (Red Panda breeding)'
    ],
    nearbyAttractions: ['Batasia Loop & War Memorial', 'Peace Pagoda', 'Mirik Lake & Orange Orchards'],
    howToReach: {
      air: 'Bagdogra Airport (IXB) (68 km) - 2.5 hours scenic mountain drive',
      rail: 'New Jalpaiguri Junction (NJP) (72 km) connected to all major Indian cities',
      road: 'Scenic drive via Hill Cart Road (NH-110) or Rohini route'
    },
    localFood: [
      { name: 'Authentic Darjeeling Steamed Momos', description: 'Delicate dumplings stuffed with fresh hill greens and paneer served with fiery fermented Dalle Khursani chili chutney' },
      { name: 'Makaibari Muscatel First Flush Tea', description: 'The champagne of teas: light, floral liquor harvested during the spring equinox' }
    ],
    safetyInfo: 'Morning temperatures at Tiger Hill can be near-freezing: carry warm thermal layers. Mountain toy train tickets should be reserved on IRCTC.',
    weatherPlaceholder: {
      temp: '14°C',
      condition: 'Crisp Mountain Mist',
      forecast: 'Clear dawn mountain views giving way to afternoon pine mists'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Kurseong and Makaibari homestays are far more peaceful and intimate than busy central Darjeeling Mall.',
    ecoAdvisories: [
      'Makaibari permaculture code: 70% of the land is preserved as wild forest where leopards and hornbills roam freely',
      'Support the Makaibari Homestay Joint Body: 100% of homestay boarding revenue goes directly to tea worker families',
      'Avoid single-use plastic bottles on walking trails in the tea gardens'
    ],
    audioGuideText: 'Welcome to Darjeeling and the historic slopes of Makaibari. Here against the majestic skyline of Mt. Kanchenjunga, tea is grown in harmony with the cosmos: following bio-dynamic lunar rhythms, while community homestays empower tea plucker families.',
    audioGuideHindi: 'दार्जिलिंग की हसीन वादियों में आपका स्वागत है। यूनेस्को टॉय ट्रेन, कंचनजंघा का स्वर्णिम सूर्योदय और मकईबाड़ी का विश्व का पहला बायो-डायनामिक चाय बागान इस पर्वतीय क्षेत्र को पर्यावरण और संस्कृति का अद्भुत संगम बनाते हैं।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: UNESCO heritage electric/steam mountain railway; walkable tea garden paths.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 88,
        metricText: '34/35: Groundbreaking Makaibari Homestay model: tea plucker women directly own and manage homestays, financing children\'s education.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: Certified bio-dynamic agriculture with zero synthetic pesticides or chemical fertilizers since 1988.'
      },
      explanation: 'Makaibari Darjeeling is a global pioneer in regenerative agriculture: by treating the tea estate as a living organism and integrating tea workers as homestay owners, it proves that tourism can heal landscapes.',
      sustainableRecommendations: [
        'Stay in a tea-worker village homestay at Makaibari to experience authentic family hospitality.',
        'Buy certified bio-dynamic Darjeeling tea carrying Fair Trade and Demeter certifications.',
        'Ride the Darjeeling Himalayan Toy Train to support this historic UNESCO rail treasure.'
      ]
    }
  },

  // ==========================================
  // GOA
  // ==========================================
  {
    id: 'divar-island',
    name: 'Divar Island & Salim Ali Bird Sanctuary',
    hindiName: 'दीवार द्वीप एवं सलीम अली पक्षी अभयारण्य',
    district: 'North Goa',
    state: 'Goa',
    zone: 'West',
    category: 'Culture',
    rating: 4.8,
    reviewsCount: 1540,
    approxCost: 900,
    bestTime: 'October to April',
    timings: 'Island accessible 24/7 via free government ferry; Bird Sanctuary: 06:00 AM – 06:00 PM',
    entryFee: 'Free island entry; Salim Ali Sanctuary entry ₹20, boat ride ~₹75-₹150',
    coordinates: [15.5186, 73.8828],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Tranquil emerald river island on the Mandovi River with Portuguese-Goan heritage houses, paddy sluice gates, and mangrove bird sanctuaries.',
    about: 'Far away from crowded commercial beaches, Divar Island sits like a peaceful green jewel in the Mandovi River, accessible only by quaint public car ferries from Old Goa and Ribandar. Divar retains the untouched rural charm of ancient Goa: winding country lanes flanked by vibrant Portuguese-era villas, centuries-old churches like Our Lady of Compassion, and ancient Khazan lands — an indigenous tidal agro-estuarine water management system with wooden sluice gates (Manas) that has balanced rice farming and prawn cultivation for over a thousand years. Nearby Chorão Island houses the Dr. Salim Ali Bird Sanctuary, a rich mangrove ecosystem.',
    thingsToDo: [
      'Take the free scenic ferry crossing across the Mandovi River from Ribandar or Old Goa',
      'Cycle past grand pastel-colored Indo-Portuguese villas and ancient stepwells (Porne Tirth)',
      'Climb to the hilltop Church of Our Lady of Compassion for 360-degree views of the Mandovi river bends',
      'Explore the ancient Khazan tidal embankments and watch traditional sluice-gate fishing',
      'Take a silent rowboat ride through the mangrove labyrinth of Dr. Salim Ali Bird Sanctuary'
    ],
    nearbyAttractions: ['UNESCO Basilica of Bom Jesus (Old Goa)', 'Dr. Salim Ali Bird Sanctuary', 'Reis Magos Fort'],
    howToReach: {
      air: 'Manohar International Airport Mopa (GOX) (35 km) or Dabolim Airport (30 km)',
      rail: 'Karmali Railway Station (KRMI) (8 km from Old Goa ferry point) or Thivim (25 km)',
      road: 'Drive to Ribandar or Old Goa ferry jetty; government ferry carries cars, bikes, and pedestrians across free of charge'
    },
    localFood: [
      { name: 'Traditional Goan Poi with Vegetable Caldin', description: 'Crusty local whole-wheat leavened bread paired with a mild, aromatic coconut and turmeric stew' },
      { name: 'Bebinca & Patoleo', description: 'Layered Goan coconut-egg dessert, and steamed rice parcels wrapped in turmeric leaves with grated coconut and palm jaggery' }
    ],
    safetyInfo: 'Ferries run every 15-30 minutes round the clock. Drive slowly on narrow village lanes and respect the tranquil pace of island life.',
    weatherPlaceholder: {
      temp: '27°C',
      condition: 'Tropical River Breeze',
      forecast: 'Pleasant tropical breeze with golden afternoon sun'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Consistently peaceful and free of mass-tourism crowds: perfect for cycling and heritage photography.',
    ecoAdvisories: [
      'Khazan lands protection: do not disturb the traditional sluice gates or saline embankment dikes',
      'Silent sanctuary waters: motorized speedboats are prohibited in mangrove bird nesting channels',
      'Support island-owned heritage homestays and home-bakers'
    ],
    audioGuideText: 'Welcome to Divar Island, a timeless river haven on the Mandovi. While modern Goa rushes by, here on Divar time moves to the rhythm of ferry bells, church chimes, and the opening and closing of ancient Khazan tidal sluice gates.',
    audioGuideHindi: 'गोवा के मांडवी नदी में बसे शांत दीवार द्वीप में आपका स्वागत है। यहां की पुर्तगाली-गोअन हवेलियां, प्राचीन खजान जल-प्रबंधन प्रणाली और पास ही स्थित सलीम अली पक्षी अभयारण्य गोवा के वास्तविक और शांत स्वरूप का दर्शन कराते हैं।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Non-motorized cycling and walking village lanes; public ferry water connectivity.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 85,
        metricText: '33/35: Island-owned small bakeries, local heritage homestays, and village cycle tour operators retain visitor spend.'
      },
      conservationSensitivity: {
        score: 31,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '31/35: 1,000-year-old Khazan ecosystem safeguards low-lying coastal land from saltwater intrusion without concrete walls.'
      },
      explanation: 'Divar Island is a brilliant example of sustainable Goan heritage: by retaining island ferry access rather than building commercial bridges, it has preserved centuries-old Khazan agricultural ecosystems and mangrove bird habitats.',
      sustainableRecommendations: [
        'Explore the island by rented bicycle or electric cycle to preserve its tranquil atmosphere.',
        'Support village home-bakers who prepare traditional Goan Poi breads and sweets.',
        'Take a guided mangrove rowboat tour with authorized local naturalists at Salim Ali Sanctuary.'
      ]
    }
  },

  // ==========================================
  // GUJARAT
  // ==========================================
  {
    id: 'hodka-rann-kutch',
    name: 'Hodka Eco-Village & White Rann of Kutch',
    hindiName: 'होड़का इको-विलेज एवं सफेद रण (कच्छ)',
    district: 'Kutch',
    state: 'Gujarat',
    zone: 'West',
    category: 'Culture',
    rating: 4.8,
    reviewsCount: 2450,
    approxCost: 1600,
    bestTime: 'November to February (Rann Utsav and full moon nights)',
    timings: 'White Rann open 06:00 AM – 08:00 PM',
    entryFee: 'White Rann permit ₹100/adult (apply online or at Bhirandiyara check-post)',
    coordinates: [23.7915, 69.6974],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Community-owned Sham-e-Sarhad mud-resort, exquisite Mutwa and Meghwal mirror embroidery, Rogan castor-oil art, and the boundless salt desert.',
    about: 'Located in the Banni grasslands on the threshold of the Great Rann of Kutch, Hodka is a vibrant artisan village comprising traditional hamlets (Vands). Hodka is internationally acclaimed for Sham-e-Sarhad (Sunset at the Border), India\'s pioneering community-owned and community-operated eco-resort. Built in traditional Bhunga architecture with mud walls and thatched roofs adorned with Lippan mirror-clay work, the resort is 100% owned by the village tourism committee. Nearby Nirona village preserves Rogan painting — the rare 400-year-old art of painting fabrics using boiled castor-seed oil paste, practiced by only one family on earth.',
    thingsToDo: [
      'Experience sunset and moonlight reflection across the crystalline salt crust of the Great White Rann',
      'Stay in authentic earthen Bhunga cottages decorated with hand-sculpted Lippan Kaam mirror work',
      'Visit master artisan Abdul Gafur Khatri\'s family studio in Nirona to see rare Rogan castor-oil painting',
      'Learn traditional copper-coated bell crafting and lacquer-wood carving in village artisan workshops',
      'Listen to soulful Sufi and Kutchhi folk songs played on the Jodiya Pawa (double flute) around village hearths'
    ],
    nearbyAttractions: ['Great Rann of Kutch (Dhordo)', 'Kalo Dungar (Black Hill) — highest point in Kutch', 'Dholavira UNESCO Harappan City'],
    howToReach: {
      air: 'Bhuj Airport (BHU) (65 km) - 1.5 hours by taxi',
      rail: 'Bhuj Railway Station (65 km) connected by express trains from Mumbai, Delhi, Ahmedabad',
      road: 'Smooth highway from Bhuj via Bhirandiyara police checkpoint where permits are verified'
    },
    localFood: [
      { name: 'Kutchhi Bajra No Rotlo with Ringan Bharto', description: 'Hand-patted pearl millet flatbreads cooked on earthen griddles, served with smoked roasted eggplant and white butter' },
      { name: 'Kutchhi Khichdi with Sweet Kadhi', description: 'Moong dal and rice tempered with cloves and served with spiced curd soup and fresh buttermilk' }
    ],
    safetyInfo: 'Inner Line Permits are required for Indian and foreign nationals to visit the White Rann (easily obtained online or at Bhirandiyara checkpoint). Carry warm shawls for winter desert nights.',
    weatherPlaceholder: {
      temp: '23°C',
      condition: 'Brilliant Desert Sunlight',
      forecast: 'Vivid blue desert skies with chilly starlit night temperatures'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Full moon nights are busy but magical; weekdays at Sham-e-Sarhad provide deep community immersion.',
    ecoAdvisories: [
      'Do not discard plastic or paper on the pristine white salt crust of the Rann',
      'Sham-e-Sarhad resort is 100% community-owned: revenue directly funds village healthcare and sanitation',
      'Support GI-tagged Rogan art and Kutchi embroidery directly from home studios to sustain living heritage'
    ],
    audioGuideText: 'Welcome to Hodka in the Banni grasslands of Kutch. Where the desert meets the vast white salt flats, indigenous Meghwal and Mutwa artisans transform mud and mirrors into palatial Bhunga homes, and castor-oil paste into the world-famous Rogan art.',
    audioGuideHindi: 'कच्छ के होड़का इको-विलेज में आपका स्वागत है। यहां का \'शाम-ए-सरहद\' देश का पहला 100% ग्रामीण-स्वामित्व वाला रिसॉर्ट है, जहां पारंपरिक मिट्टी के भूंगा घर, रोगन कला और सफेद रण का सम्मोहन विश्वभर के पर्यटकों को आकर्षित करता है।',
    sarthiImpactScore: {
      overallScore: 95,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Earthen Bhunga architecture with mud-insulation naturally regulates temperatures without air conditioning.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 35,
        economicRetentionPct: 92,
        metricText: '35/35: Pioneering Sham-e-Sarhad model: 92% of resort profit is distributed directly to village artisan families and village infrastructure.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: Vernacular building using local clay, bamboo, and thatch; preservation of rare Banni grassland ecology.'
      },
      explanation: 'Hodka is one of the most successful community tourism initiatives in Asia: by placing the entire eco-resort under village ownership, tourism revenue stopped rural distress migration and breathed new life into Rogan art, copper bells, and mirror embroidery.',
      sustainableRecommendations: [
        'Stay at the community-managed Sham-e-Sarhad resort in Hodka.',
        'Purchase authentic Rogan art, copper bells, and mirror-work textiles directly from village workshops.',
        'Never drive vehicles onto the fragile white salt desert crust.'
      ]
    }
  },

  // ==========================================
  // MAHARASHTRA
  // ==========================================
  {
    id: 'ajanta-ellora',
    name: 'Ajanta & Ellora Caves',
    hindiName: 'अजिंठा एवं एलोरा गुफाएं',
    district: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    zone: 'West',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 3120,
    approxCost: 1100,
    bestTime: 'October to March',
    timings: 'Ellora: 06:00 AM – 06:00 PM (Closed Tuesdays); Ajanta: 09:00 AM – 05:00 PM (Closed Mondays)',
    entryFee: '₹40 Indian citizens, ₹600 Foreign visitors; Shuttle eco-bus ₹30',
    coordinates: [20.0268, 75.1780],
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443a6d9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO World Heritage monumental rock-cut cave sanctuaries dating from 2nd century BCE to 10th century CE, featuring the monolithic Kailash Temple and Ajanta Buddhist fresco murals.',
    about: 'Ajanta and Ellora represent the pinnacle of ancient Indian rock-cut architecture and artistic mastery. Located in Maharashtra\'s volcanic Deccan Traps, Ellora features 34 monolithic cave temples excavated vertically down into basalt cliffs, headlined by Cave 16—the Kailash Temple, the largest single monolithic rock excavation on Earth carved top-down from a single cliff without scaffolds. 100 km north, the horse-shoe gorge of Ajanta holds 30 rock-hewn Buddhist caves world-renowned for exquisite tempera fresco murals depicting Jataka tales and Bodhisattvas. Both sites employ electric shuttle buses to eliminate vehicle emissions in the heritage zone.',
    thingsToDo: [
      'Stand in awe before the monolithic multi-storey Kailash Temple (Cave 16) at Ellora',
      'Observe ancient mineral tempera fresco murals of Padmapani and Vajrapani in Ajanta Cave 1',
      'Ride the zero-emission electric battery shuttle bus through the eco-buffer sanctuary',
      'Visit traditional Paithani handloom master weavers in Paithan to witness pure silk and zari weaving',
      'Explore the 12 Buddhist caves and Jain cave complexes (Indra Sabha) at Ellora'
    ],
    nearbyAttractions: ['Daulatabad (Devgiri) Fort', 'Bibi Ka Maqbara', 'Grishneshwar Jyotirlinga Temple'],
    howToReach: {
      air: 'Chhatrapati Sambhajinagar (Aurangabad) Airport (IXU) (30 km to Ellora, 105 km to Ajanta)',
      rail: 'Aurangabad Railway Station (30 km to Ellora) connected by Vande Bharat & express trains from Mumbai & Pune',
      road: 'Direct 4-lane highway corridor from Mumbai, Pune, and Nashik; MTDC electric shuttle transit at cave plazas'
    },
    localFood: [
      { name: 'Aurangabadi Naan Qalia', description: 'Traditional slow-cooked spiced stew served with clay-tandoor leavened bread' },
      { name: 'Jowar Bhakri with Thecha & Pithla', description: 'Rustic Deccan sorghum flatbread served with fiery green chili crushed paste and chickpea flour curry' }
    ],
    safetyInfo: 'Flash photography is strictly prohibited inside Ajanta caves to protect ancient natural mineral pigments. Wear non-slip walking shoes for stone steps.',
    weatherPlaceholder: {
      temp: '25°C',
      condition: 'Pleasant Deccan Breeze',
      forecast: 'Clear skies with comfortable morning exploration'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Visit Cave 16 Kailash Temple at 07:00 AM opening for golden morning light and quiet solitary reflection.',
    ecoAdvisories: [
      'Zero vehicle emissions: all private cars park at the perimeter; board MTDC electric shuttle buses',
      'UNESCO Heritage protection: no touching of 2,000-year-old rock carvings or fresco walls',
      'Support certified ASI heritage guides and local Paithani handloom weaver cooperatives'
    ],
    audioGuideText: 'Welcome to Ajanta and Ellora Caves, where ancient masters sculpted enduring harmony into basalt mountain cliffs. Ellora celebrates Buddhist, Hindu, and Jain harmony, while Ajanta preserves the greatest masterworks of classical Buddhist painting in human history.',
    audioGuideHindi: 'महाराष्ट्र की विश्वप्रसिद्ध अजिंठा एवं एलोरा गुफाओं में आपका स्वागत है। यहां बेसाल्ट चट्टानों को तराशकर बनाया गया कैलाश मंदिर और अजिंठा के भित्तिचित्र भारतीय वास्तुकला और चित्रकला के अद्वितीय शिखर हैं।',
    sarthiImpactScore: {
      overallScore: 91,
      tier: 'Eco Pioneer (85-100)',
      categories: {
        environmentalSustainability: {
          score: 27,
          maxScore: 30,
          metricText: '27/30: Electric battery shuttle transit corridors and strict ecological buffer zone around basalt gorge.',
          explanation: 'Motorized fossil-fuel vehicles are barred from the inner heritage precinct to prevent soot and stone erosion.'
        },
        localEconomicContribution: {
          score: 23,
          maxScore: 25,
          metricText: '23/25: Directly sustains Paithani handloom weavers, authorized ASI local guides, and regional farmer cooperatives.',
          explanation: 'Over 82% of visitor expenditure stays in regional craft clusters and certified family homestays.'
        },
        culturalHeritageEngagement: {
          score: 20,
          maxScore: 20,
          metricText: '20/20: World-renowned UNESCO World Heritage site preserving 2,000 years of living art and rock sculpture.',
          explanation: 'Pinnacle of Indian rock-cut monument engineering and ancient Buddhist fresco preservation.'
        },
        sustainableTransportation: {
          score: 13,
          maxScore: 15,
          metricText: '13/15: Direct electrified Vande Bharat rail halt at Chhatrapati Sambhajinagar + battery eco-buses at caves.',
          explanation: 'Rail-connected transit corridor minimizing per-capita journey carbon footprint.'
        },
        responsibleTourismPractices: {
          score: 8,
          maxScore: 10,
          metricText: '8/10: Strictly enforced no-flash photography rules to preserve ancient mineral pigments.',
          explanation: 'Low-light fibre-optic illumination and monitored carrying capacity inside cave sanctuaries.'
        }
      },
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Battery shuttle bus transit zone and electrified railway connectivity.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 84,
        metricText: '33/35: ~84% of trip spend retained by local Paithan handloom weavers and accredited regional guides.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: ASI monitored heritage buffer zone with plastic-free and no-flash photography mandates.'
      },
      explanation: 'Ajanta & Ellora showcases responsible heritage stewardship: mandatory electric shuttle buses shield ancient monuments from exhaust pollution while nearby Paithani weaving clusters keep living artisanal traditions alive.',
      sustainableRecommendations: [
        'Board the MTDC electric shuttle bus rather than hiring private taxis inside the monument zone.',
        'Never use flash photography or touch the delicate mineral fresco paintings.',
        'Purchase authentic GI-tagged Paithani silk sarees directly from certified weaver cooperatives in Paithan.'
      ]
    },
    recommendationReason: 'Recommended as a premier UNESCO World Heritage circuit offering zero-emission electric transit shuttles, direct handloom artisan cooperative support, and ancient stone architecture cooling.'
  },
  {
    id: 'kaas-plateau-satara',
    name: 'Kaas Plateau & Sahyadri Eco-Reserve',
    hindiName: 'कास पठार एवं सह्याद्री जैव-विविधता',
    district: 'Satara',
    state: 'Maharashtra',
    zone: 'West',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 1980,
    approxCost: 950,
    bestTime: 'August to October (Flowering bloom season) and November to February',
    timings: '07:00 AM – 06:30 PM (Pre-booking mandatory during bloom season)',
    entryFee: '₹100/person (Forest Department online permit; strictly capped at 3,000 visitors/day)',
    coordinates: [17.7214, 73.8183],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'UNESCO World Natural Heritage volcanic laterite plateau home to over 850 endemic wildflower species, carnivorous bladderworts, and community-protected sacred groves.',
    about: 'Kaas Plateau (Kaas Pathar) is Maharashtra\'s "Valley of Flowers", situated 1,200 meters high in the Sahyadri Western Ghats. Formed of porous volcanic laterite rock, every monsoon the thin soil layer erupts into a spectacular botanical carpet of over 850 species of flowering plants, orchids, and insectivorous bladderworts (Utricularia), many found nowhere else on Earth. The Maharashtra Forest Department and local Joint Forest Management Committees (JFMC) enforce strict visitor quotas (3,000/day) and fenced raised walkways to prevent soil compaction and protect fragile micro-flora. Nearby village homestays offer farm-to-table organic Maharashtrian cuisine and tours of historical Maratha fort heritage.',
    thingsToDo: [
      'Walk along designated timber-and-cordon elevated paths observing endemic wildflower carpets',
      'Spot rare insectivorous flowers like Drosera indica (Sundew) and Utricularia with local naturalists',
      'Trek to Vajrai Waterfall, India\'s second-highest plunge waterfall on the Urmodi River',
      'Stay in a verified Satara village agro-homestay supporting local farming families',
      'Visit the historical hill fort of Sajjangad and heritage sacred groves (Devrai)'
    ],
    nearbyAttractions: ['Thoseghar Waterfalls', 'Vajrai Waterfall', 'Sajjangad Hill Fort', 'Koyna Wildlife Sanctuary'],
    howToReach: {
      air: 'Pune International Airport (PNQ) (130 km) - 3 hours by taxi',
      rail: 'Satara Railway Station (25 km) or Pune Junction (125 km) on Central Railway',
      road: 'Smooth scenic ghat road from Satara town (25 km) via Medha-Mahabaleshwar link'
    },
    localFood: [
      { name: 'Satara Kandi Pedha', description: 'GI-tagged caramelized roasted milk fudge crafted by Satara sweetmakers since 1912' },
      { name: 'Maharashtrian Jowar Bhakri with Methi Pithla', description: 'Freshly harvested fenugreek leaves in spiced besan stew with hot sorghum flatbreads' }
    ],
    safetyInfo: 'Walking off designated pathways onto the blooming plateau is strictly prohibited and heavily fined by forest rangers. Wear rain gear and sturdy waterproof shoes during monsoon.',
    weatherPlaceholder: {
      temp: '20°C',
      condition: 'Cool Sahyadri Mist',
      forecast: 'Gentle monsoon breezes with rolling mountain fog'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Early morning (07:00 AM - 09:30 AM) offers pristine photography conditions before afternoon mist rolls across the plateau.',
    ecoAdvisories: [
      'Strict carrying capacity: mandatory online Forest Department booking limits daily footfall to 3,000 visitors',
      'Zero plastic policy: all single-use plastics are checked at the Kaas entry gate',
      'Stay only on designated wooden viewing boardwalks to protect delicate laterite micro-habitats'
    ],
    audioGuideText: 'Welcome to Kaas Plateau, a UNESCO World Natural Heritage site perched high in the Sahyadris. Here, nature paints an ephemeral botanical masterpiece each monsoon, carefully protected by village forest guardians.',
    audioGuideHindi: 'महाराष्ट्र के सह्याद्री पर्वतमाला में स्थित कास पठार (कास पठार) में आपका स्वागत है। इसे महाराष्ट्र की \'फूलों की घाटी\' कहा जाता है, जहां 850 से अधिक दुर्लभ जंगली फूलों की प्रजातियां खिलती हैं।',
    sarthiImpactScore: {
      overallScore: 93,
      tier: 'Eco Pioneer (85-100)',
      categories: {
        environmentalSustainability: {
          score: 29,
          maxScore: 30,
          metricText: '29/30: Fenced raised viewing corridors, zero-plastic checkposts, and Western Ghats UNESCO biosphere protection.',
          explanation: 'Strict conservation protocols prevent trampling of fragile endemic micro-orchids and carnivorous plants.'
        },
        localEconomicContribution: {
          score: 24,
          maxScore: 25,
          metricText: '24/25: 100% of eco-tourism fees and guiding income retained by the local Joint Forest Management Committee.',
          explanation: 'Provides sustainable dry-season livelihoods for Satara village youth and agro-homestay providers.'
        },
        culturalHeritageEngagement: {
          score: 18,
          maxScore: 20,
          metricText: '18/20: Living traditions of community-protected sacred groves (Devrai) and Maratha hill fort heritage.',
          explanation: 'Integrates local environmental folk wisdom and ancient botanical preservation traditions.'
        },
        sustainableTransportation: {
          score: 13,
          maxScore: 15,
          metricText: '13/15: Scenic Western Ghats railway access via Satara & Pune junctions with shared village shuttles.',
          explanation: 'Low-emission transit access with organized shared eco-vans during peak flowering season.'
        },
        responsibleTourismPractices: {
          score: 9,
          maxScore: 10,
          metricText: '9/10: Mandatory online reservation system strictly capping daily visitation at 3,000 individuals.',
          explanation: 'Model case study in carrying capacity governance preventing mass tourist degradation.'
        }
      },
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: Non-motorized plateau walking boardwalks and shared village transport links.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 88,
        metricText: '34/35: Direct revenue sharing with Joint Forest Management Committees and Satara agro-homestays.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: Strictly regulated 3,000 visitor/day quota and raised wooden boardwalks protecting rare laterite flora.'
      },
      explanation: 'Kaas Plateau is a shining example of carrying-capacity governance: strict visitor caps and community forest committees protect 850+ endemic botanical species while generating dependable rural income.',
      sustainableRecommendations: [
        'Always reserve your Forest Department visitation slot online prior to arrival.',
        'Never step off the wooden raised walkways or pluck wildflower blossoms.',
        'Savor farm-cooked Maharashtrian meals hosted by Satara village agro-tourism families.'
      ]
    },
    recommendationReason: 'Recommended as a pristine UNESCO World Natural Heritage biodiversity haven featuring strictly enforced carrying capacities (3,000 visitors/day), zero-plastic enforcement, and community-run village agro-stays.'
  },

  // ==========================================
  // JHARKHAND (PRESERVED & ENRICHED)
  // ==========================================
  {
    id: 'dassam-falls',
    name: 'Dassam Falls',
    hindiName: 'दशम जलप्रपात',
    district: 'Ranchi',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Waterfalls',
    rating: 4.8,
    reviewsCount: 1420,
    approxCost: 600,
    bestTime: 'October to March (Monsoon for roaring views)',
    timings: '08:00 AM – 05:00 PM',
    entryFee: '₹20 per adult, Parking ₹40',
    distanceRanchi: 40,
    coordinates: [23.1466, 85.4526],
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Spectacular 44-meter natural cascade of Kanchi River tumbling down 10 distinct crystalline streams.',
    about: 'Dassam Falls, also known as Dassam Ghagh, is situated near Taimara village in Ranchi district. The Kanchi River falls from a height of 144 feet (44 m), creating a breath-taking scenic spectacle. The word "Dassam" is derived from "Da-song", which in the Mundari tribal language means the pouring of water like a pitcher.',
    thingsToDo: [
      'Descend the paved stairway to the main observation deck',
      'Landscape & slow-shutter waterfall photography',
      'Picnic near the river banks (designated areas only)',
      'Taste fresh hot tribal Dhuska & Ghugni from local village stalls',
      'Birdwatching in surrounding dry deciduous sal forests'
    ],
    nearbyAttractions: ['Sun Temple Bundu', 'Deori Temple Tamar', 'Jonha Falls'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (42 km) - 1 hour by cab',
      rail: 'Ranchi Junction (40 km) or Muri Junction (35 km)',
      road: 'NH 33 (Ranchi-Tata Highway), take diversion at Taimara'
    },
    localFood: [
      { name: 'Dhuska with Chana Sabzi', description: 'Crispy fried fermented rice-dal pancake served with spicy chickpea curry' },
      { name: 'Marua Roti & Chutney', description: 'Nutritious finger millet flatbread paired with roasted tomato-garlic chutney' }
    ],
    safetyInfo: 'Strict warning: Do not venture into the water or step onto slippery moss-covered rocks. River currents are deceptive. Follow designated railings.',
    weatherPlaceholder: {
      temp: '24°C',
      condition: 'Pleasant & Breezy',
      forecast: 'Clear skies, ideal for photography'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Best visited between 8:30 AM to 11:00 AM before weekend picnic crowds arrive.',
    ecoAdvisories: [
      'Plastic-free eco-zone — avoid single-use bottles',
      'Stay on designated paved stairways; do not venture onto wet metamorphic boulders'
    ],
    audioGuideText: 'Welcome to Dassam Falls, one of Jharkhand\'s most awe-inspiring natural spectacles. Known in the indigenous Mundari language as Da-song, meaning water pouring from a pitcher, the Kanchi River cascades here from 144 feet across ten crystalline streams.',
    audioGuideHindi: 'दशम जलप्रपात में आपका स्वागत है। मुंडारी भाषा में इसे दा-सोंग कहा जाता है, जिसका अर्थ है घड़े से गिरता पानी। कांची नदी 144 फीट की ऊंचाई से 10 धाराओं में गिरती हुई एक विहंगम दृश्य प्रस्तुत करती है।',
    sarthiImpactScore: {
      overallScore: 88,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Rail-accessible via Ranchi hub with electric auto links along NH-33 corridor.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 82,
        metricText: '32/35: 82% of stall food purchases and parking fees support Taimara Mundari tribal village council.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '30/35: Paved stair infrastructure preventing hillside soil erosion during monsoon torrents.'
      },
      explanation: 'Dassam Falls maintains a high sustainability profile by directing tourist spend into indigenous village food stalls and maintaining paved forest stairways that minimize soil degradation.',
      sustainableRecommendations: [
        'Eat at local village stalls to support Mundari tribal families directly.',
        'Do not carry plastic bags down to the lower falls deck.',
        'Adhere strictly to designated safety railings.'
      ]
    }
  },
  {
    id: 'hundru-falls',
    name: 'Hundru Falls',
    hindiName: 'हुंडरू जलप्रपात',
    district: 'Ranchi',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Waterfalls',
    rating: 4.7,
    reviewsCount: 1890,
    approxCost: 500,
    bestTime: 'October to February',
    timings: '07:30 AM – 05:30 PM',
    entryFee: '₹15 per person',
    distanceRanchi: 45,
    coordinates: [23.4475, 85.6548],
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'One of Jharkhand’s tallest waterfalls where Subarnarekha River plunges 98 meters over jagged rock formations.',
    about: 'Hundru Falls is created on the course of the Subarnarekha River, where it falls from a height of 322 feet (98 m), creating one of the most magnificent water cascades in Eastern India. The water carving through ancient metamorphic Chotanagpur granite has hollowed out magnificent rock pools.',
    thingsToDo: [
      'Climb down the 700+ scenic steps for an up-close mist spray experience',
      'Explore natural rock pools carved over millennia',
      'Buy authentic hand-carved wooden and bamboo souvenirs from tribal artisans',
      'Enjoy river-side tea and roasted corn (Bhutta)'
    ],
    nearbyAttractions: ['Jonha Falls', 'Getalsud Dam', 'Sita Falls'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (48 km)',
      rail: 'Ranchi Railway Station (45 km)',
      road: 'Via Ranchi-Purulia Road, well-marked state highway'
    },
    localFood: [
      { name: 'Chilka Roti', description: 'Delicate crepes prepared from soaked rice and chana dal' },
      { name: 'Arsa Roti', description: 'Traditional sweet jaggery-infused rice delicacy' }
    ],
    safetyInfo: 'The staircase is steep; take rest stops if visiting with elders. Keep life jackets on if boating in designated Getalsud backwaters.',
    weatherPlaceholder: {
      temp: '23°C',
      condition: 'Misty & Sunny',
      forecast: 'Refreshing afternoon breeze'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Arrive early morning around 8:00 AM for quiet sunrise views and misty rainbows over the 98-meter gorge.',
    ecoAdvisories: [
      'Sal forest conservation zone',
      'Keep stairs clean and dispose trash at designated bins at the top gate'
    ],
    audioGuideText: 'Welcome to Hundru Falls, among the tallest waterfalls in Jharkhand. Here, the holy Subarnarekha River plunges 98 meters straight down a rugged granite gorge.',
    audioGuideHindi: 'हुंडरू जलप्रपात में आपका स्वागत है। सुवर्णरेखा नदी 98 मीटर की ऊंचाई से चट्टानों पर गिरती है। सुबह की सुनहरी धूप में यहां मनमोहक इंद्रधनुष बनते हैं।',
    sarthiImpactScore: {
      overallScore: 87,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 25,
        metricText: '25/30: Non-motorized walking trail descent of 700+ steps; shared bus transit from Ranchi.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 81,
        metricText: '32/35: Local youth committee operates certified rescue stations, souvenir stalls, and parking facilities.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '30/35: Subarnarekha river ecosystem protection preventing industrial effluent in upstream stretches.'
      },
      explanation: 'Hundru Falls features active local community stewardship: youth groups maintain the 700+ descent steps and ensure clean, plastic-free river banks.',
      sustainableRecommendations: [
        'Take your time descending and ascending the steps to avoid fatigue.',
        'Buy authentic bamboo handicrafts from local tribal artisans at the top gate.',
        'Never cross safety barriers near the deep river pools.'
      ]
    }
  },
  {
    id: 'jonha-falls',
    name: 'Jonha Falls (Gautamdhara)',
    hindiName: 'जोन्हा जलप्रपात',
    district: 'Ranchi',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Waterfalls',
    rating: 4.6,
    reviewsCount: 1120,
    approxCost: 450,
    bestTime: 'September to March',
    timings: '08:00 AM – 05:00 PM',
    entryFee: '₹10 per person',
    distanceRanchi: 42,
    coordinates: [23.3429, 85.6083],
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Sacred cascading falls of Raru River where Lord Gautam Buddha is believed to have bathed.',
    about: 'Also known as Gautamdhara, Jonha Falls is an edge-of-plateau hanging valley waterfall. To make the descent comfortable, 722 well-laid stairs lead down to the gorge. An ancient Buddhist shrine built by Raja Baldevdas Birla overlooks the serene valley.',
    thingsToDo: [
      'Visit the historic Gautam Buddha Ashram and Temple atop the cliff',
      'Experience weekly tribal haat (village market) held on Tuesdays and Saturdays',
      'Trek along the Raru riverbed during low currents',
      'Sample wild forest honey harvested by local tribal collectors'
    ],
    nearbyAttractions: ['Sita Falls', 'Hundru Falls', 'Ranchi Lake'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (45 km)',
      rail: 'Jonha Railway Station (1.5 km away on Ranchi-Muri line)',
      road: 'Ranchi-Purulia highway, 40 km easy drive'
    },
    localFood: [
      { name: 'Rugra / Puttu Curry', description: 'Seasonal wild indigenous forest mushroom cooked in fragrant mustard gravy' },
      { name: 'Kanda Curry', description: 'Nutritious tribal sweet root tuber delicacy' }
    ],
    safetyInfo: 'Local community eco-guides are available at ₹300-₹500. Highly recommended for safe navigation around deep pools.',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Partly Sunny',
      forecast: 'Clean mountain air, zero humidity'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Serene all day; 722 steps to descend and climb, great exercise and tranquil picnic spot.',
    ecoAdvisories: [
      'Temple sanctuary zone',
      'Modest attire recommended around Gautam Buddha ashram'
    ],
    audioGuideText: 'Welcome to Jonha Falls, also revered as Gautamdhara. Legend tells that Lord Buddha bathed in these serene waters of the Raru River during his wanderings.',
    audioGuideHindi: 'जोन्हा जलप्रपात, जिसे गौतमधारा भी कहा जाता है, में आपका स्वागत है। मान्यता है कि भगवान बुद्ध ने रारू नदी के इस पवित्र जल में स्नान किया था।',
    sarthiImpactScore: {
      overallScore: 89,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Direct railway station (Jonha) just 1.5 km from waterfall trail.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 82,
        metricText: '32/35: Weekly tribal haat allows visitors to buy organic honey and millets directly from farmers.'
      },
      conservationSensitivity: {
        score: 29,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '29/35: Sacred grove and temple buffer zone discouraging commercial plastic waste.'
      },
      explanation: 'Jonha Falls is conveniently rail-accessible via Jonha station on the Ranchi-Muri line, cutting vehicle emissions, and supports local tribal produce sales directly at the weekly village haat.',
      sustainableRecommendations: [
        'Take the passenger train to Jonha station for an authentic low-carbon adventure.',
        'Purchase wild honey directly from forest collector cooperatives.',
        'Respect the Buddhist ashram by keeping music and shouting strictly prohibited.'
      ]
    }
  },
  {
    id: 'netarhat',
    name: 'Netarhat',
    hindiName: 'नेतरहाट (छोटानागपुर की रानी)',
    district: 'Latehar',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Nature',
    rating: 4.9,
    reviewsCount: 2340,
    approxCost: 1800,
    bestTime: 'October to April (Magnificent chilling winters)',
    timings: 'Open 24 Hours (Lookouts 05:00 AM – 07:00 PM)',
    entryFee: 'Free (Individual viewpoints may charge nominal parking ₹30)',
    distanceRanchi: 156,
    coordinates: [23.4833, 84.2667],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The "Queen of Chotanagpur" — a tranquil hill station famous for pine forests, sunrise at Koel Viewpoint & Magnolia Sunset.',
    about: 'Perched at 3,696 feet amidst the dense Pat region of Latehar, Netarhat was developed as a cool summer retreat. It is celebrated for its ethereal mist, dense eucalyptus and chir pine woods, pristine orchards, and the tragic legend of Magnolia Point.',
    thingsToDo: [
      'Witness the iconic golden sunrise from Koel View Point overlooking the river gorge',
      'Experience the spellbinding crimson sunset at Magnolia Point',
      'Stroll through fragrant pine and pear orchards at Netarhat Chalet',
      'Visit the prestigious Netarhat Vidyalaya heritage campus',
      'Camp under starlit skies in certified tribal eco-homestays'
    ],
    nearbyAttractions: ['Upper Ghaghri Falls', 'Lower Ghaghri Falls', 'Lodh Falls', 'Betla National Park'],
    howToReach: {
      air: 'Ranchi Airport (160 km) - 4 hours via scenic ghats',
      rail: 'Lohardaga Railway Station (85 km) or Ranchi (156 km)',
      road: 'Scenic drive via Bero, Lohardaga and Ghaghra ghats'
    },
    localFood: [
      { name: 'Jharkhand Bamboo Shoot Curry (Karil)', description: 'Crisp young forest bamboo shoots stewed with local spices' },
      { name: 'Organic Netarhat Pears & Honey', description: 'Famous sweet mountain pears harvested directly from state orchards' }
    ],
    safetyInfo: 'Ghat roads have sharp hairpin turns. Drive carefully before sundown. Carry light woollens even in autumn.',
    weatherPlaceholder: {
      temp: '17°C',
      condition: 'Crisp & Breezy',
      forecast: 'Cool mountain evening, mist expected'
    },
    crowdStatus: 'High / Peak Rush',
    crowdAdvice: 'Magnolia Sunset Point gets crowded between 5:00 PM and 6:00 PM. Arrive 30 minutes early to secure the best view.',
    ecoAdvisories: [
      'Hill station eco-zone',
      'Zero littering policy along pine forests and Koel view point'
    ],
    audioGuideText: 'Welcome to Netarhat, celebrated as the Queen of Chotanagpur. Perched at 3,600 feet amidst rolling pine forests, this hill haven is famous for the legendary Magnolia Point sunset, sunrise over Koel View, and crisp mountain breezes.',
    audioGuideHindi: 'छोटानागपुर की रानी नेतरहाट में आपका स्वागत है। 3,600 फीट की ऊंचाई पर स्थित यह खूबसूरत हिल स्टेशन अपने मैग्नोलिया सूर्यास्त, कोयल व्यू पॉइंट और चीड़ के सुगंधित वनों के लिए प्रसिद्ध है।',
    sarthiImpactScore: {
      overallScore: 90,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 25,
        metricText: '25/30: Mountain walking trails among pine groves; shared transport encouraged along Lohardaga ghats.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 85,
        metricText: '33/35: Local Oraon and Asur tribal homestay hosts receive direct room and board revenue.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '32/35: Forest Department eco-zone protecting native chir pine and sal watersheds.'
      },
      explanation: 'Netarhat promotes sustainable mountain tourism through community homestays and zero-litter regulations along Magnolia Point and Koel View Point.',
      sustainableRecommendations: [
        'Stay in community-run eco-homestays to experience authentic tribal hospitality.',
        'Purchase organic mountain pears and wild honey directly from forest cooperatives.',
        'Arrive at sunset points by walking through pine trails rather than idling vehicles in parking lots.'
      ]
    }
  },
  {
    id: 'betla-national-park',
    name: 'Betla National Park',
    hindiName: 'बेतला राष्ट्रीय उद्यान',
    district: 'Palamu / Latehar',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Wildlife',
    rating: 4.8,
    reviewsCount: 1650,
    approxCost: 1500,
    bestTime: 'November to May (March-May is best for tiger/elephant sightings)',
    timings: 'Safari: 06:00 AM – 10:00 AM & 02:00 PM – 05:00 PM',
    entryFee: '₹100 per person, Jeep Safari ~₹1,200 (including mandatory guide)',
    distanceRanchi: 170,
    coordinates: [23.8867, 84.1878],
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Historic tiger reserve & sanctuary featuring wild Asiatic elephants, leopards, deer, and 16th-century Chero dynasty forts.',
    about: 'One of India’s earliest national parks under Project Tiger (1974), Betla spreads across the rich Sal and bamboo forests of Palamu. Inside the deep jungles stand the twin ancient brick and stone forts built by the Chero kings Raja Medini Ray and Raja Bhagwant Ray in the 16th century.',
    thingsToDo: [
      'Embark on early morning Jeep Safari to spot herds of gaur (Indian bison) and wild elephants',
      'Trek to the historic Palamu Fort deep within the reserve with an authorized forest guide',
      'Birdwatching: over 174 species including hornbills, crested serpent eagles, and peafowls',
      'Stay at eco-lodges operated by local tribal forest committees'
    ],
    nearbyAttractions: ['Kechki Sangam (River Confluence)', 'Mahuadanr Wolf Sanctuary', 'Suga Bandh Falls'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (175 km)',
      rail: 'Daltonganj Railway Station (25 km away, express connectivity)',
      road: 'NH 75 connects Ranchi to Daltonganj/Betla smoothly'
    },
    localFood: [
      { name: 'Desi Chicken Curry with Rice', description: 'Village free-range chicken simmered in clay pot with stone-ground spices' },
      { name: 'Madua Pitha', description: 'Steamed millet dumplings filled with spiced jaggery or lentils' }
    ],
    safetyInfo: 'Never step out of safari vehicles inside the core zone. Follow forest department guidelines strictly.',
    weatherPlaceholder: {
      temp: '26°C',
      condition: 'Sunny Forest Canopy',
      forecast: 'High animal activity near water holes'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Safari timings: 6:00 AM to 10:00 AM and 2:00 PM to 5:00 PM. Book gypsy safari at the forest gate 1 hour in advance.',
    ecoAdvisories: [
      'Tiger Reserve Buffer Area — strictly maintain silence inside the forest',
      'No plastic or horn honking permitted'
    ],
    audioGuideText: 'Welcome to Betla National Park in the Palamau Tiger Reserve. Among the earliest national parks in India, Betla is home to Asiatic wild elephants, leopards, sloth bears, and the historic 16th-century Chero dynasty Fort ruins hidden deep within sal woodlands.',
    audioGuideHindi: 'बेतला राष्ट्रीय उद्यान में आपका स्वागत है। यह भारत के सबसे पुराने संरक्षित वनों में से एक है जहां हाथी, गौर, हिरण और ऐतिहासिक चेरो राजाओं का किला वनों के बीच बसा है।',
    sarthiImpactScore: {
      overallScore: 91,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Proximity to Daltonganj railhead (25 km); restricted vehicle numbers inside core reserve.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 84,
        metricText: '33/35: Forest protection committees employ local tribal trackers and safari guides exclusively.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Protected Reserve',
        metricText: '32/35: Project Tiger guidelines enforcing strict core/buffer boundary regulations.'
      },
      explanation: 'Betla National Park combines Project Tiger biodiversity protection with the conservation of ancient Chero dynasty forts, supported by tribal forest committee employment.',
      sustainableRecommendations: [
        'Always take a certified forest guide during safari excursions.',
        'Carry reusable water containers: plastics are strictly prohibited inside the sanctuary.',
        'Support village eco-stays outside the gate that use solar lighting.'
      ]
    }
  },
  {
    id: 'deoghar',
    name: 'Deoghar (Baba Baidyanath)',
    hindiName: 'देवघर (बाबा बैद्यनाथ धाम)',
    district: 'Deoghar',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Spiritual',
    rating: 4.9,
    reviewsCount: 3800,
    approxCost: 800,
    bestTime: 'October to March (July-August for holy Shravani Mela)',
    timings: '04:00 AM – 09:00 PM (Afternoon break 03:30 PM - 06:00 PM)',
    entryFee: 'Free General Entry (VIP Shighra Darshan pass ₹500)',
    distanceRanchi: 250,
    coordinates: [24.4925, 86.7001],
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'One of the sacred 12 Jyotirlingas where millions gather, complemented by peaceful hills and cultural heritage.',
    about: 'Deoghar, meaning "Abode of the Gods", is home to the world-renowned Baidyanath Jyotirlinga Temple complex comprising 22 shrines. The temple is unique as it represents both a Jyotirlinga and a Shaktipeeth. It hosts the monumental month-long Shravani Mela.',
    thingsToDo: [
      'Take morning holy darshan and Abhishek at Baba Baidyanath Jyotirlinga',
      'Ride the scenic ropeway cable car up Trikuta Hills (Trikut Parvat)',
      'Explore the architectural marvel of Naulakha Temple',
      'Visit Satsang Ashram founded by Sri Sri Thakur Anukulchandra',
      'Buy world-famous Deoghar Peda straight from heritage sweet makers'
    ],
    nearbyAttractions: ['Trikut Pahar', 'Tapovan Caves', 'Naulakha Mandir', 'Basukinath Temple (45 km)'],
    howToReach: {
      air: 'Deoghar International Airport (DGH) - 6 km from temple, daily flights from Delhi, Kolkata, Bengaluru',
      rail: 'Jasidih Junction (7 km away, prime railway hub on Howrah-Delhi line)',
      road: 'Direct luxury buses from Ranchi, Patna, and Kolkata'
    },
    localFood: [
      { name: 'Deoghar Peda', description: 'Caramelized reduced milk sweet slow-roasted to golden amber perfection' },
      { name: 'Bel Ka Sharbat', description: 'Refreshing natural wood apple drink served chilled' }
    ],
    safetyInfo: 'Queue times can be long during Mondays and festivals. Early morning (5 AM) or VIP entry is recommended.',
    weatherPlaceholder: {
      temp: '25°C',
      condition: 'Warm & Festive',
      forecast: 'Bustling spiritual atmosphere'
    },
    crowdStatus: 'High / Peak Rush',
    crowdAdvice: 'High footfall during Shravan and Mondays. Early morning VIP/Sugam Darshan entry between 5:00 AM and 7:00 AM is recommended.',
    ecoAdvisories: [
      'Temple sanctum sacred zone',
      'Electronic devices and leather items restricted inside sanctum'
    ],
    audioGuideText: 'Welcome to Baba Baidyanath Dham in Deoghar, one of the 12 sacred Jyotirlingas of Lord Shiva. According to Hindu epic Ramayana, Ravana worshipped Lord Shiva here to obtain immense power.',
    audioGuideHindi: 'द्वादश ज्योतिर्लिंगों में से एक बाबा बैद्यनाथ धाम देवघर में आपका स्वागत है। हर वर्ष लाखों श्रद्धालु 105 किलोमीटर की पैदल कांवड़ यात्रा कर सुल्तानगंज से गंगाजल लाकर बाबा को अर्पित करते हैं।',
    sarthiImpactScore: {
      overallScore: 86,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 27,
        metricText: '27/30: High rail connectivity via Jasidih Junction and walkable pedestrian temple town streets.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 31,
        economicRetentionPct: 79,
        metricText: '31/35: Thousands of local sweet-makers (Peda), floral sellers, and guesthouse families directly depend on pilgrimage trade.'
      },
      conservationSensitivity: {
        score: 28,
        carryingCapacity: 'High Footfall Regulated',
        metricText: '28/35: Temple board management implements digital queuing and bio-waste management for ritual flower offerings.'
      },
      explanation: 'Deoghar demonstrates how large-scale pilgrimage heritage can adopt green practices: Jasidih railway hub minimizes private car travel, while ritual floral waste is converted into organic compost.',
      sustainableRecommendations: [
        'Arrive by train via Jasidih Junction to reduce vehicular congestion in the temple town.',
        'Purchase authentic Peda directly from traditional local sweet shops around Tower Chowk.',
        'Deposit floral offerings into designated temple compost collection bins.'
      ]
    }
  },
  {
    id: 'patratu-valley',
    name: 'Patratu Valley & Dam',
    hindiName: 'पतरातू घाटी एवं जलाशय',
    district: 'Ramgarh',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Adventure',
    rating: 4.8,
    reviewsCount: 2950,
    approxCost: 750,
    bestTime: 'Throughout the year, especially monsoon & winter',
    timings: 'Valley open 24/7; Lake Sports Resort: 09:00 AM – 06:30 PM',
    entryFee: 'Lake Island entry ₹50, Jet ski & speedboats ₹250-₹500',
    distanceRanchi: 35,
    coordinates: [23.6300, 85.2900],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Spectacular serpentine ghat roads cutting through lush emerald hills leading to a modern water-sports lake resort.',
    about: 'Located just 35 km north of Ranchi in Ramgarh district, Patratu Valley features an iconic snake-like winding highway that rivals international mountain drives. At its base lies the expansive Patratu Dam and the newly developed Patratu Lake Resort.',
    thingsToDo: [
      'Stop at the valley hairpin lookout points for aerial drone & landscape shots',
      'Speed boating, banana rides, and parasailing at Patratu Lake Resort',
      'Dine on the floating restaurant with panoramic lake views',
      'Watch the evening musical light & laser water fountain show',
      'Rent an electric bike to cruise along the lake promenade'
    ],
    nearbyAttractions: ['Ranchi Rock Garden', 'Kanke Dam', 'Rajrappa Temple'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (42 km) - 50 minutes smooth highway drive',
      rail: 'Patratu Railway Station (5 km) or Ranchi Junction (35 km)',
      road: 'Four-lane scenic expressway directly from Ranchi city center'
    },
    localFood: [
      { name: 'Fried Lake Rohu & Katla Fish', description: 'Crispy marinated freshwater fish caught fresh from Patratu reservoir' },
      { name: 'Litti Chokha with Desi Ghee', description: 'Baked wheat balls stuffed with sattu roasted over cow-dung embers' }
    ],
    safetyInfo: 'Avoid overtaking on blind curves along the ghat road. Park only in demarcated viewpoint parking bays.',
    weatherPlaceholder: {
      temp: '22°C',
      condition: 'Clear & Windy',
      forecast: 'Breezy winds across the valley'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Spectacular winding ghat road; peaceful on weekdays, lively evening street food & boating by Patratu Dam.',
    ecoAdvisories: [
      'Drive safely along sharp hair-pin bends',
      'Boating life jackets mandatory at Patratu Lake Resort'
    ],
    audioGuideText: 'Welcome to Patratu Valley, Jharkhand\'s scenic wonderland of twisting hairpin turns and lush emerald hills. Often called the Swiss Alps of Jharkhand, the panoramic view from the summit overlooks the sparkling waters of Patratu Dam reservoir.',
    audioGuideHindi: 'पतरातु घाटी में आपका स्वागत है। सर्पीली घुमावदार सड़कें और हरे-भरे पहाड़ इसे झारखंड का सबसे सुंदर ड्राइव मार्ग बनाते हैं। पतरातु डैम के शांत जलाशय पर बोटिंग और फ्लोटिंग रेस्तरां का आनंद लें।',
    sarthiImpactScore: {
      overallScore: 85,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 25,
        metricText: '25/30: Proximity to Patratu railway station; electric-bike rentals available on the lake promenade.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 30,
        economicRetentionPct: 78,
        metricText: '30/35: Local lakeside fishermen provide fresh catch to floating dining venues and manage parking facilities.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '30/35: Reservoir water quality monitoring ensuring water-sports craft adhere to clean fuel and safety standards.'
      },
      explanation: 'Patratu Valley combines modern adventure tourism with scenic mountain road engineering, while reservoir fisheries sustain local fishing families.',
      sustainableRecommendations: [
        'Rent electric bikes to explore the lake promenade without burning fuel.',
        'Eat at local lakeside family stalls offering fresh catch fish and litti chokha.',
        'Never litter near scenic viewpoint pull-outs along the mountain curves.'
      ]
    }
  },
  {
    id: 'ranchi',
    name: 'Ranchi City & Cultural Heritage',
    hindiName: 'रांची (झरनों का शहर)',
    district: 'Ranchi',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Culture',
    rating: 4.7,
    reviewsCount: 3100,
    approxCost: 1000,
    bestTime: 'October to March',
    timings: 'City attractions: 09:00 AM – 07:00 PM',
    entryFee: 'Varies by park (₹10 - ₹40)',
    distanceRanchi: 0,
    coordinates: [23.3441, 85.3096],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The vibrant capital city — "City of Waterfalls", home to Rabindranath Tagore’s hill, tribal research institutes, and modern cuisine.',
    about: 'Ranchi sits at 2,140 feet elevation on the southern Chotanagpur Plateau. It seamlessly blends modern urban vitality with deep tribal roots. Attractions include Tagore Hill, Rock Garden, Ranchi Lake, the State Tribal Museum, and Birsa Munda Smriti Park.',
    thingsToDo: [
      'Climb the steps of Tagore Hill to view Jyotirindranath Tagore’s Brahma Mandir',
      'Explore authentic tribal artifacts and dioramas at Jharkhand Tribal Research Institute',
      'Relax at the artistic Rock Garden sculpted around Gonda Hill and Kanke Dam',
      'Shop at Jharcraft Mega Emporium for certified Tussar silk sarees and Dokra brass',
      'Visit the newly opened Birsa Munda Museum & Memorial Park'
    ],
    nearbyAttractions: ['Dassam Falls', 'Hundru Falls', 'Patratu Valley', 'Jagannath Temple Ranchi'],
    howToReach: {
      air: 'Birsa Munda Airport connects directly to Delhi, Mumbai, Bengaluru, Chennai, Kolkata',
      rail: 'Ranchi Junction & Hatia stations with Vande Bharat and Rajdhani express trains',
      road: 'Extensive national highway connections across Jharkhand, Bihar, and West Bengal'
    },
    localFood: [
      { name: 'Dhuska & Chana Sabzi', description: 'Famous street breakfast served piping hot across Ranchi stalls' },
      { name: 'Munga Saag & Rice', description: 'Healthy drumstick leaves stir-fried with mustard and garlic' }
    ],
    safetyInfo: 'The city is very tourist-friendly. Metred auto-rickshaws, Ola, and Uber cabs are readily available 24/7.',
    weatherPlaceholder: {
      temp: '24°C',
      condition: 'Pleasant & Mild',
      forecast: 'Optimal urban exploration climate'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Tagore Hill is serene during early mornings; Rock Garden is popular with families in the late afternoon.',
    ecoAdvisories: [
      'Heritage protection area',
      'Respect historical memory of Jyotirindranath Tagore'
    ],
    audioGuideText: 'Welcome to Ranchi, capital of Jharkhand. Explore Tagore Hill, where Nobel laureate Rabindranath Tagore\'s elder brother Jyotirindranath Tagore found poetic inspiration, and the artistic Rock Garden sculpted around Kanke Dam rocks.',
    audioGuideHindi: 'झारखंड की राजधानी रांची में आपका स्वागत है। टैगोर हिल साहित्य और कला की ऐतिहासिक धरोहर है जहां ज्योतिरिंद्रनाथ टैगोर ने कई महान रचनाएं लिखी थीं।',
    sarthiImpactScore: {
      overallScore: 87,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 28,
        metricText: '28/30: Prime regional multi-modal rail and electric-bus hub; central transit anchor.',
        transitType: 'Rail Accessible'
      },
      communityBenefit: {
        score: 30,
        economicRetentionPct: 78,
        metricText: '30/35: Jharcraft emporium and state tribal museum support over 40,000 rural weavers and Dokra artisans.'
      },
      conservationSensitivity: {
        score: 29,
        carryingCapacity: 'Regulated / Low Impact',
        metricText: '29/35: Urban parks around Kanke Dam and Tagore Hill preserve natural Chotanagpur granite geological formations.'
      },
      explanation: 'As the central transit hub of the state, Ranchi provides low-emission rail connections and houses the certified Jharcraft emporium, which funnels economic benefits back to village weavers.',
      sustainableRecommendations: [
        'Use electric autos and shared city buses to travel between city heritage spots.',
        'Buy authentic Tussar silk sarees and Dokra brass at government-certified Jharcraft stores.',
        'Explore the State Tribal Museum to understand indigenous nature-worship philosophy.'
      ]
    }
  },
  {
    id: 'parasnath',
    name: 'Parasnath Hill (Shikharji)',
    hindiName: 'पारसनाथ पर्वत (श्री सम्मेद शिखरजी)',
    district: 'Giridih',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Spiritual',
    rating: 4.9,
    reviewsCount: 2200,
    approxCost: 900,
    bestTime: 'October to March',
    timings: 'Trek begins: 03:00 AM – 06:00 PM',
    entryFee: 'Free entry (Doli / sedan-chair charges set by local committee ~₹2,500-₹4,000)',
    distanceRanchi: 160,
    coordinates: [23.9628, 86.1306],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The highest peak in Jharkhand (1,365m) and the most sacred Jain pilgrimage where 20 of 24 Tirthankaras attained Moksha.',
    about: 'Rising sharply above the plateau to 4,478 feet (1,365 m), Parasnath is the highest mountain summit in Jharkhand state. Named after Parshvanatha, the 23rd Tirthankara, it is worshipped as Shikharji. The 27-km round-trip pilgrimage trek passes through pristine dense mountain forests dotted with ornate marble Tonks (temple shrines).',
    thingsToDo: [
      'Begin the traditional 9 km uphill trek in early dawn hours from Madhuban base',
      'Pay homage at the Parasnath Tirthankara Tonks along the mountain crest',
      'Enjoy 360-degree panoramic views of Giridih and Damodar river basin',
      'Experience traditional Jain dharamsalas offering pure satvik vegetarian dining',
      'Discover endemic Himalayan and Peninsular flora along high-altitude ridges'
    ],
    nearbyAttractions: ['Madhuban Jain Temples', 'Usri Falls Giridih', 'Khandoli Dam & Adventure Park'],
    howToReach: {
      air: 'Kazi Nazrul Islam Airport Durgapur (130 km) or Ranchi Airport (160 km)',
      rail: 'Parasnath Railway Station (PNME) - 22 km from Madhuban base camp on Grand Chord line',
      road: 'NH 19 (Grand Trunk Road) passes right by Dumri / Parasnath'
    },
    localFood: [
      { name: 'Pure Satvik Jain Thali', description: 'Traditional vegetarian thali cooked without root vegetables, prepared with ghee' },
      { name: 'Giridih Chena Murki', description: 'Crisp sugar-glazed cottage cheese sweets' }
    ],
    safetyInfo: 'Trek requires decent fitness. Doli (palanquin) services are operated by licensed local tribal youth. Carry hydration bottles.',
    weatherPlaceholder: {
      temp: '18°C',
      condition: 'Crisp Mountain Breeze',
      forecast: 'Cool summit temperature, light wind'
    },
    crowdStatus: 'Moderate',
    crowdAdvice: 'Pilgrims start the 9 km uphill trek at 3:00 AM to reach the summit shrines before midday sun.',
    ecoAdvisories: [
      'Sacred Tirtha — strictly vegetarian and alcohol-free zone',
      'Respect Jain pilgrims and mountain sanctity'
    ],
    audioGuideText: 'Welcome to Shikharji on Parasnath Hill, the highest peak in Jharkhand at 1,365 meters and the most sacred pilgrimage site in Jainism, where 20 of the 24 Tirthankaras attained Moksha.',
    audioGuideHindi: 'पारसनाथ की पवित्र शिखरजी भूमि में आपका स्वागत है। 1365 मीटर की ऊंचाई पर स्थित यह पर्वत जैन धर्म का सर्वोच्च तीर्थ है, जहां 20 तीर्थंकरों ने मोक्ष प्राप्त किया।',
    sarthiImpactScore: {
      overallScore: 92,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 29,
        metricText: '29/30: Strictly 100% foot-walking mountain trail (27 km circuit); direct Parasnath railway station on Grand Chord line.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 33,
        economicRetentionPct: 86,
        metricText: '33/35: Over 4,000 Santhal and local tribal youth are registered as authorized doli carriers and guides, earning fair daily wages.'
      },
      conservationSensitivity: {
        score: 30,
        carryingCapacity: 'Protected Reserve',
        metricText: '30/35: Strictly vegetarian and alcohol-free holy sanctuary with community clean-up drives along the crest trail.'
      },
      explanation: 'Parasnath Hill is a remarkable walking pilgrimage sanctuary: the complete prohibition of motorized vehicles on the mountain guarantees zero emissions, while local tribal doli committees earn significant community livelihood.',
      sustainableRecommendations: [
        'Complete the pilgrimage on foot to embrace the mountain\'s profound peace and zero carbon footprint.',
        'Respect the strict satvik vegetarian ethos of the mountain by not carrying non-vegetarian food or tobacco.',
        'Carry reusable water containers: deposit all waste in designated bins at Madhuban base.'
      ]
    }
  },
  {
    id: 'hirni-falls',
    name: 'Hirni Falls',
    hindiName: 'हिरणी जलप्रपात',
    district: 'West Singhbhum',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Waterfalls',
    rating: 4.6,
    reviewsCount: 980,
    approxCost: 400,
    bestTime: 'September to February',
    timings: '08:00 AM – 05:00 PM',
    entryFee: '₹15 per person',
    distanceRanchi: 68,
    coordinates: [22.7936, 85.3411],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Hidden emerald cascade inside virgin dense sal forests of Saranda, dropping 37 meters with untouched natural serenity.',
    about: 'Surrounded by the dense Saranda and Porahat forest belt, Hirni Falls is formed by the Ramgarha River tumbling 121 feet (37 m) into a deep rocky gorge. Because it is slightly off the main tourist trail, it retains an exceptionally serene, unspoiled natural atmosphere.',
    thingsToDo: [
      'Climb the forest observation bridge for an aerial view of the cascade plunging into greenery',
      'Nature trails through ancient Sal and Asan tree groves',
      'Listen to the chorus of forest barbets and hornbills',
      'Picnic in designated eco-tourism shelters maintained by the Forest Department'
    ],
    nearbyAttractions: ['Ranchi Khunti Circuit', 'Panchghagh Falls', 'Birsa Munda Tomb Khunti'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (70 km)',
      rail: 'Chakradharpur (40 km) or Ranchi (68 km)',
      road: 'NH 75E connecting Ranchi to Chaibasa'
    },
    localFood: [
      { name: 'Sal Leaf Steamed Pitha', description: 'Fragrant rice flour parcels wrapped in fresh Sal leaves and steamed' },
      { name: 'Chilka Roti with Wild Herb Chutney', description: 'Crispy rice pancake with roasted coriander and raw forest tamarind' }
    ],
    safetyInfo: 'Remote forest area: Return to the highway before dusk. Avoid entering deep waters at the plunge pool.',
    weatherPlaceholder: {
      temp: '23°C',
      condition: 'Shaded & Cool',
      forecast: 'Pristine rainforest microclimate'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Quiet and pristine waterfall in West Singhbhum dense sal forest; great for peaceful nature retreat.',
    ecoAdvisories: [
      'Forest fringe eco-zone',
      'Do not enter dense forest without registered local forest guides'
    ],
    audioGuideText: 'Welcome to Hirni Falls, tucked away in the deep Sal forests of West Singhbhum. Fed by the Ramgarha river, the water drops 37 meters in a tranquil, untouched forested gorge.',
    audioGuideHindi: 'हिरणी जलप्रपात में आपका स्वागत है। पश्चिमी सिंहभूम के घने साल के जंगलों के बीच रामगढ़ा नदी का यह शांत झरना प्रकृति प्रेमियों के लिए एक छिपा हुआ स्वर्ग है।',
    sarthiImpactScore: {
      overallScore: 90,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Shaded canopy walking trails; low commercial infrastructure footprint.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 32,
        economicRetentionPct: 83,
        metricText: '32/35: Ho tribal village guides and roadside tea stalls provide local livelihood.'
      },
      conservationSensitivity: {
        score: 32,
        carryingCapacity: 'Protected Reserve',
        metricText: '32/35: Buffer edge of Saranda forest protecting ancient sal and asan tree canopies.'
      },
      explanation: 'Hirni Falls is characterized by its untouched forest character: with minimal concrete modifications, nature is preserved in its authentic wilderness state.',
      sustainableRecommendations: [
        'Take registered local forest guides when walking into the deeper tree groves.',
        'Dispose of all food wrappers in designated entrance bins before entering the trail.',
        'Support village women selling steamed sal-leaf pitha at the forest entrance.'
      ]
    }
  },
  {
    id: 'lodh-falls',
    name: 'Lodh Falls (Burha Ghagh)',
    hindiName: 'लोध जलप्रपात (बूढ़ा घाघ)',
    district: 'Latehar',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Waterfalls',
    rating: 4.9,
    reviewsCount: 1280,
    approxCost: 700,
    bestTime: 'October to March',
    timings: '08:00 AM – 05:00 PM',
    entryFee: '₹20 per adult',
    distanceRanchi: 195,
    coordinates: [23.5383, 84.1167],
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The highest waterfall in Jharkhand and 21st highest in India, dropping 143 meters (469 ft) down tiers of granite.',
    about: 'Lodh Falls, also known as Burha Ghagh, is situated on the Burha River within the deep forests of Latehar. The water plunges 469 feet in multiple majestic tiers. The deafening thud of the water falling can be heard over 10 km away during the late monsoon months.',
    thingsToDo: [
      'Trek the forest pathway down to the valley viewing terrace',
      'Experience the roar and thunderous spray of Jharkhand’s grandest waterfall',
      'Photograph pristine virgin forest foliage and multi-tiered cascades',
      'Camp in nearby eco-tourism zones with certified local tribal wardens'
    ],
    nearbyAttractions: ['Netarhat (60 km)', 'Betla National Park (90 km)', 'Mirchaiya Falls'],
    howToReach: {
      air: 'Ranchi Airport (195 km)',
      rail: 'Daltonganj Railway Station (110 km)',
      road: 'Via Mahuadanr from Netarhat or Latehar'
    },
    localFood: [
      { name: 'Bamboo Shoot Curry (Karil)', description: 'Wild organic shoots cooked with mustard seeds' },
      { name: 'Mahua Ladoo', description: 'Nutritious sweet treats made from wild Mahua flowers, sesame, and jaggery' }
    ],
    safetyInfo: 'Remote location; carry sufficient vehicle fuel and travel with an authorized local guide from Mahuadanr.',
    weatherPlaceholder: {
      temp: '20°C',
      condition: 'Brisk Forest Air',
      forecast: 'Enchanting roaring mist'
    },
    crowdStatus: 'Low',
    crowdAdvice: 'Highest waterfall in Jharkhand (143 meters). Best visited with a local vehicle from Latehar.',
    ecoAdvisories: [
      'Remote forest road — ensure return before dark',
      'Strict forest fire prevention zone'
    ],
    audioGuideText: 'Welcome to Lodh Falls, also known as Burha Ghagh, the undisputed highest waterfall in Jharkhand plunging 143 meters deep inside Latehar\'s dense wilderness. The roaring sound of water is heard from over 10 kilometers away.',
    audioGuideHindi: 'लोध जलप्रपात (बूढ़ा घाघ) झारखंड का सबसे ऊंचा जलप्रपात है जो 143 मीटर की ऊंचाई से गिरता है। इसकी गर्जना 10 किलोमीटर दूर तक सुनी जा सकती है।',
    sarthiImpactScore: {
      overallScore: 93,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Virgin forest footpaths; eco-camping zones with solar lighting.',
        transitType: 'Trek / Footpath Friendly'
      },
      communityBenefit: {
        score: 34,
        economicRetentionPct: 88,
        metricText: '34/35: Mahuadanr tribal eco-tourism youth committee manages visitor admissions, guiding, and campsite security.'
      },
      conservationSensitivity: {
        score: 33,
        carryingCapacity: 'Protected Reserve',
        metricText: '33/35: Dense watershed forest with zero commercial hotel developments inside the river gorge.'
      },
      explanation: 'Lodh Falls represents authentic wilderness conservation: the highest fall in Jharkhand is maintained without intrusive commercial constructions, providing direct livelihood to Mahuadanr tribal youths.',
      sustainableRecommendations: [
        'Engage local guide wardens from Mahuadanr for safe navigation on forest approach roads.',
        'Pack out all non-biodegradable trash to preserve the pristine Burha River gorge.',
        'Purchase wild Mahua sweets and bamboo pickles from local community stalls.'
      ]
    }
  },
  {
    id: 'rajrappa',
    name: 'Rajrappa (Maa Chhinnamasta Temple)',
    hindiName: 'रजरप्पा (माँ छिन्नमस्तिका शक्तिपीठ)',
    district: 'Ramgarh',
    state: 'Jharkhand',
    zone: 'East',
    category: 'Spiritual',
    rating: 4.8,
    reviewsCount: 3200,
    approxCost: 650,
    bestTime: 'October to March',
    timings: '05:00 AM – 08:30 PM',
    entryFee: 'Free entry (Boating in river ₹50)',
    distanceRanchi: 65,
    coordinates: [23.6322, 85.7061],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Venerated Tantric Shaktipeeth situated at the dramatic rocky confluence of the sacred Damodar and Bhera (Bhairavi) rivers.',
    about: 'Rajrappa is celebrated for the ancient Maa Chhinnamasta Temple, one of the ten Mahavidyas of Hinduism. The temple is perched on a natural hillock where the Bhera river plunges from a 20-foot rock ledge as a waterfall into the mighty Damodar river. Boat rides over the jagged metamorphic rocky gorges offer surreal views.',
    thingsToDo: [
      'Darshan and blessings at Maa Chhinnamasta ancient sanctum',
      'Take a scenic traditional wooden country-boat ride over the river confluence',
      'Witness the natural waterfall created by the Bhera river joining the Damodar',
      'Explore the nearby Shiva and Mahavidya shrines'
    ],
    nearbyAttractions: ['Patratu Valley', 'Ramgarh Hills', 'Hundru Falls'],
    howToReach: {
      air: 'Birsa Munda Airport Ranchi (70 km)',
      rail: 'Ramgarh Cantt (28 km) or Ranchi Junction (65 km)',
      road: 'Direct 4-lane highway from Ranchi via Ramgarh'
    },
    localFood: [
      { name: 'Rajrappa Peda & Prasad', description: 'Freshly stirred pure milk mawa peda' },
      { name: 'Litti Chokha with Mustard Chutney', description: 'Charred sattu litti dipped in ghee' }
    ],
    safetyInfo: 'River rocks near the confluence can be slippery. Do not bathe beyond safety chains.',
    weatherPlaceholder: {
      temp: '24°C',
      condition: 'Sunny & River Breeze',
      forecast: 'Lively spiritual atmosphere'
    },
    crowdStatus: 'High / Peak Rush',
    crowdAdvice: 'Auspicious Shaktipeeth at the confluence of Bhairavi and Damodar rivers. Expect queues on Tuesdays, Saturdays, and Navratri.',
    ecoAdvisories: [
      'River confluence — obey bathing safety barricades',
      'Respect ancient Tantric heritage'
    ],
    audioGuideText: 'Welcome to Rajrappa, home to the ancient and powerful Maa Chhinnamastika Temple. Situated at the dramatic geological confluence of the Damodar and Bhairavi rivers, this Shaktipeeth is one of India\'s most revered tantric pilgrimage centers.',
    audioGuideHindi: 'मां छिन्नमस्तिका मंदिर रजरप्पा में आपका स्वागत है। दामोदर और भैरवी नदी के पावन संगम पर स्थित यह सिद्ध शक्तिपीठ तंत्र साधना और आस्था का महाकेंद्र है।',
    sarthiImpactScore: {
      overallScore: 86,
      tier: 'Eco Pioneer (85-100)',
      carbonEfficiency: {
        score: 26,
        metricText: '26/30: Well-connected to Ramgarh Cantt railway hub; traditional hand-rowed wooden river boats.',
        transitType: 'Electric / Shared Transit'
      },
      communityBenefit: {
        score: 31,
        economicRetentionPct: 79,
        metricText: '31/35: Local boatmen, floral vendors, and sweet makers depend on year-round pilgrimage traffic.'
      },
      conservationSensitivity: {
        score: 29,
        carryingCapacity: 'High Footfall Regulated',
        metricText: '29/35: Damodar-Bhairavi river safety barricades and biological waste recycling programs.'
      },
      explanation: 'Rajrappa combines ancient tantric pilgrimage heritage with traditional non-motorized wooden boat operations, sustaining local boatmen along the river confluence.',
      sustainableRecommendations: [
        'Ride non-motorized wooden rowboats rather than diesel boats to prevent river pollution.',
        'Buy traditional milk peda directly from local sweet makers around the temple chowk.',
        'Respect the river confluence safety chains and do not dispose of plastic offerings into the waters.'
      ]
    }
  }
];

export const CATEGORIES = [
  { name: 'Nature', count: 24, icon: 'Trees', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { name: 'Waterfalls', count: 18, icon: 'Droplets', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'Culture', count: 28, icon: 'Compass', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { name: 'Wildlife', count: 16, icon: 'PawPrint', color: 'bg-orange-100 text-orange-800 border-orange-300' },
  { name: 'Adventure', count: 14, icon: 'Mountain', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  { name: 'Spiritual', count: 22, icon: 'Sparkles', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  { name: 'Heritage', count: 20, icon: 'Landmark', color: 'bg-rose-100 text-rose-800 border-rose-300' },
];

export const HEART_OF_INDIA_CARDS = [
  {
    title: 'Indigenous Living Cultures',
    subtitle: 'Tribal Traditions Across India',
    description: 'Immerse in the ancestral wisdom, sustainable architecture, and sacred grove traditions of the Khasi, Santhal, Munda, Toda, Baiga, and Mishing peoples.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tag: 'Living Heritage',
    route: 'marketplace'
  },
  {
    title: 'Regional Cuisines & Millets',
    subtitle: 'Farm-to-Fork Organic Gastronomy',
    description: 'Savor biodiversity on a plate: Spitian barley Thukpa, Garhwali Kafuli, Chettinad spice feasts, Kerala backwater appam, and crunchy Jharkhand Dhuska.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Authentic Cuisines',
    route: 'marketplace'
  },
  {
    title: 'Cultural Festivals of India',
    subtitle: 'Ancient Rhythms of Nature & Faith',
    description: 'Experience sacred celebrations: Sarhul sal flower festivals, Hornbill tribal dances, Onam harvest boat races, and Shravani Mela pilgrimages.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    tag: 'Cultural Calendar',
    route: 'calendar'
  },
  {
    title: 'GI-Tagged Handicrafts',
    subtitle: 'Direct-from-Artisan Masterpieces',
    description: 'Support certified master craftspeople: Odisha Pattachitra scrolls, Kutch Rogan art, Toda embroidery, Athangudi tiles, and 4,000-year-old Dhokra brass.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tag: 'Artisan Economy',
    route: 'marketplace'
  },
  {
    title: 'Eco-Tourism & Solar Stays',
    subtitle: 'Low-Carbon Community Retreats',
    description: 'Stay in 100% community-owned solar lodges in Spiti, silent canoe villages in Kerala, and vernacular earthen Bhunga homestays in Kutch.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    tag: 'Sustainable Travel',
    route: 'marketplace'
  },
  {
    title: 'Rural Village Immersions',
    subtitle: 'Heritage Courtyards & Storytelling',
    description: 'Walk through mud-plastered painted village courtyards, learn traditional drumming, organic agroforestry, and dine with local host families.',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80',
    tag: 'Rural Immersion',
    route: 'marketplace'
  }
];

// Backward-compatible alias for existing imports
export const HEART_OF_JHARKHAND_CARDS = HEART_OF_INDIA_CARDS;
