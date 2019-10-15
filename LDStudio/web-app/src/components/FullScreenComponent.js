import React from 'react';
import PropTypes        from 'prop-types';
import { withStyles }   from '@material-ui/styles';
import clsx from 'clsx';

/*------ STYLES ------*/
const styles = {
    root: {
        height: '100vh',
        overflowX: 'hidden',
        position: 'relative',
        zIndex: 0,
    }
};

/*------ COMPONENT ------*/
const FullScreenComponent = (props) => {
    const {
        background,
        children,
        className,
        classes,
        zIndex
    } = props;

    return (
        <div className={clsx(classes.root, className)} style={{background: background, zIndex: zIndex}}>
            {children}
        </div>
    );

};

/*------ PROPTYPES ------*/
FullScreenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    className: PropTypes.string,
};

export default withStyles(styles)(FullScreenComponent);