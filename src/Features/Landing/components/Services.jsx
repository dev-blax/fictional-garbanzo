import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className=" flex max-w-7xl mx-auto  ">
      <div className=" w-full">
        <img
          src="/images/teacher-edit.png"
          className=" w-full "
          alt="teacher"
        />
      </div>

      <section className=" w-full flex flex-col gap-4 justify-center ">
        <header className=" font-semibold text-5xl ">
          {" "}
          <span className=" text-tangerine"> Benefits </span> From Our Online
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
