import { Upload, Database, BarChart3, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const portfolioFeatures = [
  {
    icon: Upload,
    title: 'Portfolio Management',
    description: 'Upload, validate and visualise your property portfolio with bulk processing and GPS coordinate mapping.',
    chips: ['Bulk upload', 'GPS mapping', 'Planning cross-ref', 'Upload history'],
    color: 'blue',
  },
  {
    icon: Database,
    title: 'Land Registry Data',
    description: 'Transaction coverage overview and data import management with district-level tracking.',
    chips: ['District coverage', 'Upload tracking', 'Process status', 'Filter by district'],
    color: 'slate',
  },
  {
    icon: BarChart3,
    title: 'Power BI Analytics',
    description: 'Embedded dashboards tailored to your company\'s data with secure embed token authentication.',
    chips: ['Embedded reports', 'Company-specific', 'Fullscreen mode', 'Secure tokens'],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; icon: string; chip: string }> = {
  blue: { bg: 'bg-blue-50 border-blue-100', icon: 'bg-blue-100 text-blue-600', chip: 'bg-blue-100 text-blue-700' },
  slate: { bg: 'bg-slate-50 border-slate-100', icon: 'bg-slate-200 text-slate-700', chip: 'bg-slate-200 text-slate-700' },
  emerald: { bg: 'bg-emerald-50 border-emerald-100', icon: 'bg-emerald-100 text-emerald-600', chip: 'bg-emerald-100 text-emerald-700' },
};

const uploadRows = [
  { district: 'Nicosia', type: 'Sales', status: 'complete', pct: 100 },
  { district: 'Limassol', type: 'Contracts', status: 'complete', pct: 100 },
  { district: 'Larnaca', type: 'Sales', status: 'processing', pct: 73 },
  { district: 'Paphos', type: 'Contracts', status: 'pending', pct: 0 },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Portfolio & Data</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">
            Manage your assets, track your data
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Upload your portfolio, monitor Land Registry coverage, and access embedded analytics — all in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {portfolioFeatures.map(({ icon: Icon, title, description, chips, color }) => {
            const c = colorMap[color];
            return (
              <div key={title} className={`rounded-2xl p-7 border card-hover ${c.bg}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span key={chip} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.chip}`}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Data coverage table preview */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100">
            <div>
              <h4 className="text-sm font-bold text-gray-900">Land Registry Upload Status</h4>
              <p className="text-xs text-gray-400 mt-0.5">District-level coverage tracking</p>
            </div>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">View all</button>
          </div>
          <div className="divide-y divide-gray-50">
            {uploadRows.map(({ district, type, status, pct }) => (
              <div key={`${district}-${type}`} className="flex items-center gap-4 px-6 py-3.5">
                <div className="w-28 text-sm font-semibold text-gray-800">{district}</div>
                <div className="w-24 text-xs text-gray-400">{type}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          background: pct === 100 ? '#10b981' : pct > 0 ? '#2563eb' : '#e5e7eb',
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-500 w-8 text-right">{pct}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {status === 'complete' && <CheckCircle size={14} className="text-emerald-500" />}
                  {status === 'processing' && <Clock size={14} className="text-blue-500" />}
                  {status === 'pending' && <AlertTriangle size={14} className="text-amber-400" />}
                  <span
                    className={`text-xs font-medium capitalize ${
                      status === 'complete' ? 'text-emerald-600' : status === 'processing' ? 'text-blue-600' : 'text-amber-500'
                    }`}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
