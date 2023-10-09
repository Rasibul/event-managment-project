
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4uS6hZCnH7QZxUmNh33n_JLeY0ISut2k",
  authDomain: "event-management-firebase-auth.firebaseapp.com",
  projectId: "event-management-firebase-auth",
  storageBucket: "event-management-firebase-auth.appspot.com",
  messagingSenderId: "836206163725",
  appId: "1:836206163725:web:86db04df70a408474c6244"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);