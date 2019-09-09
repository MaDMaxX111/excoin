import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#556cd6',
        text: '#fff',
        textHover: '#8E94A6',
        textHoverBlue: '#1652f0',
        textBlack: '#000',
        textGrey: '#5F5F5F',
        textLightGrey: '#e8e9eb',
        darkBlue: '#1C2437',
        lightGrey: '#edeef0'
    },
    secondary: {
        main: '#19857b',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#fff',
        defaultTransparent: 'rgba(255, 255, 255, 0.078)',
        main: '#1B1E63',
        blue: '#2d3674',
        blueFooter: '#1f2738',
        lightBlue: '#1652f0',
    },
    border: {
      blue: '#2d3674',
      darkblue: '#313848',
    },
    common: {
        green: '#00c162',
        red: '#dc0000',
        greenTransparent: 'rgb(0, 193, 98, 0.102)',
        redTransparent: 'rgb(220, 0, 0, 0.102)',
    }
};

const theme = createMuiTheme({
    palette,
    transition: {
        main: 'all 0.3s ease, color 0.2s linear',
    },
    boxShadow: {
        main: '0px 1px 5px rgba(0,0,0,.03)',
        big: '0px 20px 45px 0px rgba(0, 0, 0, 0.05)'
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
            h2: {
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '50px',
                color: palette.primary.text,
                fontWeight: 700,
                letterSpacing: 1.3,
            },
            h3: {
                fontFamily: 'Quicksand, sans-serif',
            },
            body1: {
                fontFamily: 'Quicksand, sans-serif',
                color: palette.primary.text,
                fontSize: '17px',
                lineHeight: 1.6,
            }
        },
        MuiContainer: {
            root: {
                'padding-left': '16px',
                'padding-right': '16px',
            },
        },
        MuiListItem: {
            button: {
                '&:hover': {
                    backgroundColor: 'inherit',
                }
            }
        },
        MuiFormHelperText: {
            root: {
                fontFamily: 'Quicksand, sans-serif',
            }
        }
    },
});
export default theme;
