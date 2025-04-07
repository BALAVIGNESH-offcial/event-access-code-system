import React, { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import "../styles.css"; // Import CSS file

const GenerateCode = () => {
  const [eventName, setEventName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accessCode, setAccessCode] = useState(null);

  const handleGenerate = async () => {
    if (!eventName || !userEmail) {
      alert("Please enter event name and email!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/generate-code", {
        eventName,
        userEmail,
      });
      setAccessCode(response.data.accessCode);
    } catch (error) {
      console.error("Error generating code:", error);
      alert("Failed to generate access code. Check backend!");
    }
  };

  return (
    <div className="container">
      <h2>Generate Access Code</h2>
      <input
        type="text"
        className="input-box"
        placeholder="Event Name"
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="email"
        className="input-box"
        placeholder="Attendee Email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Code</button>

      {accessCode && (
        <div className="qr-container">
          <h3>Your Access Code: {accessCode}</h3>
          <QRCodeCanvas value={accessCode} size={150} />
        </div>
      )}
    </div>
  );
};

export default GenerateCode;
