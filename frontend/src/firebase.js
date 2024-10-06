// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1DoyZgTo03socvJTEAxxJxNJS6otFyNc",
  authDomain: "brainmap-network.firebaseapp.com",
  projectId: "brainmap-network",
  storageBucket: "brainmap-network.appspot.com",
  messagingSenderId: "874474594130",
  appId: "1:874474594130:web:27345d3c647c5bf7f8e48b",
  measurementId: "G-HF3LCLER0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);