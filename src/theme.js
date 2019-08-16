import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#556cd6',
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
    },
};
const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Raleway'),
    local('Raleway-Regular'),
  `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    palette,
    spacing: 4,
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
    },
});
export default theme;
