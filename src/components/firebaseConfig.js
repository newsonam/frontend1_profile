import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


function StartFirebase(){
const firebaseConfig = {

  apiKey: "AIzaSyBVoQ21ECp2UTtBqq-TaSBR7nTqs4B0l8s",
  authDomain: "fir-data-814bc.firebaseapp.com",
  databaseURL: "https://fir-data-814bc-default-rtdb.firebaseio.com",
  projectId: "fir-data-814bc",
  storageBucket: "fir-data-814bc.appspot.com",
  messagingSenderId: "895821402959",
  appId: "1:895821402959:web:0d84679a8c2fec9a052b3a",
  measurementId: "G-2Z7M49HXG6"

};
const app = initializeApp(firebaseConfig);
return getDatabase(app);
}




export default StartFirebase;