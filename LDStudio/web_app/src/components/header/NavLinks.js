import React, {Component} from 'react';
import {object} from 'prop-types';

import * as Social from './SocialIcons';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        cursor: 'pointer',
        height: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        padding: '.1rem',
        width: theme.spacing.unit * 4,
    }
});

class SvgIcons extends Component {
    static propTypes = {
        classes: object.isRequired,
    };

    componentDidMount() {
        for (let child of this.iconContainer.children) {
            child.classList.add(this.props.classes.icon)
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root} ref={node => this.iconContainer = node}>
                <Social.Insta />
                <Social.Facebook />
                <Social.YouTube />
            </div>
        );
    }
}

export default withStyles(styles)(SvgIcons);