import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDSQqVrMoz0utS5kOegAox5FO0VM-Hy5xk",
    authDomain: "bd-projeto-todolist.firebaseapp.com",
    projectId: "bd-projeto-todolist",
    storageBucket: "bd-projeto-todolist.appspot.com",
    messagingSenderId: "695154967997",
    appId: "1:695154967997:web:118b5cca73c0738fdb3ed4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};