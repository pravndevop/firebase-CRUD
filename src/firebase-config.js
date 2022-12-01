import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAMMQJAUE8fDh4CRqweekXhlLxvmiVf7ZU",
    authDomain: "fir-tutorial-4cd90.firebaseapp.com",
    projectId: "fir-tutorial-4cd90",
    storageBucket: "fir-tutorial-4cd90.appspot.com",
    messagingSenderId: "681525026370",
    appId: "1:681525026370:web:c429d7485e6261912317db",
    measurementId: "G-JDP1KGX7SB"
  };
  
  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)