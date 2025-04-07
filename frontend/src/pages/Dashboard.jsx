import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import "../styles.css"; // Import CSS file

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
    <div className="container">
      <h2>Checked-in Attendees</h2>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            <strong>{attendee.userEmail}</strong> - {attendee.eventName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
