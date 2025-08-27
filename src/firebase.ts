import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXi8VN9UwlT_AJqGNoxDWeutNcx-PiXx0",
  authDomain: "volcomm-4ad4d.firebaseapp.com",
  projectId: "volcomm-4ad4d",
  storageBucket: "volcomm-4ad4d.firebasestorage.app",
  messagingSenderId: "369997520287",
  appId: "1:369997520287:web:55abeb29cf3bd0c40331aa",
  measurementId: "G-C6BHWXJTPB",
  databaseURL: "https://volcomm-4ad4d-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
