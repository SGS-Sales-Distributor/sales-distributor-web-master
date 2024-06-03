// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSproicg_pXQjSTWtTeqHYTDt77Osgbe8",
  authDomain: "testing-aja-bc428.firebaseapp.com",
  projectId: "testing-aja-bc428",
  storageBucket: "testing-aja-bc428.appspot.com",
  messagingSenderId: "775416329382",
  appId: "1:775416329382:web:70833600dd2c64e6d73067"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

// init firstore service
const db = getFirestore();
export default db;