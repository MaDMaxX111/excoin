import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import {connect} from "react-redux";
import _ from 'lodash';
import {
    StyledWrapMainBanner,
    StyledWrapCharts,
} from '../../styles/components/MainBanner';
import background from '../../images/waves.svg';
import SubscribeFrorm from './subscribeform';
import Chart from './chart';
import News from './news';
import miniTickerActions from '../../redux/tickers/actions';
import { THROTTLE_UPDATE_TIME } from '../../constants/common';
const {subscribeMiniTickers, unsubscribeMiniTickers} = miniTickerActions;
const pairs = ['BNB/USDT', 'BTC/USDT', 'ETH/USDT', 'EOS/USDT'];

const MainBanner = ({
                        subscribeMiniTickers,
                        unsubscribeMiniTickers,
                        tickers,
                    }) => {
    useEffect(() => {
        subscribeMiniTickers({tickers: pairs})
        return function cleanup() {
            unsubscribeMiniTickers({tickers: pairs});
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <StyledWrapMainBanner backgroundImage={background}>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Typography variant={'h2'}><FormattedMessage id={'banner.buyAndSellCryptocurrency'}/></Typography>
                    <Typography variant={'body1'}><FormattedMessage id={'banner.text'}/></Typography>
                    <SubscribeFrorm />
                </Grid>
                <StyledWrapCharts>
                    <Grid container justify="center" spacing={8}>
                        {pairs.map(value => (
                            <Grid key={value} item lg={3} md={6} xs={12}>
                                <Chart symbol={value} ticker={value.replace('/', '') in tickers ? tickers[value.replace('/','')] : {}}/>
                            </Grid>
                        ))}
                    </Grid>
                </StyledWrapCharts>
                <News />
            </Container>
        </StyledWrapMainBanner>
    )
}

MainBanner.propTypes = {
    subscribeMiniTickers: PropTypes.func,
    unsubscribeMiniTickers: PropTypes.func,
    tickers: PropTypes.object,
};

function mapStateToProps(state) {

    const { Tickers, ExchangeInfo } = state;
    // const { symbols } = ExchangeInfo || {};
    const tickers = {};
    const tickersKey = Object.keys(Tickers).filter(ticker => pairs.findIndex(pair => pair.replace('/', '') === ticker) > -1);
    tickersKey.forEach(key => {
        // tickers[key] = Object.assign({}, Tickers[key], {symbolInfo: symbols[key] || {}})
        tickers[key] = Object.assign({}, Tickers[key])
    })

    return {
        tickers,
    }
}

export default connect(_.throttle(mapStateToProps, THROTTLE_UPDATE_TIME), {
    subscribeMiniTickers, unsubscribeMiniTickers
})(React.memo(MainBanner, (prevProps, nextProps) => {
    return _.isEqualWith(prevProps, nextProps, 'tickers');
}));
