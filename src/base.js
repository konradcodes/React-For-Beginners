// React firebase specific package it allows us to mirror our state to our firebase changes
import Rebase from 're-base';
import firebase from 'firebase';

// firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDB7Ar-ncBwrbbiTe46_WzLZpxk9U5aY_8',
  authDomain: 'catch-of-the-day-konrad.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-konrad.firebaseio.com',
  //   appId: '1:1070097455448:web:a535837aac99709c',
});

const base = Rebase.createClass(firebaseApp.database());
// Creating our rebase

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
