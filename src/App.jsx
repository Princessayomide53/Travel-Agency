// import { useState } from 'react'
import './App.css';
import Login from './components/Login';
import PreLoader from './components/Preloader';
import SignUp from './components/SignUp';
import {  Routes, Route } from "react-router-dom";



function App() {
 

  return (
    <>
  
<PreLoader />


         <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes> 

    </>
  )
}

export default App
