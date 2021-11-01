import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'flight-trac-plus.firebaseapp.com',
  projectId: 'flight-trac-plus',
  storageBucket: 'flight-trac-plus.appspot.com',
  messagingSenderId: '1070308969039',
  appId: '1:1070308969039:web:fcd9a1632ccf70a26c383a',
};

firebase.initializeApp(firebaseConfig);

// set up auth middleware
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  return auth.signInWithPopup(provider);
}

function logOut() {
  return auth.signOut();
}

export { auth, signIn, logOut };
