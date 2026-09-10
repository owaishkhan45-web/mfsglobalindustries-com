// src/routes/index.tsx
import { Link } from '@tanstack/react-router';
import { SiteNav } from '../components/SiteNav';

const products = [
  { name: 'Kabuli Chickpeas', origin: 'Rajasthan', cert: 'APEDA', img: '/chickpeas.jpg' },
  { name: 'Fresh Bananas', origin: 'Maharashtra', cert: 'Phyto', img: '/bananas.jpg' },
  { name: 'Whole Leaf Tobacco', origin: 'Andhra Pradesh', cert: 'TB', img: '/tobacco.jpg' },
  { name: 'Areca Nuts', origin: 'Karnataka', cert: 'FSSAI', img: '/areca.jpg' },
];

export function IndexRoute() {
  const handleMouseMove = (e: any) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--mouse-x', \\%\);
    btn.style.setProperty('--mouse-y', \\%\);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content reveal-up">
          <h1 className="hero-title text-gold-gradient">Global Trade, <br/>Rooted in Excellence</h1>
          <p className="hero-subtitle">Premium agricultural commodities exported from India to 40+ nations.</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="#products" className="btn-luxury" onMouseMove={handleMouseMove}>
              Explore Products
            </a>
            <Link to="/contact" className="btn-luxury" style={{ background: 'transparent', border: '2px solid white' }} onMouseMove={handleMouseMove}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl mb-4 text-navy reveal-up">Our Premium Portfolio</h2>
        <p className="text-center text-muted mb-12 reveal-up">Certified quality from farm to global market.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map((prod, idx) => (
            <div key={idx} className="card-premium reveal-up" style={{ transitionDelay: \\ms\ }}>
              <div style={{ height: '180px', background: '#f0f0f0', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                Product Image
              </div>
              <h3 className="text-2xl mb-2">{prod.name}</h3>
              <p className="text-sm font-bold text-gold mb-1">Origin: {prod.origin}</p>
              <p className="text-sm text-muted">Certification: {prod.cert}</p>
              <button className="btn-luxury" style={{ marginTop: '1.5rem', width: '100%', padding: '0.8rem' }} onMouseMove={handleMouseMove}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[#0F1E35] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 reveal-up">
          <h2 className="text-4xl text-gold-gradient mb-6">Why Global Leaders Choose MFS</h2>
          <p className="text-lg opacity-90">From APEDA certification to Halal compliance, we ensure every shipment meets international standards.</p>
        </div>
      </section>
    </>
  );
}
