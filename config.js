import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAc5x9I-kdL6on899BkqPzQ8IhEpYxXZaM",
  authDomain: "db-error.firebaseapp.com",
  projectId: "db-error",
  storageBucket: "db-error.appspot.com",
  messagingSenderId: "862546413066",
  appId: "1:862546413066:web:52a570420e018694c7c1f3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
