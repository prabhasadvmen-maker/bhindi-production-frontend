import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components';
import { 
  Home, 
  Services, 
  OurWork, 
  About, 
  Contact,
  FeatureCinema,
  Commercials,
  MusicVideos,
  Documentaries,
  ColorGrading
} from './pages';
import './App.css';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-[#f3f4f6]">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dedicated Capabilities Pages */}
            <Route path="/capabilities/feature-cinema" element={<FeatureCinema />} />
            <Route path="/capabilities/commercials" element={<Commercials />} />
            <Route path="/capabilities/music-videos" element={<MusicVideos />} />
            <Route path="/capabilities/documentaries" element={<Documentaries />} />
            <Route path="/capabilities/color-grading" element={<ColorGrading />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Production Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
