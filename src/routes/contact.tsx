import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const PRODUCTS = [
  'Kabuli Chickpeas', 'Desi Chickpeas', 'Fresh Bananas',
  'Whole Leaf Tobacco', 'Areca Nuts', 'Sesame Seeds',
  'Maize / Corn', 'Buffalo Meat', 'Paper Products', 'Other',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', product: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const subject = encodeURIComponent(`Quote Request - ${form.product}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nProduct: ${form.product}\nMessage: ${form.message}`);
      window.open(`mailto:exports@mfsglobalindustries.com?subject=${subject}&body=${body}`);
      setStatus('success');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', company: '', product: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const G = '#C4962A';
  const N = '#1B2B4B';

  const inp: React.CSSProperties = {
    width: '100%', borderRadius: 12, border: '1px solid #E5E1D8',
    background: '#fff', padding: '12px 16px', fontSize: 14,
    color: '#1A1714', outline: 'none', fontFamily: 'inherit',
    transition: 'border-color .2s, box-shadow .2s',
  };

  const infoCards = [
    { icon: '✉️', title: 'Email Us', value: 'exports@mfsglobalindustries.com', href: 'mailto:exports@mfsglobalindustries.com' },
    { icon: '💬', title: 'WhatsApp', value: '+91 62663 16279', href: 'https://wa.me/916266316279' },
    { icon: '📍', title: 'Location', value: 'Madhya Pradesh, India', href: null },
    { icon: '⏱️', title: 'Response Time', value: 'Within 24 business hours', href: null },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7' }}>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #0F1E35 100%)`, padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
        <p style={{ color: G, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          ── Get In Touch
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>
          Request a <span style={{ color: G }}>Quote</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 18, maxWidth: 480, margin: '0 auto' }}>
          Tell us your requirements. We respond within 24 business hours.
        </p>
      </section>

      {/* Body */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>

          {/* Left – info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {infoCards.map(({ icon, title, value, href }) => (
              <div key={title} style={{
                background: '#fff', borderRadius: 16, border: '1px solid #E5E1D8',
                padding: '1.2rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start',
                boxShadow: '0 2px 12px rgba(0,0,0,.06)',
              }}>
                <span style={{ fontSize: 24 }}>{icon}</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7268', marginBottom: 4 }}>{title}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 15, fontWeight: 500, color: '#1A1714', textDecoration: 'none', wordBreak: 'break-all' }}
                      onMouseEnter={e => (e.currentTarget.style.color = G)}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1A1714')}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontSize: 15, fontWeight: 500, color: '#1A1714', margin: 0 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Certs */}
            <div style={{ background: N, borderRadius: 16, padding: '1.4rem', color: '#fff' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: '0.8rem' }}>Certifications</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['APEDA', 'FSSAI', 'ISO 9001', 'Phytosanitary', 'Fumigation'].map(c => (
                  <span key={c} style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,.1)', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.85)' }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #E5E1D8', boxShadow: '0 4px 32px rgba(0,0,0,.08)', padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: 56, marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.8rem', color: '#1A1714', marginBottom: '.6rem' }}>Message Sent!</h2>
                <p style={{ color: '#7A7268', marginBottom: '1.5rem' }}>We'll get back to you within 24 business hours.</p>
                <button onClick={() => setStatus('idle')} style={{
                  background: `linear-gradient(135deg, ${G}, #8B6914)`, color: '#fff',
                  border: 'none', borderRadius: 12, padding: '12px 28px', fontSize: 15,
                  fontWeight: 600, cursor: 'pointer',
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.6rem', color: '#1A1714', marginBottom: 4 }}>Request a Quote</h2>
                  <p style={{ fontSize: 14, color: '#7A7268' }}>Fill in the form — we respond within 24 hours.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3630', marginBottom: 6 }}>Full Name *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Mohammed Al-Rashid" style={inp} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3630', marginBottom: 6 }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" style={inp} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3630', marginBottom: 6 }}>Company</label>
                    <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Al-Noor Trading, UAE" style={inp} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3630', marginBottom: 6 }}>Product *</label>
                    <select name="product" required value={form.product} onChange={handleChange} style={{ ...inp, cursor: 'pointer' }}>
                      <option value="">Select a product…</option>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3630', marginBottom: 6 }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your requirements — quantity, grade, packaging, destination port…"
                    style={{ ...inp, resize: 'none' }} />
                </div>

                {status === 'error' && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: '#B91C1C' }}>
                    ⚠️ Something went wrong. Please try again or WhatsApp us directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} style={{
                  background: `linear-gradient(135deg, ${G} 0%, #8B6914 100%)`,
                  color: '#fff', border: 'none', borderRadius: 14, padding: '15px',
                  fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1, letterSpacing: '0.03em',
                  boxShadow: '0 4px 20px rgba(196,150,42,.35)',
                }}>
                  {status === 'sending' ? '⏳ Sending…' : '🚀 Send Request'}
                </button>

                <p style={{ textAlign: 'center', fontSize: 13, color: '#B0A99F' }}>
                  Or reach us on{' '}
                  <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
                    style={{ color: G, fontWeight: 600, textDecoration: 'none' }}>
                    WhatsApp +91 62663 16279
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});
