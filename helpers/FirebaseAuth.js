import * as firebase from 'firebase' 

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "codecrowdweb.firebaseapp.com",
    databaseURL: "https://codecrowdweb.firebaseio.com",
    projectId: "codecrowdweb",
    storageBucket: "codecrowdweb.appspot.com",
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };


  try {
    !firebase.apps.length ? initialize() : firebase.app()
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  function initialize() {
      firebase.initializeApp(config)
      firebase.analytics
  }

  let Firebase = firebase
  export default Firebase
