import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg,#FAFAF7 0%,#F5F0E8 50%,#EDE5D5 100%)',
        position: 'relative', overflow: 'hidden', padding: '0 1.5rem',
      }}>
        <div style={{ position:'absolute', top:'-8rem', right:'-8rem', width:'38rem', height:'38rem',
          borderRadius:'50%', background:'rgba(196,150,42,.07)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-6rem', left:'-6rem', width:'28rem', height:'28rem',
          borderRadius:'50%', background:'rgba(27,43,75,.05)', pointerEvents:'none' }} />

        <div style={{ maxWidth:'72rem', margin:'0 auto', width:'100%', paddingTop:'7rem', paddingBottom:'5rem' }}>
          <span style={{ display:'inline-block', padding:'.25rem .9rem', borderRadius:999,
            fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
            background:'rgba(196,150,42,.12)', color:'#C4962A', border:'1px solid rgba(196,150,42,.3)',
            marginBottom:'1.5rem' }}>
            India&#39;s Premier Agricultural Exporter
          </span>

          <h1 style={{ margin:'0 0 1.5rem', fontSize:'clamp(2.8rem,5.5vw,4.5rem)',
            fontWeight:700, lineHeight:1.1, color:'#1A1714',
            fontFamily:'Playfair Display, Georgia, serif' }}>
            Global Trade,<br />
            <span style={{ color:'#C4962A' }}>Indian Roots.</span>
          </h1>

          <p style={{ margin:'0 0 2rem', fontSize:'1.1rem', lineHeight:1.75,
            color:'#7A7268', maxWidth:'30rem' }}>
            Premium agricultural commodities exported from the heart of India.
            Connecting India&#39;s finest produce with buyers across 40+ nations since 2018.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'2.5rem' }}>
            <Link to="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem',
              padding:'.875rem 1.75rem', borderRadius:999, color:'white', fontWeight:600,
              fontSize:'.9rem', textDecoration:'none',
              background:'linear-gradient(135deg,#C4962A,#A67820)',
              boxShadow:'0 4px 20px rgba(196,150,42,.4)' }}>
              Request a Quote &#8594;
            </Link>
            <a href="#products" style={{ display:'inline-flex', alignItems:'center',
              padding:'.875rem 1.75rem', borderRadius:999, fontWeight:600, fontSize:'.9rem',
              textDecoration:'none', border:'2px solid #C4962A', color:'#C4962A' }}>
              View Products
            </a>
          </div>

          <div style={{ display:'flex', gap:'2.5rem' }}>
            {([['40+','Nations'],['2018','Founded'],['6+','Products']] as const).map(([v,l]) => (
              <div key={l}>
                <div style={{ fontSize:'2rem', fontWeight:700, color:'#C4962A',
                  fontFamily:'Playfair Display, Georgia, serif', lineHeight:1 }}>{v}</div>
                <div style={{ fontSize:'.85rem', color:'#7A7268', marginTop:'.2rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ padding:'.6rem 0', overflow:'hidden', background:'#C4962A' }}>
        <div style={{ display:'flex', whiteSpace:'nowrap', animation:'marquee 30s linear infinite' }}>
          {['Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts',
            'Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat',
            'Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts',
            'Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat',
          ].map((item, i) => (
            <span key={i} style={{ margin:'0 2rem', color:'white', fontWeight:600,
              fontSize:'.85rem', letterSpacing:'.06em' }}>
              &#10022; {item}
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products" style={{ padding:'6rem 1.5rem', background:'#FAFAF7' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span style={{ display:'inline-block', padding:'.25rem .9rem', borderRadius:999,
              fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
              background:'rgba(196,150,42,.12)', color:'#C4962A', border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Our Products</span>
            <h2 style={{ margin:'.5rem 0 .75rem', fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:'Playfair Display, Georgia, serif', color:'#1A1714' }}>
              Export-Grade Commodities
            </h2>
            <p style={{ color:'#7A7268', maxWidth:'34rem', margin:'0 auto', lineHeight:1.7 }}>
              Sourced from certified farms across India&#39;s finest agricultural belts.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:'1.75rem' }}>
            {[
              { name:'Kabuli Chickpeas', origin:'Rajasthan, India', minOrder:'25 MT', cert:'APEDA Certified',
                color:'#D4A843', img:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=640&q=80&auto=format&fit=crop',
                tags:['Non-GMO','Premium Grade'], desc:'Bold creamy white chickpeas. Popular across Middle East & Europe.' },
              { name:'Fresh Bananas', origin:'Maharashtra, India', minOrder:'10 MT', cert:'Phytosanitary Cert.',
                color:'#F4C430', img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=640&q=80&auto=format&fit=crop',
                tags:['G9 Variety','Export Grade'], desc:'G9 Cavendish variety exported to Gulf, SEA and African markets.' },
              { name:'Whole Leaf Tobacco', origin:'Andhra Pradesh', minOrder:'5 MT', cert:'TobaccoBoard Cert.',
                color:'#8B6914', img:'https://images.unsplash.com/photo-1564507592333-10cb5dc25ff8?w=640&q=80&auto=format&fit=crop',
                tags:['Virginia','Burley'], desc:'Virginia & Burley varieties compliant with international norms.' },
              { name:'Areca Nuts', origin:'Karnataka, India', minOrder:'10 MT', cert:'FSSAI Approved',
                color:'#C4962A', img:'https://images.unsplash.com/photo-1585501572696-2cd72f02bcd7?w=640&q=80&auto=format&fit=crop',
                tags:['Split','Whole'], desc:'Premium split & whole areca nuts from select Karnataka farms.' },
              { name:'Sesame & Maize', origin:'Madhya Pradesh', minOrder:'20 MT', cert:'ISO 9001:2015',
                color:'#E8C97A', img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&q=80&auto=format&fit=crop',
                tags:['Natural','Hulled'], desc:'Natural & hulled sesame seeds plus yellow maize for food industries.' },
              { name:'Desi Chickpeas', origin:'Madhya Pradesh', minOrder:'25 MT', cert:'APEDA Certified',
                color:'#B5860D', img:'https://images.unsplash.com/photo-1612003799989-a5e74ccc14e2?w=640&q=80&auto=format&fit=crop',
                tags:['High Protein','Asian Grade'], desc:'High protein small brown chickpeas used widely in Asian markets.' },
            ].map((p) => (
              <div key={p.name}
                style={{ borderRadius:'1rem', background:'white', overflow:'hidden',
                  border:'1px solid rgba(196,150,42,.15)', boxShadow:'0 2px 20px rgba(0,0,0,.05)',
                  display:'flex', flexDirection:'column',
                  transition:'transform .2s, box-shadow .2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 20px rgba(0,0,0,.05)'; }}>
                <div style={{ height:200, background:p.color, position:'relative', overflow:'hidden' }}>
                  <img src={p.img} alt={p.name}
                    style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                    onError={e => { (e.target as HTMLImageElement).style.display='none'; }} />
                  <span style={{ position:'absolute', top:'.6rem', right:'.6rem', fontSize:'.7rem',
                    padding:'.2rem .55rem', borderRadius:999,
                    background:'rgba(255,255,255,.93)', color:'#C4962A', fontWeight:600 }}>{p.cert}</span>
                </div>
                <div style={{ padding:'1.25rem', flex:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{ margin:'0 0 .2rem', fontFamily:'Playfair Display,Georgia,serif',
                    fontSize:'1.05rem', color:'#1A1714' }}>{p.name}</h3>
                  <p style={{ margin:'0 0 .6rem', fontSize:'.78rem', color:'#C4962A' }}>&#128205; {p.origin}</p>
                  <p style={{ margin:'0 0 .8rem', fontSize:'.875rem', color:'#7A7268', lineHeight:1.6, flex:1 }}>{p.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'.8rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize:'.7rem', padding:'.15rem .5rem', borderRadius:999,
                        background:'rgba(196,150,42,.1)', color:'#A67820' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                    paddingTop:'.75rem', borderTop:'1px solid rgba(196,150,42,.15)' }}>
                    <span style={{ fontSize:'.8rem', color:'#7A7268' }}>Min: {p.minOrder}</span>
                    <Link to="/contact" style={{ fontSize:'.75rem', fontWeight:600,
                      padding:'.35rem .9rem', borderRadius:999, textDecoration:'none',
                      background:'linear-gradient(135deg,#C4962A,#A67820)', color:'white' }}>
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{ padding:'6rem 1.5rem', background:'#F5F0E8' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span style={{ display:'inline-block', padding:'.25rem .9rem', borderRadius:999,
              fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
              background:'rgba(196,150,42,.12)', color:'#C4962A', border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Why Choose Us</span>
            <h2 style={{ margin:'.5rem 0 0', fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:'Playfair Display, Georgia, serif', color:'#1A1714' }}>
              Built for Global Trade
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:'1.5rem' }}>
            {[
              { icon:'&#9745;', title:'Certified Quality', desc:'APEDA, FSSAI & ISO certified. Every shipment verified by third-party labs.' },
              { icon:'&#9992;', title:'Reliable Logistics', desc:'Door-to-port handling, custom clearance and on-time delivery guaranteed.' },
              { icon:'&#127758;', title:'40+ Nations Served', desc:'Trusted buyers across Middle East, Europe, South East Asia & Africa.' },
              { icon:'&#127807;', title:'Farm Fresh', desc:'Direct sourcing from verified farms. Zero middlemen. Maximum freshness.' },
              { icon:'&#128101;', title:'Dedicated Support', desc:'Personal account managers & 24/7 WhatsApp support end-to-end.' },
              { icon:'&#11088;', title:'Premium Grade Only', desc:'We reject up to 30% of supply. Only export-grade produce leaves us.' },
            ].map(({ icon, title, desc }) => (
              <div key={title}
                style={{ padding:'1.5rem', borderRadius:'1rem', background:'white',
                  border:'1px solid rgba(196,150,42,.15)', boxShadow:'0 2px 20px rgba(0,0,0,.04)',
                  transition:'transform .2s, box-shadow .2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 20px rgba(0,0,0,.04)'; }}>
                <div style={{ width:48, height:48, borderRadius:12, marginBottom:'1rem',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem',
                  background:'linear-gradient(135deg,#C4962A,#A67820)' }}
                  dangerouslySetInnerHTML={{ __html: icon }} />
                <h3 style={{ margin:'0 0 .4rem', fontFamily:'Playfair Display,Georgia,serif',
                  fontSize:'1rem', color:'#1A1714' }}>{title}</h3>
                <p style={{ margin:0, fontSize:'.875rem', color:'#7A7268', lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding:'5rem 1.5rem', background:'#1B2B4B' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto', display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:'2rem', textAlign:'center' }}>
          {[['40+','Nations Served'],['2018','Established'],['6+','Product Lines'],['100%','Export Focused']].map(([v,l]) => (
            <div key={l}>
              <div style={{ fontSize:'3rem', fontWeight:700, color:'#C4962A',
                fontFamily:'Playfair Display,Georgia,serif', lineHeight:1.1 }}>{v}</div>
              <div style={{ fontSize:'.875rem', color:'rgba(255,255,255,.72)', marginTop:'.4rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding:'6rem 1.5rem', background:'#FAFAF7' }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span style={{ display:'inline-block', padding:'.25rem .9rem', borderRadius:999,
              fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
              background:'rgba(196,150,42,.12)', color:'#C4962A', border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Our Services</span>
            <h2 style={{ margin:'.5rem 0 0', fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:'Playfair Display, Georgia, serif', color:'#1A1714' }}>
              End-to-End Export Solutions
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'1.5rem' }}>
            {[
              { icon:'&#128230;', title:'Custom Packaging', desc:'Branded or neutral packing in jute, HDPE or vacuum-sealed formats.' },
              { icon:'&#9745;', title:'Quality Assurance', desc:'Pre-shipment inspection, lab reports & phytosanitary certification.' },
              { icon:'&#9992;', title:'Freight & Logistics', desc:'FOB, CIF, CFR terms. Full documentation & customs support.' },
              { icon:'&#128200;', title:'Market Advisory', desc:'Commodity pricing insights, seasonal availability & trade consultation.' },
            ].map(({ icon, title, desc }) => (
              <div key={title}
                style={{ padding:'1.75rem', borderRadius:'1rem', background:'white', textAlign:'center',
                  border:'1px solid rgba(196,150,42,.15)', boxShadow:'0 2px 20px rgba(0,0,0,.04)',
                  transition:'transform .2s, box-shadow .2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 20px rgba(0,0,0,.04)'; }}>
                <div style={{ width:56, height:56, borderRadius:14, margin:'0 auto 1rem',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem',
                  background:'rgba(196,150,42,.1)', border:'1px solid rgba(196,150,42,.25)' }}
                  dangerouslySetInnerHTML={{ __html: icon }} />
                <h3 style={{ margin:'0 0 .4rem', fontFamily:'Playfair Display,Georgia,serif',
                  fontSize:'1rem', color:'#1A1714' }}>{title}</h3>
                <p style={{ margin:0, fontSize:'.875rem', color:'#7A7268', lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'6rem 1.5rem',
        background:'linear-gradient(135deg,#1B2B4B 0%,#243860 100%)' }}>
        <div style={{ maxWidth:'46rem', margin:'0 auto', textAlign:'center' }}>
          <span style={{ display:'inline-block', padding:'.25rem .9rem', borderRadius:999,
            fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase',
            background:'rgba(196,150,42,.15)', color:'#C4962A', border:'1px solid rgba(196,150,42,.35)',
            marginBottom:'1.5rem' }}>Ready to Trade?</span>
          <h2 style={{ margin:'0 0 1rem', fontSize:'clamp(2rem,4vw,3rem)',
            fontFamily:'Playfair Display, Georgia, serif', color:'white' }}>
            Let&#39;s Build a <span style={{ color:'#C4962A' }}>Lasting Partnership</span>
          </h2>
          <p style={{ margin:'0 0 2rem', color:'rgba(255,255,255,.7)', lineHeight:1.7 }}>
            Send us your requirements and get a detailed quotation within 24 hours.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center',
            marginBottom:'2rem' }}>
            <Link to="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem',
              padding:'1rem 2rem', borderRadius:999, color:'white', fontWeight:600,
              textDecoration:'none', background:'linear-gradient(135deg,#C4962A,#A67820)',
              boxShadow:'0 8px 30px rgba(196,150,42,.4)' }}>
              Request a Quote &#8594;
            </Link>
            <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'.5rem',
                padding:'1rem 2rem', borderRadius:999, fontWeight:600, textDecoration:'none',
                border:'2px solid rgba(196,150,42,.6)', color:'#C4962A' }}>
              WhatsApp Us
            </a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2rem' }}>
            {['No Hidden Fees','24h Response','Certified Quality'].map(txt => (
              <div key={txt} style={{ display:'flex', alignItems:'center', gap:'.4rem' }}>
                <span style={{ color:'#C4962A', fontSize:'1.1rem' }}>&#10003;</span>
                <span style={{ fontSize:'.875rem', color:'rgba(255,255,255,.8)' }}>{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </main>
  );
}
