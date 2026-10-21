import { Play, ArrowRight } from 'lucide-react';

export const ProjectCard = ({ project, onPlay }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#556f2d]/20 hover:border-[#556f2d]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* Thumbnail Aspect Ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:via-black/35 transition-colors pointer-events-none" />

        {/* Play Icon Trigger */}
        <button
          onClick={() => onPlay(project)}
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
          aria-label={`Play ${project.title}`}
        >
          <div className="w-13 h-13 rounded-full bg-[#23351d]/90 hover:bg-[#556f2d] border border-white/80 text-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm">
            <Play className="w-5 h-5 fill-white text-transparent translate-x-0.5" />
          </div>
        </button>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
          <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-white font-semibold">
            {project.category}
          </span>
          <span className="bg-[#556f2d] text-white px-2 py-0.5 rounded font-bold">
            {project.year}
          </span>
        </div>

        {/* Technical format badge */}
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-gray-300">
          {project.aspect} • {project.duration}
        </div>
      </div>

      {/* Description Content (White background) */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#556f2d] font-bold block">
            Client: {project.client}
          </span>
          <h3 className="font-serif-display font-bold text-lg text-[#181b20] group-hover:text-[#556f2d] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-600 text-xs mt-1 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <button
          onClick={() => onPlay(project)}
          className="pt-2 text-xs font-bold text-[#556f2d] hover:text-[#23351d] flex items-center gap-1.5 transition-colors"
        >
          <span>Watch Full Video</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
