import React from "react";
import CourseCard from "./Components/CourseCard";
import StudentHeader from "./Components/StudentHeader";

const CoursesList = [
  {
    title: "Linear Programming",
    instructor: "Madam Martha",
    price: "Free",
    duration: "4 hours",
    tags: ["O-level", "Basic Mathematics", "Algebra"],
  },
  {
    title: "Differential Equations",
    instructor: "Joseph Ismail",
    price: "Free",
    duration: "4 hours",
    tags: ["A-level", "Basic Mathematics", "Differential equation"],
  },
  {
    title: "Projectile Motion",
    instructor: "Young Teacher",
    price: "Free",
    duration: "4 hours",
    tags: ["A-level", "Advanced Physics", "Physical"],
  },
  {
    title: "Human Rights",
    instructor: "Simon Paul",
    price: "Free",
    duration: "4 hours",
    tags: ["O-level", "Basic Mathematics", "Algebra"],
  },
];

const renderCourses = CoursesList.map((course) => (
  <CourseCard
    title={course.title}
    instructor={course.instructor}
    price={course.price}
    duration={course.duration}
    tags={course.tags}
  />
));

function StudentDashboard() {
  return (
    <div className=" bg-gray-100">

      <StudentHeader />
      
      <p className=" px-4 text-sm font-bold text-gray-700 ">
        {" "}
        New Courses{" "}
        <span className=" hover:underline underline-offset-2 cursor-pointer text-gray-100 ">
          {" "}
          See All{" "}
        </span>{" "}
      </p>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {renderCourses}
      </div>

      <p className=" px-4 text-sm font-bold text-gray-700 ">
        {" "}
        Primary School Courses{" "}
        <span className=" hover:underline underline-offset-2 cursor-pointer text-gray-100 ">
          {" "}
          See All{" "}
        </span>{" "}
      </p>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {renderCourses}
      </div>

      <p className=" px-4 text-sm font-bold text-gray-700 ">
        {" "}
        O-Level Courses{" "}
        <span className=" hover:underline underline-offset-2 cursor-pointer text-gray-100 ">
          {" "}
          See All{" "}
        </span>{" "}
      </p>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {renderCourses}
      </div>

      <p className=" px-4 text-sm font-bold text-gray-700 ">
        {" "}
        A-Level Courses{" "}
        <span className=" hover:underline underline-offset-2 cursor-pointer text-gray-100 ">
          {" "}
          See All{" "}
        </span>{" "}
      </p>
      <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {renderCourses}
      </div>
    </div>
  );
}

export default StudentDashboard;
