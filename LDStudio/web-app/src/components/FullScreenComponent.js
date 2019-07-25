import React from 'react';
import PropTypes        from 'prop-types';
import { withStyles }   from '@material-ui/styles';

/*------ STYLES ------*/
const styles = {
    root: {
        height: '100vh',
        overflowX: 'hidden',
        position: 'relative',
        width: '100vw',
        zIndex: 0,
    }
};

/*------ COMPONENT ------*/
const FullScreenComponent = (props) => {
    const {
        background,
        children,
        classes,
        zIndex
    } = props;

    return (
        <div className={classes.root} style={{background: background, zIndex: zIndex}}>
            {children}
        </div>
    );

};

/*------ PROPTYPES ------*/
FullScreenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.element),
    ])
};

export default withStyles(styles)(FullScreenComponent);