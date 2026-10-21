import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { WORK_PROJECTS } from '../../services/mockData';

export const WorkSection = ({ onSelectProject }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % WORK_PROJECTS.length);
  };

  const activeProject = WORK_PROJECTS[selectedIdx];

  return (
    <section className="bg-[#0b0c0e] text-white py-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#84a956]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-xl">
            <SectionHeader label="OUR WORK" />
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Real Stories. <br />
              <span className="text-[#84a956]">Real Impact.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A glimpse into the worlds we create — for brands, artists, businesses and dreamers.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#84a956] hover:text-[#a0c96e] transition-colors"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cinematic Showcase Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Director Monitor Display (Left - 7 cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden bg-[#16181d] border border-white/10 shadow-2xl aspect-[16/10]">
              
              {/* Monitor Screen Image */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Letterbox effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Camera Monitor Overlay UI (Simulating on-set production monitor) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/80 pointer-events-none">
                <span className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> REC • {activeProject.aspect}
                </span>
                <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  {activeProject.duration} | 24fps
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-[#84a956] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-lg group/play"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Project Details on Monitor */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#84a956]">
                    {activeProject.category} • {activeProject.client}
                  </span>
                  <h4 className="text-white font-syne font-bold text-lg">{activeProject.title}</h4>
                </div>
                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-[#84a956] hover:text-black text-xs font-semibold tracking-wider transition-colors"
                >
                  Watch Reel
                </button>
              </div>

            </div>
          </div>

          {/* Right Thumbnails & Carousel Control (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400">
              FEATURED PRODUCTIONS
            </p>

            {/* Thumbnail Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {WORK_PROJECTS.slice(0, 4).map((project, index) => {
                const isActive = selectedIdx === index;
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedIdx(index)}
                    className={`group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] border transition-all duration-300 ${
                      isActive 
                        ? 'border-[#84a956] ring-2 ring-[#84a956]/40 scale-[1.02]' 
                        : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="text-[9px] font-mono text-[#84a956] block uppercase tracking-wider">
                        {project.category}
                      </span>
                      <p className="text-xs font-bold text-white truncate font-syne">
                        {project.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Arrow Navigation Row */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-gray-500">
                0{selectedIdx + 1} / 0{WORK_PROJECTS.length}
              </span>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#1b2216] border border-[#84a956]/40 hover:bg-[#84a956] hover:text-black text-[#e4f2d5] flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label="Next Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
