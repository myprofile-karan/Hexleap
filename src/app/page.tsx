'use client'
import { useState } from "react";
import PlayerSection from "../components/PlayerSection";
import Spotlight from "../components/Spotlight";

export default function Home() {
  const [theme, setTheme] = useState("black")

  return (
    <div className={`main ${theme}`}>
      <div className="app p-5 md:p-10 mx-auto flex flex-col items-start justify-start">
        <PlayerSection setTheme={setTheme} />
        <Spotlight />
      </div>
    </div>
  );
}
