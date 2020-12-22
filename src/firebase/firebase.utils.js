import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBX1ZQhdkjO2yVhrwG_7Z6863X55HSxPd8",
    authDomain: "hospital-chat-ad907.firebaseapp.com",
    projectId: "hospital-chat-ad907",
    storageBucket: "hospital-chat-ad907.appspot.com",
    messagingSenderId: "677988263389",
    appId: "1:677988263389:web:7179826fb502f9e4bfc234",
    measurementId: "G-85B8RMS5S3"
})

export const firestore = firebase.firestore();
