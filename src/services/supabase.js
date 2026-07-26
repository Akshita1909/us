/**
 * PHASE 2 — Supabase wiring (not active in the Phase 1 birthday build).
 *
 * When you're ready to move to the full editable admin-dashboard version:
 *
 * 1. npm install @supabase/supabase-js
 * 2. Create a Supabase project, then create tables: memories, media, letters, important_dates
 *    (see the shapes already used in src/data/content.js — keep field names matching).
 * 3. Create a storage bucket named "relationship-memory" with folders /photos /videos /audio.
 * 4. Add a .env file (see .env.example) with your project URL + anon key.
 * 5. Replace the static imports from "../data/content" in components with data fetched here.
 *
 * Until then, this file is unused — everything is read from src/data/content.js.
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
