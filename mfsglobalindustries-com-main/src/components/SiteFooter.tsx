import { Link } from "@tanstack/react-router";
import { ArrowUpRight, EnvelopeSimple, WhatsappLogo, LinkedinLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import logo from "@/assets/mfs-logo.asset.json";

export default function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px hairline" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="MFS Global Industries" className="h-12 w-12 rounded-full ring-1 ring-[var(--gold)]/30" />
              <div>
                <div className="text-sm tracking-[0.2em] text-gold-gradient uppercase">MFS Global</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Industries</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light text-foreground/65 leading-relaxed">
              Connecting Indian excellence with global markets — premium agricultural commodities, food products, tobacco, areca nuts and industrial raw materials, delivered with consistent quality and reliable logistics.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[LinkedinLogo, InstagramLogo, FacebookLogo, WhatsappLogo].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/5 transition" data-cursor="hover" aria-label="social">
                  <Icon weight="light" size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">Quick Links</div>
            <ul className="space-y-3 text-sm font-light">
              {["About", "Products", "Why Us", "Services", "Contact"].map((x) => (
                <li key={x}><Link to="/" className="text-foreground/75 hover:text-foreground transition" data-cursor="hover">{x}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">Products</div>
            <ul className="space-y-3 text-sm font-light">
              {["Bananas", "Kabuli Chickpeas", "Whole Leaf Tobacco", "Areca Nuts", "Sesame & Maize", "Buffalo Meat"].map((x) => (
                <li key={x}><a href="#products" className="text-foreground/75 hover:text-foreground transition" data-cursor="hover">{x}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-5">Newsletter</div>
            <p className="text-sm font-light text-foreground/65 mb-4">Get monthly export insights and product availability.</p>
            <form className="flex items-center rounded-full glass overflow-hidden p-1">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-foreground/40" />
              <button className="rounded-full px-3 py-2" style={{ background: "var(--grad-gold)" }} data-cursor="hover" aria-label="subscribe">
                <ArrowUpRight weight="light" size={16} className="text-[var(--ink)]" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm font-light text-foreground/70">
              <a href="mailto:mfsglobalindustries@gmail.com" className="flex items-center gap-2 hover:text-foreground" data-cursor="hover"><EnvelopeSimple weight="light" size={14}/> mfsglobalindustries@gmail.com</a>
              <a href="https://wa.me/916266316279" className="flex items-center gap-2 hover:text-foreground" data-cursor="hover"><WhatsappLogo weight="light" size={14}/> +91 6266316279</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} MFS Global Industries. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground" data-cursor="hover">Privacy Policy</a>
            <a href="#" className="hover:text-foreground" data-cursor="hover">Terms</a>
            <a href="#" className="hover:text-foreground" data-cursor="hover">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
