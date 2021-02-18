import React from "react";
import Typography from "../Typography"
import TextField from "../Textfield"
import Button from "../Button"
import Box from "../Box"
import microsoftSvg from "../../assets/microsoft.svg"
import googleSvg from "../../assets/google.svg"
import {Form, Formik} from "formik";

import * as Yup from 'yup';

const passRegExp = /^[A-Za-z0-9]+$/

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required('Full Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string().min(8, 'Please input your password! The password must be at least 8 characters.').matches(passRegExp, 'Latin letters and numbers only').required('Password is required')
});


const SignUp = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" pt={15}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="550px">
                <Typography variant='h2'>{`Sigh up to set your brand up \nfor success`}</Typography>
                <Box display="inherit" gridGap="10px" pt={5}>
                    <Button color="primary" variant='contained' size='large'><img src={googleSvg} alt="none"/> Sigh up
                        with
                        Google</Button>
                    <Button variant='contained' size='large'><img src={microsoftSvg} alt="none"/> Sigh up with
                        Microsoft</Button>
                </Box>
            </Box>
        </Box>
    )
}


export default SignUp;
