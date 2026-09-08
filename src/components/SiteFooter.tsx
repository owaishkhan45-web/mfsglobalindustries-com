import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  EnvelopeSimple,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import logo from "@/assets/mfs-logo.asset.json";

const socials = [
  { Icon: LinkedinLogo,  href: "https://linkedin.com/company/mfsglobalindustries",  label: "LinkedIn"  },
  { Icon: InstagramLogo, href: "https://instagram.com/mfsglobalindustries",          label: "Instagram" },
  { Icon: FacebookLogo,  href: "https://facebook.com/mfsglobalindustries",           label: "Facebook"  },
  { Icon: WhatsappLogo,  href: "https://wa.me/916266316279",                          label: "WhatsApp"  },
];

const quickLinks = [
  { label: "About",    href: "/#about"    },
  { label: "Products", href: "/#products" },
  { label: "Why Us",   href: "/#why-us"   },
  { label: "Process",  href: "/#process"  },
  { label: "Services", href: "/#services" },
  { label: "Contact",  href: "/contact"   },
];

const productLinks = [
  "Alphonso Mangoes",
  "Kabuli Chickpeas",
  "Whole Leaf Tobacco",
  "Areca Nuts",
  "Sesame Seeds",
  "Buffalo Meat",
  "Basmati Rice",
  "Turmeric Powder",
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-32">
      {/* Top glow divider */}
      <div className="section-divider" />

      {/* Radial glow backdrop */}
      <div
        className="absolute inset-x-0 top-0 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.60 0.14 42 / 0.14), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 relative">
        {/* Main grid */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

          {/* Brand column */}
          <div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={logo.url}
                  alt="MFS Global Industries"
                  className="h-13 w-13 rounded-full object-cover"
                  style={{
                    boxShadow: "0 0 0 1px oklch(0.82 0.14 85 / 0.35), 0 0 24px -4px oklch(0.82 0.14 85 / 0.3)",
                  }}
                />
              </div>
              <div>
                <div className="text-sm font-medium tracking-[0.22em] text-gold-gradient uppercase">
                  MFS Global
                </div>
                <div className="text-[10px] tracking-[0.32em] text-muted-foreground uppercase mt-0.5">
                  Industries
                </div>
              </div>
            </motion.div>

            <motion.p
              className="mt-6 max-w-sm text-sm font-light text-foreground/60 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Connecting Indian excellence with global markets — premium agricultural
              commodities, food products, tobacco, areca nuts and industrial raw
              materials, delivered with consistent quality and reliable logistics.
            </motion.p>

            {/* Social icons */}
            <motion.div
              className="mt-7 flex items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="group grid place-items-center h-10 w-10 rounded-full glass transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    boxShadow: "0 0 0 1px oklch(1 0 0 / 0.07)",
                  }}
                >
                  <Icon
                    weight="light"
                    size={16}
                    className="text-foreground/60 group-hover:text-[var(--gold)] transition-colors duration-200"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] mb-6">
              Navigate
            </div>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <Link
                    to={href as "/" | "/contact"}
                    className="group flex items-center gap-2 text-sm font-light text-foreground/65 hover:text-foreground transition-colors duration-200"
                    data-cursor="hover"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-4" />
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] mb-6">
              Products
            </div>
            <ul className="space-y-3">
              {productLinks.map((x, i) => (
                <motion.li
                  key={x}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <a
                    href="/#products"
                    className="group flex items-center gap-2 text-sm font-light text-foreground/65 hover:text-foreground transition-colors duration-200"
                    data-cursor="hover"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-4" />
                    {x}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] mb-6">
              Stay Connected
            </div>
            <p className="text-sm font-light text-foreground/60 mb-4 leading-relaxed">
              Monthly export insights, new product availability and market updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center rounded-full glass overflow-hidden p-1"
              style={{ boxShadow: "0 0 0 1px oklch(0.82 0.14 85 / 0.18)" }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-foreground/35"
              />
              <button
                type="submit"
                className="rounded-full px-3 py-2 shrink-0 transition-transform hover:scale-105 active:scale-95"
                style={{ background: "var(--grad-gold)" }}
                data-cursor="hover"
                aria-label="subscribe"
              >
                <ArrowUpRight weight="bold" size={15} className="text-[var(--ink)]" />
              </button>
            </form>

            <div className="mt-7 space-y-3">
              <a
                href="mailto:mfsglobalindustries@gmail.com"
                className="group flex items-center gap-3 text-sm font-light text-foreground/65 hover:text-foreground transition-colors duration-200"
                data-cursor="hover"
              >
                <span
                  className="grid place-items-center h-8 w-8 rounded-full glass shrink-0 group-hover:border-[var(--gold)]/30 transition-colors"
                >
                  <EnvelopeSimple weight="light" size={13} className="text-[var(--gold)]" />
                </span>
                mfsglobalindustries@gmail.com
              </a>
              <a
                href="https://wa.me/916266316279"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-light text-foreground/65 hover:text-foreground transition-colors duration-200"
                data-cursor="hover"
              >
                <span className="grid place-items-center h-8 w-8 rounded-full glass shrink-0 group-hover:border-[var(--gold)]/30 transition-colors">
                  <WhatsappLogo weight="light" size={13} className="text-[var(--gold)]" />
                </span>
                +91 62663 16279
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 section-divider" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full animate-gold-pulse" style={{ background: "var(--gold)" }} />
            © {new Date().getFullYear()} MFS Global Industries. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((x) => (
              <a
                key={x}
                href="#"
                className="hover:text-foreground transition-colors duration-200"
                data-cursor="hover"
              >
                {x}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
