import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { EnvelopeSimple, WhatsappLogo, MapPin, Clock, ArrowUpRight, User, Buildings, Globe } from "@phosphor-icons/react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MFS Global Industries" },
      { name: "description", content: "Speak with our export team — request quotations, samples and catalogues. We respond within 24 hours." },
      { property: "og:title", content: "Contact MFS Global Industries" },
      { property: "og:description", content: "Request quotations, samples and product catalogues." },
    ],
  }),
  component: ContactPage,
});

const products = ["Chickpeas", "Buffalo Meat", "Bananas", "Ginger & Garlic", "Sesame Seeds", "Maize", "Soybeans", "Cotton Yarn", "Paper Products"];

function ContactPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const toggle = (p: string) => setPicked((arr) => arr.includes(p) ? arr.filter(x => x !== p) : [...arr, p]);

  return (
    <div className="relative pt-36 pb-16">
      <div className="absolute inset-x-0 top-0 h-[50vh] -z-10" style={{ background: "var(--grad-hero)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Get in Touch</div>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.98] max-w-3xl">
            Let's start a <span className="text-gold-gradient italic">conversation.</span>
          </h1>
          <p className="mt-6 text-foreground/70 font-light max-w-xl">Share your sourcing requirements and we'll respond with a transparent quote within 24 hours.</p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl glass-strong p-8 sm:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto h-14 w-14 grid place-items-center rounded-full" style={{ background: "var(--grad-gold)" }}>
                    <ArrowUpRight weight="bold" size={22} className="text-[var(--ink)]"/>
                  </div>
                  <h3 className="mt-6 text-2xl font-light">Inquiry received.</h3>
                  <p className="mt-2 text-sm text-foreground/70">Our export desk will reply within one business day.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" icon={User}><input required type="text" className="inp" placeholder="Your name"/></Field>
                    <Field label="Company" icon={Buildings}><input type="text" className="inp" placeholder="Company"/></Field>
                    <Field label="Country" icon={Globe}><input required type="text" className="inp" placeholder="Country"/></Field>
                    <Field label="Email" icon={EnvelopeSimple}><input required type="email" className="inp" placeholder="email@company.com"/></Field>
                    <Field label="Phone / WhatsApp" icon={WhatsappLogo} className="sm:col-span-2"><input type="tel" className="inp" placeholder="+00 0000 000000"/></Field>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Products of Interest</div>
                    <div className="flex flex-wrap gap-2">
                      {products.map((p) => (
                        <button type="button" key={p} onClick={() => toggle(p)} data-cursor="hover"
                          className={`rounded-full px-3 py-1.5 text-xs font-light transition border ${picked.includes(p) ? "border-[var(--gold)]/60 bg-[var(--gold)]/15 text-foreground" : "border-white/10 glass text-foreground/75 hover:text-foreground"}`}>
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</div>
                    <textarea rows={5} placeholder="Volume, destination port, target Incoterm, timeline…" className="inp resize-none"/>
                  </div>

                  <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--ink)]" style={{ background: "var(--grad-gold)", boxShadow: "var(--shadow-glow)" }} data-cursor="hover">
                    Send Inquiry <ArrowUpRight weight="bold" size={16}/>
                  </button>
                </>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-3xl glass p-7">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">Direct Contact</div>
                <div className="mt-5 space-y-4">
                  <ContactRow icon={WhatsappLogo} label="WhatsApp" value="+91 6266316279" href="https://wa.me/916266316279"/>
                  <ContactRow icon={EnvelopeSimple} label="Business Email" value="mfsglobalindustries@gmail.com" href="mailto:mfsglobalindustries@gmail.com"/>
                  <ContactRow icon={EnvelopeSimple} label="Personal Email" value="farhank6266@gmail.com" href="mailto:farhank6266@gmail.com"/>
                </div>
              </div>

              <div className="rounded-3xl glass p-7">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full glass-strong grid place-items-center text-lg">FK</div>
                  <div>
                    <div className="text-sm font-medium">Farhan Khan</div>
                    <div className="text-[11px] text-muted-foreground">Proprietor · MFS Global Industries</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl glass p-7">
                <div className="flex items-start gap-3">
                  <Clock weight="light" size={18} className="text-[var(--gold)] mt-0.5"/>
                  <div>
                    <div className="text-sm font-medium">Business Hours</div>
                    <div className="text-xs text-foreground/70 mt-1">Mon–Sat · 9:30 AM – 7:00 PM IST</div>
                    <div className="text-xs text-[var(--gold)] mt-2">Guaranteed response within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl glass overflow-hidden">
                <div className="aspect-[4/3] relative bg-[oklch(0.22_0.014_250)] grid place-items-center">
                  <div className="absolute inset-0 opacity-40" style={{ background: "var(--grad-radial-gold)" }} />
                  <div className="relative text-center">
                    <MapPin weight="light" size={28} className="mx-auto text-[var(--gold)]"/>
                    <div className="mt-3 text-sm font-light">India · Head Office</div>
                    <div className="text-[11px] text-muted-foreground">Google Map embed</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`.inp{width:100%;background:transparent;border:1px solid oklch(1 0 0 / 0.1);border-radius:14px;padding:12px 14px;font-size:14px;font-weight:300;color:var(--color-foreground);outline:none;transition:border-color .2s,background .2s}.inp:focus{border-color:oklch(0.82 0.13 85 / 0.5);background:oklch(1 0 0 / 0.02)}.inp::placeholder{color:oklch(1 0 0 / 0.35)}`}</style>
    </div>
  );
}

function Field({ label, icon: Icon, children, className }: any) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        <Icon weight="light" size={12}/> {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: any) {
  return (
    <a href={href} className="flex items-center gap-3 group" data-cursor="hover">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-[var(--gold)]/20 group-hover:bg-[var(--gold)]/10 transition">
        <Icon weight="light" size={16} className="text-[var(--gold)]"/>
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="text-sm font-light truncate">{value}</div>
      </div>
    </a>
  );
}
