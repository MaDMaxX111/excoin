import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Divider from '@material-ui/core/Divider';
import logoImg from '../../images/Logo.png';
import Logo from './logo.js';
import NavigationLinks from './navigationlinks.js';
import NavigationButtons from './navigationbuttons.js';
import {
    StyledAppBar,
    StyledMobileMenuWrap,
} from '../../styles/components/Header'

const links = [
    {
        label: 'link.exchange',
        href: '/',
    },
    {
        label: 'link.charts',
        href: '/',
    },
    {
        label: 'link.features',
        href: '/',
    },
    {
        label: 'link.support',
        href: '/',
    },
    {
        label: 'link.news',
        href: '/',
    },
    {
        label: 'link.more',
        href: '/',
    }
];

const Header = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <StyledAppBar position={'relative'}>
            <Container>
                <Grid container wrap={'nowrap'}>
                    <Logo img={logoImg} title={'Excoin'}/>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Hidden smDown>
                            <NavigationLinks links={links} />
                            <Hidden mdDown>
                                <NavigationButtons/>
                            </Hidden>
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton
                                className={'mr-4'}
                                color="inherit"
                                aria-label="open drawer"
                                size={'medium'}
                                onClick={() => setDrawerOpen(!drawerOpen)}
                            >
                                <Menu fontSize={'large'}/>
                            </IconButton>
                        </Hidden>
                        <Hidden lgUp>
                            <Drawer
                                variant="temporary"
                                anchor={"right"}
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(!drawerOpen)}
                            >
                                <StyledMobileMenuWrap>
                                    <NavigationButtons variant={'mobile'}/>
                                    <Hidden mdUp>
                                        <Divider/>
                                        <NavigationLinks links={links} direction={'column'} variant={'mobile'}/>
                                    </Hidden>
                                </StyledMobileMenuWrap>
                            </Drawer>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        </StyledAppBar>
    )
}

export default Header;
