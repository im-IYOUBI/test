import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Custom Sewing Machine Icon Component
const SewingMachineIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8h-2V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM8 6h8v2H8V6zm12 12H4v-6h16v6zm-2-4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
    <circle cx="9" cy="16" r="1"/>
    <circle cx="17" cy="14" r="1"/>
    <path d="M12 10h4v1h-4z"/>
  </svg>
);

// Custom Social Media Icons
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

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

  // Function to format numbers for Arabic display
  const formatNumber = (number: string) => {
    if (language === 'ar') {
      // Keep Western numerals for phone numbers in Arabic
      return number;
    }
    return number;
  };

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/2003cms',
      label: 'Facebook'
    },
    {
      icon: TikTokIcon,
      href: 'https://tiktok.com/@mnbvczxcv881',
      label: 'TikTok'
    },
    {
      icon: WhatsAppIcon,
      href: 'https://wa.me/+212666160959',
      label: 'WhatsApp'
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
              <div className="bg-emerald-600 p-3 rounded-lg shadow-lg">
                <SewingMachineIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {language === 'ar' ? 'ماكينات نعيمي' : 'Machines Naimi'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'ar' ? 'آلات خياطة احترافية' : 'Machines à coudre professionnelles'}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {language === 'ar' 
                ? 'نحن متخصصون في ماكينات جاك للخياطة مع ضمان 3 سنوات وخدمة ما بعد البيع الشاملة.'
                : 'Nous nous spécialisons dans les machines Jack avec garantie 3 ans et service après-vente complet.'}
            </p>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-gray-400">
                {language === 'ar' ? 'تابعنا' : 'Suivez-nous'}:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-colors duration-300 transform hover:scale-110"
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
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block"
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
                <a 
                  href="tel:+212666160959" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  {formatNumber('+212 666 160 959')}
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">{t('email')}:</p>
                <a 
                  href="mailto:NAIMIELWADZAMIBUSINESS@gmail.com" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors break-all"
                >
                  NAIMIELWADZAMIBUSINESS@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">{t('whatsapp')}:</p>
                <a 
                  href="https://wa.me/+212666160959" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  {formatNumber('+212 666 160 959')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              2025 {language === 'ar' ? 'ماكينات نعيمي' : 'Machines Naimi'}. {t('allRights')}.
            </p>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-800 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors duration-300"
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