import React, {useEffect, useRef} from 'react';
import {string, bool} from "prop-types";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        height: '100%',
        opacity: 0,
        position: 'absolute',
        top: 0,
        transition: 'opacity .3s',
        width: '100%',
    },
    active: {
        opacity: 1,
    }
});

export default function BackgroundElement(props) {
    const backgroundItem = useRef(null),
        classes = useStyles(),
        {background, visible} = props;

    useEffect(() => {
        const classList = backgroundItem.current.classList;
        visible ? classList.add([classes.active]) : classList.remove([classes.active]);
    });

    return (
        <div className={classes.root} ref={backgroundItem} style={{background: background}} />
    );
}

BackgroundElement.propTypes = {
    background: string.isRequired,
    visible: bool,
};