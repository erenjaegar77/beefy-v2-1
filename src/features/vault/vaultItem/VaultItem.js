import React from 'react';
import {makeStyles, Paper, Typography} from '@material-ui/core';
import styles from './styles';
import LinkButton from '../../../components/linkButton/LinkButton';

const useStyles = makeStyles(styles);

const VaultItem = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.cardContainer}>
            <div className={classes.cardHeader}>
                <div>
                    <div>
                        <Typography className={classes.cardTitle}>BUSD</Typography>
                    </div>
                    <div>
                        <Typography className={classes.cardSubtitle}>Asset details</Typography>
                    </div>
                </div>
                <div className={classes.cardActions}>
                    <LinkButton href="#" text="Website" />
                    <LinkButton href="#" text="Website" />
                </div>
            </div>
            <div className={classes.cardContent}>
                <Typography>
                    Binance USD (BUSD) is a 1:1 USD-backed stable coin issued by Binance (in
                    partnership with Paxos), Approved and regulated by the New York State Department
                    of Financial Services (NYDFS), The BUSD Monthly Audit Report can be viewed from
                    the official website.
                </Typography>
            </div>
        </Paper>
    );
};

export default VaultItem;
