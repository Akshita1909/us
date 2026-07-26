import { useEffect, useRef } from "react";

/**
 * A quiet, ambient starfield. This is the site's signature element —
 * instead of scattering floating hearts everywhere, the "universe"
 * in the name is literal: stars drift slowly behind every section,
 * and the timeline (elsewhere) draws constellation lines between them.
 */
export default function Starfield({ density = 0.00012, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let raf;
    let width, height;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const count = Math.floor(width * height * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.25,
        drift: (Math.random() - 0.5) * 0.02,
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reduceMotion ? 0.7 : 0.4 + Math.sin(t * 0.001 * s.speed + s.phase) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(243,236,221,${Math.max(0.15, twinkle)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduceMotion) {
          s.y += s.drift;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
