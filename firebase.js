// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZnp14qhtS-JIJFApsValAYX85qnv0T4A",
  authDomain: "react-notes-4c95a.firebaseapp.com",
  projectId: "react-notes-4c95a",
  storageBucket: "react-notes-4c95a.appspot.com",
  messagingSenderId: "762942381580",
  appId: "1:762942381580:web:9dd5dbffcc2e952edc9829",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
