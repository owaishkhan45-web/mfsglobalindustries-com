import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter',system-ui,sans-serif" }}>

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg,#FAFAF7 0%,#F5F0E8 50%,#EDE5D5 100%)',
        position: 'relative', overflow: 'hidden', padding: '0 1.5rem',
      }}>
        {/* Decorative blobs */}
        <div style={{ position:'absolute',top:'-10rem',right:'-10rem',width:'42rem',height:'42rem',
          borderRadius:'50%',background:'rgba(196,150,42,.08)',pointerEvents:'none',
          animation:'float 8s ease-in-out infinite' }} />
        <div style={{ position:'absolute',bottom:'-8rem',left:'-8rem',width:'30rem',height:'30rem',
          borderRadius:'50%',background:'rgba(27,43,75,.06)',pointerEvents:'none',
          animation:'float 10s ease-in-out infinite reverse' }} />
        <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
          width:'60rem',height:'60rem',borderRadius:'50%',
          background:'radial-gradient(circle,rgba(196,150,42,.04) 0%,transparent 70%)',
          pointerEvents:'none' }} />

        <div style={{ maxWidth:'72rem',margin:'0 auto',width:'100%',
          paddingTop:'8rem',paddingBottom:'6rem',
          display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center' }}>

          {/* LEFT COPY */}
          <div style={{ animation:'fadeInUp .9s ease both' }}>
            <span style={{ display:'inline-flex',alignItems:'center',gap:'.4rem',
              padding:'.3rem 1rem',borderRadius:999,
              fontSize:'.72rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',
              background:'rgba(196,150,42,.12)',color:'#C4962A',
              border:'1px solid rgba(196,150,42,.3)',marginBottom:'1.75rem' }}>
              <span style={{ width:6,height:6,borderRadius:'50%',background:'#C4962A',
                animation:'pulse-glow 2s infinite',flexShrink:0 }} />
              India's Premier Agricultural Exporter
            </span>

            <h1 style={{ margin:'0 0 1.5rem',
              fontSize:'clamp(2.8rem,5.5vw,4.8rem)',
              fontWeight:800,lineHeight:1.05,color:'#1A1714',
              fontFamily:"'Playfair Display',Georgia,serif",letterSpacing:'-.02em' }}>
              Global Trade,<br />
              <span style={{ color:'#C4962A',fontStyle:'italic' }}>Indian Roots.</span>
            </h1>

            <p style={{ margin:'0 0 2.25rem',fontSize:'1.1rem',lineHeight:1.8,
              color:'#7A7268',maxWidth:'28rem' }}>
              Premium agricultural commodities exported from the heart of India.
              Connecting India's finest produce with buyers across
              <strong style={{ color:'#1A1714' }}> 40+ nations</strong> since 2018.
            </p>

            <div style={{ display:'flex',flexWrap:'wrap',gap:'1rem',marginBottom:'3rem' }}>
              <Link to="/contact" style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',
                padding:'1rem 2rem',borderRadius:999,color:'white',fontWeight:700,
                fontSize:'.9rem',textDecoration:'none',letterSpacing:'.01em',
                background:'linear-gradient(135deg,#C4962A,#A67820)',
                boxShadow:'0 8px 30px rgba(196,150,42,.45)',
                transition:'transform .2s,box-shadow .2s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 14px 40px rgba(196,150,42,.55)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 8px 30px rgba(196,150,42,.45)';}}>
                Request a Quote <span style={{ fontSize:'1.1rem' }}>↗</span>
              </Link>
              <a href="#products" style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',
                padding:'1rem 2rem',borderRadius:999,fontWeight:600,fontSize:'.9rem',
                textDecoration:'none',border:'2px solid rgba(196,150,42,.5)',color:'#C4962A',
                background:'rgba(196,150,42,.06)',transition:'all .2s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.12)';(e.currentTarget as HTMLElement).style.borderColor='#C4962A';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.06)';(e.currentTarget as HTMLElement).style.borderColor='rgba(196,150,42,.5)';}}>
                View Products
              </a>
            </div>

            {/* Stats */}
            <div style={{ display:'flex',gap:'2.5rem',flexWrap:'wrap' }}>
              {[['40+','Nations'],['2018','Est.'],['6+','Products'],['100%','Export Grade']].map(([v,l])=>(
                <div key={l} style={{ textAlign:'center' }}>
                  <div style={{ fontSize:'2rem',fontWeight:800,color:'#C4962A',
                    fontFamily:"'Playfair Display',Georgia,serif",lineHeight:1 }}>{v}</div>
                  <div style={{ fontSize:'.75rem',color:'#7A7268',marginTop:'.2rem',
                    textTransform:'uppercase',letterSpacing:'.06em',fontWeight:500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating card */}
          <div style={{ display:'flex',justifyContent:'center',
            animation:'fadeInUp 1.1s .2s ease both' }}>
            <div style={{ width:'100%',maxWidth:380,borderRadius:'1.5rem',
              background:'white',boxShadow:'0 30px 80px rgba(27,43,75,.15)',
              border:'1px solid rgba(196,150,42,.15)',overflow:'hidden',
              animation:'float 6s ease-in-out infinite' }}>
              <div style={{ height:220,overflow:'hidden',position:'relative',
                background:'linear-gradient(135deg,#C4962A,#8B6914)' }}>
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=85&auto=format&fit=crop"
                  alt="Agricultural export" style={{ width:'100%',height:'100%',objectFit:'cover',display:'block',
                    mixBlendMode:'multiply',opacity:.85 }}
                  onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
                <div style={{ position:'absolute',inset:0,
                  background:'linear-gradient(to top,rgba(196,150,42,.7),transparent)' }} />
                <div style={{ position:'absolute',bottom:'1rem',left:'1rem',color:'white' }}>
                  <div style={{ fontFamily:"'Playfair Display',Georgia,serif",
                    fontSize:'1.2rem',fontWeight:700 }}>Premium Exports</div>
                  <div style={{ fontSize:'.8rem',opacity:.85 }}>Farm to Port</div>
                </div>
              </div>
              <div style={{ padding:'1.25rem' }}>
                {[['APEDA Certified','✓'],['ISO 9001:2015','✓'],['Phytosanitary Cert.','✓'],['FSSAI Approved','✓']].map(([label,check])=>(
                  <div key={label} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',
                    padding:'.55rem 0',borderBottom:'1px solid rgba(196,150,42,.1)' }}>
                    <span style={{ fontSize:'.88rem',color:'#1A1714',fontWeight:500 }}>{label}</span>
                    <span style={{ width:22,height:22,borderRadius:'50%',
                      background:'linear-gradient(135deg,#C4962A,#A67820)',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      color:'white',fontSize:'.75rem',fontWeight:700 }}>{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',
          display:'flex',flexDirection:'column',alignItems:'center',gap:'.4rem',
          color:'rgba(122,114,104,.6)',fontSize:'.7rem',letterSpacing:'.08em',textTransform:'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width:1.5,height:36,background:'linear-gradient(to bottom,rgba(196,150,42,.6),transparent)',
            animation:'fadeInUp 1s .5s ease both' }} />
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ padding:'.7rem 0',overflow:'hidden',
        background:'linear-gradient(90deg,#1B2B4B,#243860)',
        borderTop:'1px solid rgba(196,150,42,.2)',borderBottom:'1px solid rgba(196,150,42,.2)' }}>
        <div style={{ display:'flex',whiteSpace:'nowrap',animation:'marquee 28s linear infinite' }}>
          {['Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts',
            'Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat',
            'Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts',
            'Sesame Seeds','Yellow Maize','Desi Chickpeas','Buffalo Meat'].map((item,i)=>(
            <span key={i} style={{ margin:'0 2rem',color:'rgba(255,255,255,.85)',
              fontWeight:600,fontSize:'.82rem',letterSpacing:'.08em' }}>
              <span style={{ color:'#C4962A',marginRight:'.75rem' }}>&#10022;</span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ PRODUCTS ═══ */}
      <section id="products" style={{ padding:'7rem 1.5rem',background:'#FAFAF7' }}>
        <div style={{ maxWidth:'72rem',margin:'0 auto' }}>
          <div className="reveal" style={{ textAlign:'center',marginBottom:'4rem' }}>
            <span style={{ display:'inline-block',padding:'.25rem 1rem',borderRadius:999,
              fontSize:'.72rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',
              background:'rgba(196,150,42,.12)',color:'#C4962A',border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Our Products</span>
            <h2 style={{ margin:'.5rem 0 .75rem',fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:"'Playfair Display',Georgia,serif",color:'#1A1714',fontWeight:700,letterSpacing:'-.01em' }}>
              Export-Grade Commodities
            </h2>
            <p style={{ color:'#7A7268',maxWidth:'34rem',margin:'0 auto',lineHeight:1.8,fontSize:'.95rem' }}>
              Sourced from certified farms across India's finest agricultural belts.
            </p>
          </div>

          <div className="stagger" style={{ display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.75rem' }}>
            {[
              { name:'Kabuli Chickpeas',origin:'Rajasthan, India',minOrder:'25 MT',cert:'APEDA Certified',
                img:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=640&q=80&auto=format&fit=crop',
                color:'#D4A843',tags:['Non-GMO','Premium Grade'],
                desc:'Bold creamy white chickpeas. Popular across Middle East & Europe.' },
              { name:'Fresh Bananas',origin:'Maharashtra, India',minOrder:'10 MT',cert:'Phytosanitary Cert.',
                img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=640&q=80&auto=format&fit=crop',
                color:'#E8C830',tags:['G9 Variety','Export Grade'],
                desc:'G9 Cavendish variety exported to Gulf, SEA and African markets.' },
              { name:'Whole Leaf Tobacco',origin:'Andhra Pradesh',minOrder:'5 MT',cert:'TobaccoBoard Cert.',
                img:'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=640&q=80&auto=format&fit=crop',
                color:'#8B6914',tags:['Virginia','Burley'],
                desc:'Virginia & Burley varieties compliant with international norms.' },
              { name:'Areca Nuts',origin:'Karnataka, India',minOrder:'10 MT',cert:'FSSAI Approved',
                img:'https://images.unsplash.com/photo-1612539465609-70e3a3b26b0f?w=640&q=80&auto=format&fit=crop',
                color:'#C4962A',tags:['Split','Whole'],
                desc:'Premium split & whole areca nuts from select Karnataka farms.' },
              { name:'Sesame & Maize',origin:'Madhya Pradesh',minOrder:'20 MT',cert:'ISO 9001:2015',
                img:'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=640&q=80&auto=format&fit=crop',
                color:'#D4C060',tags:['Natural','Hulled'],
                desc:'Natural & hulled sesame seeds plus yellow maize for food industries.' },
              { name:'Desi Chickpeas',origin:'Madhya Pradesh',minOrder:'25 MT',cert:'APEDA Certified',
                img:'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=640&q=80&auto=format&fit=crop',
                color:'#B5860D',tags:['High Protein','Asian Grade'],
                desc:'High protein small brown chickpeas used widely in Asian markets.' },
            ].map((p)=>(
              <div key={p.name} className="reveal"
                style={{ borderRadius:'1.25rem',background:'white',overflow:'hidden',
                  border:'1px solid rgba(196,150,42,.12)',
                  boxShadow:'0 4px 24px rgba(0,0,0,.06)',
                  display:'flex',flexDirection:'column',
                  transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-8px)';(e.currentTarget as HTMLElement).style.boxShadow='0 20px 60px rgba(0,0,0,.14)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 4px 24px rgba(0,0,0,.06)';}}>
                <div style={{ height:210,background:p.color,position:'relative',overflow:'hidden' }}>
                  <img src={p.img} alt={p.name}
                    style={{ width:'100%',height:'100%',objectFit:'cover',display:'block',
                      transition:'transform .5s' }}
                    onMouseEnter={e=>{(e.target as HTMLImageElement).style.transform='scale(1.07)';}}
                    onMouseLeave={e=>{(e.target as HTMLImageElement).style.transform='scale(1)';}}
                    onError={e=>{(e.target as HTMLImageElement).style.display='none';}} />
                  <span style={{ position:'absolute',top:'.75rem',right:'.75rem',
                    fontSize:'.7rem',padding:'.25rem .65rem',borderRadius:999,
                    background:'rgba(255,255,255,.95)',color:'#C4962A',fontWeight:700,
                    backdropFilter:'blur(8px)' }}>{p.cert}</span>
                </div>
                <div style={{ padding:'1.25rem',flex:1,display:'flex',flexDirection:'column' }}>
                  <h3 style={{ margin:'0 0 .25rem',fontFamily:"'Playfair Display',Georgia,serif",
                    fontSize:'1.05rem',color:'#1A1714',fontWeight:700 }}>{p.name}</h3>
                  <p style={{ margin:'0 0 .6rem',fontSize:'.78rem',color:'#C4962A',fontWeight:600 }}>
                    📍 {p.origin}
                  </p>
                  <p style={{ margin:'0 0 .9rem',fontSize:'.875rem',color:'#7A7268',lineHeight:1.65,flex:1 }}>
                    {p.desc}
                  </p>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:'.3rem',marginBottom:'1rem' }}>
                    {p.tags.map(t=>(
                      <span key={t} style={{ fontSize:'.7rem',padding:'.2rem .6rem',borderRadius:999,
                        background:'rgba(196,150,42,.1)',color:'#A67820',fontWeight:600,
                        border:'1px solid rgba(196,150,42,.2)' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',
                    paddingTop:'.9rem',borderTop:'1px solid rgba(196,150,42,.12)' }}>
                    <span style={{ fontSize:'.8rem',color:'#7A7268',fontWeight:500 }}>Min: {p.minOrder}</span>
                    <Link to="/contact" style={{ fontSize:'.78rem',fontWeight:700,
                      padding:'.4rem 1rem',borderRadius:999,textDecoration:'none',
                      background:'linear-gradient(135deg,#C4962A,#A67820)',color:'white',
                      boxShadow:'0 4px 14px rgba(196,150,42,.35)',
                      transition:'transform .2s,box-shadow .2s' }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-2px)';(e.currentTarget as HTMLElement).style.boxShadow='0 8px 24px rgba(196,150,42,.5)';}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 4px 14px rgba(196,150,42,.35)';}}>Get Quote ↗</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section id="why-us" style={{ padding:'7rem 1.5rem',
        background:'linear-gradient(180deg,#F5F0E8,#EDE5D5)' }}>
        <div style={{ maxWidth:'72rem',margin:'0 auto' }}>
          <div className="reveal" style={{ textAlign:'center',marginBottom:'4rem' }}>
            <span style={{ display:'inline-block',padding:'.25rem 1rem',borderRadius:999,
              fontSize:'.72rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',
              background:'rgba(196,150,42,.12)',color:'#C4962A',border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Why Choose Us</span>
            <h2 style={{ margin:'.5rem 0',fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:"'Playfair Display',Georgia,serif",color:'#1A1714',fontWeight:700 }}>
              Built for Global Trade
            </h2>
          </div>
          <div className="stagger" style={{ display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.5rem' }}>
            {[
              { emoji:'✅',title:'Certified Quality',
                desc:'APEDA, FSSAI & ISO certified. Every shipment verified by third-party labs.' },
              { emoji:'✈️',title:'Reliable Logistics',
                desc:'Door-to-port handling, custom clearance and on-time delivery guaranteed.' },
              { emoji:'🌎',title:'40+ Nations Served',
                desc:'Trusted buyers across Middle East, Europe, South East Asia & Africa.' },
              { emoji:'🌿',title:'Farm Fresh Sourcing',
                desc:'Direct from verified farms. Zero middlemen. Maximum freshness guaranteed.' },
              { emoji:'👥',title:'Dedicated Support',
                desc:'Personal account managers & 24/7 WhatsApp support end-to-end.' },
              { emoji:'⭐',title:'Premium Grade Only',
                desc:'We reject up to 30% of supply. Only export-grade produce leaves us.' },
            ].map(({ emoji, title, desc })=>(
              <div key={title} className="reveal"
                style={{ padding:'1.75rem',borderRadius:'1.25rem',background:'white',
                  border:'1px solid rgba(196,150,42,.12)',
                  boxShadow:'0 4px 24px rgba(0,0,0,.05)',
                  transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-8px)';(e.currentTarget as HTMLElement).style.boxShadow='0 20px 60px rgba(0,0,0,.1)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 4px 24px rgba(0,0,0,.05)';}}>
                <div style={{ width:54,height:54,borderRadius:14,marginBottom:'1rem',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.6rem',
                  background:'linear-gradient(135deg,rgba(196,150,42,.15),rgba(196,150,42,.05))',
                  border:'1px solid rgba(196,150,42,.2)' }}>{emoji}</div>
                <h3 style={{ margin:'0 0 .5rem',fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'1.05rem',color:'#1A1714',fontWeight:700 }}>{title}</h3>
                <p style={{ margin:0,fontSize:'.875rem',color:'#7A7268',lineHeight:1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding:'5rem 1.5rem',
        background:'linear-gradient(135deg,#1B2B4B 0%,#243860 100%)' }}>
        <div style={{ maxWidth:'72rem',margin:'0 auto',
          display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',
          gap:'2rem',textAlign:'center' }}>
          {[['40+','Nations Served'],['2018','Established'],['6+','Product Lines'],['100%','Export Grade']].map(([v,l])=>(
            <div key={l} className="reveal">
              <div style={{ fontSize:'3.2rem',fontWeight:800,color:'#C4962A',
                fontFamily:"'Playfair Display',Georgia,serif",lineHeight:1.1 }}>{v}</div>
              <div style={{ fontSize:'.85rem',color:'rgba(255,255,255,.65)',
                marginTop:'.5rem',letterSpacing:'.04em' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ padding:'7rem 1.5rem',background:'#FAFAF7' }}>
        <div style={{ maxWidth:'72rem',margin:'0 auto' }}>
          <div className="reveal" style={{ textAlign:'center',marginBottom:'4rem' }}>
            <span style={{ display:'inline-block',padding:'.25rem 1rem',borderRadius:999,
              fontSize:'.72rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',
              background:'rgba(196,150,42,.12)',color:'#C4962A',border:'1px solid rgba(196,150,42,.3)',
              marginBottom:'1rem' }}>Our Services</span>
            <h2 style={{ margin:'.5rem 0',fontSize:'clamp(2rem,4vw,3rem)',
              fontFamily:"'Playfair Display',Georgia,serif",color:'#1A1714',fontWeight:700 }}>
              End-to-End Export Solutions
            </h2>
          </div>
          <div className="stagger" style={{ display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:'1.5rem' }}>
            {[
              { emoji:'📦',title:'Custom Packaging',
                desc:'Branded or neutral packing in jute, HDPE or vacuum-sealed formats.' },
              { emoji:'📋',title:'Quality Assurance',
                desc:'Pre-shipment inspection, lab reports & phytosanitary certification.' },
              { emoji:'✈️',title:'Freight & Logistics',
                desc:'FOB, CIF, CFR terms. Full documentation & customs support.' },
              { emoji:'📈',title:'Market Advisory',
                desc:'Commodity pricing insights, seasonal availability & trade consultation.' },
            ].map(({ emoji, title, desc })=>(
              <div key={title} className="reveal"
                style={{ padding:'2rem',borderRadius:'1.25rem',background:'white',textAlign:'center',
                  border:'1px solid rgba(196,150,42,.12)',
                  boxShadow:'0 4px 24px rgba(0,0,0,.05)',
                  transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-8px)';(e.currentTarget as HTMLElement).style.boxShadow='0 20px 60px rgba(0,0,0,.1)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 4px 24px rgba(0,0,0,.05)';}}>
                <div style={{ width:64,height:64,borderRadius:16,margin:'0 auto 1.25rem',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.8rem',
                  background:'linear-gradient(135deg,rgba(196,150,42,.15),rgba(196,150,42,.05))',
                  border:'1px solid rgba(196,150,42,.25)' }}>{emoji}</div>
                <h3 style={{ margin:'0 0 .5rem',fontFamily:"'Playfair Display',Georgia,serif",
                  fontSize:'1.05rem',color:'#1A1714',fontWeight:700 }}>{title}</h3>
                <p style={{ margin:0,fontSize:'.875rem',color:'#7A7268',lineHeight:1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'7rem 1.5rem',
        background:'linear-gradient(135deg,#1B2B4B 0%,#243860 100%)',
        position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',top:'-6rem',right:'-6rem',width:'30rem',height:'30rem',
          borderRadius:'50%',background:'rgba(196,150,42,.06)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',bottom:'-6rem',left:'-6rem',width:'24rem',height:'24rem',
          borderRadius:'50%',background:'rgba(196,150,42,.04)',pointerEvents:'none' }} />
        <div className="reveal" style={{ maxWidth:'46rem',margin:'0 auto',textAlign:'center',
          position:'relative',zIndex:1 }}>
          <span style={{ display:'inline-block',padding:'.25rem 1rem',borderRadius:999,
            fontSize:'.72rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',
            background:'rgba(196,150,42,.15)',color:'#C4962A',border:'1px solid rgba(196,150,42,.35)',
            marginBottom:'1.5rem' }}>Ready to Trade?</span>
          <h2 style={{ margin:'0 0 1rem',fontSize:'clamp(2rem,4vw,3rem)',
            fontFamily:"'Playfair Display',Georgia,serif",color:'white',fontWeight:700 }}>
            Let's Build a <span style={{ color:'#C4962A',fontStyle:'italic' }}>Lasting Partnership</span>
          </h2>
          <p style={{ margin:'0 0 2.5rem',color:'rgba(255,255,255,.72)',lineHeight:1.8,fontSize:'.95rem' }}>
            Send your requirements and receive a detailed quotation within 24 hours.
            Our team is ready to assist you.
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',marginBottom:'2.5rem' }}>
            <Link to="/contact" style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',
              padding:'1.1rem 2.25rem',borderRadius:999,color:'white',fontWeight:700,
              textDecoration:'none',fontSize:'.95rem',
              background:'linear-gradient(135deg,#C4962A,#A67820)',
              boxShadow:'0 10px 36px rgba(196,150,42,.45)',
              transition:'transform .2s,box-shadow .2s' }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 16px 48px rgba(196,150,42,.6)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='none';(e.currentTarget as HTMLElement).style.boxShadow='0 10px 36px rgba(196,150,42,.45)';}}>Request a Quote ↗</Link>
            <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',
                padding:'1.1rem 2.25rem',borderRadius:999,fontWeight:700,textDecoration:'none',
                fontSize:'.95rem',border:'2px solid rgba(196,150,42,.5)',color:'#C4962A',
                background:'rgba(196,150,42,.08)',transition:'all .2s' }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.18)';(e.currentTarget as HTMLElement).style.borderColor='#C4962A';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.08)';(e.currentTarget as HTMLElement).style.borderColor='rgba(196,150,42,.5)';}}>
              📱 WhatsApp Us
            </a>
          </div>
          <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'2rem' }}>
            {['No Hidden Fees','24h Response','Certified Quality'].map(txt=>(
              <div key={txt} style={{ display:'flex',alignItems:'center',gap:'.5rem' }}>
                <div style={{ width:20,height:20,borderRadius:'50%',
                  background:'rgba(196,150,42,.2)',border:'1px solid rgba(196,150,42,.4)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:'#C4962A',fontSize:'.75rem',fontWeight:700,flexShrink:0 }}>✓</div>
                <span style={{ fontSize:'.875rem',color:'rgba(255,255,255,.8)',fontWeight:500 }}>{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
