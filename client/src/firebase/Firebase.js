import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4XtviGTnYd1UoLYhjYDH87vI7HH-eWOM",
  authDomain: "emailpasswordlogin-53cb7.firebaseapp.com",
  projectId: "emailpasswordlogin-53cb7",
  storageBucket: "emailpasswordlogin-53cb7.appspot.com",
  messagingSenderId: "1017475908639",
  appId: "1:1017475908639:web:81d698601820397d0cc12a",
  measurementId: "G-T573SQNBSW",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
