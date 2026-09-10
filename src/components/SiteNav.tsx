// src/components/SiteNav.tsx
import React, { useState, useEffect } from 'react';

export const SiteNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\
avbar \\}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* PRIORITY 1: LOGO LOADING */}
        <img 
          src="/logo.png" 
          alt="MFS Global Logo" 
          className="logo-img"
          onError={(e) => {
            // Fallback if image missing: show text only
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('logo-fallback');
            if(fallback) fallback.style.display = 'block';
          }}
        />
        <span id="logo-fallback" className="logo-text" style={{ display: 'none' }}>MFS Global</span>
        
        {/* Mobile Menu Toggle (Placeholder) */}
        <button className="btn-luxury" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Menu</button>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', color: 'white' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Home</a>
        <a href="#products" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Products</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
      </div>
    </nav>
  );
};