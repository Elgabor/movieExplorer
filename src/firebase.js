// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBTckE4GqYl9LFHeXeaQm9p-O8Qof5Uzk",
  authDomain: "movieexplorer-20d0f.firebaseapp.com",
  projectId: "movieexplorer-20d0f",
  storageBucket: "movieexplorer-20d0f.firebasestorage.app",
  messagingSenderId: "699395575119",
  appId: "1:699395575119:web:6495bd193ee3566547c93a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);