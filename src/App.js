import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider as MaterialUiThemeProvider} from "@material-ui/styles";
import {ThemeProvider} from 'styled-components';
import {IntlProvider} from 'react-intl';
import theme from "./theme";
import {AppStyledContainer} from './styles/App';
import Header from './components/Header';
import Footer from './components/Footer';
import languageConfig from './languageProvider/config';
import AppLocale from './languageProvider';
import {store} from './redux/store';

const App = () => {

    const languageId = languageConfig.defaultLanguage();
    const currentAppLocale = AppLocale[languageId]

    return (
        <Provider store={store}>
            <MaterialUiThemeProvider theme={theme}>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <IntlProvider locale={languageId} messages={currentAppLocale.messages}>
                        <AppStyledContainer>
                            <Header/>
                            {/*<div className={'content'}>Class cont</div>*/}
                            <Footer/>
                        </AppStyledContainer>
                    </IntlProvider>
                </ThemeProvider>
            </MaterialUiThemeProvider>
        </Provider>
    );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App

