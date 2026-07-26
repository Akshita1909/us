import { motion } from "framer-motion";
import { site, timeline, gallery, videos } from "../../data/content";
import { useRelationshipStats } from "../../hooks/useRelationshipStats";

function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="font-display text-5xl italic text-gold sm:text-6xl">{value}</p>
      <p className="mt-2 eyebrow">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = useRelationshipStats(site.relationshipStart, {
    memories: timeline.length,
    photos: gallery.length,
    videosCount: videos.length,
  });

  return (
    <section className="relative bg-ink py-28">
      <div className="section-pad mb-14 text-center">
        <p className="eyebrow">Together For</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          {stats.years} years, {stats.months} months, {stats.days} days
        </h2>
        <p className="mt-2 text-sm text-cream/45">{stats.totalDays.toLocaleString()} days, and every one counted.</p>
      </div>

      <div className="section-pad mx-auto grid max-w-3xl grid-cols-2 gap-y-12 sm:grid-cols-4">
        <Stat value={stats.memories} label="Memories" delay={0} />
        <Stat value={stats.photos} label="Photos" delay={0.08} />
        <Stat value={stats.videosCount} label="Videos" delay={0.16} />
        <Stat value={stats.totalDays.toLocaleString()} label="Days" delay={0.24} />
      </div>
    </section>
  );
}
