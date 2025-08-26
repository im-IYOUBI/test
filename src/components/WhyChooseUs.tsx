import React from 'react';
import { Shield, Award, Truck, HeadphonesIcon, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('quality'),
      description: t('qualityDesc'),
      color: 'bg-blue-800'
    },
    {
      icon: Shield,
      title: t('warranty'),
      description: t('warrantyDesc'),
      color: 'bg-green-600'
    },
    {
      icon: Truck,
      title: t('delivery'),
      description: t('deliveryDesc'),
      color: 'bg-orange-600'
    },
    {
      icon: HeadphonesIcon,
      title: t('support'),
      description: t('supportDesc'),
      color: 'bg-purple-600'
    },
    {
      icon: Settings,
      title: t('spares'),
      description: t('sparesDesc'),
      color: 'bg-red-600'
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('whyTitle')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};