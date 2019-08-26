import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
// import { createForm, formShape } from 'rc-form';
import { FormattedMessage } from "react-intl";
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

// import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
// const CssTextField = withStyles({
//     root: {
//         backgroundColor: '#fff',
//         borderRadius: '5px',
//         '& label.Mui-focused, & label.MuiFormLabel-filled': {
//             display: 'none',
//             color: 'green',
//             maxHeight: 0,
//             overflow: 'hidden',
//         },
//         '& .MuiInputBase-input': {
//           padding: '18px 14px',
//         },
//         // '& .MuiInput-underline:after': {
//         //     borderBottomColor: 'green',
//         // },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 border: 'none',
//                 // borderColor: 'red',
//             },
//             '&:hover fieldset': {
//                 // borderColor: 'yellow',
//             },
//             '&.Mui-focused fieldset': {
//                 // borderColor: 'green',
//                 // border: '2px solid green'
//             },
//             '&.Mui-focused fieldset legend': {
//                 // display: 'none',
//             },
//         },
//     },
// })(TextField);

// const SubscribeFrorm = ({ form }) => {
//     let errors;
//     const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldProps } = form;
//     // Only show error after a field is touched.
//     // const usernameError = isFieldTouched('username') && getFieldError('username');
//     // const passwordError = isFieldTouched('password') && getFieldError('password');
//
//     const handleSubmit = () => {
//
//     }
//
//     return (
//         <form layout="inline" onSubmit={handleSubmit}>
//             <CustomInput {...getFieldProps('name')} />
//             {/*{getFieldDecorator('username', {*/}
//             {/*    // valuePropName: 'defaultValue',*/}
//             {/*    rules: [{ required: true, message: 'Please input your username!' }],*/}
//             {/*})(*/}
//             {/*    <input*/}
//             {/*        // defaultValue="Success"*/}
//             {/*        // label={<FormattedMessage id={'form.yourEmailAddress'}/>}*/}
//             {/*        // variant="outlined"*/}
//             {/*    />*/}
//             {/*)}*/}
//             <Button onClick={handleSubmit}>
//                 <FormattedMessage id={'form.getStartNow'}/>
//             </Button>
//         </form>
//     )
// }
//
// SubscribeFrorm.propTypes = {
//     form: formShape,
// }

// export default createForm()(SubscribeFrorm);


// const CustomInput = (props) => {
//     console.log(props)
//     return <input value={props.value || 'ddddd'} onChange={props.onChange} />
// }

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Basic;