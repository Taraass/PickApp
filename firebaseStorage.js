import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }

