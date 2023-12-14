import "./App.css"
import React from "react";
import Header from "./Header_Page/Header";
import QuickAccess from "./Quick_Access/QuickAccess"
//import Subjects from "./Subjects/Subjects";
//import Subjects from "./Subjects/Subjects";
//import Login from "./Login_Page/Login"
import MainPage from "./Main_Page/Main_Page";
//import Test from "./Test_Page/Test";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App(){


  return (
    <Router>
      <>
      <Header/>
      <Routes>  
        <Route path="/" element={<MainPage/>} />           
        <Route path="/QuickAccess" element={<QuickAccess />} />
      </Routes>
    </> 
    </Router>
  )
};


