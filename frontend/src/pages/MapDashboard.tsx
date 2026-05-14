import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { Layers, Search, BarChart3 } from "lucide-react";

const cyprusCenter: [number, number] = [35.1264, 33.4299];

const testParcel: [number, number][] = [
  [35.1705, 33.3601],
  [35.1712, 33.3635],
  [35.1688, 33.365],
  [35.1679, 33.3615],
];

export default function MapDashboard() {
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

            <Polygon
              positions={testParcel}
              pathOptions={{ color: "blue", fillOpacity: 0.25 }}
            >
              <Popup>
                <strong>Test Parcel</strong>
                <br />
                Area: 620 m²
                <br />
                Zone: Κα6
                <br />
                Density: 90%
              </Popup>
            </Polygon>
          </MapContainer>
        </main>

        <aside className="w-80 bg-slate-900 border-l border-slate-800 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={18} />
            <h2 className="font-semibold">Area Intelligence</h2>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">Average Sale Price</p>
              <p className="text-2xl font-bold">€2,450/m²</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">Rental Yield</p>
              <p className="text-2xl font-bold">5.8%</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">Nearby Comparables</p>
              <p className="text-2xl font-bold">24</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-400">Valuation Range</p>
              <p className="text-xl font-bold">€310k - €365k</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}