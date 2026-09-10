import { useState, useEffect, useRef } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';

const LANGS = [
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'AR', label: 'العربية', flag: '🇸🇦' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
];

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/', label: 'Why Us', hash: '#why-us' },
  { to: '/', label: 'Services', hash: '#services' },
  { to: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(LANGS[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const router = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [router.location.pathname]);

  const navBg = scrolled
    ? 'rgba(27,43,75,0.97)'
    : 'linear-gradient(180deg,rgba(27,43,75,0.85) 0%,rgba(27,43,75,0) 100%)';

  return (
    <>
      <style>{`
        .snav-link { color:rgba(255,255,255,.85); text-decoration:none; font-size:.88rem;
          font-weight:500; padding:.3rem .1rem; position:relative; transition:color .2s; letter-spacing:.01em; }
        .snav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0;
          height:2px; background:#C4962A; border-radius:2px; transition:width .25s; }
        .snav-link:hover,.snav-link.active { color:#C4962A; }
        .snav-link:hover::after,.snav-link.active::after { width:100%; }
        .snav-quote { display:inline-flex; align-items:center; gap:.4rem;
          padding:.5rem 1.25rem; border-radius:999px; font-size:.82rem; font-weight:700;
          text-decoration:none; letter-spacing:.02em;
          background:linear-gradient(135deg,#C4962A,#A67820);
          color:white; box-shadow:0 4px 18px rgba(196,150,42,.4);
          transition:transform .2s,box-shadow .2s; border:none; cursor:pointer; }
        .snav-quote:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(196,150,42,.5); }
        @media(max-width:860px) { .snav-desktop { display:none!important; } .snav-hamburger { display:flex!important; } }
        @media(min-width:861px) { .snav-hamburger { display:none!important; } .snav-desktop { display:flex!important; } }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(27,43,75,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,150,42,.2)' : 'none',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,.3)' : 'none',
        transition: 'background .3s, backdrop-filter .3s, border-color .3s, box-shadow .3s',
        padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth:'72rem', margin:'0 auto', height:68,
          display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>

          {/* LOGO */}
          <Link to="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:'.55rem', flexShrink:0 }}>
            <div style={{ width:38, height:38, borderRadius:10,
              background:'linear-gradient(135deg,#C4962A,#8B6914)',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 14px rgba(196,150,42,.5)', flexShrink:0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L13.5 7.5H19.5L14.8 11.2L16.7 17L11 13.5L5.3 17L7.2 11.2L2.5 7.5H8.5L11 2Z" fill="white" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily:'Playfair Display,Georgia,serif', fontSize:'1rem',
                fontWeight:700, color:'white', lineHeight:1.1, letterSpacing:'.01em' }}>MFS Global</div>
              <div style={{ fontSize:'.6rem', color:'#C4962A', letterSpacing:'.08em',
                textTransform:'uppercase', fontWeight:600 }}>Industries</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="snav-desktop" style={{ alignItems:'center', gap:'1.75rem' }}>
            {NAV_LINKS.map(link => (
              <a key={link.label}
                href={link.hash ? `${link.to}${link.hash}` : link.to}
                className={`snav-link${router.location.pathname === link.to && !link.hash ? ' active' : ''}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="snav-desktop" style={{ alignItems:'center', gap:'.75rem' }}>
            {/* Language picker */}
            <div ref={langRef} style={{ position:'relative' }}>
              <button onClick={() => setLangOpen(p => !p)} style={{
                display:'flex', alignItems:'center', gap:'.35rem',
                padding:'.35rem .75rem', borderRadius:999, cursor:'pointer',
                background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.2)',
                color:'rgba(255,255,255,.9)', fontSize:'.8rem', fontWeight:500,
                transition:'background .2s',
              }}>
                <span>{lang.flag}</span>
                <span>{lang.code}</span>
                <span style={{ fontSize:'.65rem', opacity:.7 }}>{langOpen ? '▲' : '▼'}</span>
              </button>
              {langOpen && (
                <div style={{
                  position:'absolute', top:'calc(100% + .5rem)', right:0, minWidth:140,
                  background:'rgba(27,43,75,.97)', border:'1px solid rgba(196,150,42,.25)',
                  borderRadius:12, overflow:'hidden', boxShadow:'0 12px 40px rgba(0,0,0,.4)',
                  backdropFilter:'blur(20px)',
                }}>
                  {LANGS.map(l => (
                    <button key={l.code} onClick={() => { setLang(l); setLangOpen(false); }}
                      style={{
                        width:'100%', display:'flex', alignItems:'center', gap:'.6rem',
                        padding:'.65rem 1rem', background: l.code === lang.code ? 'rgba(196,150,42,.15)' : 'transparent',
                        border:'none', cursor:'pointer', color: l.code === lang.code ? '#C4962A' : 'rgba(255,255,255,.85)',
                        fontSize:'.82rem', fontWeight: l.code === lang.code ? 600 : 400,
                        transition:'background .15s',
                      }}>
                      <span>{l.flag}</span><span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="snav-quote">Get a Quote ↗</Link>
          </div>

          {/* HAMBURGER */}
          <button className="snav-hamburger" onClick={() => setMenuOpen(p => !p)}
            style={{ background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.2)',
              borderRadius:8, width:40, height:40, cursor:'pointer', color:'white', fontSize:'1.1rem',
              flexDirection:'column', alignItems:'center', justifyContent:'center', gap:5,
              transition:'background .2s', padding:0 }}>
            <div style={{ width:18, height:2, background:'white', borderRadius:2,
              transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none', transition:'transform .25s' }} />
            <div style={{ width:18, height:2, background:'white', borderRadius:2,
              opacity: menuOpen ? 0 : 1, transition:'opacity .25s' }} />
            <div style={{ width:18, height:2, background:'white', borderRadius:2,
              transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition:'transform .25s' }} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div style={{
          maxHeight: menuOpen ? '400px' : '0', overflow:'hidden',
          transition:'max-height .35s ease', background:'rgba(27,43,75,.98)',
          borderTop: menuOpen ? '1px solid rgba(196,150,42,.15)' : 'none',
        }}>
          <div style={{ padding:'1rem 1.5rem', display:'flex', flexDirection:'column', gap:'.25rem' }}>
            {NAV_LINKS.map(link => (
              <a key={link.label}
                href={link.hash ? `${link.to}${link.hash}` : link.to}
                style={{ padding:'.75rem .5rem', color:'rgba(255,255,255,.85)', textDecoration:'none',
                  fontSize:'.9rem', fontWeight:500, borderBottom:'1px solid rgba(255,255,255,.06)',
                  display:'block' }}>
                {link.label}
              </a>
            ))}
            <div style={{ marginTop:'1rem', display:'flex', alignItems:'center', gap:'1rem' }}>
              {LANGS.map(l => (
                <button key={l.code} onClick={() => setLang(l)}
                  style={{ background: l.code === lang.code ? 'rgba(196,150,42,.2)' : 'rgba(255,255,255,.07)',
                    border: l.code === lang.code ? '1px solid rgba(196,150,42,.5)' : '1px solid rgba(255,255,255,.15)',
                    color: l.code === lang.code ? '#C4962A' : 'rgba(255,255,255,.7)',
                    padding:'.3rem .65rem', borderRadius:999, fontSize:'.75rem', cursor:'pointer',
                    fontWeight: l.code === lang.code ? 700 : 400 }}>
                  {l.flag} {l.code}
                </button>
              ))}
            </div>
            <Link to="/contact" style={{ marginTop:'.75rem', textAlign:'center',
              padding:'.875rem', borderRadius:999, background:'linear-gradient(135deg,#C4962A,#A67820)',
              color:'white', fontWeight:700, fontSize:'.9rem', textDecoration:'none' }}>
              Get a Quote ↗
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
