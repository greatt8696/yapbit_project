import { coinsPrice } from "../../util/ticker";

const ORDERBOOK_SIZE = 14;
const orderbookSlot = { ask: [], bid: [] };
for (let idx = 0; idx < ORDERBOOK_SIZE; idx++) {
  orderbookSlot.ask.push({ ask_price: 1, ask_size: 1 });
  orderbookSlot.bid.push({ ask_price: 1, ask_size: 1 });
}

const initState = {
  coinsPrice: [...coinsPrice],
  selectedCoin: {},
  coinsOrderbook: [...coinsPrice],
  selectedOrderbook: { ...orderbookSlot },
  selectedOrderPrice: { },

};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_COIN": {
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

    case "SELECT_ORDERBOOK":{
      return {
        ...state,
        selectedOrderPrice: payload,
      };
    }

    case "CHANGE_ORDERBOOK": {
      //console.log("CHANGE_ORDERBOOK", state.selectedCoin.code);
      //if (state.selectedCoin.code === payload.code)
      //  console.log(state.selectedCoin.code === payload.code && { ...payload });

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

export default coinReducer;
