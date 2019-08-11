import React            from 'react';
import PropTypes        from 'prop-types';
import { withStyles }   from "@material-ui/styles";
import * as LDS from "../LDS";


const styles = theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },
    inner: {
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
    },
    title: {
        width: '36rem'
    },
    hr: {
        border: 'unset',
        background: theme.gradients.gold2,
        height: theme.spacing(.5),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        width: '100%',
    },
    slogan: {
        all: 'unset',
        color: theme.gradients.gold0,
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: '400',
        justifySelf: 'end',
        letterSpacing: '.3em',
        textTransform: 'uppercase',
    }
});

const TopBanner = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
                <LDS.LoveDanceStudio className={classes.title}/>
                <hr className={classes.hr}/>
                <p className={classes.slogan}>Endless love story</p>
            </div>
        </div>
    )
};

TopBanner.propTypes = {

};

export default withStyles(styles, {withTheme: true})(TopBanner);