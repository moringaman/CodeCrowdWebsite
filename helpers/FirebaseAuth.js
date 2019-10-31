import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxtAc6z4YcXoXVStpHgXEwFV_-5bIrFkU",
    authDomain: "codecrowdweb.firebaseapp.com",
    databaseURL: "https://codecrowdweb.firebaseio.com",
    projectId: "codecrowdweb",
    storageBucket: "codecrowdweb.appspot.com",
    messagingSenderId: "1095456068548",
    appId: "1:1095456068548:web:79a576700b0eb26f414a91",
    measurementId: "G-3RJQ181XQV"
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
