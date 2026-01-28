import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import InitiativesProjects from './pages/InitiativesProjects';
import News from './pages/News';
import Faq from './pages/Faq';
import AboutSnad from './pages/AboutSnad';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSnad />} />
          <Route path="/initiatives" element={<InitiativesProjects />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
