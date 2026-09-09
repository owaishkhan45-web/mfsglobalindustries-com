import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, type Variants } from 'framer-motion';
import { useRef, useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight, CheckCircle, ShieldCheck, Truck,
  Leaf, Package, ArrowUpRight, Star, Globe, Users,
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
    cert: 'TOBACCOBOARD Cert.', fallback: '#8B6914',
    image: 'https://images.unsplash.com/photo-1564507592333-10cb5dc25ff8?w=640&q=80&auto=format&fit=crop',
    desc: 'Virginia & Burley varieties. Compliant with international quality norms.',
    tags: ['Virginia', 'Burley'],
  },
  {
    id: 4, name: 'Areca Nuts', origin: 'Karnataka, India', minOrder: '10 MT',
    cert: 'FSSAI Approved', fallback: '#C4962A',
    image: 'https://images.unsplash.com/photo-1585501572696-2cd72f02bcd7?w=640&q=80&auto=format&fit=crop',
    desc: 'Premium split & whole areca nuts. Sourced from select Karnataka farms.',
    tags: ['Split', 'Whole'],
  },
  {
    id: 5, name: 'Sesame & Maize', origin: 'Madhya Pradesh, India', minOrder: '20 MT',
    cert: 'ISO 9001:2015', fallback: '#E8C97A',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&q=80&auto=format&fit=crop',
    desc: 'Natural & hulled sesame seeds plus yellow maize for feed and food industries.',
    tags: ['Natural', 'Hulled'],
  },
  {
    id: 6, name: 'Desi Chickpeas', origin: 'Madhya Pradesh, India', minOrder: '25 MT',
    cert: 'APEDA Certified', fallback: '#B5860D',
    image: 'https://images.unsplash.com/photo-1612003799989-a5e74ccc14e2?w=640&q=80&auto=format&fit=crop',
    desc: 'Small brown desi chickpeas. High protein, widely used across Asian markets.',
    tags: ['High Protein', 'Asian Grade'],
  },
];

const WHY_US = [
  { icon: ShieldCheck, title: 'Certified Quality', desc: 'APEDA, FSSAI & ISO certified. Every shipment verified by third-party labs.' },
  { icon: Truck, title: 'Reliable Logistics', desc: 'Door-to-port handling, custom clearance, and on-time delivery guarantees.' },
  { icon: Globe, title: '40+ Nations Served', desc: 'Trusted relationships with buyers across Middle East, Europe, SEA & Africa.' },
  { icon: Leaf, title: 'Farm Fresh', desc: 'Direct sourcing from verified Indian farms. Zero middlemen. Maximum freshness.' },
  { icon: Users, title: 'Dedicated Support', desc: 'Personal account managers. 24/7 WhatsApp support. End-to-end visibility.' },
  { icon: Star, title: 'Premium Grade Only', desc: 'We reject up to 30% of supply. Only export-grade produce leaves our warehouses.' },
];

const STATS = [
  { value: 40, suffix: '+', label: 'Nations Served' },
  { value: 2018, suffix: '', label: 'Established' },
  { value: 6, suffix: '+', label: 'Product Lines' },
  { value: 100, suffix: '%', label: 'Export Focused' },
];

const SERVICES = [
  { icon: Package, title: 'Custom Packaging', desc: 'Branded or neutral packing in jute, HDPE or vacuum-sealed formats.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Pre-shipment inspection, lab reports & phytosanitary certification.' },
  { icon: Truck, title: 'Freight & Logistics', desc: 'FOB, CIF, CFR terms. Full documentation & customs support.' },
  { icon: ArrowUpRight, title: 'Market Advisory', desc: 'Commodity pricing insights, seasonal availability & trade consultation.' },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Components ──────────────────────────────────────────────────────────────

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{ background: 'rgba(196,150,42,0.12)', color: '#C4962A', border: '1px solid rgba(196,150,42,0.3)' }}>
      {children}
    </span>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1800;
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -14, y: (px - 0.5) * 14 });
    setGlare({ x: px * 100, y: py * 100, opacity: 0.18 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 70%)`,
          transition: 'opacity 0.2s ease',
        }}
      />
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAF7 0%, #F5F0E8 50%, #EDE5D5 100%)' }}>
      {/* Decorative circles */}
      <div style={{ position:'absolute', top:'-10rem', right:'-10rem', width:'40rem', height:'40rem',
        borderRadius:'50%', background:'rgba(196,150,42,0.07)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-8rem', left:'-8rem', width:'30rem', height:'30rem',
        borderRadius:'50%', background:'rgba(27,43,75,0.05)', pointerEvents:'none' }} />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={fadeUp}>
            <SectionTag>India&apos;s Premier Agricultural Exporter</SectionTag>
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="text-5xl lg:text-7xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1714' }}>
            {t.hero?.headline ?? 'Global Trade,'}
            <br />
            <span style={{ color: '#C4962A' }}>{t.hero?.highlight ?? 'Indian Roots.'}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg max-w-lg leading-relaxed" style={{ color: '#7A7268' }}>
            {t.hero?.sub ?? 'Premium agricultural commodities exported from the heart of India. Connecting India\'s finest produce with buyers across 40+ nations since 2018.'}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm shadow-lg"
              style={{ background: 'linear-gradient(135deg, #C4962A, #A67820)' }}>
              Request a Quote <ArrowRight weight="bold" size={16} />
            </Link>
            <a href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
              style={{ border: '2px solid #C4962A', color: '#C4962A', background: 'transparent' }}>
              View Products
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-8 pt-4">
            {[['40+', 'Nations'], ['2018', 'Founded'], ['6+', 'Products']].map(([val, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold" style={{ color: '#C4962A', fontFamily: 'Playfair Display, serif' }}>{val}</div>
                <div className="text-sm" style={{ color: '#7A7268' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D Hero card */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <TiltCard className="rounded-3xl shadow-2xl overflow-hidden"
            style={{ background: 'white', border: '1px solid rgba(196,150,42,0.2)' } as React.CSSProperties}>
            <img
              src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=800&q=80&auto=format&fit=crop"
              alt="Premium Chickpeas"
              className="w-full object-cover"
              style={{ height: '320px' }}
            />
            <div className="p-6" style={{ background: 'white' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold" style={{ color: '#C4962A' }}>⭐ Featured Product</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(196,150,42,0.1)', color: '#C4962A' }}>APEDA Certified</span>
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1A1714', fontFamily: 'Playfair Display, serif' }}>Kabuli Chickpeas</h3>
              <p className="text-sm" style={{ color: '#7A7268' }}>Rajasthan, India · Min. Order: 25 MT</p>
              <div className="mt-4 flex gap-2">
                {['Non-GMO', 'Premium Grade', 'Export Ready'].map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full"
                    style={{ background: 'rgba(27,43,75,0.07)', color: '#1B2B4B' }}>{tag}</span>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-24 px-6" style={{ background: '#FAFAF7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16 space-y-4">
          <motion.div variants={fadeUp}><SectionTag>{t.products?.tag ?? 'Our Products'}</SectionTag></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1714' }}>
            {t.products?.headline ?? 'Export-Grade Commodities'}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg max-w-2xl mx-auto" style={{ color: '#7A7268' }}>
            {t.products?.sub ?? 'Sourced from certified farms across India\'s finest agricultural belts.'}
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.div key={p.id} variants={i % 2 === 0 ? fadeLeft : fadeRight}>
              <TiltCard className="rounded-2xl overflow-hidden shadow-md"
                style={{ background: 'white', border: '1px solid rgba(196,150,42,0.15)', height: '100%' } as React.CSSProperties}>
                <div className="relative overflow-hidden" style={{ height: '200px', background: p.fallback }}>
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover"
                    style={{ transition: 'transform 0.4s ease' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(255,255,255,0.9)', color: '#C4962A' }}>{p.cert}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#1A1714', fontFamily: 'Playfair Display, serif' }}>{p.name}</h3>
                  <p className="text-xs mb-3" style={{ color: '#C4962A' }}>📍 {p.origin}</p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#7A7268' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(196,150,42,0.1)', color: '#A67820' }}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(196,150,42,0.15)' }}>
                    <span className="text-xs font-medium" style={{ color: '#7A7268' }}>Min: {p.minOrder}</span>
                    <Link to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #C4962A, #A67820)', color: 'white' }}>
                      Get Quote <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const { t } = useLanguage();
  return (
    <section id="why-us" className="py-24 px-6" style={{ background: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16 space-y-4">
          <motion.div variants={fadeUp}><SectionTag>{t.whyUs?.tag ?? 'Why Choose Us'}</SectionTag></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1714' }}>
            {t.whyUs?.headline ?? 'Built for Global Trade'}
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={i < 3 ? fadeLeft : fadeRight}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(196,150,42,0.15)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #C4962A, #A67820)' }}>
                  <Icon size={22} color="white" weight="bold" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1714', fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A7268' }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 px-6" style={{ background: '#1B2B4B' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <motion.div key={s.label}
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 200 } } }}>
              <div className="text-5xl font-bold mb-2" style={{ color: '#C4962A', fontFamily: 'Playfair Display, serif' }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 px-6" style={{ background: '#FAFAF7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16 space-y-4">
          <motion.div variants={fadeUp}><SectionTag>{t.services?.tag ?? 'Our Services'}</SectionTag></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1A1714' }}>
            {t.services?.headline ?? 'End-to-End Export Solutions'}
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={i % 2 === 0 ? fadeLeft : fadeRight}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl text-center"
                style={{ background: 'white', border: '1px solid rgba(196,150,42,0.15)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(196,150,42,0.1)', border: '1px solid rgba(196,150,42,0.25)' }}>
                  <Icon size={26} style={{ color: '#C4962A' }} weight="duotone" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#1A1714', fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A7268' }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const items = ['Kabuli Chickpeas', 'Fresh Bananas', 'Whole Leaf Tobacco', 'Areca Nuts', 'Sesame Seeds', 'Yellow Maize', 'Desi Chickpeas', 'Buffalo Meat'];
  return (
    <div className="py-4 overflow-hidden" style={{ background: '#C4962A' }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-white font-semibold text-sm tracking-wide">
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #1B2B4B 0%, #243860 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          <motion.div variants={fadeUp}>
            <SectionTag>Ready to Trade?</SectionTag>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Let&apos;s Build a
            <span style={{ color: '#C4962A' }}> Lasting Partnership</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Send us your requirements and get a detailed quotation within 24 hours.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-xl"
              style={{ background: 'linear-gradient(135deg, #C4962A, #A67820)' }}>
              Request a Quote <ArrowRight weight="bold" size={18} />
            </Link>
            <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
              style={{ border: '2px solid rgba(196,150,42,0.6)', color: '#C4962A' }}>
              WhatsApp Us
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 pt-8">
            {[CheckCircle, CheckCircle, CheckCircle].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon size={18} style={{ color: '#C4962A' }} weight="fill" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {['No Hidden Fees', '24h Response', 'Certified Quality'][i]}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ProductsSection />
      <WhyUsSection />
      <StatsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}

export const Route = createFileRoute('/')({ component: HomePage });
