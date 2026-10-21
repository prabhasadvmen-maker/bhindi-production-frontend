import { Link } from 'react-router-dom';
import { 
  Play, 
  Film, 
  Video, 
  Compass, 
  Edit3, 
  Tv, 
  ArrowRight 
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
      icon: Compass,
    },
    {
      id: 'editing-post-production',
      title: 'Editing & Post Production',
      desc: 'Polishing Perfection',
      icon: Edit3,
    },
    {
      id: 'digital-media',
      title: 'Digital Media',
      desc: 'Reels, Shorts, Social Campaigns',
      icon: Tv,
    },
  ];

  return (
    <section className="relative bg-[#fbfaf6] text-[#1c1f24] py-16 sm:py-20 overflow-hidden border-b border-gray-200">
      
      {/* Top subtle organic wave flowing from the Hero section */}
      <div className="absolute top-0 left-0 w-64 h-16 pointer-events-none opacity-80">
        <svg viewBox="0 0 300 80" fill="none" className="w-full h-full text-[#3e5022]/30">
          <path d="M0 0 L150 0 C100 40 40 70 0 80 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-[5%] lg:px-[4%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* =========================================
              LEFT COLUMN: About Us Text & CTA (4 cols)
             ========================================= */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 pr-0 lg:pr-4">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#556f2d]">
              <span className="w-4 h-[1.5px] bg-[#556f2d] inline-block" />
              <span>ABOUT US</span>
              <span className="w-4 h-[1.5px] bg-[#556f2d] inline-block" />
            </div>

            {/* Headline */}
            <h2 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl text-[#181b20] tracking-tight leading-[1.12]">
              Crafting Stories <br />
              <span className="text-[#556f2d]">That Matter</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-gray-600 text-sm sm:text-[0.95rem] leading-relaxed">
              Bhindi Production is a creative film production house, dedicated to turning ideas into powerful visual stories. We specialize in branded content, commercials, documentaries, music videos and cinematic storytelling.
            </p>

            {/* Know More Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#27351c] hover:bg-[#384c27] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#a8c57e]" />
              </Link>
            </div>

          </div>

          {/* =========================================
              CENTER COLUMN: Featured Video Card (4 cols)
             ========================================= */}
          <div className="lg:col-span-4 relative flex items-center justify-center my-4 sm:my-6 lg:my-0">
            
            {/* Organic Leaves & Abstract Blob Graphics Backdrop */}
            <div className="absolute inset-0 -m-4 sm:-m-6 pointer-events-none flex items-center justify-center">
              {/* Layer 1: Soft light-green abstract leaf */}
              <div className="absolute -top-4 -left-3 w-36 sm:w-40 h-44 sm:h-52 bg-[#d7e4c7] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-15deg] opacity-80" />
              {/* Layer 2: Deeper green angled leaf shape */}
              <div className="absolute -bottom-6 -right-3 w-40 sm:w-48 h-40 sm:h-48 bg-[#637d3b] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[25deg] opacity-85 shadow-sm" />
              {/* Layer 3: Accent dark olive leaf */}
              <div className="absolute -left-5 top-1/4 w-24 sm:w-28 h-36 sm:h-44 bg-[#415525] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-45deg] opacity-90" />
            </div>

            {/* The Main Video Card with 3D shadow & subtle rotation */}
            <div className="relative z-10 w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[360px] aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-[#16191f] group transform hover:scale-[1.02] transition-transform duration-500">
              
              {/* Video Looping Preview from public folder */}
              <video
                src="/video_about.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gentle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Interactive Play Button */}
              <button
                onClick={onOpenVideo}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play BTS Video"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/90 bg-black/40 hover:bg-[#556f2d] backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 fill-white text-transparent translate-x-0.5" />
                </div>
              </button>

            </div>

            {/* "Creative Team" script calligraphy overlay at bottom-left */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-1 sm:-left-3 z-20 pointer-events-none transform rotate-[-10deg]">
              <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#2d3a1d] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] block leading-tight">
                Creative <br />
                Team
              </span>
              <svg className="w-20 sm:w-24 h-4 text-[#556f2d]" viewBox="0 0 100 15" fill="none">
                <path d="M2 10 C30 2, 70 14, 98 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: 5 Vertical Services List (4 cols)
             ========================================= */}
          <div className="lg:col-span-4 lg:pl-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200/90 space-y-3 sm:space-y-4">
            {serviceList.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.id}
                  to={`/services#${item.id}`}
                  className="group flex items-center gap-3.5 sm:gap-4 p-2 sm:p-2.5 rounded-xl hover:bg-white transition-all duration-200"
                >
                  {/* Round Olive Icon Badge matching the reference image */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#dbe4ce] text-[#34441c] group-hover:bg-[#556f2d] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                    <IconComp className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Service Text Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-[0.95rem] text-[#181b20] group-hover:text-[#556f2d] transition-colors leading-snug">
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
