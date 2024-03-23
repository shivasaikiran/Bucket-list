
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDjEWE_uEyxtFMeXTWPXTOx0VSGOOa86f8",
  authDomain: "myfirstapp-48225.firebaseapp.com",
  projectId: "myfirstapp-48225",
  storageBucket: "myfirstapp-48225.appspot.com",
  messagingSenderId: "299730165389",
  appId: "1:299730165389:web:56e2dafb66b067d45c4cc4"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } 