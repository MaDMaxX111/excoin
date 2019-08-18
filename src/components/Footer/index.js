import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logoImg from '../../images/Logo.png';
import Logo from '../Header/logo.js';
import NavigationLinks from '../Header/navigationlinks.js';
// import NavigationButtons from './navigationbuttons.js';

import {
    StyledFooter,
} from '../../styles/components/Footer'

const links = [
    {
        text: 'Exchange',
        href: '/',
    },
    {
        text: 'Charts',
        href: '/',
    },
    {
        text: 'Features',
        href: '/',
    },
    {
        text: 'Support',
        href: '/',
    },
    {
        text: 'News',
        href: '/',
    },
    {
        text: 'More',
        href: '/',
    }
];

const Header = () => {
    return (
        <StyledFooter>
            <Container style={{border: '1px solid red'}}>
                <Grid container>
                    <Grid item md={4} lg={3} style={{border: '1px solid red'}}>
                        <Logo img={logoImg} title={'Excoin'}/>
                    </Grid>
                    <Grid item md={4} lg={2} style={{border: '1px solid red'}}>
                        <NavigationLinks title={'About as'} links={links} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={2} style={{border: '1px solid red'}}>
                        <NavigationLinks title={'About as'} links={links} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={2} style={{border: '1px solid red'}}>
                        <NavigationLinks title={'About as'} links={links} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={3} style={{border: '1px solid red'}}>
                        <NavigationLinks title={'About as'} links={links} direction="column" />
                    </Grid>
                </Grid>
            {/*/!*<Container>*!/*/}
            {/*    <StyledToolbar style={{border: '1px solid red'}}>*/}
            {/*        <Logo img={logoImg} title={'Excoin'}/>*/}
            {/*        <Grid*/}
            {/*            container*/}
            {/*            direction="row"*/}
            {/*            justify="flex-end"*/}
            {/*            alignItems="center"*/}
            {/*        >*/}
            {/*            <NavigationLinks links={links}/>*/}
            {/*            <NavigationButtons />*/}
            {/*        </Grid>*/}
            {/*    </StyledToolbar>*/}
            </Container>
        </StyledFooter>
    )
}

export default Header;
