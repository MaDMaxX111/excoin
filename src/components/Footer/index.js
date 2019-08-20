import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import logoImg from '../../images/Logo.png';
import Logo from '../Header/logo.js';
import NavigationLinks from '../Header/navigationlinks';
import { StyledNav } from '../../styles/components/Header';
import  SocialButtons from './socialbuttons';
import  SupportButton from './supportbutton';
import packageJson from '../../../package.json';
import {
    StyledFooter,
    StyledMenuItem,
    StyledCopyRight,
    StyledInformationWrap,
} from '../../styles/components/Footer'

const links = {
    'About Us': [
        {
            text: 'Our Team',
            href: '/',
        },
        {
            text: 'Our Company',
            href: '/',
        },
        {
            text: 'Contact Us',
            href: '/',
        },
        {
            text: 'Token Listing',
            href: '/',
        },
        {
            text: 'Join Us',
            href: '/',
        },
    ],
    'Learn': [
        {
            text: 'Legal',
            href: '/',
        },
        {
            text: 'Terms of Use',
            href: '/',
        },
        {
            text: 'AML&CFT',
            href: '/',
        },
        {
            text: 'Privacy Policy',
            href: '/',
        },
    ],
    'Help': [
        {
            text: 'Support',
            href: '/',
        },
        {
            text: 'API Support',
            href: '/',
        },
        {
            text: 'Coin/Token Listing',
            href: '/',
        },
        {
            text: 'Partnership',
            href: '/',
        },
    ],
}
const Header = () => {
    return (
        <StyledFooter>
            <Container>
                <Grid container position={'relative'} spacing={8}>
                    <Grid item md={4} lg={3} xs={12}>
                        <Logo img={logoImg} title={'Excoin'}/>
                    </Grid>
                    <Grid item md={4} lg={2} xs={12}>
                        <NavigationLinks title={'About Us'} links={links['About Us']} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={2} xs={12}>
                        <NavigationLinks title={'Learn'} links={links['Learn']} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={2} xs={12}>
                        <NavigationLinks title={'Help'} links={links['Help']} direction="column" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={12}>
                        <StyledNav direction={'column'}>
                            <Typography variant={'h3'}>{'Contact Us'}</Typography>
                            <StyledMenuItem>{'Email: '}<Link component={'a'} href={'mailto:info.excoin@gmail.com'} >info.excoin@gmail.com</Link></StyledMenuItem>
                            <StyledMenuItem>{'Phone: '}<Link component={'a'} href={'tel:+99 5589 54789'} >+99 5589 54789</Link></StyledMenuItem>
                            <SocialButtons />
                        </StyledNav>
                    </Grid>
                    <SupportButton />
                </Grid>
            </Container>
            <StyledCopyRight>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6} container alignItems={'center'}>
                            {`@ ${new Date().getFullYear()} ${packageJson.author.name}. All Right Reserved`}
                        </Grid>
                        <Grid item xs={12} md={6} container justify={'flex-end'}>
                            <StyledInformationWrap>
                                <li><span>39151</span> Active Traders</li>
                                <li><span>4191 BTC</span> 24h Volume</li>
                            </StyledInformationWrap>
                        </Grid>
                    </Grid>
                </Container>
            </StyledCopyRight>
        </StyledFooter>
    )
}

export default Header;
