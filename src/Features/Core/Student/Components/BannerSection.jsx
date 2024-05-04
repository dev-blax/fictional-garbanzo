import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Button } from "@fluentui/react-components";

function BannerSection() {
  return (
    <div className=" w-3/4 px-8">
        <header> Trending Cities </header>

        <div className=" relative ">
          <img
            className=" w-full h-60 object-cover rounded-lg  "
            src="https://images.pexels.com/photos/2600964/pexels-photo-2600964.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="trending"
          />

          <div className="absolute top-5 left-5">
            <p className="  text-gray-200 text-5xl font-semibold ">
              {" "}
              On Purpose{" "}
            </p>
            <p className=" text-gray-400 mt-2"> With Jay Shetty </p>

            <div className=" flex gap-4 items-center mt-2">
              <FaPlay className=" text-tangerine" /> <span className=" text-white"> 120 minutes </span>
            </div>
          </div>

          <div className=" absolute bottom-5 left-5">
            <Button appearance="primary">Watch Now</Button>
          </div>
        </div>
      </div>
  )
}

export default BannerSection