// import { useState } from 'react'
import './App.css';
// import Login from './components/Login/Login';
import PreLoader from './components/Preloader/PreLoader';
import RouterPage from "./route/Router"
// import SignUp from './components/SignUp/SignUp';
// import Forgotpassword from './components/ForgotPassword/Forgotpassword';
// import Reset from './components/ForgotPassword/Reset';
// import {  Routes, Route } from "react-router-dom";



function App() {
 

  return (
    <>
  
<PreLoader />


<RouterPage />

         {/* <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/forgotpassword" element={ <Forgotpassword/> } />
        <Route path="/reset" element={ <Reset/> } />
      </Routes>  */}

    </>
  )
}

export default App
