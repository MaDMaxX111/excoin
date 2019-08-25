import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import {FormattedMessage} from "react-intl";
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
} from '../../styles/components/Footer';

import Randomizeincrement from './randomizeincrement.js';

import { FooterMenus } from '../../routes/menu';
import { PHONE_CONTACT, EMAIL_CONTACT } from '../../constants/contact'
const Header = () => {
    return (
        <StyledFooter>
            <Container>
                <Grid container position={'relative'} spacing={8}>
                    <Grid item md={4} lg={3} xs={12}>
                        <Logo img={logoImg} title={'Excoin'}/>
                    </Grid>
                    {FooterMenus.map((menu, key) =>(
                        <Grid item md={4} lg={2} xs={12} key={key}>
                            <NavigationLinks title={menu.title} links={menu.links} direction="column" />
                        </Grid>
                    ))}
                    <Grid item md={4} lg={3} xs={12}>
                        <StyledNav direction={'column'}>
                            <Typography variant={'h3'}><FormattedMessage id={'title.contactUs'}/></Typography>
                            <StyledMenuItem><FormattedMessage id={'text.email'}/>{': '}<Link component={'a'} href={`mailto:${EMAIL_CONTACT}`} >{EMAIL_CONTACT}</Link></StyledMenuItem>
                            <StyledMenuItem><FormattedMessage id={'text.phone'}/>{': '}<Link component={'a'} href={`tel:${PHONE_CONTACT}`} >{PHONE_CONTACT}</Link></StyledMenuItem>
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
                            {`@ ${new Date().getFullYear()} ${packageJson.author.name}.`} <FormattedMessage id={'text.copyRight'}/>
                        </Grid>
                        <Grid item xs={12} md={6} container justify={'flex-end'}>
                            <StyledInformationWrap>
                                <li>
                                    <FormattedMessage
                                        id={'text.activeTraders'}
                                        values={{
                                            counter: <Randomizeincrement initialValue={parseInt(39151)} />
                                        }}
                                    />
                                </li>
                                <li>
                                    <FormattedMessage
                                        id={'text.btcVolume'}
                                        values={{
                                            counter: <Randomizeincrement initialValue={parseInt(4191)} />
                                        }}
                                    />
                                </li>
                            </StyledInformationWrap>
                        </Grid>
                    </Grid>
                </Container>
            </StyledCopyRight>
        </StyledFooter>
    )
}

export default Header;
