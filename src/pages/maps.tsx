import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapLocations } from "../data/mockData";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || "";

type Campaign = {
  id: number;
  name: string;
  coordinates: [number, number];
  urgency: "high" | "medium" | "low";
};

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [nearbyCampaigns, setNearbyCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [85.324, 27.7172],
        zoom: 12,
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      mapLocations.forEach((camp) => {
        const [lng, lat] = camp.coordinates;
        if (lng < -180 || lng > 180 || lat < -90 || lat > 90) return; // skip invalid

        const color =
          camp.urgency === "high"
            ? "red"
            : camp.urgency === "medium"
            ? "yellow"
            : "green";

        new mapboxgl.Marker({ color })
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<b>${camp.name}</b>`))
          .addTo(map.current!);
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          map.current?.flyTo({ center: [longitude, latitude], zoom: 14 });

          new mapboxgl.Marker({ color: "blue" })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML("<b>You are here</b>"))
            .addTo(map.current!);

          const nearby = mapLocations
            .filter((camp) => {
              const [lng, lat] = camp.coordinates;
              if (lng < -180 || lng > 180 || lat < -90 || lat > 90)
                return false;
              return getDistance(latitude, longitude, lat, lng) <= 5;
            })
            .map((camp) => ({
              ...camp,
              coordinates: [camp.coordinates[0], camp.coordinates[1]] as [
                number,
                number
              ],
              urgency: camp.urgency as "high" | "medium" | "low",
            }));
          setNearbyCampaigns(nearby);
        });
      }
    } catch (err) {
      console.error("Mapbox init failed:", err);
    }
  }, []);

  return (
    <div className="bg-green-50 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
          Volunteer Campaign Map
        </h1>
        <p className="text-green-700 text-lg">
          Discover local campaigns by location and urgency. Stay involved and
          make an impact!
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
        <div ref={mapContainer} className="w-full h-[600px] md:h-[700px]" />

        {nearbyCampaigns.length > 0 && (
          <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-4 max-w-sm z-10">
            <h3 className="font-bold text-green-900 mb-2">Nearby Campaigns</h3>
            <ul className="space-y-2">
              {nearbyCampaigns.map((camp) => (
                <li key={camp.id} className="flex justify-between items-center">
                  <span>{camp.name}</span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      camp.urgency === "high"
                        ? "bg-red-500"
                        : camp.urgency === "medium"
                        ? "bg-yellow-400"
                        : "bg-green-500"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                  map.current?.flyTo({
                    center: [
                      position.coords.longitude,
                      position.coords.latitude,
                    ],
                    zoom: 14,
                  });
                });
              }
            }}
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors duration-200"
          >
            See Campaigns Nearby
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto mt-6 flex justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-red-500 border border-red-700"></div>
          <span className="text-green-800 font-medium">High Urgency</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-yellow-400 border border-yellow-600"></div>
          <span className="text-green-800 font-medium">Medium Urgency</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-green-500 border border-green-700"></div>
          <span className="text-green-800 font-medium">Low Urgency</span>
        </div>
      </div>
    </div>
  );
}
