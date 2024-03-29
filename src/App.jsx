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
import Requests from "./Support/Requests";
import OpenScoreCompilers from "./Scorecard/OpenScore/OpenScoreCompilers";
import OpenScoreGraphics from "./Scorecard/OpenScore/OpenScoreGraphics";
import SubmittedScoreArch from "./Scorecard/SubmittedScore/SubmittedScoreArch";
import SubmittedScoreSyspro from "./Scorecard/SubmittedScore/SubmittedScoreSyspro";
import SubjectsOpenScore from "./Scorecard/SubjectsOpenScore/SubjectsOpenScore";
import SubjectsSubmittedScore from "./Scorecard/SubjectsSubmittedScore/SubjectsSubmittedScore";
import ProfileProf from "./ProfileProf/ProfileProf";
// import { getFirestore } from 'firebase/firestore'
//const db = getFirestore(firebaseApp);


export default function App(){

  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<Login/>} />           
        <Route path="/MainStud" element={<MainStud/>} />
        <Route path="/MainStud/ProfileStud" element={<ProfileStud/>}/>
        <Route path="/MainStud/Detailed" element={<DGrades/>}/>
        <Route path="/MainStud/Recent" element={<RGrades/>}/>
        <Route path="/MainStud/CoursesDec" element={<CoursesDec/>}/>
        <Route path="/MainStud/DecHistory" element={<DecHistory/>}/>
        <Route path="/MainStud/Books" element={<Books/>}/>
        <Route path="/MainStud/Requests" element={<Requests/>}/>
        <Route path="/MainProf" element={<MainProf/>} />
        <Route path="/MainProf/ProfileProf" element={<ProfileProf/>}/>
        <Route path="/MainProf/SubjectsOpenScore/Compilers" element={<OpenScoreCompilers/>}/>
        <Route path="/MainProf/SubjectsOpenScore/Graphics" element={<OpenScoreGraphics/>}/>
        <Route path="/MainProf/SubjectsOpenScore" element={<SubjectsOpenScore/>}/>
        <Route path="/MainProf/SubjectsSubmittedScore" element={<SubjectsSubmittedScore/>}/>       
        <Route path="/MainProf/SubjectsSubmittedScore/Arch" element={<SubmittedScoreArch/>}/>
        <Route path="/MainProf/SubjectsSubmittedScore/Syspro" element={<SubmittedScoreSyspro/>}/>
      </Routes>
    </Router>
    </>
  );

};

