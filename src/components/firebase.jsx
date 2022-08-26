import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBYVXWyd7e1PnV-Eu5LpLeDR7RU7pms-Yg",
  authDomain: "sainyojit.firebaseapp.com",
  projectId: "sainyojit",
  storageBucket: "sainyojit.appspot.com",
  messagingSenderId: "856212744046",
  appId: "1:856212744046:web:8df0bb4aee84cf5050c37f",
  measurementId: "G-8C0HGRHLWK",
  databaseURL: "gs://sainyojit.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
