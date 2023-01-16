import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDct_VlBFEn1c30JThfwHAbvTp5KuNEy1A",
    authDomain: "ecommerce2023-40744.firebaseapp.com",
    projectId: "ecommerce2023-40744",
    storageBucket: "ecommerce2023-40744.appspot.com",
    messagingSenderId: "14393713165",
    appId: "1:14393713165:web:716de41e3723ad00b0eb44"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  export {firebaseApp}