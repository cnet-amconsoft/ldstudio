import React from "react";
import PropTypes from "prop-types";

import {
    GridList,
    GridListTile,
    withStyles,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

const styles = theme => ({
    gridItem: {
        background: 'rgba(255, 255, 255, 0.16)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxSizing: 'border-box',
        height: '100%',
    },
    gridList: {
        width: '100%',
    },
    skeleton: {
        backgroundColor: 'rgba(255,255,255,0.15)',
    }
});

const SkeletonGenerator = ({amountOfElements, classes}) => {
    let collection = [];

    if (!amountOfElements) amountOfElements = 1;

    // To Do: Use media query (https://material-ui.com/components/use-media-query/)
    // to reduce amount of elements with mobile platform.

    for (let i = 0; i < amountOfElements; i++) {
        const element = (
            <GridListTile cols={1} >
                <div className={classes.gridItem}>
                    <Skeleton variant="rect" height="100%" className={classes.skeleton} disableAnimate/>
                </div>
            </GridListTile>
        );
        collection.push(element);
    }

    return <GridList className={classes.gridList} cols={4} spacing={2}>{collection}</GridList>
};

const CategoryGallery = props => {
    const {classes} = props;

    return (
        <SkeletonGenerator amountOfElements={12} classes={classes}/>
    )
};

CategoryGallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

SkeletonGenerator.propTypes = {
    amountOfElements: PropTypes.number,
};

export default withStyles(styles,{withTheme: true})(CategoryGallery);