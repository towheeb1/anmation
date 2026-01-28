import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Variant = "imgTopWhiteBottom" | "whiteTopImgBottom" | "centerFrost";

type StatCard = {
  id: number;
  value: string;
  label: string;
  image: string;
  variant: Variant;
};

const StatsShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const cards: StatCard[] = useMemo(
    () => [
      // 1) مثل (13): صورة فوق + أسفل أبيض
      {
        id: 1,
        value: "13",
        label: "منطقة مستفيدة من مشروع الأمير محمد بن سلمان لتطوير المساجد التاريخية",
        image:
          "https://images.unsplash.com/photo-1586724237569-f3d021dd4c37?auto=format&fit=crop&q=80&w=1200",
        variant: "imgTopWhiteBottom",
      },
      // 2) مثل (+26): أعلى أبيض + صورة أسفل
      {
        id: 2,
        value: "+26",
        label: "ألف أسرة مستفيدة من مبادرة سند الزواج",
        image:
          "https://images.unsplash.com/photo-1520975958225-18aee1a21591?auto=format&fit=crop&q=80&w=1200",
        variant: "whiteTopImgBottom",
      },
      // 3) مثل (+200): صورة فوق + أسفل أبيض
      {
        id: 3,
        value: "+200",
        label: "ألف مستفيد من مشروع محمد بن سلمان الخيري",
        image:
          "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&q=80&w=1200",
        variant: "imgTopWhiteBottom",
      },
      // 4) مثل (+100): صورة كاملة + لوح شفاف في الوسط للنص
      {
        id: 4,
        value: "+100",
        label: "جمعية أهلية تلقت الدعم من مشروع محمد بن سلمان الخيري",
        image:
          "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200",
        variant: "whiteTopImgBottom",
      },
      // 5) مثل (+520): صورة فوق + أسفل أبيض
      {
        id: 5,
        value: "+520",
        label: "مليون ريال إجمالي عطاء مبادرة سند الزواج",
        image:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
        variant: "imgTopWhiteBottom",
      },
    ],
    []
  );

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLDivElement>("[data-card]");

      // دخول خفيف
      gsap.fromTo(
        els,
        { opacity: 0, y: 26, scale: 0.995 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          stagger: 0.10,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      // حركة تنفّس خفيفة جدًا على الكروت فقط
      els.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -5 : 5,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden py-28 bg-[linear-gradient(180deg,#2a3d8f_0%,#1e2d6d_100%)]"
    >
      {/* نفس الإحساس الناعم أعلى/أسفل */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 inset-x-0 h-44 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.18),rgba(255,255,255,0)_60%)]" />
        <div className="absolute -bottom-24 inset-x-0 h-56 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(0,0,0,0.25),rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-12">
          {/* العنوان يسار مثل الصورة */}
          <div className="w-[35%] text-right">
            <h2 className="text-4xl font-black text-[#d9e021] mb-2">خطوات واثقة</h2>
            <h3 className="text-4xl font-black text-white leading-tight">نحو تحقيق التنمية</h3>
            <h3 className="text-4xl font-black text-white leading-tight">المستدامة</h3>
          </div>

          {/* الكروت يمين وبنفس الاتساق */}
          <div className="w-[65%] flex items-center justify-end gap-6">
            {cards.map((c, idx) => {
              const wave = idx % 2 === 0 ? "mt-10" : "mt-0"; // منخفض/مرتفع/...
              return (
                <div
                  key={c.id}
                  data-card
                  className={[
                    "relative w-[170px] h-[520px] rounded-[32px] overflow-hidden",
                    "shadow-[0_30px_70px_rgba(0,0,0,0.35)]",
                    wave,
                  ].join(" ")}
                >
                  {/* الصورة كـ background تغطي 100% */}
                  <img
                    src={c.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Tint أزرق خفيف فوق الصورة (مهم للاتساق) */}
                  <div className="absolute inset-0 bg-[#1e2d6d]/18" />

                  {/* توزيع الطبقات حسب نوع الكرت */}
                  {c.variant === "imgTopWhiteBottom" && (
                    <>
                      {/* تدرج أعلى الصورة (غامق خفيف) */}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,45,109,0.55)_0%,rgba(30,45,109,0.25)_48%,rgba(255,255,255,0.00)_62%)]" />

                      {/* أسفل أبيض (مثل الصورة) */}
                      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-white" />

                      {/* خط فاصل ناعم */}
                      <div className="absolute inset-x-0 bottom-[44%] h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

                      <div className="absolute inset-x-4 bottom-6 z-10 text-center">
                        <span className="block text-[38px] font-black leading-none text-[#223a92]">
                          {c.value}
                        </span>
                        <p className="mt-3 text-[13px] font-semibold leading-relaxed text-slate-600">
                          {c.label}
                        </p>
                      </div>
                    </>
                  )}

                  {c.variant === "whiteTopImgBottom" && (
                    <>
                      {/* أعلى أبيض */}
                      <div className="absolute inset-x-0 top-0 h-[52%] bg-white" />

                      {/* تدرج انتقال للجزء السفلي */}
                      <div className="absolute inset-x-0 top-[48%] h-16 bg-[linear-gradient(180deg,rgb(175, 10, 10)_0%,rgba(255,255,255,0)_100%)]" />

                      {/* تعتيم لطيف أسفل الصورة */}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,45,109,0.00)_0%,rgba(30,45,109,0.18)_55%,rgba(30,45,109,0.35)_100%)]" />

                      <div className="absolute inset-x-4 top-8 z-10 text-center">
                        <span className="block text-[38px] font-black leading-none text-[#223a92]">
                          {c.value}
                        </span>
                        <p className="mt-3 text-[13px] font-semibold leading-relaxed text-slate-600">
                          {c.label}
                        </p>
                      </div>
                    </>
                  )}

                  {c.variant === "centerFrost" && (
                    <>
                      {/* فيignetting بسيط للتركيز */}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,45,109,0.35)_0%,rgba(30,45,109,0.15)_40%,rgba(30,45,109,0.45)_100%)]" />

                      {/* ✅ لوح شفاف في الوسط مثل (+100) بالضبط */}
                      <div className="absolute inset-x-5 top-20 z-10 rounded-[22px] bg-white/55 backdrop-blur-2xl px-5 py-7 text-center shadow-[0_20px_45px_rgba(15,23,42,0.18)] ring-1 ring-white/50">
                        <span className="block text-[38px] font-black leading-none text-[#223a92]">
                          {c.value}
                        </span>
                        <p className="mt-4 text-[13px] font-semibold leading-relaxed text-slate-600">
                          {c.label}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
