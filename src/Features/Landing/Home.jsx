import React from "react";
import { LoomNavbar } from "../../components/LoomNavbar";

import StudentHero from "./components/StudentHero";

import TeacherHero from "./components/TeacherHero";
import PopularClasses from './components/PopularClasses'


function Home() {
  return (
    <div className=" font-sans">
      <LoomNavbar />

      <StudentHero />

      <div className=" mx-auto bg-gradient-to-t from-orange-500 to-orange-300  ">
        <div className=" flex justify-between text-white py-5 font-semibold mx-auto max-w-7xl ">
          <p className=" text-3xl">Duolingo</p>

          <p className=" text-3xl">magic leap</p>

          <p className=" text-3xl">magic leap</p>

          <p className=" text-3xl">magic leap</p>

          <p className=" text-3xl">magic leap</p>
        </div>
      </div>

      {/* popular classes */}
      <PopularClasses />
      
      

      {/* teacher hero */}
      <TeacherHero />

      {/*  */}

      
    </div>
  );
}

export default Home;
