import React, { useState, useEffect } from 'react';
import { Container, makeStyles, Grid, Typography, Box, Button, Divider } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addressBook } from 'blockchain-addressbook';

import reduxActions from '../redux/actions';
import { calcDaily, formatApy, formatUsd } from 'helpers/format';
import { isEmpty } from 'helpers/utils';
import Loader from 'components/loader';
import DisplayTags from 'components/vaultTags';
import AssetsImage from 'components/AssetsImage';
import Deposit from 'features/vault/components/Deposit';
import Withdraw from 'features/vault/components/Withdraw';
import TokenCard from 'features/vault/components/TokenCard';
import StrategyCard from 'features/vault/components/StrategyCard';
import SafetyCard from 'features/vault/components/SafetyCard';
import Graph from 'features/vault/components/Graph';
import styles from './styles';

const useStyles = makeStyles(styles);

const Vault = () => {
  const history = useHistory();
  const classes = useStyles();
  const t = useTranslation().t;

  let { id } = useParams();
  const { vault, wallet, prices } = useSelector(state => ({
    vault: state.vaultReducer,
    wallet: state.walletReducer,
    prices: state.pricesReducer,
  }));
  const dispatch = useDispatch();
  const [item, setVaultData] = useState(null);
  const [dw, setDw] = useState('deposit');
  const [formData, setFormData] = useState({
    deposit: { amount: '', max: false },
    withdraw: { amount: '', max: false },
  });

  const handleWalletConnect = () => {
    if (!wallet.address) {
      dispatch(reduxActions.wallet.connect());
    }
  };

  const updateItemData = () => {
    if (wallet.address && item) {
      dispatch(reduxActions.vault.fetchPools(item));
      dispatch(reduxActions.balance.fetchBalances(item));
    }
  };

  const resetFormData = () => {
    setFormData({ deposit: { amount: '', max: false }, withdraw: { amount: '', max: false } });
  };

  useEffect(() => {
    if (!isEmpty(vault.pools) && vault.pools[id]) {
      setVaultData(vault.pools[id]);
    } else {
      history.push('/error');
    }
  }, [vault.pools, id, history]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (item) {
      setIsLoading(false);
    }
  }, [item]);

  useEffect(() => {
    if (item && prices.lastUpdated > 0) {
      dispatch(reduxActions.vault.fetchPools(item));
    }
  }, [dispatch, item, prices.lastUpdated]);

  useEffect(() => {
    if (item && wallet.address) {
      dispatch(reduxActions.balance.fetchBalances(item));
    }
  }, [dispatch, item, wallet.address]);

  useEffect(() => {
    if (item) {
      setInterval(() => {
        dispatch(reduxActions.vault.fetchPools(item));
        dispatch(reduxActions.balance.fetchBalances(item));
      }, 60000);
    }
  }, [item, dispatch]);

  return (
    <Container className={classes.vaultContainer} maxWidth="lg">
      {isLoading ? (
        <Loader message={t('Vault-GetData')} />
      ) : (
        <Grid container spacing={6} style={{ position: 'relative' }}>
          <Grid item xs={12} md={8} lg={8} xl={9}>
            <Button
              className={classes.btnGoBack}
              onClick={() => {
                history.push('/');
              }}
            >
              <ArrowLeft /> {t('Vault-GoBack')}
            </Button>
            <Grid className={classes.title} container>
              <Grid>
                <AssetsImage img={item.logo} assets={item.assets} alt={item.name} />
              </Grid>
              <Grid>
                <Typography variant={'h1'}>
                  {item.name} {t('Vault-vault')}
                </Typography>
              </Grid>
            </Grid>
            <Box className={classes.mobileFix} display="flex" alignItems="center">
              <Box className={classes.badges}>
                <Box>
                  <img
                    alt={item.network}
                    src={require('images/networks/' + item.network + '.svg').default}
                  />
                </Box>
                <Box>
                  <Typography className={classes.network} display={'inline'}>
                    {item.network} {t('Vault-network')}
                  </Typography>
                </Box>
                <DisplayTags tags={item.tags} />
              </Box>
              <Box className={classes.summaryContainer} display={'flex'} alignItems="center">
                <Divider />
                <Box>
                  <Typography variant={'h1'}>{formatUsd(item.tvl)}</Typography>
                  <Typography variant={'body2'}>{t('TVL')}</Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant={'h1'}>{calcDaily(item.apy.totalApy)}</Typography>
                  <Typography variant={'body2'}>{t('Vault-Daily')}</Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant={'h1'}>{formatApy(item.apy.totalApy)}</Typography>
                  <Typography variant={'body2'}>{t('APY')}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={3} className={classes.customOrder}>
            <Box className={classes.dw}>
              <Box className={classes.tabs}>
                <Button
                  onClick={() => setDw('deposit')}
                  className={dw === 'deposit' ? classes.selected : ''}
                >
                  {t('Deposit-Verb')}
                </Button>
                <Button
                  onClick={() => setDw('withdraw')}
                  className={dw === 'withdraw' ? classes.selected : ''}
                >
                  {t('Withdraw-Verb')}
                </Button>
              </Box>
              {dw === 'deposit' ? (
                <Deposit
                  item={item}
                  handleWalletConnect={handleWalletConnect}
                  formData={formData}
                  setFormData={setFormData}
                  updateItemData={updateItemData}
                  resetFormData={resetFormData}
                />
              ) : (
                <Withdraw
                  item={item}
                  handleWalletConnect={handleWalletConnect}
                  formData={formData}
                  setFormData={setFormData}
                  updateItemData={updateItemData}
                  resetFormData={resetFormData}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={9}>
            <Graph oracleId={item.oracleId} vaultId={item.id} network={item.network} />
            {item.risks && item.risks.length > 0 && (
              <SafetyCard vaultRisks={item.risks} score={item.safetyScore} />
            )}
            <StrategyCard
              stratType={item.stratType}
              stratAddr={item.strategy}
              vaultAddr={item.earnContractAddress}
              network={item.network}
              apy={item.apy}
              platform={item.platform}
              assets={item.assets}
              want={item.name}
              vamp={item.vamp}
            />
            {renderTokens(item)}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

const renderTokens = item => {
  return item.assets.map(asset => {
    if (asset in addressBook[item.network].tokens) {
      return (
        <TokenCard
          key={asset}
          token={addressBook[item.network].tokens[asset]}
          network={item.network}
        />
      );
    } else return null;
  });
};

export default Vault;
