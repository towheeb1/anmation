import React from 'react';
import Hero from '../components/ui/Hero';
import InitiativesSlider from '../components/ui/InitiativesSlider';
import StatsShowcaseSection from '../components/ui/StatsShowcaseSection';
import NewsSection from '../components/ui/NewsSection';

const Home = () => {
  return (
    <main>
      <Hero 
        title="سند محمد بن سلمان"
        subtitle="سخاء العطاء .. و طِيب الأثر"
        description="مبادرة مجتمعية غير ربحية، تهدف إلى تلمس احتياجات فئات المجتمع المختلفة، وتقديم الدعم المادي والمعنوي، والمساهمة في تحقيق التنمية المستدامة."
        ctaText="تعرف على المزيد"
        ctaLink="/about"
      />

      {/* New Stats Showcase Section replacing old static stats */}
      <StatsShowcaseSection />

      {/* Initiatives Slider Section */}
      <InitiativesSlider />

      {/* News Section */}
      <NewsSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-black text-secondary mb-8">كن جزءاً من مسيرة العطاء</h2>
          <p className="text-lg leading-loose text-text-secondary mb-10">
            يسعى برنامج سند إلى تعزيز التكافل الاجتماعي من خلال مشاركة الجميع في دعم المبادرات المجتمعية التي تهدف إلى إحداث أثر إيجابي ومستدام.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/initiatives" className="btn btn-primary px-12 py-4">استعرض المبادرات</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
