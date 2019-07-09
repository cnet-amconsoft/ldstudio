import React, {Component}   from 'react';
import PropTypes            from 'prop-types'
import { withStyles }           from '@material-ui/styles';

import BackgroundElement    from './BackgroundElement';

const styles = {
    root: {
        height: '100vh',
        overflowX: 'hidden',
        position: 'fixed',
        width: '100vw',
        zIndex: -1,
    }
};

class BackgroundComponent extends Component {
    static propTypes = {
        backgroundList:     PropTypes.arrayOf(PropTypes.object).isRequired,
        endRefresh:         PropTypes.func.isRequired,
        isChanging:         PropTypes.bool.isRequired,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isChanging, endRefresh} = this.props;
        if (isChanging) endRefresh()
    }

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

export default withStyles(styles)(BackgroundComponent);