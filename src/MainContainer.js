import React from "react";
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

export const MainContainer = ({ currentLanguage }) => {

    const currentAppLocale = AppLocale[currentLanguage]

    return (
        <IntlProvider locale={currentLanguage} messages={currentAppLocale.messages}>
            <AppStyledContainer>
                <Header/>
                <ContentWrap>
                    <MainBanner />
                    <Features />
                    <LatestNews />
                    <CallToActon />
                </ContentWrap>
                <Footer/>
            </AppStyledContainer>
        </IntlProvider>
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
