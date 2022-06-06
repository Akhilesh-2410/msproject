// Import the functions you need from the SDKs you need
const firebase = require('firebase');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0pNtav9W-0CTimeZd5qvpWVhUJyuR1A",
  authDomain: "msproject-bf599.firebaseapp.com",
  projectId: "msproject-bf599",
  storageBucket: "msproject-bf599.appspot.com",
  messagingSenderId: "59943750363",
  appId: "1:59943750363:web:a437445e7997cb66ec5afe"
};

const app = firebase.initializeApp(firebaseConfig);
const auth=firebase.getAuth(app);
const provider=new firebase.GoogleAuthProvider();
const db=firebase.getFirestore(app);
const postdocument=db.collections('postdocument');
module.exports = postdocument,auth,provider,db;