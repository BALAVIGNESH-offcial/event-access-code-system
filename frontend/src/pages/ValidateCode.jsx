import React, { useState } from "react";
import axios from "axios";

const ValidateCode = () => {
  const [accessCode, setAccessCode] = useState("");
  const [message, setMessage] = useState("");

  const handleValidate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/validate-code", {
        accessCode,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Invalid or already checked-in code.");
    }
  };

  return (
    <div className="container">
      <h2>Validate Access Code</h2>
      <input
        type="text"
        className="input-box"
        placeholder="Enter Access Code"
        onChange={(e) => setAccessCode(e.target.value)}
      />
      <button onClick={handleValidate}>Validate</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ValidateCode;
