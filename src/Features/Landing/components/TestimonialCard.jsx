import React from "react";

function TestimonialCard() {
  return (
    <div className=" w-full md:max-w-96 bg-white p-4 rounded-xl shadow-xl ">
      <div className=" flex gap-2 items-center">
        <img
          className=" h-12 w-12 object-cover  rounded-full"
          src="https://images.pexels.com/photos/19501709/pexels-photo-19501709/free-photo-of-black-and-white-shot-of-a-young-woman-standing-outside-in-the-dark-and-looking-away.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />

        <div>
          <p className=" text-sm "> Alexa Rodriguez </p>
          <p className=" text-gray-500 text-xs"> CSEE Tanzania One (2024) </p>
          <p className=" text-xs"> Feza Secondary </p>
        </div>
      </div>

      <p className=" text-sm mt-3 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis quidem dolores id quod aperiam expedita? Sit eveniet iste eaque, laudantium natus odio quas.
      </p>
    </div>
  );
}

export default TestimonialCard;
