 import * as Yup from 'yup'

 const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    fullName: Yup.string().required('Fullname is required'),
    password: Yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required('Confirm password required'),
});