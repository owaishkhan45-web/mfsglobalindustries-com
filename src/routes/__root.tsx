import '../styles.css';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  useEffect(() => {
    // Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);

    // Global premium styles
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        background: #FAFAF7;
        color: #1A1714;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }
      ::selection { background: rgba(196,150,42,.25); color: #1A1714; }

      /* Custom cursor */
      #mfs-cursor {
        position: fixed; top: 0; left: 0; z-index: 99999;
        pointer-events: none; mix-blend-mode: difference;
        transition: transform .15s ease;
      }
      #mfs-cursor .dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: #C4962A;
        transform: translate(-50%, -50%);
        transition: width .2s, height .2s, opacity .2s;
      }
      #mfs-cursor .ring {
        position: absolute; top: 50%; left: 50%;
        width: 36px; height: 36px; border-radius: 50%;
        border: 1.5px solid rgba(196,150,42,.6);
        transform: translate(-50%, -50%);
        transition: width .35s ease, height .35s ease, opacity .35s ease, border-color .2s;
      }
      body:hover #mfs-cursor .ring { opacity: 1; }
      a:hover ~ #mfs-cursor .ring,
      button:hover ~ #mfs-cursor .ring { width: 56px; height: 56px; border-color: #C4962A; }

      /* Scroll reveal */
      .sr { opacity: 0; transform: translateY(50px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
      .sr.in { opacity: 1; transform: translateY(0); }
      .sr-l { opacity: 0; transform: translateX(-60px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
      .sr-l.in { opacity: 1; transform: translateX(0); }
      .sr-r { opacity: 0; transform: translateX(60px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
      .sr-r.in { opacity: 1; transform: translateX(0); }
      .sr-s { opacity: 0; transform: scale(.92); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
      .sr-s.in { opacity: 1; transform: scale(1); }

      /* Stagger delays */
      .d1 { transition-delay: .05s; } .d2 { transition-delay: .12s; }
      .d3 { transition-delay: .19s; } .d4 { transition-delay: .26s; }
      .d5 { transition-delay: .33s; } .d6 { transition-delay: .40s; }

      /* Keyframes */
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
      @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
      @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(196,150,42,.5); } 70% { box-shadow: 0 0 0 16px rgba(196,150,42,0); } 100% { box-shadow: 0 0 0 0 rgba(196,150,42,0); } }
      @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      /* Section tag pill */
      .sec-tag {
        display: inline-flex; align-items: center; gap: .4rem;
        padding: .3rem 1rem; border-radius: 999px;
        font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
        background: rgba(196,150,42,.1); color: #C4962A;
        border: 1px solid rgba(196,150,42,.28);
        margin-bottom: 1.25rem;
      }
      .sec-tag::before { content: ''; width:6px; height:6px; border-radius:50%; background:#C4962A; animation: pulse-ring 2s infinite; }

      /* Section heading */
      .sec-h2 {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: clamp(2.2rem, 4.5vw, 3.4rem);
        font-weight: 700; line-height: 1.1; letter-spacing: -.02em;
        color: #1A1714; margin-bottom: 1rem;
      }
      .sec-h2 span { color: #C4962A; font-style: italic; }
      .sec-sub {
        font-size: .98rem; line-height: 1.85; color: #7A7268;
        max-width: 36rem; margin: 0 auto;
      }

      /* Gold divider */
      .gold-divider {
        width: 56px; height: 3px; border-radius: 99px;
        background: linear-gradient(90deg, #C4962A, #A67820);
        margin: 1.25rem auto;
      }

      /* Premium card */
      .pcard {
        background: white; border-radius: 1.5rem;
        border: 1px solid rgba(196,150,42,.1);
        box-shadow: 0 4px 32px rgba(0,0,0,.06);
        transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1);
        overflow: hidden;
      }
      .pcard:hover {
        transform: translateY(-10px) scale(1.01);
        box-shadow: 0 28px 72px rgba(0,0,0,.13);
      }

      /* Grain overlay */
      .grain::after {
        content: ''; position: absolute; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.04'/%3E%3C/svg%3E");
        background-size: 200px; opacity: .5; pointer-events: none; z-index: 0;
      }

      /* Horizontal scroll for mobile */
      @media (max-width: 640px) {
        .sec-h2 { font-size: 2rem; }
      }
    `;
    document.head.appendChild(style);

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.id = 'mfs-cursor';
    cursor.innerHTML = '<div class="dot"></div><div class="ring"></div>';
    document.body.appendChild(cursor);

    let cx = 0, cy = 0, rx = 0, ry = 0;
    const dot = cursor.querySelector('.dot') as HTMLElement;
    const ring = cursor.querySelector('.ring') as HTMLElement;

    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    });

    const animRing = () => {
      rx += (cx - rx) * 0.12;
      ry += (cy - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(animRing);
    };
    animRing();

    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.style.width = '12px'; dot.style.height = '12px';
      });
      el.addEventListener('mouseleave', () => {
        dot.style.width = '8px'; dot.style.height = '8px';
      });
    });

    // Scroll reveal
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const observe = () =>
      document.querySelectorAll('.sr,.sr-l,.sr-r,.sr-s').forEach(el => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    // Parallax hero
    const onScroll = () => {
      const hero = document.getElementById('hero-bg');
      if (hero) hero.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Count-up
    const countUp = (el: Element) => {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const val = Math.round(target * (1 - Math.pow(1 - p, 4)));
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } }),
      { threshold: 0.5 }
    );
    const observeCounters = () =>
      document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
    observeCounters();
    new MutationObserver(observeCounters).observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect(); mo.disconnect(); cio.disconnect();
      window.removeEventListener('scroll', onScroll);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </>
  );
}
