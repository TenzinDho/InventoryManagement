// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbQWZR1agZfUptlDgEsjPuHVro44Po_Sk",
  authDomain: "inventory-management-df784.firebaseapp.com",
  projectId: "inventory-management-df784",
  storageBucket: "inventory-management-df784.appspot.com",
  messagingSenderId: "788265460800",
  appId: "1:788265460800:web:24191f8c76a961aeababa5",
  measurementId: "G-RZ3CTH9P9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app, firestore}
