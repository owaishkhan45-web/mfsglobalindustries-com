import { createFileRoute, Link } from '@tanstack/react-router';
import {
  motion, useMotionValue, useSpring, useTransform,
  useMotionTemplate, useInView, type Variants,
} from 'framer-motion';
import { useRef, useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  ArrowRight, CheckCircle, ShieldCheck, Truck, Certificate,
  Handshake, Leaf, Package, ArrowUpRight, Star, Quotes,
} from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1, name: 'Kabuli Chickpeas', origin: 'Rajasthan, India', minOrder: '25 MT',
    cert: 'APEDA Certified', fallback: '#D4A843',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=640&q=80&auto=format&fit=crop',
    desc: 'Bold, creamy white chickpeas. Popular across Middle East & Europe markets.',
    tags: ['Non-GMO', 'Premium Grade'],
  },
  {
    id: 2, name: 'Fresh Bananas', origin: 'Maharashtra, India', minOrder: '10 MT',
    cert: 'Phytosanitary Cert.', fallback: '#F4C430',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=640&q=80&auto=format&fit=crop',
    desc: 'G9 Cavendish variety. Exported to Gulf, SEA and African markets.',
    tags: ['G9 Variety', 'Export Grade'],
  },
  {
    id: 3, name: 'Whole Leaf Tobacco', origin: 'Andhra Pradesh, India', minOrder: '5 MT',
    cert: 'Tobacco Board Cert.', fallback: '#8B7355',
    image: 'https://images.unsplash.com/photo-1564507592333-10cb5dc25ff8?w=640&q=80&auto=format&fit=crop',
    desc: 'Virginia & Burley grades. Air-cured & flue-cured options available.',
    tags: ['Virginia Grade', 'Air-Cured'],
  },
  {
    id: 4, name: 'Areca Nuts', origin: 'Karnataka, India', minOrder: '10 MT',
    cert: 'FSSAI Approved', fallback: '#A0785A',
    image: 'https://images.unsplash.com/photo-1585501572696-2cd72f02bcd7?w=640&q=80&auto=format&fit=crop',
    desc: 'Whole & split varieties. Chikmagalur and Shimoga origin.',
    tags: ['Whole & Split', 'Sun Dried'],
  },
  {
    id: 5, name: 'Sesame Seeds & Maize', origin: 'Madhya Pradesh, India', minOrder: '20 MT',
    cert: 'ISO 9001 Certified', fallback: '#D4A843',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&q=80&auto=format&fit=crop',
    desc: 'White & natural sesame. Yellow maize for feed and food industry.',
    tags: ['Hulled & Natural', 'Food Grade'],
  },
  {
    id: 6, name: 'Desi Chickpeas', origin: 'Madhya Pradesh, India', minOrder: '25 MT',
    cert: 'APEDA Certified', fallback: '#C4962A',
    image: 'https://images.unsplash.com/photo-1612003799989-a5e74ccc14e2?w=640&q=80&auto=format&fit=crop',
    desc: 'Small, dark brown variety. Rich in protein. Sought after in South Asian markets.',
    tags: ['High Protein', 'Premium Grade'],
  },
];

const WHY_US = [
  { icon: ShieldCheck, title: 'Quality Guarantee', desc: 'Every batch tested and certified before shipment. ISO 9001 quality management system.' },
  { icon: Certificate, title: 'Full Compliance', desc: 'APEDA, FSSAI, Phytosanitary certificates. All export documentation handled in-house.' },
  { icon: Truck, title: 'Reliable Logistics', desc: 'On-time delivery to 40+ countries. FCL and LCL options with major global carriers.' },
  { icon: Handshake, title: 'Direct Sourcing', desc: 'We buy directly from farmers. No middlemen means better pricing and traceability.' },
  { icon: Leaf, title: 'Sustainable Practices', desc: 'Responsible farming partnerships. Eco-conscious packaging options available.' },
  { icon: Package, title: 'Custom Packaging', desc: 'Private labeling, custom bag sizes (5 kg – 50 kg), and branded packaging on request.' },
];

const STATS = [
  { to: 40, suffix: '+', label: 'Countries Served' },
  { to: 500, suffix: '+', label: 'Satisfied Clients' },
  { to: 6, suffix: '+', label: 'Years Experience' },
  { to: 10, suffix: 'K+', label: 'Tonnes Exported' },
];

const SERVICES = [
  { title: 'Direct Sourcing', desc: 'Farm-to-port procurement across 12 Indian states with full traceability.' },
  { title: 'Quality Inspection', desc: 'Pre-shipment lab testing, moisture checks, and SGS/Bureau Veritas inspections.' },
  { title: 'Export Documentation', desc: 'Certificate of Origin, Phytosanitary, Fumigation, Bill of Lading — all handled.' },
  { title: 'Logistics & Freight', desc: 'Full container load (FCL) and LCL shipping. All major ports covered globally.' },
  { title: 'Custom Packaging', desc: 'Bulk bags, PP bags, jute bags — custom sizes and private labeling available.' },
  { title: 'After-Sales Support', desc: '24/7 WhatsApp support. Dedicated account manager for every client.' },
];

const MARQUEE_ITEMS = [
  '🇮🇳 India', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇰🇼 Kuwait',
  '🇧🇩 Bangladesh', '🇲🇦 Morocco', '🇳🇬 Nigeria', '🇹🇿 Tanzania',
  '🇾🇪 Yemen', '🇩🇿 Algeria', 'APEDA', 'FSSAI', 'ISO 9001', 'Phytosanitary',
];

// ─── Reusable animation variants ─────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
// Pure CSS transforms → GPU compositor only, zero JS frame cost.

const spring = { stiffness: 180, damping: 28, mass: 0.8 };

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), spring);
  const glareXPct = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareYPct = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareXPct}% ${glareYPct}%, rgba(255,255,255,0.22) 0%, transparent 65%)`;

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) / r.width);
    y.set((e.clientY - r.top - r.height / 2) / r.height);
  }, [x, y]);

  const onLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: '900px' }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {/* Glare shimmer — GPU layer, no repaint */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        style={{ background: glare, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

// ─── Animated Count-Up ───────────────────────────────────────────────────────

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const duration = 2200;
    let raf: number;
    function update(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(update);
    }
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function Hero3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), spring);
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28) 0%, transparent 60%)`;

  // Floating badge parallax — moves opposite the tilt for depth illusion
  const badgeX = useSpring(useTransform(x, [-0.5, 0.5], [12, -12]), spring);
  const badgeY = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), spring);
  const tagX   = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring);
  const tagY   = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), spring);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) / r.width);
    y.set((e.clientY - r.top - r.height / 2) / r.height);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: '1100px' }}
      className="relative cursor-pointer"
    >
      {/* Main card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1B2B4B]" style={{ aspectRatio: '4/5', maxHeight: 480 }}>
        <img
          src={PRODUCTS[0].image} alt={PRODUCTS[0].name}
          className="w-full h-full object-cover opacity-90"
          loading="eager"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4B]/75 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C4962A] text-white text-xs font-bold mb-2">Featured Export</span>
          <h3 className="font-display text-2xl text-white">{PRODUCTS[0].name}</h3>
          <p className="text-white/65 text-sm mt-0.5">{PRODUCTS[0].origin}</p>
        </div>
      </div>

      {/* Glare overlay */}
      <motion.div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: glare }} />

      {/* Floating badge — moves opposite card for depth */}
      <motion.div
        style={{ x: badgeX, y: badgeY }}
        className="absolute -bottom-7 -left-9 bg-white rounded-2xl shadow-2xl p-4 border border-[#F0EDE6] z-20"
      >
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle weight="fill" size={16} className="text-green-500" />
          <span className="text-xs font-semibold text-[#1A1714]">Quality Verified</span>
        </div>
        <p className="text-[11px] text-[#7A7268]">{PRODUCTS[0].cert}</p>
      </motion.div>

      {/* Corner tag — moves same direction for foreground illusion */}
      <motion.div
        style={{ x: tagX, y: tagY }}
        className="absolute -top-5 -right-5 bg-[#1B2B4B] text-white rounded-2xl shadow-xl px-4 py-3 z-20"
      >
        <p className="text-[10px] text-white/55">Serving</p>
        <p className="font-display text-xl font-semibold">40+ Nations</p>
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  const { t } = useLanguage();

  const words = t.hero.title.split('\\n');

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #F8F5EE 0%, #EDE8DC 60%, #E4DECE 100%)' }}
    >
      {/* Animated background blobs — CSS, GPU only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[6%] w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, #C4962A 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-28 left-[3%] w-56 h-56 rounded-full"
          style={{ background: 'radial-gradient(circle, #1B2B4B 0%, transparent 70%)' }}
        />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <defs>
            <pattern id="hgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1B2B4B" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hgrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 w-full grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="inline-block w-8 h-px bg-[#C4962A]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C4962A]">{t.hero.tag}</span>
          </motion.div>

          {/* Word-by-word headline reveal */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.07] text-[#1A1714] mb-6">
            {words.map((line, li) => (
              <motion.span
                key={li}
                className={`block ${li === 1 ? 'text-gold' : ''}`}
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 + li * 0.22 } },
                }}
              >
                {line.split(' ').map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.3em]"
                    variants={{
                      hidden: { opacity: 0, y: 32, rotateX: -40 },
                      show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    style={{ transformPerspective: '600px' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg text-[#5A5248] leading-relaxed max-w-xl mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-[15px] font-semibold text-white btn-primary"
            >
              {t.hero.cta} <ArrowUpRight weight="bold" size={18} />
            </Link>
            <a href="#products"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-[15px] font-semibold text-[#1B2B4B] bg-white/80 border border-[#E5E1D8] hover:bg-white hover:shadow-md transition"
            >
              {t.hero.learnMore} <ArrowRight weight="bold" size={16} />
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-8 pt-8 border-t border-[#D8D3C8]"
          >
            {STATS.slice(0, 3).map(s => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-gold">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-xs text-[#7A7268] mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-center"
        >
          <Hero3DCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-widest uppercase text-[#7A7268]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C4962A] to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── Marquee Strip ───────────────────────────────────────────────────────────

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="bg-[#1B2B4B] py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-sm text-white/80 font-medium">
            {item}<span className="text-[#C4962A] font-bold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Products Section ────────────────────────────────────────────────────────

function ProductsSection() {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-24 px-6 bg-[#FAFAF7]">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14">
          <p className="section-tag justify-center mb-3"><span className="inline-block w-6 h-px bg-[#C4962A]" />{t.products.tag}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#1A1714] mb-4">{t.products.title}</h2>
          <p className="text-[#7A7268] text-lg max-w-xl mx-auto">{t.products.subtitle}</p>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {PRODUCTS.map((p, i) => (
            <motion.div key={p.id} variants={i % 2 === 0 ? fadeUp : fadeRight}>
              <TiltCard className="group bg-white rounded-3xl border border-[#E5E1D8] overflow-visible shadow-sm hover:shadow-xl transition-all duration-400 h-full card-shine">
                {/* Card body with overflow-hidden only on image */}
                <div className="rounded-3xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden" style={{ background: p.fallback + '30' }}>
                    <img
                      src={p.image} alt={p.name} loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.parentElement!.style.background = p.fallback + '50'; e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/90 text-[11px] font-semibold text-[#1B2B4B]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-display text-xl text-[#1A1714]">{p.name}</h3>
                      <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FDF8EE] text-[#C4962A] border border-[#E8C56A]/40">{p.cert}</span>
                    </div>
                    <p className="text-sm text-[#7A7268] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE6]">
                      <div><p className="text-[10px] text-[#B0A99F] uppercase tracking-wider">Min. Order</p>
                        <p className="text-sm font-semibold text-[#1A1714]">{p.minOrder}</p></div>
                      <div className="text-right"><p className="text-[10px] text-[#B0A99F] uppercase tracking-wider">Origin</p>
                        <p className="text-sm font-semibold text-[#1A1714]">{p.origin}</p></div>
                    </div>
                    <Link to="/contact"
                      className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white btn-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Request Quote <ArrowRight weight="bold" size={15} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mt-12">
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-[#1B2B4B] bg-white border-2 border-[#E5E1D8] hover:border-[#C4962A] hover:shadow-md transition"
          >
            View All Products & Request a Sample
            <ArrowUpRight weight="bold" size={17} className="text-[#C4962A]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Us ──────────────────────────────────────────────────────────────────

function WhyUsSection() {
  const { t } = useLanguage();
  return (
    <section id="why-us" className="py-24 px-6 bg-[#F0EDE6]">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14">
          <p className="section-tag justify-center mb-3"><span className="inline-block w-6 h-px bg-[#C4962A]" />{t.whyUs.tag}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#1A1714] mb-4">{t.whyUs.title}</h2>
          <p className="text-[#7A7268] text-lg max-w-xl mx-auto">{t.whyUs.subtitle}</p>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={i < 3 ? fadeLeft : fadeRight}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl p-7 border border-[#E5E1D8] hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FDF8EE] mb-5 group-hover:bg-[#C4962A] transition-colors duration-300"
                style={{ transformPerspective: '600px' }}
              >
                <Icon weight="fill" size={26} className="text-[#C4962A] group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#1A1714] mb-2">{title}</h3>
              <p className="text-sm text-[#7A7268] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────

function StatsSection() {
  const { t } = useLanguage();
  const labels: Record<string, string> = {
    'Countries Served': t.stats.countries,
    'Satisfied Clients': t.stats.clients,
    'Years Experience': t.stats.years,
    'Tonnes Exported': t.stats.tons,
  };
  return (
    <section className="bg-[#1B2B4B] py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center group"
            >
              {/* 3D scale pop on view */}
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                className="font-display text-5xl sm:text-6xl font-semibold text-gold mb-2"
              >
                <CountUp to={s.to} suffix={s.suffix} />
              </motion.p>
              <p className="text-sm text-white/60 tracking-wide">{labels[s.label] || s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 px-6 bg-[#FAFAF7]">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14">
          <p className="section-tag justify-center mb-3"><span className="inline-block w-6 h-px bg-[#C4962A]" />{t.services.tag}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#1A1714] mb-4">{t.services.title}</h2>
          <p className="text-[#7A7268] text-lg max-w-xl mx-auto">{t.services.subtitle}</p>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-7 rounded-3xl bg-white border border-[#E5E1D8] hover:border-[#C4962A]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C4962A] text-white flex items-center justify-center font-bold text-sm"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-[#1A1714] mb-2">{title}</h3>
                  <p className="text-sm text-[#7A7268] leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    { name: 'Ahmed Al-Mansouri', role: 'Import Director, Dubai', text: 'MFS Global has been our primary chickpea supplier for 3 years. Consistent quality and always on-time delivery. Highly recommended.' },
    { name: 'Chen Wei', role: 'Procurement Manager, Shanghai', text: 'The documentation process is seamless. All certificates arrive before the shipment. Very professional team.' },
    { name: 'Kwame Asante', role: 'CEO, Accra Trading Co.', text: 'Best quality bananas at competitive pricing. Our go-to supplier from India. 5 stars!' },
  ];
  return (
    <section className="py-24 px-6 bg-[#F0EDE6]">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-14">
          <p className="section-tag justify-center mb-3"><span className="inline-block w-6 h-px bg-[#C4962A]" />Client Reviews</p>
          <h2 className="font-display text-4xl text-[#1A1714]">What Our Clients Say</h2>
          <div className="divider-gold mx-auto mt-6" />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-7">
          {testimonials.map(({ name, role, text }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl p-7 border border-[#E5E1D8] shadow-sm hover:shadow-md transition"
            >
              <Quotes weight="fill" size={32} className="text-[#C4962A]/30 mb-4" />
              <p className="text-[15px] text-[#3A3630] leading-relaxed mb-6">{text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F0EDE6]">
                <motion.div whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#1B2B4B] text-white flex items-center justify-center font-bold text-sm">
                  {name[0]}
                </motion.div>
                <div>
                  <p className="font-semibold text-[#1A1714] text-sm">{name}</p>
                  <p className="text-xs text-[#7A7268]">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #1B2B4B 0%, #0E1C32 100%)' }}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p variants={fadeUp} className="section-tag text-[#C4962A] justify-center mb-5">
            <Star weight="fill" size={16} />Trusted by Importers Worldwide
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to source <span className="text-gold">premium</span><br />Indian commodities?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/65 text-lg mb-10 max-w-2xl mx-auto">
            Get competitive pricing, product samples, and a dedicated export consultant — all within 24 hours.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white btn-primary"
            >
              {t.hero.cta} <ArrowUpRight weight="bold" size={18} />
            </Link>
            <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-[#1B2B4B] bg-[#25D366] hover:bg-[#1db954] transition">
              WhatsApp Us
            </a>
          </motion.div>
          <motion.div variants={fadeUp}
            className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6">
            {['APEDA Registered', 'FSSAI Certified', 'ISO 9001', 'Phytosanitary'].map(cert => (
              <div key={cert} className="flex items-center gap-2">
                <CheckCircle weight="fill" size={16} className="text-[#C4962A]" />
                <span className="text-sm text-white/70">{cert}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function IndexPage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ProductsSection />
      <WhyUsSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export const Route = createFileRoute('/')({ component: IndexPage });
