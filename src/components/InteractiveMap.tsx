import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Navigation, 
  MapPin, 
  Route, 
  Clock, 
  Coins, 
  Filter, 
  Layers, 
  Maximize2, 
  Star,
  Plus,
  Eye
} from 'lucide-react';
import { Destination, GeneratedItinerary } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { triggerConfetti } from '../utils/toast';

// Fix Leaflet's default marker icons in bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface InteractiveMapProps {
  currentItinerary: GeneratedItinerary | null;
  onSelectDestination: (dest: Destination) => void;
  onAddToTrip: (dest: Destination) => void;
  focusedDestination?: Destination | null;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  currentItinerary,
  onSelectDestination,
  onAddToTrip,
  focusedDestination,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRouteView, setActiveRouteView] = useState<boolean>(!!currentItinerary);

  const categories = ['All', 'Waterfalls', 'Nature', 'Spiritual', 'Wildlife', 'Adventure', 'Culture'];

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Prevent double init

    const map = L.map(mapContainerRef.current, {
      center: [23.6102, 85.3400], // Central Jharkhand (Ranchi/Ramgarh)
      zoom: 8,
      minZoom: 7,
      maxZoom: 16,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // OpenStreetMap CartoDB Positron / Clean Voyage tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers based on Category filter
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    const filteredDestinations = selectedCategory === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category.toLowerCase() === selectedCategory.toLowerCase());

    filteredDestinations.forEach((dest) => {
      // Determine badge color
      let markerColor = '#15803d'; // forest green
      if (dest.category === 'Waterfalls') markerColor = '#0284c7'; // blue
      if (dest.category === 'Spiritual') markerColor = '#d97706'; // gold
      if (dest.category === 'Wildlife') markerColor = '#ea580c'; // orange
      if (dest.category === 'Adventure') markerColor = '#0d9488'; // teal

      // Custom SVG Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div style="
            background-color: ${markerColor};
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            cursor: pointer;
          ">
            <span style="transform: rotate(45deg); font-size: 14px;">📍</span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28],
      });

      const marker = L.marker(dest.coordinates, { icon: customIcon });

      // Custom Rich Popup
      const popupHtml = document.createElement('div');
      popupHtml.className = 'w-64 overflow-hidden rounded-xl bg-white shadow-xl';
      popupHtml.innerHTML = `
        <div style="position: relative; height: 110px; width: 100%;">
          <img src="${dest.image}" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; top: 6px; right: 6px; background: rgba(0,0,0,0.65); color: white; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: bold;">
            ${dest.category}
          </div>
        </div>
        <div style="padding: 10px 12px;">
          <h4 style="font-weight: bold; font-size: 14px; margin: 0; color: #0f172a;">${dest.name}</h4>
          <p style="font-size: 11px; color: #64748b; margin: 2px 0 6px 0;">${dest.district} • ${dest.distanceRanchi} km from Ranchi</p>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 600; color: #d97706;">★ ${dest.rating} (${dest.reviewsCount})</span>
            <span style="font-size: 11px; font-weight: 700; color: #15803d;">₹${dest.approxCost} / person</span>
          </div>
          <div style="display: flex; gap: 6px;">
            <button id="view-details-${dest.id}" style="flex: 1; padding: 6px; background: #0f172a; color: white; border: none; border-radius: 8px; font-size: 11px; font-weight: 600; cursor: pointer;">
              View Details
            </button>
            <button id="add-trip-${dest.id}" style="padding: 6px 10px; background: #f59e0b; color: #052e16; border: none; border-radius: 8px; font-size: 11px; font-weight: bold; cursor: pointer;">
              + Trip
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('popupopen', () => {
        const viewBtn = document.getElementById(`view-details-${dest.id}`);
        const addBtn = document.getElementById(`add-trip-${dest.id}`);

        if (viewBtn) {
          viewBtn.onclick = () => onSelectDestination(dest);
        }
        if (addBtn) {
          addBtn.onclick = () => {
            onAddToTrip(dest);
            triggerConfetti();
          };
        }
      });

      markersGroup.addLayer(marker);
    });
  }, [selectedCategory, onSelectDestination, onAddToTrip]);

  // Handle Itinerary Route Polyline
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    if (currentItinerary && currentItinerary.routeCoordinates.length > 1) {
      const latlngs = currentItinerary.routeCoordinates.map((pt) => pt.coordinates);

      const routePolyline = L.polyline(latlngs, {
        color: '#15803d', // Forest green
        weight: 5,
        opacity: 0.85,
        dashArray: '8, 8',
      }).addTo(map);

      routeLayerRef.current = routePolyline;
      map.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });
    }
  }, [currentItinerary]);

  // Focus on single destination if requested
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !focusedDestination) return;

    map.flyTo(focusedDestination.coordinates, 12, { duration: 1.5 });
  }, [focusedDestination]);

  return (
    <div className="relative w-full h-[460px] sm:h-[620px] rounded-3xl overflow-hidden shadow-card border border-forest-100 bg-slate-100">
      
      {/* Top Floating Filter Bar */}
      <div className="absolute top-3 left-3 right-3 sm:right-auto z-20 flex items-center gap-1.5 p-1.5 rounded-2xl glass-nav shadow-lg border border-white/60 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-forest-900 border-r border-slate-200 shrink-0">
          <Filter className="w-3.5 h-3.5 text-forest-700" />
          <span>Filters:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
              selectedCategory === cat
                ? 'bg-forest-900 text-white shadow-sm font-semibold'
                : 'text-slate-700 hover:bg-forest-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Itinerary Route Visualizer Overlay Card */}
      {currentItinerary && (
        <div className="absolute top-16 sm:top-20 left-3 right-3 sm:left-auto sm:right-4 z-20 max-w-sm glass-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/80 animate-fadeIn max-h-[360px] sm:max-h-[500px] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold text-sm shrink-0">
                🗺️
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Active Route Trail</h4>
                <p className="text-[11px] text-slate-500">{currentItinerary.numberOfDays} Days Journey</p>
              </div>
            </div>
            <button
              onClick={() => setActiveRouteView(!activeRouteView)}
              className="text-xs text-forest-700 font-bold hover:underline"
            >
              {activeRouteView ? 'Hide Stops' : 'Show Stops'}
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 border-b border-slate-200/80 text-center">
            <div className="p-2 rounded-xl bg-forest-50/70 border border-forest-100">
              <p className="text-[10px] text-slate-500 font-medium">Distance</p>
              <p className="text-xs font-bold text-forest-900">{currentItinerary.totalDistanceKm} km</p>
            </div>
            <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-100">
              <p className="text-[10px] text-slate-500 font-medium">Est. Drive</p>
              <p className="text-xs font-bold text-amber-900">{currentItinerary.estimatedTravelTime}</p>
            </div>
            <div className="p-2 rounded-xl bg-turquoise-50/70 border border-turquoise-100">
              <p className="text-[10px] text-slate-500 font-medium">Transport</p>
              <p className="text-xs font-bold text-turquoise-900">{currentItinerary.transportation}</p>
            </div>
          </div>

          {/* Step Sequence Flow as requested in prompt */}
          {activeRouteView && (
            <div className="pt-3 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="w-5 h-5 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center text-[10px]">S</span>
                <span>START: {currentItinerary.startingLocation}</span>
              </div>

              {currentItinerary.days.map((day, idx) => (
                <div key={idx} className="relative pl-6 space-y-1.5 border-l-2 border-dashed border-forest-300 ml-2.5 py-1">
                  <div className="text-[11px] font-bold text-forest-800">
                    Day {day.dayNumber}: {day.theme}
                  </div>
                  
                  {day.activities.filter(a => a.type === 'sightseeing').map((act, actIdx) => (
                    <div key={actIdx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                      <span className="font-semibold text-slate-800">{act.title.split(' at ')[1] || act.title}</span>
                    </div>
                  ))}

                  <div className="text-[11px] text-emerald-700 bg-emerald-50/90 p-1.5 rounded-lg border border-emerald-200/80 flex items-center gap-1 mt-1">
                    <span>🏡 Stay:</span>
                    <span className="font-bold">{day.stay.name}</span>
                  </div>
                </div>
              ))}

              <div className="pt-2 text-center">
                <p className="text-[10px] text-slate-400">
                  Calculated based on state highway routes & topological elevation
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};
