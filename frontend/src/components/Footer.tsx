import { MapPin, Mail, Phone, Twitter, Linkedin, Github } from 'lucide-react';

const links = {
  Product: ['Interactive Map', 'GIS Layers', 'Parcel Search', 'Market Data', 'Portfolio', 'Power BI'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white tracking-tight">
                R<sup className="text-xs">°</sup>E/MAP<sup className="text-xs">°</sup>S
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Cyprus real estate intelligence platform. Built for professionals who need accurate, fast, and spatial property data.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-blue-400 flex-shrink-0" />
              <span className="text-sm">Nicosia, Cyprus</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={14} className="text-blue-400 flex-shrink-0" />
              <a href="mailto:hello@remaps.cy" className="text-sm hover:text-white transition-colors">hello@remaps.cy</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-400 flex-shrink-0" />
              <span className="text-sm">+357 22 000 000</span>
            </div>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all">
                  <Icon size={14} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} RE/MAPS. All rights reserved.
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
