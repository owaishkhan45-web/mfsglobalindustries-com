import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { List, X, CaretDown, Globe } from "@phosphor-icons/react";
import logo from "@/assets/mfs-logo.asset.json";

const links = [
  { label: "Home",     to: "/",        hash: ""          },
  { label: "Products", to: "/",        hash: "#products" },
  { label: "Why Us",   to: "/",        hash: "#why-us"   },
  { label: "Process",  to: "/",        hash: "#process"  },
  { label: "Services", to: "/",        hash: "#services" },
  { label: "Contact",  to: "/contact", hash: ""          },
];

const languages = [
  { code: "EN", label: "English"    },
  { code: "AR", label: "Arabic"     },
  { code: "FR", label: "French"     },
  { code: "ES", label: "Spanish"    },
  { code: "RU", label: "Russian"    },
  { code: "TR", label: "Turkish"    },
  { code: "ZH", label: "Chinese"    },
  { code: "PT", label: "Portuguese" },
  { code: "DE", label: "German"     },
];

export default function SiteNav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [open,      setOpen]      = useState(false);
  const [lang,      setLang]      = useState(languages[0]);
  const [langOpen,  setLangOpen]  = useState(false);
  const location = useLocation();

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close lang dropdown on outside click */
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [langOpen]);

  const isActive = (to: string, hash: string) => {
    if (to === "/contact") return location.pathname === "/contact";
    if (hash) return false; // hash links aren't route-matched
    return location.pathname === "/" && !hash;
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX,
          background: "var(--grad-gold)",
        }}
      />

      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className={`fixed inset-x-0 top-2 z-50 transition-all duration-500 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full px-4 sm:px-5 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-[0_8px_32px_-8px_oklch(0_0_0/0.5)] mx-3 sm:mx-6 py-2"
              : "py-3"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            data-cursor="hover"
          >
            <div className="relative">
              <img
                src={logo.url}
                alt="MFS Global Industries"
                className="h-9 w-9 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  boxShadow: scrolled
                    ? "0 0 0 1px oklch(0.82 0.14 85/0.4), 0 0 18px -4px oklch(0.82 0.14 85/0.35)"
                    : "0 0 0 1px oklch(0.82 0.14 85/0.2)",
                  transition: "box-shadow 0.4s ease",
                }}
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-[13px] font-medium tracking-[0.2em] text-gold-gradient uppercase">
                MFS Global
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Industries
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const active = isActive(l.to, l.hash);
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash || undefined}
                  className={`group relative rounded-full px-3.5 py-1.5 text-[13px] font-light transition-colors duration-200 ${
                    active
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  data-cursor="hover"
                >
                  {/* Pill background on active */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full glass"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                  {/* Underline on hover (non-active) */}
                  {!active && (
                    <span className="pointer-events-none absolute inset-x-3.5 bottom-1 h-px scale-x-0 origin-left bg-gradient-to-r from-[var(--gold)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language picker */}
            <div className="relative hidden md:block">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen((v) => !v); }}
                className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-[12px] text-foreground/80 hover:text-foreground transition-colors duration-200"
                data-cursor="hover"
              >
                <Globe weight="light" size={14} className="text-[var(--gold)]" />
                {lang.code}
                <CaretDown
                  weight="light"
                  size={11}
                  className={`transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0,  scale: 1    }}
                    exit={{    opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-2 w-40 rounded-2xl glass-strong p-1.5 shadow-[0_16px_40px_-8px_oklch(0_0_0/0.5)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`flex items-center justify-between w-full rounded-xl px-3 py-2 text-left text-[12px] transition-colors ${
                          lang.code === l.code
                            ? "text-[var(--gold)] bg-white/5"
                            : "text-foreground/75 hover:text-foreground hover:bg-white/5"
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[10px] tracking-wider text-muted-foreground">
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="btn-gold hidden md:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-medium tracking-wide text-[var(--ink)]"
              data-cursor="hover"
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              aria-label="Open menu"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass transition-colors hover:bg-white/5"
              onClick={() => setOpen(true)}
              data-cursor="hover"
            >
              <List weight="light" size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{  opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{  opacity: 0 }}
              className="absolute inset-0 bg-[var(--ink)]/75 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0      }}
              exit={{    x: "100%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong flex flex-col p-6 pt-7"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <img
                    src={logo.url}
                    alt="MFS"
                    className="h-10 w-10 rounded-full"
                    style={{ boxShadow: "0 0 0 1px oklch(0.82 0.14 85/0.3)" }}
                  />
                  <div className="text-xs tracking-[0.2em] text-gold-gradient uppercase font-medium">
                    MFS Global
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X weight="light" size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0  }}
                    transition={{ delay: 0.06 * i + 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      hash={l.hash || undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 text-[22px] font-light tracking-tight border-b border-white/5 text-foreground/85 hover:text-foreground transition-colors"
                    >
                      {l.label}
                      <span className="h-6 w-6 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="mt-auto space-y-3 pb-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-gold block w-full text-center rounded-full px-5 py-3.5 text-sm font-medium text-[var(--ink)]"
                >
                  Get Free Quote
                </Link>
                <a
                  href="https://wa.me/916266316279"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-full glass px-5 py-3 text-sm font-light text-foreground/80"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
