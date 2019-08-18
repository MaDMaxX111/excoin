import React from 'react';
import { hot } from 'react-hot-loader';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MaterialUiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import { AppStyledContainer } from './styles/App';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <MaterialUiThemeProvider theme={theme}>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <AppStyledContainer>
                        <Header/>
                        <div className={'content'}>Class cont</div>
                        <Footer />
                    </AppStyledContainer>
                </ThemeProvider>
            </MaterialUiThemeProvider>
        </>
    );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App

