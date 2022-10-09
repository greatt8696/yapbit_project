import { coinsPrice } from "../../util/ticker";

const initState = {
  myAssets: [
    { code: "KRW", size: 10000000, price: 1, entryPrice: 1 },
    { code: "KRW-BTC", size: 1, price: 27830000, entryPrice: 19000000 },
  ],
  orders: [{ code: "KRW-BTC", size: "10000000", price: 1, entryPrice: 1 }],
};

const myAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ORDER": {
      const upDown = payload.change === "RISE" ? "+" : "-";
      const changeRate = `${upDown} ${(payload.change_rate * 100).toFixed(
        2
      )} %`;
      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) =>
          coin.code === payload.code ? { ...coin, ...payload, upDown } : coin
        ),
        selectedCoin:
          state.selectedCoin.code === payload.code
            ? { ...state.selectedCoin, ...payload, changeRate, upDown }
            : state.selectedCoin,
      };
    }

    case "SELECT_COIN": {
      return {
        ...state,
        selectedCoin: payload,
      };
    }

    case "CHANGE_ORDERBOOK": {

      const splitOrders = {
        ask: [],
        bid: [],
        code: payload.code,
        total_ask_size: payload.total_ask_size,
        total_bid_size: payload.total_bid_size,
      };

      payload.orderbook_units.forEach(
        ({ ask_price, ask_size, bid_price, bid_size }) => {
          splitOrders.ask.push({ ask_price, ask_size });
          splitOrders.bid.push({ bid_price, bid_size });
        }
      );

      return {
        ...state,
        coinsOrderbook: state.coinsOrderbook.map((coin) =>
          coin.code === payload.code ? { ...coin, payload } : coin
        ),
        selectedOrderbook:
          state.selectedCoin.code === payload.code
            ? splitOrders
            : state.selectedOrderbook,
      };
    }

    default:
      return state;
  }
};

export default myAssetReducer;
