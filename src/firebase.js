import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9noivp8MM4n-tAwAi3YXgq6qgfjMJKJE",
    authDomain: "twitter-clone-36d91.firebaseapp.com",
    databaseURL: "https://twitter-clone-36d91.firebaseio.com",
    projectId: "twitter-clone-36d91",
    storageBucket: "twitter-clone-36d91.appspot.com",
    messagingSenderId: "407662708237",
    appId: "1:407662708237:web:93df29b0d135d055763744",
    measurementId: "G-F7SNSP9M85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

