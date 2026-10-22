import { Link } from 'react-router-dom';
import { 
  Film, 
  Video, 
  Target, 
  PenTool, 
  Tv, 
  ArrowRight,
  Clapperboard,
  Camera
} from 'lucide-react';

export const ServicesBar = ({ onOpenVideo }) => {
  const serviceList = [
    {
      id: 'film-production',
      title: 'Film Production',
      desc: 'Commercials, Films, Documentaries',
      icon: Film,
    },
    {
      id: 'video-production',
      title: 'Video Production',
      desc: 'Branded Content, Social Media',
      icon: Video,
    },
    {
      id: 'creative-direction',
      title: 'Creative Direction',
      desc: 'Ideas to Execution',
      icon: Target,
    },
    {
      id: 'editing-post-production',
      title: 'Editing & Post Production',
      desc: 'Polishing Perfection',
      icon: PenTool,
    },
    {
      id: 'digital-media',
      title: 'Digital Media',
      desc: 'Reels, Shorts, Social Campaigns',
      icon: Tv,
    },
  ];

  return (
    <section className="relative bg-[#fbfaf6] text-[#1c1f24] py-14 sm:py-20 overflow-hidden border-b border-gray-200">
      
      {/* Subtle organic ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#edf4e6] rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e7efdf] rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================
              LEFT COLUMN: Visual Montage & "Stories in Motion" (5 cols)
             ========================================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center my-6 sm:my-8 lg:my-0 px-2 sm:px-4">
            
            {/* Organic Leaves & Fluid Green Backdrop */}
            <div className="absolute inset-0 -m-6 sm:-m-8 pointer-events-none flex items-center justify-center">
              {/* Soft light sage organic blob */}
              <div className="absolute -top-6 -left-6 w-48 sm:w-56 h-56 sm:h-64 bg-[#d8e4cd] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform -rotate-12 opacity-85" />
              {/* Deep forest olive leaf silhouette on the left */}
              <div className="absolute -left-6 top-8 w-36 sm:w-44 h-48 sm:h-56 bg-[#4c6338] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform -rotate-45 opacity-90 shadow-sm" />
              {/* Olive bottom shelf backing */}
              <div className="absolute -bottom-8 left-6 w-56 sm:w-64 h-32 sm:h-40 bg-[#5d7742] rounded-[50%_50%_35%_65%/45%_55%_45%_55%] transform rotate-6 opacity-85" />
              {/* Right accent leaf behind main photo */}
              <div className="absolute -top-4 right-2 w-32 h-36 bg-[#789358] rounded-[60%_40%_50%_50%/40%_60%_40%_60%] transform rotate-12 opacity-75" />
            </div>

            {/* Top-Left Floating Circle Badge (Clapperboard) */}
            <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#486237] text-[#e8f1df] flex items-center justify-center shadow-lg border-2 border-white/80 transform hover:scale-110 transition-transform">
              <Clapperboard className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </div>

            {/* Top-Right Floating Circle Badge (Camera) */}
            <div className="absolute top-2 -right-2 sm:top-3 sm:-right-3 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#486237] text-[#e8f1df] flex items-center justify-center shadow-lg border-2 border-white/80 transform hover:scale-110 transition-transform">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </div>

            {/* Main Picture Card: Professional Cameraman at Sunset */}
            <div 
              onClick={onOpenVideo}
              className="relative z-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#15171d] group cursor-pointer transform hover:scale-[1.01] transition-all duration-500"
            >
              <img
                src="/about_cameraman_sunset.jpg"
                alt="Bhindi Production Cinematographer on location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Overlapping Secondary Card: On-Set Live Director Monitor */}
            <div 
              onClick={onOpenVideo}
              className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 z-20 w-36 sm:w-44 md:w-48 aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white bg-[#101216] group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <img
                src="/about_monitor_onset.jpg"
                alt="On-Set Live Camera Monitor Screen"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Subtle REC recording indicator */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-mono text-white pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>REC</span>
              </div>
            </div>

            {/* Bottom-Left Script Calligraphy: "Stories in Motion" */}
            <div className="absolute -bottom-8 left-0 sm:-bottom-10 sm:-left-4 z-20 pointer-events-none transform -rotate-8">
              <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#2e4021] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)] block leading-none">
                Stories <br />
                <span className="ml-3 sm:ml-4">in Motion</span>
              </span>
              <svg className="w-24 sm:w-32 h-4 text-[#486339] -mt-1 ml-1" viewBox="0 0 120 18" fill="none">
                <path d="M4 10 C35 2, 75 16, 116 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M14 14 C45 8, 80 16, 105 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
              </svg>
            </div>

          </div>

          {/* =========================================
              CENTER COLUMN: About Us Text & CTA Button (4 cols)
             ========================================= */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:px-2">
            
            {/* Tagline: — ABOUT US — */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#4d6639]">
              <span className="w-4 h-[1.5px] bg-[#4d6639] inline-block" />
              <span>ABOUT US</span>
              <span className="w-4 h-[1.5px] bg-[#4d6639] inline-block" />
            </div>

            {/* Headline */}
            <h2 className="font-serif-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14171a] tracking-tight leading-[1.12]">
              Crafting Stories <br />
              <span className="text-[#48633b]">That Matter</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-gray-600 text-sm sm:text-[0.95rem] leading-relaxed">
              Bhindi Production is a creative film production house, dedicated to turning ideas into powerful visual stories. We specialize in branded content, commercials, documentaries, music videos and cinematic storytelling.
            </p>

            {/* Know More Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#182619] hover:bg-[#273d27] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-xl group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-[#a3c772] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: 5 Vertical Services List (3 cols)
             ========================================= */}
          <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-200/90 pt-6 lg:pt-0 lg:pl-6 xl:pl-8 space-y-3.5 sm:space-y-4">
            {serviceList.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.id}
                  to={`/services#${item.id}`}
                  className="group flex items-center gap-3.5 sm:gap-4 p-1.5 sm:p-2 rounded-xl hover:bg-white/90 transition-all duration-200"
                >
                  {/* Soft Sage Circle Icon Badge matching the reference image */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#dbe5d1] text-[#344725] group-hover:bg-[#48633b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Service Text Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xs sm:text-sm md:text-[0.92rem] text-[#14171a] group-hover:text-[#48633b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};

