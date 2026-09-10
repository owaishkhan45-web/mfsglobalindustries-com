import React from 'react';
import { Link } from '@tanstack/react-router';

const products = [
  { name: 'Kabuli Chickpeas', origin: 'Rajasthan', cert: 'APEDA' },
  { name: 'Fresh Bananas', origin: 'Maharashtra', cert: 'Phyto' },
  { name: 'Whole Leaf Tobacco', origin: 'Andhra Pradesh', cert: 'TB' },
  { name: 'Areca Nuts', origin: 'Karnataka', cert: 'FSSAI' }
];

export function IndexRoute() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* HERO */}
      <section style={{
        position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(to bottom, #0F1E35, #1B2B4B)', color: 'white', textAlign: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', opacity: 0.4 }}></div>
        <div style={{ position: 'relative', zIndex: 10, padding: '20px', maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3.5rem', marginBottom: '20px', background: 'linear-gradient(120deg, #C4962A, #F8D870, #C4962A)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shimmer 3s infinite' }}>
            Global Trade, Rooted in Excellence
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px', color: '#ddd' }}>Premium agricultural commodities exported from India.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#products" style={{ padding: '15px 30px', background: '#C4962A', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(196,150,42,0.3)' }}>Explore Products</a>
            <Link to="/contact" style={{ padding: '15px 30px', background: 'transparent', border: '2px solid white', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontSize: '2.5rem', color: '#1B2B4B', marginBottom: '40px' }}>Our Premium Portfolio</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map((p, i) => (
            <div key={i} style={{ padding: '20px', borderRadius: '20px', background: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <div style={{ height: '150px', background: '#f5f5f5', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>Image</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1B2B4B' }}>{p.name}</h3>
              <p style={{ color: '#C4962A', fontWeight: 'bold', fontSize: '0.9rem' }}>Origin: {p.origin}</p>
              <p style={{ color: '#777', fontSize: '0.9rem' }}>Cert: {p.cert}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER STRIP */}
      <footer style={{ background: '#0F1E35', color: 'white', padding: '40px', textAlign: 'center', marginTop: '50px' }}>
        <p>&copy; 2026 MFS Global Industries. All Rights Reserved.</p>
      </footer>
      
      {/* CSS for Shimmer */}
      <style>{
        @keyframes shimmer { to { background-position: 200% center; } }
        body { margin: 0; font-family: 'DM Sans', sans-serif; background: #FAFAF7; }
      }</style>
    </div>
  );
}
