import { motion } from "framer-motion";
import { videos } from "../../data/content";

export default function VideoSection() {
  if (!videos.length) return null;
  return (
    <section id="videos" className="relative bg-ink-soft py-28">
      <div className="section-pad mb-14">
        <p className="eyebrow">Moments in Motion</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          A little of what stills can't hold.
        </h2>
      </div>

      <div className="section-pad grid grid-cols-1 gap-10 sm:grid-cols-2">
        {videos.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass-card overflow-hidden rounded-sm"
          >
            <video controls poster={v.poster} className="aspect-video w-full bg-black object-cover">
              <source src={v.src} />
              Your browser does not support video playback.
            </video>
            {v.caption && (
              <p className="section-pad !px-5 py-4 font-display text-base italic text-cream/75">
                {v.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
