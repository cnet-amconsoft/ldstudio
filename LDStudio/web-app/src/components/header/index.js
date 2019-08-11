import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './../App.css'

import Logo from './Logo';
import NavLinks from './NavLinks';
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
    root: {
        backgroundColor: 'black',
        position: 'fixed',
        width: '100vw',
        zIndex: theme.zIndex.appBar,
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between'
    },
});

function Header(props) {
    const {classes} = props;

    return (
        <header id={'header'} className={classes.root}>
            <Container maxWidth={"lg"}>
                <nav>
                    <div className={classes.grid}>
                        <Logo href='/' />
                        <NavLinks/>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default withStyles(styles, {withTheme: true})(Header);