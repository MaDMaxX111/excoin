import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import AppLocale from "./languageProvider";
import { AppStyledContainer, ContentWrap } from "./styles/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBanner from "./components/MainBanner";
import CallToActon from "./components/CallToActon";
import LatestNews from "./components/LatestNews";
import Features from "./components/Features";
import MarketsTable from "./components/MarketsTable";
import OurWallets from "./components/OurWallets";
import TabsCategories from "./components/TabsCategories";
import boot from './redux/boot';

export const MainContainer = ({ currentLanguage }) => {

    const [booting, setBooting] = useState(true)
    useEffect(() => {
        async function booting() {
            await boot();
            setBooting(false);
        }
        booting();
    }, []);

    const currentAppLocale = AppLocale[currentLanguage]

    return (
        !booting ?
        <IntlProvider locale={currentLanguage} messages={currentAppLocale.messages}>
            <AppStyledContainer>
                <Header/>
                <ContentWrap>
                    <MainBanner />
                    <MarketsTable />
                    <Features />
                    <TabsCategories />
                    <OurWallets />
                    <LatestNews />
                    <CallToActon />
                </ContentWrap>
                <Footer/>
            </AppStyledContainer>
        </IntlProvider> : null
    )
}

MainContainer.propTypes = {
    currentLanguage: PropTypes.string,
};


function mapStateToProps(state) {
    const { Language } = state;
    const { currentLanguage } = Language || {}
    return {
        currentLanguage,
    }
}

export default connect(mapStateToProps)(MainContainer);
