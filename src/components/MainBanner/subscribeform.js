import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { FormattedMessage } from "react-intl";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import nanoid from 'nanoid';
import {
    StaledWrapForm, StyledButton
} from '../../styles/components/MainBanner';


const SubscribeSchema = Yup.object().shape({
    email: Yup.string()
        .email(<FormattedMessage id={'error.email'}/>)
        .required(<FormattedMessage id={'error.emailRequered'}/>),
});

const SubscribeFrorm = () => (
    <StaledWrapForm>
        <Formik
            initialValues={{ email: ''}}
            validationSchema={SubscribeSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                }, 4000);
            }}
        >
            {({   values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
              }) => {
                const idMailField = nanoid();
                return(
                <Form autoComplete="off">
                    <TextField
                        InputLabelProps={{
                            htmlFor: idMailField,
                        }}
                        id={idMailField}
                        label={<FormattedMessage id={'form.yourEmailAddress'} />}
                        type="email"
                        name="email"
                        value={values.email}
                        error={!!errors.email && touched.email}
                        helperText={(errors.email && touched.email) ? errors.email : null}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <StyledButton
                        onClick={handleSubmit}
                        type={'submit'}
                        disabled={isSubmitting || !isValid}
                    >
                        <FormattedMessage id={'form.getStartNow'}/>
                    </StyledButton>
                </Form>
            )}}
        </Formik>
    </StaledWrapForm>
);

export default SubscribeFrorm;
