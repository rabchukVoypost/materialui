import React, {useState} from "react";
import Typography from "../Typography"
import InputBase from "../InputBase";
import FormLabel from "@material-ui/core/FormLabel"
import FormHelperText from "../FormHelperText";
import Button from "../Button"
import Box from "../Box"
import Divider from "../Divider";
import microsoftSvg from "../../assets/microsoft.svg"
import googleSvg from "../../assets/google.svg"
import shapePng from "../../assets/Shape.png"
import viewPng from "../../assets/view.png"
import {Form, Formik} from "formik";
import Avatar from "@material-ui/core/Avatar"
import * as Yup from 'yup';
import {FormControl} from "@material-ui/core";
import CheckBox from "../CheckBox";

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

    const [passVisibility, setPassVisibility] = useState(false)

    return (
        <Box display="flex" justifyContent="center" alignItems="center" pt={10}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="550px">
                <Typography variant='h2'>{`Sigh up to set your brand up \nfor success`}</Typography>
                <Box display="inherit" gridGap="10px" pt={5}>
                    <Button color="primary" variant='contained' size='large'><img src={googleSvg} alt="none"/> Sigh up
                        with
                        Google</Button>
                    <Button variant='contained' size='large'><img src={microsoftSvg} alt="none"/> Sigh up with
                        Microsoft</Button>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={3} mb={1}>
                    <Divider variant="middle"/>
                    <Typography variant="h6">or</Typography>
                    <Divider variant="middle"/>
                </Box>


                <Formik initialValues={{name: "", email: "", password: "", checkbox: false}}
                        validationSchema={SignUpSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true)
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                            resetForm()
                        }}>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          setFieldValue,
                          handleSubmit
                      }) => (
                        <Form>
                            <FormControl error={!!errors.name && !!touched.name}>
                                <FormLabel htmlFor="name">Full Name</FormLabel>
                                <InputBase id="name" aria-describedby="name-helper-text" type="text" name="name"
                                           placeholder="Placeholder" onChange={handleChange}
                                           value={values.name} onBlur={handleBlur}></InputBase>
                                <FormHelperText id="name-helper-text">{touched.name && errors.name} </FormHelperText>
                            </FormControl>
                            <FormControl error={!!errors.email && !!touched.email}>
                                <FormLabel htmlFor="email">Email address</FormLabel>
                                <InputBase id="email" aria-describedby="email-helper-text" type="text" name="email"
                                           placeholder="Placeholder" onChange={handleChange}
                                           value={values.email} onBlur={handleBlur}></InputBase>
                                <FormHelperText id="email-helper-text">{touched.email && errors.email}</FormHelperText>
                            </FormControl>
                            <FormControl error={!!errors.password && !!touched.password}>
                                <FormLabel htmlFor="password"> <Avatar
                                    onClick={() => setPassVisibility(!passVisibility)} alt="none"
                                    src={passVisibility ? viewPng : shapePng}/>
                                    Password (8 characters)</FormLabel>
                                <InputBase id="password" aria-describedby="password-helper-text"
                                           type={passVisibility ? "text" : "password"}
                                           name="password"
                                           placeholder="Placeholder" onChange={handleChange}
                                           value={values.password} onBlur={handleBlur}></InputBase>
                                <FormHelperText
                                    id="password-helper-text">{touched.password && errors.password} </FormHelperText>
                            </FormControl>
                            <Box display="flex" alignItems="center" mb={4}>
                                <CheckBox
                                    checked={values.checkbox}
                                    onClick={() => setFieldValue('checkbox', !values.checkbox)}
                                    onChange={handleChange}
                                    color="default"
                                />
                                <Typography variant="subtitle2">Creating an account means you're okay with our <a>Terms
                                    of Service</a>, <a>Privacy Policy</a>, and our default <a>Notification Settings</a></Typography>
                            </Box>
                            <Button onClick={() => handleSubmit()} disabled={!errors} type="submit" color="secondary"
                                    variant='contained' size='large'>Sigh up</Button>
                        </Form>)}
                </Formik>
            </Box>
        </Box>
    )
}


export default SignUp;
