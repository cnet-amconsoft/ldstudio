import React, {Component} from 'react';
import {object} from 'prop-types';

import SocialContainer, {Facebook, Insta, YouTube} from './SocialIcons';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        cursor: 'pointer',
        display: 'block',
        height: '1.8rem',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        padding: '.1rem',
        width: '1.8rem',
    }
});

class SvgIcons extends Component {
    static propTypes = {
        classes: object.isRequired,
    };

    componentDidMount() {
        for (let child of this.iconContainer.querySelectorAll('svg')) {
            child.classList.add(this.props.classes.icon)
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root} ref={node => this.iconContainer = node}>
                <SocialContainer>
                    <Insta href='insta' />
                    <Facebook href="facebook" />
                    <YouTube href="#" />
                </SocialContainer>
            </div>
        );
    }
}

export default withStyles(styles)(SvgIcons);