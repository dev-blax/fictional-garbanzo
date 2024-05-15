import React from "react";
import BannerSection from "./Components/BannerSection";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { MdArrowBackIos } from "react-icons/md";

const CourseVideos = [
  {
    title: "Introduction to the course",
    thumbnail: "/images/teach.jpg",
  },
  {
    title: "What are Metrics",
    thumbnail: "/images/teach.jpg",
  },
  {
    title: "Google Analytics",
    thumbnail: "/images/teach.jpg",
  },
  {
    title: "What is SEO",
    thumbnail: "/images/teach.jpg",
  },
];

const renderVideos = CourseVideos.map((courseVideo) => (
  <div>
    <img
      src={courseVideo.thumbnail}
      className=" h-32 w-64 object-cover object-center rounded-md "
      alt="image_class"
    />
    <p className=" font-bold my-2 text-lg"> {courseVideo.title} </p>
  </div>
));

function VideoPlay() {
  return (
    <div className=" w-full px-3 ">
      <div className=" flex gap-1 items-center mt-2">
        <MdArrowBackIos className=" text-tangerine" />
        <span className=" text-tangerine " > Go Back </span>
      </div>

      <header className=" font-bold text-2xl mt-3 mb-5"> Product Analysis </header>

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

      <section>
        <p>All Lessons</p>

        <div className=" flex gap-4">

          {renderVideos}
          

          
        </div>
      </section>

      {/* Banner Section
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
      </div> */}
    </div>
  );
}

export default VideoPlay;
