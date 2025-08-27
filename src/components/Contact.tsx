import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const whatsappMessage = `${language === 'ar' ? 'مرحبا، اسمي' : 'Bonjour, je suis'} ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/+212666160959?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      value: '+212 666 160 959',
      color: 'bg-blue-800',
      action: () => window.open('tel:+212666160959')
    },
    {
      icon: Mail,
      title: t('email'),
      value: 'NAIMIELWADZAMIBUSINESS@gmail.com',
      color: 'bg-green-600',
      action: () => window.open('mailto:NAIMIELWADZAMIBUSINESS@gmail.com')
    },
    {
      icon: WhatsAppIcon,
      title: t('whatsapp'),
      value: '+212 666 160 959',
      color: 'bg-green-500',
      action: () => window.open('https://wa.me/+212666160959')
    },
    {
      icon: FacebookIcon,
      title: t('facebook'),
      value: '2003cms - ماكينات نعيمي',
      color: 'bg-blue-600',
      action: () => window.open('https://www.facebook.com/2003cms')
    },
    {
      icon: TikTokIcon,
      title: 'TikTok',
      value: '@mnbvczxcv881',
      color: 'bg-black',
      action: () => window.open('https://tiktok.com/@mnbvczxcv881')
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'الموقع' : 'Localisation',
      value: language === 'ar' ? 'عرض على الخريطة' : 'Voir sur la carte',
      color: 'bg-red-600',
      action: () => window.open('https://maps.app.goo.gl/NBb5B4185DCAeYD48')
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-slate-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                {language === 'ar' ? 'تواصل مع ماكينات نعيمي' : 'Contactez Machines Naimi'}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'نحن متخصصون في ماكينات جاك للخياطة مع ضمان 3 سنوات وخدمة ما بعد البيع الشاملة. تواصل معنا للحصول على أفضل الأسعار!'
                  : 'Nous sommes spécialisés dans les machines Jack avec garantie 3 ans et service après-vente complet. Contactez-nous pour les meilleurs prix!'}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  onClick={info.action}
                  className="flex items-center space-x-4 rtl:space-x-reverse p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-slate-100 group"
                >
                  <div className={`${info.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-base mb-1">{info.title}</h4>
                    <p className="text-slate-600 text-sm break-all">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map with Google Maps Link */}
            <div className="relative max-w-3xl mx-auto">
              <div 
                className="bg-slate-300 h-80 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => window.open('https://maps.app.goo.gl/NBb5B4185DCAeYD48')}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                  alt="Naimi Machines Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center hover:bg-slate-900/70 transition-colors">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
                    <p className="font-bold text-xl mb-2">
                      {language === 'ar' ? 'ماكينات نعيمي' : 'Machines Naimi'}
                    </p>
                    <p className="text-base opacity-90 bg-emerald-600 px-4 py-2 rounded-lg inline-block">
                      {language === 'ar' ? 'انقر لفتح الخريطة' : 'Cliquez pour ouvrir la carte'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};