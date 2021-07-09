import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyAixvxaAez8t6Rt2bYtXyeydEDqmrsNbk8",
  authDomain: "final-a1d9f.firebaseapp.com",
  projectId: "final-a1d9f",
  storageBucket: "final-a1d9f.appspot.com",
  messagingSenderId: "708633322127",
  appId: "1:708633322127:web:335cdcd35c07279f6f06fa",
  measurementId: "G-LG90ZK52SW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

var db = firebase.firestore();
