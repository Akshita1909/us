import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loadingSteps } from "../../data/content";

export default function LoadingScreen({ onDone }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= loadingSteps.length - 1) {
      const t = setTimeout(onDone, 1100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 750);
    return () => clearTimeout(t);
  }, [index, onDone]);

  const isLast = index === loadingSteps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-6">
      <div className="flex h-16 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={
              isLast
                ? "font-display text-3xl italic text-blush sm:text-4xl"
                : "font-body text-sm uppercase tracking-widest2 text-cream/70"
            }
          >
            {loadingSteps[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-8 h-px w-40 overflow-hidden bg-ink-line/40">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: "0%" }}
          animate={{ width: `${((index + 1) / loadingSteps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
