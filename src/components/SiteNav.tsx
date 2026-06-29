import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, CaretDown, Globe } from "@phosphor-icons/react";
import logo from "@/assets/mfs-logo.asset.json";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "Products", to: "/", hash: "#products" },
  { label: "Why Us", to: "/", hash: "#why-us" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Contact", to: "/contact", hash: "" },
];

const languages = ["English", "Arabic", "French", "Spanish", "Russian", "Turkish", "Chinese", "Portuguese", "German"];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full px-4 sm:px-6 transition-all duration-500 ${
            scrolled ? "glass-strong mx-3 sm:mx-6 py-2.5" : "py-3"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 shrink-0" data-cursor="hover">
            <img src={logo.url} alt="MFS Global Industries" className="h-9 w-9 rounded-full ring-1 ring-[var(--gold)]/30" />
            <div className="leading-tight hidden sm:block">
              <div className="text-[13px] font-medium tracking-[0.18em] text-gold-gradient uppercase">MFS Global</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Industries</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash || undefined}
                className="group relative rounded-full px-3 py-1.5 text-[13px] font-light text-foreground/80 transition-colors hover:text-foreground"
                data-cursor="hover"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px scale-x-0 origin-left bg-gradient-to-r from-[var(--gold)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-[12px] text-foreground/85"
                data-cursor="hover"
              >
                <Globe weight="light" size={14} />
                {lang}
                <CaretDown weight="light" size={12} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-2 w-40 rounded-2xl glass-strong p-1.5"
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className="block w-full rounded-xl px-3 py-1.5 text-left text-[12px] hover:bg-white/5"
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-medium tracking-wide text-[var(--ink)]"
              style={{ background: "var(--grad-gold)", boxShadow: "var(--shadow-glow)" }}
              data-cursor="hover"
            >
              Get Quote
            </Link>

            <button
              aria-label="Menu"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass"
              onClick={() => setOpen(true)}
              data-cursor="hover"
            >
              <List weight="light" size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--ink)]/70 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-md glass-strong p-6 pt-7"
            >
              <div className="flex items-center justify-between mb-10">
                <img src={logo.url} alt="MFS" className="h-10 w-10 rounded-full ring-1 ring-[var(--gold)]/30" />
                <button onClick={() => setOpen(false)} className="grid place-items-center w-10 h-10 rounded-full glass" aria-label="Close">
                  <X weight="light" size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      to={l.to}
                      hash={l.hash || undefined}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-2xl font-light tracking-tight border-b border-white/5"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-full px-5 py-3 text-sm font-medium text-[var(--ink)]"
                  style={{ background: "var(--grad-gold)" }}
                >
                  Get Free Quote
                </Link>
                <div className="text-xs text-muted-foreground text-center mt-6">Language: {lang}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
