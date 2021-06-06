import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './styles';

const useStyles = makeStyles(styles);

const LinkButton = ({text, link}) => {
    const classes = useStyles();
    return (
        <a className={classes.container}>
            <Typography className={classes.text}>Website</Typography>
            <ArrowForwardIosIcon className={classes.icon} />
        </a>
    );
};

export default LinkButton;
