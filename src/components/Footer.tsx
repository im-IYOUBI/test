import React from 'react';
import { Scissors, Facebook, Instagram, Youtube, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube'
    }
  ];

  const quickLinks = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'products', section: 'products' },
    { key: 'gallery', section: 'gallery' },
    { key: 'contact', section: 'contact' }
  ];

  return (
    <footer 
      className="bg-gray-900 text-white pt-16 pb-8"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="bg-orange-600 p-3 rounded-lg">
                <Scissors className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SewCraft</h3>
                <p className="text-gray-400 text-sm">
                  {language === 'ar' ? 'آلات خياطة احترافية' : 'Machines à coudre professionnelles'}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {language === 'ar' 
                ? 'نحن متخصصون في توفير آلات الخياطة عالية الجودة مع أكثر من 20 عاماً من الخبرة في المجال.'
                : 'Nous nous spécialisons dans la fourniture de machines à coudre de haute qualité avec plus de 20 ans d\'expérience dans le domaine.'}
            </p>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-gray-400">
                {t('followUs')}:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-orange-600 transition-colors duration-200 block"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('contact')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">{t('phone')}:</p>
                <a href="tel:+212123456789" className="text-gray-300 hover:text-orange-600 transition-colors">
                  +212 123 456 789
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">{t('email')}:</p>
                <a href="mailto:contact@sewcraft.ma" className="text-gray-300 hover:text-orange-600 transition-colors">
                  contact@sewcraft.ma
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">{t('whatsapp')}:</p>
                <a 
                  href="https://wa.me/+212123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                >
                  +212 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 SewCraft. {t('allRights')}.
            </p>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-800 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};