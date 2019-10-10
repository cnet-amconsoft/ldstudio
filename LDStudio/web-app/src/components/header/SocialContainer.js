import React, {Children} from 'react';
import PropTypes    from 'prop-types';
import {Grid, IconButton } from "@material-ui/core";

const SocialContainer = ({children}) => {
    return (
        <React.Fragment>
            <Grid container spacing={1} >
                {Children.map(children, (child) => (
                    <Grid item>
                        <IconButton color="secondary" href={child.props.href}>
                            {child}
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
};

SocialContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,         // SocialLink elements
};

export default SocialContainer;