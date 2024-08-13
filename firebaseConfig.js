// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBB11ypj9TmG6ZHdnh0cJ_-bK1dbCJnriQ",
  authDomain: "turkishuser.firebaseapp.com",
  projectId: "turkishuser",
  storageBucket: "turkishuser.appspot.com",
  messagingSenderId: "1074922223292",
  appId: "1:1074922223292:web:d3924e1b3f6164f04d82b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app;