import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', details: '' });
      }, 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      
      {/* =========================================================
          UPPER SECTION: Exact Match to User Screenshot (Light Cream)
          (Logo removed as requested by user)
         ========================================================= */}
      <section className="w-full bg-[#fbfaf6] text-[#1a1d20] py-12 sm:py-14 border-t border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* COLUMN 1: Slogan & Socials (Logo Removed) */}
            <div className="lg:col-span-4 lg:pr-8 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              
              {/* Slogan */}
              <p className="text-gray-900 text-base sm:text-lg font-serif-display font-bold leading-snug">
                Let's Create Something Amazing <br className="hidden sm:block" />
                Together.
              </p>

              {/* 5 Circular Social Media Buttons (Dark Green) */}
              <div className="flex items-center gap-2 pt-1">
                {/* YouTube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#23351d] hover:bg-[#35502c] text-white flex items-center justify-center transition-all shadow-sm transform hover:-translate-y-0.5" 
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#23351d] hover:bg-[#35502c] text-white flex items-center justify-center transition-all shadow-sm transform hover:-translate-y-0.5" 
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#23351d] hover:bg-[#35502c] text-white flex items-center justify-center transition-all shadow-sm transform hover:-translate-y-0.5" 
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#23351d] hover:bg-[#35502c] text-white flex items-center justify-center transition-all shadow-sm transform hover:-translate-y-0.5" 
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#23351d] hover:bg-[#35502c] text-white flex items-center justify-center transition-all shadow-sm transform hover:-translate-y-0.5" 
                  aria-label="X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* COLUMN 2: Contact Info (3.8 cols) with Vertical Left Divider */}
            <div className="lg:col-span-4 lg:px-8 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200/90 space-y-3.5">
              
              {/* Tagline */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#556f2d]">
                <span className="w-3 h-[1.5px] bg-[#556f2d] inline-block" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Headline */}
              <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#181b20] tracking-tight leading-tight">
                Have a Project in Mind?
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-sm">
                We'd love to hear from you. Reach out to us for your next film, commercial or creative project.
              </p>

              {/* 3 Contact Items with Round Green Badges */}
              <div className="space-y-2.5 pt-1">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 group text-xs sm:text-[13px] font-semibold text-gray-800 hover:text-[#556f2d] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#23351d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#556f2d] transition-colors shadow-sm">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>

                <a 
                  href="mailto:hello@bhindiproduction.com" 
                  className="flex items-center gap-3 group text-xs sm:text-[13px] font-semibold text-gray-800 hover:text-[#556f2d] transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#23351d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#556f2d] transition-colors shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>hello@bhindiproduction.com</span>
                </a>

                <div className="flex items-center gap-3 text-xs sm:text-[13px] font-semibold text-gray-800">
                  <div className="w-7 h-7 rounded-full bg-[#23351d] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Mumbai, India</span>
                </div>
              </div>

            </div>

            {/* COLUMN 3: Form + Calligraphy Artwork (4.2 cols) with Vertical Left Divider */}
            <div className="lg:col-span-4 lg:pl-8 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200/90">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 justify-between">
                
                {/* Form (Left side of Col 3) */}
                <div className="w-full sm:flex-1">
                  {submitted ? (
                    <div className="p-5 rounded-xl bg-white border border-[#556f2d]/30 text-center space-y-1.5 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-[#556f2d] mx-auto" />
                      <h4 className="font-bold text-xs text-[#181b20]">Message Received!</h4>
                      <p className="text-[11px] text-gray-500">We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-gray-300 focus:border-[#556f2d] text-xs text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-colors"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-gray-300 focus:border-[#556f2d] text-xs text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-colors"
                      />
                      <textarea
                        rows={2}
                        required
                        placeholder="Project Details"
                        value={form.details}
                        onChange={(e) => setForm({ ...form, details: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/80 border border-gray-300 focus:border-[#556f2d] text-xs text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-[#23351d] hover:bg-[#324b29] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer active:scale-98"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>

                {/* Calligraphy & Leaves Artwork (Right side of Col 3) */}
                <div className="flex flex-col items-center justify-center text-center select-none shrink-0 px-2 pt-3 sm:pt-0">
                  {/* Two Leaves graphic */}
                  <svg className="w-9 sm:w-10 h-9 sm:h-10 text-[#556f2d] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                  </svg>

                  {/* Handwriting text */}
                  <span className="font-script text-2xl sm:text-3xl lg:text-[34px] text-[#24361e] font-bold leading-[1.05] block">
                    Let's <br />
                    Create <br />
                    Together
                  </span>

                  {/* Hand-drawn underline */}
                  <svg className="w-18 sm:w-20 h-3.5 text-[#556f2d] mt-1" viewBox="0 0 100 15" fill="none">
                    <path d="M2 10 C30 2, 70 14, 98 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

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
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Feature & Indie Cinema
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    TVCs & Brand Commercials
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Music Videos & Choreography
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
                    Corporate Documentaries
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#181b20] hover:translate-x-1 inline-block transition-all">
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
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#556f2d] shrink-0 mt-0.5" />
                  <span>
                    Studio 4B, Film City Road, Goregaon (East), Mumbai 400065
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <span>hello@bhindiproduction.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
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
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
