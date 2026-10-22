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
          title: 'Bhindi Production Official Showreel',
          url: '/video_showreel.mp4'
        })}
      />

      {/* 2. Services Bar Section (Crafting Stories That Matter) */}
      <ServicesBar 
        onOpenVideo={() => setSelectedVideo({
          title: 'Bhindi Production - Behind The Scenes',
          url: '/video_about.mp4'
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
