import React from "react";
import BannerSection from "./Components/BannerSection";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function StudentDashboard() {
  return (
    <div className=" w-full flex">
      {/* Banner Section */}
      <BannerSection />

      <div className=" w-1/4">
        <header> Kings </header>

        <MediaPlayer
        playsInline
          title="Sprite Fight"
          src="https://videos.pexels.com/video-files/1580507/1580507-sd_640_360_30fps.mp4"
        >
          <MediaProvider />
          <DefaultVideoLayout
            thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>
      </div>
    </div>
  );
}

export default StudentDashboard;
