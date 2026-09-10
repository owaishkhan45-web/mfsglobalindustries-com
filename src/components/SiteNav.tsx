import React from 'react';

export const SiteNav = () => {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%',
      background: 'rgba(26, 23, 20, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000, padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid #C4962A'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/logo.jpeg" alt="MFS Logo" style={{ height: '50px', width: 'auto' }} 
             onError={(e) => { e.target.style.display='none'; document.getElementById('txt-logo').style.display='block'; }} />
        <span id="txt-logo" style={{ display: 'none', fontFamily: 'Playfair Display', fontSize: '1.5rem', fontWeight: 'bold', color: '#C4962A' }}>MFS Global</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#products" style={{ color: 'white', textDecoration: 'none' }}>Products</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
};
