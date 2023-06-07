import React from "react";
import Test from "../Data/Test";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import send1 from "../assets/send1.png";
import decore3 from "../assets/decore3.png";
import decore4 from "../assets/decore4.png";
import decore5 from "../assets/decore5.png"

function Testimonials() {
  return (
    <section>
      <div className="sm:flex justify-around relative mt-20">
        <div className="mt-24 ">
          <p className="text-sm sm:text-base uppercase text-[#5E6282] font-Poppins">
            Testimonials
          </p>
          <h1 className="lg:text-5xl xl:text-6xl md:text-2xl text-[#14183E] font-bold md:mt-5 font-Volkhov">
            What People say
            <br /> About Us
          </h1>
        </div>
        <div>
          {Test.Data.map((items, id) => (
            <div
              key={id}
              className="bg-white z-10 absolute top-16 xl:right-60 lg:right-32 shadow-xl backdrop-blur-md 
              drop-shadow-xl mt-10 lg:w-[430px] lg:h-[272px] md:w-[270px] md:h-[260px] flex rounded-2xl"
            >
              <div className="p-5 text-base font-Poppins">
                <img src={items.imgUrl} alt="" className="" />
                <p className="lg:pt-4 md:pt-3 leading-7 flex-wrap lg:text-base md:text-sm">
                  {items.content}
                </p>{" "}
                <p className="lg:pt-5 md:pt-3 text-[#5E6282] lg:text-lg md:text-base font-semibold font-Poppins">
                  {items.name}
                </p>
                <p className="text-[#5E6282] text-sm font-normal font-Poppins">
                  {items.country}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-48 xl:ml-72 lg:ml-72 space-y-10">
          <SlArrowUp size={25} /> <SlArrowDown size={25} />
        </div>
      </div>

      <article>
        <div className="mt-80 md:mt-56">
          <div className="flex lg:justify-evenly md:justify-center md:space-x-14 justify-center space-x-8">
            <img
              src={image1}
              alt=""
              className="md:w-20 md:h-24 w-8 h-10 lg:w-20 lg:h-20"
            />
            <img
              src={image2}
              alt=""
              className="md:w-20 md:h-16 md:mt-3 w-10 h-8 lg:-mt-2 mt-1  lg:w-24 lg:h-24"
            />
            <img
              src={image3}
              alt=""
              className="md:w-20 md:h-24 w-8 h-10 lg:w-24 lg:h-28 lg:-mt-3"
            />
            <img
              src={image4}
              alt=""
              className="lg:w-20 lg:h-8 lg:mt-6 md:w-20 md:h-6 md:mt-8 w-12 h-3 mt-3"
            />
            <img
              src={image5}
              alt=""
              className="lg:w-20 lg:h-6 lg:mt-8 md:w-16 md:h-5 md:mt-8 w-12 h-3 mt-3"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute lg:top-44 lg:right-12 xl:right-48 z-20">
            <img src={send1} alt="" className="ml-56 -mt-10" />
          </div>
          <div className="flex justify-center">
            <div
              className="xl:w-[980px] lg:w-[850px] bg-[#DFD7F9] lg:mt-40  rounded-tl-[70px]
           rounded-b-3xl rounded-tr-2xl lg:h-[310px] mb-20"
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
                  className="text-[#5E6282] lg:text-2xl xl:text-3xl lg:-mt-60 text-center
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
        </div>
        <div className="-mt-40 flex justify-end xl:mr-28 lg:mr-2"><img src={decore5} alt="" className="w-32 h-32"/></div>
      </article>
    </section>
  );
}

export default Testimonials;
