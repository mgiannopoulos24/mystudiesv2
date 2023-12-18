import "./App.css"
import React from "react";
import Header from "./Header_Page/Header";
import QuickAccess from "./Quick_Access/QuickAccess"
import CoursesDec from "./Courses_Declaration/CoursesDec"
import Subjects from "./Subjects/Subjects";
import Login from "./Login_Page/Login"
import MainPage from "./Main_Page/Main_Page";
import Scorecard from "./Scorecard/Scorecard";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import firebaseApp from "./Firebase/firebase"
import { getFirestore } from 'firebase/firestore'
import Test from "./Test_Page/Test";
import { docUser } from './Test_Page/Test';


const db = getFirestore(firebaseApp);


export default function App(){

  return (
    <>
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/*" element={<MainPage/>} />           
        <Route path="/QuickAccessStud/*" element={<QuickAccess />} />
        <Route path="/QuickAccessStud/Subjects" element={<Subjects/>}/>
        <Route path="/QuickAccessStud/Scorecard" element={<Scorecard userCourses={docUser.courses}/>}/>
        <Route path="/QuickAccessStud/CoursesDeclaration" element={<CoursesDec/>}/>
        <Route path="/QuickAccessStud/Certificates" element={<Test db={db}/>}/>
        <Route path="/QuickAccessStud/ActionHistory" element={<Login/>}/> 
        <Route path="/Login" element={<Login/>}/> 
      </Routes>
    </Router>
    </>
  );

};

