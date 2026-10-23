import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, 
  Clapperboard, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Camera, 
  Layers, 
  Award, 
  Compass, 
  Volume2, 
  Sliders 
} from 'lucide-react';

export const FeatureCinema = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: 'Script Development & Packaging',
      desc: 'Writers room incubation, narrative pacing, screenplay doctoring, and pitch bible creation targeted for Netflix, Prime Video, and theatrical producers.'
    },
    {
      icon: Camera,
      title: 'Cinematography & 8K Capture',
      desc: 'Native 8K large-format capture on ARRI Alexa 35 and RED V-Raptor paired with vintage anamorphic glass for that timeless silver-screen grain and fall-off.'
    },
    {
      icon: Layers,
      title: 'Pan-India Line Production',
      desc: 'Full logistics management, union crew clearances, remote location camps in Ladakh, heritage palace permissions in Rajasthan, and studio soundstages in Mumbai.'
    },
    {
      icon: Volume2,
      title: 'Dolby Atmos & DCP Mastering',
      desc: 'End-to-end post workflow: synchronized foley, original orchestral score recording, DaVinci HDR color grade, and certified theatrical DCI-P3 packaging.'
    }
  ];

  const cinemaSlate = [
    {
      title: 'The Whispering River',
      type: 'Independent Feature Drama (118 mins)',
      status: 'Festival Circuit & Theatrical Release',
      awards: 'Official Selection - MAMI 2025, Busan Asian Film Fund',
      synopsis: 'A lyrical, visually transcendent journey through the hidden valleys of Meghalaya, tracing three generations bound by forgotten folklore.',
      image: '/pinterestyalia_ssspin.io_1792747351.jpg',
      specs: 'Shot on ARRI Alexa Mini LF + Cooke Anamorphic /i'
    },
    {
      title: 'Midnight in Old Delhi',
      type: 'Crime Noir Thriller (104 mins)',
      status: 'Streaming Original',
      awards: 'Best Cinematography - Indian Independent Film Awards',
      synopsis: 'High-contrast nocturnal cinema weaving through the claustrophobic alleys of Chandni Chowk as a retired photojournalist unearths an ancient secret.',
      image: '/a4usxhh_ssspin.io_1792747382.jpg',
      specs: 'Shot on RED V-Raptor 8K VV + Master Primes'
    },
    {
      title: 'Monsoon Diary',
      type: 'Coming-of-Age Anthology',
      status: 'Post-Production',
      awards: 'Selected for National Film Co-Production Market',
      synopsis: 'Four interconnected stories unfolding across Mumbai, Kochi, Varanasi, and Kolkata during the first 48 hours of the Southwest Monsoon.',
      image: '/From Klickpin.com- Steal these fresh pet-friendly home tips that turn ordinary ideas into scroll-stopping inspiration for a stylish result that st.jpg',
      specs: 'Mastered in Dolby Vision HDR & Dolby Atmos'
    }
  ];

  const gearInventory = [
    { name: 'ARRI Alexa 35 & Mini LF', category: 'Camera Package' },
    { name: 'RED V-Raptor 8K VV', category: 'High-Speed / Large Format' },
    { name: 'Cooke Anamorphic /i Full Frame Plus', category: 'Optics' },
    { name: 'ARRI Master Primes (14mm to 135mm)', category: 'Optics' },
    { name: 'DJI Ronin 2 + Master Wheels', category: 'Gimbal / Motion' },
    { name: 'Panther Classic Plus Dolly + Jib 12ft', category: 'Grip & Movement' },
    { name: 'Aputure Electro Storm 2600B & ARRI SkyPanel X', category: 'Lighting' },
    { name: 'Sound Devices 888 + Lectrosonics Wireless', category: 'Audio Package' }
  ];

  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* =========================================
          HERO BANNER
         ========================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f2f7ec] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#556f2d]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#556f2d] uppercase mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Capabilities</Link>
            <span>/</span>
            <span className="text-gray-500">Feature & Indie Cinema</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e6] border border-[#556f2d]/30 text-[#2f421c] text-xs font-semibold">
                <Film className="w-3.5 h-3.5 text-[#556f2d]" />
                <span>Script-To-Screen Silver Screen Production</span>
              </div>

              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                Feature Films & <br />
                <span className="text-[#556f2d]">Independent Cinema</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                We produce narrative cinema that cuts through noise. From high-concept independent features to theatrical co-productions, Bhindi Production handles every stage of the cinematic journey with uncompromised artistic integrity and technical mastery.
              </p>

              {/* Cinema Highlights Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Clapperboard className="w-3.5 h-3.5 text-[#556f2d]" /> 8K Large Format
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#556f2d]" /> Festival Packaging
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Sliders className="w-3.5 h-3.5 text-[#556f2d]" /> Dolby Atmos 4K DCP
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Pitch Your Screenplay</span>
                  <ArrowRight className="w-4 h-4 text-[#c5db82]" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#23351d] bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>View Film Reel</span>
                </Link>
              </div>

            </div>

            {/* Right Video / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/10] bg-black group">
                <video
                  src="/From Klickpin.com- 41728734041110747-pin-id-41728734041110747.mp4"
                  poster="/pinterestyalia_ssspin.io_1792747351.jpg"
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  autoPlay={isPlaying}
                  loop
                  playsInline
                />

                {!isPlaying && (
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 bg-black/40 hover:bg-black/30 flex flex-col items-center justify-center cursor-pointer transition-colors p-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#556f2d] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest mt-3 drop-shadow-md">
                      Play Cinema Showreel
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf4e6] flex items-center justify-center text-[#556f2d]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">Pan-India Co-Production</p>
                  <p className="text-xs font-bold text-gray-900">MAMI & IFFI Nominated Slate</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PILLARS OF CINEMA PRODUCTION
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
            <span>The Cinema Architecture</span>
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
            How We Bring Feature Stories To Life
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Every feature film requires a dedicated army of creatives, technicians, and logistical strategists. Here is how we ensure your film is made on schedule and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#edf4e6] text-[#556f2d] flex items-center justify-center mb-5 group-hover:bg-[#23351d] group-hover:text-[#c5db82] transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================
          FEATURED CINEMA SLATE
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d] mb-1">
                Recent Theatrical & OTT Work
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
                Our Narrative Film Slate
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556f2d] hover:text-[#23351d] uppercase tracking-wider group"
            >
              <span>Explore All Films</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cinemaSlate.map((film, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img 
                    src={film.image} 
                    alt={film.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#23351d]/90 text-[#c5db82] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase">
                    {film.status}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#556f2d] block uppercase mb-1">
                      {film.type}
                    </span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {film.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {film.synopsis}
                    </p>
                    <div className="p-2.5 rounded-lg bg-[#fbfaf6] border border-gray-200 text-[11px] font-medium text-gray-700 space-y-1">
                      <p><span className="font-bold text-gray-900">Accolades:</span> {film.awards}</p>
                      <p><span className="font-bold text-gray-900">Format:</span> {film.specs}</p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="pt-2 inline-flex items-center justify-between text-xs font-bold text-[#23351d] hover:text-[#556f2d] border-t border-gray-100"
                  >
                    <span>Request Screener / Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          TECHNICAL GEAR & PRODUCTION RIGS
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#556f2d]">
              <span>In-House Cinema Fleet</span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
              Top-Tier Cinema Cameras & Certified Glass
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We own and maintain certified cine equipment, reducing reliance on third-party rentals and eliminating equipment breakdowns during remote shoots.
            </p>
            <div className="p-4 rounded-xl bg-[#edf4e6] border border-[#556f2d]/30 text-[#24361e] text-xs font-medium space-y-1.5">
              <p className="font-bold">✔ Zero Rental Middlemen Delays</p>
              <p className="font-bold">✔ Fully Insured On-Location Equipment Operations</p>
              <p className="font-bold">✔ Backup Camera Bodies on Every Principal Shoot</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {gearInventory.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">
                    {item.category}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">
                    {item.name}
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#556f2d] shrink-0" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          CALL TO ACTION
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#23351d] text-white">
        <div className="w-full max-w-4xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#c5db82] block">
            Ready For Principal Photography?
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Bring Your Vision To The Silver Screen
          </h2>
          <p className="text-[#d8e6cf] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you have a completed draft, are packaging an OTT series, or need a co-production partner in India, our production leads are ready to collaborate.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#23351d] hover:bg-[#edf4e6] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Schedule Production Call</span>
              <ArrowRight className="w-4 h-4 text-[#556f2d]" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <span>Meet The Directors</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
