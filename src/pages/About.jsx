import { 
  CheckCircle2, 
  Film, 
  Camera, 
  Sparkles, 
  Play, 
  Sliders,
  Layers,
  Award
} from 'lucide-react';
import { COMPANY_STATS } from '../services/mockData';
import { TeamGrid } from '../components/about/TeamGrid';

export const About = () => {
  const onSetGallery = [
    {
      type: 'video',
      src: '/video_fashion_capsule.mp4',
      title: 'Fashion & Wardrobe Styling',
      subtitle: 'Editorial Costume Direction'
    },
    {
      type: 'image',
      src: '/img_modern_living.jpg',
      title: 'Contemporary Set Design',
      subtitle: 'Interior Architecture & Staging'
    },
    {
      type: 'video',
      src: '/video_entryway.mp4',
      title: 'Spatial Cinematography',
      subtitle: 'Lighting & Depth Composition'
    },
    {
      type: 'image',
      src: '/img_beauty_hair.jpg',
      title: 'Hair & Makeup Artistry',
      subtitle: 'High-Definition Character Design'
    }
  ];

  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* =========================================
          CREATIVE ABOUT HEADER BANNER (Olive & White Theme)
         ========================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#f4f7ef] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        
        {/* Organic leaves artistic backdrop design (Matching Services) */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-80 h-96 pointer-events-none hidden lg:block opacity-65">
          <div className="relative w-full h-full">
            <div className="absolute -top-6 -left-4 w-52 h-64 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-12deg] opacity-80" />
            <div className="absolute -bottom-8 -right-4 w-60 h-60 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[20deg] opacity-85 shadow-sm" />
            <div className="absolute -left-6 top-1/4 w-36 h-52 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-40deg] opacity-90" />
          </div>
        </div>

        {/* Subtle decorative leaf graphics in corners */}
        <div className="absolute top-0 right-0 w-80 h-80 text-[#556f2d]/10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
            <path d="M15 95 Q55 60 90 60 Q60 85 15 95 Z" />
          </svg>
        </div>

        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1df] border border-[#556f2d]/25 text-[#304419] text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#556f2d] animate-pulse" />
              <span>ABOUT BHINDI PRODUCTION • OUR STORY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
              More Than Production. <br />
              <span className="text-[#556f2d]">A Creative Partner.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
              Founded with a hunger for fearless cinematic storytelling, Bhindi Production has evolved into one of the country's most dynamic full-service production houses, working with leading brands, agencies, and indie visionaries.
            </p>

            {/* Badges Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              {[
                'Mumbai Hub & Pan-India Units',
                'In-House Master Post-Production',
                'Award-Winning Film Crew'
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#293c1a] bg-white py-2 px-3 rounded-xl border border-[#556f2d]/20 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#556f2d] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          STORY & PHILOSOPHY SECTION (With Real Production Video)
         ========================================= */}
      <section className="py-14 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Philosophy Statement */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf4e6] text-[#3a4e20] text-xs font-mono font-bold">
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="font-serif-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#181b20] leading-tight">
              Every Frame Must Evoke <br className="hidden sm:block" />
              <span className="text-[#556f2d]">An Emotion.</span>
            </h2>

            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
              At Bhindi Production, we don't believe in passive viewing. Whether it’s a 30-second automotive commercial, an intimate cultural documentary, or a high-energy dance sequence, our mission is to create visuals that linger long after the screen goes dark.
            </p>

            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              With our production base in Mumbai and filming logistics deployed nationwide, we seamlessly handle casting, location scouting, shooting permits, multi-camera rigs, drone aerials, and world-class DaVinci Resolve color mastering.
            </p>

            {/* 3 Core Production Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#556f2d] uppercase block">
                  01. Narrative Depth
                </span>
                <p className="text-xs text-gray-600">Scripts sculpted to connect on a human, emotional frequency.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#556f2d] uppercase block">
                  02. Cinema Tech
                </span>
                <p className="text-xs text-gray-600">8K RED, ARRI Mini LF, Cooke Anamorphic and Ronin rigs.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#556f2d] uppercase block">
                  03. Pan-India Agility
                </span>
                <p className="text-xs text-gray-600">Turnkey line production across states, deserts, and cities.</p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Real Production Cinema Showcase Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Scaled Organic Leaves Artistic Backdrop */}
            <div className="absolute inset-0 -m-8 pointer-events-none flex items-center justify-center">
              <div className="absolute -top-10 -left-6 w-56 h-72 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-12deg] opacity-80" />
              <div className="absolute -bottom-10 -right-6 w-64 h-64 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[20deg] opacity-85 shadow-sm" />
              <div className="absolute -left-8 top-1/4 w-40 h-60 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-40deg] opacity-90" />
            </div>

            {/* Cinema Video Showcase Card (Responsive Height) */}
            <div className="relative z-10 w-full max-w-[480px] lg:max-w-[520px] h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-[#15171d] group transform hover:scale-[1.02] transition-transform duration-500">
              
              {/* Real Looping Behind-The-Scenes Production Video */}
              <video
                src="/video_about_real.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/15 pointer-events-none" />

              {/* Top Reel Label */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d8ebaa] bg-black/60 backdrop-blur-md px-3 sm:px-3.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-[#a3c772]" /> REAL FILMING SET IN ACTION
                </span>
              </div>

              {/* Floating Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium z-10 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a8c57e] animate-ping" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-gray-200">
                    Bhindi Production Live Rig
                  </span>
                </div>
                <span className="bg-[#556f2d] text-white px-2 sm:px-2.5 py-0.5 rounded text-[10px] font-bold">
                  8K DCI
                </span>
              </div>

            </div>

            {/* Script Calligraphy Artwork */}
            <div className="absolute -bottom-8 -left-4 sm:-left-6 z-20 pointer-events-none transform rotate-[-8deg]">
              <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#24361e] font-bold drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] block leading-tight">
                "Creating Real Stories"
              </span>
              <svg className="w-28 sm:w-32 h-4 text-[#556f2d]" viewBox="0 0 100 15" fill="none">
                <path d="M2 10 C30 2, 70 14, 98 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PRODUCTION IN ACTION: Behind The Lens Gallery Strip
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-[#dce6d2]">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
                BEHIND THE LENS
              </span>
              <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#181b20]">
                On Set Across India
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md">
              From elaborate architectural set designs to high-fashion wardrobe sessions and character styling.
            </p>
          </div>

          {/* 4 Media Cards (Videos & Images from public folder) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onSetGallery.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#15171d] border border-[#556f2d]/20 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Title Bar */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-[#a3c772] font-semibold block">
                    {item.subtitle}
                  </span>
                  <h4 className="font-serif-display font-bold text-base text-white leading-snug group-hover:text-[#c5db82] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          STATS COUNTER ROW (Olive & White Theme)
         ========================================= */}
      <section className="py-16 bg-[#edf4e6] border-b border-[#d5e3cb]">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="space-y-1.5 bg-white/80 p-4 sm:p-6 rounded-2xl shadow-sm border border-white">
                <div className="font-serif-display font-black text-3xl xs:text-4xl sm:text-5xl text-[#181b20]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#556f2d] uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CREATIVE TEAM (With Monogram Cinema Badges)
         ========================================= */}
      <section className="py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            <span>THE ARCHITECTS</span>
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
          </div>

          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#181b20]">
            Meet the Creative Minds
          </h2>

          <p className="text-sm text-gray-600">
            Directors, cinematographers, and colorists who breathe life into every project.
          </p>
        </div>

        <TeamGrid />
      </section>

    </div>
  );
};
