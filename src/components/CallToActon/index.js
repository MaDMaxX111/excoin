import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FormattedMessage } from "react-intl";
import {
    StaledWrapCallToAction,
    StaledWrapText,
    StyledWrapButton,
    StyledWrapDelimeter,
} from '../../styles/components/CallToAction';
import background from '../../images/waves.svg';
import {LOGIN_URL, JOIN_US_URL} from "../../constants/route";
import { LinkButton } from "../../styles/components/Common";

const CallToActon = () => {
    return (
        <StaledWrapCallToAction backgroundImage={background}>
            <Container>
                <Grid
                    container
                    justify="center"
                >
                    <Grid key={1} item lg={6}>
                        <StaledWrapText>
                            <h2><FormattedMessage id={'banner.gettingStarted'}/></h2>
                            <p><FormattedMessage id={'text.weProvide'} /></p>
                        </StaledWrapText>
                    </Grid>
                    <Grid key={2} item lg={6}>
                        <StyledWrapButton>
                            <LinkButton to={LOGIN_URL}><FormattedMessage id={'link.login'} /></LinkButton>
                            <StyledWrapDelimeter>
                                <FormattedMessage id={'text.or'} />
                            </StyledWrapDelimeter>
                            <LinkButton to={JOIN_US_URL}><FormattedMessage id={'link.CreateAccount'} /></LinkButton>
                        </StyledWrapButton>
                    </Grid>
                </Grid>
            </Container>
        </StaledWrapCallToAction>
    )
}

export default CallToActon;
