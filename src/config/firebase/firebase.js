// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "jso-backend.firebaseapp.com",
  projectId: "jso-backend",
  storageBucket: "jso-backend.appspot.com",
  messagingSenderId: "93171705306",
  appId: "1:93171705306:web:646f9ea580aea75e044ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app