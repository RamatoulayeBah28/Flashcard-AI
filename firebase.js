// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4DoHwHOY-4Me3Rh_veA7ZTCxYepiU4jI",
  authDomain: "flashcardsaas-594c2.firebaseapp.com",
  projectId: "flashcardsaas-594c2",
  storageBucket: "flashcardsaas-594c2.appspot.com",
  messagingSenderId: "228192049162",
  appId: "1:228192049162:web:debb8e2d441d495bed27f3",
  measurementId: "G-JGG2WZ52HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);