import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { createForm, formShape } from 'rc-form';
import { FormattedMessage } from "react-intl";

const SubscribeFrorm = ({ form }) => {
    let errors;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldProps } = form;
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    const handleSubmit = () => {

    }

    return (
        <form layout="inline" onSubmit={handleSubmit}>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <TextField
                    // className={classes.formControl}
                    label={<FormattedMessage id={'form.yourEmailAddress'}/>}
                    // value={values.numberformat}
                    // onChange={handleChange('numberformat')}
                    // InputProps={{
                    //     inputComponent: NumberFormatCustom,
                />
            )}

            {/*<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>*/}
            {/*    {getFieldDecorator('username', {*/}
            {/*        rules: [{ required: true, message: 'Please input your username!' }],*/}
            {/*    })(*/}
            {/*        <Input*/}
            {/*            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}*/}
            {/*            placeholder="Username"*/}
            {/*        />,*/}
            {/*    )}*/}
            {/*</Form.Item>*/}
            {/*<Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>*/}
            {/*    {getFieldDecorator('password', {*/}
            {/*        rules: [{ required: true, message: 'Please input your Password!' }],*/}
            {/*    })(*/}
            {/*        <Input*/}
            {/*            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/}
            {/*            type="password"*/}
            {/*            placeholder="Password"*/}
            {/*        />,*/}
            {/*    )}*/}
            {/*</Form.Item>*/}
            {/*<Form.Item>*/}
            {/*    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>*/}
            {/*        Log in*/}
            {/*    </Button>*/}
            {/*</Form.Item>*/}
        </form>
    )
}

SubscribeFrorm.propTypes = {
    form: formShape,
}

export default createForm()(SubscribeFrorm);
