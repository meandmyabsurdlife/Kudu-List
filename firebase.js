// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ0ERfUzsPAWuS0LPBIz2A2RUVeUhHyF0",
  authDomain: "kudulist-app.firebaseapp.com",
  projectId: "kudulist-app",
  storageBucket: "kudulist-app.appspot.com",
  messagingSenderId: "392417702601",
  appId: "1:392417702601:web:ee363a8d264ebc0f881318"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
