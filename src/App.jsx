import "./App.css"
import React from "react";
import Login from "./Login_Page/Login"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfileStud from "./ProfileStud/ProfileStud";
import MainStud from "./Main_Page/MainStud";
import DGrades from "./Grades/Detailed Grades/DGrades";
// import firebaseApp from "./Firebase/firebase"
// import { getFirestore } from 'firebase/firestore'
//import Test from "./Test_Page/Test";
//const db = getFirestore(firebaseApp);


export default function App(){

  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<Login/>} />           
        <Route path="/MainStud" element={<MainStud/>} />
        <Route path="/ProfileStud" element={<ProfileStud/>}/>
        <Route path="/MainStud/Detailed" element={<DGrades/>}/>
      </Routes>
    </Router>
    </>
  );

};

