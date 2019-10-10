import React from "react";
import PropTypes from "prop-types";

import {makeStyles, createStyles} from "@material-ui/styles";
import clsx from 'clsx';

const useStyles = makeStyles(theme => createStyles({
    root: {
        flexGrow: 0,
        maxWidth: '100%',
        flexBasis: '100%',
        height: spacing => theme.spacing(spacing),
    }
}));

const Separator = props => {
    const {className, spacing} = props,
          classes = useStyles(spacing);

    return (
        <div className={clsx(classes.root, className)} />
    )
};

Separator.propTypes = {
    className: PropTypes.object,
    spacing: PropTypes.number.isRequired,
};

export default Separator;