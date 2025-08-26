import React, { useState } from 'react';
import { ArrowRight, X, Star, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  rating: number;
}

export const Products: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: t('product1Name'),
      description: t('product1Desc'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      price: language === 'ar' ? '12,500 درهم' : '12,500 DH',
      features: language === 'ar' 
        ? ['محرك سيرفو عالي الكفاءة', 'شاشة LCD ملونة', 'قطع خيط تلقائي', 'ضمان 3 سنوات', 'صيانة مجانية']
        : ['Moteur servo haute efficacité', 'Écran LCD couleur', 'Coupe-fil automatique', 'Garantie 3 ans', 'Maintenance gratuite'],
      rating: 4.9
    },
    {
      id: 2,
      name: t('product2Name'),
      description: t('product2Desc'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      price: language === 'ar' ? '8,500 درهم' : '8,500 DH',
      features: language === 'ar'
        ? ['3 خيوط عالية الجودة', 'سرعة 7000 دورة/دقيقة', 'تشطيبات مثالية', 'سهولة التشغيل', 'LED إضاءة']
        : ['3 fils haute qualité', 'Vitesse 7000 tr/min', 'Finitions parfaites', 'Facilité d\'utilisation', 'Éclairage LED'],
      rating: 4.8
    },
    {
      id: 3,
      name: t('product3Name'),
      description: t('product3Desc'),
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop',
      price: language === 'ar' ? '9,800 درهم' : '9,800 DH',
      features: language === 'ar'
        ? ['4 خيوط احترافية', 'قطع تلقائي', 'ضبط التوتر الذكي', 'سرعة متغيرة', 'تشطيبات احترافية']
        : ['4 fils professionnels', 'Coupe automatique', 'Réglage tension intelligent', 'Vitesse variable', 'Finitions pro'],
      rating: 4.8
    },
    {
      id: 4,
      name: t('product4Name'),
      description: t('product4Desc'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      price: language === 'ar' ? '7,200 درهم' : '7,200 DH',
      features: language === 'ar'
        ? ['تصميم مدمج', 'سهولة الاستخدام', 'موثوقية عالية', 'صيانة بسيطة', 'ضمان شامل']
        : ['Design compact', 'Facilité d\'utilisation', 'Haute fiabilité', 'Maintenance simple', 'Garantie complète'],
      rating: 4.7
    },
    {
      id: 5,
      name: t('product5Name'),
      description: t('product5Desc'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      price: language === 'ar' ? '15,800 درهم' : '15,800 DH',
      features: language === 'ar'
        ? ['قوة صناعية عالية', 'تحمل الاستخدام المكثف', 'دقة في الخياطة', 'محرك قوي', 'ضمان ممتد']
        : ['Puissance industrielle élevée', 'Résistance usage intensif', 'Précision de couture', 'Moteur puissant', 'Garantie étendue'],
      rating: 4.9
    },
    {
      id: 6,
      name: t('product6Name'),
      description: t('product6Desc'),
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop',
      price: language === 'ar' ? '18,500 درهم' : '18,500 DH',
      features: language === 'ar'
        ? ['تقنية البخار المتقدمة', 'تحكم في درجة الحرارة', 'لوحة كي احترافية', 'توفير الطاقة', 'أمان عالي']
        : ['Technologie vapeur avancée', 'Contrôle température', 'Planche professionnelle', 'Économie d\'énergie', 'Sécurité élevée'],
      rating: 4.8
    }
  ];

  return (
    <>
      <section 
        id="products" 
        className="py-20 bg-slate-100"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              {t('productsTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-emerald-700">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse group shadow-md"
                  >
                    <span>{t('productLearnMore')}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-slate-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {selectedProduct.name}
                </h3>
                <span className="text-3xl font-bold text-emerald-700">
                  {selectedProduct.price}
                </span>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  {language === 'ar' ? 'المميزات:' : 'Caractéristiques:'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Demander un devis'}
                </button>
                <button className="flex-1 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 py-3 px-6 rounded-lg font-semibold transition-colors">
                  {t('contact')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};