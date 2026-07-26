import { useState } from "react";
import { motion } from "framer-motion";
import Starfield from "../Starfield/Starfield";
import { site } from "../../data/content";

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === site.password) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 700);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6">
      <Starfield density={0.00018} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(58,18,32,0.55), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="glass-card relative z-10 w-full max-w-md rounded-sm px-8 py-12 text-center sm:px-12"
      >
        <p className="eyebrow mb-4">Private</p>
        <h1 className="font-display text-4xl italic text-cream sm:text-5xl">
          Our Universe <span className="not-italic text-blush">❤</span>
        </h1>
        <div className="hairline my-6" />
        <p className="font-display text-lg text-cream/80">
          This place belongs to two people.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          animate={error ? { x: [0, -10, 10, -8, 8, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <label htmlFor="pw" className="sr-only">
            Enter password
          </label>
          <input
            id="pw"
            type="password"
            inputMode="numeric"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-sm border border-gold/30 bg-transparent px-4 py-3 text-center font-body text-lg tracking-[0.3em] text-cream placeholder:text-cream/30 placeholder:tracking-normal focus:border-gold focus:outline-none"
          />
          {error && (
            <p className="mt-3 text-xs tracking-wide text-blush">
              That's not quite it — try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-sm border border-gold bg-gold/10 py-3 font-body text-xs uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Enter
          </button>
        </motion.form>

        <button
          type="button"
          onClick={() => setShowHint((s) => !s)}
          className="mt-6 text-[11px] uppercase tracking-widest2 text-cream/40 transition-colors hover:text-gold"
        >
          Need a hint?
        </button>
        {showHint && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 font-display text-base italic text-cream/60"
          >
            {site.passwordHint}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
