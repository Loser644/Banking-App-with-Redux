import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import fireBase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nexbank-36efb.firebaseapp.com",
  projectId: "nexbank-36efb",
  storageBucket: "nexbank-36efb.firebasestorage.app",
  messagingSenderId: "927202475508",
  appId: "1:927202475508:web:78171d7cc8ddc26dfe4da1"
};

//Initialize FireBase
export const myAuth = getAuth();
const realTimeDb = fireBase.initializeApp(firebaseConfig);
export default realTimeDb.database().ref();