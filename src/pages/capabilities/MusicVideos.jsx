import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Music, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Radio, 
  Flame, 
  Disc, 
  Layers, 
  Video,
  Mic,
  Users
} from 'lucide-react';

export const MusicVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      icon: Disc,
      title: 'Stylized Visual Direction',
      desc: 'We translate the sonic soul of your track into distinctive visual language—from cyberpunk neon aesthetics to vintage nostalgic film moods.'
    },
    {
      icon: Users,
      title: 'Choreography & Dancers Coordination',
      desc: 'Full-service dance crew casting, rehearsals, movement direction, and synchronized high-energy multi-angle coverage.'
    },
    {
      icon: Flame,
      title: 'High-Speed & Steadicam Movement',
      desc: 'Sweeping Steadicam continuous takes, Trinity 360-degree Dutch rolls, and 120fps slow-motion capture for dramatic visual weight.'
    },
    {
      icon: Radio,
      title: 'YouTube & Reel Rollout Kit',
      desc: 'Complete release package: YouTube 4K master, 9:16 vertical teaser cuts, animated lyric video snippets, and high-res cover art.'
    }
  ];

  const musicShowcase = [
    {
      artist: 'Kabir & The Soul Project',
      track: 'Dhoop Ke Parindey (Indie Folk)',
      views: '12M+ YouTube Views',
      desc: 'A dreamscape music video filmed across the misty pine ridges of Shimla featuring atmospheric golden-hour anamorphic lenses.',
      image: '/studio_lighting.jpg',
      tags: ['Indie Folk', 'ARRI Alexa LF', 'Natural Mist Lighting']
    },
    {
      artist: 'Raftaar Gang X Desi Beats',
      track: 'Gully Kings (Urban Hip-Hop)',
      views: '24M+ Streams & Viral Reel Audio',
      desc: 'High-octane nocturnal choreography filmed inside an abandoned Mumbai textile mill with programmable Astera pixel tubes.',
      image: '/behind_the_lens.jpg',
      tags: ['Hip-Hop', 'RED 8K High-Speed', 'Astera Pixel FX']
    },
    {
      artist: 'Meera Sen Collective',
      track: 'Rani Haar (Electro-Sufi)',
      views: 'Featured on Spotify India Editorial',
      desc: 'Sumptuous heritage palace visuals combining traditional kathak choreography with modern electronic soundscapes.',
      image: '/life_in_frames.jpg',
      tags: ['Fusion Classical', 'Panther Jib', 'DaVinci Rich Color']
    }
  ];

  const arsenal = [
    { name: 'ARRI Alexa Mini LF & RED V-Raptor', detail: 'Native High-Speed 4K 120fps & 8K capture' },
    { name: 'Astera Titan & Helios LED Tubes (24 Units)', detail: 'Full DMX pixel-mapped sound-responsive lighting' },
    { name: 'ARRI Trinity & Steadicam Archer 2', detail: 'Fluid dance tracking and continuous movement' },
    { name: 'Aputure 1200d Pro + Spotlight Mounts', detail: 'Hard theatrical beams and gobo projections' },
    { name: 'Kessler Shuttle Dolly & Motion Rig', detail: 'Precision repeatable time-lapse and speed-ramps' },
    { name: 'Wireless Timecode & Audio Slate', detail: 'Sub-frame accurate playback sync on set' }
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
            <span className="text-gray-500">Music Videos & Choreography</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e6] border border-[#556f2d]/30 text-[#2f421c] text-xs font-semibold">
                <Music className="w-3.5 h-3.5 text-[#556f2d]" />
                <span>Cinematic Audiovisual Production</span>
              </div>

              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                Music Videos & <br />
                <span className="text-[#556f2d]">Visual Choreography</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                We craft explosive, emotionally resonant music videos that transform songs into cultural moments. From underground indie anthems to mega-scale Bollywood and Punjabi record label visual productions, we blend cinematic lenses with dynamic kinetic choreography.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-[#556f2d]" /> High-Energy Dance Coverage
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#556f2d]" /> DMX Programmable Lighting
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Radio className="w-3.5 h-3.5 text-[#556f2d]" /> 50M+ Combined Views
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Produce Your Music Video</span>
                  <ArrowRight className="w-4 h-4 text-[#c5db82]" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#23351d] bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>Explore Music Video Reel</span>
                </Link>
              </div>

            </div>

            {/* Right Video / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/10] bg-black group">
                <video
                  src="/video_fashion_capsule.mp4"
                  poster="/studio_lighting.jpg"
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
                      Play Music Showreel
                    </span>
                  </div>
                )}
              </div>

              {/* Artist Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf4e6] flex items-center justify-center text-[#556f2d]">
                  <Disc className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">Record Label Ready</p>
                  <p className="text-xs font-bold text-gray-900">4K Master + Reel Promo Package</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PILLARS OF MUSIC VIDEO PRODUCTION
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
            <span>The Audiovisual Formula</span>
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
            Built For Massive Digital Discovery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            A song alone isn't enough in the streaming era. A magnetic video is the vehicle that drives viral algorithms, fan loyalty, and international booking agents.
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
          FEATURED MUSIC TRACKS
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d] mb-1">
                Recent Audiovisual Releases
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
                Featured Music Productions
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#556f2d] hover:text-[#23351d] uppercase tracking-wider group"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {musicShowcase.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.track} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#23351d]/90 text-[#c5db82] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase">
                    {item.views}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#556f2d] block uppercase mb-1">
                      {item.artist}
                    </span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {item.track}
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
                    <span>Request Treatment Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          TECHNICAL ARSENAL
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
              Music Production Gear
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl text-[#181b20] tracking-tight mt-1">
              Lighting, Rigging & Movement Rig
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Our in-house equipment inventory gives your music video the same glossy production value seen on MTV and international streaming charts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {arsenal.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#fbfaf6] border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
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
            Drop Your Next Single In Style
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Send Us Your Track & Treatment Concept
          </h2>
          <p className="text-[#d8e6cf] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you are an independent recording artist or a major record label A&R lead, let's create a music video that explodes on release day.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#23351d] hover:bg-[#edf4e6] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Submit Track For Video Pitch</span>
              <ArrowRight className="w-4 h-4 text-[#556f2d]" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <span>Browse All Work</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
