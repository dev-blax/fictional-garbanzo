import React from "react";
import CourseCard from "./Components/CourseCard";
import StudentHeader from "./Components/StudentHeader";
import { CoreNavbar } from "./Components/CoreNavbar";

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
    tags: ["O-level", "Civics", "Law"],
  },
  {
    title: "Basic Arithmetic",
    instructor: "Ms. Johnson",
    price: "Free",
    duration: "3 hours",
    tags: ["Primary School", "Mathematics", "Arithmetic"],
  },
  {
    title: "Introduction to Science",
    instructor: "Mr. Smith",
    price: "Free",
    duration: "2 hours",
    tags: ["Primary School", "Science", "Basics"],
  },
];

const renderCourses = (level) => {
  return CoursesList.filter((course) => course.tags.includes(level)).map((course) => (
    <CourseCard
      key={course.title}
      title={course.title}
      instructor={course.instructor}
      price={course.price}
      duration={course.duration}
      tags={course.tags}
    />
  ));
};

function StudentDashboard() {
  return (
    <div className="bg-gray-100">

      <div className="mx-4">
        <CoreNavbar />
      </div>

      <StudentHeader />

      <p className="px-4 text-sm font-bold text-gray-700">
        New Courses{" "}
        <span className="hover:underline underline-offset-2 cursor-pointer text-gray-600">
          See All
        </span>
      </p>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {renderCourses("New")}
      </div>

      <p className="px-4 text-sm font-bold text-gray-700">
        Primary School Courses{" "}
        <span className="hover:underline underline-offset-2 cursor-pointer text-gray-600">
          See All
        </span>
      </p>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {renderCourses("Primary School")}
      </div>

      <p className="px-4 text-sm font-bold text-gray-700">
        O-Level Courses{" "}
        <span className="hover:underline underline-offset-2 cursor-pointer text-gray-600">
          See All
        </span>
      </p>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {renderCourses("O-level")}
      </div>

      <p className="px-4 text-sm font-bold text-gray-700">
        A-Level Courses{" "}
        <span className="hover:underline underline-offset-2 cursor-pointer text-gray-600">
          See All
        </span>
      </p>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {renderCourses("A-level")}
      </div>
    </div>
  );
}

export default StudentDashboard;
