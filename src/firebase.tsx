import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyArfalO_S4pTD8kG2vo4iZAG0LLUKOnQHA",
  authDomain: "monkeymonk-8d654.firebaseapp.com",
  projectId: "monkeymonk-8d654",
  storageBucket: "monkeymonk-8d654.appspot.com",
  messagingSenderId: "1047229573839",
  appId: "1:1047229573839:web:ec6ec594d218df419de5ba"
};

export const firebaseLoginConfig = {
  apiKey: "AIzaSyCLxGtwrnQIfz9UM4OkCOHNPowfS_CraXk",
  authDomain: "monkeymonk-admin.firebaseapp.com",
  projectId: "monkeymonk-admin",
  storageBucket: "monkeymonk-admin.appspot.com",
  messagingSenderId: "87062934187",
  appId: "1:87062934187:web:51c327e332cf5e12fc7dee"
};
const app = initializeApp(firebaseConfig);
const loginApp = initializeApp(firebaseLoginConfig, 'login');

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const loginAuth = getAuth(loginApp);
export const loginDb = getFirestore(loginApp);
export const loginStorage = getStorage(loginApp);

export default app;