import React, {useState} from 'react';
import PropTypes from "prop-types";

import {
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    withStyles,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = theme => ({
    root: {

    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const CardInfoSideBar = props => {
    const {
        classes,
        sideBarOpen,
        setSideBarOpen
    } = props;

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' || event.key === 'Tab' || event.key === 'keyup') {
            return;
        }

        setSideBarOpen(open);
    };

    return (
            <Drawer anchor="right" open={sideBarOpen} onClose={toggleDrawer(false)} transitionDuration={150}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
    );
};

CardInfoSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    sideBarOpen: PropTypes.bool.isRequired,
    setSideBarOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(CardInfoSideBar);