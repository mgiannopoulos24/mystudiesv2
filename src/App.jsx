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
import { firebaseConfig } from './Firebase/firebase';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// import Test from "./Test_Page/Test";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function App(){

  return (
    <>
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/*" element={<MainPage/>} />           
        <Route path="/QuickAccessStud/*" element={<QuickAccess />} />
        <Route path="/QuickAccessStud/Subjects" element={<Subjects/>}/>
        <Route path="/QuickAccessStud/Scorecard" element={<Scorecard/>}/>
        <Route path="/QuickAccessStud/CoursesDeclaration" element={<CoursesDec/>}/>
        <Route path="/QuickAccessStud/Certificates" element={<Test db={db}/>}/>
        <Route path="/QuickAccessStud/ActionHistory" element={<Login/>}/> 
      </Routes>
    </Router>
    </>
  );

};

