
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM3Emg3WuYjvUoW7kyJmIiar-IxELoFZI",
  authDomain: "smiletech-colors-app.firebaseapp.com",
  projectId: "smiletech-colors-app",
  storageBucket: "smiletech-colors-app.appspot.com",
  messagingSenderId: "309818160106",
  appId: "1:309818160106:web:5b073a34a9967d4895b893"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const app = !firabase.apps.length ? Firebase.initializeApp(firebaseConfig) : firebase.app()
const analytics = getAnalytics(app);