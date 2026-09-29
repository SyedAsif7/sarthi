import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { 
  Users, 
  TrendingUp, 
  Award, 
  DollarSign, 
  Compass, 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Trees, 
  FileText,
  AlertCircle,
  Building
} from 'lucide-react';
import { 
  ADMIN_STATS, 
  MONTHLY_FOOTFALL, 
  DESTINATION_POPULARITY, 
  TOURIST_INTEREST_BREAKDOWN, 
  SENTIMENT_ANALYSIS,
  TOURIST_ORIGIN_DATA
} from '../data/adminAnalytics';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="space-y-10 pb-24 animate-fadeIn">
      
      {/* Top Banner with Clear Demo / Govt Labeling */}
      <div className="bg-gradient-to-r from-slate-900 via-forest-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-gold-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl font-serif">
          🏛️
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Department of Tourism, Government of Jharkhand
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-bold uppercase tracking-wider">
                Demo / Sample Data
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
              Statewide Tourism Intelligence & Analytics Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              SIH 2026 Administrative Cockpit: Tracking real-time tourist footfall, AI itinerary patterns, tribal artisan economic benefits, and eco-conservation scores.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
              <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider block">Eco-Score</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">94/100</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. TOP METRIC CARDS AS SPECIFIED IN PROMPT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Tourists */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Tourists</span>
            <div className="w-8 h-8 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">{ADMIN_STATS.totalTourists}</span>
          </div>
          <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{ADMIN_STATS.totalTouristsGrowth}</span>
          </p>
        </div>

        {/* Card 2: Popular Destination */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Destinations</span>
            <div className="w-8 h-8 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-forest-950 font-serif block truncate">
            {ADMIN_STATS.popularDestination}
          </span>
          <p className="text-xs text-slate-500">
            Deoghar leading in spiritual & Netarhat in eco-travel
          </p>
        </div>

        {/* Card 3: Average Trip Budget */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg Trip Budget</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {ADMIN_STATS.avgTripBudget}
          </span>
          <p className="text-xs font-semibold text-emerald-600">
            {ADMIN_STATS.avgTripBudgetChange}
          </p>
        </div>

        {/* Card 4: Tourist Satisfaction */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Satisfaction</span>
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {ADMIN_STATS.touristSatisfaction}
            </span>
          </div>
          <p className="text-xs text-slate-500">{ADMIN_STATS.satisfactionTotalReviews}</p>
        </div>

        {/* Card 5: Local Providers */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Local Providers</span>
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {ADMIN_STATS.localProviders}
          </span>
          <p className="text-xs text-slate-500">{ADMIN_STATS.localProvidersActive}</p>
        </div>

        {/* Card 6: Marketplace Activity */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Marketplace Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-coral-100 text-coral-800 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
            {ADMIN_STATS.marketplaceRevenue}
          </span>
          <p className="text-xs font-semibold text-emerald-600">{ADMIN_STATS.directArtisanBenefit}</p>
        </div>

        {/* Card 7: Most Popular Category */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-2 lg:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Popular Category</span>
            <span className="text-xs font-bold text-forest-700 bg-forest-100 px-2.5 py-0.5 rounded-full">
              {ADMIN_STATS.popularCategoryShare} Share
            </span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-forest-950 font-serif block">
            {ADMIN_STATS.popularCategory}
          </span>
          <p className="text-xs text-slate-500">
            Dassam, Hundru, Lodh & Jonha combined account for over 520,000 seasonal visits.
          </p>
        </div>

      </div>

      {/* 2. CHARTS SECTION (Recharts) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Monthly Tourist Footfall & Seasonal Peaks */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 font-serif">
                Monthly Tourist Footfall (2025–2026)
              </h3>
              <p className="text-xs text-slate-500">
                Highlights winter vacation peak (Dec) and Shravani Mela pilgrimage peak (Jul–Aug)
              </p>
            </div>
            <span className="text-xs font-bold text-forest-800 bg-forest-50 px-2.5 py-1 rounded-xl">
              1.42M Total
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_FOOTFALL} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDomestic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15803d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#15803d" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d97706" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#d97706" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(val: any) => Number(val).toLocaleString('en-IN')}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="domestic" name="Domestic Tourists" stroke="#15803d" fillOpacity={1} fill="url(#colorDomestic)" />
                <Area type="monotone" dataKey="international" name="Foreign Visitors" stroke="#d97706" fillOpacity={1} fill="url(#colorInt)" />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Popular Destinations by Footfall */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900 font-serif">
                Destinations by Annual Footfall
              </h3>
              <p className="text-xs text-slate-500">
                Visitor volume across Jharkhand’s top registered attractions
              </p>
            </div>
            <span className="text-xs font-bold text-gold-800 bg-gold-50 px-2.5 py-1 rounded-xl">
              Deoghar #1
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DESTINATION_POPULARITY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-25} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(val: any) => Number(val).toLocaleString('en-IN')}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="visitors" name="Annual Visitors" radius={[8, 8, 0, 0]}>
                  {DESTINATION_POPULARITY.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Tourist Interests Breakdown (Pie / Donut) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
          <div>
            <h3 className="font-bold text-lg text-slate-900 font-serif">
              Tourist Interest Distribution
            </h3>
            <p className="text-xs text-slate-500">
              Aggregated from AI Trip Planner multi-select intent telemetry
            </p>
          </div>

          <div className="h-72 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TOURIST_INTEREST_BREAKDOWN}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                >
                  {TOURIST_INTEREST_BREAKDOWN.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val: any) => `${val}% of travelers`}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Sentiment Analysis & Feedback Metrics */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
          <div>
            <h3 className="font-bold text-lg text-slate-900 font-serif">
              Feedback Sentiment & Service Quality Scores
            </h3>
            <p className="text-xs text-slate-500">
              Extracted from verified post-trip reviews and guide evaluations
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {SENTIMENT_ANALYSIS.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{item.aspect}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {item.sentiment}
                    </span>
                    <span className="font-mono font-bold text-slate-900">{item.score}%</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-forest-600 to-gold-500 transition-all duration-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. TOURIST ORIGIN STATE DEMOGRAPHICS & IMPACT ROSTER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Origin States */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
          <h3 className="font-bold text-base text-slate-900 font-serif">
            Top Tourist Inflow Origins
          </h3>
          <div className="space-y-3">
            {TOURIST_ORIGIN_DATA.map((state, i) => (
              <div key={i} className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                <span className="font-semibold text-slate-800">{state.state}</span>
                <div className="text-right">
                  <span className="font-bold text-forest-900">{state.tourists}</span>
                  <span className="text-slate-400 ml-1.5">({state.share}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIH Sustainable Tourism Compliance Roster */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 font-serif">
              SIH Direct Economic Beneficiary Ledger (Sample Batch)
            </h3>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold">
              100% Payout Verified
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase">
                <tr>
                  <th className="p-3">Beneficiary</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">District</th>
                  <th className="p-3">Revenue Transferred</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold text-slate-900">Malati Devi & Women SHG</td>
                  <td className="p-3 text-slate-600">Sohrai Canvas Paintings</td>
                  <td className="p-3 text-slate-600">Hazaribagh</td>
                  <td className="p-3 font-mono font-bold text-forest-900">₹4,84,000</td>
                  <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">Disbursed ✓</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Budheshwar Karmakar</td>
                  <td className="p-3 text-slate-600">Dhokra Metal Art Cluster</td>
                  <td className="p-3 text-slate-600">Khunti</td>
                  <td className="p-3 font-mono font-bold text-forest-900">₹3,92,500</td>
                  <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">Disbursed ✓</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Mangra Tribal Eco-Homestay</td>
                  <td className="p-3 text-slate-600">Community Homestay</td>
                  <td className="p-3 text-slate-600">Netarhat</td>
                  <td className="p-3 font-mono font-bold text-forest-900">₹6,28,000</td>
                  <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">Disbursed ✓</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Amit Kumar & 14 Guides</td>
                  <td className="p-3 text-slate-600">Eco-Trekking Guides Guild</td>
                  <td className="p-3 text-slate-600">Ranchi / Dassam</td>
                  <td className="p-3 font-mono font-bold text-forest-900">₹5,40,000</td>
                  <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">Disbursed ✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};
