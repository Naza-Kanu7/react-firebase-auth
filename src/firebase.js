// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByWEzIztT_dNGkduFp73CN3nnMDjUHeWU",
  authDomain: "react-authentication-33579.firebaseapp.com",
  projectId: "react-authentication-33579",
  storageBucket: "react-authentication-33579.appspot.com",
  messagingSenderId: "393155625956",
  appId: "1:393155625956:web:959ceae9cd806a4533bdf1",
  measurementId: "G-PN082ELRXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
// const analytics = getAnalytics(app);