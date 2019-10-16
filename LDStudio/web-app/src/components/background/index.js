import React, {Component}   from 'react';
import PropTypes            from 'prop-types'
import { withStyles }           from '@material-ui/styles';

import BackgroundElement    from './BackgroundElement';
import clsx from "clsx";

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
        className:          PropTypes.string,
        endRefresh:         PropTypes.func.isRequired,
        isChanging:         PropTypes.bool.isRequired,
        image:              PropTypes.string,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            isChanging,
            endRefresh
        } = this.props;

        if (isChanging) endRefresh()
    }

    render() {
        const {classes, className, image, backgroundList} = this.props;

        return (
            <div className={clsx(classes.root, className)}>
                {backgroundList.map(background => (
                    <BackgroundElement  background={image || background.value} key={background.id} visible={background.isVisible} />
                ))}
            </div>
        );
    }
}

export default withStyles(styles,{withTheme: true})(BackgroundComponent);