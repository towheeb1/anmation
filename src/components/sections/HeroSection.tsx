// src/components/HeroSection.tsx
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// استيراد الفيديوهات
// Videos are now in public folder
const backgroundVideo = '/background.mp4';
const roundVideo = '/round.webm';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // === 1. دوران الفيديو حول نفسه (3D rotation) ===
    

    // === 2. ظهور/اختفاء المحتوى عند التمرير ===
    gsap.fromTo(
      [canVideoRef.current?.parentElement, mobileVideoRef.current?.parentElement, textRef.current],
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'center 20%',
          scrub: 0.5,
        }
      }
    );

    gsap.to([canVideoRef.current?.parentElement, mobileVideoRef.current?.parentElement, textRef.current], {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center 20%',
        end: 'bottom top',
        scrub: 0.5,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* خلفية الفيديو */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      {/* طبقة شبه شفافة فوق الخلفية لتحسين قراءة النصوص */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
          {/* فيديو العلبة الدوارة (في اليسار الآن) */}
          <div
            className="w-64 lg:w-80"
            style={{
              transform: 'rotate(-6deg)', // مائل كما طلبت
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
          {/* فيديو العلبة الدوارة */}
<div
  className="w-48 sm:w-64 lg:w-150"
  style={{
    transform: 'rotate(0deg)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    // إزالة الخلفية السوداء باستخدام blend mode
    mixBlendMode: 'screen',
  }}
>
  {/* Desktop: مائل | Mobile: مستقيم */}
  <div
    className="hidden lg:block"
    style={{
      transform: 'rotate(35deg)',
      transformStyle: 'preserve-3d',
    }}
  >
    <video
      ref={canVideoRef}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto"
      style={{
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        // تعزيز إزالة الخلفية السوداء
        filter: 'contrast(1.1) brightness(1.05)',
      }}
    >
      <source src={roundVideo} type="video/webm" />
    </video>
  </div>
  {/* Mobile: مستقيم وبارز */}
  <div className="lg:hidden">
    <video
      ref={mobileVideoRef}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto"
      style={{
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0) scale(1.2)',
        // تعزيز إزالة الخلفية السوداء
        filter: 'contrast(1.1) brightness(1.05)',
      }}
    >
      <source src={roundVideo} type="video/webm" />
    </video>
  </div>
</div>

          </div>

          {/* Text Content (في اليمين الآن) */}
          <div ref={textRef} className="lg:w-1/2 text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Out of This World Beer
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex flex-wrap justify-center lg:justify-end gap-3 mb-6">
                {['Mood Boosting', 'Award-Winning Taste', 'Alcohol-Free', 'Low Calorie', 'Gluten-Free', 'No Hangover'].map((tag, i) => (
                  <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium text-white">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Mood Boosting</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Our proprietary mood-boosting blend of functional mushrooms and active botanicals delivers astonishing calm—without alcohol.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4">
                <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Discover How It Works
                </button>
                <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-10 h-10 border-2 border-white/50 rounded-full flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}