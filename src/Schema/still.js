import * as Yup from 'yup'


export const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
});