import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute('/')({ component: HomePage });

const PRODUCTS = [
  { name:'Kabuli Chickpeas', origin:'Rajasthan, India', minOrder:'25 MT', cert:'APEDA Certified',
    img:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=700&q=85&auto=format&fit=crop',
    color:'#D4A843', tags:['Non-GMO','Premium Grade'],
    desc:'Bold creamy white chickpeas. Popular across Middle East & Europe markets.' },
  { name:'Fresh Bananas', origin:'Maharashtra, India', minOrder:'10 MT', cert:'Phytosanitary Cert.',
    img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=700&q=85&auto=format&fit=crop',
    color:'#E8C830', tags:['G9 Variety','Export Grade'],
    desc:'G9 Cavendish variety exported to Gulf, South East Asia and African markets.' },
  { name:'Whole Leaf Tobacco', origin:'Andhra Pradesh', minOrder:'5 MT', cert:'TobaccoBoard Cert.',
    img:'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=700&q=85&auto=format&fit=crop',
    color:'#8B6914', tags:['Virginia','Burley'],
    desc:'Virginia & Burley varieties compliant with international quality standards.' },
  { name:'Areca Nuts', origin:'Karnataka, India', minOrder:'10 MT', cert:'FSSAI Approved',
    img:'https://images.unsplash.com/photo-1612539465609-70e3a3b26b0f?w=700&q=85&auto=format&fit=crop',
    color:'#C4962A', tags:['Split','Whole'],
    desc:'Premium split & whole areca nuts sourced from select Karnataka farms.' },
  { name:'Sesame & Maize', origin:'Madhya Pradesh', minOrder:'20 MT', cert:'ISO 9001:2015',
    img:'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=700&q=85&auto=format&fit=crop',
    color:'#D4C060', tags:['Natural','Hulled'],
    desc:'Natural & hulled sesame seeds plus yellow maize for global food industries.' },
  { name:'Desi Chickpeas', origin:'Madhya Pradesh', minOrder:'25 MT', cert:'APEDA Certified',
    img:'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=700&q=85&auto=format&fit=crop',
    color:'#B5860D', tags:['High Protein','Asian Grade'],
    desc:'High protein small brown chickpeas widely used in South Asian markets.' },
];

const CERTS = [
  'APEDA Certified','ISO 9001:2015','FSSAI Approved',
  'Phytosanitary Cert.','TobaccoBoard Cert.','Halal Certified',
];

function HoverCard({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div
      className={`pcard ${className ?? ''}`}
      style={style}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
        e.currentTarget.style.transform = `translateY(-10px) rotateX(${y}deg) rotateY(${x}deg) scale(1.01)`;
        e.currentTarget.style.boxShadow = `${-x * 2}px ${y * 2 + 24}px 60px rgba(0,0,0,.14)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'DM Sans',system-ui,sans-serif", perspective: '1200px' }}>

      {/* ══════════════════════════════
           HERO
      ══════════════════════════════ */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', padding: '0 1.5rem',
        background: '#0F1E35',
      }}>
        {/* Parallax BG */}
        <div id="hero-bg" style={{
          position: 'absolute', inset: '-20%', zIndex: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(.28) saturate(1.2)',
        }} />

        {/* Gold gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(196,150,42,.18) 0%, transparent 60%, rgba(27,43,75,.6) 100%)',
        }} />

        {/* Animated circles */}
        <div style={{ position:'absolute', top:'10%', right:'8%', width:'28rem', height:'28rem',
          borderRadius:'50%', border:'1px solid rgba(196,150,42,.15)', zIndex:1,
          animation:'spin-slow 40s linear infinite' }} />
        <div style={{ position:'absolute', top:'10%', right:'8%', width:'22rem', height:'22rem',
          borderRadius:'50%', border:'1px solid rgba(196,150,42,.1)', zIndex:1,
          animation:'spin-slow 30s linear infinite reverse', margin:'3rem' }} />
        <div style={{ position:'absolute', top:'10%', right:'8%', width:'15rem', height:'15rem',
          borderRadius:'50%', background:'rgba(196,150,42,.06)', zIndex:1,
          margin:'6.5rem', animation:'float 8s ease-in-out infinite' }} />

        <div style={{ maxWidth:'72rem', margin:'0 auto', width:'100%',
          paddingTop:'9rem', paddingBottom:'6rem', position:'relative', zIndex:2,
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>

          {/* LEFT */}
          <div style={{ animation:'fadeUp 1s ease both' }}>
            <div className="sec-tag" style={{ marginBottom:'2rem' }}>India's Premier Agricultural Exporter</div>

            <h1 style={{
              fontFamily:"'Playfair Display',Georgia,serif",
              fontSize:'clamp(3rem,6vw,5.5rem)',
              fontWeight:800, lineHeight:1.0, color:'white',
              letterSpacing:'-.03em', margin:'0 0 1.75rem',
            }}>
              Global Trade,<br />
              <span style={{
                fontStyle:'italic', color:'transparent',
                background:'linear-gradient(90deg,#C4962A,#E8C87A,#C4962A)',
                backgroundSize:'200% auto',
                WebkitBackgroundClip:'text', backgroundClip:'text',
                animation:'gradient-x 4s ease infinite',
              }}>Indian Roots.</span>
            </h1>

            <p style={{ fontSize:'1.1rem', lineHeight:1.85, color:'rgba(255,255,255,.72)',
              maxWidth:'30rem', margin:'0 0 2.5rem' }}>
              Premium agricultural commodities exported from the heart of India.
              Connecting India's finest produce with buyers across
              <strong style={{ color:'#C4962A', fontWeight:600 }}> 40+ nations</strong> since 2018.
            </p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'3.5rem' }}>
              <Link to="/contact" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'1rem 2.25rem', borderRadius:999, color:'white', fontWeight:700,
                fontSize:'.9rem', textDecoration:'none', letterSpacing:'.01em',
                background:'linear-gradient(135deg,#C4962A,#A67820)',
                boxShadow:'0 8px 36px rgba(196,150,42,.5)',
                transition:'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-4px) scale(1.03)';(e.currentTarget as HTMLElement).style.boxShadow='0 16px 48px rgba(196,150,42,.6)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='';(e.currentTarget as HTMLElement).style.boxShadow='0 8px 36px rgba(196,150,42,.5)';}}>
                Request a Quote <span style={{fontSize:'1.1rem'}}>↗</span>
              </Link>
              <a href="#products" style={{
                display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'1rem 2.25rem', borderRadius:999, fontWeight:600, fontSize:'.9rem',
                textDecoration:'none', border:'1.5px solid rgba(255,255,255,.25)',
                color:'rgba(255,255,255,.85)', backdropFilter:'blur(8px)',
                background:'rgba(255,255,255,.07)',
                transition:'all .3s',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.14)';(e.currentTarget as HTMLElement).style.borderColor='rgba(196,150,42,.6)';(e.currentTarget as HTMLElement).style.color='#C4962A';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.07)';(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,.25)';(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.85)';}}>
                Explore Products
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display:'flex', gap:'2.5rem', flexWrap:'wrap',
              paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,.1)' }}>
              {[{v:40,s:'+',l:'Nations'},{v:2018,s:'',l:'Founded'},{v:6,s:'+',l:'Products'},{v:100,s:'%',l:'Export Grade'}].map(({v,s,l})=>(
                <div key={l}>
                  <div style={{ fontSize:'2.2rem', fontWeight:800,
                    fontFamily:"'Playfair Display',Georgia,serif", lineHeight:1,
                    background:'linear-gradient(90deg,#C4962A,#E8C87A)',
                    WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>
                    <span data-count={v} data-suffix={s}>0{s}</span>
                  </div>
                  <div style={{ fontSize:'.75rem', color:'rgba(255,255,255,.5)',
                    marginTop:'.3rem', letterSpacing:'.06em', textTransform:'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating certification card */}
          <div style={{ display:'flex', justifyContent:'center', animation:'fadeUp 1.1s .2s ease both' }}>
            <div style={{
              width:'100%', maxWidth:380,
              background:'rgba(255,255,255,.06)',
              backdropFilter:'blur(24px)',
              border:'1px solid rgba(196,150,42,.25)',
              borderRadius:'1.75rem',
              padding:'2rem',
              boxShadow:'0 32px 80px rgba(0,0,0,.4)',
              animation:'float 7s ease-in-out infinite',
            }}>
              <div style={{ marginBottom:'1.5rem', overflow:'hidden', borderRadius:'1rem', height:180,
                background:'linear-gradient(135deg,#C4962A,#8B6914)' }}>
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=85&auto=format&fit=crop"
                  alt="Farm" style={{ width:'100%',height:'100%',objectFit:'cover',
                    filter:'brightness(.85) saturate(1.1)' }}
                  onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
              </div>
              <div style={{ marginBottom:'1.25rem' }}>
                <p style={{ color:'rgba(255,255,255,.5)', fontSize:'.72rem',
                  textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.3rem' }}>Verified Certifications</p>
                <p style={{ color:'white', fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'1.15rem', fontWeight:700 }}>Export-Grade Quality</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'.6rem' }}>
                {CERTS.map(cert=>(
                  <div key={cert} style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    padding:'.6rem .9rem', borderRadius:'.75rem',
                    background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.08)',
                  }}>
                    <span style={{ fontSize:'.83rem', color:'rgba(255,255,255,.8)', fontWeight:500 }}>{cert}</span>
                    <div style={{ width:20,height:20,borderRadius:'50%',flexShrink:0,
                      background:'linear-gradient(135deg,#C4962A,#A67820)',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      color:'white',fontSize:'.7rem',fontWeight:700 }}>✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute',bottom:'2.5rem',left:'50%',transform:'translateX(-50%)',
          zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:'.5rem' }}>
          <div style={{ width:28,height:46,borderRadius:99,border:'1.5px solid rgba(255,255,255,.25)',
            display:'flex',justifyContent:'center',paddingTop:8,
            background:'rgba(255,255,255,.05)' }}>
            <div style={{ width:4,height:8,borderRadius:99,background:'#C4962A',
              animation:'fadeUp 1s .8s ease infinite alternate' }} />
          </div>
          <span style={{ color:'rgba(255,255,255,.35)',fontSize:'.65rem',letterSpacing:'.12em',
            textTransform:'uppercase' }}>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════
           MARQUEE TRUST BAR
      ══════════════════════════════ */}
      <div style={{ padding:'.8rem 0', overflow:'hidden',
        background:'linear-gradient(90deg,#C4962A 0%,#A67820 50%,#C4962A 100%)',
        backgroundSize:'200% auto', animation:'gradient-x 6s ease infinite' }}>
        <div style={{ display:'flex', whiteSpace:'nowrap', animation:'marquee 24s linear infinite' }}>
          {[...Array(2)].flatMap(()=>[
            'Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts',
            'Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat',
          ]).map((item,i)=>(
            <span key={i} style={{ margin:'0 2.5rem', color:'white',
              fontWeight:700, fontSize:'.8rem', letterSpacing:'.1em', textTransform:'uppercase' }}>
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
           PRODUCTS
      ══════════════════════════════ */}
      <section id="products" style={{ padding:'8rem 1.5rem', background:'#FAFAF7' }}>
        <div style={{ maxWidth:'76rem', margin:'0 auto' }}>
          <div className="sr" style={{ textAlign:'center', marginBottom:'5rem' }}>
            <span className="sec-tag">Our Products</span>
            <h2 className="sec-h2">Export-Grade <span>Commodities</span></h2>
            <div className="gold-divider" />
            <p className="sec-sub" style={{ marginTop:'.5rem' }}>
              Sourced from certified farms across India's finest agricultural belts —
              fresh, traceable, and compliant with global standards.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'2rem' }}>
            {PRODUCTS.map((p, i)=>(
              <HoverCard key={p.name} className={`sr d${i+1}`}
                style={{ display:'flex', flexDirection:'column' }}>
                <div style={{ height:220, background:p.color, position:'relative', overflow:'hidden' }}>
                  <img src={p.img} alt={p.name}
                    style={{ width:'100%',height:'100%',objectFit:'cover',
                      transition:'transform .7s cubic-bezier(.16,1,.3,1)' }}
                    onMouseEnter={e=>{(e.target as HTMLImageElement).style.transform='scale(1.08)';}}
                    onMouseLeave={e=>{(e.target as HTMLImageElement).style.transform='scale(1)';}}
                    onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
                  <div style={{ position:'absolute',inset:0,
                    background:'linear-gradient(to top,rgba(0,0,0,.45),transparent)' }} />
                  <span style={{ position:'absolute',top:'.9rem',right:'.9rem',
                    fontSize:'.68rem',padding:'.25rem .7rem',borderRadius:999,
                    background:'rgba(255,255,255,.95)',color:'#C4962A',fontWeight:700,
                    backdropFilter:'blur(10px)', letterSpacing:'.04em' }}>{p.cert}</span>
                  <div style={{ position:'absolute',bottom:'.9rem',left:'.9rem',
                    display:'flex',gap:'.35rem' }}>
                    {p.tags.map(t=>(
                      <span key={t} style={{ fontSize:'.65rem',padding:'.15rem .55rem',borderRadius:999,
                        background:'rgba(0,0,0,.5)',color:'rgba(255,255,255,.9)',
                        fontWeight:600,backdropFilter:'blur(8px)',letterSpacing:'.04em' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding:'1.5rem',flex:1,display:'flex',flexDirection:'column' }}>
                  <h3 style={{ margin:'0 0 .35rem',fontFamily:"'Playfair Display',Georgia,serif",
                    fontSize:'1.15rem',color:'#1A1714',fontWeight:700 }}>{p.name}</h3>
                  <p style={{ margin:'0 0 .75rem',fontSize:'.78rem',color:'#C4962A',fontWeight:600,
                    display:'flex',alignItems:'center',gap:'.3rem' }}>
                    <span>📍</span>{p.origin}
                  </p>
                  <p style={{ margin:'0 0 1.25rem',fontSize:'.9rem',color:'#7A7268',
                    lineHeight:1.7,flex:1 }}>{p.desc}</p>
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',
                    paddingTop:'1rem',borderTop:'1px solid rgba(196,150,42,.1)' }}>
                    <div>
                      <div style={{ fontSize:'.7rem',color:'#7A7268',
                        textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'.1rem' }}>Min. Order</div>
                      <div style={{ fontSize:'.9rem',color:'#1A1714',fontWeight:700 }}>{p.minOrder}</div>
                    </div>
                    <Link to="/contact" style={{
                      display:'inline-flex',alignItems:'center',gap:'.4rem',
                      padding:'.6rem 1.25rem',borderRadius:999,textDecoration:'none',
                      background:'linear-gradient(135deg,#C4962A,#A67820)',
                      color:'white',fontSize:'.8rem',fontWeight:700,
                      boxShadow:'0 6px 20px rgba(196,150,42,.4)',
                      transition:'transform .2s,box-shadow .2s' }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 12px 32px rgba(196,150,42,.55)';}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='';(e.currentTarget as HTMLElement).style.boxShadow='0 6px 20px rgba(196,150,42,.4)';}}>
                      Get Quote ↗
                    </Link>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           WHY US — split layout
      ══════════════════════════════ */}
      <section id="why-us" style={{ padding:'8rem 1.5rem',
        background:'linear-gradient(180deg,#F5F0E8 0%,#EDE5D5 100%)' }}>
        <div style={{ maxWidth:'76rem', margin:'0 auto',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'center' }}>

          {/* Left image stack */}
          <div className="sr-l" style={{ position:'relative', height:520 }}>
            <div style={{ position:'absolute', top:0, left:0, width:'75%', height:'72%',
              borderRadius:'1.5rem', overflow:'hidden',
              boxShadow:'0 24px 64px rgba(0,0,0,.15)',
              border:'3px solid white' }}>
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=85&auto=format&fit=crop"
                alt="Farm" style={{ width:'100%',height:'100%',objectFit:'cover' }}
                onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
            </div>
            <div style={{ position:'absolute', bottom:0, right:0, width:'60%', height:'55%',
              borderRadius:'1.5rem', overflow:'hidden',
              boxShadow:'0 24px 64px rgba(0,0,0,.18)',
              border:'3px solid white',
              animation:'float 6s ease-in-out infinite' }}>
              <img src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=700&q=85&auto=format&fit=crop"
                alt="Export" style={{ width:'100%',height:'100%',objectFit:'cover' }}
                onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
            </div>
            {/* Gold badge */}
            <div style={{ position:'absolute', top:'38%', left:'55%',
              width:120, height:120, borderRadius:'50%',
              background:'linear-gradient(135deg,#C4962A,#A67820)',
              boxShadow:'0 16px 48px rgba(196,150,42,.6)',
              display:'flex', flexDirection:'column',
              alignItems:'center', justifyContent:'center',
              color:'white', fontFamily:"'Playfair Display',Georgia,serif",
              animation:'float 5s 1s ease-in-out infinite',
              zIndex:5 }}>
              <span style={{ fontSize:'2rem', fontWeight:800, lineHeight:1 }}>8+</span>
              <span style={{ fontSize:'.62rem', letterSpacing:'.1em',
                textTransform:'uppercase', opacity:.85 }}>Years</span>
            </div>
          </div>

          {/* Right content */}
          <div className="sr-r">
            <span className="sec-tag">Why Choose Us</span>
            <h2 className="sec-h2" style={{ textAlign:'left', margin:'0 0 1rem' }}>
              Built for <span>Global Trade</span>
            </h2>
            <div className="gold-divider" style={{ margin:'0 0 2rem' }} />

            <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
              {[
                { icon:'✅', title:'Certified Quality',
                  desc:'APEDA, FSSAI & ISO certified. Every shipment third-party verified.' },
                { icon:'✈️', title:'Reliable Logistics',
                  desc:'Door-to-port handling, custom clearance & on-time delivery.' },
                { icon:'🌍', title:'40+ Nations Served',
                  desc:'Trusted buyers across Middle East, Europe, SEA & Africa.' },
                { icon:'🌿', title:'Farm-Direct Sourcing',
                  desc:'Zero middlemen. Direct from verified farms. Maximum freshness.' },
                { icon:'👥', title:'Dedicated Support',
                  desc:'Personal account managers & 24/7 WhatsApp support.' },
              ].map(({icon,title,desc},i)=>(
                <div key={title}
                  style={{ display:'flex', gap:'1rem', padding:'1.25rem',
                    borderRadius:'1rem', background:'rgba(255,255,255,.7)',
                    border:'1px solid rgba(196,150,42,.12)',
                    backdropFilter:'blur(12px)',
                    transition:'all .3s', cursor:'default',
                    animationDelay:`${i * 80}ms` }}
                  onMouseEnter={e=>{ const el = e.currentTarget as HTMLElement; el.style.background='white'; el.style.boxShadow='0 12px 40px rgba(0,0,0,.08)'; el.style.transform='translateX(8px)'; }}
                  onMouseLeave={e=>{ const el = e.currentTarget as HTMLElement; el.style.background='rgba(255,255,255,.7)'; el.style.boxShadow='none'; el.style.transform='none'; }}>
                  <div style={{ width:46,height:46,borderRadius:12,flexShrink:0,
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontSize:'1.4rem',
                    background:'linear-gradient(135deg,rgba(196,150,42,.15),rgba(196,150,42,.05))',
                    border:'1px solid rgba(196,150,42,.2)' }}>{icon}</div>
                  <div>
                    <h4 style={{ margin:'0 0 .25rem', fontWeight:700, fontSize:'.95rem',
                      color:'#1A1714', fontFamily:"'Playfair Display',Georgia,serif" }}>{title}</h4>
                    <p style={{ margin:0, fontSize:'.85rem', color:'#7A7268', lineHeight:1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           STATS COUNTER BAND
      ══════════════════════════════ */}
      <section style={{
        padding:'5rem 1.5rem',
        background:'linear-gradient(135deg,#0F1E35 0%,#1B2B4B 50%,#243860 100%)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute',top:'-4rem',left:'-4rem',width:'20rem',height:'20rem',
          borderRadius:'50%',background:'rgba(196,150,42,.06)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',bottom:'-4rem',right:'-4rem',width:'16rem',height:'16rem',
          borderRadius:'50%',background:'rgba(196,150,42,.04)',pointerEvents:'none' }} />
        <div style={{ maxWidth:'72rem', margin:'0 auto',
          display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',
          gap:'2rem', textAlign:'center', position:'relative', zIndex:1 }}>
          {[
            {v:40,s:'+',l:'Nations Served',icon:'🌍'},
            {v:2018,s:'',l:'Year Founded',icon:'🏛️'},
            {v:6,s:'+',l:'Product Lines',icon:'📦'},
            {v:500,s:'+',l:'Shipments Delivered',icon:'✈️'},
          ].map(({v,s,l,icon})=>(
            <div key={l} className="sr-s" style={{ padding:'1.5rem' }}>
              <div style={{ fontSize:'2.5rem', marginBottom:'.5rem' }}>{icon}</div>
              <div style={{
                fontSize:'3.2rem', fontWeight:800,
                fontFamily:"'Playfair Display',Georgia,serif", lineHeight:1.1,
                background:'linear-gradient(90deg,#C4962A,#E8C87A)',
                WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
              }}>
                <span data-count={v} data-suffix={s}>0{s}</span>
              </div>
              <div style={{ fontSize:'.85rem', color:'rgba(255,255,255,.55)',
                marginTop:'.5rem', letterSpacing:'.04em' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
           SERVICES
      ══════════════════════════════ */}
      <section id="services" style={{ padding:'8rem 1.5rem', background:'#FAFAF7' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
          <div className="sr" style={{ textAlign:'center', marginBottom:'5rem' }}>
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-h2">End-to-End <span>Export Solutions</span></h2>
            <div className="gold-divider" />
            <p className="sec-sub" style={{ marginTop:'.5rem' }}>
              From farm sourcing to port delivery — we handle everything so you can focus on your business.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:'1.75rem' }}>
            {[
              { emoji:'📦', title:'Custom Packaging', number:'01',
                desc:'Branded or neutral packing in jute, HDPE or vacuum-sealed formats to your specs.' },
              { emoji:'📋', title:'Quality Assurance', number:'02',
                desc:'Pre-shipment inspection, lab reports & all phytosanitary certifications handled.' },
              { emoji:'✈️', title:'Freight & Logistics', number:'03',
                desc:'FOB, CIF, CFR Incoterms. Full documentation & customs clearance support.' },
              { emoji:'📈', title:'Market Advisory', number:'04',
                desc:'Real-time commodity pricing, seasonal availability & expert trade consultation.' },
            ].map(({emoji,title,number,desc},i)=>(
              <HoverCard key={title} className={`sr d${i+1}`}
                style={{ padding:'2rem', textAlign:'left' }}>
                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1.5rem' }}>
                  <div style={{ width:58,height:58,borderRadius:16,
                    display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.7rem',
                    background:'linear-gradient(135deg,rgba(196,150,42,.15),rgba(196,150,42,.04))',
                    border:'1px solid rgba(196,150,42,.2)' }}>{emoji}</div>
                  <span style={{ fontFamily:"'Playfair Display',Georgia,serif",
                    fontSize:'3.5rem',fontWeight:800,color:'rgba(196,150,42,.08)',
                    lineHeight:1,userSelect:'none' }}>{number}</span>
                </div>
                <h3 style={{ margin:'0 0 .6rem',fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'1.1rem',color:'#1A1714',fontWeight:700 }}>{title}</h3>
                <p style={{ margin:0,fontSize:'.88rem',color:'#7A7268',lineHeight:1.75 }}>{desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           PROCESS / TIMELINE
      ══════════════════════════════ */}
      <section style={{ padding:'8rem 1.5rem',
        background:'linear-gradient(180deg,#F5F0E8,#FAFAF7)' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
          <div className="sr" style={{ textAlign:'center', marginBottom:'5rem' }}>
            <span className="sec-tag">How It Works</span>
            <h2 className="sec-h2">From Inquiry to <span>Delivery</span></h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'0',
            position:'relative' }}>
            {/* Connector line */}
            <div style={{ position:'absolute',top:36,left:'12%',right:'12%',height:2,
              background:'linear-gradient(90deg,rgba(196,150,42,.3),#C4962A,rgba(196,150,42,.3))',
              zIndex:0 }} />
            {[
              { step:'01', icon:'📝', title:'Submit Inquiry', desc:'Share your requirements via our contact form or WhatsApp.' },
              { step:'02', icon:'💬', title:'Get a Quote', desc:'Receive a detailed quotation within 24 hours from our team.' },
              { step:'03', icon:'✅', title:'Quality Check', desc:'We inspect and certify the produce before shipment.' },
              { step:'04', icon:'🚢', title:'Delivered', desc:'Your order is shipped and delivered on time, every time.' },
            ].map(({step,icon,title,desc},i)=>(
              <div key={step} className={`sr d${i+1}`}
                style={{ padding:'1rem 1.5rem', textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{ width:72,height:72,borderRadius:'50%',margin:'0 auto 1.25rem',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.8rem',
                  background:'white',border:'3px solid #C4962A',
                  boxShadow:'0 8px 32px rgba(196,150,42,.25)' }}>{icon}</div>
                <div style={{ fontSize:'.68rem',color:'#C4962A',fontWeight:700,
                  letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'.4rem' }}>Step {step}</div>
                <h4 style={{ margin:'0 0 .5rem',fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'1rem',color:'#1A1714',fontWeight:700 }}>{title}</h4>
                <p style={{ margin:0,fontSize:'.85rem',color:'#7A7268',lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
           CTA — BOLD DARK
      ══════════════════════════════ */}
      <section style={{ padding:'9rem 1.5rem',
        background:'linear-gradient(135deg,#0F1E35 0%,#1B2B4B 60%,#243860 100%)',
        position:'relative', overflow:'hidden' }}>
        {/* Decorative rings */}
        <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
          width:'60rem',height:'60rem',borderRadius:'50%',
          border:'1px solid rgba(196,150,42,.07)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
          width:'40rem',height:'40rem',borderRadius:'50%',
          border:'1px solid rgba(196,150,42,.1)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
          width:'22rem',height:'22rem',borderRadius:'50%',
          background:'rgba(196,150,42,.04)',pointerEvents:'none' }} />

        <div className="sr" style={{ maxWidth:'52rem', margin:'0 auto',
          textAlign:'center', position:'relative', zIndex:1 }}>
          <span className="sec-tag" style={{ background:'rgba(196,150,42,.12)',
            border:'1px solid rgba(196,150,42,.3)' }}>Ready to Trade?</span>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:800,
            color:'white', lineHeight:1.1, margin:'0 0 1.25rem',
            letterSpacing:'-.02em' }}>
            Let's Build a<br />
            <span style={{ fontStyle:'italic', color:'transparent',
              background:'linear-gradient(90deg,#C4962A,#E8C87A,#C4962A)',
              backgroundSize:'200% auto', WebkitBackgroundClip:'text',
              backgroundClip:'text', animation:'gradient-x 4s ease infinite' }}>
              Lasting Partnership
            </span>
          </h2>
          <p style={{ margin:'0 0 3rem', color:'rgba(255,255,255,.65)',
            lineHeight:1.85, fontSize:'1rem', maxWidth:'36rem', marginLeft:'auto', marginRight:'auto' }}>
            Send your requirements and receive a detailed quotation within 24 hours.
            Our expert team is ready to assist you at every step.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem',
            justifyContent:'center', marginBottom:'3rem' }}>
            <Link to="/contact" style={{
              display:'inline-flex', alignItems:'center', gap:'.6rem',
              padding:'1.1rem 2.5rem', borderRadius:999, color:'white', fontWeight:700,
              textDecoration:'none', fontSize:'1rem',
              background:'linear-gradient(135deg,#C4962A,#A67820)',
              boxShadow:'0 12px 44px rgba(196,150,42,.5)',
              transition:'transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s',
              letterSpacing:'.01em',
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-5px) scale(1.04)';(e.currentTarget as HTMLElement).style.boxShadow='0 20px 56px rgba(196,150,42,.65)';}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='';(e.currentTarget as HTMLElement).style.boxShadow='0 12px 44px rgba(196,150,42,.5)';}}>
              Request a Quote ↗
            </Link>
            <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:'.6rem',
                padding:'1.1rem 2.5rem', borderRadius:999, fontWeight:700,
                textDecoration:'none', fontSize:'1rem',
                border:'1.5px solid rgba(196,150,42,.45)',
                color:'#C4962A', background:'rgba(196,150,42,.08)',
                backdropFilter:'blur(8px)',
                transition:'all .3s',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.18)';(e.currentTarget as HTMLElement).style.borderColor='#C4962A';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.08)';(e.currentTarget as HTMLElement).style.borderColor='rgba(196,150,42,.45)';}}>
              📱 WhatsApp Us
            </a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2.5rem' }}>
            {['No Hidden Fees','24h Response','Certified Quality','Trusted Since 2018'].map(txt=>(
              <div key={txt} style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
                <div style={{ width:22,height:22,borderRadius:'50%',flexShrink:0,
                  background:'rgba(196,150,42,.2)',border:'1px solid rgba(196,150,42,.5)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:'#C4962A',fontSize:'.75rem',fontWeight:800 }}>✓</div>
                <span style={{ fontSize:'.875rem',color:'rgba(255,255,255,.75)',fontWeight:500 }}>{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
