import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔹 Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyDZNyfPOavM4hADbVidOxfI2YQJ56oVQAM",
  authDomain: "digital-code-b959d.firebaseapp.com",
  projectId: "digital-code-b959d",
  storageBucket: "digital-code-b959d.appspot.com", // ✅ Corrected this line
  messagingSenderId: "944359538418",
  appId: "1:944359538418:web:9316135324a076a9b81a6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
