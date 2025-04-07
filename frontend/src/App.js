import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GenerateCode from "./GenerateCode";
import ValidateCode from "./ValidateCode";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", padding: "10px" }}>
        <Link to="/">Generate Code</Link> |
        <Link to="/validate">Validate Code</Link> |
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GenerateCode />} />
        <Route path="/validate" element={<ValidateCode />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
