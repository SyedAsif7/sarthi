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
  }
];
