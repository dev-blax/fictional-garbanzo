import React from "react";
import { PiStudent } from "react-icons/pi";

function Footer() {
  return (
    <footer className=" bg-gradient-to-tl from-daffodil  to-tangerine py-12">
      <div className=" mx-auto max-w-7xl flex flex-col md:flex-row px-4 md:px-0 gap-8 text-white justify-around ">
        <div className=" w-full flex flex-col gap-2">
          <header className=" text-3xl "> Shule Mtandaoni </header>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, alias ullam repudiandae reiciendis magnam consectetur.
            Inventore recusandae facilis non nam.
          </p>

          <div className=" flex items-center gap-5">
            <PiStudent />
            <PiStudent />
            <PiStudent />
          </div>
        </div>

        <div className=" w-full flex gap-5">
        <div className=" w-full">
          <header className="text-3xl mb-2"> Links </header>
          <p> Classes </p>
          <p> Become an Instructor </p>
          <p> Student Offer </p>
          <p> All-in-One </p>
        </div>
        

        <div className=" w-full text-white">
          <header className=" text-3xl mb-2"> Contact us </header>
          <p> +255-768-123-456 </p>
          <p> support@shulemtandaoni.com </p>
        </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;
