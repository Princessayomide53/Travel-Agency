// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAHfENZMQyCGFUEHjZn9KLETMIr8KJ4Wo",
  authDomain: "jadoo-a8bda.firebaseapp.com",
  projectId: "jadoo-a8bda",
  storageBucket: "jadoo-a8bda.appspot.com",
  messagingSenderId: "660608084133",
  appId: "1:660608084133:web:ad374252582cd1e193054c",
  measurementId: "G-EC0BJMHYQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
