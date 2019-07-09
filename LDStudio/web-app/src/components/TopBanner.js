import React            from 'react';
import PropTypes        from 'prop-types';
import { withStyles }   from "@material-ui/styles";


const styles = theme => ({
   root: {

   }
});

const TopBanner = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>

        </div>
    )
};

TopBanner.propTypes = {

};

export default withStyles(styles)(TopBanner);