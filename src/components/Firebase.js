import * as firebase from 'firebase/app';
// we import auth in order to allow for authentication
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZdlZ4dczKSGo8gC6YCGUhpq9KlKZ4K0",
  authDomain: "cookbook2-63b0f.firebaseapp.com",
  databaseURL: "https://cookbook2-63b0f.firebaseio.com",
  projectId: "cookbook2-63b0f",
  storageBucket: "cookbook2-63b0f.appspot.com",
  messagingSenderId: "206698604679",
  appId: "1:206698604679:web:840050cf298c3013"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
