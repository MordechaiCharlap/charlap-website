// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX4NDR7GHlOhcWCrp2bdVQ8G2_EiMhIJQ",
  authDomain: "charlap-website.firebaseapp.com",
  projectId: "charlap-website",
  storageBucket: "charlap-website.appspot.com",
  messagingSenderId: "357714316590",
  appId: "1:357714316590:web:1c04985e32f86d74417ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
