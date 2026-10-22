import React from 'react';

/**
 * Single repeating track of authentic 35mm film sprocket perforations.
 * Uses 90 identical holes so Track 1 + Track 2 spans 4,000px+ across wide monitors.
 */
const SprocketTrack = () => (
  <div className="flex items-center shrink-0">
    {Array.from({ length: 90 }).map((_, i) => (
      <div 
        key={i} 
        className="w-3 sm:w-3.5 h-3.5 sm:h-4 rounded-[1.5px] bg-[#46563e] mx-1 sm:mx-1.5 shrink-0 shadow-xs"
      />
    ))}
  </div>
);

/**
 * CinematicBanner Component
 * 
 * - Top Film Sprocket Strip: Moves smoothly from Right to Left (Continuous Infinite Marquee)
 * - Center Banner: 100% Full Width (Zero side black bars) displaying "/every_frame_tells_a_story.png"
 * - Bottom Film Sprocket Strip: Moves smoothly from Left to Right (Continuous Infinite Marquee in opposite direction)
 */
export const CinematicBanner = () => {
  return (
    <section 
      className="relative w-full overflow-hidden select-none bg-[#070e06] border-y border-[#182615]"
      aria-label="Every frame tells a story - Animated Cinematic Film Strip Banner"
    >
      {/* =========================================================
          TOP FILM SPROCKETS: Animated RIGHT TO LEFT
         ========================================================= */}
      <div className="w-full h-5 sm:h-6 bg-[#0d160b] border-b border-[#1c2917] overflow-hidden flex items-center">
        <div className="flex w-max animate-sprocket-left">
          <SprocketTrack />
          <SprocketTrack />
        </div>
      </div>

      {/* =========================================================
          CENTER CINEMATIC PHOTO: 100% FULL WIDTH (Balanced Compact Height)
         ========================================================= */}
      <div className="relative w-full bg-[#050904] flex items-center justify-center overflow-hidden">
        <img 
          src="/every_frame_tells_a_story.png" 
          alt="Every frame tells a story - Bhindi Production" 
          className="w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover object-[50%_25%] block"
        />
      </div>

      {/* =========================================================
          BOTTOM FILM SPROCKETS: Animated LEFT TO RIGHT
         ========================================================= */}
      <div className="w-full h-5 sm:h-6 bg-[#0d160b] border-t border-[#1c2917] overflow-hidden flex items-center">
        <div className="flex w-max animate-sprocket-right">
          <SprocketTrack />
          <SprocketTrack />
        </div>
      </div>
    </section>
  );
};
