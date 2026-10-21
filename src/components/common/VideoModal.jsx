import { X } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#111317] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
          <h3 className="text-white font-syne font-semibold text-sm sm:text-base md:text-lg line-clamp-1">{title || 'Bhindi Productions Showreel'}</h3>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-road-in-the-forest-41551-large.mp4'}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#16191f] flex flex-col sm:flex-row gap-1 sm:gap-0 items-start sm:items-center justify-between text-[11px] sm:text-xs text-gray-400">
          <span>Captured in 8K Raw • Anamorphic Format</span>
          <span className="text-[#84a956] font-semibold">Bhindi Productions Reel 2025</span>
        </div>
      </div>
    </div>
  );
};
