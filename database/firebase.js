import firebase from 'firebase'
import 'firebase/firebase-storage'


const firebaseConfig = {
  apiKey: "AIzaSyCm5eU8v83fbRxGQa_x-n5MTE6gt56ebjU",
  authDomain: "react-native-firebase-a1480.firebaseapp.com",
  projectId: "react-native-firebase-a1480",
  storageBucket: "react-native-firebase-a1480.appspot.com",
  messagingSenderId: "45479696230",
  appId: "1:45479696230:web:4d1d76662bfe8410b05aa7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//
const db = firebase.firestore();

export default{
    firebase,
    db
}