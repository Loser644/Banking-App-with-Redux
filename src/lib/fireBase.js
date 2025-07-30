import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nexbank-36efb.firebaseapp.com",
  projectId: "nexbank-36efb",
  storageBucket: "nexbank-36efb.firebasestorage.app",
  messagingSenderId: "927202475508",
  appId: "1:927202475508:web:78171d7cc8ddc26dfe4da1"
};

//Initialize FireBase
const app = initializeApp(firebaseConfig);

export const myAuth = getAuth(app);
export const db = getDatabase(app);
export const dbRef = ref(db);