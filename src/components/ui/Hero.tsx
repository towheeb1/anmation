import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
  overlayOpacity?: number;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink, 
  bgImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070",
  overlayOpacity = 0.85,
  height = "min-h-[70vh]"
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial states set via GSAP to avoid FOUC handled by style={{visibility: 'hidden'}}
    tl.set(heroRef.current, { visibility: 'visible' });

    // 1. Background slow scale in + fade
    tl.fromTo(bgRef.current, 
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5 }
    );

    // 2. Content elements reveal
    if (contentRef.current) {
      const elements = contentRef.current.children;
      tl.fromTo(elements,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15,
          clearProps: 'all' // Clean up transforms after animation
        },
        "-=1.8" // Start while background is still animating
      );
    }
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef}
      className="relative flex items-center pt-24 pb-16 overflow-hidden bg-bg-light"
      style={{ minHeight: height.includes('min-h') ? height.split('[')[1].split(']')[0] : '70vh', visibility: 'hidden' }}
    >
      {/* Background with Overlay */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, ${overlayOpacity}), rgba(255, 255, 255, ${overlayOpacity - 0.2})), url('${bgImage}')`,
          opacity: 0
        }}
      />

      <div className="container relative z-10">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6 leading-relaxed">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-loose max-w-2xl">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="flex flex-wrap gap-4">
              <a href={ctaLink} className="btn btn-primary px-10 py-4 text-lg shadow-lg hover:shadow-primary/20 transition-all">
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-light to-transparent" />
    </section>
  );
};

export default Hero;
