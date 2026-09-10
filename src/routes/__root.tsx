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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function Root() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <html lang="en">
      <Head>
        <Title>MFS Global Industries | Premium Agricultural Exports</Title>
        <meta name="description" content="Leading agricultural exporter from India. Trusted in 40+ nations." />
        <link rel="canonical" href="https://mfsglobalindustries.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
          <SiteNav />
          <main className="flex-grow">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
