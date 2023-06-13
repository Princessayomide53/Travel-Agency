import React, { useState } from "react";
import Test from "../Data/Test";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import '../styles/app.css';




function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
const isFirstSlide = currentIndex === 0;
const newIndex = isFirstSlide ? Test.Data.length - 1 : currentIndex - 1;
setCurrentIndex(newIndex);
   }

   const nextSlide = () => {
    const isLastSlide = currentIndex === Test.Data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
       }
    
  return (
    <section>
      <div className="sm:flex-row sm:justify-around xl:space-x-48 relative mt-12 flex flex-col ">
        <div className="mt-24 text-center">
          <p className="text-sm sm:text-lg uppercase text-[#5E6282] font-bold font-Poppins">
            Testimonials
          </p>
          <h1 className="lg:text-5xl text-2xl mt-3 xl:text-6xl md:text-2xl xl:leading-normal sm:mt-0   text-[#14183E] font-bold md:mt-5 font-Volkhov">
            What People say
            <br /> About Us
          </h1>
        </div>
        
        <div className={`${Test.Data[currentIndex]}`}>
          {Test.Data.map((items, id) => (
            <div
              key={id}
              className={`bg-white z-10 ml-10 sm:ml-0 absolute top-48 w-[250px] h-[200px] sm:top-16 xl:right-60 lg:right-32 shadow-xl backdrop-blur-md 
              drop-shadow-xl mt-10 lg:w-[430px] lg:h-[272px] md:w-[270px] md:h-[260px] flex rounded-2xl duration-500 ${
                currentIndex === id ? "fade-in" : "hidden"
              }`}
            >
              <div className="sm:p-5 p-3 text-base font-Poppins">
                <img src={items.imgUrl} alt="" className="w-10 h-10 sm:h-16 sm:w-16" />
                <p className="lg:pt-4 md:pt-3 sm:leading-7  leading-6 flex-wrap lg:text-base md:text-sm text-[10px] mt-3 sm:mt-0">
                  {items.content}
                </p>{" "}
                <p className="lg:pt-5 md:pt-3 text-[#5E6282] pt-3 lg:text-lg text-sm md:text-base font-semibold font-Poppins">
                  {items.name} 
                </p>
                <p className="text-[#5E6282] sm:text-sm text-xs font-normal font-Poppins">
                  {items.country}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:mt-48 xl:ml-72 lg:ml-72 space-y-10 md:ml-40 mt-20 ml-[320px]">
          <SlArrowUp size={25} className="text-base cursor-pointer" onClick={prevSlide}/> <SlArrowDown onClick={nextSlide} size={25} className="text-sm cursor-pointer"/>
        </div>
      </div>

      <article>
        <div className="sm:mt-80 mt-40 md:mt-56">
          <div className="flex lg:justify-evenly xl:justify-around md:justify-center md:space-x-16 justify-center space-x-8">
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
</article>   
 </section>
  );
}

export default Testimonials;
