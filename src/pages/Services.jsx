import { Link } from 'react-router-dom';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clapperboard, 
  Film, 
  Layers, 
  Sliders 
} from 'lucide-react';
import { SERVICES_DATA } from '../services/mockData';
import { ServiceDetailCard } from '../components/services/ServiceDetailCard';

export const Services = () => {
  const steps = [
    {
      num: '01',
      title: 'Concept & Ideation',
      desc: 'Screenplay breakdown, visual moodboards, treatment decks and narrative direction.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Pre-Production',
      desc: 'Casting, pan-India location scouting, shooting permits, and precision technical rigging.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Principal Production',
      desc: '8K RED V-Raptor & ARRI Alexa capture, anamorphic lighting, drone aerials and full crew ops.',
      icon: Clapperboard
    },
    {
      num: '04',
      title: 'Post & Mastering',
      desc: 'In-house DaVinci Resolve HDR color grading, Dolby Atmos sound design, and OTT delivery.',
      icon: Sliders
    }
  ];

  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* =========================================
          CREATIVE HERO BANNER (Olive Green & White Theme)
         ========================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f4f7ef] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        
        {/* Subtle decorative leaf graphics in corners */}
        <div className="absolute top-0 right-0 w-80 h-80 text-[#556f2d]/10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
            <path d="M15 95 Q55 60 90 60 Q60 85 15 95 Z" />
          </svg>
        </div>

        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Headlines & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1df] border border-[#556f2d]/25 text-[#304419] text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#556f2d] animate-pulse" />
                <span>WHAT WE DO • FULL-SERVICE FILM PRODUCTION</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                Crafting Films With <br />
                <span className="text-[#556f2d]">Precision & Soul.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
                From preliminary ideation and screenplay breakdown to multi-camera production and final color master finishing — discover our full-spectrum production capabilities designed to turn bold concepts into unforgettable cinema.
              </p>

              {/* Key Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                {[
                  '8K RED & ARRI Capture',
                  'In-House DaVinci Color',
                  'Pan-India Shoot Logistics'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#293c1a] bg-white py-2 px-3 rounded-xl border border-[#556f2d]/20 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#556f2d] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Quick Jump Anchor Pills */}
              <div className="pt-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Jump to Service:
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_DATA.map((srv) => (
                    <a
                      key={srv.id}
                      href={`#${srv.id}`}
                      className="text-xs font-semibold px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#23351d] text-gray-700 hover:text-white border border-gray-300 hover:border-[#23351d] transition-all shadow-sm"
                    >
                      {srv.title}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Creative Video Card with Calligraphy */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
              
              {/* Organic leaves artistic backdrop */}
              <div className="absolute inset-0 -m-8 pointer-events-none flex items-center justify-center">
                <div className="absolute -top-10 -left-6 w-56 h-72 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-12deg] opacity-80" />
                <div className="absolute -bottom-10 -right-6 w-64 h-64 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[20deg] opacity-85 shadow-sm" />
                <div className="absolute -left-8 top-1/4 w-40 h-60 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-40deg] opacity-90" />
              </div>

              {/* Main Cinema Showcase Card (Responsive Height) */}
              <div className="relative z-10 w-full max-w-[480px] lg:max-w-[520px] h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-[#15171d] group transform hover:scale-[1.02] transition-transform duration-500">
                {/* Looping video from public folder */}
                <video
                  src="/video_showreel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a8c57e] animate-ping" />
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-gray-200">Official Production Reel</span>
                  </div>
                  <span className="bg-[#556f2d] text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    8K DCI
                  </span>
                </div>
              </div>

              {/* Script Calligraphy Artwork */}
              <div className="absolute -bottom-7 -left-3 sm:-left-5 z-20 pointer-events-none transform rotate-[-10deg]">
                <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#28381c] font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] block leading-tight">
                  Vision To <br />
                  Screen
                </span>
                <svg className="w-24 sm:w-28 h-4 text-[#556f2d]" viewBox="0 0 100 15" fill="none">
                  <path d="M2 10 C30 2, 70 14, 98 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4-STEP PRODUCTION WORKFLOW (Creative Olive & White)
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#f7faf3] border-b border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            <span>HOW WE WORK</span>
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
          </div>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#181b20]">
            The 4-Stage Production Pipeline
          </h2>
          <p className="text-sm text-gray-600">
            A battle-tested creative workflow engineered to bring transparency, artistry, and technical excellence to every frame.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div 
                key={i} 
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#556f2d]/20 hover:border-[#556f2d]/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-display font-bold text-3xl text-[#556f2d]">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#eaf2e2] text-[#34481d] group-hover:bg-[#556f2d] group-hover:text-white flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[#181b20] mb-2 group-hover:text-[#556f2d] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[11px] font-bold text-[#556f2d] uppercase tracking-wider">
                  <span>Phase {i + 1}</span>
                  <span className="ml-auto text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          SERVICES DETAIL LIST (Detailed White & Olive Cards)
         ========================================= */}
      <section className="py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            <span>FULL PORTFOLIO</span>
            <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
          </div>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#181b20]">
            Explore Our Comprehensive Services
          </h2>
          <p className="text-sm text-gray-600">
            Tailored creative packages designed for brands, production houses, and independent filmmakers.
          </p>
        </div>

        {SERVICES_DATA.map((service, index) => (
          <ServiceDetailCard key={service.id} service={service} index={index} />
        ))}
      </section>

      {/* =========================================
          EQUIPMENT & GEAR SPECS BAR (Olive & White Theme)
         ========================================= */}
      <section className="py-20 bg-[#f1f6ec] border-y border-[#dce8d2]">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#556f2d]">
              STATE-OF-THE-ART ARSENAL
            </span>
            <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#181b20]">
              Cinema Grade Technology
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              We shoot and finish on the same high-end equipment used by Hollywood and global commercial cinema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: 'RED V-Raptor 8K & ARRI Alexa Mini LF', label: 'Primary Cinema Cameras' },
              { title: 'Cooke Anamorphic /i & Master Primes', label: 'Vintage & Cinema Glass' },
              { title: 'DJI Ronin 2 & Heavy Lift Cinemilled', label: 'Stabilization & Remote Cranes' },
              { title: 'DaVinci Resolve Studio & Dolby Atmos', label: 'Color & Sound Finishing Suite' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#556f2d]/20 shadow-sm space-y-2.5">
                <p className="font-bold text-[#181b20] text-sm leading-snug">{item.title}</p>
                <span className="text-xs text-[#556f2d] font-mono font-bold block bg-[#eef4e8] py-1 px-2.5 rounded-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CREATIVE CTA BANNER
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="rounded-3xl bg-gradient-to-r from-[#203219] via-[#2c4423] to-[#1c2e17] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#556f2d]/40">
          
          <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c5db82]">
              READY TO COMMENCE?
            </span>
            <h3 className="font-serif-display font-bold text-3xl sm:text-4xl text-white">
              Have a Project in Mind? Let's Collaborate.
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Schedule a creative pitch or discuss budget, timeline, and technical execution with our directors.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#c5db82] hover:bg-[#d8eab0] text-[#1c2e17] font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl"
            >
              <span>Book Creative Discovery</span>
              <ArrowRight className="w-4 h-4 text-[#1c2e17]" />
            </Link>
          </div>

          {/* Decorative ambient leaf graphic */}
          <div className="absolute right-0 bottom-0 w-80 h-80 text-white/5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
            </svg>
          </div>

        </div>
      </section>

    </div>
  );
};
