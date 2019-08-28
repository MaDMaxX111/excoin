import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import {
    StaledWrapMainBanner,
} from '../../styles/components/MainBanner';
import background from '../../images/waves.svg';
import SubscribeFrorm from './subscribeform';
import Chart from './chart';

const MainBanner = () => {


    const [spacing, setSpacing] = React.useState(2);

    return (
        <StaledWrapMainBanner backgroundImage={background}>
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
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2, 3].map(value => (
                        <Grid key={value} item lg={3}>
                            <Chart />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StaledWrapMainBanner>
    )
}

export default MainBanner;
