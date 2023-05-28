import * as Yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?.*[A-Z]).{5,}$/;
export const basicSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required('Required'),
});