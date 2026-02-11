import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for hero content
      gsap.fromTo(
        '.hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );

      gsap.fromTo(
        '.hero-badge',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.6, stagger: 0.1 }
      );

      gsap.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(
        '.hero-rating',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1 }
      );

      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const uspBadges = [
    { icon: '🍄', label: 'MOOD BOOSTING' },
    { icon: '⚡', label: 'AWARD WINNING' },
    { icon: '💧', label: 'ALCOHOL FREE' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden pt-[110px]"
    >
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-cream/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 container-wide min-h-[calc(100vh-110px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="hero-title text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-none tracking-tight"
              >
                LAZAROS 
              </h1>
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <p className="hero-subtitle text-xl md:text-2xl text-white/90 font-light max-w-md">
                  The world's first mood-boosting beer. Alcohol-free, hangover-free, full of good vibes.
                </p>
              </div>
            </div>

            {/* USP Badges */}
            <div ref={badgeRef} className="flex flex-wrap gap-3">
              {uspBadges.map((badge, index) => (
                <div
                  key={index}
                  className="hero-badge flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-xs font-medium text-white tracking-wider">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap gap-4">
              <a href="#products" className="btn-primary">
                SHOP NOW
              </a>
              <a href="#discover" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                LEARN MORE
              </a>
            </div>

            {/* Star Rating */}
            <div className="hero-rating flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">4.8/5</span>
              <span className="text-white/70 text-sm">from 410+ reviews</span>
            </div>
          </div>

          {/* Right Content - Product/Testimonial Card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-sm transform hover:scale-105 transition-transform duration-[var(--transition-base)]">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <p className="text-white font-medium">Alex M.</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                "Finally, a non-alcoholic beer that actually tastes amazing! The mood-boosting effects are real - I feel relaxed and social without the hangover."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  C
                </div>
                <div>
                  <p className="text-white text-sm font-medium">lazaros Store</p>
                  <p className="text-white/60 text-xs">Mixed Case</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
};

export default Hero;