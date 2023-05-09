import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBUnzq-kB2kawlGcatLG7W0fgRsAAP62uU",
  authDomain: "bicicleta-89382.firebaseapp.com",
  projectId: "bicicleta-89382",
  storageBucket: "bicicleta-89382.appspot.com",
  messagingSenderId: "777261825155",
  appId: "1:777261825155:web:35d0493040fc9b6c652fb6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
