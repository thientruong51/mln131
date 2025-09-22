// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdINCPySk4rwXXxv3s7hXI9QFTSpNMuaU",
  authDomain: "mln131-nhom4.firebaseapp.com",
  projectId: "mln131-nhom4",
  storageBucket: "mln131-nhom4.firebasestorage.app",
  messagingSenderId: "735769262950",
  appId: "1:735769262950:web:2f0cd5c1219d21167666a7",
  measurementId: "G-L4KRH748FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 thêm dòng này để khởi tạo Firestore
export const db = getFirestore(app);
