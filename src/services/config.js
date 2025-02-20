
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4mIyP9LQdPmu3vw-5H403WxpGKPWJx4A",
  authDomain: "final-65670-c9580.firebaseapp.com",
  projectId: "final-65670-c9580",
  storageBucket: "final-65670-c9580.firebasestorage.app",
  messagingSenderId: "584153348053",
  appId: "1:584153348053:web:d0290ffc1be7729deeaf5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)