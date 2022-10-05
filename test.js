const ticker = [
  "BTC",
  "ETH",
  "XRP",
  "ADA",
  "DOGE",
  "GRS",
  "POLY",
  "ETC",
  "HUNT",
  "CHZ",
  "WEMIX",
  "HIVE",
  "ALGO",
  "ATOM",
  "PUNDIX",
  "SOL",
  "SAND",
  "MATIC",
  "LINK",
  "TRX",
  "BCH",
  "WAVES",
  "XEC",
  "AXS",
  "MANA",
  "REP",
  "NEAR",
  "FLOW",
  "MBL",
  "KNC",
  "PLA",
  "EOS",
  "XLM",
  "ZIL",
  "BTG",
  "KAVA",
  "STEEM",
  "MFT",
  "QKC",
  "DOT",
  "GLM",
  "XEM",
  "LOOM",
  "BORA",
  "SXP",
  "NEO",
  "AERGO",
  "STX",
  "VET",
  "HBAR",
  "WAXP",
  "JST",
  "UPP",
  "GMT",
  "AVAX",
  "ANKR",
  "NU",
  "SRM",
  "ORBS",
  "STORJ",
  "STPT",
  "HUM",
  "TFUEL",
  "AAVE",
  "MTL",
  "ARK",
  "POWR",
  "BSV",
  "STRAX",
  "STMX",
  "CVC",
  "RFR",
  "THETA",
  "ENJ",
  "ONG",
  "IOTA",
  "SNT",
  "T",
  "TT",
  "GAS",
  "ZRX",
  "ELF",
  "MED",
  "XTZ",
  "LSK",
  "BTT",
  "AQT",
  "SSX",
  "DAWN",
  "SBD",
  "ARDR",
  "DKA",
  "ARDR",
  "DKA",
  "MOC",
  "MLK",
  "ONT",
  "CELO",
  "OMG",
  "CBK",
  "SC",
  "ICX",
  "IQ",
  "BAT",
  "META",
  "TON",
  "IOST",
];

// const stringTicker = JSON.stringify(ticker);
const addedKrwTicker = ticker.map((oneTicker) => `KRW-${oneTicker}`);
const toJson = JSON.stringify(addedKrwTicker);
const sendData = (toJson) => `
    [{"ticket":"UNIQUE_TICKET"}, 
    {"type":"ticker","codes": ${toJson}},
			{"type":"orderbook","codes":${toJson}},
			{"type":"trade","codes": ${toJson}}]`;

// console.log(sendData(ticker));
