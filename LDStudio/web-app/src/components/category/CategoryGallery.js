import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";

import {
    GridList,
    GridListTile,
    withStyles,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

const styles = theme => ({
    gridItem: {
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        border: `1px solid ${theme.palette.grey["500"]}`,
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
        height: '100%',
    },
    gridList: {
        width: '100%',
    },
    skeleton: {
        backgroundColor: 'rgba(255,255,255,0.20)',
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
                    <Skeleton variant="rect" height="100%" className={classes.skeleton}/>
                </div>
            </GridListTile>
        );
        collection.push(element);
    }

    return <GridList className={classes.gridList} cols={4} spacing={4}>{collection}</GridList>
};

const ImageListGenerator = ({classes, images, fetching}) => {
    let collection = [];

    console.log(images, fetching);

    if (images && !fetching) {
        for (let image of images) {
            const element = (
                <GridListTile cols={1} >
                    <div className={classes.gridItem} style={{backgroundImage: `url(${image})`}} />
                </GridListTile>
            );
            collection.push(element);
        }
    }

    return <GridList className={classes.gridList} cols={4} spacing={4}>{collection}</GridList>
};

const CategoryGallery = props => {
    const {classes, images, fetching, setFetching} = props;

    console.log(fetching);

    return (
        <Fragment>
            {fetching ? (
                <SkeletonGenerator amountOfElements={12} classes={classes}/>
            ) : (
                <ImageListGenerator {...props} />
            )}
        </Fragment>
    )
};

CategoryGallery.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetching: PropTypes.bool,
};

ImageListGenerator.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SkeletonGenerator.propTypes = {
    classes: PropTypes.object.isRequired,
    amountOfElements: PropTypes.number,
};

export default withStyles(styles,{withTheme: true})(CategoryGallery);