import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import MarketData from './components/MarketData';
import Portfolio from './components/Portfolio';
import Platform from './components/Platform';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import MapDashboard from "./pages/MapDashboard";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <MapDashboard />
      <MarketData />
      <Portfolio />
      <Platform />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
