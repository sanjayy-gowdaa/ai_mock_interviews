
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2IBfcG1WD-zQ1hZDXOa-_mt9W8c0QOJ0",
    authDomain: "prepwise-4287a.firebaseapp.com",
    projectId: "prepwise-4287a",
    storageBucket: "prepwise-4287a.firebasestorage.app",
    messagingSenderId: "718591450179",
    appId: "1:718591450179:web:829d057d79dcd3a761c8f6",
    measurementId: "G-RHTQ8XQHR5"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)