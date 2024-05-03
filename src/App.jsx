import Home from "./Features/Landing/Home";
import Login from "./Features/auth/Login";
import Register from "./Features/auth/Register";
import { Route, Routes } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />
    </Routes>
   </>
  )
} 