import { useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import FrameHero from './FrameHero';

const HeroWithTransition = () => {
  const [showFrameHero, setShowFrameHero] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) {
          setShowFrameHero(true);
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
      
      {/* Smooth transition spacer */}
      <div className="relative h-32 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
      
      {/* FrameHero with entrance animation */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          showFrameHero 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <FrameHero />
      </div>
    </>
  );
};

export default HeroWithTransition;
