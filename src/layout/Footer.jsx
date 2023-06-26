import React, { useEffect } from 'react';
import Foot from "../Data/Foot";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init();
  })
  return (
  <>
  <footer>
    <div 
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
    <div 
     className='grid lg:grid-cols-5 mt-10 lg:pl-12 grid-cols-2 place-content-center place-items-center pl-5  lg:pr-12  xl:pl-16 xl:pr-16 md:pl-16 md:pr-12 md:grid-cols-3 md:place-items-center'>
      {Foot.Card.map((item, id) => (
        <div key={id} className=''>
          <div>
                    <h1 className='font-Poppins font-semibold text-5xl pb-7'>{item.logo}</h1>
                    <p className='text-xs text-[#5E6282] sm:w-44 w-36'>{item.text}</p>
                    </div>
                    <div>
                    <h1 className='text-xl font-bold pb-5 -mt-4'>{item.title}</h1>
                    <p className='text-base text-[#5E6282] pb-3'>{item.text1}</p>
                    <p className='text-base text-[#5E6282] pb-3'>{item.text2}</p>
                    <p className='text-base text-[#5E6282] pb-3'>{item.text3}</p>

                    </div>
                    <div className='pl-2 sm:pl-0'>
                    <div className='flex lg:-mt-16 md:-mt-10 -mt-7 mb-5'>
                    <img src={item.img1} alt="" />
                    <img src={item.img3} alt="" />
                    <img src={item.img2} alt="" />
                    </div>
                    <p className='text-base text-[#5E6282] pb-4'>{item.content}</p>
                    <div className='flex gap-2'> <img src={item.img4} alt="" />
                     <img src={item.img5} alt="" />
                    </div>   
                    </div>
        </div>
      ))}
      
    </div>
    <p className='text-center text-[#5E6282] text-[10px] mt-8'>All rights reserved@Jadoo.co</p>
    </div>
    </footer>
    </>
  )
}

export default Footer