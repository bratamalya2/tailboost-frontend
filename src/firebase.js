// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAijvJMYAZ7FmddCkduU78QuQCjNjbL_2c',
    authDomain: 'tailboost-frontend.firebaseapp.com',
    projectId: 'tailboost-frontend',
    storageBucket: 'tailboost-frontend.appspot.com',
    messagingSenderId: '681338879807',
    appId: '1:681338879807:web:c26af3195dc7d1ef021d8a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

export { auth, app };