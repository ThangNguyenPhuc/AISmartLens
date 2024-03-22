// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBiCLGfU8VWYX_ETX-Bty6oyCrSSURb0N4",
  authDomain: "lensdictionary.firebaseapp.com",
  databaseURL: "https://lensdictionary-default-rtdb.firebaseio.com",
  projectId: "lensdictionary",
  storageBucket: "lensdictionary.appspot.com",
  messagingSenderId: "25662012052",
  appId: "1:25662012052:web:20b58ba94f8918f9111281",
  measurementId: "G-C48LRLGTKM"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP)
export const db = getDatabase(FIREBASE_APP)