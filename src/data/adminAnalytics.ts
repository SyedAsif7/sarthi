export const ADMIN_STATS = {
  totalTourists: '1,428,520',
  totalTouristsGrowth: '+24.8% YoY',
  popularDestination: 'Dassam & Netarhat',
  avgTripBudget: '₹9,450',
  avgTripBudgetChange: '+12% per visitor',
  popularCategory: 'Waterfalls & Eco-Tourism',
  popularCategoryShare: '36.4%',
  touristSatisfaction: '4.82 / 5.0',
  satisfactionTotalReviews: '48,290 verified reviews',
  localProviders: '842',
  localProvidersActive: '620 Guides & Homestays',
  marketplaceRevenue: '₹48,65,400',
  directArtisanBenefit: '91.4% directly to tribal communities',
  ecoConservationScore: '94 / 100',
};

export const MONTHLY_FOOTFALL = [
  { month: 'Jan', domestic: 135000, international: 4200, revenue: 14.8 },
  { month: 'Feb', domestic: 118000, international: 3800, revenue: 12.6 },
  { month: 'Mar', domestic: 95000, international: 2900, revenue: 10.2 },
  { month: 'Apr', domestic: 78000, international: 1800, revenue: 8.4 },
  { month: 'May', domestic: 65000, international: 1400, revenue: 7.1 },
  { month: 'Jun', domestic: 82000, international: 1900, revenue: 9.3 },
  { month: 'Jul', domestic: 165000, international: 3100, revenue: 18.2 }, // Shravani Mela peak
  { month: 'Aug', domestic: 178000, international: 3600, revenue: 19.5 }, // Shravani Mela peak
  { month: 'Sep', domestic: 105000, international: 2800, revenue: 11.4 },
  { month: 'Oct', domestic: 145000, international: 4500, revenue: 16.0 }, // Durga Puja & Sohrai
  { month: 'Nov', domestic: 162000, international: 5200, revenue: 18.1 },
  { month: 'Dec', domestic: 198000, international: 6800, revenue: 22.4 }, // Winter peak & picnics
];

export const DESTINATION_POPULARITY = [
  { name: 'Netarhat', visitors: 285000, rating: 4.9, fill: '#15803d' },
  { name: 'Dassam Falls', visitors: 242000, rating: 4.8, fill: '#0d9488' },
  { name: 'Deoghar Dham', visitors: 320000, rating: 4.9, fill: '#d97706' },
  { name: 'Hundru Falls', visitors: 195000, rating: 4.7, fill: '#ea580c' },
  { name: 'Patratu Valley', visitors: 210000, rating: 4.8, fill: '#2563eb' },
  { name: 'Betla National Park', visitors: 115000, rating: 4.8, fill: '#059669' },
  { name: 'Jonha Falls', visitors: 98000, rating: 4.6, fill: '#7c3aed' },
  { name: 'Parasnath Hill', visitors: 135000, rating: 4.9, fill: '#db2777' },
];

export const TOURIST_INTEREST_BREAKDOWN = [
  { name: 'Waterfalls & Rapids', value: 32, fill: '#0284c7' },
  { name: 'Nature & Hill Stations', value: 26, fill: '#16a34a' },
  { name: 'Spiritual & Heritage', value: 18, fill: '#d97706' },
  { name: 'Wildlife & Safari', value: 12, fill: '#ea580c' },
  { name: 'Tribal Art & Living Culture', value: 8, fill: '#8b5cf6' },
  { name: 'Adventure & Water Sports', value: 4, fill: '#14b8a6' },
];

export const SENTIMENT_ANALYSIS = [
  { aspect: 'Scenic Beauty & Nature', score: 96, sentiment: 'Exceptional' },
  { aspect: 'Local Guide Hospitality', score: 94, sentiment: 'Very High' },
  { aspect: 'Authentic Food Quality', score: 91, sentiment: 'High' },
  { aspect: 'AI Trip Planning Accuracy', score: 95, sentiment: 'Exceptional' },
  { aspect: 'Signage & Road Connectivity', score: 84, sentiment: 'Good / Improving' },
  { aspect: 'Homestay Cleanliness', score: 92, sentiment: 'Very High' },
];

export const TOURIST_ORIGIN_DATA = [
  { state: 'West Bengal', share: 34, tourists: '485,000' },
  { state: 'Bihar', share: 22, tourists: '314,000' },
  { state: 'Jharkhand (Domestic Intra-state)', share: 18, tourists: '257,000' },
  { state: 'Odisha', share: 11, tourists: '157,000' },
  { state: 'Delhi-NCR & UP', share: 9, tourists: '128,000' },
  { state: 'Maharashtra & Others', share: 6, tourists: '87,500' },
];
