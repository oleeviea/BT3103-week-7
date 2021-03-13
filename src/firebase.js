import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBryH5f2cfZzOh6bAOJ_80-p_jRbhm9CC0",
    authDomain: "bt3103-discovery-6.firebaseapp.com",
    projectId: "bt3103-discovery-6",
    storageBucket: "bt3103-discovery-6.appspot.com",
    messagingSenderId: "215638503683",
    appId: "1:215638503683:web:527601f6a372fcaaf63936",
    measurementId: "G-P9ZWYP2NSB"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;