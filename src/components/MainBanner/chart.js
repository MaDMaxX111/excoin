import React from 'react';
import { useTheme } from '@material-ui/styles';
import { AreaChart, Area } from 'recharts';

import { useDimensions } from '../../utils';
import {
    StyledWrapChart
} from '../../styles/components/MainBanner';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const Chart = () => {

    const [chartRef, chartSize] = useDimensions();
    const theme = useTheme();

    const colorStroke = 'low' ? theme.palette.common.green : theme.palette.common.red;
    const colorFill= 'low' ? theme.palette.common.greenTransparent : theme.palette.common.redTransparent;

    return (
        //low hi
        <StyledWrapChart low={'true'}>
            <div className={'caption'}>
                <div className={'title'}>BNB/BTC</div>
                <div className={'valuerate'}><span className={'value'}>0.00000017571</span><span
                    className={'rate'}>$12.31</span></div>
                <div className={'volume'}>Volume: 4,356.83 BTC</div>
            </div>
            <div className={'chart'} ref={chartRef}>
                <AreaChart width={chartSize.width}
                           height={chartSize.height}
                           data={data}
                           margin={{top: 5, right: 0, left: 5, bottom: 6}}
                >
                    <Area type='monotone' dataKey='uv' stroke={colorStroke} fill={colorFill} />
                    <text
                        x={chartSize.width/2}
                        y={chartSize.height*0.8}
                        dx={2.5}
                        fontWeight={900}
                        fill={colorStroke}
                        fontSize={10}
                        textAnchor="middle"
                    >
                        {'+8.54%'}
                    </text>
                </AreaChart>
            </div>
        </StyledWrapChart>
    );
}

export default Chart;
