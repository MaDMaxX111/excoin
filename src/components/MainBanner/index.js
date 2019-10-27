import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import {
    StyledWrapMainBanner,
    StyledWrapCharts,
} from '../../styles/components/MainBanner';
import background from '../../images/waves.svg';
import SubscribeFrorm from './subscribeform';
import Chart from './chart';
import News from './news';
import {connect} from "react-redux";
import miniTickerActions from '../../redux/miniticker/actions';
const {subscribeMiniTickers} = miniTickerActions;

const pairs = ['BNB/USDT', 'BTC/USDT', 'ETH/USDT', 'EOS/USDT'];
const MainBanner = ({subscribeMiniTickers}) => {
    useEffect(() => {
        subscribeMiniTickers({tickers: pairs})
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
                                <Chart />
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
};

function mapStateToProps(state) {
    // const {Language} = state;
    // const {currentLanguage, avalableLanguages} = Language || {}
    // return {
    //     currentLanguage,
    //     avalableLanguages,
    // }
}

export default connect(mapStateToProps, {subscribeMiniTickers})(MainBanner);