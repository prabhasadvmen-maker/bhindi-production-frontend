import { Link, useLocation } from 'react-router-dom';
import { ContactPanoramicSection } from '../contact/ContactPanoramicSection';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronUp,
  CheckCircle2,
  Clapperboard,
  Sparkles,
  Clock
} from 'lucide-react';

export const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">

      {/* Upper Panoramic Contact Section: Shown across the site, hidden on /contact where it is already featured at the top */}
      {!isContactPage && <ContactPanoramicSection />}

      {/* =========================================================
          THE LIGHT OLIVE PRODUCTION FOOTER
          (Harmonious Light Theme: #f0f5ec / #e5eee0)
         ========================================================= */}
      <div className="w-full bg-[#f0f5ec] text-[#24301d] border-t border-[#d5e4cc] overflow-hidden">

        {/* Upper Footer Directory Row */}
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#d8e6cf]">

            {/* Col 1: Brand & Cinema Standards (4 cols) */}
            <div className="lg:col-span-4 space-y-3.5">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <img
                  src="/logo.png"
                  alt="Bhindi Production"
                  className="h-13 sm:h-15 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <div>
                  <span className="font-serif-display font-bold text-xl sm:text-2xl text-[#181b20] tracking-tight block">
                    BHINDI
                  </span>
                  <span className="text-[10px] tracking-[0.28em] font-mono font-bold uppercase text-[#556f2d] block">
                    PRODUCTION
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                Full-spectrum Indian cinema production company & creative studio. Turning bold concepts into unforgettable feature films, commercials, and visual stories.
              </p>

              {/* Cinema Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#e2edd7] border border-[#556f2d]/30 text-[#2f421c] flex items-center gap-1.5 shadow-xs">
                  <Clapperboard className="w-3 h-3 text-[#556f2d]" /> 8K RED & ARRI
                </span>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#e2edd7] border border-[#556f2d]/30 text-[#2f421c] flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#556f2d]" /> DaVinci Color Suite
                </span>
              </div>
            </div>

            {/* Col 2: Navigation (2.5 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                <li>
                  <Link to="/" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Production Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                <li>
                  <Link to="/capabilities/feature-cinema" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Feature & Indie Cinema
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities/commercials" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    TVCs & Brand Commercials
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities/music-videos" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Music Videos & Choreography
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities/documentaries" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Corporate Documentaries
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities/color-grading" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    In-House DaVinci HDR Color
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Studio Headquarters (2.5 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                Studio Hub
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                <Link to="/contact" className="flex items-start gap-2.5 hover:text-black transition-colors group">
                  <MapPin className="w-4 h-4 text-[#556f2d] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    T-4B-506, NX One Plot no.17, Techzone-4, Greater Noida West, GAUTAM BUDDHA NAGAR, Pin 201308
                  </span>
                </Link>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <a href="tel:+919876543210" className="hover:underline">+91 9289377759</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <a href="tel:+919876543210" className="hover:underline">+91 9289377758</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <a href="mailto:info@bhindiproduction.com" className="hover:underline">info@bhindiproduction.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR: Light Soft Sage Bar */}
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 bg-[#e5eee0] border-t border-[#d2e0cb]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">

            {/* Left: Copyright */}
            <div className="text-gray-700 font-medium text-center md:text-left">
              <p>© 2025 Bhindi Production. All rights reserved.</p>
            </div>

            {/* Right: Social Icons + Scroll To Top */}
            <div className="flex items-center gap-2.5">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#d7e6d2] hover:bg-[#23351d] text-[#2c3f20] hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#d7e6d2] hover:bg-[#23351d] text-[#2c3f20] hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#d7e6d2] hover:bg-[#23351d] text-[#2c3f20] hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#d7e6d2] hover:bg-[#23351d] text-[#2c3f20] hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Scroll To Top Circular Button (ChevronUp) */}
              <button
                onClick={scrollToTop}
                className="w-7 h-7 rounded-full bg-[#23351d] hover:bg-[#344e29] text-white flex items-center justify-center transition-all shadow-sm ml-1 cursor-pointer"
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </footer>
  );
};
