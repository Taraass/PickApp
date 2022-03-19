// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD81yCFFqSgV_oybr5s__aI9aq7IeFnuLE",
    authDomain: "pick-app-c979b.firebaseapp.com",
    databaseURL: "https://pick-app-c979b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pick-app-c979b",
    storageBucket: "pick-app-c979b.appspot.com",
    messagingSenderId: "523917091075",
    appId: "1:523917091075:web:129bddf2b66c9fdf968936",
    measurementId: "G-7NRPLSHNRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};