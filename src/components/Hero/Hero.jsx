import { motion } from "framer-motion";
import Starfield from "../Starfield/Starfield";
import { site } from "../../data/content";

export default function Hero({ onBegin }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={site.heroImage}
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <Starfield density={0.00008} className="opacity-60" />
      </div>

      <div className="section-pad relative z-10 w-full pb-20 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow"
        >
          {site.names.me} &amp; {site.names.him}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 max-w-3xl font-display text-5xl italic leading-[1.05] text-cream sm:text-7xl"
        >
          Happy Birthday {site.names.nickname} <span className="not-italic text-blush">❤</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-md font-body text-base text-cream/70 sm:text-lg"
        >
          Before today becomes another memory, let's revisit ours.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          onClick={onBegin}
          className="group mt-10 inline-flex items-center gap-3 border-b border-gold/60 pb-1 font-body text-xs uppercase tracking-widest2 text-gold transition-colors hover:border-gold hover:text-gold-bright"
        >
          Begin Our Story
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.button>
      </div>
    </section>
  );
}
