import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation & Branding
    brandName: 'Machines Naimi',
    home: 'Accueil',
    products: 'Machines',
    gallery: 'Galerie',
    contact: 'Contact',
    about: 'À propos',
    
    // Hero Section
    heroTitle: 'Machines à coudre Jack - Qualité professionnelle',
    heroSubtitle: 'Chez Machines Naimi, nous proposons la gamme complète des machines Jack avec garantie 3 ans et service après-vente complet. Piqueuses, Surjeteuses et machines de repassage pour tous vos besoins.',
    heroCta: 'Découvrir nos machines Jack',
    
    // About Section
    aboutTitle: 'Machines Naimi - Votre partenaire de confiance',
    aboutText: 'Spécialisés dans la distribution des machines Jack au Maroc, nous offrons des équipements de haute qualité avec une garantie de 3 ans et un service après-vente exceptionnel. Notre expertise couvre les machines Piqueuses, Surjeteuses et de repassage.',
    
    // Products Section
    productsTitle: 'Nos Machines Jack',
    productLearnMore: 'En savoir plus',
    product1Name: 'Jack A5E AMH - Piqueuse Professionnelle',
    product1Desc: 'Machine piqueuse haute performance pour production intensive',
    product2Name: 'Jack C3 - Surjeteuse 3 fils',
    product2Desc: 'Finitions parfaites pour tous types de tissus',
    product3Name: 'Jack E4S - Surjeteuse 4 fils',
    product3Desc: 'Polyvalence et qualité professionnelle',
    product4Name: 'Jack A2B - Piqueuse Domestique',
    product4Desc: 'Idéale pour ateliers et usage domestique',
    product5Name: 'Jack H2 - Piqueuse Industrielle',
    product5Desc: 'Robustesse et fiabilité pour l\'industrie',
    product6Name: 'Machines de Repassage',
    product6Desc: 'Gamme complète pour finitions professionnelles',
    
    // Gallery Section
    galleryTitle: 'Nos Machines en Action',
    
    // Why Choose Us Section
    whyTitle: 'Pourquoi Choisir Machines Naimi',
    quality: 'Qualité Jack',
    qualityDesc: 'Machines Jack authentiques et certifiées',
    warranty: 'Garantie 3 ans',
    warrantyDesc: 'Garantie complète avec service après-vente',
    delivery: 'Livraison Maroc',
    deliveryDesc: 'Livraison dans tout le Maroc',
    support: 'Support Expert',
    supportDesc: 'Assistance technique spécialisée Jack',
    spares: 'Pièces de Rechange',
    sparesDesc: 'Stock complet de pièces détachées Jack',
    
    // Contact Section
    contactTitle: 'Contactez Machines Naimi',
    phone: 'Téléphone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    sendMessage: 'Envoyer le message',
    
    // Footer
    quickLinks: 'Liens Rapides',
    followUs: 'Suivez-nous',
    allRights: 'Tous droits réservés - Machines Naimi'
  },
  ar: {
    // Navigation & Branding
    brandName: 'ماكينات نعيمي',
    home: 'الرئيسية',
    products: 'الماكينات',
    gallery: 'المعرض',
    contact: 'اتصل بنا',
    about: 'من نحن',
    
    // Hero Section
    heroTitle: 'ماكينات جاك للخياطة - جودة احترافية',
    heroSubtitle: 'في ماكينات نعيمي، نقدم المجموعة الكاملة من ماكينات جاك مع ضمان 3 سنوات وخدمة ما بعد البيع الشاملة. ماكينات Piqueuses و Surjeteuses والكي لجميع احتياجاتك.',
    heroCta: 'اكتشف ماكينات جاك',
    
    // About Section
    aboutTitle: 'ماكينات نعيمي - شريكك الموثوق',
    aboutText: 'متخصصون في توزيع ماكينات جاك في المغرب، نقدم معدات عالية الجودة مع ضمان 3 سنوات وخدمة ما بعد البيع الاستثنائية. خبرتنا تشمل ماكينات Piqueuses و Surjeteuses والكي.',
    
    // Products Section
    productsTitle: 'ماكينات جاك',
    productLearnMore: 'المزيد',
    product1Name: 'Jack A5E AMH - ماكينة خياطة احترافية',
    product1Desc: 'ماكينة خياطة عالية الأداء للإنتاج المكثف',
    product2Name: 'Jack C3 - أوفرلوك 3 خيوط',
    product2Desc: 'لمسات نهائية مثالية لجميع أنواع الأقمشة',
    product3Name: 'Jack E4S - أوفرلوك 4 خيوط',
    product3Desc: 'تنوع وجودة احترافية',
    product4Name: 'Jack A2B - ماكينة خياطة منزلية',
    product4Desc: 'مثالية للورش والاستخدام المنزلي',
    product5Name: 'Jack H2 - ماكينة خياطة صناعية',
    product5Desc: 'قوة وموثوقية للصناعة',
    product6Name: 'ماكينات الكي',
    product6Desc: 'مجموعة كاملة للمسات النهائية الاحترافية',
    
    // Gallery Section
    galleryTitle: 'ماكيناتنا في العمل',
    
    // Why Choose Us Section
    whyTitle: 'لماذا تختار ماكينات نعيمي',
    quality: 'جودة جاك',
    qualityDesc: 'ماكينات جاك أصلية ومعتمدة',
    warranty: 'ضمان 3 سنوات',
    warrantyDesc: 'ضمان شامل مع خدمة ما بعد البيع',
    delivery: 'التوصيل بالمغرب',
    deliveryDesc: 'توصيل في جميع أنحاء المغرب',
    support: 'دعم خبير',
    supportDesc: 'مساعدة تقنية متخصصة في جاك',
    spares: 'قطع الغيار',
    sparesDesc: 'مخزون كامل من قطع غيار جاك',
    
    // Contact Section
    contactTitle: 'اتصل بماكينات نعيمي',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    whatsapp: 'واتساب',
    facebook: 'فيسبوك',
    nameLabel: 'الاسم',
    emailLabel: 'البريد الإلكتروني',
    messageLabel: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Footer
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    allRights: 'جميع الحقوق محفوظة - ماكينات نعيمي'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};