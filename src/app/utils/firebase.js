import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWPmQOiA4eHBCidZQ9HCxOxEkFdTBQUFc",
  authDomain: "portfolio-9e3f4.firebaseapp.com",
  projectId: "portfolio-9e3f4",
  storageBucket: "portfolio-9e3f4.appspot.com",
  messagingSenderId: "978869345131",
  appId: "1:978869345131:web:35881cc90fc808bf894a2e",
  measurementId: "G-2HDQK6HQ55"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined" && isSupported()) {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);

export { db, collection, addDoc };
