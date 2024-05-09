import React from "react";
import { FaBookReader } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { TiVideo } from "react-icons/ti";


function ClassCard({
  image,
  className,
  rating,
  numVideos,
  numStudents,
  price,
  instructor,
  classCategory,
}) {
  return (
    <div className="bg-white p-2 rounded-2xl w-80">
      <img
        src={image}
        className="w-full h-40 object-cover object-center rounded-xl"
        alt=""
      />

      <div className="flex justify-between items-center mt-2 text-sm text-white mb-4">
        <div className="flex gap-1 items-center bg-daffodil px-2 py-1 rounded-md">
          <FaDotCircle className="text-sm" />
          <p>{classCategory}</p>
        </div>

        <div className="flex gap-2 items-center bg-daffodil rounded-md px-2 py-1">
          <FaStar />
          <p>{rating}</p>
        </div>
      </div>

      <p className="font-semibold text-lg">{className}</p>

      <div className="flex gap-2 mt-3">
        <div className="flex gap-1">
          <TiVideo />
          <span className="text-xs">{numVideos} Videos </span>
        </div>
        <div className="flex gap-1">
          <FaBookReader />
          <span className="text-xs">{numStudents} Students</span>
        </div>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between">
        <p>{price}</p>

        <div className="flex gap-2 items-center">
          <img
            src={instructor.image}
            className="w-5 h-5 rounded-full object-cover object-center"
            alt=""
          />
          <p className="text-xs">{instructor.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
