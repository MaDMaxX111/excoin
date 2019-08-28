import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider as MaterialUiThemeProvider} from "@material-ui/styles";
import {ThemeProvider} from 'styled-components';
import theme from "./theme";
import { store } from './redux/store';
import MainContainer from './MainContainer';
const App = () => {

    return (
        <Provider store={store}>
            <MaterialUiThemeProvider theme={theme}>
                <CssBaseline/>
                <ThemeProvider theme={theme} injectFirst>
                    <MainContainer />
                </ThemeProvider>
            </MaterialUiThemeProvider>
        </Provider>
    );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App
