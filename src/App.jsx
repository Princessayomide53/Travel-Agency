// import { useState } from 'react'
import './App.css';
import PreLoader from './components/Preloader';
import SignUp from './components/SignUp';

// import { Routes, Route } from "react-router-dom"


function App() {
 

  return (
    <>
      
<PreLoader />

<SignUp />

        {/* <Routes>
        <Route path="SignUp" element={ <SignUp/> } />
      </Routes> */}

       
    </>
  )
}

export default App
