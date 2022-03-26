import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth'


  // Import the functions you need from the SDKs you need

//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyD8w-mjGESDLm2DuJE589ELkP8htOSwMaw",

    authDomain: "vuex-fb-auth-5d3c0.firebaseapp.com",

    projectId: "vuex-fb-auth-5d3c0",

    storageBucket: "vuex-fb-auth-5d3c0.appspot.com",

    messagingSenderId: "918761059903",

    appId: "1:918761059903:web:38a43432c50ebab22f2a8a"

  };


  // Initialize Firebase

 initializeApp(firebaseConfig);

const auth = getAuth()
  export {auth}