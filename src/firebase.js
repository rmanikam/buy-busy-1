// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQ1zDCnYLutQVRX6G1vKCaTtoGoqRwt0",
  authDomain: "buybusy-1-51b40.firebaseapp.com",
  projectId: "buybusy-1-51b40",
  storageBucket: "buybusy-1-51b40.appspot.com",
  messagingSenderId: "368301177341",
  appId: "1:368301177341:web:2673d899627c580b14c194",
  measurementId: "G-BJ8XPK8K1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
