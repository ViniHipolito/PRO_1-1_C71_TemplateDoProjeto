import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
