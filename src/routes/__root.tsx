import '../styles.css';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  useEffect(() => {
    // Load premium fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);

    // Global base styles
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        background: #FAFAF7;
        color: #1A1714;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }
      img { max-width: 100%; height: auto; }
      a { color: inherit; }

      /* Scroll reveal animation */
      .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .reveal-left {
        opacity: 0;
        transform: translateX(-40px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal-left.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .reveal-right {
        opacity: 0;
        transform: translateX(40px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal-right.visible {
        opacity: 1;
        transform: translateX(0);
      }

      /* Staggered children */
      .stagger > *:nth-child(1) { transition-delay: 0ms; }
      .stagger > *:nth-child(2) { transition-delay: 100ms; }
      .stagger > *:nth-child(3) { transition-delay: 200ms; }
      .stagger > *:nth-child(4) { transition-delay: 300ms; }
      .stagger > *:nth-child(5) { transition-delay: 400ms; }
      .stagger > *:nth-child(6) { transition-delay: 500ms; }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      @keyframes fadeInUp {
        from { opacity:0; transform:translateY(30px); }
        to { opacity:1; transform:translateY(0); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(196,150,42,0.4); }
        50% { box-shadow: 0 0 0 12px rgba(196,150,42,0); }
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => observer.observe(el));
    };
    observe();

    // Re-run on route changes (SPA navigation)
    const routeObserver = new MutationObserver(observe);
    routeObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      routeObserver.disconnect();
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
