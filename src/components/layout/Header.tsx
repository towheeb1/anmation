import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عن سند' },
  { path: '/initiatives', label: 'المبادرات والمشاريع' },
  { path: '/news', label: 'الأخبار' },
  { path: '/faq', label: 'الأسئلة الشائعة' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none">
          <span className={`text-2xl font-black ${isScrolled ? 'text-primary' : 'text-secondary'}`}>سند</span>
          <span className="text-[10px] text-text-secondary mt-1">محمد بن سلمان</span>
        </NavLink>

        {/* Desktop Nav */}
      {/* Desktop Nav */}
<nav className="hidden lg:flex items-center gap-8 group">
  {navLinks.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        [
          "group/link relative pb-2 text-sm font-medium transition-colors duration-300",
          "group-hover:text-text-primary/45 hover:text-primary",
          isActive ? "text-primary" : "text-text-primary",
        ].join(" ")
      }
    >
      <span className="relative z-10">{link.label}</span>

      {/* underline: نفس لون النص + من المنتصف + أبطأ */}
      <span
        className="
          pointer-events-none
          absolute left-0 right-0 -bottom-[3px]
          h-[2px] bg-current
          origin-center scale-x-0
          transition-transform duration-700 ease-out
          group-hover/link:scale-x-100
        "
      />
    </NavLink>
  ))}
</nav>




        {/* Controls */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-secondary text-xs font-bold hover:bg-gray-200 transition-colors">
            <FiGlobe className="text-sm" />
            <span>EN</span>
          </button>
          
          <button 
            className="lg:hidden text-2xl text-text-primary"
            onClick={() => setIsMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-primary">سند</span>
              <span className="text-[10px] text-text-secondary mt-1">محمد بن سلمان</span>
            </div>
            <button className="text-3xl text-text-primary" onClick={() => setIsMenuOpen(false)}>
              <FiX />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className="text-xl font-bold text-text-primary border-b border-gray-100 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <button className="w-full flex justify-center items-center gap-2 py-4 rounded-lg bg-gray-100 text-secondary font-bold">
              <FiGlobe />
              <span>English / العربية</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
