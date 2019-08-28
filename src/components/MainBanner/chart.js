import React  from 'react';
// import TextField from '@material-ui/core/TextField';
// import { FormattedMessage } from "react-intl";
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
import {
    StaledWrapChart
} from '../../styles/components/MainBanner';

const Chart = () => (
    <StaledWrapChart>
        <div className={'caption'}>
            <div className={'title'}>BNB/BTC</div>
            <div className={'rate'}><span>0.00017571</span> $2.31</div>
            <div className={'volume'}>Volume: 4,356.83 BTC</div>
        </div>
        <div className={'chart'}>

        </div>
    </StaledWrapChart>
);

export default Chart;
