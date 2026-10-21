import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const CtaSection = () => {
  return (
    <section className="bg-[#f7f7f5] text-[#111317] py-20 sm:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl">
            <SectionHeader label="LET'S CREATE SOMETHING EXTRAORDINARY" />
            
            <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-[#111317] tracking-tight leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">
              Let's turn your idea into a powerful visual experience.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#283520] hover:bg-[#344629] text-[#e6f4d9] font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
