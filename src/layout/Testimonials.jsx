import React from "react";
import Test from "../Data/Test";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function Testimonials() {
  return (
    <section>
      <div className="sm:flex justify-between relative mt-20">
        <div className="mt-24 md:pl-20">
          <p className="text-sm uppercase text-[#5E6282] font-Poppins">
            Testimonials
          </p>
          <h1 className="lg:text-4xl md:text-2xl text-[#14183E] font-bold md:mt-5 font-Volkhov">
            What People say
            <br /> About Us
          </h1>
        </div>
        <div>
          {Test.Data.map((items, id) => (
            <div
              key={id}
              className="bg-white z-10 absolute top-16 right-36 shadow-xl backdrop-blur-md 
              drop-shadow-xl mt-10 lg:w-[430px] lg:h-[272px] md:w-[270px] md:h-[260px] flex rounded-2xl"
            >
              <div className="p-5 text-base font-Poppins">
                <img src={items.imgUrl} alt="" className="" />
                <p className="lg:pt-4 md:pt-3 leading-7 flex-wrap lg:text-base md:text-sm">{items.content}</p>{" "}
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
        <div className="mt-48 mr-20 space-y-10">
          <SlArrowUp size={25} /> <SlArrowDown size={25} />
        </div>
      </div>

      <article>
        <div className="mt-80 md:mt-56">
          <div className="flex lg:justify-evenly md:justify-center md:space-x-14 justify-center space-x-8">
            <img src={image1} alt="" className="md:w-20 md:h-24 w-8 h-10 lg:w-20 lg:h-20" />
            <img src={image2} alt="" className="md:w-20 md:h-16 md:mt-3 w-10 h-8 lg:-mt-2 mt-1  lg:w-24 lg:h-24" />
            <img src={image3} alt="" className="md:w-20 md:h-24 w-8 h-10 lg:w-24 lg:h-28 lg:-mt-3" />
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

        <div className="flex justify-center">
          <div className="lg:w-[900px] bg-[#DFD7F9] opacity-70 mt-44 rounded-tl-[70px]
           rounded-b-3xl rounded-tr-2xl lg:h-[320px] mb-20"></div>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
