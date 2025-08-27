import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Custom Sewing Machine Icon Component
const SewingMachineIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8h-2V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM8 6h8v2H8V6zm12 12H4v-6h16v6zm-2-4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
    <circle cx="9" cy="16" r="1"/>
    <circle cx="17" cy="14" r="1"/>
    <path d="M12 10h4v1h-4z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg border-b border-slate-200' : 'bg-white/95 backdrop-blur-sm'
      } ${language === 'ar' ? 'rtl' : 'ltr'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800">{t('brandName')}</span>
              <span className="text-xs text-emerald-600 font-medium">Naimi Machines</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {['home', 'about', 'products', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 hover:text-emerald-700 transition-colors duration-200 font-medium"
              >
                {t(item)}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'fr' ? 'AR' : 'FR'}</span>
            </button>

            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'products', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors duration-200"
                >
                  {t(item)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};