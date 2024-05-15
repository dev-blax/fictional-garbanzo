import React from "react";
import StudentHeader from "./Components/StudentHeader";
import CourseCard from "./Components/CourseCard";

const EnrolledClassesList = [
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

const renderCourses = EnrolledClassesList.map((course) => (
  <CourseCard
    title={course.title}
    instructor={course.instructor}
    price={course.price}
    duration={course.duration}
    tags={course.tags}
  />
));

function EnrolledClasses() {
  return (
    <div className=" bg-gray-200 w-full px-4">
      <StudentHeader />

      <div>
        <header className=" text-sm font-bold text-tangerine mb-2 mt-5"> My Enrolled Classes </header>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          {renderCourses}
        </div>
      </div>
    </div>
  );
}

export default EnrolledClasses;
