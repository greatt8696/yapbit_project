
const initState = {

  myAssets: [
    { code: "KRW", size: 10000000, price: 1, entryPrice: 1 },
    { code: "KRW-BTC", size: 1, price: 27830000, entryPrice: 19000000 },
  ],

  orders: [
    {
      id: 0,
      code: "KRW-BTC",
      size: "1",
      price: 27830000,
      entryPrice: 19000000,
    },
  ],
  orderId: 1,
  
};

const myAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ORDER": {
      const addOrder = { payload, id: state.orderId };
      state.orderId += 1;
      return {
        ...state,
        orders: addOrder,
      };
    }

    case "DELETE_ORDER": {
      const addOrder = { payload, id: state.orderId };
      state.orderId += 1;
      return {
        ...state,
        orders: addOrder,
      };
    }

    default:
      return state;
  }
};

export default myAssetReducer;
