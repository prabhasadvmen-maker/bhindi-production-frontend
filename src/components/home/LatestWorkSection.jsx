import { Link } from 'react-router-dom';
import { 
  Play, 
  ArrowRight, 
  Film, 
  Users, 
  Award, 
  Heart 
} from 'lucide-react';

export const LatestWorkSection = ({ onSelectProject }) => {
  const projects = [
    {
      id: 101,
      category: 'Music Video & Dance',
      title: 'Husn Tera Tauba Tauba - Punjab Film City',
      videoUrl: '/From Klickpin.com- 13 Unique wedding hair ideas that make everyday moments look more intentional memorable and beautifully styled for anyone who l.mp4',
    },
    {
      id: 102,
      category: 'Royal Ethnic Campaign',
      title: 'Noor-E-Rivaayat Festive Silk Couture',
      videoUrl: '/From Klickpin.com- From beginner to obsessed Pin these budget-friendly smoothie bowl ideas that bring style function and personality together with.mp4',
    },
    {
      id: 103,
      category: 'Hindi OTT Period Drama',
      title: 'Kala Teeka - Haveli Dialogue & Dolly Shoot',
      videoUrl: '/From Klickpin.com- 41728734041110747-pin-id-41728734041110747.mp4',
    },
    {
      id: 104,
      category: 'National Brand TVC',
      title: 'Melbi Smart Living - Consumer TV Commercial',
      videoUrl: '/From Klickpin.com- 95 Clever Digital Product Ideas-pin-id-622481979781910754.mp4',
    },
  ];

  const stats = [
    {
      icon: Film,
      value: '100+',
      label: 'Projects Completed'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients'
    },
    {
      icon: Award,
      value: '5+',
      label: 'Years of Experience'
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Creative Commitment'
    }
  ];

  return (
    <section className="relative bg-[#fbfaf6] text-[#1c1f24] pt-16 pb-12 overflow-hidden border-b border-gray-200">
      
      {/* Subtle organic leaves watermark in bottom corners */}
      <div className="absolute -bottom-10 -left-10 w-44 h-44 opacity-25 pointer-events-none text-[#556f2d]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
          <path d="M15 95 Q55 60 90 60 Q60 85 15 95 Z" />
        </svg>
      </div>

      <div className="absolute -bottom-10 -right-10 w-44 h-44 opacity-25 pointer-events-none text-[#556f2d] transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
          <path d="M15 95 Q55 60 90 60 Q60 85 15 95 Z" />
        </svg>
      </div>

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-[5%] lg:px-8 relative z-10">
        
        {/* =========================================
            HEADER ROW: Subtitle, Title & Link
           ========================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#556f2d]">
              <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
              <span>FEATURED PROJECTS</span>
              <span className="w-3.5 h-[1.5px] bg-[#556f2d] inline-block" />
            </div>

            <h2 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl text-[#181b20] tracking-tight">
              Our Latest Work
            </h2>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#181b20] hover:text-[#556f2d] tracking-wider transition-colors self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* =========================================
            4 PROJECT CARDS ROW (Larger Cinema Video Cards)
           ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] min-h-[320px] xs:min-h-[360px] sm:min-h-[380px] lg:min-h-[420px] bg-[#15171d] border border-black/10 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Real Video Looping Preview from public folder */}
              <video
                src={project.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Gradient Scrim for bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:via-black/50 transition-colors pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d8ebaa] bg-black/55 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Bottom Info Bar inside Card */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between pointer-events-none z-10">
                
                {/* Left: Circular Play Icon + Text */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  {/* Play Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/95 bg-black/45 group-hover:bg-[#556f2d] group-hover:border-[#556f2d] text-white flex items-center justify-center shrink-0 backdrop-blur-md transition-all duration-300 transform group-hover:scale-110 shadow-lg pointer-events-auto">
                    <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white text-transparent translate-x-0.5" />
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                    <h3 className="font-serif-display font-bold text-sm sm:text-base lg:text-[1.05rem] text-white leading-snug group-hover:text-[#c5db82] transition-colors drop-shadow-md line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-300 block mt-0.5">
                      Watch Reel →
                    </span>
                  </div>
                </div>

                {/* Right Arrow Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 group-hover:border-white/90 bg-black/40 flex items-center justify-center text-white/90 shrink-0 transition-all group-hover:bg-[#556f2d]">
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover:translate-x-0.5" />
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* =========================================
            STATS CREDENTIALS BAR (Bottom Row)
           ========================================= */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center text-left">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            const isLast = idx === stats.length - 1;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3 sm:gap-4 ${!isLast ? 'md:border-r border-gray-200/90 md:pr-4' : ''}`}
              >
                {/* Circular Olive Icon Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#dbe4ce] text-[#34441c] flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
                </div>

                {/* Stat Numbers & Label */}
                <div>
                  <div className="font-bold text-xl xs:text-2xl sm:text-3xl text-[#181b20] leading-none tracking-tight font-serif-display">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
