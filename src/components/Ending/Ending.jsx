import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import Starfield from "../Starfield/Starfield";
import { site } from "../../data/content";

export default function Ending() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const fired = useRef(false);

  useEffect(() => {
    if (inView && !fired.current) {
      fired.current = true;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;
      const duration = 2200;
      const end = Date.now() + duration;
      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ["#c9a46a", "#e7b8c2", "#f3ecdd"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ["#c9a46a", "#e7b8c2", "#f3ecdd"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={site.endingImage}
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <Starfield density={0.00012} />
      </div>

      <div className="section-pad relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-display text-2xl italic leading-relaxed text-cream/90 sm:text-3xl"
        >
          No website can hold all our memories.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 font-display text-2xl italic leading-relaxed text-cream/90 sm:text-3xl"
        >
          But I wanted to create a small corner of the internet that belongs only to us.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 font-display text-4xl italic text-blush sm:text-5xl"
        >
          Happy Birthday {site.names.nickname} ❤
        </motion.h2>
      </div>
    </section>
  );
}
