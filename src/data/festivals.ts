import { FestivalItem } from '../types';

export const FESTIVALS: FestivalItem[] = [
  {
    id: 'sarhul',
    name: 'Sarhul (Flower Festival)',
    hindiName: 'सरहुल (फूलों का त्योहार)',
    monthDate: 'March – April (Chaitra Shukla Tritiya)',
    upcomingDate: 'March 24, 2026',
    location: 'Statewide (Grand rallies in Ranchi, Khunti, Gumla)',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description: 'The premier nature-worship festival of the tribal communities (Oraon, Munda, Ho) marking the arrival of spring and blooming of holy Sal trees.',
    culturalSignificance: 'The festival celebrates the sacred marriage between Mother Earth (Dhartee Maa) and the Sun God (Biddi Bhagwan). Villagers place tender Sal blossoms (Sarjom Baa) over their doorframes and ears as a token of fertility and nature’s benevolence.',
    rituals: [
      'Pahan (village priest) keeps water pots overnight to predict the monsoon rainfall',
      'Sacrifice of roosters at the Sarna (sacred grove) to ancestral spirits',
      'Distribution of holy Sal flower blossoms among all community families',
      'Massive colorful street processions with traditional Mandar drums, Nagada, and red-bordered white sarees'
    ],
    bestPlacesToObserve: ['Siram Toli Sarna Sthal (Ranchi)', 'Tribal Research Institute Grounds', 'Khunti Sarna Sthal']
  },
  {
    id: 'karma',
    name: 'Karma Festival (Karam Puja)',
    hindiName: 'करमा (प्रकृति एवं भाई-बहन का पावन पर्व)',
    monthDate: 'August – September (Bhadra Shukla Ekadashi)',
    upcomingDate: 'September 12, 2026',
    location: 'Throughout Jharkhand (Rural villages & Tribal Hostels)',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant tribal festival celebrating youth, brother-sister devotion, fertility, and reverence for the sacred Karam tree (Nauclea Parvifolia).',
    culturalSignificance: 'Young unmarried women nurture Jawas (germinated seedlings of pulses) in dark rooms with songs. On festival eve, youth bring three fresh Karam branches from the forest and plant them in the village Akhra (dancing courtyard).',
    rituals: [
      'All-night community round-dance around the Karam branches to thunderous Mandar beats',
      'Recitation of the legendary Karma-Dharma ethical parable by village elders',
      'Sisterly exchange of blessed Jawa sprouts with brothers for their long life and health',
      'Ceremonial immersion of the Karam branch in local streams at dawn'
    ],
    bestPlacesToObserve: ['Morabadi Ground (Ranchi)', 'Netarhat tribal hamlets', 'Simdega village akhras']
  },
  {
    id: 'sohrai',
    name: 'Sohrai & Khuntau (Cattle & Art Harvest Festival)',
    hindiName: 'सोहराई एवं खूंटौ (पशुधन एवं भित्ति चित्रकला पर्व)',
    monthDate: 'October – November (Day after Diwali / Amavasya)',
    upcomingDate: 'November 1, 2026',
    location: 'Hazaribagh, Dumka, Santhal Parganas, Khunti',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    description: 'Post-harvest festival dedicated to cattle, accompanied by the world-famous indigenous Sohrai mural painting on mud house walls.',
    culturalSignificance: 'Livestock and bullocks who toiled throughout the agricultural season are washed in ponds, smeared with vermilion and mustard oil, and crowned with floral paddy garlands. Women paint spectacular wildlife murals using natural ochres.',
    rituals: [
      'Painting house walls with forest birds, horned bulls, elephants, and sacred peacock trees',
      'Gau-Puja: Washing cattle hooves and feeding them special Mahua and rice cakes',
      'Khuntau: Friendly sports where decorated bulls playfully interact with village youth holding leather cloths',
      'Feasting on freshly harvested rice, country chicken, and indigenous beverages'
    ],
    bestPlacesToObserve: ['Bhadu and Jorakath Painted Villages (Hazaribagh)', 'Santhal villages in Dumka']
  },
  {
    id: 'tusu',
    name: 'Tusu Parab (Makar Sankranti Harvest Songs)',
    hindiName: 'टूसू परब (शीतकालीन फसल एवं लोकगीत उत्सव)',
    monthDate: 'December – January (Paush month ending on Makar Sankranti)',
    upcomingDate: 'January 14, 2027',
    location: 'Ranchi, Jamshedpur, Purulia-Jharkhand border',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    description: 'A cheerful harvest and folk-song festival celebrated by Kudmi and tribal communities, centered around colorful bamboo towers named Choudal.',
    culturalSignificance: 'Tusu represents the spirit of young womanhood and golden paddy harvest. Young women craft elaborate colorful paper and bamboo mini-temples (Choudal), parading them to river confluences while singing poetic Tusu songs.',
    rituals: [
      'Making and decorating the sacred Tusu idol or miniature bamboo tower',
      'Daily evening choral singing competitions among village girls',
      'Makar Mela on river banks with early dawn holy dips',
      'Feasting on Tilkut, Chuda, and fresh molasses pithas'
    ],
    bestPlacesToObserve: ['Subarnarekha River Banks (Jamshedpur)', 'Bundu Tusu Mela', 'Ranchi Kanke Mela']
  },
  {
    id: 'shravani-mela',
    name: 'Shravani Mela (Deoghar Pilgrimage)',
    hindiName: 'श्रावणी मेला (देवघर का ऐतिहासिक कांवड़ मेला)',
    monthDate: 'July – August (Entire Hindu month of Shravana)',
    upcomingDate: 'July 28, 2026',
    location: 'Deoghar (Baba Baidyanath Dham) & Sultanganj-Deoghar Route',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    description: 'The world’s longest uninterrupted religious fair where over 5 million saffron-clad Kanwariyas walk 108 km barefoot carrying Ganga water.',
    culturalSignificance: 'Devotees fetch holy water from the Ganges at Sultanganj (Bihar) and trek barefoot across hills and valleys with sacred bamboo shoulder poles (Kanwar) to perform Jalabhishek on the Baidyanath Jyotirlinga in Deoghar.',
    rituals: [
      'Barefoot endurance walk chanting "Bol Bam" along the dedicated 108 km spiritual corridor',
      'Water offering at Baba Baidyanath Jyotirlinga with holy Bilva leaves',
      'Subsequent visit to Basukinath Temple to complete the pilgrimage merit',
      '24/7 community langars, state-managed mist stations, and spiritual music stages'
    ],
    bestPlacesToObserve: ['Baba Baidyanath Temple complex (Deoghar)', 'Kanwariya Path at Dumka border']
  },
  {
    id: 'hornbill-festival',
    name: 'Hornbill Festival (Festival of Festivals)',
    hindiName: 'हॉर्नबिल महोत्सव (नागालैंड का महान जनजातीय उत्सव)',
    monthDate: 'December 1 – 10 (Annual)',
    upcomingDate: 'December 1, 2026',
    location: 'Kisama Heritage Village, Kohima, Nagaland',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle celebration of Northeast India uniting 17 indigenous Naga tribes in grand displays of warrior dances, log-drum beats, and ancestral folklore.',
    culturalSignificance: 'Named after the sacred Indian hornbill bird revered in Naga oral folklore. It preserves tribal clan heritage, indigenous architecture (Morungs), and bamboo gastronomy.',
    rituals: [
      'Synchronized warrior chants and log-drumming in traditional tribal Morungs',
      'Indigenous Naga wrestling, archery, and traditional fire-making contests',
      'Tasting smoked pork with fermented bamboo shoot and Raja Mircha chutney',
      'Evening Hornbill International Rock and indigenous folk acoustic concerts'
    ],
    bestPlacesToObserve: ['Kisama Heritage Village Amphitheatre', 'Kohima Night Bazaar', 'Khonoma Green Village']
  },
  {
    id: 'onam-vallamkali',
    name: 'Onam & Aranmula Boat Race (Harvest of Gods)',
    hindiName: 'ओणम एवं वल्लम कली (केरल का भव्य फसल उत्सव)',
    monthDate: 'August – September (Chingam month)',
    upcomingDate: 'August 26, 2026',
    location: 'All Kerala (Aranmula, Alleppey & Thrikkakara)',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: 'Kerala’s grand 10-day harvest festival commemorating the mythical return of egalitarian King Mahabali, featuring snake boat races and floral tapestries.',
    culturalSignificance: 'A celebration of unity, social harmony, and agricultural abundance. Families lay elaborate Pookkalam flower carpets and prepare 26-dish vegetarian feasts.',
    rituals: [
      'Aranmula Uthrattathi: 100-oared Chundan Vallam snake boat races with rhythmic Vanchipattu boat songs',
      'Laying intricate fresh floral mandalas (Athapookkalam) at courtyard thresholds',
      'Grand community feast (Onasadya) served traditionally on fresh banana leaves',
      'Pulikkali (Tiger dance) parades and Kaikottikali traditional folk circle dances'
    ],
    bestPlacesToObserve: ['Pampa River bank (Aranmula)', 'Punnamada Lake (Alleppey)', 'Swaraj Round (Thrissur)']
  },
  {
    id: 'desert-festival-jaisalmer',
    name: 'Jaisalmer Desert Festival (Maru Mahotsav)',
    hindiName: 'मरु महोत्सव (जैसलमेर का रेगिस्तानी सांस्कृतिक उत्सव)',
    monthDate: 'January – February (Magh Purnima)',
    upcomingDate: 'February 12, 2027',
    location: 'Sam & Khuri Sand Dunes, Jaisalmer, Rajasthan',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    description: 'A 3-day spectacle amid golden sand dunes showcasing Thar desert folk music, Kalbeliya serpentine dances, camel polo, and turban-tying traditions.',
    culturalSignificance: 'Revives medieval desert caravan heritage and celebrates traditional pastoralist communities under the romantic glow of the desert full moon.',
    rituals: [
      'Gair and Kalbeliya fire dances illuminated by desert torches',
      'Soulful Manganiyar and Langa musical ballads using Kamaicha and Khartal instruments',
      'Decorated camel acrobatics, camel polo, and Mr. Desert pageant',
      'Full moon desert campouts with Bajra roti and Ker Sangri feasts'
    ],
    bestPlacesToObserve: ['Sam Sand Dunes arena', 'Khuri Village quiet dunes', 'Jaisalmer Golden Fort Chowk']
  },
  {
    id: 'losar-ladakh-spiti',
    name: 'Losar & Monastic Cham (Tibetan New Year)',
    hindiName: 'लोसार एवं छम नृत्य (लद्दाख एवं स्पीति का नववर्ष उत्सव)',
    monthDate: 'February – March (Tibetan Lunar Calendar)',
    upcomingDate: 'February 18, 2027',
    location: 'Leh, Ladakh & Spiti Valley (Key Gompa & Tabo)',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    description: 'The auspicious Trans-Himalayan Buddhist New Year featuring sacred Cham masked lamas, butter lamp offerings, and ceremonial prayer flag hoisting.',
    culturalSignificance: 'Symbolizes the triumph of enlightened compassion over ignorance. Monasteries perform ritual purifications to welcome good fortune and community peace.',
    rituals: [
      'Sacred Cham dances by lamas adorned in intricate silk brocades and fearsome deity masks',
      'Illumination of thousands of brass butter lamps (Chodmey) inside ancient gompa shrines',
      'Metho fire-torch procession expelling winter negativity into local ravines',
      'Sharing warm butter tea (Gur-Gur Cha) and Khapse sweet fried pastries with neighbors'
    ],
    bestPlacesToObserve: ['Key Monastery (Spiti)', 'Hemis & Thiksey Gompa (Ladakh)', 'Tabo Monastery']
  }
];
