import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className={`text-xl font-black tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              R<sup className="text-xs">°</sup>E/MAP<sup className="text-xs">°</sup>S
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              scrolled
                ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            Log In
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} size={22} />
          ) : (
            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={22} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700">Log In</button>
            <button className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
