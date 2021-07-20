import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDluy7X0uLaoZpEn9CD5dSIgy2temhndao",
    authDomain: "portray-reactjs.firebaseapp.com",
    projectId: "portray-reactjs",
    storageBucket: "portray-reactjs.appspot.com",
    messagingSenderId: "1031443661144",
    appId: "1:1031443661144:web:9cf8a8a36d09db16e1a52d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const portrayStorage = firebase.storage();
  const portrayFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {portrayStorage, portrayFirestore, timestamp};