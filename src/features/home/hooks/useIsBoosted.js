import React from 'react';
import lodash from 'lodash';
import reduxActions from 'features/redux/actions';
import { useDispatch } from 'react-redux';
import useVaults from '../hooks/useFilteredVaults';

const useIsBoosted = item => {
  const [state, setState] = React.useState({ isBoosted: false, data: null });
  const dispatch = useDispatch();
  const data = useVaults();
  const boostVaults = data[6];
  React.useEffect(() => {
    const boostedVault = lodash.filter(boostVaults, { poolId: item.id, status: 'active' });

    if (boostedVault.length !== 0) {
      dispatch(reduxActions.vault.fetchBoosts(boostedVault[0]));
      setState({ isBoosted: true, data: boostedVault[0] });
      item.tags.push('boost');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export default useIsBoosted;
