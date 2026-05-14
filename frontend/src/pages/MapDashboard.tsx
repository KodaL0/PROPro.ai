import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { Layers, Search, BarChart3 } from "lucide-react";

type Parcel = {
  id: number;
  district: string;
  municipality: string;
  sheet: string;
  plan: string;
  parcel_number: string;
  registration_number: string;
  area_m2: string;
  planning_zone: string;
  building_density: string | null;
  coverage_ratio: string | null;
  floors: number | null;
  height_m: string | null;
  geometry_json: {
    type: "Polygon";
    coordinates: number[][][];
  };
};

const cyprusCenter: [number, number] = [35.1264, 33.4299];

function geoJsonToLeafletPolygon(parcel: Parcel): [number, number][] {
  return parcel.geometry_json.coordinates[0].map(([lng, lat]) => [lat, lng]);
}

export default function MapDashboard() {
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/gis/parcels/")
      .then((res) => {
        setParcels(res.data);
      })
      .catch((err) => {
        console.error("Failed to load parcels:", err);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-950 text-white flex flex-col">
      <div className="h-16 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-4">
        <div className="font-bold text-xl">PROPro.ai</div>

        <div className="flex-1 max-w-xl bg-slate-800 rounded-xl px-4 py-2 flex items-center gap-2">
          <Search size={18} />
          <input
            className="bg-transparent outline-none w-full text-sm"
            placeholder="Search parcel, area, coordinates..."
          />
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
          Valuation
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-slate-900 border-r border-slate-800 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={18} />
            <h2 className="font-semibold">GIS Layers</h2>
          </div>

          {[
            "Planning Zones",
            "Parcel Borders",
            "Municipality Borders",
            "Flood Zones",
            "Natura 2000",
            "Sales Transactions",
            "Asking Prices",
            "Rental Comparables",
          ].map((layer) => (
            <label
              key={layer}
              className="flex items-center justify-between py-2 text-sm border-b border-slate-800"
            >
              <span>{layer}</span>
              <input type="checkbox" className="accent-blue-500" />
            </label>
          ))}
        </aside>

        <main className="flex-1 relative">
          <MapContainer
            center={cyprusCenter}
            zoom={9}
            className="h-full w-full"
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={cyprusCenter}>
              <Popup>Cyprus market intelligence center</Popup>
            </Marker>

            {parcels.map((parcel) => (
              <Polygon
                key={parcel.id}
                positions={geoJsonToLeafletPolygon(parcel)}
                pathOptions={{
                  color: selectedParcel?.id === parcel.id ? "red" : "blue",
                  fillOpacity: 0.25,
                }}
                eventHandlers={{
                  click: () => setSelectedParcel(parcel),
                }}
              >
                <Popup>
                  <strong>Parcel {parcel.parcel_number}</strong>
                  <br />
                  {parcel.municipality}, {parcel.district}
                  <br />
                  Area: {parcel.area_m2} m²
                  <br />
                  Zone: {parcel.planning_zone}
                </Popup>
              </Polygon>
            ))}
          </MapContainer>
        </main>

        <aside className="w-80 bg-slate-900 border-l border-slate-800 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={18} />
            <h2 className="font-semibold">Parcel Intelligence</h2>
          </div>

          {selectedParcel ? (
            <div className="space-y-3">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">Parcel</p>
                <p className="text-2xl font-bold">
                  {selectedParcel.parcel_number}
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-lg font-bold">
                  {selectedParcel.municipality}, {selectedParcel.district}
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">Area</p>
                <p className="text-2xl font-bold">
                  {selectedParcel.area_m2} m²
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400">Planning Zone</p>
                <p className="text-2xl font-bold">
                  {selectedParcel.planning_zone}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-sm text-slate-400">Density</p>
                  <p className="text-xl font-bold">
                    {selectedParcel.building_density}%
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-sm text-slate-400">Coverage</p>
                  <p className="text-xl font-bold">
                    {selectedParcel.coverage_ratio}%
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-xl p-4 text-sm text-slate-300">
              Click a parcel on the map to view intelligence.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}