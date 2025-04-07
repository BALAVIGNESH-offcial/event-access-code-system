import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Import Firebase Firestore
import { collection, query, onSnapshot, where } from "firebase/firestore";

const Dashboard = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "eventAccessCodes"),
      where("checkedIn", "==", true)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const attendeesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAttendees(attendeesList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Checked-in Attendees</h2>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            {attendee.userEmail} - {attendee.eventName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
