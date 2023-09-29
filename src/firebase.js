// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkHifJW3SZMUH3uIlDDI913qALxLbrKE",
  authDomain: "react-chat-e759d.firebaseapp.com",
  projectId: "react-chat-e759d",
  storageBucket: "react-chat-e759d.appspot.com",
  messagingSenderId: "717609023302",
  appId: "1:717609023302:web:2139728a4ae904ef495747",
  measurementId: "G-8XV92HL8FP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);