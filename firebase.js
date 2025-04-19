

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiViG3DV_caufT-HOUuXnPLhaAC59B_T4",
  authDomain: "green-shop-e469b.firebaseapp.com",
  projectId: "green-shop-e469b",
  storageBucket: "green-shop-e469b.firebasestorage.app",
  messagingSenderId: "917694244835",
  appId: "1:917694244835:web:4b263dc867fa77c7a6e2d6",
  measurementId: "G-SPX47PVXRH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup (auth, provider);
};

export { signInWithGoogle };
