// import { useState } from 'react'
import './App.css';
import Login from './components/Login';
import PreLoader from './components/Preloader';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
 

  return (
    <>
  
<PreLoader />

<SignUp />
<Router>
         <Routes>
        <Route path="/login" element={ <Login/> } />
      </Routes> 
      </Router>  
    </>
  )
}

export default App
