import React from 'react';import { Button } from "@material-tailwind/react";
import { FaAddressBook } from "react-icons/fa";

function StudentHero() {
  return (
    <div className=" flex max-w-7xl mx-auto  ">
        <div className=" w-full flex flex-col justify-center gap-10">
          <p className=" text-7xl font-semibold ">
            Develop your skills in a new and unique way
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            alias odit ea velit, repudiandae, obcaecati quibusdam deserunt
            tempore quos porro consectetur nostrum? Sed debitis odit blanditiis
            dolorem quod, laudantium asperiores!
          </p>

          <div className=" flex gap-5">
            <Button variant="gradient" color="orange">
              {" "}
              Enroll Now{" "}
            </Button>
            <Button
              variant="text"
              color="orange"
              className=" underline underline-offset-4 flex items-center gap-3"
            >
              {" "}
              <FaAddressBook /> What's etech{" "}
            </Button>
          </div>
        </div>

        <div className=" w-full">
          <img src="/images/student-edit.png" className="" alt="" />
        </div>
      </div>
  )
}

export default StudentHero