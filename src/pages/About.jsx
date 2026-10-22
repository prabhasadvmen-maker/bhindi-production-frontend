import { 
  CheckCircle2, 
  Film, 
  Camera, 
  Sparkles, 
  Play, 
  Sliders,
  Layers,
  Award,
  Clapperboard,
  Video,
  Target,
  PenTool,
  Tv,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_STATS } from '../services/mockData';
import { TeamGrid } from '../components/about/TeamGrid';

export const About = () => {
  const studioPillars = [
    {
      title: 'Vision-First Storytelling',
      desc: 'Narratives sculpted with human truth and emotional resonance.',
      icon: Film,
      badge: 'Core Vision'
    },
    {
      title: '8K RED & ARRI Cinema Kits',
      desc: 'In-house cinema bodies, Cooke Anamorphic glass, Ronin 2 rigs.',
      icon: Camera,
      badge: 'Tier-1 Tech'
    },
    {
      title: 'DaVinci DI Color Suite',
      desc: 'Reference-calibrated HDR mastering and Dolby Atmos audio.',
      icon: Sliders,
      badge: 'Post Mastery'
    },
    {
      title: 'Pan-India Line Agility',
      desc: 'Turnkey line production across 18+ states with rapid clearances.',
      icon: Award,
      badge: 'Turnkey'
    }
  ];

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
          CREATIVE ABOUT HEADER BANNER (Crafting Stories That Matter)
         ========================================= */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#f4f7ef] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        
        {/* Subtle organic ambient glow */}
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
              <div className="relative z-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#15171d] group cursor-pointer transform hover:scale-[1.01] transition-all duration-500">
                <img
                  src="/about_cameraman_sunset.jpg"
                  alt="Bhindi Production Cinematographer on location"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Overlapping Secondary Card: On-Set Live Director Monitor */}
              <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 z-20 w-36 sm:w-44 md:w-48 aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-[3px] sm:border-4 border-white bg-[#101216] group cursor-pointer transform hover:scale-105 transition-all duration-300">
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
                CENTER COLUMN: About Us Identity & Narrative (4 cols)
               ========================================= */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:px-2">
              
              {/* Tagline: — WHO WE ARE • ABOUT US — */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#4d6639]">
                <span className="w-4 h-[1.5px] bg-[#4d6639] inline-block" />
                <span>ABOUT BHINDI PRODUCTION</span>
                <span className="w-4 h-[1.5px] bg-[#4d6639] inline-block" />
              </div>

              {/* Headline */}
              <h1 className="font-serif-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#14171a] tracking-tight leading-[1.12]">
                Pioneering Stories, <br />
                <span className="text-[#48633b]">Crafted with Soul.</span>
              </h1>

              {/* Paragraph Description */}
              <p className="text-gray-600 text-sm sm:text-[0.95rem] leading-relaxed">
                Bhindi Production is an independent cinema studio and creative film production house. Founded in 2018, we bridge authentic Indian narrative depth with global cinema benchmarks across commercial films, music videos, and cultural documentaries.
              </p>

              {/* Dual Production Hub Highlights */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-white/90 border border-[#48633b]/20 shadow-xs">
                  <span className="font-bold text-[#14171a] block text-xs">Greater Noida West</span>
                  <span className="text-[11px] text-[#556f2d] font-semibold">Development & Direction</span>
                </div>
                <div className="p-3 rounded-xl bg-white/90 border border-[#48633b]/20 shadow-xs">
                  <span className="font-bold text-[#14171a] block text-xs">Mumbai Film City</span>
                  <span className="text-[11px] text-[#556f2d] font-semibold">Sound Stage & DI Suite</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#philosophy"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#182619] hover:bg-[#273d27] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-xl group"
                >
                  <span>Our Philosophy</span>
                  <ArrowDown className="w-4 h-4 text-[#a3c772] group-hover:translate-y-0.5 transition-transform" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-300 text-[#14171a] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-xs"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#48633b]" />
                </Link>
              </div>

            </div>

            {/* =========================================
                RIGHT COLUMN: 4 Dedicated Studio Pillars (3 cols)
                (Distinct from Home page services list!)
               ========================================= */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-200/90 pt-6 lg:pt-0 lg:pl-6 xl:pl-8 space-y-3 sm:space-y-3.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#556f2d] pb-0.5">
                STUDIO PILLARS
              </div>

              {studioPillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-start gap-3 p-2.5 rounded-xl bg-white/70 hover:bg-white border border-gray-200/60 hover:border-[#556f2d]/30 transition-all duration-200 shadow-xs"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#dbe5d1] text-[#344725] group-hover:bg-[#48633b] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs mt-0.5">
                      <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
                    </div>

                    {/* Pillar Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="font-bold text-xs sm:text-[13px] text-[#14171a] group-hover:text-[#48633b] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#e8f1df] text-[#40562e] font-semibold shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          STORY & PHILOSOPHY SECTION (With Real Production Video)
         ========================================= */}
      <section id="philosophy" className="py-14 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
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
