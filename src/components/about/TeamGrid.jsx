import { Clapperboard, Camera, Sliders, Award } from 'lucide-react';
import { TEAM_MEMBERS } from '../../services/mockData';

export const TeamGrid = () => {
  const teamMeta = [
    {
      initials: 'KB',
      icon: Clapperboard,
      specialty: 'Directorial Vision & Line Production',
      experience: '12+ Years Experience'
    },
    {
      initials: 'AS',
      icon: Camera,
      specialty: 'Anamorphic Lighting & 8K Capture',
      experience: '8+ Years Cinematography'
    },
    {
      initials: 'RV',
      icon: Sliders,
      specialty: 'DaVinci HDR & Dolby Sound Mastering',
      experience: '10+ Years Post Finishing'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TEAM_MEMBERS.map((member, index) => {
        const meta = teamMeta[index] || teamMeta[0];
        const IconComp = meta.icon;

        return (
          <div 
            key={index} 
            className="group rounded-3xl overflow-hidden bg-white border border-[#556f2d]/20 hover:border-[#556f2d]/60 shadow-md hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between relative transform hover:-translate-y-1.5"
          >
            {/* Top Emblem & Department Badge */}
            <div>
              <div className="flex items-center justify-between mb-8">
                {/* Monogram Seal */}
                <div className="w-16 h-16 rounded-2xl bg-[#23351d] text-[#c5db82] flex items-center justify-center font-serif-display font-bold text-2xl shadow-md border border-[#c5db82]/30 group-hover:scale-105 transition-transform">
                  {meta.initials}
                </div>

                {/* Cinema Department Icon Badge */}
                <div className="w-11 h-11 rounded-xl bg-[#edf4e6] text-[#304419] flex items-center justify-center group-hover:bg-[#556f2d] group-hover:text-white transition-colors shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#556f2d] block">
                  {meta.specialty}
                </span>
                <h4 className="font-serif-display font-bold text-2xl text-[#181b20] group-hover:text-[#556f2d] transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-gray-500">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* Bottom Production Credential Badge */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#304419] font-bold">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#556f2d]" />
                {meta.experience}
              </span>
              <span className="text-[#556f2d] text-base group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>

            {/* Subtle corner watermark */}
            <div className="absolute top-0 right-0 w-24 h-24 text-[#556f2d]/5 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 90 Q40 50 80 40 Q50 70 10 90 Z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
