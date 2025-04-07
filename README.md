
System for generating digital access codes and tracking addresses
# Event Access Code System 🎉

A full-stack web application for generating and tracking unique digital access codes and QR codes for event management.  
This system enhances efficiency, security, and accuracy for events like conferences, concerts, seminars, and corporate gatherings.

---

## 📌 Features

- 🔒 **Secure Access Codes**: Generate unique alphanumeric or QR codes for every attendee.
- 🧩 **Real-time Validation**: Attendees can check in by scanning or entering the code.
- 🔥 **Firebase Integration**: Seamless backend data storage and real-time updates.
- 🎯 **Address Tracking**: Collect and monitor attendee addresses.
- 📊 **Dashboard Analytics**: Track event participation and code usage.
- 💻 **Responsive Frontend**: Built with React.js for smooth user experience.
- 🌐 **Backend API**: Built using Node.js and Express.js for handling requests.

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Deployment**: (Optional: Can deploy on Vercel, Netlify, or Firebase Hosting)
  
## 🔥 Firebase Integration (Previously Used)

Originally, this project used **Firebase** to manage data storage, authentication, and real-time updates.  
This section explains how Firebase was used, so future developers can understand or re-integrate if needed.

### 1. Firebase Firestore (Database)

- **Purpose:** Store attendee information, access codes, check-in status, and address tracking.
- **Structure:**
  - **Collection:** `attendees`
    - **Document:** `{ attendeeId }`
      - `name`
      - `email`
      - `accessCode`
      - `qrCodeUrl`
      - `address`
      - `checkedIn` (boolean)

### 2. Firebase Authentication (Optional)

- **Purpose:** Manage admin and organizer logins securely.
- **Usage:**
  - Authorized admins can generate access codes.
  - Manage attendee lists and monitor check-ins.

### 3. Firebase SDK in Frontend (React)

- **Firebase SDK** was used to:
  - Connect the frontend React app to Firestore.
  - Perform real-time CRUD operations.
  - Generate QR codes dynamically based on stored access codes.

### 4. Firebase Hosting (Optional)

- **Firebase Hosting** was considered for deployment.
- **Benefits:**
  - Free SSL certificate.
  - Fast global CDN.
  - Seamless integration with Firebase services.

### 5. Firebase Configuration (Removed Now)

Previously, we used a `firebaseConfig.js` file to initialize Firebase in the project.  
Sensitive data like API keys were secured using environment variables (`.env` file).

```javascript
// Example (removed)
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
```


⚠️ Why Firebase was Removed
To simplify the project and make it backend-agnostic.

Switched to using Express.js and future possibility of other databases like MongoDB, MySQL, or local JSON files.

Firebase can still be re-integrated anytime in the future!

🚀 If someone wants to re-integrate Firebase:
Create a Firebase project at Firebase Console.

Add a web app and copy the Firebase config.

Install Firebase SDK:

npm install firebase
Initialize Firebase in your frontend.

Set up Firestore and optionally, Firebase Auth.
Secure sensitive keys using .env files.

## 🚀 How to Run the Project Locally
````
1.Clone the Repository
git clone https://github.com/your-username/event-access-code-system.git
cd event-access-code-system

2. Install Backend Dependencies
cd backend
npm install

3. Install Frontend Dependencies
cd ../frontend
npm install

4. Start the Backend Server
cd backend
npm start

5. Start the Frontend App
cd ../frontend
npm start


