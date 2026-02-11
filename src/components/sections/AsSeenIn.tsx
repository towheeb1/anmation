import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AsSeenIn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.as-seen-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { name: 'NewScientist', text: 'NewScientist' },
    { name: 'Daily Mail', text: 'Daily Mail' },
    { name: 'Financial Times', text: 'FT' },
    { name: 'The Times', text: 'The Times' },
    { name: 'Telegraph', text: 'Telegraph' },
    { name: 'BBC', text: 'BBC' },
    { name: 'Evening Standard', text: 'ES' },
    { name: 'Forbes', text: 'Forbes' },
  ];

  return (
    <section ref={sectionRef} className="bg-pure-black py-8 overflow-hidden">
      <div className="container-wide mb-6">
        <p className="as-seen-title text-white/60 text-xs tracking-[0.2em] uppercase text-center">
          As Seen In
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pure-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pure-black to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex overflow-hidden">
          <div className="marquee flex items-center gap-16">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-white/40 hover:text-white/80 transition-colors duration-[var(--transition-base)] cursor-default"
              >
                <span className="text-lg font-medium tracking-wider whitespace-nowrap">
                  {logo.text}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 text-white/40 hover:text-white/80 transition-colors duration-[var(--transition-base)] cursor-default"
              >
                <span className="text-lg font-medium tracking-wider whitespace-nowrap">
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;