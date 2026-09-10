// src/routes/__root.tsx
import { Outlet, Scripts, Meta, Title, Head, useNavigate } from '@tanstack/react-router';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import '../styles.css';
import React, { useEffect } from 'react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function Root() {
  useScrollReveal();
  return (
    <html lang="en">
      <Head>
        <Title>MFS Global Industries | Premium Exports</Title>
        <meta name="description" content="World-class agricultural exports from India." />
        <link rel="canonical" href="https://mfsglobalindustries.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
          <SiteNav />
          <main className="flex-grow pt-20">
            <Outlet />
          </main>
          {/* Simple Footer Placeholder if SiteFooter is missing */}
          <footer style={{ background: '#1B2B4B', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
            <p>&copy; 2026 MFS Global Industries. All rights reserved.</p>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
