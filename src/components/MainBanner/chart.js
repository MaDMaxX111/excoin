import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";
import { useTheme } from '@material-ui/styles';
import { Area, AreaChart } from 'recharts';
import moment from 'moment';
import _ from 'lodash';
import { round, useDimensions, usePrevious } from '../../utils';
import { StyledWrapChart } from '../../styles/components/MainBanner';
import { getKlines } from '../../api/binance';

const data = [
    {name: 'Page A', uv: 40000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 30000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 20000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 27800, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 18900, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 23900, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 34900, pv: 4300, amt: 2100},
];

const Chart = ({ticker, symbol}) => {

    const {P, c, q} = ticker || {};
    const prevValue = usePrevious(c);
    const [direction, setDirection] = useState(null);
    const [klines, setklines] = useState([]);

    useEffect(() => {
        if (prevValue && prevValue > c) {
            setDirection('low');
        }
        if (prevValue && prevValue < c) {
            setDirection('hi');
        }

        if (prevValue && prevValue === c) {
            setDirection(null);
        }
    }, [c]);

    useEffect(() => {
        const getData = async () => {
            const klines = await getKlines({
                symbol: symbol.replace(/\//, ''),
                interval: "5m",
                startTime: moment().subtract(1, 'day').valueOf(),
            });
            const min = _.minBy(klines, (value) => value[4]);
            setklines(klines.map(kline => {return {
                close: parseFloat(kline[4]) - min[4] * 0.9,
            }}));
        }
        getData();
    }, []);

    const [chartRef, chartSize] = useDimensions();
    const theme = useTheme();

    const colorStroke = P > 0 ? theme.palette.common.green : theme.palette.common.red;
    const colorFill = P > 0 ? theme.palette.common.greenTransparent : theme.palette.common.redTransparent;
    const StyledWrapChartProps = {};
    if (direction === 'hi') {
        StyledWrapChartProps.hi = 'true';
    }
    if (direction === 'low') {
        StyledWrapChartProps.low = 'true';
    }
    return (
        <StyledWrapChart {...StyledWrapChartProps} >
            <div className={'caption'}>
                <div className={'title'}>{symbol || `--`}</div>
                <div className={'valuerate'}><span className={'value'}>{c || `--`}</span><span
                    className={'rate'}>{c}</span></div>
                <div className={'volume'}>Volume: {q ? <FormattedNumber value={round(q, 2)}/> : '--'}</div>
            </div>
            <div className={'chart'} ref={chartRef}>
                <AreaChart width={chartSize.width}
                           height={chartSize.height}
                           data={klines}
                           margin={{top: 5, right: 0, left: 5, bottom: 6}}
                >
                    <Area type='monotone' dataKey='close' stroke={colorStroke} fill={colorFill}/>
                    <text
                        x={chartSize.width / 2}
                        y={chartSize.height * 0.8}
                        dx={2.5}
                        fontWeight={900}
                        fill={colorStroke}
                        fontSize={10}
                        textAnchor="middle"
                    >
                        {`${P ? round(P, 2) : '--'}%`}
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
