// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVSjYskKVBTl6K3IEQ9oEcurlKUKZ3sGI",
  authDomain: "realtor-clone-react-696cb.firebaseapp.com",
  projectId: "realtor-clone-react-696cb",
  storageBucket: "realtor-clone-react-696cb.appspot.com",
  messagingSenderId: "494216924286",
  appId: "1:494216924286:web:77bee339a7315098ac1c2f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();