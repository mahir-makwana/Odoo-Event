import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBej2-kNhYulMmb9W5jIXlYbL8TdeaVhcc",
  authDomain: "odoo2024-e6369.firebaseapp.com",
  projectId: "odoo2024-e6369",
  storageBucket: "odoo2024-e6369.appspot.com",
  messagingSenderId: "459955456560",
  appId: "1:459955456560:web:586368e84723a6f9497bf5",
  measurementId: "G-RP9NK8KRHD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, signInWithPopup };
