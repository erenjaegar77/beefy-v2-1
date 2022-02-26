export const pools = [
  {
    id: "metis-bifi-gov",
    name: "BIFI Earnings Pool",
    logo: "single-assets/BIFI.png",
    token: "BIFI",
    tokenDescription: "Beefy.Finance",
    tokenDecimals: 18,
    tokenAddress: "0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    tokenDescriptionUrl: "https://docs.beefy.finance/moo/ecosystem/bifi-token/tokenomics-and-governance",
    earnedToken: "WMETIS",
    earnedTokenDecimals: 18,
    earnedTokenAddress: "0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481",
    earnContractAddress: "0x2a30C5e0d577108F694d2A96179cd73611Ee069b",
    poolAddress: "0x2a30C5e0d577108F694d2A96179cd73611Ee069b",
    excluded: "metis-bifi-maxi",
    pricePerFullShare: 1,
    isGovVault: true,
    tvl: 0,
    oracle: "tokens",
    oracleId: "BIFI",
    oraclePrice: 0,
    status: "active",
    platform: "Beefy.Finance",
    assets: [
      "BIFI"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_SMALL",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "SingleStake",
    callFee: 0.5,
    withdrawalFee: "0%",
    createdAt: 1623706144,
    network: "metis"
  },
  {
    id: "netswap-nett-m.usdt",
    name: "m.USDT-NETT LP",
    token: "m.USDT-NETT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x7D02ab940d7dD2B771e59633bBC1ed6EC2b99Af1",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDT-NETT",
    earnedTokenAddress: "0x29C4C22eC7dF7e936Cb3e6C4A7E5eAE751C7d86B",
    earnContractAddress: "0x29C4C22eC7dF7e936Cb3e6C4A7E5eAE751C7d86B",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-nett-m.usdt",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDT",
      "NETT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278/0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278&outputCurrency=0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
    network: "metis",
    createdAt: 1642356425
  },
  {
    id: "netswap-nett-metis",
    name: "METIS-NETT LP",
    token: "METIS-NETT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x60312d4EbBF3617d3D33841906b5868A86931Cbd",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapMETIS-NETT",
    earnedTokenAddress: "0xC96b496F78d1a45D9cec6d628a75614ed230D6D4",
    earnContractAddress: "0xC96b496F78d1a45D9cec6d628a75614ed230D6D4",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-nett-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "METIS",
      "NETT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278&outputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    network: "metis",
    createdAt: 1642362780
  },
  {
    id: "netswap-nett-m.usdc",
    name: "m.USDC-NETT LP",
    token: "m.USDC-NETT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x0724d37522585E87d27C802728E824862Dc72861",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapmUSDC-NETT",
    earnedTokenAddress: "0x89E6F4dba7337F123D9915ADF2B61B8d8c2bCA31",
    earnContractAddress: "0x89E6F4dba7337F123D9915ADF2B61B8d8c2bCA31",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-nett-m.usdc",
    oraclePrice: 0,
    depositsPaused: false,
    status: "paused",
    platform: "Netswap",
    assets: [
      "mUSDC",
      "NETT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    network: "metis",
    createdAt: 1642363788
  },
  {
    id: "netswap-bnb-nett",
    name: "BNB-NETT LP",
    token: "BNB-NETT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x3bF77b9192579826f260Bc48F2214Dfba840fcE5",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapBNB-NETT",
    earnedTokenAddress: "0x92EB8b4A8fF3df4A610BC59D1e704550dBB978DE",
    earnContractAddress: "0x92EB8b4A8fF3df4A610BC59D1e704550dBB978DE",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-bnb-nett",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "BNB",
      "NETT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278/0x2692BE44A6E38B698731fDDf417d060f0d20A0cB",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278&outputCurrency=0x2692BE44A6E38B698731fDDf417d060f0d20A0cB",
    network: "metis",
    createdAt: 1642364144
  },
  {
    id: "netswap-weth-nett",
    name: "WETH-NETT LP",
    token: "WETH-NETT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0xC8aE82A0ab6AdA2062B812827E1556c0fa448dd0",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapWETH-NETT",
    earnedTokenAddress: "0x3DD36E64784FDAEe7BD202c78322a0d8EB1BB32b",
    earnContractAddress: "0x3DD36E64784FDAEe7BD202c78322a0d8EB1BB32b",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-weth-nett",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "WETH",
      "NETT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278/0x420000000000000000000000000000000000000A",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x90fe084f877c65e1b577c7b2ea64b8d8dd1ab278&outputCurrency=0x420000000000000000000000000000000000000A",
    network: "metis",
    createdAt: 1642363913
  },
  {
    id: "netswap-weth-metis",
    name: "WETH-METIS LP",
    token: "WETH-METIS LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x59051B5F5172b69E66869048Dc69D35dB0B3610d",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapWETH-METIS",
    earnedTokenAddress: "0xB84486eA8B34C65cD3bf3DeeB6990AA0a27a2EaF",
    earnContractAddress: "0xB84486eA8B34C65cD3bf3DeeB6990AA0a27a2EaF",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-weth-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "WETH",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000/0x420000000000000000000000000000000000000A",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000&outputCurrency=0x420000000000000000000000000000000000000A",
    network: "metis",
    createdAt: 1642364450
  },
  {
    id: "netswap-m.usdt-metis",
    name: "m.USDT-METIS LP",
    token: "m.USDT-METIS LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x3D60aFEcf67e6ba950b499137A72478B2CA7c5A1",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDT-METIS",
    earnedTokenAddress: "0x085bf6f912A42D0d8Ed53D4998b07F9A535315f0",
    earnContractAddress: "0x085bf6f912A42D0d8Ed53D4998b07F9A535315f0",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-m.usdt-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDT",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000&outputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    network: "metis",
    createdAt: 1642365041
  },
  {
    id: "netswap-metis-m.usdc",
    name: "m.USDC-METIS LP",
    token: "m.USDC-METIS LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x5Ae3ee7fBB3Cb28C17e7ADc3a6Ae605ae2465091",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDC-METIS",
    earnedTokenAddress: "0xD602655aAF104106E880221b124A20891f769dE1",
    earnContractAddress: "0xD602655aAF104106E880221b124A20891f769dE1",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-metis-m.usdc",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDC",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    network: "metis",
    createdAt: 1642365277
  },
  {
    id: "netswap-weth-m.usdt",
    name: "m.USDT-WETH LP",
    token: "m.USDT-WETH LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x4Db4CE7f5b43A6B455D3c3057b63A083b09b8376",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDT-WETH",
    earnedTokenAddress: "0xdcabA5d3907283a470Ad171eA6b722bCD6540c78",
    earnContractAddress: "0xdcabA5d3907283a470Ad171eA6b722bCD6540c78",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-weth-m.usdt",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDT",
      "WETH"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x420000000000000000000000000000000000000A/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x420000000000000000000000000000000000000A&outputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    network: "metis",
    createdAt: 1642365495
  },
  {
    id: "netswap-weth-m.usdc",
    name: "m.USDC-WETH LP",
    token: "m.USDC-WETH LP",
    tokenDescription: "Netswap",
    tokenAddress: "0xF5988809ac97C65121e2c34f5D49558e3D12C253",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDC-WETH",
    earnedTokenAddress: "0x85f287c860f02bAc3aE5023eFb547b6B7Aa4D9eD",
    earnContractAddress: "0x85f287c860f02bAc3aE5023eFb547b6B7Aa4D9eD",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-weth-m.usdc",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDC",
      "WETH"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0x420000000000000000000000000000000000000A/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0x420000000000000000000000000000000000000A&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    network: "metis",
    createdAt: 1642365777
  },
  {
    id: "netswap-m.usdt-m.usdc",
    name: "m.USDC-m.USDT LP",
    token: "m.USDC-m.USDT LP",
    tokenDescription: "Netswap",
    tokenAddress: "0x1caD5f8f5D4C0AD49646B2565CC0cA725E4280EA",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooNetswapm.USDC-m.USDT",
    earnedTokenAddress: "0x2dC73D17Ae01De6D49aab45668601591FF283dee",
    earnContractAddress: "0x2dC73D17Ae01De6D49aab45668601591FF283dee",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "netswap-m.usdt-m.usdc",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Netswap",
    assets: [
      "mUSDC",
      "mUSDT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_HIGH",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://netswap.io/#/add/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    buyTokenUrl: "https://netswap.io/#/swap?inputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    network: "metis",
    createdAt: 1642365937
  },
  {
    id: "metis-bifi-maxi",
    logo: "single-assets/BIFI.png",
    name: "BIFI Maxi",
    token: "BIFI",
    tokenDescription: "Beefy.Finance",
    tokenAddress: "0xe6801928061CDbE32AC5AD0634427E140EFd05F9",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooMetisBIFI",
    earnedTokenAddress: "0xEA01ca0423acb8476E1D3Bae572021c2aA9bd410",
    earnContractAddress: "0xEA01ca0423acb8476E1D3Bae572021c2aA9bd410",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "tokens",
    oracleId: "BIFI",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Beefy.Finance",
    assets: [
      "BIFI"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "Maxi",
    withdrawalFee: "0.05%",
    buyTokenUrl: "https://netswap.io/#/swap?outputCurrency=0xe6801928061cdbe32ac5ad0634427e140efd05f9",
    network: "metis",
    createdAt: 1642600646
  },
  {
    id: "tethys-tethys-metis",
    name: "TETHYS-METIS LP",
    token: "TETHYS-METIS TLP",
    tokenDescription: "Tethys",
    tokenAddress: "0xc9b290FF37fA53272e9D71A0B13a444010aF4497",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooTethysTETHYS-METIS",
    earnedTokenAddress: "0xC8ca2254bCBA3aD8511Faff54e0b9941D0424502",
    earnContractAddress: "0xC8ca2254bCBA3aD8511Faff54e0b9941D0424502",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "tethys-tethys-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Tethys",
    assets: [
      "TETHYS",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://tethys.finance/pool/add?inputCurrency=METIS&outputCurrency=0x69fdb77064ec5c84FA2F21072973eB28441F43F3",
    buyTokenUrl: "https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0x69fdb77064ec5c84FA2F21072973eB28441F43F3",
    network: "metis",
    createdAt: 1642623428
  },
  {
    id: "tethys-m.usdt-metis",
    name: "m.USDT-METIS LP",
    token: "m.USDT-METIS TLP",
    tokenDescription: "Tethys",
    tokenAddress: "0x8121113eB9952086deC3113690Af0538BB5506fd",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooTethysm.USDT-METIS",
    earnedTokenAddress: "0x462066c67A729572668B6CF79151c0ed67734D91",
    earnContractAddress: "0x462066c67A729572668B6CF79151c0ed67734D91",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "tethys-m.usdt-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Tethys",
    assets: [
      "mUSDT",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://tethys.finance/pool/add?inputCurrency=METIS&outputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    buyTokenUrl: "https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    network: "metis",
    createdAt: 1642623639
  },
  {
    id: "tethys-metis-m.usdc",
    name: "m.USDC-METIS LP",
    token: "m.USDC-METIS TLP",
    tokenDescription: "Tethys",
    tokenAddress: "0xDd7dF3522a49e6e1127bf1A1d3bAEa3bc100583B",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooTethysm.USDC-METIS",
    earnedTokenAddress: "0x2d04969ED7D1b186797C44dF5F5634Eb9C89aF6b",
    earnContractAddress: "0x2d04969ED7D1b186797C44dF5F5634Eb9C89aF6b",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "tethys-metis-m.usdc",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Tethys",
    assets: [
      "mUSDC",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://tethys.finance/pool/add?inputCurrency=METIS&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    buyTokenUrl: "https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    network: "metis",
    createdAt: 1642623846
  },
  {
    id: "tethys-weth-metis",
    name: "WETH-METIS LP",
    token: "WETH-METIS TLP",
    tokenDescription: "Tethys",
    tokenAddress: "0xEE5adB5b0DfC51029Aca5Ad4Bc684Ad676b307F7",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooTethysWETH-METIS",
    earnedTokenAddress: "0xbb8155672A297dE54E6E87d0755F03bd60B7f166",
    earnContractAddress: "0xbb8155672A297dE54E6E87d0755F03bd60B7f166",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "tethys-weth-metis",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Tethys",
    assets: [
      "WETH",
      "METIS"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_HIGH",
      "MCAP_MEDIUM",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://tethys.finance/pool/add?inputCurrency=METIS&outputCurrency=0x420000000000000000000000000000000000000A",
    buyTokenUrl: "https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0x420000000000000000000000000000000000000A",
    network: "metis",
    createdAt: 1642624056
  },
  {
    id: "tethys-m.usdc-m.usdt",
    name: "m.USDC-m.USDT LP",
    token: "m.USDC-m.USDT TLP",
    tokenDescription: "Tethys",
    tokenAddress: "0x6c4768d4b3acD4a3fF01F179FaffDaEbe084D12D",
    tokenDecimals: 18,
    tokenDescriptionUrl: "#",
    earnedToken: "mooTethysm.USDC - m.USDT",
    earnedTokenAddress: "0xc674cf138415244041d512Edf1c7943D99dD229F",
    earnContractAddress: "0xc674cf138415244041d512Edf1c7943D99dD229F",
    pricePerFullShare: 1,
    tvl: 0,
    oracle: "lps",
    oracleId: "tethys-m.usdc-m.usdt",
    oraclePrice: 0,
    depositsPaused: false,
    status: "active",
    platform: "Tethys",
    assets: [
      "mUSDC",
      "mUSDT"
    ],
    risks: [
      "COMPLEXITY_LOW",
      "BATTLE_TESTED",
      "IL_NONE",
      "MCAP_LOW",
      "AUDIT",
      "CONTRACTS_VERIFIED"
    ],
    stratType: "StratLP",
    addLiquidityUrl: "https://tethys.finance/pool/add?inputCurrency=0xEA32A96608495e54156Ae48931A7c20f0dcc1a21&outputCurrency=0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
    buyTokenUrl: "https://tethys.finance/swap?inputCurrency=METIS&outputCurrency=0x6c4768d4b3acD4a3fF01F179FaffDaEbe084D12D",
    createdAt: 1644871173,
    network: "metis"
  }
];