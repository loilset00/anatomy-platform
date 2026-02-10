import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhe0zIzNEWgn8G3XtsKloF2O98S8SgHuQ",
  authDomain: "anatomy-platform.firebaseapp.com",
  projectId: "anatomy-platform",
  storageBucket: "anatomy-platform.firebasestorage.app",
  messagingSenderId: "63042655087",
  appId: "1:63042655087:web:e6eb09ecc27254c45a4e9a",
  measurementId: "G-28ST1VMM5C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
