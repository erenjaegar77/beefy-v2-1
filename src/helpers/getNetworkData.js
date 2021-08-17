export const getNetworkTokens = () => {};

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
  switch (network) {
    case 'bsc':
      return bscZaps;
    case 'heco':
      return hecoZaps;
    case 'avax':
      return avalancheZaps;
    case 'polygon':
      return polygonZaps;
    case 'fantom':
      return fantomZaps;
    default:
      return [];
  }
};

export const getNetworkCoin = () => {};
