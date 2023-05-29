import React from 'react';
import reset from "../../assets/reset.png";
import { SlLock } from "react-icons/sl";
import { useFormik } from 'formik';
import {validationSchema} from '../../Schema/mild';

function Reset() {
  const formik = useFormik({
    initialValues: {
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
  <article>
    <div className='flex flex-col'>
    <div className='flex  justify-center'><img src={reset} alt="" className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]"/></div>
    <div className="flex items-center flex-col">
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[40px] font-bold">
            Reset Password
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex space-x-7 pt-10">
            <SlLock className="sm:text-3xl text-xl mt-[5px] sm:mt-0"/>

              <input
                type="password"
                name='password'
                placeholder="New password"
                className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
                onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && <div className="text-red-500 flex justify-start items-start text-xs sm:text-base mt-2 pl-14">{formik.errors.password}</div>}

            <div className="flex space-x-7 pt-14">
              <SlLock className="sm:text-3xl text-xl mt-[5px] sm:mt-0"/>
              <input
                type="password"
                name='confirmPassword'
                placeholder="Confirm Password"
                className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
                onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 flex justify-start items-start text-xs sm:text-base mt-2 pl-14">{formik.errors.confirmPassword}</div>}

            <div className="flex justify-center pt-12 pb-2">
              <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className="bg-blue-700 rounded-xl sm:text-lg text-base font-semibold text-white w-full h-12">
               Continue 
              </button>
              </div>
          </form>
    </div>
    </div>
    </article>
  )
}

export default Reset;