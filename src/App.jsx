import Home from "./Features/Landing/Home";
import Login from "./Features/auth/Login";
import Register from "./Features/auth/Register";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import StudentCore from "./Features/Core/Student/StudentCore";
import StudentDashboard from "./Features/Core/Student/StudentDashboard";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/student" element={<StudentCore />} >
        <Route path="/student/" element={<StudentDashboard />} />
      </Route>
    </Routes>
   </>
  )
} 