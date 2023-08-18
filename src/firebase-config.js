// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{GoogleAuthProvider, getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC74qBARmEM7zEjVIBH23Kc_JVV9ASH-s8",
  authDomain: "young-africa-leaders.firebaseapp.com",
  projectId: "young-africa-leaders",
  storageBucket: "young-africa-leaders.appspot.com",
  messagingSenderId: "297559082173",
  appId: "1:297559082173:web:f2457a1b1eff4aa44ae3d4",
  measurementId: "G-CVTKX2WQRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()