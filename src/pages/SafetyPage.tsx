import React from 'react';
import { 
  ShieldAlert, 
  PhoneCall, 
  HeartHandshake, 
  Trees, 
  AlertTriangle, 
  Ambulance, 
  Building2, 
  CloudSun, 
  Clock, 
  DollarSign, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { SAFETY_CONTACTS, HOSPITALS, FOREST_AND_TRAIL_GUIDELINES, DEMO_WEATHER_ALERTS } from '../data/safetyData';
import { DESTINATIONS } from '../data/destinations';

export const SafetyPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3.5 py-1 rounded-full">
          Tourist Safety & Preparedness
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Safety & Practical Information
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Emergency response helplines, regional hospital directories, forest trail protocols, and verified destination timings.
        </p>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl max-w-xl mx-auto text-[11px] text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Notice: Helplines and hospital directories are based on official National Tourism & Emergency public listings (Ministry of Tourism & Ministry of Home Affairs, Govt. of India). Weather alerts represent demo simulated feeds.</span>
        </div>
      </div>

      {/* 1. EMERGENCY CONTACTS GRID */}
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-rose-600" />
          <span>Immediate Emergency Helplines (24x7)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAFETY_CONTACTS.map((contact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-card transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold uppercase tracking-wider">
                  {contact.category}
                </span>
                <span className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <PhoneCall className="w-4 h-4 text-rose-600" />
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">{contact.title}</h4>
                <a
                  href={`tel:${contact.number.split('/')[0].trim()}`}
                  className="text-xl font-extrabold text-forest-900 hover:text-forest-700 font-mono mt-1 block"
                >
                  {contact.number}
                </a>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {contact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. REGIONAL HOSPITALS DIRECTORY */}
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-forest-700" />
          <span>Major Trauma & Hospital Directory</span>
        </h2>

        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4">Hospital Name</th>
                  <th className="p-4">District</th>
                  <th className="p-4">Emergency Support</th>
                  <th className="p-4">Contact Phone</th>
                  <th className="p-4">Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {HOSPITALS.map((h, i) => (
                  <tr key={i} className="hover:bg-forest-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{h.name}</td>
                    <td className="p-4 text-slate-700 font-medium">{h.district}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        24x7 Emergency
                      </span>
                    </td>
                    <td className="p-4 font-mono font-semibold text-forest-900">{h.phone}</td>
                    <td className="p-4 text-slate-500 max-w-xs">{h.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. FOREST & TRAIL PROTOCOLS */}
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
          <Trees className="w-5 h-5 text-forest-700" />
          <span>Forest, Waterfall & Ghat Driving Guidelines</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOREST_AND_TRAIL_GUIDELINES.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-4"
            >
              <h3 className="text-base font-bold font-serif text-forest-950 border-l-4 border-gold-500 pl-3">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WEATHER ADVISORY SIMULATOR (Clearly labelled demo) */}
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-turquoise-600" />
            <span>Regional Weather Advisory (Simulated / Demo Feed)</span>
          </h2>
          <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Static Demo Data
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEMO_WEATHER_ALERTS.map((alert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">{alert.region}</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {alert.alertLevel}
                </span>
              </div>
              <p className="text-lg font-bold font-mono text-forest-900">{alert.tempRange}</p>
              <p className="text-xs font-semibold text-slate-700">{alert.status}</p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                {alert.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. DESTINATION TIMINGS & ENTRY FEES MATRIX */}
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold-600" />
          <span>Major Destination Timings & Entry Matrix</span>
        </h2>

        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4">Destination</th>
                  <th className="p-4">District</th>
                  <th className="p-4">Opening Hours</th>
                  <th className="p-4">Entry / Permit Fee</th>
                  <th className="p-4">Best Season</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DESTINATIONS.map((d) => (
                  <tr key={d.id} className="hover:bg-forest-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{d.name}</td>
                    <td className="p-4 text-slate-600 font-medium">{d.district}</td>
                    <td className="p-4 text-slate-700">{d.timings}</td>
                    <td className="p-4 font-semibold text-forest-900">{d.entryFee}</td>
                    <td className="p-4 text-slate-500">{d.bestTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};
