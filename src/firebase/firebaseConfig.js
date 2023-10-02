// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// const all = import.meta.env;
// console.log(7, all);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: all.VITE_apiKey,
  authDomain: all.VITE_authDomain,
  projectId: all.VITE_projectId,
  storageBucket: all.VITE_storageBucket,
  messagingSenderId: all.VITE_messagingSenderId,
  appId: all.VITE_appId,
  measurementId: all.VITE_measurementId,
}; */
// console.log(23,firebaseConfig);


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
export const auth = getAuth(app);
