// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJxxVoiglzcOAhGystUALlVGJmmuS1YCA",
  authDomain: "astro-516f8.firebaseapp.com",
  projectId: "astro-516f8",
  storageBucket: "astro-516f8.firebasestorage.app",
  messagingSenderId: "866339098739",
  appId: "1:866339098739:web:281d98fe12c014c1389a06",
  measurementId: "G-TSQZYKP06M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth,provider,app}