import React from 'react';
import send1 from "../assets/send1.png";
import decore3 from "../assets/decore3.png";
import decore4 from "../assets/decore4.png";
import decore5 from "../assets/decore5.png";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Subscribe() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
        <div className='relative overflow-hidden'>
        <div data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="2000">
<div className='absolute top-24 xl:right-44 lg:right-16 right-5 md:right-16 pro:right-32 mac:right-64'><img src={send1} alt="" className='w-10 h-10 sm:w-16 sm:h-16'/></div>
            <div className='flex justify-center'>
            <div className='bg-[#DFD7F9] lg:w-[850px] w-[330px] h-[257px] md:w-[620px] md:h-[280px] lg:h-[310px] 
             xl:w-[890px] xl:h-[315px] rounded-tl-[70px] mt-24 sm:mt-28 rounded-b-3xl rounded-tr-2xl '>
            <div className="flex items-end justify-end">
                <img src={decore4} alt="" className=" lg:w-52 lg:h-60 w-32 h-32 md:w-32 md:h-32 md:mt-2" />
              </div> 
              <img
                src={decore3}
                alt=""
                className="lg:w-56 lg:h-44 lg:-mt-28 xl:-mt-28 ml-5 md:-mt-2 md:w-44 md:h-36 w-32 h-28 mt-3"
              />
               <h1
                  className="text-[#5E6282] text-xs lg:text-2xl xl:text-[32px] lg:-mt-60 md:-mt-[200px] -mt-48 md:text-xl text-center
                 font-bold font-Poppins"
                >
                  Subcribe to get information, latest news and other news <br />{" "}
                  Interesting offers about Coham
                </h1>
               <div className="flex sm:flex-row flex-col sm:justify-center items-center lg:mt-[69px] md:mt-16 md:gap-7 lg:gap-10 mt-7">
                <input type="text"className="sm:w-60 sm:h-12 pl-5 w-60 text-sm sm:text-base h-12 rounded-md focus:outline-blue-400"  placeholder="Your Email"/>
                <button disabled className="bg-gradient-to-br  from-[#FF7D68] to-[#FF946D] sm:text-base text-sm sm:px-7 sm:py-3 mt-7 sm:mt-0 px-10 py-3 rounded-xl text-white">Subscribe</button>
               </div> 
            </div></div>
        </div>
        </div>

<div className='flex justify-center sm:mt-24 mt-16'>
<hr style={{width: "85%", height: "2px"}}/>
</div>



            {/* <div className="relative">
          <div className="absolute top-24 right-44">
            <img src={send1} alt="" className="" />
          </div>
          <div className="flex justify-center">
            <div
              className="bg-[#DFD7F9] "
            >
             <div className="flex items-end justify-end">
                <img src={decore4} alt="" className=" lg:w-52 lg:h-60" />
              </div> 
              <img
                src={decore3}
                alt=""
                className="lg:w-56 lg:h-44 lg:-mt-28 ml-5"
              />
              <h1
                  className="text-[#5E6282] lg:text-2xl xl:text-4xl lg:-mt-60 text-center
                 font-bold font-Poppins"
                >
                  Subcribe to get information, latest news and other news <br />{" "}
                  Interesting offers about Coham
                </h1>
               <div className="flex justify-center lg:mt-[69px] lg:gap-10">
                <input type="text"className="w-60 h-12 pl-5 rounded-md focus:outline-blue-400"  placeholder="Your Email"/>
                <button disabled className="bg-gradient-to-br  from-[#FF7D68] to-[#FF946D] px-7 py-3 rounded-2xl text-white">Subscribe</button>
               </div> 
            </div>
          </div>
        </div> */}
        {/* lg:h-[310px] mb-20 lg:mt-40  rounded-tl-[70px]
           rounded-b-3xl rounded-tr-2xl "xl:w-[970px] xl:h-[310px] lg:w-[850px] */}
        {/* <div className="-mt-40 flex justify-end xl:mr-28 lg:mr-2"><img src={decore5} alt="" className="w-32 h-32"/></div> */}
    </>
  )
}

export default Subscribe