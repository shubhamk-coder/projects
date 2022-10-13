// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGiBlGdoZrWDl2WCKjUGFIu7XZTGXZrO0",
  authDomain: "react-netflix-clone-d9e28.firebaseapp.com",
  projectId: "react-netflix-clone-d9e28",
  storageBucket: "react-netflix-clone-d9e28.appspot.com",
  messagingSenderId: "340877636455",
  appId: "1:340877636455:web:dcc7534375dcb0e7fa35c2",
  measurementId: "G-LLEXC3ZE6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
