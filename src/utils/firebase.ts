// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCycRw5tbOIjIdbUpTzfDYaiedQTchgzpw",
  authDomain: "vue-firebase-d4436.firebaseapp.com",
  projectId: "vue-firebase-d4436",
  storageBucket: "vue-firebase-d4436.firebasestorage.app",
  messagingSenderId: "318932755651",
  appId: "1:318932755651:web:085ca68e2ef899d248ee76",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
