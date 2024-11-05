// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx_IQQ4v8AHj-2mxAlAQ6EwZU9a7eSRyM",
  authDomain: "ecommerce-react-coder-40e32.firebaseapp.com",
  projectId: "ecommerce-react-coder-40e32",
  storageBucket: "ecommerce-react-coder-40e32.firebasestorage.app",
  messagingSenderId: "838407471954",
  appId: "1:838407471954:web:75d84e664af360e378708b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
