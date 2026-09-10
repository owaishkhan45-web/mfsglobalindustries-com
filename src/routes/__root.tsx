import '../styles.css';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { LanguageProvider } from '@/contexts/LanguageContext';

function FontLoader() {
  useEffect(() => {
    const existing = document.getElementById('google-fonts-mfs');
    if (existing) return;
    const preconnect1 = Object.assign(document.createElement('link'), {
      rel: 'preconnect', href: 'https://fonts.googleapis.com',
    });
    const preconnect2 = Object.assign(document.createElement('link'), {
      rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous',
    });
    const fontLink = Object.assign(document.createElement('link'), {
      id: 'google-fonts-mfs',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap',
    });
    document.head.append(preconnect1, preconnect2, fontLink);
  }, []);
  return null;
}

function RootLayout() {
  return (
    <LanguageProvider>
      <FontLoader />
      <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
        <SiteNav />
        <main className="flex-1 pt-16 sm:pt-[70px]">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});


