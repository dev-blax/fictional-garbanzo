import Home from "./Features/Landing/Home";
import Login from "./Features/auth/Login";
import Register from "./Features/auth/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import StudentCore from "./Features/Core/Student/StudentCore";
import StudentDashboard from "./Features/Core/Student/StudentDashboard";
import InstructorRegister from "./Features/auth/InstructorRegister";
import VideoPlay from "./Features/Core/Student/VideoPlay";
import EnrolledClasses from "./Features/Core/Student/EnrolledClasses";
import CourseUpload from "./Features/Core/Teacher/CourseUpload";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/instructor-register" element={<InstructorRegister />} />

        <Route path="/home" element={<Home />} />

        <Route path="/student" element={<StudentCore />}>
          <Route path="/student/" element={<StudentDashboard />} />
          <Route path="/student/videoPlay" element={<VideoPlay />} />
          <Route path="/student/enrolled" element={<EnrolledClasses />} />
        </Route>

        <Route path="/teacher" element={<StudentCore />}>
          <Route path="/teacher/" element={<StudentDashboard />} />
          <Route path="/teacher/newCourse" element={<CourseUpload />} />
        </Route>
      </Routes>
    </>
  );
}
