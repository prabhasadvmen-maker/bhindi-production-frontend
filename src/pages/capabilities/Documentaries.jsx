import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Globe, 
  Building2, 
  HeartHandshake, 
  Factory, 
  Mic2,
  ShieldCheck,
  Award
} from 'lucide-react';

export const Documentaries = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Human-Centered Storytelling',
      desc: 'We look beyond corporate jargon to find the human heartbeats—the engineers, ground workers, and visionary founders who truly shape the company.'
    },
    {
      icon: Factory,
      title: 'Industrial & High-Tech Filming',
      desc: 'Specialized plant safety certifications and PPE protocols for filming inside heavy manufacturing plants, semiconductor cleanrooms, and chemical facilities.'
    },
    {
      icon: Mic2,
      title: 'Unscripted Empathy-Driven Interviews',
      desc: 'Comfortable, conversation-led interview environments that draw out genuine reflections, vulnerability, and leadership vision without teleprompter stiffness.'
    },
    {
      icon: Globe,
      title: 'ESG & Global Stakeholder Reports',
      desc: 'Documentaries tailored for global investor summits, annual general meetings (AGMs), sustainability benchmarking, and international media distribution.'
    }
  ];

  const documentarySlate = [
    {
      client: 'AgroTech Horizons India',
      title: 'The Seed & The Soil (24 mins)',
      impact: 'Screened at UN Food Security Summit 2025',
      desc: 'An evocative documentary tracking 12,000 smallholder farmers in Maharashtra transitioning to climate-resilient organic agriculture.',
      image: '/the_journey.jpg',
      tags: ['Agriculture', 'ESG Film', 'Drone Aerials']
    },
    {
      client: 'Apex Clean Energy Global',
      title: 'Harnessing The Thar (18 mins)',
      impact: 'Winner: Best Industrial Film - Mumbai Docs Fest',
      desc: 'Documenting the construction of a 2.4-gigawatt solar-wind hybrid corridor across the Thar Desert, braving 50°C summer heatwaves.',
      image: '/hero-bg.jpg',
      tags: ['Renewable Energy', 'Infrastructure', 'Cinematic B-Roll']
    },
    {
      client: 'Heritage Silks of Kanchipuram',
      title: 'Threads of Gold (15 mins)',
      impact: 'Archived at National Craft Council & Doordarshan',
      desc: 'A sensitive historical retrospective honoring fifth-generation master weavers preserving ancient zari silk weaving techniques against modern fast fashion.',
      image: '/life_in_frames.jpg',
      tags: ['Heritage & Craft', 'Archival 4K', 'Cultural Preservation']
    }
  ];

  const standards = [
    { title: 'Plant Safety Compliant', desc: 'All crew certified for industrial hazard, electrical substations, and cleanroom protocols.' },
    { title: 'Studio-Grade Audio In Heavy Noise', desc: 'Sennheiser MKH416 and DPA lavaliers with active background noise-isolation baffling.' },
    { title: 'Historical Archive Restoration', desc: 'AI-assisted 4K upscaling and scratch cleanup for legacy photographs and vintage videotapes.' },
    { title: 'NDA & Corporate IP Security', desc: 'Encrypted off-site storage and enterprise-grade non-disclosure agreements signed prior to set arrival.' }
  ];

  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* =========================================
          HERO BANNER
         ========================================= */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f2f7ec] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#556f2d]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#556f2d] uppercase mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Capabilities</Link>
            <span>/</span>
            <span className="text-gray-500">Corporate Documentaries</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e6] border border-[#556f2d]/30 text-[#2f421c] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#556f2d]" />
                <span>Impact-Driven Documentary Cinema</span>
              </div>

              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                Corporate Documentaries & <br />
                <span className="text-[#556f2d]">Human Stories</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                The most enduring brands don't just sell products—they stand for a mission. We produce cinematic documentaries, founder journeys, and corporate sustainability films that build immense trust with investors, employees, and communities worldwide.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-[#556f2d]" /> Founder & Legacy Profiles
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#556f2d]" /> Heavy Industry Safety Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Globe className="w-3.5 h-3.5 text-[#556f2d]" /> ESG & Global Impact
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Commission A Documentary</span>
                  <ArrowRight className="w-4 h-4 text-[#c5db82]" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#23351d] bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>Explore Impact Films</span>
                </Link>
              </div>

            </div>

            {/* Right Video / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/10] bg-black group">
                <video
                  src="/video_documentary.mp4"
                  poster="/life_in_frames.jpg"
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
                      Watch Documentary Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Credential Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf4e6] flex items-center justify-center text-[#556f2d]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">Investigative & Narrative</p>
                  <p className="text-xs font-bold text-gray-900">National Film Archive Certified</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          THE DOCUMENTARY METHOD
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
            <span>The Investigative Lens</span>
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
            Documenting Truth With Cinema-Grade Artistry
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We reject boring boardroom presentations. Our documentary directors bring journalistic depth, sensitive research, and stunning visuals to corporate histories.
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
          DOCUMENTARY SHOWCASE
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d] mb-1">
                Completed Documentaries
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
                Stories That Made An Impact
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556f2d] hover:text-[#23351d] uppercase tracking-wider group"
            >
              <span>Explore All Case Films</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {documentarySlate.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#23351d]/90 text-[#c5db82] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase">
                    {item.impact}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#556f2d] block uppercase mb-1">
                      {item.client}
                    </span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-2 py-0.5 rounded bg-[#f4f7ef] text-gray-700 text-[10px] font-mono font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="pt-2 inline-flex items-center justify-between text-xs font-bold text-[#23351d] hover:text-[#556f2d] border-t border-gray-100"
                  >
                    <span>Request Screener Link</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          PRODUCTION ASSURANCES
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
              Safety, Rigor & Compliance
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl text-[#181b20] tracking-tight mt-1">
              Trusted By Fortune 500 & Legacy Houses
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              From secure NDAs to high-hazard industrial permissions, our line producers manage full compliance so your legal and PR teams sleep easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((std, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#fbfaf6] border border-gray-200 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#edf4e6] text-[#556f2d] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#556f2d]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{std.title}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{std.desc}</p>
                </div>
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
            Preserve Your Organization's Legacy
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Tell A Story That Inspires Generations
          </h2>
          <p className="text-[#d8e6cf] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Book a confidential discovery session with our senior documentary directors. We will outline research arcs, filming schedules, and budget allocations.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#23351d] hover:bg-[#edf4e6] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Book Documentary Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#556f2d]" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <span>Our Story & Philosophy</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
