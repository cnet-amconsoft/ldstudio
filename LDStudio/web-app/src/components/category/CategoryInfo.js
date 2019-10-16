import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Background from "../../containers/BackgroundContainer";

import FullScreenComponent from "../FullScreenComponent";
import { ArrowBackLog, MoreVarnt } from "../CustomIcons";
import {
    withStyles,
    AppBar,
    Box,
    Container,
    Dialog,
    Divider,
    Fade,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';

import {infoDialogTimespan} from 'config';
import Separator from "../Separator";
import CategoryGallery from "./CategoryGallery";
import CardInfoSideBar from "./CardInfoSideBar";

const styles = theme => ({
    fixedContainer: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: 'max-content auto',
        height: '100vh',
        overflow: 'hidden',
    },
    scrollContainer: {
        overflow: 'auto',
    },
    appBar: {
        all: "unset",
        position: 'relative',
    },
    background: {
        '&:after': {
            background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.5) 100%)',
            content: '""',
            height: '100%',
            opacity: 0.8,
            position: 'absolute',
            width: '100%',
        }
    },
    title: {
        //marginLeft: theme.spacing(2),
        flex: 1,
        textTransform: 'uppercase',
    },
    separator: {
        background: theme.palette.grey["700"]
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade direction="up" ref={ref} {...props} timeout={infoDialogTimespan}/>;
});

const CategoryInfo = props => {
    const {
        classes,
        isOpen,
        image,
        onClose,
        } = props;
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleClose = () => onClose();
    const toggleSlideBar = open => {
        setSideBarOpen(open === undefined ? !sideBarOpen : open);
    };


    return (
        <Dialog fullScreen
                open={isOpen}
                onClose={handleClose}
                TransitionComponent={Transition}>
            <FullScreenComponent>
                <Background image={image} className={classes.background}/>
                <Container maxWidth="lg" className={classes.fixedContainer} >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="primary" onClick={handleClose} aria-label="close">
                                <ArrowBackLog />
                            </IconButton>
                            <Typography variant="h6" className={classes.title} align="center" color="textPrimary">
                                венский бал
                            </Typography>
                            <IconButton color="primary" aria-label="toggle" onClick={toggleSlideBar}>
                                <MoreVarnt />
                            </IconButton>
                        </Toolbar>
                        <Divider variant="middle" />
                    </AppBar>
                    <Container maxWidth="md" className={classes.scrollContainer} >
                        <Box my={5}>
                            <Separator spacing={20}/>
                            <Grid container item>
                                <Typography variant="body2" component="p" color="textSecondary" align="justify">
                                    Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на
                                    название, не имеет никакого отношения к обитателям водоемов. Используется он
                                    веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида
                                    контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения
                                    такого текста исключительно демонстрационная, то и смысловую нагрузку ему
                                    нести совсем необязательно. Более того, нечитабельность текста сыграет на
                                    руку при оценке качества восприятия макета.
                                </Typography>
                            </Grid>
                            <Separator spacing={25}/>
                            <CategoryGallery/>
                        </Box>
                    </Container>
                </Container>
                <CardInfoSideBar setSideBarOpen={toggleSlideBar} sideBarOpen={sideBarOpen} />
            </FullScreenComponent>
        </Dialog>
    );
};

CategoryInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(CategoryInfo);
