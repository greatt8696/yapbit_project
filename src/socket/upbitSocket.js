var socket;
function upbitSocket() {
  if (socket !== undefined) {
    socket.close();
  }

  socket = new WebSocket("wss://api.upbit.com/websocket/v1");
  socket.binaryType = "arraybuffer";

  socket.onopen = function (e) {
    filterRequest();
  };
  socket.onclose = function (e) {
    socket = undefined;
  };
  socket.onmessage = function (e) {
    const enc = new TextDecoder("utf-8");
    const arr = new Uint8Array(e.data);
    const str_d = enc.decode(arr);
    const d = JSON.parse(str_d);
    if (d.type === "ticker") {
      console.log(d);
    }
    if (d.type === "orderbook") {
      console.log(d);
    }
    if (d.type === "trade") {
      console.log(d);
    }
  };
}

// 웹소켓 연결 해제
function closeWS() {
  if (socket !== undefined) {
    socket.close();
    socket = undefined;
  }
}

// 웹소켓 요청
function filterRequest() {
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

  if (socket === undefined) {
    alert("no connect exists");
    return;
  }
  socket.send(sendData(toJson));
}

export default upbitSocket;

// const TICKER = [
//   "BTC",
//   "ETH",
//   "XRP",
//   "ADA",
//   "DOGE",
//   "GRS",
//   "POLY",
//   "ETC",
//   "HUNT",
//   "CHZ",
//   "WEMIX",
//   "HIVE",
//   "ALGO",
//   "ATOM",
//   "PUNDIX",
//   "SOL",
//   "SAND",
//   "MATIC",
//   "LINK",
//   "TRX",
//   "BCH",
//   "WAVES",
//   "XEC",
//   "AXS",
//   "MANA",
//   "REP",
//   "NEAR",
//   "FLOW",
//   "MBL",
//   "KNC",
//   "PLA",
//   "EOS",
//   "XLM",
//   "ZIL",
//   "BTG",
//   "KAVA",
//   "STEEM",
//   "MFT",
//   "QKC",
//   "DOT",
//   "GLM",
//   "XEM",
//   "LOOM",
//   "BORA",
//   "SXP",
//   "NEO",
//   "AERGO",
//   "STX",
//   "VET",
//   "HBAR",
//   "WAXP",
//   "JST",
//   "UPP",
//   "GMT",
//   "AVAX",
//   "ANKR",
//   "NU",
//   "SRM",
//   "ORBS",
//   "STORJ",
//   "STPT",
//   "HUM",
//   "TFUEL",
//   "AAVE",
//   "MTL",
//   "ARK",
//   "POWR",
//   "BSV",
//   "STRAX",
//   "STMX",
//   "CVC",
//   "RFR",
//   "THETA",
//   "ENJ",
//   "ONG",
//   "IOTA",
//   "SNT",
//   "T",
//   "TT",
//   "GAS",
//   "ZRX",
//   "ELF",
//   "MED",
//   "XTZ",
//   "LSK",
//   "BTT",
//   "AQT",
//   "SSX",
//   "DAWN",
//   "SBD",
//   "ARDR",
//   "DKA",
//   "ARDR",
//   "DKA",
//   "MOC",
//   "MLK",
//   "ONT",
//   "CELO",
//   "OMG",
//   "CBK",
//   "SC",
//   "ICX",
//   "IQ",
//   "BAT",
//   "META",
//   "TON",
//   "IOST",
// ];

// class upbitSocket {
//   constructor() {
//     this.ws = new WebSocket("wss://api.upbit.com/websocket/v1");
//     this.ws.binaryType = "arraybuffer";
//     this.ws.onopen = function () {
//       const addedKrwTicker = TICKER.map((oneTicker) => `KRW-${oneTicker}`);
//       const toJson = JSON.stringify(addedKrwTicker);
//       const sendData = (toJson) => `
//         [{"ticket":"UNIQUE_TICKET"},
//         {"type":"ticker","codes": ${toJson}},
//           {"type":"orderbook","codes":${toJson}},
//           {"type":"trade","codes": ${toJson}}]`;

//       if (this.ws === undefined) {
//         alert("no connect exists");
//         return;
//       }
//       this.ws.send(sendData(toJson));
//     };
//     this.ws.onclose = function () {
//       this.ws = undefined;
//     };
//     // this.ws.onmessage = function (e) {
//     //   const enc = new TextDecoder("utf-8");
//     //   const arr = new Uint8Array(e.data);
//     //   const str_d = enc.decode(arr);
//     //   const d = JSON.parse(str_d);
//     //   if (d.type === "ticker") {
//     //     console.log(d);
//     //   }
//     //   if (d.type === "orderbook") {
//     //     console.log(d);
//     //   }
//     //   if (d.type === "trade") {
//     //     console.log(d);
//     //   }
//     // };
//   }

//   stringToJSON(data) {
//     const enc = new TextDecoder("utf-8");
//     const arr = new Uint8Array(data);
//     const stringData = enc.decode(arr);
//     return JSON.parse(stringData);
//   }

//   setOnMsg(callback) {
//     this.ws.onmessage = function (e) {
//       callback(e);
//     };
//   }

//   filterRequest() {
//     // const stringTicker = JSON.stringify(ticker);
//     const addedKrwTicker = TICKER.map((oneTicker) => `KRW-${oneTicker}`);
//     const toJson = JSON.stringify(addedKrwTicker);
//     const sendData = (toJson) => `
//         [{"ticket":"UNIQUE_TICKET"},
//         {"type":"ticker","codes": ${toJson}},
//           {"type":"orderbook","codes":${toJson}},
//           {"type":"trade","codes": ${toJson}}]`;

//     if (this.ws === undefined) {
//       alert("no connect exists");
//       return;
//     }
//     this.ws.send(sendData(toJson));
//   }

//   closeWS() {
//     if (this.ws !== undefined) {
//       this.ws.close();
//       this.ws = undefined;
//     }
//   }
// }

// export default upbitSocket;
