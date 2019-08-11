import React, {Component} from 'react';
import {object, string} from 'prop-types';

import SocialContainer from './SocialContainer'
import {Facebook, Insta, YouTube} from './SocialIcons';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(-1),
        marginRight: theme.spacing(-1),
        '& svg': {
            cursor: 'pointer',
            display: 'block',
            height: '1.8rem',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            padding: theme.spacing(0.5),
            width: '1.8rem',
        },
    },
});

const SvgIcons = ({classes, className}) => {
    return (
        <div className={classes.root +' ' + className}>
            <SocialContainer>
                <Insta href='insta' />
                <Facebook href="facebook" />
                <YouTube href="#" />
            </SocialContainer>
        </div>
    );
};

SvgIcons.propTypes = {
    classes: object.isRequired,
    className: string,
};

export default withStyles(styles, {withTheme: true})(SvgIcons);