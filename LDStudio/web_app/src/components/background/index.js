import React, {Component}   from 'react';
import PropTypes from 'prop-types'
import { withStyles }       from '@material-ui/styles';

import BackgroundElement    from './BackgroundElement';

const styles = {
    root: {
        height: '100vh',
        position: 'fixed',
        width: '100vw',
        zIndex: -1,
    }
};

class BackgroundComponent extends Component {
    static propTypes = {
        activeBackground:   PropTypes.string.isRequired,
        orderOfBackgrounds: PropTypes.arrayOf(PropTypes.string).isRequired,
        classes:            PropTypes.object.isRequired,
    };

    render() {
        const {classes, orderOfBackgrounds} = this.props;

        return (
            <div className={classes.root}>
                {orderOfBackgrounds.map(background => (
                    <BackgroundElement  background={background} visible />
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(BackgroundComponent)