// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import toast from 'react-hot-toast'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

//register user with firebase authentication
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

//login user with firebase authentication
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

//password reset by email with firebase authentication
export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
}

//logout user with firebase authentication
export const logoutUser = () => {
    signOut(auth).then(() => {
        toast.success("Successfully signed out")
    })
    .catch((error) => {
        const errorCode = error.code;
        toast.error(`${errorCode}`)
        console.log(errorCode);
    })
};
