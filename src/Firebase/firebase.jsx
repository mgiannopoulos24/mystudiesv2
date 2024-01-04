import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD9dOPa7x4wseD87y3yp3nkCFDCale8Q8g",
    authDomain: "mystudiesv2.firebaseapp.com",
    projectId: "mystudiesv2",
    storageBucket: "mystudiesv2.appspot.com",
    messagingSenderId: "630228654803",
    appId: "1:630228654803:web:a64c379b27d0033173d226",
    measurementId: "G-W0T225FS8Y"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

