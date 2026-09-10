// Reveal.tsx — scroll-reveal wrapper (no framer-motion)
import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: any;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
  style?: any;
};

export default function Reveal({ children, delay = 0, direction = 'up', className = '', style = {} }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    scale: 'scale(0.92)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
