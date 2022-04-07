import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-8GrYLaG0vAsrmyh_djTgBjy-aHchyoM",
  authDomain: "clone-41f72.firebaseapp.com",
  projectId: "clone-41f72",
  storageBucket: "clone-41f72.appspot.com",
  messagingSenderId: "358062751859",
  appId: "1:358062751859:web:02863462a1fd3ebcbe6a06",
  measurementId: "G-YV2CLZL4MN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };