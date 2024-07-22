// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpWnyAuonFHhOmcbPdDyHDpMQZIKoCR14",
  authDomain: "linkedin-clone-212cd.firebaseapp.com",
  projectId: "linkedin-clone-212cd",
  storageBucket: "linkedin-clone-212cd.appspot.com",
  messagingSenderId: "909266890429",
  appId: "1:909266890429:web:b6950f92370f518a5c11d4",
  measurementId: "G-D8MK5DKWV5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);