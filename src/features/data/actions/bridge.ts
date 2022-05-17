import { createAsyncThunk } from '@reduxjs/toolkit';
import { BeefyState } from '../../../redux-types';
import { TokenAllowance } from '../apis/allowance/allowance-types';
import { FetchAllBalancesResult } from '../apis/balance/balance-types';
import { getAllowanceApi, getBalanceApi, getBridgeApi, getConfigApi } from '../apis/instances';
import { ChainEntity } from '../entities/chain';
import { isTokenErc20 } from '../entities/token';
import { selectBifiBridgeDataByChainId } from '../selectors/bridge';
import { selectChainById } from '../selectors/chains';
import { selectTokenByAddress } from '../selectors/tokens';

export interface FulfilledBridgeData {
  data: unknown;
}

export const fetchBridgeTokenData = createAsyncThunk<
  FulfilledBridgeData,
  void,
  { state: BeefyState }
>('bridge/fetchBridgeTokenData', async () => {
  const configApi = getConfigApi();
  const chains = await configApi.fetchChainConfigs();
  const api = getBridgeApi();
  const data = await api.getBridgeData(chains);
  return { data };
});

interface InitBridgeFormParams {
  chainId: ChainEntity['id'];
  walletAddress: string | null;
}

interface InitBrdigeFormPayload {
  chainId: ChainEntity['id'];
  walletAddress: string | null;
  balance: FetchAllBalancesResult;
  allowance: TokenAllowance[];
  state: BeefyState;
}

export const initiateBridgeForm = createAsyncThunk<
  InitBrdigeFormPayload,
  InitBridgeFormParams,
  { state: BeefyState }
>('bridge/initiateBridgeForm', async ({ walletAddress, chainId }, { getState }) => {
  const chain = selectChainById(getState(), chainId);
  const balanceApi = await getBalanceApi(chain);
  const allowanceApi = await getAllowanceApi(chain);
  const bridgeTokenData = selectBifiBridgeDataByChainId(getState(), chainId);

  const spenderAddress = bridgeTokenData.router;
  const depositToken = selectTokenByAddress(getState(), chainId, bridgeTokenData.address);

  const balanceRes: FetchAllBalancesResult = walletAddress
    ? await balanceApi.fetchAllBalances(getState(), [depositToken], [], [], walletAddress)
    : { tokens: [], govVaults: [], boosts: [] };

  const allowanceRes =
    walletAddress && spenderAddress && isTokenErc20(depositToken)
      ? await allowanceApi.fetchTokensAllowance(
          getState(),
          [depositToken],
          walletAddress,
          spenderAddress
        )
      : [];

  return {
    chainId: chainId,
    walletAddress,
    allowance: allowanceRes,
    balance: balanceRes,
    state: getState(),
  };
});