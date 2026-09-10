// blog.tsx — no external icon deps
import { createFileRoute, Link } from '@tanstack/react-router';

const POSTS = [
  {
    title: 'How India Became the World\'s Top Chickpea Exporter',
    date: 'Aug 2026', tag: 'Industry Insights',
    img: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=700&q=80&auto=format&fit=crop',
    excerpt: 'India supplies over 65% of global chickpea demand. Learn how farm-level quality control drives this dominance.',
  },
  {
    title: 'APEDA Certification: What Buyers Need to Know',
    date: 'Jul 2026', tag: 'Compliance',
    img: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=700&q=80&auto=format&fit=crop',
    excerpt: 'APEDA certification is mandatory for agricultural exports from India. Here\'s what it means for you as a buyer.',
  },
  {
    title: 'Top 5 Markets for Indian Agri Exports in 2026',
    date: 'Jun 2026', tag: 'Market Trends',
    img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=700&q=80&auto=format&fit=crop',
    excerpt: 'UAE, Saudi Arabia, Bangladesh, Malaysia, and the UK lead demand for Indian agricultural commodities this year.',
  },
  {
    title: 'Phytosanitary Certificates Explained',
    date: 'May 2026', tag: 'Compliance',
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=700&q=80&auto=format&fit=crop',
    excerpt: 'Every shipment of fresh produce needs a phytosanitary certificate. We explain the process step by step.',
  },
  {
    title: 'Areca Nut: The Underrated Export Commodity',
    date: 'Apr 2026', tag: 'Product Spotlight',
    img: 'https://images.unsplash.com/photo-1612539465609-70e3a3b26b0f?w=700&q=80&auto=format&fit=crop',
    excerpt: 'Karnataka areca nuts are in high demand across Southeast Asia. Here\'s why MFS sources only premium grade.',
  },
  {
    title: 'Cold Chain Logistics for Banana Exports',
    date: 'Mar 2026', tag: 'Logistics',
    img: 'https://images.unsplash.com/photo-1543218024-57a70143c369?w=700&q=80&auto=format&fit=crop',
    excerpt: 'Maintaining the cold chain from farm to port is critical for G9 Cavendish banana quality. Our process explained.',
  },
];

const G = '#C4962A';
const N = '#1B2B4B';

function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7' }}>

      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${N} 0%, #0F1E35 100%)`,
        padding: '5rem 1.5rem 4rem', textAlign: 'center',
      }}>
        <p style={{ color: G, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          — Insights & Updates
        </p>
        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#fff', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2,
        }}>
          MFS <span style={{ color: G }}>Blog</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
          Industry insights, compliance guides, and market trends for global agri trade.
        </p>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {POSTS.map((post, i) => (
            <article key={i} style={{
              background: '#fff',
              borderRadius: 20,
              border: '1px solid #E5E1D8',
              boxShadow: '0 2px 16px rgba(0,0,0,.06)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform .25s ease, box-shadow .25s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,.06)';
              }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img
                  src={post.img} alt={post.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                />
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 999,
                    background: `${G}18`, color: G,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{post.tag}</span>
                  <span style={{ fontSize: 12, color: '#B0A99F' }}>{post.date}</span>
                </div>

                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '1.15rem', fontWeight: 700,
                  color: '#1A1714', lineHeight: 1.4, margin: 0,
                }}>{post.title}</h2>

                <p style={{ fontSize: 14, color: '#7A7268', lineHeight: 1.65, margin: 0, flex: 1 }}>{post.excerpt}</p>

                <div style={{ paddingTop: '0.5rem' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 13, fontWeight: 700, color: G, textDecoration: 'none',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '4rem', textAlign: 'center',
          padding: '3rem 2rem', background: N,
          borderRadius: 24, color: '#fff',
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.8rem', marginBottom: '0.8rem' }}>
            Ready to source premium agri products?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', fontSize: 16 }}>
            Get a custom quote within 24 hours.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${G}, #8B6914)`,
              color: '#fff', textDecoration: 'none',
              padding: '14px 32px', borderRadius: 12,
              fontWeight: 700, fontSize: 15,
              boxShadow: '0 4px 20px rgba(196,150,42,.4)',
            }}
          >
            Request a Quote →
          </Link>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute('/blog')({
  component: BlogPage,
});
