import HeroWithTransition from '../components/sections/HeroWithTransition';
import AsSeenIn from '../components/sections/AsSeenIn';
import Products from '../components/sections/Products';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import HerrSection from '../components/sections/HeroSection';
import AigorizmFeatures from '../components/sections/AigorizmFeatures';

const Home = () => {
  return (
    <>
      <HeroWithTransition />
      <AsSeenIn />
      <Products />
      <HerrSection />
      <AigorizmFeatures />
       <Features />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;