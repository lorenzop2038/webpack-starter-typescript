import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCBDHgakFzHFnnGQ0szgh2YvGZgSIRwwK0",
    authDomain: "sql-demos-b0742.firebaseapp.com",
    projectId: "sql-demos-b0742",
    storageBucket: "sql-demos-b0742.appspot.com",
    messagingSenderId: "315269647934",
    appId: "1:315269647934:web:1293ab960385df0d2a4b6f",
    measurementId: "G-0MRQMLJY7Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase Configurado')

  export default firebase.firestore();