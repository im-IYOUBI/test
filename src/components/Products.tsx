import React, { useState } from 'react';
import { Star, ArrowRight, X, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { machinesData, type MachineData } from '../data/machinesData';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  rating: number;
}

const Products: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Transform machinesData to Product format based on current language
  const products: Product[] = machinesData.map((machine: MachineData) => ({
    id: machine.id,
    name: language === 'ar' ? machine.nameAr : machine.nameFr,
    description: language === 'ar' ? machine.descriptionAr : machine.descriptionFr,
    image: machine.image,
    features: language === 'ar' ? machine.featuresAr : machine.featuresFr,
    rating: machine.rating,
  }));

  const handleDevisRequest = (product: Product) => {
    const message = language === 'ar' 
      ? `مرحبا! أريد طلب عرض سعر لـ ${product.name}. يرجى إرسال تفاصيل العرض والتوفر.\n\nصورة المنتج: ${product.image}`
      : `Bonjour! Je voudrais demander un devis pour ${product.name}. Veuillez m'envoyer les détails de l'offre et la disponibilité.\n\nImage du produit: ${product.image}`;
    
    const whatsappUrl = `https://wa.me/+212666160959?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactRequest = (product: Product) => {
    const message = language === 'ar' 
      ? `مرحبا! أريد الاستفسار عن ${product.name}. هل يمكنكم تزويدي بمزيد من المعلومات؟\n\nصورة المنتج: ${product.image}`
      : `Bonjour! Je voudrais me renseigner sur ${product.name}. Pouvez-vous me donner plus d'informations?\n\nImage du produit: ${product.image}`;
    
    const whatsappUrl = `https://wa.me/+212666160959?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-500 ml-2">{product.rating}</span>
                    </div>
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

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {language === 'ar' 
                ? 'لم تجد ما تبحث عنه؟' 
                : 'Vous ne trouvez pas ce que vous cherchez?'}
            </h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              {language === 'ar' 
                ? 'لدينا المزيد من المنتجات والماكينات المتاحة! إذا لم تجد الماكينة التي تريدها، تواصل معنا وسنوفرها لك.' 
                : 'Nous avons plus de produits et machines disponibles! Si vous ne trouvez pas la machine que vous voulez, contactez-nous et nous la trouverons pour vous.'}
            </p>
            <button 
              onClick={() => {
                const message = language === 'ar' 
                  ? 'مرحبا! أريد الاستفسار عن منتجات إضافية أو ماكينة معينة غير موجودة في الموقع. هل يمكنكم مساعدتي؟'
                  : 'Bonjour! Je voudrais me renseigner sur des produits supplémentaires ou une machine spécifique qui n\'est pas sur le site. Pouvez-vous m\'aider?';
                const whatsappUrl = `https://wa.me/+212666160959?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 rtl:space-x-reverse mx-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>
                {language === 'ar' ? 'تواصل معنا الآن' : 'Contactez-nous maintenant'}
              </span>
            </button>
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
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{selectedProduct.name}</h2>
              </div>

              <p className="text-slate-600 mb-6">{selectedProduct.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {language === 'ar' ? 'المميزات' : 'Caractéristiques'}
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(selectedProduct.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
                <span className="text-slate-600 ml-2">{selectedProduct.rating}/5</span>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => handleDevisRequest(selectedProduct)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md"
                >
                  {language === 'ar' ? 'طلب عرض سعر' : 'Demander un devis'}
                </button>
                <button 
                  onClick={() => handleContactRequest(selectedProduct)}
                  className="flex-1 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 py-3 px-6 rounded-lg font-semibold transition-colors"
                >
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

export default Products;