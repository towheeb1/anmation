import { useState } from 'react';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    help: [
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Track Order', href: '#' },
    ],
    explore: [
      { label: 'Our Story', href: '#' },
      { label: 'Ingredients', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Stockists', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    social: [
      { label: 'Instagram', href: '#', icon: FiInstagram },
      { label: 'Twitter', href: '#', icon: FiTwitter },
      { label: 'Facebook', href: '#', icon: FiFacebook },
      { label: 'YouTube', href: '#', icon: FiYoutube },
    ],
  };

  return (
    <footer className="bg-pure-black text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Help Column */}
          <div>
            <h4 className="text-xs font-medium tracking-wider mb-6 text-white/60">
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-[var(--transition-base)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-xs font-medium tracking-wider mb-6 text-white/60">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-[var(--transition-base)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-xs font-medium tracking-wider mb-6 text-white/60">
              SOCIAL
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-[var(--transition-base)]"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column - Spans 2 columns on larger screens */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-medium tracking-wider mb-6 text-white/60">
              GET UP TO 25% OFF
            </h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for exclusive offers, early access to new products, and mood-boosting tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/40 transition-colors duration-[var(--transition-base)]"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-[var(--transition-base)]"
                aria-label="Subscribe"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-sm text-green-400 mt-2">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium tracking-tight">LAZAROS</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <a href="#" className="hover:text-white transition-colors duration-[var(--transition-base)]">
                TERMS + CONDITIONS
              </a>
              <a href="#" className="hover:text-white transition-colors duration-[var(--transition-base)]">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-white transition-colors duration-[var(--transition-base)]">
                COOKIE POLICY
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/50">
              © 2026 LAZAROS BREW CO LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;