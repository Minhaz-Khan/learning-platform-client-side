// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwKp3ukbcnocXTPI5Z4dx-NKIkg5mKyLk",
    authDomain: "learning-platform-e1b94.firebaseapp.com",
    projectId: "learning-platform-e1b94",
    storageBucket: "learning-platform-e1b94.appspot.com",
    messagingSenderId: "628487751646",
    appId: "1:628487751646:web:a0a75225e7a7b3655bff4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app