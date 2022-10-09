import { coinsPrice } from "../../util/ticker";

const initState = {
  coinsPrice: [...coinsPrice],
  selectedCoin: {},
  orders: [],
  history: [{}],
  coinsOrderbook: [...coinsPrice],
  selectedOrderbook: {},
};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_COIN": {
      const upDown = payload.change === "RISE" ? "+" : "-";
      const changeRate = `${upDown} ${(payload.change_rate * 100).toFixed(
        3
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
        selectedCoin:
          state.selectedCoin.trade_price !== payload.trade_price
            ? payload
            : state.selectedCoin,
      };
    }

    case "CHANGE_ORDERBOOK": {
      state.coinsOrderbook.map((coin) => {
      });
      return {
        ...state,
        coinsOrderbook: state.coinsOrderbook.map((coin) =>
          coin.code === payload.code ? { ...coin, payload } : coin
        ),
        selectedOrderbook:
          state.selectedCoin.code === payload.code
            ? { ...state.selectedOrderbook, ...payload }
            : state.selectedOrderbook,
      };
    }

    default:
      return state;
  }
};

export default coinReducer;
