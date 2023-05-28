// import { useState } from 'react'
import './App.css';
import Login from './components/Login';
import PreLoader from './components/Preloader';
import SignUp from './components/SignUp';
import Forgotpassword from './components/Forgotpassword';
import Reset from './components/Reset';
import {  Routes, Route } from "react-router-dom";



function App() {
 

  return (
    <>
  
<PreLoader />


         <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/forgotpassword" element={ <Forgotpassword/> } />
        <Route path="/reset" element={ <Reset/> } />
      </Routes> 

    </>
  )
}

export default App
