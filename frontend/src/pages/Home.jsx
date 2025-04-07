import React from "react";
import "../styles.css"; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Event Access System</h1>
      <p>
        Your one-stop solution for generating and validating event access codes.
      </p>

      <div className="home-buttons">
        <a href="/generate" className="btn">
          Generate Code
        </a>
        <a href="/validate" className="btn">
          Validate Code
        </a>
        <a href="/dashboard" className="btn">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default Home;
