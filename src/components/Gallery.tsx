import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Gallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/src/img/gallery/476235233_1097211659088783_89725.png',
      alt: language === 'ar' ? 'ماكينة جاك للخياطة الاحترافية' : 'Machine Jack professionnelle'
    },
    {
      src: '/src/img/gallery/482248343_1119104390232843_57860.png',
      alt: language === 'ar' ? 'ماكينة أوفرلوك جاك' : 'Machine surjeteuse Jack'
    },
    {
      src: '/src/img/gallery/485352661_1127228062753809_37006.png',
      alt: language === 'ar' ? 'ماكينات نعيمي - معرض المنتجات' : 'Naimi Machines - Showroom'
    },
    {
      src: '/src/img/gallery/485361142_1126374946172454_24651.png',
      alt: language === 'ar' ? 'ماكينة خياطة صناعية جاك' : 'Machine industrielle Jack'
    },
    {
      src: '/src/img/gallery/487065324_1134990151977600_54345.png',
      alt: language === 'ar' ? 'ورشة ماكينات نعيمي' : 'Atelier Naimi Machines'
    },
    {
      src: '/src/img/gallery/487352423_1139547278188554_78156.png',
      alt: language === 'ar' ? 'ماكينات الكي المتقدمة' : 'Machines de repassage avancées'
    },
    {
      src: '/src/img/gallery/490328398_1148862530590362_64430.png',
      alt: language === 'ar' ? 'قطع غيار ماكينات جاك' : 'Pièces détachées Jack'
    },
    {
      src: '/src/img/gallery/490593873_1149136657229616_33398.png',
      alt: language === 'ar' ? 'خدمة ما بعد البيع - ماكينات نعيمي' : 'Service après-vente Naimi'
    }
  ];

  return (
    <>
      <section 
        id="gallery" 
        className="py-20 bg-gray-50"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('galleryTitle')}
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          {/* Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 break-inside-avoid"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{image.alt}</p>
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};