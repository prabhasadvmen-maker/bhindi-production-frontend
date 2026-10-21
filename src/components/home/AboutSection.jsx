import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_STATS } from '../../services/mockData';

export const AboutSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0c0e] text-white overflow-hidden">
      
      {/* Background Cinematic Mountain Sunset Silhouette */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`,
          filter: 'brightness(0.32) contrast(1.2)',
        }}
      />

      {/* Atmospheric dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent to-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative & Stats (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header */}
            <SectionHeader label="ABOUT BHINDI PRODUCTIONS" />

            {/* Headline */}
            <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              More Than Production. <br />
              <span className="text-[#84a956]">A Creative Partner.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              We combine creativity, technology and storytelling to bring ideas to life across platforms. From indie creators to multinational enterprises, we provide the vision, crew, and technical prowess to make every visual count.
            </p>

            {/* 4 Stats Grid matching the reference image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
              {COMPANY_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-syne font-black text-3xl sm:text-4xl text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Our Story Button matching the reference image */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#84a956] hover:bg-[#84a956]/15 text-white text-xs font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Our Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#84a956]" />
              </Link>
            </div>

          </div>

          {/* Right Script Handwriting Overlay ("Creating Real Stories") */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right relative">
            <div className="relative inline-block select-none transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <span className="font-script text-5xl sm:text-7xl lg:text-8xl text-white/90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] block">
                Creating <br />
                Real Stories
              </span>
              
              {/* Hand-drawn Green underline stroke */}
              <svg 
                className="w-48 sm:w-64 h-6 text-[#84a956] mt-1 ml-auto" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 14C50 4 150 18 195 8" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
