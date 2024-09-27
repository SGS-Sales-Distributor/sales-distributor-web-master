// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// old Jenyta
// const firebaseConfig = {
//   apiKey: "AIzaSyCSproicg_pXQjSTWtTeqHYTDt77Osgbe8",
//   authDomain: "testing-aja-bc428.firebaseapp.com",
//   projectId: "testing-aja-bc428",
//   storageBucket: "testing-aja-bc428.appspot.com",
//   messagingSenderId: "775416329382",
//   appId: "1:775416329382:web:70833600dd2c64e6d73067"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAzgUNNpHMlnZsid9TG5kcdN-jkzMx52Uw",
  authDomain: "sgs-distribution.firebaseapp.com",
  projectId: "sgs-distribution",
  storageBucket: "sgs-distribution.appspot.com",
  messagingSenderId: "739482897656",
  appId: "1:739482897656:web:a76f23a3bc19f122d6ff0d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

// init firstore service
const db = getFirestore();
export default db;