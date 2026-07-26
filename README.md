# Our Universe ❤

A private, cinematic scrapbook of your relationship — built for Motu's birthday.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints. The password screen will ask for the code
(`1927` by default — set in `src/data/content.js`).

## Add your real content — no code editing required

Everything on the site comes from **one file**: `src/data/content.js`.
Open it and edit:

- `site` — names, password, relationship start date, music file path
- `loadingSteps` — the loading-screen lines
- `timeline` — each memory (date, title, description, one photo/video/audio)
- `gallery` — the polaroid grid
- `videos`, `voiceNotes`, `letters`, `importantDates`

Then drop the matching photos, videos, and audio into `public/media/...`
(each folder has a `README.txt` telling you exactly which filenames it expects).
Save, refresh — the site updates automatically. Nothing else needs touching.

## Deploy to Vercel (tonight)

```bash
npm install -g vercel   # only once
vercel login
vercel --prod
```

Or push this folder to a GitHub repo and import it at vercel.com — Vercel
auto-detects Vite. Framework preset: **Vite**, build command `npm run build`,
output directory `dist` (already configured).

Since this is a *private* link with only a password gate (no real
authentication), don't share the URL publicly. For an extra layer, Vercel's
Password Protection feature (Pro plans) can gate the whole deployment too.

## Phase 2 — the permanent, editable version

The birthday build (Phase 1) reads from the static `content.js` file so it
could ship fast. When you're ready to turn this into a real ongoing system:

1. Create a [Supabase](https://supabase.com) project.
2. Create tables `memories`, `media`, `letters`, `important_dates` — field
   names already match what's used in `content.js`, so the swap is mechanical.
3. Create a storage bucket `relationship-memory` with `/photos /videos /audio`.
4. Fill in `.env` (copy `.env.example`) with your Supabase URL + anon key.
5. Build `/admin` — a password-gated dashboard with forms for each table,
   using `src/services/supabase.js` (already scaffolded) instead of static
   imports. Ask Claude to build this next — the component structure here
   is already split so each section (Timeline, Gallery, Letters, etc.) can
   swap its data source independently.

## Structure

```
src/
  components/    one folder per section (Hero, Timeline, Gallery, ...)
  data/content.js   <- edit this for all text/media paths
  hooks/         relationship-duration date math
  services/      supabase.js (Phase 2, currently unused)
```
