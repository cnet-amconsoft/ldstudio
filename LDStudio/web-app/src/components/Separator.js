import React from "react";
import PropTypes from "prop-types";

import {makeStyles, createStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => createStyles({
    root: {
        flexGrow: 0,
        maxWidth: '100%',
        flexBasis: '100%',
        height: spacing => theme.spacing(spacing),
    }
}));

const Separator = ({spacing}) => {
    const classes = useStyles(spacing);

    return (
        <div className={classes.root}/>
    )
};

Separator.propTypes = {
    spacing: PropTypes.number.isRequired,
};

export default Separator;