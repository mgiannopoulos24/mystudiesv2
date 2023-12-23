import "./App.css"
import React from "react";
import Header from "./Header_Page/Header";
import Login from "./Login_Page/Login"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfileStud from "./ProfileStud/ProfileStud";
// import firebaseApp from "./Firebase/firebase"
// import { getFirestore } from 'firebase/firestore'
//import Test from "./Test_Page/Test";
//const db = getFirestore(firebaseApp);


export default function App(){

  return (
    <>
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/*" element={<Login/>} />           
        {/* <Route path="/Main" element={<MainPage/>} /> */}
        <Route path="/ProfileStud" element={<ProfileStud/>}/>
      </Routes>
    </Router>
    </>
  );

};

