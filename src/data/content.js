/**
 * US — content source
 * ---------------------------------------------------
 * Everything on the site is read from this one file.
 * Edit text here, drop media into /public/media/..., and
 * the site updates automatically. No component needs touching.
 *
 * In Phase 2 this file gets replaced by calls to Supabase
 * (see src/services/supabase.js placeholder) — the shape
 * of the data stays identical so components don't change.
 */

export const site = {
  password: "1927",
  passwordHint: "Our birthdays",
  names: {
    me: "Akshita",
    him: "Abhigyan",
    nickname: "Motu",
  },
  relationshipStart: "2024-04-13",
  birthdays: {
    him: "07-27",
    me: "09-19",
  },
  music: {
    title: "Tujhko",
    artist: "Pritam,Arijit Singh",
    src: "/media/music/tujhko.mp3",
  },
  heroImage: "/media/photos/close-selfie-night.jpg",
  endingImage: "/media/photos/garden-story.png",
};

export const loadingSteps = [
  "Collecting memories...",
  "Finding smiles ✓",
  "Finding photos ✓",
  "Finding our story ✓",
  "Preparing something special...",
  "Welcome Motu ❤",
];

export const timeline = [
  {
    id: "t1",
    date: "2024-04-10",
    title: "The Water Love",
    description:
      "The day i started falling for you ,i love you around me holding playing lovey dovey cutu .hayee merii jaannn .My saviour.",
    media: { type: "video", src: "/media/videos/clip-1.mp4", caption: "10 April 2024" },
  },
  {
    id: "t2",
    date: "2024-04-11",
    title: "Ponta Sahib",
    description:
      "AHnnnn you gave me butterflies that day,,hayee when you hold my hand for the first time while driving omg omg i loved you moree for it.",
    media: {
      type: "image",
      src: "/media/photos/ponta-sahib-bridge-1.jpg",
      caption: "11 April 2024",
    },
  },
  {
    id: "t3",
    date: "2024-04-13",
    title: "The Beginning",
    description: "The day we officially became us. Ladte ladte pyaar bhi hogya.",
    media: {
      type: "image",
      src: "/media/photos/firstmeet.jpg",
      caption: "13 April 2024",
    },
  },
  {
    id: "t4",
    date: "2024-04-14",
    title: "First College Event, Together",
    description:
      "first event humara saath mei and teri possesivness dekhkr acha laga tha also loving the way you hold me ,i love to be in your arms.",
    media: {
      type: "image",
      src: "/media/photos/palm-trees-ethnic.jpg",
      caption: "14 April 2024",
    },
  },
  {
    id: "t5",
    date: "2024-07-27",
    title: "Your Birthday",
    description:
      "just you, me, and a night I didn't want to end. You're my favourite person to celebrate anything with. Also i lost something few days before as your birthday gift ifykyk",
    media: {
      type: "image",
      src: "/media/photos/birthday.png",
      caption: "27 July 2024",
    },
  },
  {
    id: "t6",
    date: "2024-09-19",
    title: "My Birthday",
    description: "Teri presence sab acha bnadeti hai .",
    media: {
      type: "image",
      src: "/media/photos/close-selfie-night.jpg",
      caption: "19 September 2024",
    },
  },
  {
    id: "t7",
    date: "2024-10-12",
    title: "The Random Day Out",
    description:
      "no plan nothing pr teko ye din bhaut pasand hai i would love to have such moments more often humari life mei.",
    media: { type: "image", src: "/media/photos/garden-story.png", caption: "2024" },
  },
  {
    id: "t8",
    date: "2024-11-08",
    title: "Old School, at Social",
    description:
      " nothing special — just you, me, good food, and a good time.",
    media: {
      type: "image",
      src: "/media/photos/oldschool-neon.jpg",
      caption: "Social, 2024",
    },
  },
  {
    id: "t8b",
    date: "2025-07-27",
    title: "Your Birthday, 2025",
    description: "we are obsessed with each other, honestly.",
    media: { type: "photos", src: "/media/photos/birthday2025.png", caption: "27 July 2025" },
  },
  {
    id: "t9",
    date: "2026-07-27",
    title: "Today",
    description: "Happy Birthday, Motu. Here's to every page still unwritten.",
    media: { type: "image", src: "/media/photos/mirror-hug-today.jpg", caption: "Today" },
  },
];

export const gallery = [
  { id: "g1", src: "/media/photos/close-selfie-night.jpg", caption: "You, mid-laugh" },
  { id: "g2", src: "/media/photos/ponta-sahib-bridge-1.jpg", caption: "That drive to Ponta Sahib" },
  { id: "g3", src: "/media/photos/ponta-sahib-bridge-2.jpg", caption: "Same bridge, different frame" },
  { id: "g4", src: "/media/photos/palm-trees-ethnic.jpg", caption: "One faluda, two straws" },
  { id: "g5", src: "/media/photos/birthday.png", caption: "Your birthday, 2024" },
  { id: "g6", src: "/media/photos/oldschool-neon.jpg", caption: "Old School, at Social" },
  { id: "g7", src: "/media/photos/garden-story.png", caption: "A random day, my favourite kind" },
  { id: "g8", src: "/media/photos/mirror-hug-today.jpg", caption: "Us, today" },
];

export const videos = [
  {
    id: "v1",
    src: "/media/videos/clip-1.mp4",
    poster: "/media/photos/ponta-sahib-bridge-1.jpg",
    caption: "The day you held on and didn't let go",
  },
  {
    id: "v2",
    src: "/media/videos/clip-2.mov",
    poster: "/media/photos/birthday.png",
    caption: "my POV",
  },
];

export const voiceNotes = [
  {
    id: "a1",
    src: "/media/audio/note-1.mp3",
    label: "Listen to this ❤",
    caption: "Something I recorded just for you",
  },
];

export const letters = [
  {
    id: "l1",
    title: "For today",
    date: "2026-07-27",
    content: `Motu,

No website can hold all our memories. But I wanted to build a small corner of the internet that belongs only to us — somewhere our story keeps living, long after today.

I think about that drive to Ponta Sahib, your hand finding mine like it was nothing. I think about the water fight, and how you held on to me like I was something worth being careful with. I think about faluda and flat-shopping and a random neon sign at Social, and how none of it was planned and all of it mattered.

Happy birthday. I love you — more than I probably say out loud.

— Akshita`,
  },
];

export const importantDates = [
  { id: "d1", name: "Anniversary", date: "2024-04-13" },
  { id: "d2", name: "Motu's Birthday", date: "2004-07-27" },
  { id: "d3", name: "Akshita's Birthday", date: "2004-09-19" },
];