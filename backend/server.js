const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");

// ✅ Initialize Express
const app = express();

// ✅ Middleware
app.use(cors({ origin: "*" })); // Allow frontend requests
app.use(bodyParser.json());

// ✅ Initialize Firebase
const serviceAccount = require("./config/firebaseConfig.json"); // Ensure this file exists
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://digital-code-b959d.firebaseio.com",
});

const db = admin.firestore();

// ✅ Default Route (Fix for "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// ✅ Generate Access Code
app.post("/generate-code", async (req, res) => {
  const { eventName, userEmail } = req.body;

  if (!eventName || !userEmail) {
    console.error("❌ Missing event name or email!");
    return res
      .status(400)
      .json({ success: false, message: "Missing event name or email" });
  }

  const accessCode = uuidv4().slice(0, 8); // Generate 8-character code
  console.log(`✅ Generated Access Code: ${accessCode} for ${userEmail}`);

  const entry = {
    eventName,
    userEmail,
    accessCode,
    checkedIn: false,
    timestamp: new Date(),
  };

  try {
    const docRef = await db.collection("eventAccessCodes").add(entry);
    console.log(`✅ Successfully saved to Firestore: ${docRef.id}`);
    res.json({ success: true, accessCode });
  } catch (error) {
    console.error("❌ Error writing to Firestore:", error);
    res.status(500).json({ success: false, message: "Database error", error });
  }
});
//validation code
app.post("/validate-code", async (req, res) => {
  const { accessCode } = req.body;

  console.log(`🔹 Validating Access Code: ${accessCode}`);

  try {
    const snapshot = await db
      .collection("eventAccessCodes")
      .where("accessCode", "==", accessCode)
      .get();

    if (snapshot.empty) {
      console.log("❌ Invalid Access Code");
      return res.status(400).json({ success: false, message: "Invalid Code" });
    }

    let docId;
    let checkedIn = false;

    snapshot.forEach((doc) => {
      docId = doc.id;
      checkedIn = doc.data().checkedIn;
      console.log(`📄 Found Code: ${docId}, Checked-In: ${checkedIn}`);
    });

    if (checkedIn) {
      console.log("⚠️ Code already checked in");
      return res
        .status(400)
        .json({ success: false, message: "Code already checked in" });
    }

    await db
      .collection("eventAccessCodes")
      .doc(docId)
      .update({ checkedIn: true });

    console.log("✅ Check-in successful!");
    res.json({ success: true, message: "Check-in successful!" });
  } catch (error) {
    console.error("❌ Error during check-in:", error);
    res
      .status(500)
      .json({ success: false, message: "Error checking in", error });
  }
});

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
