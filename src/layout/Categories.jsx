import React, {useEffect} from "react";
import group from "../assets/group.png";
import wifi from "../assets/wifi.png";
import plane from "../assets/plane.png";
import events from "../assets/events.png";
import custom from "../assets/custom.png";
// import decore2 from "../assets/decore2.png";
import Card from "../Data/Data";
import { IoIosSend } from "react-icons/io";
import '../styles/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Categories() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      
      <div className="sm:mt-10 mt-10 md:-mt-7 lg:mt-20">
      <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000">
        <div className="">
          <p className="text-[#5E6282] font-bold text-center uppercase font-Poppins text-[11px] sm:text-base">
            Category
          </p>
          <h1 className="text-[#14183E] text-center font-Volkhov text-xl sm:text-5xl  font-bold mt-3">
            We Offer Best Services
          </h1>
          <div className="flex justify-end -mt-14">
            <img src={group} alt="" className="w-20 sm:w-32" />
          </div>
        </div>

        <div className="">
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-28 md:place-items-center gap-10 lg:flex lg:gap-1 
          lg:justify-center lg:space-x-14 xl:justify-around xl:-space-x-3 mb-2  relative">

            <div className="card cursor-pointer">
            <div className="bg-white lg:w-44 md:w-44 xl:w-48 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg">
              <div className="card2">
              <div className="flex justify-center">
                <img
                  src={wifi}
                  alt=""
                  className="sm:w-14 sm:h-12 sm:mt-7 mt-7 w-12 h-10"
                />
              </div>
              <p className="pt-5 font-semibold sm:text-sm text-xs text-[#1E1D4C]  text-center">
                Calculated weather
              </p>
              <p className="text-center sm:text-sm pb-9 text-xs text-[#5E6282] pt-3 ">
                Built Wicket longer
                <br /> admire do barton
                <br /> vanity itself do in it.
              </p>
              </div>
               </div>  
                 <div className="absolute top-36 cards -z-10 md:left-[25px] xl:left-[8px] mac:left-[23px] lg:left-[7px] sm:w-20 sm:h-20 rounded-br-xl rounded-bl-sm rounded-t-[30px] bg-[#DF6951]"></div>    
            </div>
            

            <div className="card cursor-pointer">
            <div className="bg-white lg:w-44 xl:w-48 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg">
              <div className="flex justify-center">
                <img
                  src={plane}
                  alt=""
                  className="sm:w-28 sm:h-20 sm:mt-1 w-24 h-20"
                />
              </div>

              <p className="pt-2  font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Best Flights
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                Engrossed listening.
                <br /> Park gate sell they <br />
                west hard for the
              </p>
                
            </div>
               <div className="absolute top-36 md:left-[465px] xl:left-[327px] lg:left-[243px] mac:left-[380px] cards sm:w-20 sm:h-20 -z-50 rounded-br-xl rounded-bl-sm rounded-t-[30px] bg-[#DF6951]"></div>         
            </div>

            <div className="card cursor-pointer">
            <div className="bg-white lg:w-44 xl:w-48 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg">
              <div className="flex justify-center">
                <img
                  src={events}
                  alt=""
                  className="sm:w-14 sm:h-12 mt-7 sm:mt-7 w-12 h-10"
                />
              </div>

              <p className="pt-5  font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Local Events
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                Barton vanity itself do
                <br /> in it. Preferd to men it
                <br /> engrossed listening.{" "}
              </p>

            </div>           
               <div className="absolute lg:top-36 md:top-[488px] md:left-[25px] xl:left-[642px] lg:left-[480px] mac:left-[735px] cards sm:w-20 sm:h-20 -z-10 rounded-br-xl rounded-bl-sm rounded-t-[30px] bg-[#DF6951]"></div>
            </div>


            <div className="card cursor-pointer">
            <div className="bg-white  lg:w-44 md:w-44 xl:w-48 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg">
              <div className="flex justify-center">
                <img
                  src={custom}
                  alt=""
                  className="sm:w-12 sm:h-12 mt-7 sm:mt-7 w-10 h-12"
                />
              </div>
              <p className="pt-4 font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Customization
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                We deliver outsourced
                <br /> aviation services for <br />
                military customers
              </p>
              
            </div>
            <div className="absolute lg:top-36 md:top-[488px] md:left-[465px] xl:left-[960px] lg:left-[715px] mac:left-[1094px] cards sm:w-20 sm:h-20 -z-10 rounded-br-xl rounded-bl-sm rounded-t-[30px] bg-[#DF6951]"></div>
            </div>
            </div>
            
          </div>
        </div>


        <div data-aos="fade-up"
       data-aos-offset="100"
       data-aos-duration="2000"
       data-aos-easing="ease-in-sine">
        <div className="sm:mt-36 mt-20">
          <p className="text-[#5E6282] text-center font-semibold uppercase font-Poppins text-[11px] sm:text-lg">
            Top Selling
          </p>
          <h1 className="font-Volkhov text-3xl sm:text-5xl text-[#14183E] font-bold text-center mt-2">
            Top Destination
          </h1>
        </div>
        </div>
        

        </div>
       
        <div className="flex sm:flex-row space-y-14 sm:space-y-0 flex-col items-center md:justify-evenly lg:justify-evenly xl:justify-around xl:space-x-5 sm:mt-20 mt-16 relative ">
          {Card.Image.map((data, id) => ( 
            <div className="hover:drop-shadow-xl hover:shadow-2xl" key={id} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
              
            <div  className="z-50 flex items-center justify-evenly ">
            <center>
              <img
                src={data.imgUrl}
                alt=""
                className="lg:w-[280px]  w-52 md:w-48"
              />
              </center>
              </div>
              
              <div className="bg-white lg:w-[281px] ml-0 rounded-b-xl pb-1 md:top-[265px] xl:top-[383px] md:w-[200px] w-[209px] -mt-14 absolute lg:top-[400px] z-50" >
              <div className="flex justify-between sm:py-2 sm:px-2  px-2 py-2 font-Poppins text-base lg:text-lg">
                <p>{data.title}</p>
                <p>{data.money}</p>
              </div>
                <div className="sm:mt-3 flex mt-3 space-x-4 px-2 sm:px-0 sm:space-x-2 sm:pl-2">
                  <IoIosSend />
                  <p className="text-base lg:text-lg font-Poppins sm:-mt-1 -mt-[2px]">{data.days}</p>
                </div>
              </div>
              </div>
          ))}
          
        </div>
     
    </section>
  );
}

export default Categories;
