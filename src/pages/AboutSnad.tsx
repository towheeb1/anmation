import React from 'react';
import Hero from '../components/ui/Hero';
import FadeInSection from '../components/ui/FadeInSection';

const AboutSnad = () => {
  return (
    <main>
      <Hero 
        title="عن سند محمد بن سلمان"
        subtitle="مسيرة عطاء من أجل مجتمع حيوي"
        height="min-h-[50vh]"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="section-padding bg-white overflow-hidden">
        <div className="container max-w-5xl">
          <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-black text-secondary mb-6">رؤيتنا</h2>
              <p className="text-lg leading-loose text-text-secondary">
                أن نكون النموذج الرائد في العمل المجتمعي والخيري المستدام، مساهمين في تمكين أفراد المجتمع السعودي وتوفير سبل الحياة الكريمة لهم، بما يتماشى مع طموحات رؤية المملكة 2030.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1454165833767-02a222bb078b?auto=format&fit=crop&q=80&w=1000" alt="Vision" className="w-full h-full object-cover transition-transform duration-700" />
            </div>
          </FadeInSection>

          <FadeInSection direction="down" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Mission" className="w-full h-full object-cover transition-transform duration-700" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-black text-secondary mb-6">رسالتنا</h2>
              <p className="text-lg leading-loose text-text-secondary">
                العمل على تصميم وتنفيذ مبادرات مجتمعية نوعية تستجيب لاحتياجات المجتمع، وتعزز التكافل الاجتماعي، وتفتح آفاقاً جديدة للنمو والاستقرار للشباب والفئات الأكثر حاجة.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-black">مرتكزاتنا</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeInSection delay={0.1} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">الشفافية</h3>
              <p className="text-sm leading-relaxed text-text-secondary">نلتزم بأعلى معايير الشفافية في جميع مراحل العمل من التخطيط وحتى التنفيذ وإعلان النتائج.</p>
            </FadeInSection>
            <FadeInSection delay={0.2} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">الابتكار</h3>
              <p className="text-sm leading-relaxed text-text-secondary">نسعى لتقديم حلول مجتمعية غير تقليدية تتسم بالابتكار والفعالية في معالجة التحديات.</p>
            </FadeInSection>
            <FadeInSection delay={0.3} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">الأثر</h3>
              <p className="text-sm leading-relaxed text-text-secondary">نركز على المبادرات التي تحقق أثراً إيجابياً ملموساً ومستداماً في حياة المستفيدين.</p>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSnad;
