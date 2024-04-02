/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxTF1FMqcmAwoA_lFr5Vw3hrMJyYAP-Sg",
  authDomain: "mdc-guide.firebaseapp.com",
  projectId: "mdc-guide",
  storageBucket: "mdc-guide.appspot.com",
  messagingSenderId: "14031118432",
  appId: "1:14031118432:web:a6f439fbbf8e94d824a305",
  measurementId: "G-61FR5RSVE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,  db }; */

import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyAxTF1FMqcmAwoA_lFr5Vw3hrMJyYAP-Sg",
    authDomain: "mdc-guide.firebaseapp.com",
    projectId: "mdc-guide",
    storageBucket: "mdc-guide.appspot.com",
    messagingSenderId: "14031118432",
    appId: "1:14031118432:web:a6f439fbbf8e94d824a305",
    measurementId: "G-61FR5RSVE1"
})


const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
export {auth, db, storage };
export default app; 