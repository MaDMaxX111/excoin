import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { FormattedNumber, FormattedMessage } from "react-intl";
import { useTheme } from '@material-ui/styles';
import { Area, AreaChart } from 'recharts';
import moment from 'moment';
import _ from 'lodash';
import { useDimensions, usePrevious } from '../../utils';
import { StyledWrapChart } from '../../styles/components/MainBanner';
import { getKlines } from '../../api/binance';
import { BASE_CURRENCY_SYMBOL } from '../../constants/common';

const Chart = ({ticker, symbol}) => {

    const { P, c, q, quoteAssetToBaseCurrency } = ticker || {};
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [symbol]);

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
                <div className={'valuerate'}><span className={'value'}>{c ? c : ` --`}</span><span
                    className={'rate'}>{`${BASE_CURRENCY_SYMBOL}${quoteAssetToBaseCurrency ? quoteAssetToBaseCurrency : ` --`}`}</span></div>
                <div className={'volume'}><FormattedMessage id={'text.volume'}/>: {q ? <><FormattedNumber value={q}/> {''}</> : '--'}</div>
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
                        {`${P ? P : '--'}%`}
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
