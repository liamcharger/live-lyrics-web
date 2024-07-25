import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpWYmhlhIErxiRo2u7rCV3kzCsHmER8nM",
    authDomain: "charger-tech-lyrics.firebaseapp.com",
    projectId: "charger-tech-lyrics",
    storageBucket: "charger-tech-lyrics.appspot.com",
    messagingSenderId: "708123254041",
    appId: "1:708123254041:web:9dc22142f363ce3a197988",
    measurementId: "G-M5Q82XRDC1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);