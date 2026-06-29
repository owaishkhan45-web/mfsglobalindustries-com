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
      // Much faster follow (was 0.18)
      rx += (mx - rx) * 0.45;
      ry += (my - ry) * 0.45;
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
          width: hovering ? 48 : 30,
          height: hovering ? 48 : 30,
          borderRadius: 999,
          border: "1px solid oklch(0.88 0.10 92 / 0.7)",
          boxShadow: hovering
            ? "0 0 32px oklch(0.88 0.10 92 / 0.7), inset 0 0 16px oklch(0.88 0.10 92 / 0.25)"
            : "0 0 14px oklch(0.88 0.10 92 / 0.45)",
          background: hovering ? "oklch(0.88 0.10 92 / 0.10)" : "transparent",
          transition: "width 140ms ease, height 140ms ease, background 140ms ease, box-shadow 140ms ease",
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
          background: "oklch(0.96 0.08 92)",
          boxShadow: "0 0 14px oklch(0.88 0.10 92 / 0.95)",
        }}
      />
    </>
  );
}
