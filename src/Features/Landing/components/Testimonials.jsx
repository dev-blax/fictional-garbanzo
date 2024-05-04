import { Typography } from "@material-tailwind/react";
import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className=" bg-gradient-to-tl from-tangerine to-daffodil py-12">
      <Typography variant="h4" className=" text-center text-white">
        {" "}
        Citizen's Testimonials{" "}
      </Typography>
      <Typography className=" max-w-3xl mx-auto mb-8 text-center text-gray-100">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla cumque
        quam maxime voluptatum numquam amet facilis veritatis obcaecati
        doloribus, sapiente voluptatem illo placeat eius minus et. Esse soluta
        perspiciatis nisi rem, cum nulla quae quos.{" "}
      </Typography>

      <div className=" ">
        <div className=" mx-auto max-w-7xl flex justify-around ">
          {/* Testimonial Card */}
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
