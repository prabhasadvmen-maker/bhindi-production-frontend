import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Bhindi Production delivered beyond our expectations. Their creativity, professionalism and attention to detail made our brand story truly special.",
      author: "Rohan Mehta",
      role: "Brand Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "Working with the Bhindi team was seamless and inspiring. They captured the soul of our campaign with festival-grade cinematography that elevated our market presence.",
      author: "Ananya Sen",
      role: "Creative Director, Aura",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "From initial storyboards to final DaVinci 8K color mastering, their technical prowess and passion for authentic storytelling are second to none in the industry.",
      author: "Vikram Malhotra",
      role: "Executive Producer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0b160b] via-[#122411] to-[#0c180b] text-white overflow-hidden border-b border-white/5">
      
      {/* Background Soft Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3b5424]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-[5%] lg:px-[4%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* =========================================
              LEFT COLUMN: Header, Info & Left Visual (5 cols)
             ========================================= */}
          <div className="lg:col-span-5 relative space-y-4 sm:space-y-6">
            
            {/* Background Studio Camera & Softbox Image */}
            <div className="absolute -left-12 -top-12 w-48 h-48 sm:w-80 sm:h-80 rounded-full overflow-hidden opacity-25 pointer-events-none filter blur-[1px]">
              <img
                src="/studio_lighting.jpg"
                alt="Studio camera with softbox lighting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-3 sm:space-y-4">
              {/* Tagline */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c5db82]">
                <span className="w-3.5 h-[1.5px] bg-[#c5db82] inline-block" />
                <span>TESTIMONIALS</span>
                <span className="w-3.5 h-[1.5px] bg-[#c5db82] inline-block" />
              </div>

              {/* Headline */}
              <h2 className="font-serif-display font-bold text-3xl xs:text-4xl sm:text-5xl text-white tracking-tight leading-[1.12]">
                What Our Clients Say
              </h2>

              {/* Subtitle */}
              <p className="text-[#b7c7b0] text-sm sm:text-[0.95rem] leading-relaxed max-w-sm">
                Trusted by brands, creators and businesses who believe in the power of great storytelling.
              </p>

              {/* Carousel Controls on Left */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-[#c5db82]/40 hover:border-[#c5db82] hover:bg-[#c5db82]/15 text-[#c5db82] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* 3 Pagination Dots */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIndex === i 
                          ? 'w-5 bg-[#c5db82]' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-[#c5db82]/40 hover:border-[#c5db82] hover:bg-[#c5db82]/15 text-[#c5db82] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* =========================================
              CENTER COLUMN: Testimonial Glass Card (4 cols)
             ========================================= */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#172c15]/50 border border-[#c5db82]/25 backdrop-blur-md p-5 sm:p-7 space-y-4 sm:space-y-6 shadow-2xl transition-all duration-500">
              
              {/* Double Quote Icon in Vibrant Lime */}
              <div className="text-[#c5db82] flex items-center gap-1">
                <span className="font-serif text-3xl sm:text-5xl font-black leading-none select-none">
                  ““
                </span>
              </div>

              {/* Quote text */}
              <p className="text-gray-200 text-xs sm:text-sm md:text-[0.95rem] leading-relaxed font-normal min-h-[64px]">
                "{current.quote}"
              </p>

              {/* Author Info Row & Carousel Controls */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#23351d] border border-[#c5db82]/40 text-[#c5db82] flex items-center justify-center font-serif-display font-bold text-xs sm:text-sm shrink-0">
                    {current.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">{current.author}</h4>
                    <span className="text-[11px] sm:text-xs text-[#a3b894] font-medium block">{current.role}</span>
                  </div>
                </div>

                {/* Micro Carousel Nav inside card */}
                <div className="flex items-center gap-1.5 text-[#c5db82]">
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 rounded-full border border-white/20 hover:border-[#c5db82] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5db82]" />
                  <button
                    onClick={handleNext}
                    className="w-7 h-7 rounded-full border border-white/20 hover:border-[#c5db82] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: "Real Stories Real People" Script (3 cols)
             ========================================= */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 sm:pt-6 lg:pt-0">
            <div className="relative inline-block select-none transform rotate-[-6deg] sm:rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
              <span className="font-script text-3xl xs:text-4xl sm:text-5xl lg:text-[3.2rem] text-white font-bold tracking-wide leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] block">
                Real <br className="hidden xs:inline" />
                Stories <br className="hidden xs:inline" />
                Real People
              </span>

              {/* Hand-drawn white chalk brush underline */}
              <svg 
                className="w-32 sm:w-40 h-6 text-white/95 mt-1 ml-auto" 

                viewBox="0 0 160 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 14 C45 3, 115 17, 156 6" 
                  stroke="currentColor" 
                  strokeWidth="3.2" 
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
