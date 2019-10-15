import React, {Children} from "react";
import PropTypes from "prop-types";

import {
    Grid,
    Typography,
    withStyles
    } from "@material-ui/core";

const styles = theme => ({
    title: {
        color: theme.palette.text.secondary,
        textTransform: 'uppercase',
    }
});

const CategorySection = ({children, classes, name}) => (
    <Grid container spacing={10} justify={'space-between'}>
        <Grid item xs={12}>
            <Typography className={classes.title} variant={'h5'}>
                {name}
            </Typography>
        </Grid>
        {Children.map(children, (value, index) => (
            <Grid item xs={12} md={6} lg={4} container>
                {value}
            </Grid>
        ))}
    </Grid>
);

CategorySection.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(CategorySection);