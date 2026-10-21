import { useState } from 'react';
import { WORK_PROJECTS } from '../services/mockData';
import { ProjectCard } from '../components/work/ProjectCard';
import { VideoModal } from '../components/common/VideoModal';

export const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Commercials', 'Film Production', 'Corporate Films'];

  const filteredProjects = activeCategory === 'All'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#fbfaf6] text-[#1c1f24] min-h-screen">
      
      {/* =========================================
          CREATIVE WORK HEADER BANNER (Olive & White Theme - Centered)
         ========================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#f4f7ef] via-[#fafcf6] to-[#fbfaf6] border-b border-gray-200 overflow-hidden">
        
        {/* Organic leaves artistic backdrop design (Matching Services card background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full pointer-events-none flex items-center justify-between opacity-45 sm:opacity-55">
          <div className="relative w-52 h-64 -ml-12">
            <div className="absolute -top-6 -left-4 w-44 h-56 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[-12deg]" />
            <div className="absolute -bottom-8 -right-4 w-52 h-52 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[20deg] shadow-sm" />
            <div className="absolute -left-6 top-1/4 w-32 h-48 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[-40deg]" />
          </div>
          <div className="relative w-52 h-64 -mr-12 hidden sm:block">
            <div className="absolute -top-6 -right-4 w-44 h-56 bg-[#dbe6cf] rounded-[45%_55%_70%_30%/30%_60%_40%_70%] transform rotate-[12deg]" />
            <div className="absolute -bottom-8 -left-4 w-52 h-52 bg-[#6b8543] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] transform rotate-[-20deg] shadow-sm" />
            <div className="absolute -right-6 top-1/4 w-32 h-48 bg-[#465a29] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[40deg]" />
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
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1df] border border-[#556f2d]/25 text-[#304419] text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#556f2d] animate-pulse" />
              <span>SELECTED WORK • FEATURED PORTFOLIO</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#181b20] tracking-tight leading-[1.08] text-center">
              Real Stories. <br />
              <span className="text-[#556f2d]">Real Impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-center mx-auto">
              Every frame is composed with intention. Browse our selected work across commercials, narrative films, and boundary-pushing visual campaigns shot on location.
            </p>

            {/* Category Filter Pills (Olive & White theme) */}
            <div className="pt-2 flex flex-col items-center">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2 sm:mb-3 text-center">
                Filter by Category:
              </span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#23351d] text-white shadow-md transform scale-105'
                        : 'bg-white hover:bg-[#eef4e8] text-gray-700 border border-gray-300 hover:border-[#556f2d]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          PROJECTS GRID
         ========================================= */}
      <section className="py-14 sm:py-20 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPlay={(p) => setSelectedVideo({ title: `${p.title} (${p.category})`, url: p.videoUrl })}
            />
          ))}
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={!!selectedVideo}
        title={selectedVideo?.title}
        videoUrl={selectedVideo?.url}
        onClose={() => setSelectedVideo(null)}
      />

    </div>
  );
};
