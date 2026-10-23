import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Zap, 
  Target, 
  Layers, 
  Share2,
  Clock,
  Eye
} from 'lucide-react';

export const Commercials = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const commercialHighlights = [
    {
      icon: Target,
      title: 'Consumer-Centric Storytelling',
      desc: 'We merge brand strategy with cinematic aesthetics to craft commercials that trigger genuine emotion and stimulate buying intent.'
    },
    {
      icon: Zap,
      title: 'Broadcast & Social Multi-Format',
      desc: 'Simultaneous 16:9 widescreen capture for TV/theaters and dedicated 9:16 framing for high-converting Instagram Reels and YouTube Shorts.'
    },
    {
      icon: Clock,
      title: 'Agile 7-Day Turnaround',
      desc: 'Accelerated post-production pipeline delivering rough cuts in 48 hours and master deliverables within 7 business days for fast-moving campaigns.'
    },
    {
      icon: Eye,
      title: 'High-End Product Visuals',
      desc: 'Specialized tabletop probe lenses, robotic motion control rigs, and high-speed Phantom 1000fps capture for food, liquids, and luxury packaging.'
    }
  ];

  const caseStudies = [
    {
      brand: 'Volt Motors India',
      campaign: 'The Silent Revolution (45s TVC)',
      metric: '18M+ Views across TV & Digital',
      desc: 'Cinematic commercial highlighting the raw torque and sleek design of high-end electric mobility shot across Ladakh and Mumbai nightscapes.',
      image: '/From Klickpin.com- Dreamy street market scenes with charm and useful ideas on a budget with beautiful world vibes-pin-id-924926842228386635.jpg',
      tags: ['Automotive', 'TV Broadcast', '8K RED V-Raptor']
    },
    {
      brand: 'Veda Organic Skincare',
      campaign: 'Pure Forest Glow (30s D2C Ad)',
      metric: '3.8x ROAS on Meta Ad Campaigns',
      desc: 'Botanical macro cinematography highlighting ayurvedic ingredients with dynamic slow-motion liquid splashes and radiant skin lighting.',
      image: '/img_beauty_hair.jpg',
      tags: ['Beauty & D2C', 'Phantom 1000fps', 'DaVinci HDR']
    },
    {
      brand: 'Nordic Heritage Interiors',
      campaign: 'Spaces That Breathe (60s Brand Film)',
      metric: 'Featured in Architectural Digest Showcase',
      desc: 'Atmospheric natural-light commercial shot in minimal architectural estates celebrating artisanal woodcraft and modern Scandinavian aesthetics.',
      image: '/img_modern_living.jpg',
      tags: ['Interior & Luxury', 'ARRI Alexa LF', 'Natural Light']
    }
  ];

  const deliverableSpecs = [
    { format: 'Broadcast Master', spec: '1080p / 4K ProRes 422 HQ, -24 LKFS Broadcast Audio' },
    { format: 'Digital Vertical (9:16)', spec: '4K H.264 / H.265 Optimized for Meta Ads & YouTube Shorts' },
    { format: 'Cinema Pre-Roll (DCP)', spec: 'DCI compliant 2K/4K Flat & Scope with 5.1 Surround' },
    { format: 'Social Cut-Downs', spec: '6s Bumper, 15s Story, and 30s Feed variations with burnt-in captions' }
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
            <span className="text-gray-500">TVCs & Brand Commercials</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e6] border border-[#556f2d]/30 text-[#2f421c] text-xs font-semibold">
                <Tv className="w-3.5 h-3.5 text-[#556f2d]" />
                <span>High-Impact Commercial Production</span>
              </div>

              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                TVCs & High-Conversion <br />
                <span className="text-[#556f2d]">Brand Commercials</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                In a world of fleeting attention spans, we build commercial narratives that captivate in seconds. From broadcast TV ads to viral social campaigns, our commercials combine big-screen cinematic craft with data-informed performance marketing.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#556f2d]" /> 40M+ Cumulative Views
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Share2 className="w-3.5 h-3.5 text-[#556f2d]" /> Multi-Format Social Mastery
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#556f2d]" /> 7-Day Campaign Delivery
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Request Commercial Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#c5db82]" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#23351d] bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>Watch Commercial Reel</span>
                </Link>
              </div>

            </div>

            {/* Right Video / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/10] bg-black group">
                <video
                  src="/From Klickpin.com- 95 Clever Digital Product Ideas-pin-id-622481979781910754.mp4"
                  poster="/From Klickpin.com- Try this guide to elegant hair care ideas that look high-end but stay practical with practical inspiration you can use right aw.jpg"
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
                      Play Commercial Showreel
                    </span>
                  </div>
                )}
              </div>

              {/* Metric Card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf4e6] flex items-center justify-center text-[#556f2d]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">Performance Driven</p>
                  <p className="text-xs font-bold text-gray-900">Proven 3.8x Average Brand ROAS</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          COMMERCIAL ADVANTAGES
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
            <span>Commercial Production Standard</span>
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
            Designed To Scale Modern Brands
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We understand brand briefs, marketing KPIs, and the importance of rapid media deliveries without sacrificing an ounce of production value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialHighlights.map((item, idx) => {
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
          FEATURED BRAND CAMPAIGNS
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d] mb-1">
                Campaign Case Studies
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
                Commercials That Converted
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556f2d] hover:text-[#23351d] uppercase tracking-wider group"
            >
              <span>Explore Commercial Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.campaign} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#23351d]/90 text-[#c5db82] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase">
                    {item.metric}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#556f2d] block uppercase mb-1">
                      {item.brand}
                    </span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {item.campaign}
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
                    <span>Request Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          DELIVERABLES MATRIX
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
              Broadcast & Omnichannel Specs
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl text-[#181b20] tracking-tight mt-1">
              Multi-Screen Campaign Packaging
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Every commercial project includes a complete master package formatted for all national broadcast TV channels, streaming platforms, and social feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverableSpecs.map((spec, sIdx) => (
              <div key={sIdx} className="p-4 rounded-xl bg-[#fbfaf6] border border-gray-200 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#edf4e6] text-[#556f2d] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  0{sIdx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{spec.format}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{spec.spec}</p>
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
            Ready To Launch Your Next Campaign?
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Make Your Brand Impossible To Ignore
          </h2>
          <p className="text-[#d8e6cf] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Share your brief, timeline, and goals. We will deliver a creative treatment, production breakdown, and quote within 48 hours.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#23351d] hover:bg-[#edf4e6] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Submit Campaign Brief</span>
              <ArrowRight className="w-4 h-4 text-[#556f2d]" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <span>All Production Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
