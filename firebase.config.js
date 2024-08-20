// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6sUaSTuL6G6v3zPqwaSTPjSHfuWaneys",
  authDomain: "job-task-7d9a9.firebaseapp.com",
  projectId: "job-task-7d9a9",
  storageBucket: "job-task-7d9a9.appspot.com",
  messagingSenderId: "659590026945",
  appId: "1:659590026945:web:7b0978c79d49373d54a640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;