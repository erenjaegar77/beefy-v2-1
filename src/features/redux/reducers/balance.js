import {
  BALANCE_FETCH_BALANCES_BEGIN,
  BALANCE_FETCH_BALANCES_DONE,
  WALLET_DISCONNECT,
} from '../constants';
import { config } from 'config/config';
import { getEligibleZap } from 'features/zap/zapUniswapV2';

const initialTokens = () => {
  const tokens = [];
  for (let net in config) {
    const data = require('config/vault/' + net + '.js');
    for (const key in data.pools) {
      const pool = data.pools[key];
      tokens[pool.token] = {
        balance: 0,
        allowance: { [pool.earnContractAddress]: 0 },
      };

      if (pool.tokenAddress) {
        tokens[pool.token]['address'] = pool.tokenAddress;
      }

      tokens[pool.earnedToken] = {
        balance: 0,
        address: pool.earnedTokenAddress,
        allowance: {},
      };

      const zap = getEligibleZap(pool);
      if (zap) {
        tokens[pool.token].allowance[zap.zapAddress] = pool.tokenAddress ? 0 : Infinity;
        tokens[pool.earnedToken].allowance[zap.zapAddress] = 0;
      }
    }
  }

  return tokens;
};

const initialState = {
  tokens: initialTokens(),
  lastUpdated: 0,
  isBalancesLoading: false,
  isBalancesFirstTime: true,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BALANCE_FETCH_BALANCES_BEGIN:
      return {
        ...state,
        isBalancesLoading: state.isBalancesFirstTime,
      };
    case BALANCE_FETCH_BALANCES_DONE:
      return {
        ...state,
        tokens: action.payload.tokens,
        lastUpdated: action.payload.lastUpdated,
        isBalancesLoading: false,
        isBalancesFirstTime: false,
      };
    case WALLET_DISCONNECT:
      return { ...initialState, tokens: initialTokens() };
    default:
      return state;
  }
};

export default balanceReducer;
