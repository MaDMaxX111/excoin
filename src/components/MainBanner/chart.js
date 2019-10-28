import React from 'react';
import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { useTheme } from '@material-ui/styles';
import { AreaChart, Area } from 'recharts';
import { useDimensions } from '../../utils';
import {
    StyledWrapChart
} from '../../styles/components/MainBanner';

import { formatValue } from '../../utils/symbols';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const Chart = ({ticker, symbol}) => {
    const {p, c, q} = ticker
    // previewVal = ticker;
        // console.log(ticker)
    // A: "20.54000000"
    // B: "35.20000000"
    // C: 1572233843808
    // E: 1572233843812
    // F: 41391916
    // L: 41508370
    // O: 1572147443808
    // P: "11.235"
    // Q: "97.31000000"
    // a: "20.67340000"
    // b: "20.65100000"
    // c: "20.65750000"
    // e: "24hrTicker"
    // h: "21.15000000"
    // l: "18.47440000"
    // n: 116455
    // o: "18.57110000"
    // p: "2.08640000"
    // q: "59479826.48922300"
    // s: "BNBUSDT"
    // v: "3063910.30000000"
    // w: "19.41304433"
    // x: "18.57710000"
    // v  "e": "24hrTicker",  // Event type
    //     "E": 123456789,     // Event time
    //     "s": "BNBBTC",      // Symbol
    //     "p": "0.0015",      // Price change
    //     "P": "250.00",      // Price change percent
    //     "w": "0.0018",      // Weighted average price
    //     "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)
    //     "c": "0.0025",      // Last price
    //     "Q": "10",          // Last quantity
    //     "b": "0.0024",      // Best bid price
    //     "B": "10",          // Best bid quantity
    //     "a": "0.0026",      // Best ask price
    //     "A": "100",         // Best ask quantity
    //     "o": "0.0010",      // Open price
    //     "h": "0.0025",      // High price
    //     "l": "0.0010",      // Low price
    //     "v": "10000",       // Total traded base asset volume
    //     "q": "18",          // Total traded quote asset volume
    //     "O": 0,             // Statistics open time
    //     "C": 86400000,      // Statistics close time
    //     "F": 0,             // First trade ID
    //     "L": 18150,         // Last trade Id
    //     "n": 18151          // Total number of trades
    const [chartRef, chartSize] = useDimensions();
    const theme = useTheme();

    const colorStroke = 'low' ? theme.palette.common.green : theme.palette.common.red;
    const colorFill= 'low' ? theme.palette.common.greenTransparent : theme.palette.common.redTransparent;

    return (
        //low hi
        <StyledWrapChart low={'true'}>
            <div className={'caption'}>
                <div className={'title'}>{symbol}</div>
                <div className={'valuerate'}><span className={'value'}>{formatValue(c, symbol)}</span><span
                    className={'rate'}><FormattedNumber value={c} /></span></div>
                <div className={'volume'}>Volume: <FormattedNumber value={q} /></div>
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
                        {`${p}%`}
                    </text>
                </AreaChart>
            </div>
        </StyledWrapChart>
    );
}

Chart.propTypes = {
    ticker: PropTypes.object,
    symbol: PropTypes.string,
};

export default Chart;
