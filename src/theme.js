import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#556cd6',
        text: '#fff',
        textHover: '#8E94A6',
        textHoverBlue: '#1652f0',
    },
    secondary: {
        main: '#19857b',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#fff',
        main: '#1a2062',
        blue: '#2d3674',
        blueFooter: '#1f2738',
    },
    border: {
      blue: '#2d3674',
      darkblue: '#313848',
    },
};

const theme = createMuiTheme({
    palette,
    transition: {
        main: 'all 0.3s ease, color 0.2s linear',
    },
    spacing: 4,
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1200,
            xl: 1920,
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: 'Quicksand, sans-serif',
                },
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: palette.background.main,
            },
        },
        MuiPaper: {
            elevation4: {
                boxShadow: 'none',
            }
        },
        MuiTypography: {
            h3: {
                fontFamily: 'Quicksand, sans-serif',
            }
        },
        MuiContainer: {
            root: {
                'padding-left': '16px',
                'padding-right': '16px',
            },
        }
    },
});
export default theme;
