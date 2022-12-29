import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUZ9P417HEWCv8tbK6hH4vGhh5ZHymkLg",
  authDomain: "project-67-a96f9.firebaseapp.com",
  projectId: "project-67-a96f9",
  storageBucket: "project-67-a96f9.appspot.com",
  messagingSenderId: "522450404508",
  appId: "1:522450404508:web:179c860fab8c73b7eb1959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();