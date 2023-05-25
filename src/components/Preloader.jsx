import React, { useEffect } from 'react';
import { preLoaderAnim } from "../animations";


function PreLoader() {

    useEffect (() => {
       preLoaderAnim()
          },[]);
          
  return (
    <div className='preloader'>
            <div className='texts-container'>
            <h1 className='font-bold text-white font-serif text-6xl  text-center'>Jadoo</h1>
        </div>
 </div>
  )

}

export default PreLoader