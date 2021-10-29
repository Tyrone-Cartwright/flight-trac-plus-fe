import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMTVuuNUKgo5-ab309wrejRARUr2vJ_10',
  authDomain: 'flight-trac-plus.firebaseapp.com',
  projectId: 'flight-trac-plus',
  storageBucket: 'flight-trac-plus.appspot.com',
  messagingSenderId: '1070308969039',
  appId: '1:1070308969039:web:fcd9a1632ccf70a26c383a',
};

firebase.initializeApp(firebaseConfig);
