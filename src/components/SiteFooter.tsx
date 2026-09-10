import { Link } from '@tanstack/react-router';

export default function SiteFooter() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg,#1B2B4B 0%,#0F1E35 100%)',
      borderTop: '1px solid rgba(196,150,42,.2)',
      padding: '4rem 1.5rem 2rem',
      color: 'rgba(255,255,255,.75)',
      fontFamily: 'Inter,system-ui,sans-serif',
    }}>
      <div style={{ maxWidth:'72rem', margin:'0 auto' }}>

        {/* TOP GRID */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',
          gap:'3rem', marginBottom:'3rem' }}>

          {/* BRAND */}
          <div style={{ gridColumn:'span 1' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'.6rem', marginBottom:'1rem' }}>
              <div style={{ width:38, height:38, borderRadius:10,
                background:'linear-gradient(135deg,#C4962A,#8B6914)',
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 4px 14px rgba(196,150,42,.4)', flexShrink:0 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L13.5 7.5H19.5L14.8 11.2L16.7 17L11 13.5L5.3 17L7.2 11.2L2.5 7.5H8.5L11 2Z" fill="white" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:'Playfair Display,Georgia,serif', fontSize:'1rem',
                  fontWeight:700, color:'white', lineHeight:1.1 }}>MFS Global</div>
                <div style={{ fontSize:'.6rem', color:'#C4962A', letterSpacing:'.08em', textTransform:'uppercase', fontWeight:600 }}>Industries</div>
              </div>
            </div>
            <p style={{ fontSize:'.85rem', lineHeight:1.75, color:'rgba(255,255,255,.6)', marginBottom:'1.25rem', maxWidth:'18rem' }}>
              Premium agricultural commodities exported from the heart of India. Connecting India's finest produce with buyers across 40+ nations.
            </p>
            {/* Social icons */}
            <div style={{ display:'flex', gap:'.6rem' }}>
              {[
                { href:'#', label:'LinkedIn', svg:'<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>' },
                { href:'#', label:'X/Twitter', svg:'<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>' },
                { href:'https://wa.me/916266316279', label:'WhatsApp', svg:'<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width:34, height:34, borderRadius:8, display:'flex', alignItems:'center',
                    justifyContent:'center', background:'rgba(255,255,255,.07)',
                    border:'1px solid rgba(255,255,255,.12)', color:'rgba(255,255,255,.7)',
                    transition:'background .2s, color .2s', textDecoration:'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(196,150,42,.2)'; (e.currentTarget as HTMLElement).style.color='#C4962A'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.07)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.7)'; }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: s.svg }} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{ color:'white', fontWeight:700, fontSize:'.8rem', letterSpacing:'.1em',
              textTransform:'uppercase', marginBottom:'1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'.6rem' }}>
              {[['Home','/'],['Products','/products'],['Why Us','/#why-us'],['Services','/#services'],['Contact','/contact']].map(([label,href]) => (
                <li key={label}>
                  <a href={href} style={{ color:'rgba(255,255,255,.65)', textDecoration:'none',
                    fontSize:'.88rem', display:'flex', alignItems:'center', gap:'.4rem',
                    transition:'color .2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='#C4962A'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.65)'; }}>
                    <span style={{ color:'#C4962A', fontSize:'.75rem' }}>→</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 style={{ color:'white', fontWeight:700, fontSize:'.8rem', letterSpacing:'.1em',
              textTransform:'uppercase', marginBottom:'1.25rem' }}>Products</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'.6rem' }}>
              {['Kabuli Chickpeas','Fresh Bananas','Whole Leaf Tobacco','Areca Nuts','Sesame & Maize','Buffalo Meat'].map(p => (
                <li key={p}>
                  <a href="/products" style={{ color:'rgba(255,255,255,.65)', textDecoration:'none',
                    fontSize:'.88rem', display:'flex', alignItems:'center', gap:'.4rem', transition:'color .2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='#C4962A'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.65)'; }}>
                    <span style={{ color:'#C4962A', fontSize:'.75rem' }}>→</span>{p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={{ color:'white', fontWeight:700, fontSize:'.8rem', letterSpacing:'.1em',
              textTransform:'uppercase', marginBottom:'1.25rem' }}>Contact</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'.9rem' }}>
              {[
                { icon:'📧', label:'exports@mfsglobalindustries.com', href:'mailto:exports@mfsglobalindustries.com' },
                { icon:'📱', label:'+91 62663 16279', href:'https://wa.me/916266316279' },
                { icon:'📍', label:'Madhya Pradesh, India', href:'#' },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'flex-start', gap:'.6rem',
                    color:'rgba(255,255,255,.65)', textDecoration:'none', fontSize:'.86rem',
                    lineHeight:1.5, transition:'color .2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='#C4962A'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.65)'; }}>
                  <span style={{ flexShrink:0 }}>{c.icon}</span>{c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:'1.75rem',
          display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between',
          gap:'1rem', fontSize:'.8rem', color:'rgba(255,255,255,.4)' }}>
          <p style={{ margin:0 }}>&copy; {new Date().getFullYear()} MFS Global Industries. All rights reserved.</p>
          <p style={{ margin:0 }}>Made with ♥ in India &nbsp;|&nbsp; <span style={{ color:'rgba(196,150,42,.6)' }}>Premium Agricultural Exports</span></p>
        </div>
      </div>
    </footer>
  );
}
