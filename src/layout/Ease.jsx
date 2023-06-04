import React from 'react';
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";

function Ease() {
  return (
    <>
    <div className='pt-48'>
        <div className=''><p className='text-[#5E6282] sm:text-base font-Poppins'>Easy and Fast</p>
        <h1 className='font-Volkhov sm:text-4xl text-[#14183E] font-bold'>Book Your Next Trip<br /> In 3 Easy Steps</h1>
        </div>
        <div className='flex sm:justify-around'>
            <div><img src={group2} alt="" /></div><div><img src={group1} alt="" /></div><div><img src={group3} alt="" /></div>
        </div>
    </div>
    </>
  )
}

export default Ease