import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Plus, Minus, Globe, ShieldCheck, Truck,
  CurrencyDollar, Headset, Certificate, Package, Leaf, Factory, Buildings,
  ForkKnife, Storefront, FirstAidKit,
} from "@phosphor-icons/react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

import chickpeas from "@/assets/product-chickpeas.jpg";
import desiChickpeas from "@/assets/product-desi-chickpeas.jpg";
import bananas from "@/assets/product-bananas.jpg";
import cargo from "@/assets/hero-cargo.jpg";
import ginger from "@/assets/product-ginger.jpg";
import garlic from "@/assets/product-garlic.jpg";
import sesame from "@/assets/product-sesame.jpg";
import maize from "@/assets/product-maize.jpg";
import soybeans from "@/assets/product-soybeans.jpg";
import cotton from "@/assets/product-cotton.jpg";
import meat from "@/assets/product-meat.jpg";
import tobaccoLeaf from "@/assets/product-tobacco-leaf.jpg";
import tobaccoGround from "@/assets/product-tobacco-ground.jpg";
import areca from "@/assets/product-areca.jpg";
import rice from "@/assets/product-rice.jpg";
import wheat from "@/assets/product-wheat.jpg";
import turmeric from "@/assets/product-turmeric.jpg";
import cumin from "@/assets/product-cumin.jpg";
import chilli from "@/assets/product-chilli.jpg";
import mangoes from "@/assets/product-mangoes.jpg";
import coriander from "@/assets/product-coriander.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MFS Global Industries — Premium Indian Exports Worldwide" },
      { name: "description", content: "Trusted Indian export company supplying premium spices, agricultural commodities, food products, tobacco, areca nuts and industrial raw materials to buyers worldwide." },
      { property: "og:title", content: "MFS Global Industries — Premium Indian Exports" },
      { property: "og:description", content: "Connecting Indian excellence with global markets — spices, grains, fruits, food & industrial exports." },
      { property: "og:image", content: cargo },
    ],
  }),
  component: HomePage,
});

const heroSlides = [bananas, turmeric, chilli, mangoes, chickpeas, rice, tobaccoLeaf, areca];

const products = [
  // Spices
  { name: "Turmeric Powder", origin: "India", grade: "5% Curcumin · Erode", img: turmeric, tag: "Spices" },
  { name: "Whole Red Chilli", origin: "India", grade: "Teja · Sannam", img: chilli, tag: "Spices" },
  { name: "Cumin Seeds", origin: "India", grade: "Machine Cleaned 99%", img: cumin, tag: "Spices" },
  { name: "Coriander Seeds", origin: "India", grade: "Eagle · Green", img: coriander, tag: "Spices" },
  // Grains & Pulses
  { name: "Basmati Rice", origin: "India", grade: "1121 Steam · Sella", img: rice, tag: "Grains" },
  { name: "Indian Wheat", origin: "India", grade: "Sharbati · Milling", img: wheat, tag: "Grains" },
  { name: "Kabuli Chickpeas", origin: "India", grade: "Grade A · 10–12mm", img: chickpeas, tag: "Pulses" },
  { name: "Desi Chickpeas", origin: "India", grade: "Kala Chana", img: desiChickpeas, tag: "Pulses" },
  { name: "Premium Maize", origin: "India", grade: "Non-GMO Yellow", img: maize, tag: "Grains" },
  { name: "Non-GMO Soybeans", origin: "India", grade: "Export Grade", img: soybeans, tag: "Grains" },
  { name: "Sesame Seeds", origin: "India", grade: "Natural 99.95%", img: sesame, tag: "Seeds" },
  // Fresh
  { name: "Alphonso Mangoes", origin: "India", grade: "Ratnagiri · Devgad", img: mangoes, tag: "Fresh" },
  { name: "Cavendish Bananas", origin: "India", grade: "Export Premium", img: bananas, tag: "Fresh" },
  { name: "Fresh Ginger", origin: "India", grade: "Export Quality", img: ginger, tag: "Fresh" },
  { name: "Fresh Garlic", origin: "India", grade: "Premium White", img: garlic, tag: "Fresh" },
  // Specialty
  { name: "Whole Leaf Tobacco", origin: "India", grade: "Sun-Cured FCV", img: tobaccoLeaf, tag: "Tobacco" },
  { name: "Ground Tobacco", origin: "India", grade: "Fine Cut · Export", img: tobaccoGround, tag: "Tobacco" },
  { name: "Areca Nuts", origin: "India", grade: "Whole & Split", img: areca, tag: "Nuts" },
  { name: "Buffalo Meat", origin: "India", grade: "Halal Frozen", img: meat, tag: "Frozen" },
  { name: "100% Cotton Yarn", origin: "India", grade: "Combed Ring-Spun", img: cotton, tag: "Textile" },
];

const stats = [
  { v: 20, suffix: "+", label: "Product Categories" },
  { v: 15, suffix: "+", label: "Countries Served" },
  { v: 99, suffix: "%", label: "On-Time Shipments" },
  { v: 100, suffix: "%", label: "Quality Inspection" },
];


const features = [
  { icon: ShieldCheck, title: "International Quality", desc: "Compliance with ISO, HACCP, FSSAI, and destination-country standards on every shipment." },
  { icon: Truck, title: "Reliable Logistics", desc: "Strategic port relationships across Mundra, Nhava Sheva and Kolkata for on-time delivery." },
  { icon: CurrencyDollar, title: "Competitive Pricing", desc: "Direct sourcing partnerships eliminate intermediaries and deliver consistent margins." },
  { icon: Headset, title: "Dedicated Support", desc: "A single export manager handles documentation, inspection and post-shipment queries." },
];

const faqs = [
  { q: "What is the Minimum Order Quantity?", a: "MOQ varies by product. Typically one 20ft container (~18-22 MT) for most commodities. Mixed containers are possible for sample orders." },
  { q: "What payment terms do you accept?", a: "We accept TT (30% advance, 70% against BL copy), Irrevocable LC at sight, and DA terms for repeat partners after due diligence." },
  { q: "Which shipping methods are available?", a: "FCL & LCL via sea, refrigerated containers for perishables, and air freight for time-sensitive samples." },
  { q: "What is your typical lead time?", a: "10-15 days for production-to-FOB, plus transit time of 7-35 days depending on destination port." },
  { q: "Which Incoterms do you operate on?", a: "FOB, CIF, CFR, EXW, and DAP. We provide transparent breakdowns for each in the quotation." },
  { q: "How do you assure quality?", a: "Pre-shipment inspection by SGS, Intertek or Bureau Veritas (buyer's choice), plus our internal QC at origin." },
  { q: "Do you provide samples?", a: "Yes, courier samples are available. Sample cost is refundable against confirmed order." },
  { q: "Do you offer custom branding / private label?", a: "Yes, available in our Enterprise Supply Partnership tier with dedicated artwork management." },
];

function useCount(target: number, start: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return v;
}

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <PageLoader />
      <Hero />
      <TrustBar />
      <About />
      <Products />
      <WhyUs />
      <Industries />
      <ExportProcess />
      <GlobalPresence />
      <Services />
      <FAQ />
      <CTA />
    </div>
  );
}


function PageLoader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--ink)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative h-16 w-16">
              <span className="absolute inset-0 rounded-full border border-[var(--gold)]/30" />
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-[var(--gold)]"
              />
            </div>
            <div className="text-[11px] tracking-[0.35em] text-gold-gradient uppercase">MFS Global</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-32 pb-20 overflow-hidden">
      {/* Spline 3D Earth background */}
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--grad-hero)" }} />
        <iframe
          src="https://my.spline.design/earthdayandnight-j6gM7Er8BPhYlPljbPBx2n9R/"
          title="Earth"
          loading="lazy"
          className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen"
          style={{ border: 0, pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-transparent to-[var(--background)]" />
        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[var(--gold)]/40 animate-float"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                animationDelay: `${(i % 7) * 0.6}s`,
                animationDuration: `${6 + (i % 5)}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] tracking-[0.25em] uppercase text-foreground/85"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Indian Exporter · Global Reach
          </motion.div>

          <h1 className="mt-7 text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] font-light tracking-tight">
            {"Connecting Indian Excellence with ".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.07 }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 1 }}
              className="text-gold-gradient italic font-light"
            >
              Global Markets
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-7 max-w-xl text-[15px] sm:text-base font-light leading-relaxed text-foreground/75"
          >
            MFS Global Industries is a trusted Indian export company specialising in premium spices, agricultural commodities, food products, tobacco, areca nuts and industrial raw materials — with consistent quality, competitive pricing and reliable logistics to buyers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--ink)]"
              style={{ background: "var(--grad-gold)", boxShadow: "var(--shadow-glow)" }}
              data-cursor="hover"
            >
              Get Free Quote
              <ArrowUpRight weight="bold" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-light text-foreground/90 hover:text-foreground"
              data-cursor="hover"
            >
              View Products
              <ArrowRight weight="light" size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 1 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { k: "20+", v: "Categories" },
              { k: "15+", v: "Countries" },
              { k: "24h", v: "Quotation" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-light text-gold-gradient">{s.k}</div>
                <div className="text-[11px] mt-1 uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero slider card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] sm:aspect-[5/6] w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] opacity-60" style={{ background: "var(--grad-radial-gold)" }} />
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong">
            <AnimatePresence mode="wait">
              <motion.img
                key={idx}
                src={heroSlides[idx]}
                alt="Premium export commodity"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
                width={1024}
                height={1280}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/90">Featured Export</div>
                <div className="mt-1 text-lg font-light">Premium Indian Commodities</div>
              </div>
              <div className="flex items-center gap-1.5">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`} className="h-1 rounded-full transition-all"
                    style={{ width: i === idx ? 22 : 6, background: i === idx ? "var(--grad-gold)" : "oklch(1 0 0 / 0.3)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">{children}</span>
    </div>
  );
}

function StatCard({ target, suffix, label, start }: { target: number; suffix: string; label: string; start: boolean }) {
  const v = useCount(target, start);
  return (
    <div className="rounded-3xl glass p-7 h-full">
      <div className="text-5xl font-light text-gold-gradient tabular-nums">{v}{suffix}</div>
      <div className="mt-3 h-px hairline" />
      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal><SectionLabel>About MFS</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02]">
              Decades of sourcing,<br/> <span className="text-gold-gradient italic">curated for the world.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-foreground/75 font-light leading-relaxed max-w-xl">
              From Madhya Pradesh farms to Mundra port, MFS Global Industries is built on long-term relationships with growers, processors and mills. Every container is traceable, every shipment quality-assured.
            </p>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 max-w-xl">
            {[
              "Indian sourcing expertise",
              "Global quality standards",
              "Reliable supply chain",
              "Ethical sourcing",
              "Transparent business",
              "Long-term partnerships",
            ].map((x) => (
              <StaggerItem key={x}>
                <div className="flex items-start gap-2.5 text-sm font-light text-foreground/80">
                  <Check weight="bold" size={14} className="mt-0.5 text-[var(--gold)] shrink-0" />
                  {x}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <StatCard target={s.v} suffix={s.suffix} label={s.label} start={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><SectionLabel>Our Catalogue</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light max-w-2xl leading-[1.02]">
                Premium products,<br/> <span className="text-gold-gradient italic">export-ready.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-light" data-cursor="hover">
              Request Catalogue <ArrowUpRight weight="light" size={14} />
            </a>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass" data-cursor="hover">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={820}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="rounded-full glass-strong px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase">🇮🇳 {p.origin}</span>
                    <span className="rounded-full px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase text-[var(--ink)]" style={{ background: "var(--grad-gold)" }}>{p.tag}</span>
                  </div>
                </div>
                <div className="p-5 -mt-12 relative">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]/90">{p.grade}</div>
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-light">{p.name}</h3>
                    <span className="grid place-items-center h-9 w-9 rounded-full glass transition group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold)]">
                      <ArrowUpRight weight="light" size={16} />
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><SectionLabel>Why Choose Us</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02]">
              Built for serious <span className="text-gold-gradient italic">importers.</span>
            </h2>
          </Reveal>
        </div>
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-full rounded-3xl glass p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(212,175,55,0.4)]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "var(--grad-gold)" }}>
                  <f.icon weight="light" size={22} className="text-[var(--ink)]" />
                </div>
                <h3 className="mt-6 text-xl font-light">{f.title}</h3>
                <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}


function GlobalPresence() {
  const dots = [
    { x: 70, y: 38, label: "UAE" }, { x: 65, y: 42, label: "Saudi" },
    { x: 60, y: 36, label: "Turkey" }, { x: 62, y: 44, label: "Egypt" },
    { x: 82, y: 52, label: "Malaysia" }, { x: 83, y: 48, label: "Vietnam" },
    { x: 56, y: 70, label: "S.Africa" }, { x: 50, y: 30, label: "Germany" },
    { x: 48, y: 30, label: "UK" },
  ];
  const origin = { x: 73, y: 46 }; // India
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <div>
            <Reveal><SectionLabel>Global Presence</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02]">
                Shipping to <span className="text-gold-gradient italic">15+ countries.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-foreground/75 font-light leading-relaxed max-w-md">
                Direct routes from Indian ports to Middle East, Africa, Europe and Southeast Asia — backed by our partnerships with the world's leading liners.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[16/9] rounded-3xl glass overflow-hidden">
              <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
                <defs>
                  <radialGradient id="ocean" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="oklch(0.32 0.10 260 / 0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="100" height="60" fill="url(#ocean)" />
                {/* dotted world */}
                {Array.from({ length: 500 }).map((_, i) => {
                  const x = (i * 7) % 100;
                  const y = ((i * 11) % 60);
                  // simple landmask via random
                  const land = ((Math.sin(x * 0.4) + Math.cos(y * 0.5)) > 0.2);
                  if (!land) return null;
                  return <circle key={i} cx={x} cy={y} r="0.25" fill="oklch(1 0 0 / 0.18)" />;
                })}
                {dots.map((d, i) => (
                  <g key={i}>
                    <motion.path
                      d={`M ${origin.x} ${origin.y} Q ${(origin.x + d.x) / 2} ${Math.min(origin.y, d.y) - 8} ${d.x} ${d.y}`}
                      stroke="oklch(0.82 0.13 85 / 0.7)" strokeWidth="0.25" fill="none"
                      strokeDasharray="60" strokeDashoffset="60"
                      initial={{ strokeDashoffset: 60 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: i * 0.15, ease: "easeOut" }}
                    />
                    <circle cx={d.x} cy={d.y} r="0.5" fill="oklch(0.92 0.12 88)" />
                    <circle cx={d.x} cy={d.y} r="1.2" fill="oklch(0.82 0.13 85 / 0.3)" />
                  </g>
                ))}
                <circle cx={origin.x} cy={origin.y} r="1" fill="oklch(0.92 0.12 88)" />
                <circle cx={origin.x} cy={origin.y} r="2.2" fill="oklch(0.82 0.13 85 / 0.35)">
                  <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">India · Origin</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    name: "Standard Export", tag: "Essentials",
    items: ["Container Booking", "Standard Documentation", "Export Support", "Sea Freight Coordination"],
  },
  {
    name: "Professional Export", tag: "Most Chosen", highlight: true,
    items: ["Priority Logistics", "Third-Party Quality Inspection", "Dedicated Export Manager", "Fast-Track Documentation", "Tracking Dashboard"],
  },
  {
    name: "Enterprise Partnership", tag: "Bespoke",
    items: ["Long-Term Annual Contracts", "Custom & OEM Packaging", "Private Label Manufacturing", "Dedicated Procurement Team", "Quarterly Business Reviews"],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><SectionLabel>Service Packages</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02]">
              Engagement tiers, <span className="text-gold-gradient italic">tailored.</span>
            </h2>
          </Reveal>
        </div>
        <StaggerGroup className="grid gap-5 lg:grid-cols-3 items-stretch">
          {services.map((s) => (
            <StaggerItem key={s.name}>
              <div className={`relative h-full rounded-3xl p-8 ${s.highlight ? "glass-strong ring-1 ring-[var(--gold)]/40" : "glass"}`}>
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[var(--ink)]" style={{ background: "var(--grad-gold)" }}>
                    Recommended
                  </div>
                )}
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">{s.tag}</div>
                <h3 className="mt-3 text-3xl font-light">{s.name}</h3>
                <div className="mt-6 h-px hairline" />
                <ul className="mt-6 space-y-3.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm font-light text-foreground/85">
                      <Check weight="bold" size={14} className="mt-0.5 text-[var(--gold)]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 block text-center rounded-full px-5 py-3 text-sm font-medium ${s.highlight ? "text-[var(--ink)]" : "glass text-foreground"}`}
                  style={s.highlight ? { background: "var(--grad-gold)" } : undefined}
                  data-cursor="hover"
                >
                  Request Engagement
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal><SectionLabel>Frequently Asked</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02]">
              Export questions, <span className="text-gold-gradient italic">answered.</span>
            </h2>
          </Reveal>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="rounded-2xl glass overflow-hidden">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left" data-cursor="hover">
                    <span className="text-base sm:text-lg font-light">{f.q}</span>
                    <span className="grid place-items-center h-8 w-8 rounded-full bg-white/5 shrink-0">
                      {isOpen ? <Minus weight="light" size={14} /> : <Plus weight="light" size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm font-light text-foreground/75 leading-relaxed">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 opacity-50" style={{ background: "var(--grad-radial-gold)" }} />
            <div className="relative">
              <SectionLabel>Start Sourcing</SectionLabel>
              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02] max-w-3xl mx-auto">
                Ready to import from <span className="text-gold-gradient italic">India?</span>
              </h2>
              <p className="mt-5 text-foreground/75 font-light max-w-xl mx-auto">
                Share your specifications and we'll respond with a transparent quotation within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--ink)]" style={{ background: "var(--grad-gold)", boxShadow: "var(--shadow-glow)" }} data-cursor="hover">
                  Get Free Quote <ArrowUpRight weight="bold" size={16}/>
                </Link>
                <a href="https://wa.me/916266316279" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-light" data-cursor="hover">
                  WhatsApp <Globe weight="light" size={14}/>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
