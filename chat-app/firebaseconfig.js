// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8rgQ3WzR5KDqnSlfggeT3O4usTovwYs",
  authDomain: "chatapp-8cc17.firebaseapp.com",
  projectId: "chatapp-8cc17",
  storageBucket: "chatapp-8cc17.appspot.com",
  messagingSenderId: "264674505097",
  appId: "1:264674505097:web:209e5349cacd8270d7b158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };