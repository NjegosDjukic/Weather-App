import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJUgo5d-4BAJfofbz859MfcLCn-1ssoDk",
    authDomain: "weather-app-49a73.firebaseapp.com",
    projectId: "weather-app-49a73",
    storageBucket: "weather-app-49a73.appspot.com",
    messagingSenderId: "576834676978",
    appId: "1:576834676978:web:890782765c0b0d8385086b"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);