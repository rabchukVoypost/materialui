import React, {useState} from "react";
import Typography from "../Typography"
import Button from "../Button"
import Box from "../Box"
import Divider from "../Divider";
import TextField from "../Textfield"
import microsoftSvg from "../../assets/microsoft.svg"
import googleSvg from "../../assets/google.svg"
import shapePng from "../../assets/Shape.png"
import viewPng from "../../assets/view.png"
import {Form, Formik} from "formik";
import Avatar from "@material-ui/core/Avatar"
import * as Yup from 'yup';
import CheckBox from "../CheckBox";

const passRegExp = /^[A-Za-z0-9]+$/

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required('Full Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string().min(8, 'Please input your password! The password must be at least 8 characters.')
        .matches(passRegExp, 'Latin letters and numbers only').required('Password is required'),
    checkbox: Yup.boolean().required().oneOf([true])
});

interface Values {
    name: string
    email: string
    password: string
    checkbox: boolean
}


const SignUp: React.FC = ():JSX.Element => {

    const [passVisibility, setPassVisibility] = useState<boolean>(false)

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
                        onSubmit={(values: Values, {setSubmitting}) => {
                            setSubmitting(true)
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                        }}>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          setFieldValue,
                          handleSubmit,
                          isValid
                      }) => (
                        <Form>
                            <TextField
                                error={!!errors.name && !!touched.name}
                                id="name"
                                name="name"
                                label="Full Name"
                                placeholder="Placeholder"
                                value={values.name}
                                onChange={handleChange}
                                helperText={touched.name && errors.name}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                onBlur={handleBlur}
                            />

                            <TextField
                                error={!!errors.email && !!touched.email}
                                id="email"
                                name="email"
                                label="Email address"
                                placeholder="Placeholder"
                                value={values.email}
                                onChange={handleChange}
                                helperText={touched.email && errors.email}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                onBlur={handleBlur}
                            />

                            <TextField
                                error={!!errors.password && !!touched.password}
                                id="password"
                                name="password"
                                label="Password (8 characters)"
                                placeholder="Placeholder"
                                value={values.password}
                                onChange={handleChange}
                                helperText={touched.password && errors.password}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type={passVisibility ? "text" : "password"}
                                onBlur={handleBlur}
                            />
                            <Avatar onClick={() => setPassVisibility(!passVisibility)} alt="none"
                                    src={passVisibility ? viewPng : shapePng}/>

                            <Box display="flex" alignItems="center" mb={4} mt={4}>
                                <CheckBox
                                    checked={values.checkbox}
                                    onClick={() => setFieldValue('checkbox', !values.checkbox)}
                                    onChange={handleChange}
                                    color="default"
                                />
                                <Typography variant="subtitle2">Creating an account means you're okay with our <a>Terms
                                    of Service</a>, <a>Privacy Policy</a>, and our default <a>Notification Settings</a>.</Typography>
                            </Box>
                            <Button onClick={()=>handleSubmit()} disabled={!isValid} type="submit" color="secondary"
                                    variant='contained' size='large'>Sigh up</Button>
                        </Form>)}
                </Formik>
            </Box>
        </Box>
    )
}


export default SignUp;
