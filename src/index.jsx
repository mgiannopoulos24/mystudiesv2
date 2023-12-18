import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  { getFirestore } from 'firebase/firestore'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyD9dOPa7x4wseD87y3yp3nkCFDCale8Q8g",
  authDomain: "mystudiesv2.firebaseapp.com",
  projectId: "mystudiesv2",
  storageBucket: "mystudiesv2.appspot.com",
  messagingSenderId: "630228654803",
  appId: "1:630228654803:web:a64c379b27d0033173d226",
  measurementId: "G-W0T225FS8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const database=getFirestore(app);

onAuthStateChanged(auth,user=>{
  if(user!= null){
    console.log('User logged in!');
  } else {
    console.log('No user');
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
