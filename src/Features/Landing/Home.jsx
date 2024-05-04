import React from "react";
import { LoomNavbar } from "../../components/LoomNavbar";

import StudentHero from "./components/StudentHero";

import TeacherHero from "./components/TeacherHero";
import PopularClasses from "./components/PopularClasses";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";
import Footer from './components/Footer';

function Home() {
  return (
    <div className=" font-sans">
      <LoomNavbar />

      <StudentHero />

      {/* brands */}
      <Brands />

      {/* Services */}
      <Services />

      {/* popular classes */}
      <PopularClasses />

      {/* teacher hero */}
      <TeacherHero />

      {/* Testimonials */}
      <Testimonials />

      {/* Get in Touch  */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
