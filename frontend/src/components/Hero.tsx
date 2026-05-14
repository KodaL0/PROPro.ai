import { Rocket, ArrowRight, MapPin, Layers, TrendingUp } from 'lucide-react';

const mapPins = [
  { top: '38%', left: '34%', color: '#ef4444', delay: '0s' },
  { top: '28%', left: '62%', color: '#22c55e', delay: '0.3s' },
  { top: '55%', left: '68%', color: '#eab308', delay: '0.6s' },
  { top: '65%', left: '35%', color: '#ef4444', delay: '0.9s' },
  { top: '45%', left: '22%', color: '#94a3b8', delay: '1.2s' },
];

export default function Hero() {
  return (
    <section id="home" className="gradient-hero min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 badge rounded-full px-4 py-2 mb-6">
              <MapPin size={14} className="text-blue-300" />
              <span className="text-white/80 text-sm font-medium">Built for Cyprus Real Estate</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Unlock{' '}
              <span className="gradient-text">Cyprus Real Estate</span>{' '}
              Intelligence
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Remaps gives professionals instant access to parcel data, comparable sales, GIS layers, and market analytics — all on a single platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Rocket size={18} />
                Request Demo
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                Explore Features
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10">
              {[
                { icon: Layers, label: '40+ GIS Layers' },
                { icon: MapPin, label: '1M+ Parcels' },
                { icon: TrendingUp, label: '500K+ Sales' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={14} className="text-blue-300" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Map preview */}
          <div className="float-animation hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: 'rgba(15, 30, 80, 0.6)', backdropFilter: 'blur(20px)' }}>
              {/* Map header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                    <MapPin size={12} className="text-blue-300" />
                    <span className="text-white/70 text-xs font-medium">Interactive GIS Map — Cyprus</span>
                  </div>
                </div>
              </div>

              {/* Map body */}
              <div className="relative h-72" style={{ background: 'linear-gradient(145deg, #1a3a6b 0%, #1e4a8a 40%, #2563eb 100%)' }}>
                {/* Stylized Cyprus island shape */}
                <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full opacity-30">
                  <path
                    d="M80,160 Q100,140 130,135 Q160,128 200,130 Q240,132 270,125 Q300,118 330,120 Q360,122 390,130 Q420,138 440,148 Q460,158 455,170 Q450,182 430,188 Q410,194 385,195 Q360,196 335,192 Q310,188 285,190 Q260,192 235,195 Q210,198 185,195 Q160,192 140,185 Q120,178 100,175 Q80,172 80,160Z"
                    fill="rgba(147, 197, 253, 0.3)"
                    stroke="rgba(147, 197, 253, 0.6)"
                    strokeWidth="1.5"
                  />
                  {/* Roads/grid lines */}
                  <line x1="150" y1="165" x2="380" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <line x1="200" y1="140" x2="210" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                  <line x1="280" y1="135" x2="285" y2="188" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                  <line x1="340" y1="130" x2="345" y2="188" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                  {/* City label */}
                  <text x="255" y="170" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Cyprus</text>
                  <text x="275" y="158" fill="rgba(255,255,255,0.3)" fontSize="7" textAnchor="middle">Nicosia</text>
                </svg>

                {/* Map pins */}
                {mapPins.map((pin, i) => (
                  <div
                    key={i}
                    className="absolute pulse-dot"
                    style={{ top: pin.top, left: pin.left, animationDelay: pin.delay }}
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                      style={{ background: pin.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-40"
                      style={{ background: pin.color }}
                    />
                  </div>
                ))}

                {/* Layer indicator */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {['Planning Zones', 'Parcels', 'Sales'].map((layer, i) => (
                    <div
                      key={layer}
                      className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded px-2 py-1"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: i === 0 ? '#60a5fa' : i === 1 ? '#34d399' : '#f87171' }}
                      />
                      <span className="text-white/70 text-xs">{layer}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-4 py-2 flex items-center justify-between">
                  <span className="text-white/50 text-xs">Zoom: 8 · EPSG:4326</span>
                  <span className="text-white/50 text-xs">34.8°N, 33.0°E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
