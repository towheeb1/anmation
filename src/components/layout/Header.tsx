import { useState, useEffect } from 'react';
import { FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Show header only after FrameHero section (500vh) is complete
      // FrameHero is 500vh, so we show header after scrolling past ~95% of it
      const frameHeroHeight = viewportHeight * 5;
      const shouldShowHeader = scrollY > frameHeroHeight * 0.95;
      
      setShowHeader(shouldShowHeader);
      setIsScrolled(scrollY > frameHeroHeight + 50);
      setShowHeaderTitle(scrollY > frameHeroHeight + 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SHOP NOW', href: '#products' },
    { label: 'MERCH', href: '#merch' },
    { label: 'DISCOVER', href: '#discover' },
    { label: 'GIVE 15%, GET 15%', href: '#referral' },
  ];

  return (
    <>
      {/* Promotional Banner - Only show when header is visible */}
      <div 
        className={`bg-pure-black text-white text-center py-2 px-4 text-xs tracking-wider transition-all duration-500 ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        GET 10% OFF YOUR FIRST ORDER WITH CODE LIFTOFF10
      </div>

      {/* Main Header - Only show after FrameHero animation */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-[var(--transition-base)] ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-[66px]">
            {/* Logo - Shows when scrolled */}
            <a href="#" className={`flex items-center gap-2 group transition-all duration-500 ${showHeaderTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <span className="font-[Ballmain] text-2xl tracking-tight">LAZAROS</span>
              <svg
                className="w-4 h-4 transition-transform duration-[var(--transition-base)] group-hover:rotate-45"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </a>
            
            {/* Spacer when title is hidden */}
            <div className={`transition-all duration-500 ${showHeaderTitle ? 'w-0' : 'flex-1'}`} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
                aria-label="Account"
              >
                <FiUser className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:opacity-60 transition-opacity duration-[var(--transition-base)] relative"
                aria-label="Cart"
              >
                <FiShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pure-black text-white text-[10px] rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-cream border-t border-black/10 transition-all duration-[var(--transition-base)] overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container-wide py-4 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide py-2 hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;