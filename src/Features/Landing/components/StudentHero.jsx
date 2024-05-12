import React from "react";
import { Button } from "@material-tailwind/react";
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function StudentHero() {
  return (
    <div className=" flex flex-col md:flex-row max-w-7xl mx-auto  ">
      <div className=" w-full flex flex-col justify-center gap-10">
        <p className=" text-7xl font-semibold text-center md:text-start px-5 md:px-0 ">
          Develop your skills in a new and unique way
        </p>
        <p className=" text-center md:text-start px-5 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias
          odit ea velit, repudiandae, obcaecati quibusdam deserunt tempore quos
          porro consectetur nostrum? Sed debitis odit blanditiis dolorem quod,
          laudantium asperiores!
        </p>

        <div className=" flex flex-col md:flex-row items-center gap-5">
          <Link to={"/register"}>
            <Button variant="gradient" color="orange">
              {" "}
              Enroll Now{" "}
            </Button>
          </Link>
          <Button
            variant="text"
            color="orange"
            className=" underline underline-offset-4 flex items-center gap-3"
          >
            {" "}
            <FaAddressBook /> What's Shule Mtandaoni{" "}
          </Button>
        </div>
      </div>

      <div className=" w-full ">
        <img src="/images/student-edit.png" className="" alt="" />
      </div>
    </div>
  );
}

export default StudentHero;
