import "./App.css"
import React from "react";
import Login from "./Login_Page/Login"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfileStud from "./ProfileStud/ProfileStud";
import MainStud from "./Main_Page/MainStud";
import DGrades from "./Grades/Detailed Grades/DGrades";
import RGrades from "./Grades/Recent Grades/RGrades";
import CoursesDec from "./Declarations/CoursesDec/CoursesDec";
import DecHistory from "./Declarations/DecHistory/DecHistory";
import MainProf from "./Main_Page/MainProf";
import Books from "./Declarations/Books/Books";
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
        <Route path="/MainStud/Recent" element={<RGrades/>}/>
        <Route path="/MainStud/CoursesDec" element={<CoursesDec/>}/>
        <Route path="/MainStud/DecHistory" element={<DecHistory/>}/>
        <Route path="/MainStud/Books" element={<Books/>}/>
        <Route path="/MainProf" element={<MainProf/>} />
      </Routes>
    </Router>
    </>
  );

};

