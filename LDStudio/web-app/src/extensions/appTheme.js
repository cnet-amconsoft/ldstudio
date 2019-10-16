import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {yellow} from "@material-ui/core/colors";

let theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`,
    gradients: {
        gold0: '#DEAF38',
        gold1: 'linear-gradient(94.09deg, #9E7200 5.88%, #EEC55D 22.64%, #A9821F 36.35%, #9A7311 39.29%, #E9C15C 56.52%, #F0DC74 65.27%, #E9C15C 71.58%, #B08007 89.8%, #AC7E0C 101.32%)',
        gold2: 'linear-gradient(177.73deg, #C18A32 0%, #F3D764 12.15%, #FCFCD1 25.97%, #F3D764 39.23%, #AB6E1D 51.38%, #F3D764 62.43%, #FCFCD1 75.69%, #F3D764 88.95%, #CF9F40 99.99%, #AB6E1D 100%)',
        gold3: 'linear-gradient(157.28deg, #AB6E1D 6.98%, #F3D764 29.33%, #FCFCD1 53.55%, #F3D764 77.16%, #AB6E1D 99.77%)',
        gold4: 'linear-gradient(40.6deg, #AB6E1D 14.66%, #F3D764 24.54%, #FCFCD1 32.9%, #F3D764 40.12%, #AB6E1D 49.24%, #F3D764 57.98%, #FCFCD1 66.72%, #F3D764 73.94%, #AB6E1D 85.34%)',
    },
    palette: {
        primary: {
            light: '#ffffff',
            main: '#eeeeee',
            dark: '#bcbcbc',
        },
        secondary: yellow,
        text:{
            primary:    'rgba(255,255,255,0.87)',
            secondary:  'rgba(255,255,255,0.54)',
            disabled:   'rgba(255,255,255,0.38)',
            hint:       'rgba(255,255,255,0.38)',
        },
        divider:        'rgba(255,255,255,0.12)',
        background: {
            paper: '#212121'
        }
    },
    typography: {
        h1: { fontFamily: '"Exo 2"' },
        h2: { fontFamily: '"Exo 2"' },
        h3: { fontFamily: '"Exo 2"' },
        h4: { fontFamily: '"Exo 2"' },
        h5: { fontFamily: '"Exo 2"' },
        h6: { fontFamily: '"Exo 2"' },
    }
});
theme = responsiveFontSizes(theme);

export default theme;