import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, WhatsappLogo, MapPin, Clock, CheckCircle, WarningCircle, ArrowRight } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

// ============================================================
// SETUP: Create a FREE account at https://formspree.io
// Then replace YOUR_FORM_ID below with your actual form ID
// e.g. 'xvgpzldq'  (find it in Formspree dashboard > New Form)
// ============================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type Status = 'idle' | 'sending' | 'success' | 'error';

const PRODUCTS = [
  'Kabuli Chickpeas', 'Desi Chickpeas', 'Fresh Bananas',
  'Whole Leaf Tobacco', 'Areca Nuts', 'Sesame Seeds',
  'Maize / Corn', 'Buffalo Meat', 'Paper Products', 'Other',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', company: '', product: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      // Fallback: open email client if Formspree not configured
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
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', product: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = `w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[14px] text-[#1A1714]
    placeholder:text-[#B0A99F] focus:outline-none focus:ring-2 focus:ring-[#C4962A]/40 focus:border-[#C4962A]
    transition-all duration-200`;

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* Page header */}
      <section className="bg-[#1B2B4B] py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-tag text-[#C4962A] mb-4"
          >
            <span className="inline-block w-6 h-px bg-[#C4962A]" />
            {t.contact.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-white mb-4"
          >
            {t.contact.title.split('\\n').map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/65 text-lg"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_1.6fr]">

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Contact cards */}
            {[
              {
                icon: EnvelopeSimple,
                title: 'Email Us',
                value: 'exports@mfsglobalindustries.com',
                href: 'mailto:exports@mfsglobalindustries.com',
                color: '#C4962A',
              },
              {
                icon: WhatsappLogo,
                title: 'WhatsApp',
                value: '+91 62663 16279',
                href: 'https://wa.me/916266316279',
                color: '#25D366',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Madhya Pradesh, India',
                href: null,
                color: '#E63946',
              },
              {
                icon: Clock,
                title: 'Response Time',
                value: 'Within 24 business hours',
                href: null,
                color: '#4A90D9',
              },
            ].map(({ icon: Icon, title, value, href, color }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-md transition"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                  <Icon weight="fill" size={22} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#7A7268] mb-1">{title}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-[15px] font-medium text-[#1A1714] hover:text-[#C4962A] transition break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-[#1A1714]">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="p-5 bg-[#1B2B4B] rounded-2xl text-white"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {['APEDA', 'FSSAI', 'ISO 9001', 'Phytosanitary', 'Fumigation'].map(cert => (
                  <span key={cert} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80">{cert}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="bg-white rounded-3xl border border-[#E5E1D8] shadow-md p-8 sm:p-10"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle weight="fill" size={44} className="text-green-500" />
                </div>
                <h2 className="font-display text-2xl text-[#1A1714] mb-3">Message Sent!</h2>
                <p className="text-[#7A7268] mb-6">{t.contact.success}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-primary"
                >
                  Send Another <ArrowRight weight="bold" size={15} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl text-[#1A1714] mb-1">Request a Quote</h2>
                  <p className="text-sm text-[#7A7268]">Fill in the form below and we’ll respond within 24 hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3630] mb-1.5 tracking-wide">{t.contact.name} *</label>
                    <input
                      name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Mohammed Al-Rashid"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3630] mb-1.5 tracking-wide">{t.contact.email} *</label>
                    <input
                      name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3630] mb-1.5 tracking-wide">{t.contact.company}</label>
                    <input
                      name="company" type="text"
                      value={form.company} onChange={handleChange}
                      placeholder="Al-Noor Trading, UAE"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3630] mb-1.5 tracking-wide">{t.contact.product} *</label>
                    <select
                      name="product" required
                      value={form.product} onChange={handleChange}
                      className={inputClass + ' cursor-pointer'}
                    >
                      <option value="">Select a product…</option>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3630] mb-1.5 tracking-wide">{t.contact.message} *</label>
                  <textarea
                    name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Please describe your requirements — quantity, grade, packaging, destination port…"
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                    <WarningCircle weight="fill" size={20} className="text-red-500 shrink-0" />
                    <p className="text-sm text-red-700">{t.contact.error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[15px] font-semibold text-white btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.send}
                      <ArrowRight weight="bold" size={17} />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-[#B0A99F]">
                  Or reach us directly: <a href="https://wa.me/916266316279" className="text-[#C4962A] font-medium">WhatsApp +91 62663 16279</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});
