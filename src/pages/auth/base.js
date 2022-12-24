// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0UPD6Em-gDPGD3SH94Tbut_e5l0oIR6A",
  authDomain: "drixy-auth.firebaseapp.com",
  projectId: "drixy-auth",
  storageBucket: "drixy-auth.appspot.com",
  messagingSenderId: "401594343671",
  appId: "1:401594343671:web:06a5958d8ed8719f23b3f2",
  measurementId: "G-5BZ18MQMM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}