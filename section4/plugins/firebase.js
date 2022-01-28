// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OotOz5C1GR8jYFaCVOWJq1tymq6sKdY",
  authDomain: "nuxt-spa-book-app-5a32a.firebaseapp.com",
  projectId: "nuxt-spa-book-app-5a32a",
  storageBucket: "nuxt-spa-book-app-5a32a.appspot.com",
  messagingSenderId: "899383800110",
  appId: "1:899383800110:web:981c2b8acb744312f40abf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default ( context, inject ) => {
  inject('firebase', firebaseApp)
}