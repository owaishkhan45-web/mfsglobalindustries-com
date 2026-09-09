import { Link } from '@tanstack/react-router';
import { EnvelopeSimple, WhatsappLogo, LinkedinLogo, InstagramLogo, FacebookLogo, MapPin, ArrowRight } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/mfs-logo.asset.json';

export default function SiteFooter() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.products, href: '/#products' },
    { label: t.nav.whyUs, href: '/#why-us' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const products = [
    'Kabuli Chickpeas', 'Fresh Bananas', 'Whole Leaf Tobacco',
    'Areca Nuts', 'Sesame & Maize', 'Buffalo Meat',
  ];

  const socials = [
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: InstagramLogo, href: '#', label: 'Instagram' },
    { icon: FacebookLogo, href: '#', label: 'Facebook' },
    { icon: WhatsappLogo, href: 'https://wa.me/916266316279', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#1B2B4B] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1.2fr_1.4fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl overflow-hidden ring-2 ring-white/10">
                <img src={logo.url} alt="MFS Global" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-bold tracking-wider text-white">MFS Global Industries</p>
                <p className="text-xs text-white/50 tracking-widest uppercase">Premium Exporter</p>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs mb-6">
              {t.footer.tagline} Connecting India’s finest produce with buyers across 40+ nations since 2018.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-[#C4962A]/20 hover:text-[#C4962A] transition text-white/70"
                >
                  <Icon weight="fill" size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-[#C4962A] transition group"
                  >
                    <ArrowRight weight="bold" size={12} className="opacity-0 group-hover:opacity-100 transition" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">{t.footer.products}</h4>
            <ul className="space-y-2.5">
              {products.map(p => (
                <li key={p}>
                  <a href="/#products" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#C4962A] transition group">
                    <ArrowRight weight="bold" size={12} className="opacity-0 group-hover:opacity-100 transition" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:exports@mfsglobalindustries.com" className="flex items-start gap-3 text-sm text-white/70 hover:text-[#C4962A] transition">
                  <EnvelopeSimple weight="fill" size={16} className="mt-0.5 shrink-0 text-[#C4962A]" />
                  <span>exports@mfsglobalindustries.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/916266316279" className="flex items-center gap-3 text-sm text-white/70 hover:text-[#C4962A] transition">
                  <WhatsappLogo weight="fill" size={16} className="shrink-0 text-[#C4962A]" />
                  <span>+91 62663 16279</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin weight="fill" size={16} className="mt-0.5 shrink-0 text-[#C4962A]" />
                  <span>Madhya Pradesh, India</span>
                </div>
              </li>
            </ul>

            {/* Mini CTA */}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-primary"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 mx-6">
        <div className="mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} MFS Global Industries. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/70 transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white/70 transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
