import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "../../data/content";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  function close() {
    setOpenIndex(null);
  }
  function next() {
    setOpenIndex((i) => (i + 1) % gallery.length);
  }
  function prev() {
    setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  let touchStartX = 0;
  function onTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) prev();
    else if (dx < -50) next();
  }

  return (
    <section id="gallery" className="relative bg-ink py-28">
      <div className="section-pad mb-14">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Every small, ordinary, unforgettable moment.
        </h2>
      </div>

      <div className="section-pad grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((photo, i) => (
          <motion.button
            key={photo.id}
            onClick={() => setOpenIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -6, rotate: 0 }}
            style={{ rotate: i % 2 === 0 ? "-2deg" : "2deg" }}
            className="polaroid text-left"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23141217'/%3E%3C/svg%3E";
              }}
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 truncate font-display text-sm italic text-ink/70">
              {photo.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-4"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 text-2xl text-cream/70 hover:text-gold"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-2 text-3xl text-cream/50 hover:text-gold sm:left-8"
            >
              ‹
            </button>
            <motion.figure
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-2xl text-center"
            >
              <img
                src={gallery[openIndex].src}
                alt={gallery[openIndex].caption}
                className="max-h-[70vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="mt-4 font-display text-lg italic text-cream/80">
                {gallery[openIndex].caption}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-2 text-3xl text-cream/50 hover:text-gold sm:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
