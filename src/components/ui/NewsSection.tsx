import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: '“سند” يقدم 80 منصة تعليمية للمستفيدات "أيامي"',
    date: "مايو 16, 2022",
    image:
      "https://thumbs.dreamstime.com/b/breaking-news-media-announcement-social-concept-78546305.jpg?w=768",
  },
  {
    id: 2,
    title:
      "برنامج وثائقي تلفزيوني عن المرحلة الثانية لمشروع الأمير محمد بن سلمان لتطوير المساجد التاريخية",
    date: "مارس 22, 2023",
    image:
      "https://thumbs.dreamstime.com/b/news-newspaper-text-7582783.jpg?w=768",
  },
  {
    id: 3,
    title:
      'مبادرة "العيش باستقلالية" توفّر تقنيات مبتكرة لمساندة كبار السن وذوي الإعاقات المختلفة',
    date: "مارس 31, 2023",
    image:
      "https://thumbs.dreamstime.com/b/tv-broadcast-news-studio-many-computer-screens-control-panels-live-air-broadcast-82907395.jpg?w=768",
  },
  {
    id: 4,
    title: 'مبادرة "سند الأيام" لتعزيز التكافل الاجتماعي',
    date: "مارس 15, 2023",
    image:
      "https://thumbs.dreamstime.com/b/financial-news-online-business-laptop-coffee-stationery-51466231.jpg?w=768",
  },{
    id: 5,
    title: 'مبادرة "سند الأيام" لتعزيز التكافل الاجتماعي',
    date: "مارس 15, 2023",
    image:
      "https://thumbs.dreamstime.com/b/computer-programming-using-laptop-internet-technologies-49641566.jpg?w=768",
  },{
    id: 6,
    title: 'مبادرة "سند الأيام" لتعزيز التكافل الاجتماعي',
    date: "مارس 15, 2023",
    image:
      "https://thumbs.dreamstime.com/b/modern-computer-programming-code-screen-showing-random-scripts-113805394.jpg?w=768",
  },{
    id: 7,
    title: 'مبادرة "سند الأيام" لتعزيز التكافل الاجتماعي',
    date: "مارس 15, 2023",
    image:
      "https://thumbs.dreamstime.com/b/business-news-tablet-pc-20884823.jpg?w=768",
  },
];

function detectRtlScrollSign(el: HTMLDivElement) {
  // بعض المتصفحات RTL تكون scrollLeft سالبة، وبعضها موجبة
  const prev = el.scrollLeft;
  el.scrollLeft = 1;
  const sign = el.scrollLeft === 1 ? 1 : -1;
  el.scrollLeft = prev;
  return sign;
}

const NewsSection: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const intervalRef = useRef<number | null>(null);
  const rtlSignRef = useRef<number>(-1); // سنحددها وقت التشغيل
  const isPausedRef = useRef<boolean>(false);

  // ✅ أبعاد الكرت (تظهر 3 كروت مثل الصورة الأخيرة)
  const CARD_W = 360; // عرض الكرت
  const GAP = 32; // gap-8
  const STEP = CARD_W + GAP;

  const items = useMemo(() => newsData, []);

  // Scroll reveal (GSAP) + ScrollTrigger sync (Auto play start/stop)
  useGSAP(
    () => {
      if (!rootRef.current) return;

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );

      // ✅ Sync autoplay with ScrollTrigger
      const st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => startAuto(),
        onEnterBack: () => startAuto(),
        onLeave: () => stopAuto(),
        onLeaveBack: () => stopAuto(),
      });

      return () => {
        st.kill();
        stopAuto();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    { scope: rootRef }
  );

  // RTL sign detection + hover/touch pause listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    rtlSignRef.current = detectRtlScrollSign(slider);

    const pause = () => {
      isPausedRef.current = true;
      stopAuto();
    };
    const resume = () => {
      isPausedRef.current = false;
      startAuto();
    };

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);
    slider.addEventListener("touchstart", pause, { passive: true });
    slider.addEventListener("touchend", resume);

    return () => {
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
      slider.removeEventListener("touchstart", pause);
      slider.removeEventListener("touchend", resume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAuto = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    // في RTL عادة نحتاج نعكس الإشارة حسب المتصفح
    const delta = STEP * rtlSignRef.current * -1;

    // لو وصلنا للنهاية (تقريبًا) نرجع للبداية
    const max = slider.scrollWidth - slider.clientWidth;
    const cur = Math.abs(slider.scrollLeft);

    if (cur >= max - 8) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    slider.scrollBy({ left: delta, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const delta = STEP * rtlSignRef.current; // عكس next
    slider.scrollBy({ left: delta, behavior: "smooth" });
  };

  const startAuto = () => {
    // لا تشغلها إذا المستخدم موقّفها (hover/touch) أو شغالة بالفعل
    if (isPausedRef.current) return;
    if (intervalRef.current) return;

    intervalRef.current = window.setInterval(() => {
      scrollNext();
    }, 3000);
  };

  return (
    <section ref={rootRef} className="bg-[#F5F7FB] py-20 overflow-hidden" dir="rtl">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-10 mb-10" data-reveal>
          <div className="relative pr-8">
            <span className="absolute right-0 top-1 bottom-1 w-[3px] bg-[#12A29A]" />
            <p className="text-lg text-slate-600 mb-2">كن على اطلاع</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#223a92] leading-tight">
              بآخر مستجداتنا
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="h-11 w-11 rounded-md bg-[#223a92] text-white flex items-center justify-center
                         shadow-[0_10px_25px_rgba(34,58,146,0.18)] transition-transform active:scale-95"
              aria-label="Prev"
              type="button"
            >
              <HiArrowRight className="text-2xl" />
            </button>

            <button
              onClick={scrollNext}
              className="h-11 w-11 rounded-md bg-[#223a92] text-white flex items-center justify-center
                         shadow-[0_10px_25px_rgba(34,58,146,0.18)] transition-transform active:scale-95"
              aria-label="Next"
              type="button"
            >
              <HiArrowLeft className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <article
              key={item.id}
              data-reveal
              className="snap-start shrink-0 w-[360px] max-w-[85vw]"
            >
              {/* ✅ الصورة أصغر مثل الصورة الأخيرة */}
              <div className="w-full h-[170px] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="pt-4 text-right">
                <p className="text-sm text-slate-500 font-medium mb-2">{item.date}</p>
                <h3 className="text-[16px] md:text-[17px] font-bold text-slate-900 leading-relaxed line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end" data-reveal>
          <a
            href="/news"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[#223a92]
                       px-10 py-3 text-[#223a92] font-bold hover:bg-[#223a92] hover:text-white transition-colors"
          >
            تصفح جميع الأخبار
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
