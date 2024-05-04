import React from 'react'
import { PiStudent } from "react-icons/pi";


function ServiceCard() {
  return (
    <div className=" flex gap-3 items-center">
          <div className=" p-3 rounded-full bg-tangerine ">
            <PiStudent className=" text-white text-5xl " />
          </div>

          <div>
            <p className=" font-semibold mb-2 text-sm "> Online Degress </p>
            <p className=" text-xs">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              mollitia officiis corporis voluptatem, amet velit aliquid quasi
              eveniet, modi nam ex, sunt veritatis. Quas, reprehenderit.
            </p>
          </div>
          
        </div>
  )
}

export default ServiceCard