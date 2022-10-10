import { coinsPrice } from "../../util/ticker";

const init = coinsPrice.map(({ code }) => {
  return { code, size: 0, price: 0, entryPrice: 0 };
});

const initState = {
  myAssets: [
    ...init,
    { code: "KRW", size: 200000000, price: 1, entryPrice: 1, name: "원화" },
  ],

  orders: [
    //    {
    //      id: 0,
    //      type: "buy"
    //      code: "KRW-BTC",
    //      size: "1",
    //      price: 27830000,
    //   },
  ],
  orderId: 1,
};

const myAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ORDER": {
      const plusMinus = payload.type === "buy" ? -1 : 1;
      const decreaseKRW =
        plusMinus * parseFloat(payload.price) * parseFloat(payload.size);

      const addOrder = { ...payload, id: state.orderId };
      state.orderId++;

      //console.log("ADD_ORDER", payload, state.myAssets);
      return {
        ...state,
        myAssets: [
          ...state.myAssets.map((asset) => {
            if (asset.code === "KRW") {
              return payload.type === "buy"
                ? { ...asset, size: asset.size + decreaseKRW }
                : asset;
            } else if (asset.code === payload.code) {
              return payload.type === "sell"
                ? { ...asset, size: asset.size - payload.size }
                : asset;
            } else {
              return asset;
            }
          }),
        ],
        orders: [...state.orders, addOrder],
      };
    }

    case "SUCCESS_ORDER": {
      const plusMinus = payload.type === "sell" ? 1 : -1;
      const increaseKRW =
        plusMinus * parseFloat(payload.price) * parseFloat(payload.size);

      const newAssetsList = [
        ...state.myAssets.map((asset) => {
          if (asset.code === payload.code && payload.type === "buy") {
            return {
              ...asset,
              size: asset.size + parseFloat(-plusMinus * payload.size),
              entryPrice:
                plusMinus === -1
                  ? (asset.entryPrice * asset.size +
                      parseFloat(payload.price) * parseFloat(payload.size)) /
                    2
                  : asset.entryPrice,
              price: plusMinus === -1 ? payload.price : asset.entryPrice,
            };
          } else if (asset.code === payload.code && payload.type === "sell") {
            return {
              ...asset,
              entryPrice:
                plusMinus === 1
                  ? asset.entryPrice * asset.size +
                    (parseFloat(payload.price) * parseFloat(payload.size)) / 2
                  : asset.entryPrice,
            };
          } else if (asset.code === "KRW" && payload.type === "sell") {
            return { ...asset, size: asset.size + increaseKRW };
          } else if (asset.code === "KRW") {
            //console.log(asset.code, payload.type);
            return asset;
          } else {
            return asset;
          }
        }),
      ];

      //console.log("SUCCESS_ORDER", newAssetsList, payload);
      return {
        ...state,
        myAssets: newAssetsList,
        orders: [...state.orders.filter((order) => order.id !== payload.id)],
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
