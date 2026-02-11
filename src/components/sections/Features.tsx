import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.features-image',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.features-content',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.feature-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 3.5 8 8 8s8-3.5 8-8c0-4.5-3.5-8-8-8z" />
          <path d="M12 6v4l3 3" />
        </svg>
      ),
      label: 'MOOD BOOSTING',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      label: 'AWARD WINNING',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      label: 'ALCOHOL FREE',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: 'LOW CALORIE',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      ),
      label: 'GLUTEN FREE',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      label: 'NO HANGOVERS',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="discover"
      className="section-padding-lg bg-cream overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="features-image relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=1000&fit=crop"
                alt="Collider beer lifestyle"
                className="w-full h-full object-cover"
              />
              {/* Overlay Box */}
              <div className="absolute bottom-8 left-8 right-8 bg-tan-light backdrop-blur-sm p-6 rounded-xl">
                <p className="text-black font-medium text-lg">
                  "The future of social drinking is here."
                </p>
                <p className="text-black/60 text-sm mt-2">— New Scientist</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="features-content space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
                Why Collider?
              </h2>
              <p className="text-black/70 text-lg leading-relaxed">
                We've reimagined what beer can be. Our unique blend of adaptogens 
                and nootropics delivers a genuine mood boost without the alcohol. 
                It's the social experience you love, with benefits your body will thank you for.
              </p>
            </div>

            {/* Features Grid */}
            <div className="features-grid grid grid-cols-2 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex flex-col items-center text-center p-4 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-black/20 flex items-center justify-center mb-3 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-[var(--transition-base)]">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-medium tracking-wider text-black/80">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="btn-arrow">
                EXPLORE OUR BEERS
              </a>
              <a href="#" className="btn-secondary">
                OUR INGREDIENTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;