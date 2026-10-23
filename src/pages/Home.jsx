import { useState } from 'react';
import { 
  HeroSection, 
  ServicesBar, 
  CompleteProductionSection, 
  LatestWorkSection, 
  TestimonialsSection, 
  CtaSection 
} from '../components/home';
import { VideoModal } from '../components/common/VideoModal';
import { CinematicBanner } from '../components/common/CinematicBanner';

export const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-[#0b0c0e]">
      
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenShowreel={() => setSelectedVideo({
          title: 'Bhindi Production - Official 3D Cinema Showreel',
          url: '/WhatsApp Video 2026-10-20 at 12.14.00 PM.mp4'
        })}
      />

      {/* 2. Services Bar Section (Crafting Stories That Matter) */}
      <ServicesBar 
        onOpenVideo={() => setSelectedVideo({
          title: 'Bhindi Production - Bollywood & OTT Set In Action',
          url: '/From Klickpin.com- 41728734041110747-pin-id-41728734041110747.mp4'
        })}
      />

      {/* 3. Complete Production Solutions Section */}
      <CompleteProductionSection />

      {/* Cinematic Film Strip Banner ("Every frame tells a story.") - Placed above Our Latest Work */}
      <CinematicBanner />

      {/* 4. Our Latest Work Section (Featured Projects & Stats) */}
      <LatestWorkSection
        onSelectProject={(project) => setSelectedVideo({
          title: `${project.title} (${project.category})`,
          url: project.videoUrl
        })}
      />

      {/* 5. What Our Clients Say (Testimonials Section) */}
      <TestimonialsSection />



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
