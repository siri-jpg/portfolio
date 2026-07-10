// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IzuvCpqC4a2-a6SE06vkYRefXgIJG7c",
  authDomain: "portfolio-994b1.firebaseapp.com",
  projectId: "portfolio-994b1",
  storageBucket: "portfolio-994b1.firebasestorage.app",
  messagingSenderId: "716884312027",
  appId: "1:716884312027:web:639a830524a045d462b1fe",
  measurementId: "G-VZD3S467P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
