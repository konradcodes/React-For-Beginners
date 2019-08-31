import Rebase from 're-base';
// Allows us to mirror our state to our firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDB7Ar-ncBwrbbiTe46_WzLZpxk9U5aY_8',
  authDomain: 'catch-of-the-day-konrad.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-konrad.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
