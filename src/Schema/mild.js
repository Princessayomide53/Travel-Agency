import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = Yup.object({
    password: Yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required('new password required'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required('confirm password required'),
});