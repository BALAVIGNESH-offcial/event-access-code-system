import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GenerateCode from "./pages/GenerateCode";
import ValidateCode from "./pages/ValidateCode"; // ✅ Ensure this import is correct
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Home Page Route */}
        <Route path="/generate" element={<GenerateCode />} />
        <Route path="/validate" element={<ValidateCode />} />{" "}
        {/* ✅ Ensure this is here */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
