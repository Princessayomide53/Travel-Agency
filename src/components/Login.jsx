import React from "react";
import travel from "../assets/travel.png";
import { SlLock } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import {basicSchema} from '../Schema/schema';


function Login() {
  const formik = useFormik({
    initialValues: {
      email: '', 
      password: '', 
      
    },
    validationSchema: basicSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="flex justify-center">
          <img
            src={travel}
            alt="Illustration2"
            className="w-[250px] h-[250px] sm:w-[580px] sm:h-[650px]"
          />
        </div>
        <div>
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[85px] font-bold">
            Login
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className=" sm:pt-16 pt-10  items-center flex flex-col pl-5 pr-5 sm:pl-0 sm:pr-0">
              <div className="flex space-x-7 mt-12 sm:mt-14">
                <p className="font-bold sm:text-3xl text-xl mt-[5px] sm:mt-0">
                  @
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email && <div className="text-red-500 flex justify-start items-start pr-[70px] mt-2 sm:pr-[190px] text-xs sm:text-base">{formik.errors.email}</div>}

              <div className="flex space-x-7 mt-12 sm:mt-14">
                <SlLock className="sm:text-3xl text-xl mt-[5px] sm:mt-0" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password && <div className="text-red-500 flex justify-start items-start pr-12 mt-2 sm:pr-40 text-xs sm:text-base">{formik.errors.password}</div>}
            </div>


            <div className="items-end justify-end sm:mt-12 mt-10 flex">
              <p className=" text-blue-600 text-xs sm:text-sm pr-14 sm:pr-0 font-bold"><Link to="/forgotpassword">Forgot Password? </Link></p>
            </div>
            <div className="flex justify-center pt-9">
              <button disabled={!formik.isValid || formik.isSubmitting} className="bg-blue-700 rounded-xl sm:text-lg text-base text-white sm:w-[400px] font-semibold w-72 h-12">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
