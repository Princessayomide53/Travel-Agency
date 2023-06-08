import React from 'react';
import send1 from "../assets/send1.png";
import decore3 from "../assets/decore3.png";
import decore4 from "../assets/decore4.png";
import decore5 from "../assets/decore5.png";


function Subscribe() {
  return (
    <>
        <div className='relative'>
<div className='absolute top-24 right-48 md:right-16'><img src={send1} alt="" /></div>
            <div className='flex justify-center'>
            <div className='bg-[#DFD7F9] lg:w-[850px] md:w-[620px] md:h-[280px] lg:h-[310px] w-56 h-56 xl:w-[870px] xl:h-[320px] rounded-tl-[70px] mt-28 rounded-b-3xl rounded-tr-2xl '>
            <div className="flex items-end justify-end">
                <img src={decore4} alt="" className=" lg:w-52 lg:h-60" />
              </div> 
              <img
                src={decore3}
                alt=""
                className="lg:w-56 lg:h-44 lg:-mt-28 xl:-mt-24 ml-5 md:-mt-56 md:w-44 md:h-36"
              />
               <h1
                  className="text-[#5E6282] lg:text-2xl xl:text-3xl lg:-mt-60 md:-mt-[200px] md:text-xl text-center
                 font-bold font-Poppins"
                >
                  Subcribe to get information, latest news and other news <br />{" "}
                  Interesting offers about Coham
                </h1>
               <div className="flex justify-center lg:mt-[69px] md:mt-16 md:gap-7 lg:gap-10">
                <input type="text"className="w-60 h-12 pl-5 rounded-md focus:outline-blue-400"  placeholder="Your Email"/>
                <button disabled className="bg-gradient-to-br  from-[#FF7D68] to-[#FF946D] px-7 py-3 rounded-2xl text-white">Subscribe</button>
               </div> 
            </div></div>
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