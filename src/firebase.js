import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy_AVrGrNBsAFBg0Y0d2qY0ySr7CLvRKQ",
  authDomain: "pentagono-salvados.firebaseapp.com",
  projectId: "pentagono-salvados",
  storageBucket: "pentagono-salvados.firebasestorage.app",
  messagingSenderId: "991572640803",
  appId: "1:991572640803:web:a9f8c28d1531a08435dd96",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);