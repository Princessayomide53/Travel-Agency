import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Preloader from './components/Preloader';
import { useEffect } from 'react';
import Login from './components/Login';

function App() {
  const [preloader, setPreloader] = useState(true)


  useEffect (() => {
setTimeout(() => {
  setPreloader(false)
}, 2000);
  []});
  return (
    <>
      <div>
<Preloader preloader={preloader} />
<div style={{opacity: preloader ? 0 : 1, transition: "all 1s ease-in-out", overflow: "hidden"
}}>
  <Login />
</div>

  </div>
       
    </>
  )
}

export default App
