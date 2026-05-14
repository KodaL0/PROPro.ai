import { Map, Layers, Search, MousePointer, Globe, ZoomIn } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Interactive GIS Map',
    description: 'Google Maps powered with Advanced Markers and polygon overlays. Full-island Cyprus coverage with right-click context menus.',
    bullets: ['Drawing tools: circle, rectangle, polygon', 'Advanced Marker clustering', 'Satellite, roadmap & terrain modes', 'Copy coordinates to clipboard'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Layers,
    title: '40+ GIS Data Layers',
    description: 'Toggle individual layers on/off with dynamic bounding-box loading across all of Cyprus.',
    bullets: ['Planning zones & development plans', 'Flood zones (20, 100, 500 year)', 'Natura 2000 & protected areas', 'Geological suitability & earthquake zones'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Search,
    title: 'Parcel Identification',
    description: 'Multiple search methods with full parcel data retrieval and shape rendering on map.',
    bullets: ['Search by Registration Number', 'Search by Sheet / Plan / Parcel', 'Identify by map click or coordinates', 'Planning zone parameters & density'],
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Mapping & GIS</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">
            Everything a Cyprus property<br />professional needs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Powerful GIS tools, real-time parcel data, and spatial analysis — built for speed and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, bullets, color, iconColor, iconBg }) => (
            <div
              key={title}
              className={`rounded-2xl p-8 card-hover border border-gray-100 ${color}`}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
