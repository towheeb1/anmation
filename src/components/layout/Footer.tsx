import React from 'react';
import { FiTwitter, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black text-primary">سند</span>
              <span className="text-[12px] text-text-secondary mt-1 tracking-wider">محمد بن سلمان</span>
            </div>
            <p className="text-sm leading-loose opacity-80">
              برنامج مجتمعي غير ربحي يسعى إلى توحيد جهود العمل الخيري والاجتماعي في المملكة، 
              بما يساهم في بناء مستقبل أكثر تكاتفاً واستدامة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-primary">روابط سريعة</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="/" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">عن البرنامج</a></li>
              <li><a href="/initiatives" className="hover:text-primary transition-colors">المبادرات والمشاريع</a></li>
              <li><a href="/news" className="hover:text-primary transition-colors">المركز الإعلامي</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-primary">تواصل معنا</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-center gap-3">
                <FiMail className="text-primary text-lg" />
                <span>info@snad.org.sa</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary text-lg" />
                <span>800 124 0000</span>
              </li>
              <li className="opacity-70">المملكة العربية السعودية، الرياض</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-primary">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300">
                <FiInstagram />
              </a>
            </div>
            <div className="mt-8">
              <img src="https://vision2030.gov.sa/media/rc0bcjuy/v2030logo.svg" alt="Vision 2030" className="h-12 opacity-40 grayscale" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-text-secondary">
          <p>جميع الحقوق محفوظة لسند محمد بن سلمان © 2026</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
