import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';

// Style hook.
const useStyles = makeStyles({
   root: {
       height: '100vh',
       overflowY: 'scroll'

   }
});

// Custom hooks.
const useScrollHandler = () => {
    let ref = useRef();
    // useEffect(() => {
    //     ref.current.addEventListener('wheel', (e) => {
    //         console.log('scroll');
    //         e.preventDefault()
    //     }, {passive: false});
    // });

    return ref;
};

// React component.
const ScrollComponent = props => {
    const
        {children} = props,
        classes = useStyles(),
        ref = useScrollHandler();

    return (
        <div ref={ref}  className={classes.root}>
            {children}
        </div>
    )
};

// Prop types.
ScrollComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ScrollComponent;
