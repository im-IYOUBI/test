export interface MachineData {
  id: number;
  nameAr: string;
  nameFr: string;
  descriptionAr: string;
  descriptionFr: string;
  image: string;
  featuresAr: string[];
  featuresFr: string[];
  rating: number;
  category: string;
}

export const machinesData: MachineData[] = [
  {
    id: 1,
    nameAr: 'ماكينة خياطة Jack K5E',
    nameFr: 'Machine à coudre Jack K5E',
    descriptionAr: 'ماكينة خياطة عالية الجودة مناسبة للاستخدام المهني والمنزلي',
    descriptionFr: 'Machine à coudre haute qualité adaptée à un usage professionnel et domestique',
    image: '/img/COULTEUSES/Jack K5E.png',
    featuresAr: ['تقنية متقدمة', 'سهولة الاستخدام', 'متانة عالية', 'صيانة بسيطة', 'ضمان شامل'],
    featuresFr: ['Technologie avancée', 'Facilité d\'utilisation', 'Haute durabilité', 'Maintenance simple', 'Garantie complète'],
    rating: 4.8,
    category: 'COULTEUSES'
  },
  {
    id: 2,
    nameAr: 'ماكينة خياطة Jack W4',
    nameFr: 'Machine à coudre Jack W4',
    descriptionAr: 'ماكينة خياطة متطورة بتقنيات حديثة للخياطة الاحترافية',
    descriptionFr: 'Machine à coudre avancée avec technologies modernes pour couture professionnelle',
    image: '/img/COULTEUSES/Jack W4.png',
    featuresAr: ['أداء عالي', 'دقة في الخياطة', 'تحكم إلكتروني', 'توفير الطاقة', 'تصميم عصري'],
    featuresFr: ['Performance élevée', 'Précision de couture', 'Contrôle électronique', 'Économie d\'énergie', 'Design moderne'],
    rating: 4.9,
    category: 'COULTEUSES'
  },
  {
    id: 3,
    nameAr: 'ماكينة سرفلة Jack C3',
    nameFr: 'Surjeteuse Jack C3',
    descriptionAr: 'ماكينة سرفلة احترافية لتشطيب الأقمشة بجودة عالية',
    descriptionFr: 'Surjeteuse professionnelle pour finition de tissus haute qualité',
    image: '/img/SURJETEUSES/Jack C3.png',
    featuresAr: ['تشطيب مثالي', 'سرعة عالية', 'تحكم دقيق', 'متعددة الوظائف', 'سهولة التشغيل'],
    featuresFr: ['Finition parfaite', 'Vitesse élevée', 'Contrôle précis', 'Multifonctionnel', 'Facilité d\'utilisation'],
    rating: 4.7,
    category: 'SURJETEUSES'
  },
  {
    id: 4,
    nameAr: 'ماكينة سرفلة Jack E4S',
    nameFr: 'Surjeteuse Jack E4S',
    descriptionAr: 'ماكينة سرفلة متقدمة بأربعة خيوط للاستخدام الصناعي',
    descriptionFr: 'Surjeteuse avancée à 4 fils pour usage industriel',
    image: '/img/SURJETEUSES/Jack E4S.png',
    featuresAr: ['4 خيوط', 'قوة تحمل عالية', 'إنتاجية ممتازة', 'تقنية حديثة', 'موثوقية عالية'],
    featuresFr: ['4 fils', 'Haute résistance', 'Excellente productivité', 'Technologie moderne', 'Haute fiabilité'],
    rating: 4.8,
    category: 'SURJETEUSES'
  },
  {
    id: 5,
    nameAr: 'ماكينة خياطة Jack A5E AMH',
    nameFr: 'Machine à piquer Jack A5E AMH',
    descriptionAr: 'ماكينة خياطة صناعية عالية الأداء للإنتاج المكثف',
    descriptionFr: 'Machine à piquer industrielle haute performance pour production intensive',
    image: '/img/piqueueses/Jack A5E AMH.png',
    featuresAr: ['أداء صناعي', 'سرعة فائقة', 'دقة عالية', 'تحمل الاستخدام المكثف', 'تقنية متطورة'],
    featuresFr: ['Performance industrielle', 'Vitesse supérieure', 'Haute précision', 'Usage intensif', 'Technologie avancée'],
    rating: 4.9,
    category: 'piqueueses'
  },
  {
    id: 6,
    nameAr: 'ماكينة خياطة Jack H2',
    nameFr: 'Machine à piquer Jack H2',
    descriptionAr: 'ماكينة خياطة موثوقة للاستخدام التجاري والصناعي',
    descriptionFr: 'Machine à piquer fiable pour usage commercial et industriel',
    image: '/img/piqueueses/Jack H2.png',
    featuresAr: ['موثوقية عالية', 'استهلاك طاقة منخفض', 'صيانة سهلة', 'أداء مستقر', 'تصميم قوي'],
    featuresFr: ['Haute fiabilité', 'Faible consommation', 'Maintenance facile', 'Performance stable', 'Design robuste'],
    rating: 4.6,
    category: 'piqueueses'
  },
  {
    id: 7,
    nameAr: 'ماكينة طرز Yuemei رأس واحد',
    nameFr: 'Machine à broder Yuemei 1 tête',
    descriptionAr: 'ماكينة طرز احترافية برأس واحد للتطريز الدقيق والمتقن',
    descriptionFr: 'Machine à broder professionnelle 1 tête pour broderie précise et raffinée',
    image: '/img/آلات الطرز/Machine de broderie Yuemei 1 têtes mm600400).png',
    featuresAr: ['طرز دقيق', 'تحكم رقمي', 'تصاميم متنوعة', 'جودة عالية', 'سهولة البرمجة'],
    featuresFr: ['Broderie précise', 'Contrôle numérique', 'Designs variés', 'Haute qualité', 'Programmation facile'],
    rating: 4.8,
    category: 'آلات الطرز'
  },
  {
    id: 8,
    nameAr: 'ماكينة طرز Yuemei 6 رؤوس',
    nameFr: 'Machine à broder Yuemei 6 têtes',
    descriptionAr: 'ماكينة طرز متعددة الرؤوس للإنتاج التجاري والصناعي',
    descriptionFr: 'Machine à broder multi-têtes pour production commerciale et industrielle',
    image: '/img/آلات الطرز/Machine de broderie Yuemei 6 têtes.png',
    featuresAr: ['6 رؤوس طرز', 'إنتاجية عالية', 'تحكم متقدم', 'جودة احترافية', 'كفاءة في الوقت'],
    featuresFr: ['6 têtes broderie', 'Haute productivité', 'Contrôle avancé', 'Qualité professionnelle', 'Efficacité temporelle'],
    rating: 4.9,
    category: 'آلات الطرز'
  },
  {
    id: 9,
    nameAr: 'ماكينة متخصصة Jack MS-100A',
    nameFr: 'Machine spécialisée Jack MS-100A',
    descriptionAr: 'ماكينة متخصصة للأعمال الدقيقة والتطبيقات الخاصة',
    descriptionFr: 'Machine spécialisée pour travaux précis et applications spéciales',
    image: '/img/آلات متخصصة/Jack MS-100A.png',
    featuresAr: ['تطبيقات خاصة', 'دقة فائقة', 'تحكم متقدم', 'مرونة في العمل', 'جودة استثنائية'],
    featuresFr: ['Applications spéciales', 'Précision supérieure', 'Contrôle avancé', 'Flexibilité de travail', 'Qualité exceptionnelle'],
    rating: 4.7,
    category: 'آلات متخصصة'
  },
  {
    id: 10,
    nameAr: 'ماكينة متخصصة JK-T1790G',
    nameFr: 'Machine spécialisée JK-T1790G',
    descriptionAr: 'ماكينة متخصصة متطورة للاستخدامات الصناعية المتقدمة',
    descriptionFr: 'Machine spécialisée avancée pour usages industriels sophistiqués',
    image: '/img/آلات متخصصة/JK-T1790G.png',
    featuresAr: ['تقنية متطورة', 'أداء صناعي', 'تحكم ذكي', 'موثوقية عالية', 'كفاءة ممتازة'],
    featuresFr: ['Technologie sophistiquée', 'Performance industrielle', 'Contrôle intelligent', 'Haute fiabilité', 'Excellente efficacité'],
    rating: 4.8,
    category: 'آلات متخصصة'
  }
];
