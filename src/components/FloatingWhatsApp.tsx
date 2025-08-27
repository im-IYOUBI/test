import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = language === 'ar' 
      ? 'مرحبا! أريد الاستفسار عن ماكينات الخياطة'
      : 'Bonjour! Je voudrais me renseigner sur les machines à coudre';
    
    const whatsappUrl = `https://wa.me/+212666160959?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 z-50 transition-all duration-300 ${
        language === 'ar' ? 'left-6' : 'right-6'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Expanded Chat Preview */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-80 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">
                  {language === 'ar' ? 'ماكينات نعيمي' : 'Machines Naimi'}
                </h4>
                <p className="text-xs text-green-500">
                  {language === 'ar' ? 'متصل الآن' : 'En ligne maintenant'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-slate-700">
              {language === 'ar' 
                ? 'مرحبا! كيف يمكنني مساعدتك اليوم؟ 👋'
                : 'Bonjour! Comment puis-je vous aider aujourd\'hui? 👋'}
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            {language === 'ar' ? 'بدء المحادثة' : 'Démarrer la conversation'}
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        >
          <WhatsAppIcon className="h-6 w-6" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        </button>

        {/* Tooltip */}
        <div className={`absolute bottom-full mb-2 ${language === 'ar' ? 'right-0' : 'left-0'} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}>
          <div className="bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            {language === 'ar' ? 'تواصل معنا' : 'Contactez-nous'}
          </div>
        </div>
      </div>
    </div>
  );
};
