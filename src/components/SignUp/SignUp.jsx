import React from "react";
import { GoOctoface } from "react-icons/go";
import { SlLock } from "react-icons/sl";
import handshake from "../../assets/handshake.png";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import {validationSchema} from '../../Schema/index';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/Firebase.Config';
// import * as Yup from 'yup'

function SignUp() {
 
  console.log(auth?.currentUser?.email)
  const SignUp = async ()  => {
    try {
    await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password, formik.values.fullName, formik.values.confirmPassword, )
  }catch(err) {
    console.error(err)
  }
}


  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <section>
      <div className="overflow-hidden flex sm:flex-row sm:justify-evenly flex-col">
        <div className="flex justify-center">
          <img
            src={handshake}
            alt="illustration"
            className="w-[200px] h-[200px] sm:w-[580px] sm:h-[650px]"
          />
        </div>
        <div>
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-10 font-bold">
            Sign Up
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="items-center flex flex-col pl-5 pr-5 sm:pl-0 sm:pr-0">
              <div className="flex space-x-7 mt-10 sm:mt-12">
                <p className="font-bold sm:text-3xl text-xl mt-[5px] sm:mt-0">
                  @
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
                  onChange={formik.handleChange}
         value={formik.values.email}
         onBlur={formik.handleBlur}
                />
                </div>
                         {formik.touched.email && formik.errors.email && <div className="text-red-500 mt-3 pr-[67px] sm:pr-[180px] text-xs sm:text-base">{formik.errors.email}</div>}
              
              <div className="flex space-x-7 mt-10 sm:mt-12">
                <GoOctoface className='sm:text-3xl text-xl mt-[5px] sm:mt-0'/> 
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3"
                  onChange={formik.handleChange}
         value={formik.values.fullName}
         onBlur={formik.handleBlur}
                />
                </div>
                         {formik.touched.fullName && formik.errors.fullName && <div className="text-red-500 pr-[47px] mt-3 sm:pr-[156px] text-xs sm:text-base">{formik.errors.fullName}</div>}
              
              <div className="flex space-x-7 mt-10 sm:mt-12">
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
                         {formik.touched.password && formik.errors.password && <div className="text-red-500 pr-[47px] mt-3 sm:pr-[154px] text-xs sm:text-base">{formik.errors.password}</div>}
              

              <div className="flex space-x-7 mt-10 sm:mt-12">
                <SlLock className='sm:text-3xl text-xl mt-[5px] sm:mt-0'/>
                <input
                  type="password"
                  name="confimPassword"
                  placeholder="Confirm Password"
                  className="border-b-2 border-black sm:w-96 w-56 pl-3 rounded-md h-8 mb-3 sm:mb-0"
                  onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         onBlur={formik.handleBlur}
                />
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 pr-[5px] mt-2 sm:pr-[154px] text-xs sm:text-base">{formik.errors.confirmPassword}</div>}
              
              <p className="text-gray-500 mt-10 sm:text-sm text-xs font-sans pl-1 pr-1 sm:pl-0 sm:pr-0">
                By signing up, you agreed to our{" "}
                <span className="font-semibold text-blue-500">
                  Terms & Conditions and Privacy Policy
                </span>
              </p>

              <div className="flex-col flex space-x-10 mt-7 pb-3 sm:mb-0">
                {" "}
                <button type="submit" onClick={SignUp} disabled={!formik.isValid || formik.isSubmitting} className="bg-blue-600 font-semibold sm:text-base text-sm rounded-2xl px-10 py-2 text-white ">
                  Create an account
                </button>
                
                  {" "}
                  <p className="text-gray-500 sm:text-sm text-sm font-sans font-semibold mt-[10px]">
                    Joined us before?{" "}
                    <span className="text-blue-600 font-semibold"><Link to="login">Login </Link></span>
                  </p>
              </div>
            
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;