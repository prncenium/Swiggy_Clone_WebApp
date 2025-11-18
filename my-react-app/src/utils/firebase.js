
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHmllRLQn2L-iqa02UauNrvYF7427Bu0k",
  authDomain: "swiggyauth-2f1b9.firebaseapp.com",
  projectId: "swiggyauth-2f1b9",
  storageBucket: "swiggyauth-2f1b9.firebasestorage.app",
  messagingSenderId: "318190856620",
  appId: "1:318190856620:web:4bd7dc31e685a1ffc3f209",
  measurementId: "G-4KR1RKTTY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };