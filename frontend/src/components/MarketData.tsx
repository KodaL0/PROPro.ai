import { TrendingUp, Home, BarChart2, Download, Filter, MapPin } from 'lucide-react';

const datasets = [
  {
    icon: TrendingUp,
    tag: 'Sales & Contracts',
    title: 'Transaction Data',
    description: 'LRO transaction data with spatial & temporal filtering. Cleaned Sales & CoS combined view with restructuring transaction flags.',
    stats: [
      { label: 'Records', value: '500K+' },
      { label: 'Date Range', value: '10 yrs' },
    ],
    features: ['Search by radius, rectangle or polygon', 'Filter by date range, category & type', 'Pin-numbered markers on map', 'Export to Excel'],
    accent: '#2563eb',
    bg: 'from-blue-600 to-blue-800',
  },
  {
    icon: Home,
    tag: 'Asking Prices',
    title: 'Market Listings',
    description: 'Active and inactive market listings with price and area analytics. Price per m² calculations with map visualisation.',
    stats: [
      { label: 'Active Listings', value: '25K+' },
      { label: 'Coverage', value: '100%' },
    ],
    features: ['Spatial search by radius or shape', 'Filter by category, type & price range', 'Price per m² calculations', 'Export to Excel'],
    accent: '#0891b2',
    bg: 'from-cyan-600 to-cyan-800',
  },
  {
    icon: BarChart2,
    tag: 'Rental Market',
    title: 'Rental Comparables',
    description: 'Rental market data for yield and income analysis. Rent per m² calculations with full spatial search capabilities.',
    stats: [
      { label: 'Rental Records', value: '15K+' },
      { label: 'Districts', value: '6' },
    ],
    features: ['Spatial search by radius or shape', 'Filter by category, type & rent range', 'Rent per m² calculations', 'Export to Excel'],
    accent: '#059669',
    bg: 'from-emerald-600 to-emerald-800',
  },
];

export default function MarketData() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Market Intelligence</span>
          <h2 className="text-4xl font-black text-white mt-3 mb-4">
            Real market data, real decisions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access verified transaction records, active listings, and rental data — all spatially searchable on the map.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {datasets.map(({ icon: Icon, tag, title, description, stats, features, bg }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden border border-white/5 card-hover"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className={`bg-gradient-to-br ${bg} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{tag}</span>
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="flex gap-6">
                  {stats.map(({ label, value }) => (
                    <div key={label}>
                      <div className="text-xl font-black text-white">{value}</div>
                      <div className="text-xs text-white/60">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/5 transition-all">
                  <Download size={14} />
                  Export to Excel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
