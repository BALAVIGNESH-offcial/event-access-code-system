import React, { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react"; // Ensure correct import

const GenerateCode = () => {
  const [eventName, setEventName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accessCode, setAccessCode] = useState(null); // Make sure it's null initially

  const handleGenerate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-code", {
        eventName,
        userEmail,
      });

      console.log("Generated Code:", response.data.accessCode); // Debugging log
      setAccessCode(response.data.accessCode); // Set the generated access code
    } catch (error) {
      console.error("Error generating code:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Generate Access Code</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Attendee Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>

      {/* Show QR Code only when accessCode is available */}
      {accessCode && (
        <div style={{ marginTop: "20px" }}>
          <h3>Access Code: {accessCode}</h3>
          <QRCodeCanvas value={accessCode} size={200} />
        </div>
      )}
    </div>
  );
};

export default GenerateCode;
