import { createFileRoute, Link } from '@tanstack/react-router';
import { useRef, useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  ArrowRight, CheckCircle, ShieldCheck, Truck,
  Leaf, Package, ArrowUpRight, Star, Globe, Users,
} from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

/* ------------------------------------------------------------------ */
/* Scroll-reveal hook                                                    */
/* ------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/* CountUp                                                               */
/* ------------------------------------------------------------------ */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ------------------------------------------------------------------ */
/* TiltCard (pure CSS + React state)                                     */
/* ------------------------------------------------------------------ */
function TiltCard({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const [t, setT] = useState({ rx: 0, ry: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, op: 0 });
  const move = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({ rx: (py - .5) * -14, ry: (px - .5) * 14 });
    setGlare({ x: px * 100, y: py * 100, op: .18 });
  }, []);
  const leave = useCallback(() => {
    setT({ rx: 0, ry: 0 });
    setGlare({ x: 50, y: 50, op: 0 });
  }, []);
  return (
    <div className={className} style={{
      ...style,
      transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
      transition: 'transform .15s ease-out',
      willChange: 'transform',
      position: 'relative',
      overflow: 'hidden',
    }} onMouseMove={move} onMouseLeave={leave}>
      {children}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%,rgba(255,255,255,${glare.op}),transparent 70%)`,
        transition: 'opacity .2s',
      }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal wrapper                                                        */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0, dir = 'up' }: { children: ReactNode; delay?: number; dir?: 'up' | 'left' | 'right' }) {
  const { ref, visible } = useReveal();
  const start = dir === 'up' ? 'translateY(36px)' : dir === 'left' ? 'translateX(-36px)' : 'translateX(36px)';
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : start,
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span style={{
      display: 'inline-block', padding: '.25rem .85rem', borderRadius: '999px',
      fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
      background: 'rgba(196,150,42,.12)', color: '#C4962A', border: '1px solid rgba(196,150,42,.3)',
    }}>{children}</span>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */
const PRODUCTS = [
  { id:1, name:'Kabuli Chickpeas', origin:'Rajasthan', minOrder:'25 MT', cert:'APEDA Certified', fallback:'#D4A843',
    img:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=640&q=80&auto=format&fit=crop',
    desc:'Bold creamy white chickpeas popular across Middle East & Europe.', tags:['Non-GMO','Premium Grade'] },
  { id:2, name:'Fresh Bananas', origin:'Maharashtra', minOrder:'10 MT', cert:'Phytosanitary Cert.', fallback:'#F4C430',
    img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=640&q=80&auto=format&fit=crop',
    desc:'G9 Cavendish variety exported to Gulf, SEA and African markets.', tags:['G9 Variety','Export Grade'] },
  { id:3, name:'Whole Leaf Tobacco', origin:'Andhra Pradesh', minOrder:'5 MT', cert:'TobaccoBoard Cert.', fallback:'#8B6914',
    img:'https://images.unsplash.com/photo-1564507592333-10cb5dc25ff8?w=640&q=80&auto=format&fit=crop',
    desc:'Virginia & Burley varieties compliant with international norms.', tags:['Virginia','Burley'] },
  { id:4, name:'Areca Nuts', origin:'Karnataka', minOrder:'10 MT', cert:'FSSAI Approved', fallback:'#C4962A',
    img:'https://images.unsplash.com/photo-1585501572696-2cd72f02bcd7?w=640&q=80&auto=format&fit=crop',
    desc:'Premium split & whole areca nuts from select Karnataka farms.', tags:['Split','Whole'] },
  { id:5, name:'Sesame & Maize', origin:'Madhya Pradesh', minOrder:'20 MT', cert:'ISO 9001:2015', fallback:'#E8C97A',
    img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&q=80&auto=format&fit=crop',
    desc:'Natural & hulled sesame seeds plus yellow maize for food industries.', tags:['Natural','Hulled'] },
  { id:6, name:'Desi Chickpeas', origin:'Madhya Pradesh', minOrder:'25 MT', cert:'APEDA Certified', fallback:'#B5860D',
    img:'https://images.unsplash.com/photo-1612003799989-a5e74ccc14e2?w=640&q=80&auto=format&fit=crop',
    desc:'High protein small brown chickpeas widely used in Asian markets.', tags:['High Protein','Asian Grade'] },
];

const WHY_US = [
  { Icon: ShieldCheck, title:'Certified Quality', desc:'APEDA, FSSAI & ISO certified. Every shipment verified by third-party labs.' },
  { Icon: Truck,       title:'Reliable Logistics', desc:'Door-to-port handling, custom clearance and on-time delivery guaranteed.' },
  { Icon: Globe,       title:'40+ Nations Served', desc:'Trusted buyers across Middle East, Europe, South East Asia & Africa.' },
  { Icon: Leaf,        title:'Farm Fresh',         desc:'Direct sourcing from verified farms. Zero middlemen. Maximum freshness.' },
  { Icon: Users,       title:'Dedicated Support',  desc:'Personal account managers & 24/7 WhatsApp support end-to-end.' },
  { Icon: Star,        title:'Premium Grade Only', desc:'We reject up to 30% of supply. Only export-grade produce leaves us.' },
];

const STATS = [
  { value:40,   suffix:'+',  label:'Nations Served' },
  { value:2018, suffix:'',   label:'Established' },
  { value:6,    suffix:'+',  label:'Product Lines' },
  { value:100,  suffix:'%',  label:'Export Focused' },
];

const SERVICES = [
  { Icon: Package,    title:'Custom Packaging', desc:'Branded or neutral packing in jute, HDPE or vacuum-sealed formats.' },
  { Icon: ShieldCheck,title:'Quality Assurance', desc:'Pre-shipment inspection, lab reports & phytosanitary certification.' },
  { Icon: Truck,      title:'Freight & Logistics', desc:'FOB, CIF, CFR terms. Full documentation & customs support.' },
  { Icon: ArrowUpRight,title:'Market Advisory', desc:'Commodity pricing insights, seasonal availability & trade consultation.' },
];

/* ------------------------------------------------------------------ */
/* Sections                                                              */
/* ------------------------------------------------------------------ */
function HeroSection() {
  const { t } = useLanguage();
  return (
    <section style={{
      minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', position:'relative',
      background:'linear-gradient(135deg,#FAFAF7 0%,#F5F0E8 50%,#EDE5D5 100%)',
    }}>
      <div style={{ position:'absolute',top:'-10rem',right:'-10rem',width:'40rem',height:'40rem',borderRadius:'50%',background:'rgba(196,150,42,.07)',pointerEvents:'none' }} />
      <div style={{ position:'absolute',bottom:'-8rem',left:'-8rem',width:'30rem',height:'30rem',borderRadius:'50%',background:'rgba(27,43,75,.05)',pointerEvents:'none' }} />

      <div style={{ maxWidth:'80rem',margin:'0 auto',padding:'6rem 1.5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',width:'100%' }}
        className="hero-grid">
        <div style={{ display:'flex',flexDirection:'column',gap:'2rem' }}>
          <Reveal><SectionTag>India’s Premier Agricultural Exporter</SectionTag></Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontSize:'clamp(2.5rem,6vw,4.5rem)', fontWeight:700, lineHeight:1.1,
              fontFamily:'Playfair Display,serif', color:'#1A1714', margin:0 }}>
              {t.hero?.headline ?? 'Global Trade,'}<br />
              <span style={{ color:'#C4962A' }}>{t.hero?.highlight ?? 'Indian Roots.'}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize:'1.1rem', lineHeight:1.7, color:'#7A7268', maxWidth:'28rem', margin:0 }}>
              {t.hero?.sub ?? "Premium agricultural commodities exported from the heart of India. Connecting India's finest produce with buyers across 40+ nations since 2018."}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
              <Link to="/contact" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'.875rem 1.75rem', borderRadius:'999px', color:'white',
                fontWeight:600, fontSize:'.875rem', textDecoration:'none',
                background:'linear-gradient(135deg,#C4962A,#A67820)',
                boxShadow:'0 4px 20px rgba(196,150,42,.4)',
              }}>Request a Quote <ArrowRight weight="bold" size={16} /></Link>
              <a href="#products" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'.875rem 1.75rem', borderRadius:'999px', fontWeight:600,
                fontSize:'.875rem', textDecoration:'none',
                border:'2px solid #C4962A', color:'#C4962A', background:'transparent',
              }}>View Products</a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ display:'flex', gap:'2rem', paddingTop:'1rem' }}>
              {[['40+','Nations'],['2018','Founded'],['6+','Products']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontSize:'1.875rem', fontWeight:700, color:'#C4962A', fontFamily:'Playfair Display,serif' }}>{v}</div>
                  <div style={{ fontSize:'.875rem', color:'#7A7268' }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal dir="right" delay={200}>
          <TiltCard style={{ borderRadius:'1.5rem', boxShadow:'0 20px 60px rgba(0,0,0,.12)', background:'white', border:'1px solid rgba(196,150,42,.2)' }}>
            <img src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=800&q=80&auto=format&fit=crop"
              alt="Kabuli Chickpeas" style={{ width:'100%', height:'280px', objectFit:'cover', display:'block' }} />
            <div style={{ padding:'1.5rem', background:'white' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'.75rem' }}>
                <span style={{ fontSize:'.8rem', fontWeight:600, color:'#C4962A' }}>⭐ Featured Product</span>
                <span style={{ fontSize:'.72rem', padding:'.2rem .6rem', borderRadius:'999px', background:'rgba(196,150,42,.1)', color:'#C4962A' }}>APEDA Certified</span>
              </div>
              <h3 style={{ margin:'0 0 .25rem', fontFamily:'Playfair Display,serif', color:'#1A1714', fontSize:'1.25rem' }}>Kabuli Chickpeas</h3>
              <p style={{ margin:'0 0 1rem', fontSize:'.875rem', color:'#7A7268' }}>Rajasthan, India · Min. 25 MT</p>
              <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap' }}>
                {['Non-GMO','Premium Grade','Export Ready'].map(tag => (
                  <span key={tag} style={{ fontSize:'.72rem', padding:'.2rem .6rem', borderRadius:'999px', background:'rgba(27,43,75,.07)', color:'#1B2B4B' }}>{tag}</span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const items = ['Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts','Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat'];
  return (
    <div style={{ padding:'.75rem 0', overflow:'hidden', background:'#C4962A' }}>
      <div className="animate-marquee" style={{ display:'flex', whiteSpace:'nowrap' }}>
        {[...items,...items].map((item,i) => (
          <span key={i} style={{ margin:'0 2rem', color:'white', fontWeight:600, fontSize:'.875rem', letterSpacing:'.05em' }}>
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductsSection() {
  const { t } = useLanguage();
  return (
    <section id="products" style={{ padding:'6rem 1.5rem', background:'#FAFAF7' }}>
      <div style={{ maxWidth:'80rem', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'4rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}>
          <Reveal><SectionTag>{t.products?.tag ?? 'Our Products'}</SectionTag></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontFamily:'Playfair Display,serif', color:'#1A1714', margin:0 }}>
              {t.products?.headline ?? 'Export-Grade Commodities'}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ color:'#7A7268', maxWidth:'36rem', margin:0, lineHeight:1.7 }}>
              {t.products?.sub ?? "Sourced from certified farms across India's finest agricultural belts."}
            </p>
          </Reveal>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'2rem' }}>
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} dir={i%2===0?'left':'right'} delay={i*60}>
              <TiltCard style={{ borderRadius:'1rem', background:'white', border:'1px solid rgba(196,150,42,.15)',
                boxShadow:'0 2px 20px rgba(0,0,0,.05)', height:'100%', display:'flex', flexDirection:'column' }}>
                <div style={{ height:'200px', background:p.fallback, overflow:'hidden', borderRadius:'1rem 1rem 0 0', position:'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }}
                    onError={e => { (e.target as HTMLImageElement).style.display='none'; }} />
                  <div style={{ position:'absolute', top:'.75rem', right:'.75rem' }}>
                    <span style={{ fontSize:'.7rem', padding:'.2rem .6rem', borderRadius:'999px', background:'rgba(255,255,255,.92)', color:'#C4962A', fontWeight:600 }}>{p.cert}</span>
                  </div>
                </div>
                <div style={{ padding:'1.25rem', flex:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{ margin:'0 0 .25rem', fontFamily:'Playfair Display,serif', color:'#1A1714', fontSize:'1.1rem' }}>{p.name}</h3>
                  <p style={{ margin:'0 0 .75rem', fontSize:'.8rem', color:'#C4962A' }}>📍 {p.origin}</p>
                  <p style={{ margin:'0 0 1rem', fontSize:'.875rem', color:'#7A7268', lineHeight:1.6, flex:1 }}>{p.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'1rem' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize:'.7rem', padding:'.2rem .5rem', borderRadius:'999px', background:'rgba(196,150,42,.1)', color:'#A67820' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:'.75rem', borderTop:'1px solid rgba(196,150,42,.15)' }}>
                    <span style={{ fontSize:'.8rem', color:'#7A7268' }}>Min: {p.minOrder}</span>
                    <Link to="/contact" style={{
                      display:'inline-flex', alignItems:'center', gap:'.25rem',
                      fontSize:'.75rem', fontWeight:600, padding:'.4rem .9rem', borderRadius:'999px',
                      background:'linear-gradient(135deg,#C4962A,#A67820)', color:'white', textDecoration:'none',
                    }}>Get Quote <ArrowUpRight size={12} /></Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const { t } = useLanguage();
  return (
    <section id="why-us" style={{ padding:'6rem 1.5rem', background:'#F5F0E8' }}>
      <div style={{ maxWidth:'80rem', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'4rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}>
          <Reveal><SectionTag>{t.whyUs?.tag ?? 'Why Choose Us'}</SectionTag></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontFamily:'Playfair Display,serif', color:'#1A1714', margin:0 }}>
              {t.whyUs?.headline ?? 'Built for Global Trade'}
            </h2>
          </Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1.5rem' }}>
          {WHY_US.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} dir={i<3?'left':'right'} delay={i*60}>
              <div style={{ padding:'1.5rem', borderRadius:'1rem', background:'white',
                border:'1px solid rgba(196,150,42,.15)', boxShadow:'0 2px 20px rgba(0,0,0,.04)',
                transition:'transform .2s', cursor:'default' }}
                onMouseEnter={e => (e.currentTarget.style.transform='translateY(-6px)')}
                onMouseLeave={e => (e.currentTarget.style.transform='none')}>
                <div style={{ width:'3rem', height:'3rem', borderRadius:'.75rem', marginBottom:'1rem',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'linear-gradient(135deg,#C4962A,#A67820)' }}>
                  <Icon size={20} color="white" weight="bold" />
                </div>
                <h3 style={{ margin:'0 0 .5rem', fontFamily:'Playfair Display,serif', color:'#1A1714', fontSize:'1.05rem' }}>{title}</h3>
                <p style={{ margin:0, fontSize:'.875rem', color:'#7A7268', lineHeight:1.6 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section style={{ padding:'5rem 1.5rem', background:'#1B2B4B' }}>
      <div style={{ maxWidth:'80rem', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:'2rem', textAlign:'center' }}>
        {STATS.map(s => (
          <Reveal key={s.label}>
            <div style={{ fontSize:'3rem', fontWeight:700, color:'#C4962A', fontFamily:'Playfair Display,serif', lineHeight:1.1 }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontSize:'.875rem', color:'rgba(255,255,255,.7)', marginTop:'.5rem' }}>{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" style={{ padding:'6rem 1.5rem', background:'#FAFAF7' }}>
      <div style={{ maxWidth:'80rem', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'4rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}>
          <Reveal><SectionTag>{t.services?.tag ?? 'Our Services'}</SectionTag></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontFamily:'Playfair Display,serif', color:'#1A1714', margin:0 }}>
              {t.services?.headline ?? 'End-to-End Export Solutions'}
            </h2>
          </Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'1.5rem' }}>
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} dir={i%2===0?'left':'right'} delay={i*80}>
              <div style={{ padding:'1.75rem', borderRadius:'1rem', background:'white', textAlign:'center',
                border:'1px solid rgba(196,150,42,.15)', boxShadow:'0 2px 20px rgba(0,0,0,.04)',
                transition:'transform .2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform='translateY(-6px)')}
                onMouseLeave={e => (e.currentTarget.style.transform='none')}>
                <div style={{ width:'3.5rem', height:'3.5rem', borderRadius:'1rem', margin:'0 auto 1rem',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'rgba(196,150,42,.1)', border:'1px solid rgba(196,150,42,.25)' }}>
                  <Icon size={24} style={{ color:'#C4962A' }} weight="duotone" />
                </div>
                <h3 style={{ margin:'0 0 .5rem', fontFamily:'Playfair Display,serif', color:'#1A1714', fontSize:'1rem' }}>{title}</h3>
                <p style={{ margin:0, fontSize:'.875rem', color:'#7A7268', lineHeight:1.6 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding:'6rem 1.5rem', background:'linear-gradient(135deg,#1B2B4B 0%,#243860 100%)' }}>
      <div style={{ maxWidth:'48rem', margin:'0 auto', textAlign:'center' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem' }}>
          <Reveal><SectionTag>Ready to Trade?</SectionTag></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontFamily:'Playfair Display,serif', color:'white', margin:0 }}>
              Let’s Build a <span style={{ color:'#C4962A' }}>Lasting Partnership</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ color:'rgba(255,255,255,.7)', margin:0, lineHeight:1.7 }}>
              Send us your requirements and get a detailed quotation within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
              <Link to="/contact" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'1rem 2rem', borderRadius:'999px', color:'white',
                fontWeight:600, textDecoration:'none',
                background:'linear-gradient(135deg,#C4962A,#A67820)',
                boxShadow:'0 8px 30px rgba(196,150,42,.4)',
              }}>Request a Quote <ArrowRight weight="bold" size={18} /></Link>
              <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'1rem 2rem', borderRadius:'999px', fontWeight:600, textDecoration:'none',
                border:'2px solid rgba(196,150,42,.6)', color:'#C4962A',
              }}>WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2rem', paddingTop:'1rem' }}>
              {['No Hidden Fees','24h Response','Certified Quality'].map((txt,i) => (
                <div key={txt} style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
                  <CheckCircle size={18} style={{ color:'#C4962A' }} weight="fill" />
                  <span style={{ fontSize:'.875rem', color:'rgba(255,255,255,.8)' }}>{txt}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Route                                                                 */
/* ------------------------------------------------------------------ */
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
