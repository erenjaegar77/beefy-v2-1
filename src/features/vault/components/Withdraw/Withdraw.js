import {
    Backdrop,
    Box,
    Button,
    Divider, Fade,
    Grid,
    IconButton,
    InputBase,
    makeStyles, Modal,
    Paper,
    Typography
} from "@material-ui/core";
import BigNumber from "bignumber.js";
import {ArrowRight, HelpOutline, ShoppingBasket} from "@material-ui/icons";
import * as React from "react";
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../../components/loader";
import {byDecimals, convertAmountToRawNumber, stripExtraDecimals} from "../../../../helpers/format";
import {isEmpty} from "../../../../helpers/utils";
import reduxActions from "../../../redux/actions";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(styles);

const Withdraw = ({item, handleWalletConnect, formData, setFormData, updateItemData, resetFormData}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {wallet, balance} = useSelector(state => ({
        wallet: state.walletReducer,
        balance: state.balanceReducer,
    }));
    const [state, setState] = React.useState({balance: 0});
    const [steps, setSteps] = React.useState({modal: false, currentStep: -1, items: [], finished: false});
    const [isLoading, setIsLoading] = React.useState(true);

    const handleInput = (val) => {
        const value = (parseFloat(val) > state.balance) ? state.balance : (parseFloat(val) < 0) ? 0 : stripExtraDecimals(val);
        setFormData({...formData, withdraw: {amount: value, max: new BigNumber(value).minus(state.balance).toNumber() === 0}});
    }

    const handleMax = () => {
        if(state.balance > 0) {
            setFormData({...formData, withdraw: {amount: state.balance, max: true}});
        }
    }

    const handleWithdraw = () => {
        const steps = [];
        if(wallet.address) {
            const amount = new BigNumber(formData.withdraw.amount).dividedBy(byDecimals(item.pricePerShare, item.tokenDecimals)).toFixed(8);
            steps.push({
                step: "withdraw",
                message: "Confirm withdraw transaction on wallet to complete.",
                action: () => dispatch(reduxActions.wallet.withdraw(
                    item.network,
                    item.earnContractAddress,
                    convertAmountToRawNumber(amount, item.tokenDecimals),
                    formData.withdraw.max
                )),
                pending: false,
            });

            setSteps({modal: true, currentStep: 0, items: steps, finished: false});
        }
    }

    const handleClose = () => {
        updateItemData();
        resetFormData();
        setSteps({modal: false, currentStep: -1, items: [], finished: false});
    }

    React.useEffect(() => {
        let amount = 0;
        if(wallet.address && !isEmpty(balance.tokens[item.earnedToken])) {
            amount = byDecimals(new BigNumber(balance.tokens[item.earnedToken].balance).multipliedBy(byDecimals(item.pricePerShare)), item.tokenDecimals).toFixed(8);
        }
        setState({balance: amount});
    }, [wallet.address, item, balance]);

    React.useEffect(() => {
        setIsLoading(balance.isBalancesLoading);
    }, [balance.isBalancesLoading]);

    React.useEffect(() => {
        const index = steps.currentStep;
        if(!isEmpty(steps.items[index]) && steps.modal) {
            const items = steps.items;
            if(!items[index].pending) {
                items[index].pending = true;
                items[index].action();
                setSteps({...steps, items: items});
            } else {
                if(wallet.action.result === 'success' && !steps.finished) {
                    const nextStep = index + 1;
                    if(!isEmpty(items[nextStep])) {
                        setSteps({...steps, currentStep: nextStep});
                    } else {
                        setSteps({...steps, finished: true});
                    }
                }
            }
        }
    }, [steps, wallet.action]);

    return (
        <React.Fragment>
            <Box p={3}>
                <Typography className={classes.balanceText}>Deposited:</Typography>
                <Box className={classes.balanceContainer} display="flex" alignItems="center">
                    <Box lineHeight={0}>
                        <img alt={item.name} src={require('../../../../images/' + item.logo).default} />
                    </Box>
                    <Box flexGrow={1} pl={1} lineHeight={0}>
                        {isLoading ? (
                            <Loader line={true} />
                        ) : (
                            <Typography variant={"body1"}>{state.balance} {item.token}</Typography>
                        )}
                    </Box>
                    <Box>
                        <Button endIcon={<ShoppingBasket />}>Buy Token</Button>
                    </Box>
                </Box>
                <Box className={classes.inputContainer}>
                    <Paper component="form" className={classes.root}>
                        <Box className={classes.inputLogo}>
                            <img alt={item.name} src={require('../../../../images/' + item.logo).default} />
                        </Box>
                        <InputBase placeholder="0.00" value={formData.withdraw.amount} onChange={(e) => handleInput(e.target.value)} />
                        <Button onClick={handleMax}>Max</Button>
                    </Paper>
                </Box>
                <Box mt={2} p={2} className={classes.feeContainer}>
                    <Grid container>
                        <Grid item xs={12}>
                            <IconButton style={{float: 'right'}}><HelpOutline /></IconButton>
                            <Typography variant={"h1"}>Beefy Fee:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h2"}>0.7% (0.07)</Typography>
                            <Typography>Deposit fee</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h2"}>0%</Typography>
                            <Typography>Withdrawal fee</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box pt={1}>
                                <Typography>Performance fees are already subtracted from the displayed APY.</Typography>
                            </Box>
                            <Divider />
                            <Typography variant={"h1"}>Est. Transaction Costs:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h2"}>~0.05 BNB ($0.1)</Typography>
                            <Typography>Deposit</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant={"h2"}>~0.05 BNB ($0.1)</Typography>
                            <Typography>Withdrawal</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    {wallet.address ? (
                        <Button onClick={handleWithdraw} className={classes.btnSubmit} fullWidth={true} disabled={formData.withdraw.amount <= 0}>Withdraw {formData.withdraw.max ? ('All') : ''}</Button>
                    ) : (
                        <Button className={classes.btnSubmit} fullWidth={true} onClick={handleWalletConnect}>Connect Wallet</Button>
                    )}
                </Box>
            </Box>
            <Box p={1}>
                <Box p={3} className={classes.boostContainer}>
                    <Box display="flex" alignItems="center">
                        <Box lineHeight={0}>
                            <img alt={item.name} src={require('../../../../images/fire.png').default} />
                        </Box>
                        <Box>
                            <Typography variant={"h1"}>Boost</Typography>
                        </Box>
                        <Box>
                            <IconButton><HelpOutline /></IconButton>
                        </Box>
                        <Box flexGrow={1}>
                            <Typography variant={"h2"} align={"right"}>0</Typography>
                        </Box>
                    </Box>
                    <Typography align={"right"}>Receipt Token balance</Typography>
                    <Box pt={4}>
                        <Button disabled={true} className={classes.btnSubmit} fullWidth={true}>Unstake Receipt Token</Button>
                    </Box>
                </Box>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={steps.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={steps.modal}>
                    {steps.finished ? (
                        <React.Fragment>
                            <Box>
                                <Box p={8} className={classes.finishedCard}>
                                    <Typography variant={"h2"}>{byDecimals(new BigNumber(wallet.action.data.amount).multipliedBy(byDecimals(item.pricePerShare)), item.tokenDecimals).toFixed(8)}</Typography>
                                    <Typography variant={"h2"}>withdraw confirmed</Typography>
                                    <Typography>Funds are on the way</Typography>
                                    <Box mt={1} textAlign={"center"}>
                                        <Button className={classes.finishedBtn} href={wallet.explorer[item.network] + '/tx/' + wallet.action.data.receipt.transactionHash} target="_blank">View on Explorer</Button> <Button className={classes.finishedBtn} onClick={handleClose}>Close Dialog</Button>
                                    </Box>
                                </Box>
                                <Box mt={2} textAlign={"center"}>
                                    <Button className={classes.finishedBtn}>Go to my portfolio <ArrowRight /></Button>
                                </Box>
                            </Box>

                        </React.Fragment>
                    ) : (
                        <Box className={classes.paper}>
                            <Typography id="transition-modal-title" variant={"h2"}>{steps.currentStep} / {steps.items.length} transactions<br />confirmed</Typography>
                            <Typography id="transition-modal-description" variant={"body2"}>{!isEmpty(steps.items[steps.currentStep]) ? steps.items[steps.currentStep].message : ''}</Typography>
                            {wallet.action && wallet.action.result === 'error' ? (
                                <Alert severity={"error"}>
                                    <AlertTitle>Error</AlertTitle>
                                    <Typography>{wallet.action.data.error}</Typography>
                                    <Box textAlign={"center"} mt={2}>
                                        <Button variant={"outlined"} onClick={handleClose}>Close</Button>
                                    </Box>
                                </Alert>
                            ) : ''}
                            {wallet.action && wallet.action.result === 'success_pending' ? (
                                <Alert severity={"info"}>
                                    <AlertTitle>Confirmation Pending</AlertTitle>
                                    <Typography>Waiting for network to confirm transaction...</Typography>
                                    <Box textAlign={"center"}><Loader /></Box>
                                    <Box textAlign={"center"} mt={2}>
                                        <Button variant={"outlined"} href={wallet.explorer[item.network] + '/tx/' + wallet.action.data.hash} target="_blank">View on Explorer</Button>
                                    </Box>
                                </Alert>
                            ) : ''}
                        </Box>
                    )}
                </Fade>
            </Modal>
        </React.Fragment>
    )
}

export default Withdraw;