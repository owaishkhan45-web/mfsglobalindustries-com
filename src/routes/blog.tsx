import { createFileRoute, Link } from "@tanstack/react-router";
const POSTS = [
  {title:"How India Became Top Chickpea Exporter",date:"Aug 2026",tag:"Industry",img:"https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&q=80",excerpt:"India supplies 65% of global chickpea demand. Here is how farm-level quality drives this."},
  {title:"APEDA Certification: What Buyers Need to Know",date:"Jul 2026",tag:"Compliance",img:"https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=600&q=80",excerpt:"APEDA certification is mandatory for agri exports from India."},
  {title:"Top 5 Markets for Indian Agri Exports in 2026",date:"Jun 2026",tag:"Markets",img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80",excerpt:"UAE, Saudi Arabia, Bangladesh, Malaysia and UK lead demand."},
];
const G="#C4962A",N="#1B2B4B";
function BlogPage(){
  return <div style={{minHeight:"100vh",background:"#FAFAF7"}}>
    <section style={{background:N,padding:"5rem 1.5rem 4rem",textAlign:"center"}}>
      <h1 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"clamp(2rem,5vw,3rem)",color:"#fff",fontWeight:700}}>MFS <span style={{color:G}}>Blog</span></h1>
      <p style={{color:"rgba(255,255,255,.65)",marginTop:"1rem"}}>Industry insights for global agri trade.</p>
    </section>
    <section style={{padding:"4rem 1.5rem",maxWidth:"72rem",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"2rem"}}>
      {POSTS.map((p,i)=><article key={i} style={{background:"#fff",borderRadius:20,border:"1px solid #E5E1D8",overflow:"hidden",boxShadow:"0 2px 16px rgba(0,0,0,.06)"}}>
        <img src={p.img} alt={p.title} style={{width:"100%",height:180,objectFit:"cover"}} loading="lazy"/>
        <div style={{padding:"1.4rem"}}>
          <span style={{background:`${G}18`,color:G,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:999,textTransform:"uppercase"}}>{p.tag}</span>
          <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"1.1rem",margin:"0.8rem 0 0.4rem",color:"#1A1714"}}>{p.title}</h2>
          <p style={{fontSize:14,color:"#7A7268",lineHeight:1.6}}>{p.excerpt}</p>
          <Link to="/contact" style={{display:"inline-block",marginTop:"1rem",color:G,fontWeight:700,fontSize:13,textDecoration:"none"}}>Read More →</Link>
        </div>
      </article>)}
    </section>
  </div>;
}
export const Route = createFileRoute("/blog")({component:BlogPage});
