import { motion } from "framer-motion";
import { timeline } from "../../data/content";

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function MediaBlock({ media }) {
  if (!media) return null;
  if (media.type === "image") {
    return (
      <figure className="polaroid mt-5 w-full max-w-xs -rotate-1">
        <img
          src={media.src}
          alt={media.caption || ""}
          onError={(e) => (e.currentTarget.parentElement.style.display = "none")}
          className="aspect-[4/5] w-full object-cover"
        />
        {media.caption && (
          <figcaption className="mt-3 text-center font-display text-sm italic text-ink/70">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  if (media.type === "video") {
    return (
      <video
        controls
        poster={media.poster}
        className="mt-5 w-full max-w-sm rounded-sm border border-gold/20"
      >
        <source src={media.src} />
      </video>
    );
  }
  if (media.type === "audio") {
    return (
      <audio controls className="mt-5 w-full max-w-xs">
        <source src={media.src} />
      </audio>
    );
  }
  return null;
}

export default function Timeline() {
  const sorted = [...timeline].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section id="timeline" className="relative bg-ink py-28">
      <div className="section-pad mb-16">
        <p className="eyebrow">Our Story</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Two years, three months, and counting.
        </h2>
      </div>

      <div className="section-pad relative">
        {/* the constellation thread */}
        <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <ol className="relative space-y-16 sm:space-y-24">
          {sorted.map((item, i) => {
            const alignRight = i % 2 === 1;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-16 ${
                  alignRight ? "" : ""
                }`}
              >
                {/* node */}
                <span
                  className="absolute left-0 top-1 h-[9px] w-[9px] -translate-x-[calc(50%-0.5px)] animate-twinkle rounded-full bg-gold shadow-glow sm:left-1/2"
                  aria-hidden="true"
                />

                <div
                  className={`pl-9 sm:pl-0 ${
                    alignRight ? "sm:order-2 sm:col-start-2 sm:pl-14" : "sm:col-start-1 sm:pr-14 sm:text-right"
                  }`}
                >
                  <p className="eyebrow">{formatDate(item.date)}</p>
                  <h3 className="mt-2 font-display text-2xl italic text-cream sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-cream/65 sm:ml-auto">
                    {item.description}
                  </p>
                  <div className={alignRight ? "" : "sm:ml-auto sm:flex sm:flex-col sm:items-end"}>
                    <MediaBlock media={item.media} />
                  </div>
                </div>
                <div className={alignRight ? "hidden sm:block sm:order-1" : "hidden sm:block"} />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
