import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCPJCiulYHrEbKAchH30tQ8FEjY13zl5zg",
    authDomain: "react-app-cursos-5e727.firebaseapp.com",
    databaseURL: "https://react-app-cursos-5e727.firebaseio.com",
    projectId: "react-app-cursos-5e727",
    storageBucket: "react-app-cursos-5e727.appspot.com",
    messagingSenderId: "351448097852",
    appId: "1:351448097852:web:2e7e1620c6ed9240710f39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleAuthProvider, firebase}
