import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { site } from "../../data/content";

export default function MusicPlayer({ autoStart = false }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [autoStart]);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      <audio ref={audioRef} src={site.music.src} loop className="hidden" />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="glass-card flex items-center gap-3 rounded-full px-4 py-2.5 text-cream shadow-card"
      >
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 text-gold ${
            playing ? "animate-pulse" : ""
          }`}
        >
          {playing ? "❚❚" : "▶"}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block font-display text-sm italic leading-tight">{site.music.title}</span>
          <span className="block text-[10px] uppercase tracking-widest2 text-cream/50">
            {site.music.artist}
          </span>
        </span>
      </motion.button>
    </div>
  );
}
