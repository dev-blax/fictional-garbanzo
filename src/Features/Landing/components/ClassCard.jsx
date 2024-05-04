import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
function ClassCard() {
  return (
    <div className=" bg-white p-2 rounded-2xl w-80">
      <img
        src="/images/teach.jpg"
        className=" w-full h-40 object-cover object-center rounded-xl "
        alt=""
      />

      <div className=" flex justify-between items-center mt-2 text-sm text-white mb-4">
        <div className=" flex gap-1 items-center bg-daffodil px-2 py-1 rounded-md">
          <FaDotCircle className=" text-sm" />

          <p> Web Design </p>
        </div>

        <div className=" flex gap-2 items-center bg-daffodil rounded-md px-2 py-1 ">
          <FaStar />
          <p>4.9</p>
        </div>
      </div>

      <p className=" font-semibold text-lg   ">Web Design & Development</p>

      <div className=" flex gap-2 mt-3 ">
        <div className=" flex gap-1">
          <FaBookOpen />
          <span className="text-xs"> 25 Classes </span>
        </div>
        <div className=" flex gap-1">
          <FaBookReader />
          <span className="text-xs"> 185 Students </span>
        </div>
      </div>

      <hr className=" my-3" />

      <div className=" flex justify-between ">
        <p> Free</p>

        <div className=" flex gap-2 items-center">
          <img
            src="https://images.pexels.com/photos/4992382/pexels-photo-4992382.jpeg?auto=compress&cs=tinysrgb&w=600"
            className=" w-5 h-5 rounded-full object-cover object-center"
            alt=""
          />
          <p className=" text-xs"> Josephin Morgan </p>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
