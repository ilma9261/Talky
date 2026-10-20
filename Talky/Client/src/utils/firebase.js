import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aivoiceagent-dce23.firebaseapp.com",
  projectId: "aivoiceagent-dce23",
  storageBucket: "aivoiceagent-dce23.firebasestorage.app",
  messagingSenderId: "959496149841",
  appId: "1:959496149841:web:605438b758a4492dd9d170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

