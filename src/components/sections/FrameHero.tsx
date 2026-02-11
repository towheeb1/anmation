import { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 227;
const FRAME_PATH = 'src/assets/img/';
const FRAME_EXTENSION = '.webp';

const FrameHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Text slides data
  const textSlides = [
    {
      lines: [
        ['لا', 'نبني', 'مجرد', 'هياكل'],
        ['بل', 'نبني', 'إرثاً', 'يدوم.'],
      ],
    },
    {
      lines: [
        ['كل', 'مشروع', 'ننجزه'],
        ['هو', 'وعد', 'نلتزم', 'به.'],
      ],
    },
    {
      lines: [
        ['نبني', 'بهدف'],
        ['ونقدم', 'بثقة.'],
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [slideOpacities, setSlideOpacities] = useState<number[]>([1, 0, 0]);

  // Generate frame filename
  const getFrameFilename = useCallback((index: number) => {
    const num = (index + 1).toString().padStart(4, '0');
    return FRAME_PATH + num + FRAME_EXTENSION;
  }, []);

  // Draw frame on canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = framesRef.current[frameIndex];
    if (!img || !img.complete) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Resize canvas
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (framesRef.current[currentFrameRef.current]?.complete) {
      drawFrame(currentFrameRef.current);
    }
  }, [drawFrame]);

  // Preload frames
  useEffect(() => {
    const loadFrames = async () => {
      const loadPromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getFrameFilename(i);
          img.onload = () => {
            setLoadedCount((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => {
            console.error('Failed to load frame:', getFrameFilename(i));
            resolve();
          };
          framesRef.current[i] = img;
        });
      });

      // Draw first frame as soon as it's loaded
      framesRef.current[0] = new Image();
      framesRef.current[0].src = getFrameFilename(0);
      framesRef.current[0].onload = () => {
        drawFrame(0);
      };

      await Promise.all(loadPromises);
      setIsLoaded(true);
    };

    loadFrames();

    return () => {
      framesRef.current = [];
    };
  }, [drawFrame, getFrameFilename]);

  // Handle resize
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const sectionHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Calculate frame index
      const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          drawFrame(frameIndex);
        });
      }

      // Update text slides
      const segmentSize = 1 / textSlides.length;
      const newOpacities = textSlides.map((_, index) => {
        const segmentStart = index * segmentSize;
        const segmentEnd = (index + 1) * segmentSize;
        const segmentProgress = (progress - segmentStart) / segmentSize;

        if (progress >= segmentStart && progress < segmentEnd) {
          if (segmentProgress < 0.15) {
            return segmentProgress / 0.15;
          } else if (segmentProgress > 0.75) {
            return 1 - (segmentProgress - 0.75) / 0.25;
          }
          return 1;
        }
        return 0;
      });
      setSlideOpacities(newOpacities);

      // Update active slide
      const newActiveSlide = Math.min(
        Math.floor(progress * textSlides.length),
        textSlides.length - 1
      );
      setActiveSlide(newActiveSlide);

      // Show/hide tooltip
      setShowTooltip(progress < 0.05);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    // Show tooltip after delay
    const tooltipTimeout = setTimeout(() => setShowTooltip(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawFrame]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: '500vh' }}
    >
      {/* Scroll Tooltip */}
      <div
        className={`fixed pointer-events-none z-[100] hidden md:flex items-center gap-2 transition-all duration-500 ${
          showTooltip ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'
        }`}
        style={{ right: '40px', top: '9px' }}
      >
        <div className="bg-[#C1A01E] text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
          مرر للاستكشاف
        </div>
      </div>

      {/* Sticky Container */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
      >
        {/* Canvas for Frame Animation */}
        <canvas
          ref={canvasRef}
          className="absolute w-full h-full z-10"
        />

        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg z-20">
            جاري التحميل... ({loadedCount}/{TOTAL_FRAMES})
          </div>
        )}

        {/* Text Overlay */}
        <div
          dir="rtl"
          className="absolute top-[75%] -translate-y-1/2 w-full z-50 right-0 pr-8 md:pr-30 font-bold text-white"
          style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)' }}
        >
          <div className="relative leading-snug">
            {textSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="absolute inset-0 flex flex-col justify-center transition-opacity duration-300"
                style={{ opacity: slideOpacities[slideIndex] }}
              >
                {slide.lines.map((line, lineIndex) => (
                  <div key={lineIndex}>
                    {line.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="inline-block ml-2 md:ml-4 text-[37px] md:text-[72px] xl:text-[90px] leading-tight md:leading-[86.4px] tracking-tight"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameHero;
