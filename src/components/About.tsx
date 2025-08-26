import React from 'react';
import { Award, Users, Clock, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  const stats = [
    { icon: Clock, value: '3+', label: language === 'ar' ? 'سنة خبرة (منذ 2021)' : 'Années d\'expérience (depuis 2021)' },
    { icon: Users, value: '800+', label: language === 'ar' ? 'عميل راضٍ' : 'Clients satisfaits' },
    { icon: Settings, value: '25+', label: language === 'ar' ? 'موديل جاك متوفر' : 'Modèles Jack disponibles' },
    { icon: Award, value: '3', label: language === 'ar' ? 'سنوات ضمان' : 'Années de garantie' }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('aboutText')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-emerald-600 p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="src\img\image.png"
                alt="Workshop with sewing machines"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">
                  {language === 'ar' ? 'ورشة عمل حديثة' : 'Atelier Moderne'}
                </h4>
                <p className="text-sm text-slate-600">
                  {language === 'ar' ? 'مجهزة بأحدث المعدات والتقنيات' : 'Équipé des dernières technologies'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};