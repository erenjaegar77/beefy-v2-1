import { addressBook } from 'blockchain-addressbook';

import zaps from 'config/zaps.json';
import config from 'config/config';

const {
  polygon: polygonAddressBook,
  heco: hecoAddressBook,
  avax: avaxAddressBook,
  bsc: bscAddressBook,
  fantom: fantomAddressBook,
} = addressBook;

export const getNetworkTokens = network => {
  switch (network) {
    case 'bsc':
      return bscAddressBook.tokens;
    case 'heco':
      return hecoAddressBook.tokens;
    case 'avax':
      return avaxAddressBook.tokens;
    case 'polygon':
      return polygonAddressBook.tokens;
    case 'fantom':
      return fantomAddressBook.tokens;
    default:
      throw new Error(
        `Create address book for this chainId first. Check out https://github.com/beefyfinance/address-book`
      );
  }
};

export const getNetworkBurnTokens = network => {
  switch (network) {
    case 'bsc':
      return {
        [bscAddressBook.tokens.GARUDA.symbol]: bscAddressBook.tokens.GARUDA,
        [bscAddressBook.tokens.SDUMP.symbol]: bscAddressBook.tokens.SDUMP,
        [bscAddressBook.tokens.BABYCAKE.symbol]: bscAddressBook.tokens.BABYCAKE,
        [bscAddressBook.tokens.PERA.symbol]: bscAddressBook.tokens.PERA,
      };
    case 'heco':
      return {};
    case 'avax':
      return {};
    case 'polygon':
      return {
        [polygonAddressBook.tokens.xYELD.symbol]: polygonAddressBook.tokens.xYELD,
        [polygonAddressBook.tokens.PEAR.symbol]: polygonAddressBook.tokens.PEAR,
      };
    case 'fantom':
      return {};
    default:
      throw new Error(`Create address book for this chain first.`);
  }
};

export const getNetworkZaps = network => {
  return zaps.filter(zap => zap.network === network);
};

export const getNetworkCoin = network => {
  return config[network].nativeCurrency;
};
