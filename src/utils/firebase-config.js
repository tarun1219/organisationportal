import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS-Z9wWZA0Hae-8CemfzSBnhzfYDIMP0g",
  authDomain: "react-netflix-clone-5d043.firebaseapp.com",
  projectId: "react-netflix-clone-5d043",
  storageBucket: "react-netflix-clone-5d043.appspot.com",
  messagingSenderId: "314221416751",
  appId: "1:314221416751:web:555328ae8492fc30ff91da",
  measurementId: "G-068H6QCJM1"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

