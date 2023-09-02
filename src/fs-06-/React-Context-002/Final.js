import React, { createContext, useState } from "react";
import Tracks from "./Tracks";
import Controls from "./Controls";
import "./Final.css";
import { MusicContext } from "./MusicContext";
import BadThang from "./Assets/BadThang.mp3";
import BasementDwellers from "./Assets/BasementDwellers.mp3";
import Crown from "./Assets/Crown.mp3";
import Eclipse from "./Assets/Eclipse.mp3";



function Final() {
  const [data, setdata] = useState({
    audioPlayer: new Audio(),
    tracks: [

      {
        name: "Barely Alive - Bad Thang",
        file: BadThang,
      },
      {
        name: "Barely Alive & Virtual Riot - Basement Dwellers",
        file: BasementDwellers,
      },
      {
        name: "Skrillex & vic Mensa - Crown",
        file: Crown,
      },
      {
        name: "Last Heroes - Eclipse",
        file: Eclipse,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
    <MusicContext.Provider value={[data, setdata]}>
      <div className="container">
        <div className="heading">
          <div className="playlist-cover">
            <img
              src="https://images.radio.com/aiu-media/Social1200x1200KNRK-081c6444-d686-4149-a530-13a93f9d0d1e.jpg"
              alt="."
            />
          </div>
          <div className="info">
            <h2>Playlist</h2>
            <h1>Perfect Playlist</h1>
          </div>
        </div>
        <Tracks />
        <Controls className="Controls" />
      </div>
    </MusicContext.Provider>
  );
}

export default Final;