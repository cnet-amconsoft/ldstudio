import React, {useEffect, useRef} from 'react';
import {string, bool, func} from "prop-types";
import { makeStyles } from '@material-ui/styles';
import {backgroundAnimationDuration} from 'config'

const useStyles = makeStyles({
    root: {
        backgroundPosition: 'center top !important',
        backgroundSize: 'cover !important',
        height: '100%',
        opacity: 0,
        position: 'absolute',
        top: 0,
        transitionDuration: `${backgroundAnimationDuration}ms`,
        transitionProperty: 'opacity',
        width: '100%',
    },
    active: {
        opacity: 1,
    }
});

const BackgroundElement = (props) => {
    const ref = useRef(null),
        classes = useStyles();
    let {background, loaded, visible} = props;

    useEffect(() => {
        const classList = ref.current.classList;
        visible ? classList.add([classes.active]) : classList.remove([classes.active]);
    });


    if (!background.startsWith('#')){
        background = `url(${background})`
    }

    return (
        <div className={classes.root} ref={ref} style={{background: background}} />
    );
};

BackgroundElement.propTypes = {
    background: string.isRequired,
    loaded: func.isRequired,
    visible: bool,
};

export default BackgroundElement;