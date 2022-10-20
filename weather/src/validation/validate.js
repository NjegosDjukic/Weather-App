import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const validate = Yup.object().shape({
    firstName: Yup.string()
        .min(3,'First name cant be shorter than 3 characters')
        .max(12,'First name cant be longer than 12 characters')
        .matches(/^\S*$/, "White spaces are not allowed")
        .matches(/^([^0-9]*)$/,'Numbers are not allowed')
        .matches(/^[aA-zZ\s]+$/,'Special characters are not allowed')
        .required('This field is required'),
    lastName : Yup.string()
        .min(3,'Last name cant be shorter than 3 characters')
        .max(12,'Last name cant be longer than 12 characters')
        .matches(/^\S*$/, "White spaces are not allowed")
        .matches(/^([^0-9]*)$/,'Numbers are not allowed')
        .matches(/^[aA-zZ\s]+$/,'Special characters are not allowed')
        .required('This field is required'),
    password : Yup.string()
        .matches(/^[^\s]+(\s+[^\s]+)*$/,'Password cant containt spaces')
        .min(6,'Password cant be shorter than 6 characters')
        .max(15,'Password cant be longer than 15 characters')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minSymbols(1, 'Password must contain at least 1 special character')
        .required('This field is required'),
    email: Yup.string()
        .email('Email is not in correct format')
        .required('This field is required')
        .matches(/^\S*$/, "White spaces are not allowed")
        .matches(/^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/,'Capital letters are not allowed')
    })