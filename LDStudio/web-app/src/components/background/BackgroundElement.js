import React, {Component, useEffect, useRef} from 'react';
import {string, bool} from "prop-types";

import {fadeIn} from "react-animations";
import { makeStyles } from '@material-ui/styles';
import {backgroundAnimationDuration} from 'config';

const useStyles = makeStyles({
    '@keyframes fadeIn': fadeIn,
    root: {
        animationDuration: backgroundAnimationDuration,
        animationFillMode: 'forwards',
        backgroundPosition: 'center top !important',
        backgroundSize: 'cover !important',
        height: '100%',
        position: 'absolute',
        opacity: 0,
        top: 0,
        width: '100%',
    },
    active: {
        animationName: '$fadeIn'
    }
});

const BackgroundElement = props => {
    const ref = useRef(null),
        classes = useStyles();
    let {background, visible} = props;

    useEffect(() => {
        const classList = ref.current.classList;

        visible ? classList.add([classes.active]) : classList.remove([classes.active]);
    });

    if (!background.startsWith('#')) background = `url(${background})`;

    return <div className={classes.root} ref={ref} style={{background: background}}/>;
};

BackgroundElement.propTypes = {
    background: string.isRequired,
    visible: bool,
};

export default BackgroundElement;