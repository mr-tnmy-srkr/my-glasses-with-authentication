// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgXNPNM_Cy8UUxzZ7Hu8B8maui1vUwW8",
  authDomain: "my-glasses-with-authentication.firebaseapp.com",
  projectId: "my-glasses-with-authentication",
  storageBucket: "my-glasses-with-authentication.appspot.com",
  messagingSenderId: "705979265113",
  appId: "1:705979265113:web:3bd6f9589cc243f0880148",
  measurementId: "G-XC706HG3QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
