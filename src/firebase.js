import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB2hkUFtksw22B3utBWl4v9NaSfqlt77eM",
    authDomain: "animeapi-10ee6.firebaseapp.com",
    databaseURL: "https://animeapi-10ee6.firebaseio.com",
    projectId: "animeapi-10ee6",
    storageBucket: "animeapi-10ee6.appspot.com",
    messagingSenderId: "1075649920725",
    appId: "1:1075649920725:web:7b5ea6fc5344ce1f6bec5c",
    measurementId: "G-RJV2EK5NLX"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;