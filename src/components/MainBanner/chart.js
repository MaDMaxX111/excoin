import React  from 'react';
// import TextField from '@material-ui/core/TextField';
// import { FormattedMessage } from "react-intl";
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
import {
    StaledWrapChart
} from '../../styles/components/MainBanner';


// const SubscribeSchema = Yup.object().shape({
//     email: Yup.string()
//         .email(<FormattedMessage id={'error.email'}/>)
//         .required(<FormattedMessage id={'error.emailRequered'}/>),
// });

const Chart = () => (
    <StaledWrapChart>
        <span>BNB/BTC</span>
        <span>0.00017571 $2.31</span>
        <span>Volume: 4,356.83 BTC</span>
    </StaledWrapChart>
);

export default Chart;
