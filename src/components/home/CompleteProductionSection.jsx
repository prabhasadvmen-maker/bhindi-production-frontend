import { Link } from 'react-router-dom';
import { 
  Clapperboard, 
  Building2, 
  Megaphone, 
  FileVideo, 
  Smartphone, 
  ArrowRight 
} from 'lucide-react';

export const CompleteProductionSection = () => {
  const serviceCards = [
    {
      id: 'film-production',
      title: 'Film Production',
      icon: Clapperboard,
      link: '/services#film-production'
    },
    {
      id: 'corporate-films',
      title: 'Corporate Films',
      icon: Building2,
      link: '/services#corporate-films'
    },
    {
      id: 'commercials',
      title: 'Commercials',
      icon: Megaphone,
      link: '/services#ad-films'
    },
    {
      id: 'documentaries',
      title: 'Documentaries',
      icon: FileVideo,
      link: '/services#film-production'
    },
    {
      id: 'social-media-content',
      title: 'Social Media Content',
      icon: Smartphone,
      link: '/services#digital-media'
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0b160b] via-[#112210] to-[#0c180b] text-white overflow-hidden border-b border-white/5">
      
      {/* Background Organic Leaves Shadow & Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#c5db82_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#3b5424]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-[5%] lg:px-[4%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* =========================================
              LEFT COLUMN: Header & Info (4 cols on XL, 12 on LG)
             ========================================= */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-4 sm:space-y-5 pr-0 xl:pr-2">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5db82]">
              <span className="w-3.5 h-[1.5px] bg-[#c5db82] inline-block" />
              <span>OUR SERVICES</span>
              <span className="w-3.5 h-[1.5px] bg-[#c5db82] inline-block" />
            </div>

            {/* Headline */}
            <h2 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Complete Production <br className="hidden sm:inline" />
              Solutions
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#b7c7b0] text-sm sm:text-[0.95rem] leading-relaxed max-w-xl">
              From concept to final cut, we handle every step of the production process with creativity, precision and passion.
            </p>

            {/* View All Services Outline Button */}
            <div className="pt-1 sm:pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#c5db82]/60 hover:border-[#c5db82] hover:bg-[#c5db82]/15 text-[#e5f0d3] text-xs font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c5db82]" />
              </Link>
            </div>

          </div>

          {/* =========================================
              CENTER COLUMN: 5 Glass Service Cards (5 cols on XL, 8 on LG)
             ========================================= */}
          <div className="lg:col-span-8 xl:col-span-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-2.5 sm:gap-3 py-2 sm:py-4 lg:py-0">
            {serviceCards.map((service) => {
              const IconComp = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className="group relative rounded-2xl bg-[#172c15]/50 hover:bg-[#203a1d]/80 border border-[#c5db82]/20 hover:border-[#c5db82]/60 backdrop-blur-md p-3 sm:p-4 flex flex-col justify-between items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg min-h-[145px] sm:min-h-[165px]"
                >
                  {/* Service Icon in Lime Green */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#c5db82] group-hover:scale-110 transition-transform duration-300 mt-1">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-[11px] sm:text-xs text-white/95 group-hover:text-[#c5db82] transition-colors leading-snug my-2">
                    {service.title}
                  </h3>

                  {/* Bottom Arrow Indicator */}
                  <div className="text-[#c5db82] text-xs font-bold transition-transform group-hover:translate-x-1">
                    →
                  </div>
                </Link>
              );
            })}
          </div>

          {/* =========================================
              RIGHT COLUMN: Clapperboard & Script (3 cols on XL, 4 on LG)
             ========================================= */}
          <div className="lg:col-span-4 xl:col-span-3 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group w-full max-w-[220px] sm:max-w-[250px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Clapperboard on mossy forest floor image */}
              <img
                src="/clapperboard.jpg"
                alt="Cinema clapperboard on forest floor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gentle dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* "Every Frame Counts" Script Handwriting Calligraphy */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 select-none transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
                <span className="font-script text-3xl xs:text-4xl sm:text-5xl text-white font-bold tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] block">
                  Every <br />
                  Frame <br />
                  Counts
                </span>

                {/* Hand-drawn white chalk brush underline */}
                <svg 
                  className="w-24 sm:w-30 h-4 sm:h-5 text-white/95 mt-1" 
                  viewBox="0 0 140 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 12 C35 3, 100 15, 136 5" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
