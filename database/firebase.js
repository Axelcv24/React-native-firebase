import firebase from 'firebase'
import 'firebase/firebase-storage'


const firebaseConfig = {
  apiKey: "******",
  authDomain: "*****",
  projectId: "*******",
  storageBucket: "*******",
  messagingSenderId: "*******",
  appId: "******"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//
const db = firebase.firestore();

export default{
    firebase,
    db
}
