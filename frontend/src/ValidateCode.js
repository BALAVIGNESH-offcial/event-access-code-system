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
      setMessage("Invalid or already checked-in code!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Validate Access Code</h2>
      <input
        type="text"
        placeholder="Enter Access Code"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
      />
      <button onClick={handleValidate}>Check-in</button>
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default ValidateCode;
