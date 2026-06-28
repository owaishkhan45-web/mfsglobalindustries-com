import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      document.body.classList.add("no-custom-cursor");
      setHidden(true);
      return;
    }
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [data-cursor='hover'], input, textarea, select");
      setHovering(!!interactive);
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (hidden) return null;
  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderRadius: 999,
          border: "1px solid oklch(0.82 0.13 85 / 0.6)",
          boxShadow: hovering
            ? "0 0 24px oklch(0.82 0.13 85 / 0.6), inset 0 0 12px oklch(0.82 0.13 85 / 0.2)"
            : "0 0 12px oklch(0.82 0.13 85 / 0.35)",
          background: hovering ? "oklch(0.82 0.13 85 / 0.08)" : "transparent",
          transition: "width 200ms ease, height 200ms ease, background 200ms ease, box-shadow 200ms ease",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "oklch(0.92 0.12 88)",
          boxShadow: "0 0 12px oklch(0.82 0.13 85 / 0.9)",
        }}
      />
    </>
  );
}
