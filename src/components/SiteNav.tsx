import { Link } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { List, X, CaretDown, Globe, ArrowUpRight } from '@phosphor-icons/react';
import { useLanguage, type Lang } from '@/contexts/LanguageContext';
import logo from '@/assets/mfs-logo.asset.json';

const FLAG: Record<Lang, string> = { en: '🇬🇧', ar: '🇸🇦', fr: '🇫🇷', es: '🇪🇸' };

export default function SiteNav() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.products, href: '/#products' },
    { label: t.nav.whyUs, href: '/#why-us' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const langs: Lang[] = ['en', 'ar', 'fr', 'es'];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 sm:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-2 ring-[#C4962A]/20 group-hover:ring-[#C4962A]/50 transition">
              <img src={logo.url} alt="MFS Global" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-[13px] font-bold tracking-[0.12em] text-[#1B2B4B] uppercase">MFS Global</p>
              <p className="text-[10px] tracking-[0.2em] text-[#7A7268] uppercase">Industries</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[14px] font-medium text-[#3A3630] hover:text-[#C4962A] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 origin-left bg-[#C4962A] rounded-full transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Switcher */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-medium text-[#3A3630] hover:bg-[#F0EDE6] transition border border-[#E5E1D8]"
              >
                <Globe weight="regular" size={15} className="text-[#C4962A]" />
                <span>{FLAG[lang]}</span>
                <span className="hidden sm:inline">{t.languages[lang]}</span>
                <CaretDown
                  weight="bold"
                  size={11}
                  className={`text-[#7A7268] transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-44 rounded-2xl bg-white border border-[#E5E1D8] shadow-lg overflow-hidden z-50"
                  >
                    {langs.map(l => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-left hover:bg-[#F8F5EE] transition ${
                          lang === l ? 'text-[#C4962A] font-semibold bg-[#FDF8EE]' : 'text-[#3A3630]'
                        }`}
                      >
                        <span className="text-base">{FLAG[l]}</span>
                        <span>{t.languages[l]}</span>
                        {lang === l && <span className="ml-auto text-[#C4962A] text-xs">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white btn-primary"
            >
              {t.nav.getQuote}
              <ArrowUpRight weight="bold" size={14} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[#E5E1D8] bg-white/70 text-[#1B2B4B] hover:bg-[#F0EDE6] transition"
              aria-label="Open menu"
            >
              <List weight="bold" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E1D8]">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-lg overflow-hidden">
                    <img src={logo.url} alt="MFS" className="h-full w-full object-cover" />
                  </div>
                  <span className="font-bold text-[#1B2B4B] tracking-wide">MFS Global</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#F0EDE6] text-[#3A3630]"
                >
                  <X weight="bold" size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium text-[#1A1714] hover:bg-[#F8F5EE] hover:text-[#C4962A] transition group"
                  >
                    <span className="flex-1">{link.label}</span>
                    <ArrowUpRight weight="bold" size={15} className="text-[#C4962A] opacity-0 group-hover:opacity-100 transition" />
                  </motion.a>
                ))}
              </nav>

              {/* Language + CTA */}
              <div className="px-4 pb-6 space-y-3 border-t border-[#E5E1D8] pt-4">
                <div className="grid grid-cols-4 gap-2">
                  {langs.map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`flex flex-col items-center gap-1 py-2 rounded-xl text-xs font-medium transition ${
                        lang === l
                          ? 'bg-[#FDF8EE] text-[#C4962A] ring-2 ring-[#C4962A]/30'
                          : 'bg-[#F0EDE6] text-[#7A7268] hover:bg-[#E8E4DC]'
                      }`}
                    >
                      <span className="text-xl">{FLAG[l]}</span>
                      <span>{l.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-semibold text-white btn-primary"
                >
                  {t.nav.getQuote} <ArrowUpRight weight="bold" size={15} />
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
