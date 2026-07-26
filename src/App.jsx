import { useEffect, useState } from "react";
import LoadingScreen from "./components/Loading/LoadingScreen";
import PasswordGate from "./components/PasswordGate/PasswordGate";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import VideoSection from "./components/VideoSection/VideoSection";
import VoiceNotes from "./components/VoiceNotes/VoiceNotes";
import Letters from "./components/Letters/Letters";
import Stats from "./components/Stats/Stats";
import Ending from "./components/Ending/Ending";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

const STAGE = {
  LOADING: "loading",
  LOCKED: "locked",
  UNLOCKED: "unlocked",
};

const SESSION_KEY = "our-universe-unlocked";

export default function App() {
  const [stage, setStage] = useState(STAGE.LOADING);
  const [musicStarted, setMusicStarted] = useState(false);

  function finishLoading() {
    const already = sessionStorage.getItem(SESSION_KEY) === "true";
    setStage(already ? STAGE.UNLOCKED : STAGE.LOCKED);
    if (already) setMusicStarted(true);
  }

  function unlock() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setStage(STAGE.UNLOCKED);
    setMusicStarted(true);
  }

  useEffect(() => {
    document.title = "Our Universe";
  }, []);

  return (
    <div className="grain min-h-screen bg-ink">
      {stage === STAGE.LOADING && <LoadingScreen onDone={finishLoading} />}
      {stage === STAGE.LOCKED && <PasswordGate onUnlock={unlock} />}
      {stage === STAGE.UNLOCKED && (
        <>
          <Hero onBegin={() => scrollToId("timeline")} />
          <Timeline />
          <Gallery />
          <VideoSection />
          <VoiceNotes />
          <Letters />
          <Stats />
          <Ending />
          <MusicPlayer autoStart={musicStarted} />
        </>
      )}
    </div>
  );
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
