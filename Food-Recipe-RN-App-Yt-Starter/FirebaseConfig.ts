// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaoZMhsDLubXUSdsncB_C4zu0oUBxZX3c",
  authDomain: "centralperk-3de63.firebaseapp.com",
  projectId: "centralperk-3de63",
  storageBucket: "centralperk-3de63.appspot.com",
  messagingSenderId: "1081684216934",
  appId: "1:1081684216934:web:551c2909908ed14a06f1a7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(FIREBASE_APP);
export const FIREBASE_DB =getFirestore(FIREBASE_APP);