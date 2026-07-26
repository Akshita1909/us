import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { letters } from "../../data/content";

function TypedLetter({ content }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!inView) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setShown(content);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setShown(content.slice(0, i));
      if (i >= content.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [inView, content]);

  return (
    <p ref={ref} className="whitespace-pre-line font-display text-lg italic leading-relaxed text-cream/85 sm:text-xl">
      {shown}
      <span className="animate-pulse text-gold">{shown.length < content.length ? "▍" : ""}</span>
    </p>
  );
}

export default function Letters() {
  if (!letters.length) return null;
  return (
    <section id="letters" className="relative bg-ink-soft py-28">
      <div className="section-pad mb-14">
        <p className="eyebrow">Love Letters</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Words I'd rather you read slowly.
        </h2>
      </div>

      <div className="section-pad mx-auto flex max-w-2xl flex-col gap-16">
        {letters.map((letter) => (
          <motion.article
            key={letter.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-sm p-8 sm:p-12"
          >
            <p className="eyebrow">{letter.title}</p>
            <div className="hairline my-5" />
            <TypedLetter content={letter.content} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
