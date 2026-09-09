import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'ar' | 'fr' | 'es';

const translations = {
  en: {
    languages: { en: 'English', ar: 'Arabic', fr: 'French', es: 'Spanish' },
    nav: { home: 'Home', products: 'Products', whyUs: 'Why Us', services: 'Services', contact: 'Contact', getQuote: 'Get a Quote' },
    hero: {
      tag: 'Premium Agricultural Exporter — India',
      title: 'Global Sourcing.\\nPremium Quality.',
      subtitle: 'MFS Global Industries exports the finest Indian agricultural commodities to 40+ countries. APEDA certified, ISO quality-assured, delivered on time — every time.',
      cta: 'Request a Quote',
      learnMore: 'View Products',
    },
    products: {
      tag: 'Our Products',
      title: 'Premium Export Commodities',
      subtitle: 'Sourced directly from farmers across India. Every product certified, tested, and export-ready.',
    },
    whyUs: {
      tag: 'Why Choose Us',
      title: 'The MFS Advantage',
      subtitle: 'Six reasons why importers across 40+ nations trust MFS Global as their preferred Indian exporter.',
    },
    stats: { countries: 'Countries Served', clients: 'Satisfied Clients', years: 'Years Experience', tons: 'Tonnes Exported' },
    services: {
      tag: 'Our Services',
      title: 'End-to-End Export Solutions',
      subtitle: 'From farm sourcing to port delivery, we manage every step of your supply chain.',
    },
    contact: {
      tag: 'Get in Touch',
      title: 'Request a Quote',
      subtitle: 'Reach out for competitive pricing, product samples, or any trade inquiry.',
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company / Organisation',
      product: 'Product of Interest',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending…',
      success: 'Thank you! Our team will respond within 24 business hours.',
      error: 'Something went wrong. Please try again or contact us via WhatsApp.',
    },
    footer: {
      tagline: 'Premium agricultural commodities exported from the heart of India.',
      quickLinks: 'Quick Links',
      products: 'Products',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
  ar: {
    languages: { en: 'English', ar: 'العربية', fr: 'Français', es: 'Español' },
    nav: { home: 'الرئيسية', products: 'المنتجات', whyUs: 'لماذا نحن', services: 'خدماتنا', contact: 'اتصل بنا', getQuote: 'اطلب عرض سعر' },
    hero: {
      tag: 'مصدّر زراعي متميز — الهند',
      title: 'مصدر عالمي.\\nجودة فائقة.',
      subtitle: 'تصدّر شركة MFS العالمية أجود السلع الزراعية الهندية إلى أكثر من 40 دولة.',
      cta: 'اطلب عرض سعر',
      learnMore: 'عرض المنتجات',
    },
    products: {
      tag: 'منتجاتنا',
      title: 'سلع تصدير ممتازة',
      subtitle: 'مصدرها مباشرة من المزارعين عبر الهند.',
    },
    whyUs: {
      tag: 'لماذا تختارنا',
      title: 'ميزة MFS',
      subtitle: 'ستة أسباب تجعل المستوردين يثقون بنا.',
    },
    stats: { countries: 'دولة تم خدمتها', clients: 'عملاء راضون', years: 'سنوات خبرة', tons: 'طن تم تصديره' },
    services: {
      tag: 'خدماتنا',
      title: 'حلول تصدير شاملة',
      subtitle: 'ندير كل مرحلة من المزرعة حتى الميناء.',
    },
    contact: {
      tag: 'تواصل معنا',
      title: 'اطلب عرض سعر',
      subtitle: 'اتصل بنا للحصول على أسعار تنافسية.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      company: 'الشركة',
      product: 'المنتج',
      message: 'رسالتك',
      send: 'إرسال',
      sending: 'جاري الإرسال…',
      success: 'شكرًا! سيرد فريقنا خلال 24 ساعة.',
      error: 'حدث خطأ. حاول مجددًا.',
    },
    footer: {
      tagline: 'سلع زراعية متميزة من الهند.',
      quickLinks: 'روابط سريعة',
      products: 'المنتجات',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
  },
  fr: {
    languages: { en: 'English', ar: 'Arabe', fr: 'Français', es: 'Espagnol' },
    nav: { home: 'Accueil', products: 'Produits', whyUs: 'Pourquoi nous', services: 'Services', contact: 'Contact', getQuote: 'Demander un devis' },
    hero: {
      tag: 'Exportateur Agricole Premium — Inde',
      title: 'Sourcing Mondial.\\nQualité Premium.',
      subtitle: 'MFS Global Industries exporte les meilleures denrées agricoles indiennes vers 40+ pays.',
      cta: 'Demander un devis',
      learnMore: 'Voir les produits',
    },
    products: {
      tag: 'Nos Produits',
      title: 'Produits d’Exportation Premium',
      subtitle: 'Sourcing direct auprès des agriculteurs indiens. Chaque produit certifié et prêt à l’export.',
    },
    whyUs: {
      tag: 'Pourquoi Nous Choisir',
      title: 'L’Avantage MFS',
      subtitle: 'Six raisons pour lesquelles les importateurs font confiance à MFS Global.',
    },
    stats: { countries: 'Pays Servis', clients: 'Clients Satisfaits', years: 'Ans d’Expérience', tons: 'Tonnes Exportées' },
    services: {
      tag: 'Nos Services',
      title: 'Solutions Export Clés en Main',
      subtitle: 'De la ferme au port, nous gérons chaque étape.',
    },
    contact: {
      tag: 'Nous Contacter',
      title: 'Demander un Devis',
      subtitle: 'Contactez-nous pour des prix compétitifs ou des échantillons.',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      company: 'Société',
      product: 'Produit souhaité',
      message: 'Votre message',
      send: 'Envoyer',
      sending: 'Envoi en cours…',
      success: 'Merci ! Notre équipe vous répondra dans les 24 heures.',
      error: 'Une erreur est survenue. Veuillez réessayer.',
    },
    footer: {
      tagline: 'Produits agricoles premium exportés depuis l’Inde.',
      quickLinks: 'Liens Rapides',
      products: 'Produits',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
    },
  },
  es: {
    languages: { en: 'English', ar: 'Árabe', fr: 'Francés', es: 'Español' },
    nav: { home: 'Inicio', products: 'Productos', whyUs: 'Por qué nosotros', services: 'Servicios', contact: 'Contacto', getQuote: 'Pedir cotización' },
    hero: {
      tag: 'Exportador Agrícola Premium — India',
      title: 'Abastecimiento Global.\\nCalidad Premium.',
      subtitle: 'MFS Global Industries exporta los mejores productos agrícolas indios a más de 40 países.',
      cta: 'Solicitar cotización',
      learnMore: 'Ver productos',
    },
    products: {
      tag: 'Nuestros Productos',
      title: 'Productos de Exportación Premium',
      subtitle: 'Abastecimiento directo de agricultores de toda la India. Cada producto certificado.',
    },
    whyUs: {
      tag: 'Por Qué Elegirnos',
      title: 'La Ventaja MFS',
      subtitle: 'Seis razones por las que los importadores confían en MFS Global.',
    },
    stats: { countries: 'Países Atendidos', clients: 'Clientes Satisfechos', years: 'Años de Experiencia', tons: 'Toneladas Exportadas' },
    services: {
      tag: 'Nuestros Servicios',
      title: 'Soluciones de Exportación',
      subtitle: 'Gestionamos cada etapa de su cadena de suministro.',
    },
    contact: {
      tag: 'Contáctenos',
      title: 'Solicitar Cotización',
      subtitle: 'Contáctenos para precios competitivos o muestras de productos.',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      company: 'Empresa',
      product: 'Producto de interés',
      message: 'Su mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Gracias! Nuestro equipo responderá en 24 horas.',
      error: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    },
    footer: {
      tagline: 'Productos agrícolas premium exportados desde India.',
      quickLinks: 'Enlaces Rápidos',
      products: 'Productos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de privacidad',
      terms: 'Términos de uso',
    },
  },
} as const;

type Translations = typeof translations.en;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
