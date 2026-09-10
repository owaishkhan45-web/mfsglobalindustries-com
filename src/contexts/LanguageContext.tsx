// LanguageContext.tsx — zero external deps
import { createContext, useContext, useState } from 'react';

const translations = {
  EN: {
    nav: { home: 'Home', products: 'Products', whyUs: 'Why Us', services: 'Services', contact: 'Contact' },
    hero: { tag: 'Global Agri Exports', title: 'Premium Agricultural\nExports from India', subtitle: 'Trusted by buyers in 20+ countries. APEDA certified. Direct farm sourcing.', cta: 'Request a Quote', explore: 'Explore Products' },
    contact: { tag: 'Get In Touch', title: 'Request a Quote', subtitle: 'Tell us your requirements. We respond within 24 hours.', name: 'Full Name', email: 'Email', company: 'Company', product: 'Product', message: 'Message', send: 'Send Request', sending: 'Sending…', success: "We'll get back to you within 24 hours.", error: 'Something went wrong. Please try again.' },
  },
  AR: {
    nav: { home: 'الرئيسية', products: 'المنتجات', whyUs: 'لماذا نحن', services: 'خدماتنا', contact: 'اتصل بنا' },
    hero: { tag: 'صادرات زراعية عالمية', title: 'صادرات زراعية\nممتازة من الهند', subtitle: 'موثوق به في أكثر من 20 دولة. معتمد APEDA.', cta: 'طلب عرض سعر', explore: 'استكشف المنتجات' },
    contact: { tag: 'تواصل معنا', title: 'طلب عرض سعر', subtitle: 'أخبرنا بمتطلباتك. نرد خلال 24 ساعة.', name: 'الاسم الكامل', email: 'البريد الإلكتروني', company: 'الشركة', product: 'المنتج', message: 'رسالة', send: 'إرسال الطلب', sending: 'جاري الإرسال…', success: 'سنعود إليك خلال 24 ساعة.', error: 'حدث خطأ. حاول مرة أخرى.' },
  },
  FR: {
    nav: { home: 'Accueil', products: 'Produits', whyUs: 'Pourquoi nous', services: 'Services', contact: 'Contact' },
    hero: { tag: 'Exportations Agricoles', title: 'Exportations agricoles\nde qualité depuis l’Inde', subtitle: 'Approuvé par des acheteurs dans plus de 20 pays. Certifié APEDA.', cta: 'Demander un devis', explore: 'Explorer les produits' },
    contact: { tag: 'Contactez-nous', title: 'Demander un devis', subtitle: 'Décrivez vos besoins. Réponse sous 24h.', name: 'Nom complet', email: 'E-mail', company: 'Société', product: 'Produit', message: 'Message', send: 'Envoyer', sending: 'Envoi…', success: 'Nous vous répondrons sous 24h.', error: 'Une erreur est survenue. Réessayez.' },
  },
  ES: {
    nav: { home: 'Inicio', products: 'Productos', whyUs: 'Por qué nosotros', services: 'Servicios', contact: 'Contacto' },
    hero: { tag: 'Exportaciones Agrícolas', title: 'Exportaciones agrícolas\npremiun de la India', subtitle: 'De confianza en más de 20 países. Certificación APEDA.', cta: 'Solicitar cotización', explore: 'Explorar productos' },
    contact: { tag: 'Contáctanos', title: 'Solicitar cotización', subtitle: 'Cuéntanos tus necesidades. Respondemos en 24 horas.', name: 'Nombre completo', email: 'Correo electrónico', company: 'Empresa', product: 'Producto', message: 'Mensaje', send: 'Enviar solicitud', sending: 'Enviando…', success: 'Te responderemos en 24 horas.', error: 'Algo salió mal. Inténtalo de nuevo.' },
  },
};

type Lang = keyof typeof translations;
type Translations = typeof translations.EN;

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  langs: Lang[];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'EN',
  setLang: () => {},
  t: translations.EN,
  langs: ['EN', 'AR', 'FR', 'ES'],
});

export function LanguageProvider({ children }: { children: any }) {
  const [lang, setLang] = useState<Lang>('EN');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], langs: ['EN', 'AR', 'FR', 'ES'] as Lang[] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
