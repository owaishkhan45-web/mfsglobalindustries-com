import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, Clock } from "@phosphor-icons/react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import chickpeas from "@/assets/product-chickpeas.jpg";
import spices from "@/assets/product-spices.jpg";
import meat from "@/assets/product-meat.jpg";
import paper from "@/assets/product-paper.jpg";

const posts = [
  { slug: "import-agri-from-india", title: "How to Import Agricultural Products from India", img: chickpeas, read: "8 min", author: "Farhan Khan", date: "Jun 18, 2026", excerpt: "A practical playbook for new buyers — from choosing the right HS code to securing payment terms." },
  { slug: "indian-chickpeas-global-demand", title: "Why Indian Chickpeas are in Global Demand", img: chickpeas, read: "6 min", author: "Farhan Khan", date: "May 30, 2026", excerpt: "Climate, soil, and processing infrastructure that make Indian Kabuli and Desi varieties unrivaled." },
  { slug: "halal-buffalo-meat-export-guide", title: "Complete Guide to Frozen Halal Buffalo Meat Export", img: meat, read: "10 min", author: "Farhan Khan", date: "May 14, 2026", excerpt: "Halal certification chain, cold-chain logistics and destination-country compliance explained." },
  { slug: "choosing-export-partner-india", title: "Choosing the Right Export Partner from India", img: paper, read: "7 min", author: "Farhan Khan", date: "Apr 28, 2026", excerpt: "Seven non-negotiables when shortlisting an Indian export partner for long-term sourcing." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Export Journal — MFS Global Industries" },
      { name: "description", content: "Practical playbooks and insights for international buyers sourcing from India — agriculture, halal meat, paper and textiles." },
      { property: "og:title", content: "Export Journal — MFS Global Industries" },
      { property: "og:description", content: "Insights for international buyers sourcing from India." },
      { property: "og:image", content: chickpeas },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="relative pt-36 pb-16">
      <div className="absolute inset-x-0 top-0 h-[60vh] -z-10" style={{ background: "var(--grad-hero)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground" data-cursor="hover">
            <ArrowLeft weight="light" size={14}/> Back to home
          </Link>
          <div className="mt-6 text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Export Journal</div>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.98] max-w-3xl">
            Field notes from <span className="text-gold-gradient italic">global trade.</span>
          </h1>
          <p className="mt-6 text-foreground/70 font-light max-w-xl">
            Practical reading for international buyers — sourcing economics, compliance, logistics, and product knowledge.
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal delay={0.1}>
          <article className="mt-16 grid lg:grid-cols-2 gap-8 rounded-3xl glass overflow-hidden" data-cursor="hover">
            <div className="aspect-[5/4] lg:aspect-auto overflow-hidden">
              <img src={posts[0].img} alt={posts[0].title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">Featured · {posts[0].date}</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-light leading-tight">{posts[0].title}</h2>
              <p className="mt-4 text-foreground/70 font-light">{posts[0].excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{posts[0].author}</span>
                <span className="flex items-center gap-1.5"><Clock weight="light" size={12}/> {posts[0].read}</span>
              </div>
              <a href="#" className="mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-medium text-[var(--ink)]" style={{ background: "var(--grad-gold)" }}>
                Read article <ArrowUpRight weight="bold" size={14}/>
              </a>
            </div>
          </article>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.slice(1).map((p, i) => (
            <StaggerItem key={p.slug}>
              <a href="#" className="group block h-full rounded-3xl glass overflow-hidden" data-cursor="hover">
                <div className="aspect-[5/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={614} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"/>
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">{p.date} · {p.read}</div>
                  <h3 className="mt-3 text-xl font-light leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 text-xs text-muted-foreground">{p.author}</div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-24 rounded-3xl glass-strong p-10 text-center">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">Newsletter</div>
            <h3 className="mt-4 text-3xl font-light">Monthly insights, no spam.</h3>
            <form className="mt-6 mx-auto max-w-md flex items-center rounded-full glass overflow-hidden p-1">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-foreground/40" />
              <button className="rounded-full px-4 py-2 text-sm text-[var(--ink)] font-medium" style={{ background: "var(--grad-gold)" }}>Subscribe</button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
