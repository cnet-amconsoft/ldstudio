import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './../App.css'

import Logo from './Logo';
import NavLinks from './NavLinks';

const styles = theme => ({
    root: {
        backgroundColor: 'black',
        position: 'fixed',
        width: '100vw',
    }
});

function Header(props) {
    const {classes} = props;

    return (
        <header id={'header'} className={classes.root}>
            <nav>
                <Grid container justify='center' >
                    <Grid
                        className={'App-container'}
                        item
                        xs
                    >
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item >
                                <Logo href='/' />
                            </Grid>
                            <Grid item >
                                <NavLinks/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </nav>
        </header>
    );
}

export default withStyles(styles)(Header);