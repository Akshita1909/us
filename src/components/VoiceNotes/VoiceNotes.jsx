import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { voiceNotes } from "../../data/content";

function VoiceNoteCard({ note }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  return (
    <div className="glass-card flex flex-col items-start gap-4 rounded-sm p-6 sm:flex-row sm:items-center">
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <div>
        <p className="font-display text-xl italic text-cream">{note.label}</p>
        {note.caption && <p className="mt-1 text-sm text-cream/55">{note.caption}</p>}
      </div>
      <audio
        ref={audioRef}
        src={note.src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="hidden"
      />
    </div>
  );
}

export default function VoiceNotes() {
  if (!voiceNotes.length) return null;
  return (
    <section id="voice-notes" className="relative bg-ink py-28">
      <div className="section-pad mb-14">
        <p className="eyebrow">In My Own Voice</p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Some things sound better than they read.
        </h2>
      </div>
      <div className="section-pad grid grid-cols-1 gap-6 sm:grid-cols-2">
        {voiceNotes.map((note, i) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <VoiceNoteCard note={note} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
