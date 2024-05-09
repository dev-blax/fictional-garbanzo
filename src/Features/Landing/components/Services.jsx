import React from "react";
import ServiceCard from "./ServiceCard";
import { PiStudent } from "react-icons/pi";
import { SiSpeedtest } from "react-icons/si";
import { PiHandCoinsLight } from "react-icons/pi";
import { BsGearWide } from "react-icons/bs";
import { PiChalkboardTeacherLight } from "react-icons/pi";

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

        <ServiceCard
        icon={<SiSpeedtest className=" text-white text-5xl " />}
        title={'Flexibility'}
        description={'Shule Mtandaoni allows students to study at their own pace and schedule, which is especially advantageous for those who need to work or help their families during the day'}
        />
        <ServiceCard
        icon={<PiHandCoinsLight className=" text-white text-5xl " />}
        title={'Cost-effective'}
        description={'Shule Mtandaoni can be more affordable than traditional schooling, as it eliminates costs associated with transportation, uniforms, and sometimes even textbooks'}
        />
        <ServiceCard
        icon={<BsGearWide className=" text-white text-5xl " />}
        title={'Diverse learning resources'}
        description={'Through Shule Mtandaoni, Tanzanian students can access a wide range of learning materials, including videos, interactive quizzes, and multimedia presentations, enhancing their educational experience.'}
        />
        <ServiceCard
        icon={<PiChalkboardTeacherLight className=" text-white text-5xl " />}
        title={'Personalized Learning'}
        description={'Shule Mtandaoni offers adaptive learning technologies that tailor educational content to individual student needs, helping to address gaps in learning and ensure better outcomes.'}
        />

      </section>
    </div>
  );
}

export default Services;
