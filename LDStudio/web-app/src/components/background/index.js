import React, {Component}   from 'react';
import PropTypes            from 'prop-types'
import { styled }           from '@material-ui/styles';

import BackgroundElement    from './BackgroundElement';

const Background = styled(BackgroundElement)({
    root: {
        height: '100vh',
        position: 'fixed',
        width: '100vw',
        zIndex: -1,
    }
});

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
        const {backgroundList} = this.props;

        return (
            <div>
                {backgroundList.map(background => (
                    <Background  background={background.value} key={background.id} visible={background.isVisible} />
                ))}
            </div>
        );
    }
}

export default BackgroundComponent;