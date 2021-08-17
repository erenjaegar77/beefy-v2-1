import zaps from 'config/zaps.json';
import { addressBook } from 'blockchain-addressbook';

export const getNetworkTokens = () => {};

export const getNetworkBurnTokens = network => {
  switch (network) {
    case 'bsc':
      const bscAddressBook = addressBook['bsc'];
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
      const polygonAddressBook = addressBook['polygon'];
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

export const getNetworkCoin = () => {};
