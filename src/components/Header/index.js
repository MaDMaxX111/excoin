import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logoImg from '../../images/Logo.png';
import Logo from './logo.js';
import NavigationLinks from './navigationlinks.js';
import NavigationButtons from './navigationbuttons.js';

import {
    StyledAppBar,
} from '../../styles/components/Header'

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
        <StyledAppBar position={'relative'}>
            <Container style={{border: '1px solid red'}}>
                <Grid container wrap={'nowrap'}>
                    <Logo img={logoImg} title={'Excoin'}/>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <NavigationLinks links={links} />
                        <NavigationButtons />
                    </Grid>
                </Grid>
            </Container>
        </StyledAppBar>
    )
}

export default Header;
