import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export const HeroSection = ({ onOpenShowreel }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh] flex items-center bg-[#090b0d] overflow-hidden select-none">
      
      {/* 1. Cinematic Background Image - Positioned to capture camera and sunset glow on mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-[62%_25%] sm:bg-[center_35%] transition-all duration-700"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />

      {/* 2. Atmospheric Gradient Overlays */}
      {/* On mobile: lighter vertical gradient so mountains, sunset, and camera are vivid and clearly visible */}
      {/* On desktop: horizontal cinematic vignette for clear left-aligned text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/55 sm:to-black/30 lg:to-transparent pointer-events-none" />
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none" />

      {/* 3. Bottom-Left Curved Olive Wave / Corner Accent (Desktop & Tablet only to avoid cluttering mobile) */}
      <div className="hidden sm:block absolute bottom-0 left-0 sm:w-64 md:w-72 sm:h-48 md:h-52 pointer-events-none overflow-hidden z-10 opacity-70 sm:opacity-85">
        <svg 
          viewBox="0 0 300 200" 
          className="w-full h-full text-[#3e5022]/85"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 200 L0 50 C60 50 140 90 190 145 C230 190 270 200 300 200 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

      {/* 4. Left Social Media Vertical Bar (Desktop only) */}
      <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-4 z-20">
        {/* YouTube */}
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-white/80 hover:text-white hover:scale-110 transition-all p-1"
          aria-label="YouTube"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-white/80 hover:text-white hover:scale-110 transition-all p-1"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-white/80 hover:text-white hover:scale-110 transition-all p-1"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-white/80 hover:text-white hover:scale-110 transition-all p-1"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* Vertical divider line */}
        <div className="w-[1.5px] h-14 bg-white/40 mt-2" />
      </div>

      {/* 5. Main Hero Content Container */}
      <div className="relative w-full px-4 sm:px-6 md:px-[5%] lg:px-[4%] py-6 xs:py-8 sm:py-16 lg:py-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Main Text & Buttons) */}
          <div className="lg:col-span-8 space-y-2.5 xs:space-y-3.5 sm:space-y-6 md:pl-6 lg:pl-10">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.3em] font-semibold text-[#d4ddc8] uppercase">
              <span>IDEAS</span>
              <span className="text-[#a4b591]">/</span>
              <span>STORIES</span>
              <span className="text-[#a4b591]">/</span>
              <span>IMPACT</span>
            </div>

            {/* Main Headline with Scaled-Down Mobile Serif Typography */}
            <h1 className="font-serif-display font-bold text-[2.15rem] xs:text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white tracking-tight leading-[1.08] sm:leading-[1.05] drop-shadow-md">
              Bhindi <br />
              Production
            </h1>

            {/* Subtitle */}
            <p className="text-[#e2e8f0] text-xs xs:text-sm sm:text-base md:text-lg font-normal max-w-[310px] xs:max-w-sm sm:max-w-lg leading-relaxed drop-shadow-sm">
              We turn your ideas into visual stories that inspire, engage and make an impact.
            </p>

            {/* Action Buttons Row (Side-by-side and compact on mobile) */}
            <div className="pt-1.5 sm:pt-3 flex flex-row items-center flex-wrap gap-2.5 sm:gap-4">
              {/* Watch Showreel Button */}
              <button
                onClick={onOpenShowreel}
                className="group inline-flex items-center justify-center gap-2 xs:gap-3 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-2.5 rounded-full bg-[#6c863b] hover:bg-[#7d9c44] text-white text-xs xs:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                  <Play className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 fill-[#6c863b] text-[#6c863b] translate-x-0.5" />
                </div>
                <span>Watch Showreel</span>
              </button>

              {/* Explore Our Work Button */}
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-2.5 rounded-full border border-white/50 hover:border-white bg-black/30 hover:bg-white/10 text-white text-xs xs:text-sm font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Our Work</span>
                <span className="text-sm xs:text-base leading-none">→</span>
              </Link>
            </div>

            {/* Bottom Controls Row: Scroll Down + Mobile Socials */}
            <div className="pt-3 xs:pt-4 sm:pt-8 flex items-center justify-between xs:justify-start gap-5 sm:gap-6">
              {/* Scroll Down Indicator */}
              <div className="flex items-center gap-2 xs:gap-3 text-xs tracking-wider text-gray-200 font-medium">
                <div className="w-3.5 xs:w-4 h-6 xs:h-7 rounded-full border border-white/70 flex justify-center pt-1 shrink-0">
                  <div className="w-1 h-1.5 xs:h-2 rounded-full bg-white animate-wheel" />
                </div>
                <span className="drop-shadow-sm text-[10px] xs:text-[11px] sm:text-xs">Scroll Down</span>
              </div>

              {/* Mobile-Only Social Media Links */}
              <div className="flex md:hidden items-center gap-2.5 xs:gap-3 text-white/80">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-1 hover:text-white">
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-1 hover:text-white">
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-1 hover:text-white">
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Handwritten Calligraphy ("Film Beyond Limits") */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center lg:justify-end pt-3 sm:pt-10 lg:pt-0">
            <div className="relative inline-block select-none transform rotate-[-4deg] sm:rotate-[-8deg] hover:rotate-0 transition-transform duration-500 text-center lg:text-right">
              <span className="font-script text-2xl xs:text-3xl sm:text-6xl lg:text-7xl text-white font-bold tracking-wide leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] block">
                Film <span className="xs:hidden"> </span><br className="hidden xs:inline" />
                Beyond <span className="xs:hidden"> </span><br className="hidden xs:inline" />
                Limits
              </span>

              {/* Hand-drawn white chalk brush stroke */}
              <svg 
                className="w-20 xs:w-28 sm:w-44 h-3.5 sm:h-6 text-white/95 mt-1 mx-auto lg:ml-auto lg:mr-0" 
                viewBox="0 0 160 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 14 C45 3, 115 17, 156 6" 
                  stroke="currentColor" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* 6. Vertical Edge Text along Far Right ("BHINDI PRODUCTION") */}
      <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-3 tracking-[0.35em] text-[10px] font-mono uppercase text-white/40 transform rotate-90 origin-right translate-x-8 pointer-events-none">
        <span className="w-10 h-[1px] bg-white/30" />
        <span>BHINDI PRODUCTION</span>
      </div>

    </section>
  );
};
