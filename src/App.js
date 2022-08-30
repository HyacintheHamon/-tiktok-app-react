import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TikTok from "./tiktok/TikTok";
import LoginSuccess from "./LoginSuccess/LoginSuccess";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TikTok />} />
        <Route path="/auth/login/" element={<TikTok />} />
        <Route path="/auth/login/success" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
}
