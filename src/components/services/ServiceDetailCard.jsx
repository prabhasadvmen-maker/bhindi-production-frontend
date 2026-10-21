import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceDetailCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      id={service.id} 
      className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-[#556f2d]/20 hover:border-[#556f2d]/60 transition-all duration-300 shadow-md hover:shadow-xl scroll-mt-24"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Info (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf4e6] text-[#3a4e20] text-xs font-mono font-bold">
            <span>SERVICE 0{index + 1}</span>
          </div>

          <h3 className="font-serif-display font-bold text-2xl xs:text-3xl sm:text-4xl text-[#181b20]">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
            {service.fullDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#556f2d] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#23351d] hover:bg-[#344b2c] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c5db82]" />
            </Link>
            <span className="text-xs font-mono font-semibold text-[#556f2d] bg-[#f2f7ec] px-3 py-1.5 rounded-lg border border-[#d6e5c8] text-center">
              {service.stats}
            </span>
          </div>
        </div>

        {/* Feature Visual Highlight (5 cols) */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f0f4ec] border border-[#556f2d]/20 shadow-md">
          <img
            src={
              index === 0 ? '/hero-bg.jpg' :
              index === 1 ? '/behind_the_lens.jpg' :
              index === 2 ? '/studio_lighting.jpg' :
              index === 3 ? '/clapperboard.jpg' :
              index === 4 ? 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80' :
              'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
            }
            alt={service.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/95 drop-shadow-sm font-semibold">
            <span>Certified 8K RED & ARRI Workflow</span>
            <span className="bg-[#556f2d] text-white px-2 py-0.5 rounded text-[10px]">Active</span>
          </div>
        </div>

      </div>
    </div>
  );
};
