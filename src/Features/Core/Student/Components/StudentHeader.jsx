import React from "react";
import { MdNotifications, MdAccountCircle } from "react-icons/md";

function StudentHeader() {
  return (
    <div className=" flex justify-between px-5 py-3">
      <p className=" text-3xl text-gray-800 font-semibold">
        Welcome, Jane Smith
      </p>
      <div className=" hidden md:flex items-center gap-4">
        <div className=" p-2 rounded-full bg-white">
          <MdNotifications className=" text-2xl" />
        </div>

        <div className=" p-2 rounded-full bg-white">
          <MdAccountCircle className=" text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default StudentHeader;
