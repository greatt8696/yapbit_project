function connectWS() {
  if (socket != undefined) {
    socket.close();
  }

  socket = new WebSocket("wss://api.upbit.com/websocket/v1");
  socket.binaryType = "arraybuffer";

  socket.onopen = function (e) {
    filterRequest(`
    [{"ticket":"UNIQUE_TICKET"},
			{"type":"ticker","codes":["KRW-BTC","KRW-ETH"]},		// "KRW-BTC","KRW-ETH" -> parsing
			{"type":"orderbook","codes":["KRW-BTC","KRW-ETH"]},
			{"type":"trade","codes":["KRW-BTC","KRW-ETH"]}]`);
  };
  socket.onclose = function (e) {
    socket = undefined;
  };
  socket.onmessage = function (e) {
    var enc = new TextDecoder("utf-8");
    var arr = new Uint8Array(e.data);
    var str_d = enc.decode(arr);
    var d = JSON.parse(str_d);
    if (d.type == "ticker") {
      console.log(d);
    }
    if (d.type == "orderbook") {
      console.log(d);
    }
    if (d.type == "trade") {
      console.log(d);
    }
  };
}

// 웹소켓 연결 해제
function closeWS() {
  if (socket != undefined) {
    socket.close();
    socket = undefined;
  }
}

// 웹소켓 요청
function filterRequest(filter) {
  if (socket == undefined) {
    alert("no connect exists");
    return;
  }
  socket.send(filter);
}

export default connectWS;
