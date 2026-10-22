import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Palette, 
  Sun, 
  Monitor, 
  Film, 
  Cpu, 
  Layers,
  Award
} from 'lucide-react';

export const ColorGrading = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('graded');

  const colorCapabilities = [
    {
      icon: Palette,
      title: 'ACES 1.3 Color Management',
      desc: 'Industry-standard Academy Color Encoding System ensuring zero color clipping, consistent camera matching, and future-proof wide color gamut archival.'
    },
    {
      icon: Sun,
      title: 'Dolby Vision & HDR10 Mastering',
      desc: 'Mastered to certified 1,000-nit peak brightness on reference OLED displays, delivering striking specular highlights and deep, inky shadow details.'
    },
    {
      icon: Film,
      title: 'Authentic 35mm Film Emulation',
      desc: 'Bespoke analog film stock modeling replicating Kodak Vision3 500T / 250D, photochemical halation, gate weave, and organic negative grain.'
    },
    {
      icon: Monitor,
      title: 'Global Remote Live Grading',
      desc: 'Collaborate live with our senior colorists from London, LA, or Mumbai in real time with sub-second latency via Streambox and calibrated iPad Pro feeds.'
    }
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Conform & Color Management',
      desc: 'XML/EDL conform from Premiere or Final Cut, RAW sensor debayering, and ACES / DaVinci YRGB Color Managed input transform.'
    },
    {
      step: '02',
      title: 'Balance & Exposure Normalization',
      desc: 'Scene-to-scene matching, skin tone temperature alignment, and highlight recovery using 16-bit float mathematics.'
    },
    {
      step: '03',
      title: 'Creative Look Development (Show LUT)',
      desc: 'Designing the signature visual look: split-toning, film contrast curves, hue density shifts, and custom grain profiles.'
    },
    {
      step: '04',
      title: 'QC & Theatrical / Streaming Deliverables',
      desc: 'Automated gamut violation checks, Dolby Vision XML metadata generation, and ProRes 4444 XQ / DCI-P3 DCP outputs.'
    }
  ];

  const suiteSpecs = [
    { name: 'Sony BVM-HX310 31" 4K HDR', spec: 'Master Reference Monitor (1,000 nits, D65 Calibrated)' },
    { name: 'DaVinci Resolve Advanced Panel', spec: 'Full hardware trackball console for sub-millimeter precision' },
    { name: 'Flanders Scientific DM240', spec: 'Client viewing reference monitor with REC.709 perfection' },
    { name: 'Dual NVIDIA RTX 6000 Ada GPUs', spec: 'Real-time 8K RAW timeline playback with zero proxy lag' },
    { name: '100GbE Optical SAN Storage', spec: 'Blazing fast multi-terabyte uncompressed film workflows' },
    { name: 'D65 Bias Lighting & 18% Grey Suite', spec: 'SMPTE/EBU compliant grading room environment' }
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
            <span className="text-gray-500">In-House DaVinci HDR Color</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4e6] border border-[#556f2d]/30 text-[#2f421c] text-xs font-semibold">
                <Sliders className="w-3.5 h-3.5 text-[#556f2d]" />
                <span>Certified Post-Production Color Suite</span>
              </div>

              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08]">
                In-House DaVinci Resolve <br />
                <span className="text-[#556f2d]">HDR Color Grading Suite</span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Color is the emotional soul of cinema. At Bhindi Production, our state-of-the-art DaVinci Resolve color grading theater offers certified theatrical DCI-P3 DCP, Netflix-approved Dolby Vision HDR, and bespoke film emulation designed by veteran senior colorists.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Sun className="w-3.5 h-3.5 text-[#556f2d]" /> Dolby Vision 1,000 Nits
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Palette className="w-3.5 h-3.5 text-[#556f2d]" /> ACES 1.3 Color Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
                  <Monitor className="w-3.5 h-3.5 text-[#556f2d]" /> Sony BVM Reference OLED
                </span>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Book A Color Session</span>
                  <ArrowRight className="w-4 h-4 text-[#c5db82]" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#23351d] bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                >
                  <span>View Color Showreel</span>
                </Link>
              </div>

            </div>

            {/* Right Video / Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/10] bg-black group">
                <video
                  src="/video_cinematic_story.mp4"
                  poster="/behind_the_lens.jpg"
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
                      Play Color Breakdown Reel
                    </span>
                  </div>
                )}
              </div>

              {/* Monitor Spec Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf4e6] flex items-center justify-center text-[#556f2d]">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-[#556f2d]">Mastered on Sony BVM-HX310</p>
                  <p className="text-xs font-bold text-gray-900">100% DCI-P3 Color Accuracy</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          COLOR ARCHITECTURE
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
            <span>The Science of Cinema Color</span>
            <span className="w-4 h-[1.5px] bg-[#556f2d]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
            Precision Science Meets Artistic Vision
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Color grading is not about slapping on a random preset. It is an intentional mathematical and artistic discipline that shapes the mood, contrast, and depth of every frame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colorCapabilities.map((item, idx) => {
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
          INTERACTIVE COLOR PROCESS / WORKFLOW
         ========================================= */}
      <section className="py-16 sm:py-20 bg-[#f4f7ef] border-y border-gray-200">
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d] mb-1">
              End-To-End Post Workflow
            </p>
            <h2 className="font-bold text-3xl sm:text-4xl text-[#181b20] tracking-tight">
              Our 4-Stage Color Pipeline
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              From raw sensor footage to finished film festival masters, here is our rigorous grading pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, sIdx) => (
              <div key={sIdx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#556f2d] block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-[#edf4e6] rounded-full mt-6 overflow-hidden">
                  <div className="w-1/2 h-full bg-[#556f2d]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SUITE HARDWARE SPECIFICATIONS
         ========================================= */}
      <section className="py-16 sm:py-20 w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556f2d]">
              Hardware & Acoustic Engineering
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl text-[#181b20] tracking-tight mt-1">
              Engineered For Theatrical Standards
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Our suite is constructed to ITU-R BT.709 and DCI mastering standards, complete with calibrated 18% neutral grey environment and zero-color-bias backlights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suiteSpecs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#fbfaf6] border border-gray-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.spec}</p>
                </div>
                <div className="pt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#556f2d]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Calibrated & Active</span>
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
            Give Your Film Its Signature Look
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Schedule A Supervised Color Session
          </h2>
          <p className="text-[#d8e6cf] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Book an in-person session at our Goregaon suite or connect remotely via high-fidelity live stream. Send us your timeline XML and test shots for a complimentary look trial.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#23351d] hover:bg-[#edf4e6] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Book Color Suite / Test Grade</span>
              <ArrowRight className="w-4 h-4 text-[#556f2d]" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <span>All Capabilities</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
