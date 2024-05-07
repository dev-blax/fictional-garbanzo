import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className=" flex flex-col md:flex-row max-w-7xl mx-auto pb-8 md:pb-0  ">
      <div className=" w-full">
        <img
          src="/images/teacher-edit.png"
          className=" w-full "
          alt="teacher"
        />
      </div>

      <section className=" w-full flex flex-col gap-8 items-center px-5 md:px-0 justify-center ">
        <header className=" font-semibold text-5xl text-center md:text-start ">
          {" "}
          <span className=" text-daffodil"> Benefits </span> From Our Online
          Learning{" "}
        </header>

        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>
    </div>
  );
}

export default Services;
