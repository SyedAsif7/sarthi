import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'dassam-falls',
    name: 'Dassam Falls',
    hindiName: 'दशम जलप्रपात',
    district: 'Ranchi',
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
    }
  },
  {
    id: 'hundru-falls',
    name: 'Hundru Falls',
    hindiName: 'हुंडरू जलप्रपात',
    district: 'Ranchi',
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
    }
  },
  {
    id: 'jonha-falls',
    name: 'Jonha Falls (Gautamdhara)',
    hindiName: 'जोन्हा जलप्रपात',
    district: 'Ranchi',
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
    }
  },
  {
    id: 'netarhat',
    name: 'Netarhat',
    hindiName: 'नेतरहाट (छोटानागपुर की रानी)',
    district: 'Latehar',
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
    about: 'Perched at 3,696 feet amidst the dense Pat region of Latehar, Netarhat was developed as a cool summer retreat during colonial times. It is celebrated for its ethereal mist, dense eucalyptus and chir pine woods, pristine orchards, and the tragic legend of Magnolia Point.',
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
    }
  },
  {
    id: 'betla-national-park',
    name: 'Betla National Park',
    hindiName: 'बेतला राष्ट्रीय उद्यान',
    district: 'Palamu / Latehar',
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
    }
  },
  {
    id: 'deoghar',
    name: 'Deoghar (Baba Baidyanath)',
    hindiName: 'देवघर (बाबा बैद्यनाथ धाम)',
    district: 'Deoghar',
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
    about: 'Deoghar, meaning "Abode of the Gods", is home to the world-renowned Baidyanath Jyotirlinga Temple complex comprising 22 shrines. The temple is unique as it represents both a Jyotirlinga and a Shaktipeeth (where Goddess Sati’s heart is believed to have fallen). It hosts the monumental month-long Shravani Mela.',
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
    }
  },
  {
    id: 'patratu-valley',
    name: 'Patratu Valley & Dam',
    hindiName: 'पतरातू घाटी एवं जलाशय',
    district: 'Ramgarh',
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
    about: 'Located just 35 km north of Ranchi in Ramgarh district, Patratu Valley features an iconic snake-like winding highway that rivals international mountain drives. At its base lies the expansive Patratu Dam and the newly developed Patratu Lake Resort featuring speed boating, jet skiing, floating restaurants, and musical fountain shows.',
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
    }
  },
  {
    id: 'ranchi',
    name: 'Ranchi City & Cultural Heritage',
    hindiName: 'रांची (झरनों का शहर)',
    district: 'Ranchi',
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
    about: 'Ranchi sits at 2,140 feet elevation on the southern Chotanagpur Plateau. It seamlessly blends modern urban vitality with deep tribal roots. Attractions include Tagore Hill (where Jyotirindranath Tagore built a hermitage and Rabindranath frequently visited), Rock Garden, Ranchi Lake, the State Tribal Museum, and Birsa Munda Smriti Park.',
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
    }
  },
  {
    id: 'parasnath',
    name: 'Parasnath Hill (Shikharji)',
    hindiName: 'पारसनाथ पर्वत (श्री सम्मेद शिखरजी)',
    district: 'Giridih',
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
    }
  },
  {
    id: 'hirni-falls',
    name: 'Hirni Falls',
    hindiName: 'हिरणी जलप्रपात',
    district: 'West Singhbhum',
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
    }
  },
  {
    id: 'lodh-falls',
    name: 'Lodh Falls (Burha Ghagh)',
    hindiName: 'लोध जलप्रपात (बूढ़ा घाघ)',
    district: 'Latehar',
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
    }
  },
  {
    id: 'rajrappa',
    name: 'Rajrappa (Maa Chhinnamasta Temple)',
    hindiName: 'रजरप्पा (माँ छिन्नमस्तिका शक्तिपीठ)',
    district: 'Ramgarh',
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
    }
  }
];

export const CATEGORIES = [
  { name: 'Nature', count: 18, icon: 'Trees', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { name: 'Waterfalls', count: 14, icon: 'Droplets', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'Culture', count: 22, icon: 'Compass', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { name: 'Wildlife', count: 9, icon: 'PawPrint', color: 'bg-orange-100 text-orange-800 border-orange-300' },
  { name: 'Adventure', count: 12, icon: 'Mountain', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  { name: 'Spiritual', count: 15, icon: 'Sparkles', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  { name: 'Heritage', count: 11, icon: 'Landmark', color: 'bg-rose-100 text-rose-800 border-rose-300' },
];

export const HEART_OF_JHARKHAND_CARDS = [
  {
    title: 'Tribal Culture',
    subtitle: 'Sanitized 32 Indigenous Tribes',
    description: 'Immerse in the rich traditions, languages, and rituals of the Santhal, Munda, Oraon, and Ho communities who have protected the forests for centuries.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tag: 'Living Heritage',
    route: 'marketplace'
  },
  {
    title: 'Local Food',
    subtitle: 'Forest Flavors & Ancient Grains',
    description: 'Savor earthy delights: crunchy Dhuska, Rugra forest mushrooms, bamboo shoot karil, Chilka roti, and refreshing Mahua tea.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Authentic Cuisines',
    route: 'marketplace'
  },
  {
    title: 'Festivals',
    subtitle: 'Rhythms of Sarhul & Karma',
    description: 'Celebrate nature worship with blooming Sal flowers during Sarhul, harvest songs of Tusu, and geometric animal wall art during Sohrai.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    tag: 'Cultural Calendar',
    route: 'calendar'
  },
  {
    title: 'Handicrafts',
    subtitle: 'Dhokra Brass & Sohrai Murals',
    description: 'Take home authentic 4,000-year-old lost-wax Dhokra brass castings, Terracotta, and natural earth-pigment Sohrai art made by tribal women.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tag: 'Artisan Economy',
    route: 'marketplace'
  },
  {
    title: 'Eco Tourism',
    subtitle: 'Zero-Footprint Jungle Retreats',
    description: 'Stay in community-managed solar eco-lodges, tree houses, and camp under the starry skies of Netarhat and Saranda forests.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    tag: 'Sustainable Travel',
    route: 'marketplace'
  },
  {
    title: 'Village Experiences',
    subtitle: 'Warm Courtyards & Storytelling',
    description: 'Walk through mud-plastered painted village courtyards, learn traditional drumming, organic farming, and enjoy home-cooked meals.',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80',
    tag: 'Rural Immersion',
    route: 'marketplace'
  }
];
