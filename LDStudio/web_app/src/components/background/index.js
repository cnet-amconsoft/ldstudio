import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';

import * as Behavior from './backgroundBehavior';
import BackgroundElement from './BackgroundElement';

const styles = {
    root: {
        height: '100vh',
        position: 'fixed',
        width: '100vw',
        zIndex: -1,
    }
};

class BackgroundContainer extends Component {

    state = {
        isActive1: false,
        isActive2: false,
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <BackgroundElement background={'#000000'} visible={this.state.isActive1} />
                <BackgroundElement background={'grey'} visible={this.state.isActive2} />
            </div>
        )
    }
}

export default withStyles(styles)(BackgroundContainer)