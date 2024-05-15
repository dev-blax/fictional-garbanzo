import React from "react";
import { AiFillAmazonCircle, AiOutlineSave, AiFillBook } from "react-icons/ai";

function CourseCard({ title, instructor, price, duration, tags }) {
  return (
    <div className=" bg-white flex flex-col justify-between gap-2 p-3 rounded-xl shadow-md md:max-w-96 ">
      <div className=" flex flex-col gap-2 ">
        <div className=" flex justify-between items-center ">
          <AiFillBook className=" text-xl" />
          <div className=" flex gap-2 items-center p-2 rounded-md bg-gray-300">
            <span> Save </span>
            <AiOutlineSave />
          </div>
        </div>

        <p className=" font-bold text-xl">
          {" "}
          Amazon <span className=" text-gray-500 text-base ">
            {" "}
            {duration}{" "}
          </span>{" "}
        </p>

        <p className=" text-3xl font-semibold"> {title} </p>

        <div className=" flex flex-wrap gap-3">
          {tags.map((tag) => (
            <p className=" bg-gray-300 px-2 py-1 rounded-md">{tag}</p>
          ))}
        </div>
      </div>

      <div>
        <hr className=" text-black my-3 " />

        <div className=" flex justify-between items-center flex-wrap ">
          <div className=" flex  gap-1">
            <span className=" font-bold "> {price}</span>
            <span className=" text-gray-600"> {instructor} </span>
          </div>

          <p className=" bg-tangerine text-gray-100 px-3 py-2 rounded-md flex-wrap">
            Enroll Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
