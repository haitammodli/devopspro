import React from 'react';
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Chatbot from "./components/Chatbot/Chatbot";
import About from "./components/About/About"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chatbot" element={<Chatbot />} /> 
      <Route path="/about" element={<About />} /> 
    </Routes>
  );
}
