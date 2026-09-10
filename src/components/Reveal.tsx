import { useEffect, useRef, useState } from "react";
export default function Reveal({ children, delay=0, direction="up", className="", style={} }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting){setV(true);obs.disconnect();} },{threshold:0.1});
    obs.observe(el); return () => obs.disconnect();
  }, []);
  const t: any = {up:"translateY(40px)",left:"translateX(-40px)",right:"translateX(40px)",scale:"scale(0.92)"};
  return <div ref={ref} className={className} style={{opacity:v?1:0,transform:v?"none":t[direction],transition:`opacity .8s ease ${delay}ms,transform .8s ease ${delay}ms`,...style}}>{children}</div>;
}
