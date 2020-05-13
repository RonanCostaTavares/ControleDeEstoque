import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAkrQIIdUGcdmksE02dbJQSrBX4XDLXlf4",
    authDomain: "bardapiscina-e7099.firebaseapp.com",
    databaseURL: "https://bardapiscina-e7099.firebaseio.com",
    projectId: "bardapiscina-e7099",
    storageBucket: "bardapiscina-e7099.appspot.com",
    messagingSenderId: "772657669302",
    appId: "1:772657669302:web:0eb71e911c185fc3dcb217",
    measurementId: "G-8GCMHNT0BH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;