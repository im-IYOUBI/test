import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    const whatsappUrl = `https://wa.me/+212661234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      value: '+212 661 234 567',
      color: 'bg-blue-800',
      action: () => window.open('tel:+212661234567')
    },
    {
      icon: Mail,
      title: t('email'),
      value: 'naimi.machines@gmail.com',
      color: 'bg-green-600',
      action: () => window.open('mailto:naimi.machines@gmail.com')
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      value: '+212 661 234 567',
      color: 'bg-green-500',
      action: () => window.open('https://wa.me/+212661234567')
    },
    {
      icon: Facebook,
      title: t('facebook'),
      value: '2003cms - ماكينات نعيمي',
      color: 'bg-blue-600',
      action: () => window.open('https://www.facebook.com/2003cms')
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

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 mb-12 lg:mb-0">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                {language === 'ar' ? 'تواصل مع ماكينات نعيمي' : 'Contactez Machines Naimi'}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {language === 'ar' 
                  ? 'نحن متخصصون في ماكينات جاك للخياطة مع ضمان 3 سنوات وخدمة ما بعد البيع الشاملة. تواصل معنا للحصول على أفضل الأسعار!'
                  : 'Nous sommes spécialisés dans les machines Jack avec garantie 3 ans et service après-vente complet. Contactez-nous pour les meilleurs prix!'}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  onClick={info.action}
                  className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-slate-200"
                >
                  <div className={`${info.color} p-3 rounded-lg`}>
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{info.title}</h4>
                    <p className="text-slate-600 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-slate-300 h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                  alt="Naimi Machines Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">
                      {language === 'ar' ? 'ماكينات نعيمي' : 'Machines Naimi'}
                    </p>
                    <p className="text-sm opacity-90">
                      {language === 'ar' ? 'المغرب' : 'Maroc'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {language === 'ar' ? 'أرسل رسالة' : 'Envoyer un message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('nameLabel')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('emailLabel')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('messageLabel')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse transform hover:scale-105 shadow-md"
              >
                <Send className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
                <span>{t('sendMessage')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};