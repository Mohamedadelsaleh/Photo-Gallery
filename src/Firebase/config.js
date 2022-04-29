// Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJLsmONYiZN7zhZZM8hYSae2ZxA92Ezrs",
    authDomain: "msa-gallary.firebaseapp.com",
    projectId: "msa-gallary",
    storageBucket: "msa-gallary.appspot.com",
    messagingSenderId: "23398799879",
    appId: "1:23398799879:web:13948106c92fb716aa68a2",
    measurementId: "G-R1XP43JJBN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {projectStorage, projectFireStore, timeStamp};

