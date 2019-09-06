import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import {
    StaledWrapCallToAction,
    StaledWrapText,
    // StaledWrapCharts,
} from '../../styles/components/CallToAction';
import background from '../../images/waves.svg';
import SubscribeFrorm from './subscribeform';
import Chart from './chart';
import News from './news';

const CallToActon = () => {
    return (
        <StaledWrapCallToAction backgroundImage={background}>
            <Container>
                <Grid
                    container
                    // direction="row"
                    justify="center"
                    // alignItems="center"
                    // spacing={8}
                >
                    <Grid key={1} item lg={6}>
                        <StaledWrapText>
                            <h2><FormattedMessage id={'banner.gettingStarted'}/></h2>
                            <p><FormattedMessage id={'text.weProvide'} /></p>
                        </StaledWrapText>
                    </Grid>
                    <Grid key={1} item lg={6} style={{border: '1px solid red'}}>
                        {/*<Typography variant={'body1'}><FormattedMessage id={'banner.text'}/></Typography>*/}
                    </Grid>
                </Grid>
                {/*    <StaledWrapCharts>*/}
                {/*    <Grid container justify="center" spacing={8}>*/}
                {/*        {[0, 1, 2, 3].map(value => (*/}
                {/*            <Grid key={value} item lg={3}>*/}
                {/*                <Chart />*/}
                {/*            </Grid>*/}
                {/*        ))}*/}
                {/*    </Grid>*/}
                {/*    </StaledWrapCharts>*/}
                {/*    <News />*/}
            </Container>
        </StaledWrapCallToAction>
    )
}

export default CallToActon;
