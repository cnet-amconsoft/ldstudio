import React, {Component}   from 'react';
import PropTypes            from 'prop-types'
import delay                from 'lodash/delay';
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
        addBackground:      PropTypes.func.isRequired,
        backgroundList:     PropTypes.arrayOf(PropTypes.object).isRequired,
        isChanging:         PropTypes.bool.isRequired,
        removeBackground:   PropTypes.func.isRequired,
        toggleBackground:   PropTypes.func.isRequired,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isChanging, removeBackground, toggleBackground} = this.props;

        if (isChanging) {
            toggleBackground('bcg--3');
            delay(() => removeBackground('bcg--0'), 300)
        }

        console.log(prevProps, prevState, snapshot);
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