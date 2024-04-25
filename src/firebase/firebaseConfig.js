import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKS5_fNg7EPSPhEnXHzLzAXofHjHmjgQ4",
  authDomain: "glasses-authentication-eafa1.firebaseapp.com",
  projectId: "glasses-authentication-eafa1",
  storageBucket: "glasses-authentication-eafa1.appspot.com",
  messagingSenderId: "215070635168",
  appId: "1:215070635168:web:d92bf9033c5504f5db05c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;