import React, {Fragment, useRef, useState} from "react";
import PropTypes from "prop-types";

import clsx from 'clsx';
import {withStyles} from "@material-ui/core";

import {
    Card,
    CardActions,
    CardActionArea,
    CardMedia,
    CardContent,
    Collapse,
    ClickAwayListener,
    Grid,
    IconButton,
    Typography
    } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Separator from "../Separator";
import CategoryGallery from "./CategoryGallery";

const styles = theme => ({
    card: {
        background: 'transparent',
        boxShadow: 'unset',
        overflow: 'visible',
        position: 'relative',
        zIndex: 0,
    },
    cardAction: {
        paddingTop: 0,
        paddingBottom: theme.spacing(1),
    },
    cardBody: {
        background: theme.palette.grey["900"],
        border: `1px solid ${theme.palette.grey["700"]}`,
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        position: 'relative',
        width: '83%',
        zIndex: -2,
    },
    cardDescription: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
    },
    cardDescriptionFull: {
        WebkitLineClamp: 'unset',
    },
    cardMedia: {
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 0,
        paddingTop: '62.5%', // 16:10
        borderRadius: 5,
        margin: 2,
        position: 'relative',
        '&:before': {
            position: 'absolute',
            background: theme.gradients.gold4,
            borderRadius: 7,
            boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.5)',
            content: '""',
            display: 'block',
            top: -2,
            left: -2,
            height: 'calc(100% + 4px)',
            width: 'calc(100% + 4px)',
            zIndex: -1,
        },
    },
    expand: {
        color: theme.palette.text.secondary,
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

const CategoryCard = props => {
    const {
        classes,
        description,
        disabled,
        image,
        title,
        } = props,
        cardRef = useRef(null);

    const       // States declaration.
        [expanded, setExpanded] = useState(false),
        [isDialogOpen, setDialog] = useState(false);

    const expandEndListener = e => e.scrollIntoView({behavior: "smooth", block: "center"});

    return (
        <Fragment>
            <Grid item>
                <Card className={classes.card} ref={cardRef}>
                    <CardActionArea disabled={disabled} onClick={() => setDialog(true)}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={image}
                            title="Открыть галерею"
                        />
                    </CardActionArea>
                    <ClickAwayListener onClickAway={() => setExpanded(false)}>
                        <div className={classes.cardBody}>
                            <CardContent>
                                <Typography color="textPrimary" variant="h6">
                                    Венский бал
                                </Typography>
                                <Separator spacing={3}/>
                                <Typography
                                    className={clsx(classes.cardDescription, {
                                        [classes.cardDescriptionFull]: expanded,
                                    })}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction} disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    title="Просмотр дополнительной информации"
                                    onClick={() => setExpanded(!expanded)}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                                onEntered={expandEndListener}
                            >
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </div>

                    </ClickAwayListener>
                </Card>
            </Grid>
            <CategoryGallery isOpen={isDialogOpen}
                             image={image}
                             onClose={() => setDialog(false)} />
        </Fragment>
    )
};

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default withStyles(styles, {withTheme: true})(CategoryCard);