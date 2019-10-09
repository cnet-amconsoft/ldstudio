import React            from 'react';
import PropTypes        from 'prop-types';
import { makeStyles }   from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        // overflowX: 'hidden',
        position: 'relative',
        zIndex: 0,
    }
});

const FullContentComponent = props => {
    const classes = useStyles(),
        {children} = props;

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

FullContentComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

export default FullContentComponent;