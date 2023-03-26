import {initializeApp} from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyASdxKUGzP2lmMVD7rZk-CFCPk72bGhACM",
  authDomain: "app-financas-5cb34.firebaseapp.com",
  projectId: "app-financas-5cb34",
  storageBucket: "app-financas-5cb34.appspot.com",
  messagingSenderId: "450841845812",
  appId: "1:450841845812:web:efd8765b8757a991122a61"
};


  const firebase = initializeApp(firebaseConfig);


export default firebase;