import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    spacing: factor => `${0.25 * factor}rem`,
    gradients: {
        gold0: '#DEAF38',
        gold1: 'linear-gradient(94.09deg, #9E7200 5.88%, #EEC55D 22.64%, #A9821F 36.35%, #9A7311 39.29%, #E9C15C 56.52%, #F0DC74 65.27%, #E9C15C 71.58%, #B08007 89.8%, #AC7E0C 101.32%)',
        gold2: 'linear-gradient(177.73deg, #C18A32 0%, #F3D764 12.15%, #FCFCD1 25.97%, #F3D764 39.23%, #AB6E1D 51.38%, #F3D764 62.43%, #FCFCD1 75.69%, #F3D764 88.95%, #CF9F40 99.99%, #AB6E1D 100%)',
    }
});

export default theme;