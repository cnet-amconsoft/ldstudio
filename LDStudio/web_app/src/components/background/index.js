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
        backgroundList: PropTypes.arrayOf(PropTypes.string).isRequired,
        classes:            PropTypes.object.isRequired,
    };

    render() {
        const {classes, backgroundList} = this.props;

        return (
            <div className={classes.root}>
                {backgroundList.map(background => (
                    <BackgroundElement  background={background.value} key={background.id} visible={background.isVisible} />
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(BackgroundComponent)