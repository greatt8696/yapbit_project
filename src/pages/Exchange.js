import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Orderbooks } from "../components";
import PricePanel from "../components/PricePanel";
import ExchangeInputs from "../components/ExchangeInputs";

const Exchange = () => {
  const dispatch = useDispatch();
  const [isSelect, setIsSelect] = useState(false);
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice);
  const orders = useSelector((state) => state.myAssetReducer.orders);
  const selectedCoin = useSelector((state) => state.coinReducer.selectedCoin);
  const coinListRef = useRef();
  const mainRef = useRef();
  const priceRef = useRef();
  const changeRef = useRef();

  useEffect(() => {
    coinListRef.current.classList = isSelect
      ? "col-span-1 row-span-2 h-full overflow-y-scroll "
      : "col-span-5 row-span-2 h-full overflow-y-scroll ";
  }, [isSelect]);

  useEffect(() => {
    if (isSelect) {
      if (priceRef.current) {
        priceRef.current.upDown === "+"
          ? priceRef.current.classList.add("animate-blink-text-green")
          : priceRef.current.classList.add("animate-blink-text-red");
        changeRef.current.upDown === "+"
          ? changeRef.current.classList.add("animate-blink-text-green")
          : changeRef.current.classList.add("animate-blink-text-red");
      }
    }
  }, [selectedCoin]);

  useEffect(() => {
    orders.map((order) => {
      const find = coinsPrice.find((coin) => coin.code === order.code);
      if (find)
        if (
          (find.trade_price <= order.price && order.type === "buy") ||
          (find.trade_price >= order.price && order.type === "sell")
        ) {
          dispatch({ type: "SUCCESS_ORDER", payload: order });
          dispatch({ type: "ADD_MSG", payload: order });
        }
    });
  }, [orders, coinsPrice]);

  const animationEnd = (e) => {
    e.target.classList.remove("animate-blink-text-green");
    e.target.classList.remove("animate-blink-text-red");
  };

  return (
    <div className="grid grid-cols-5 grid-flow-col gap-4 mx-auto max-w-7xl h-full my-">
      {isSelect && (
        <div className="gird col-span-4  row-span-2" ref={mainRef}>
          <div className=" flex gap-5 w-full h-[60px] row-span-3 bg-slate-100/10 m-3 rounded-lg text-center text-xl align-middle">
            <h1 className=" transition-all ml-5 my-auto align-middle text-3xl font-bold">
              {selectedCoin?.name}
            </h1>
            <h1 className="transition-all my-auto align-middle text-sm">
              ({selectedCoin?.code})
            </h1>
            <h1
              ref={priceRef}
              onAnimationEnd={animationEnd}
              className="transition-all ml-5 my-auto align-middle text-3xl font-bold"
            >
              {selectedCoin?.trade_price
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h1>
            <p className="transition-all -ml-2 my-auto align-middle text-sm">
              KRW
            </p>
            <h1
              ref={changeRef}
              onAnimationEnd={animationEnd}
              className="transition-all mx-2 my-auto align-middle text-lg"
            >
              ({selectedCoin?.changeRate})
            </h1>
          </div>
          <div className="w-full h-3/6 row-span-3 bg-slate-100/10 m-3 rounded-lg p-1">
            <Orderbooks />
          </div>
          <div className="w-full h-2/6 row-span-1 bg-slate-100/10  m-3 mb-5 rounded-lg p-3">
            <ExchangeInputs />
          </div>
        </div>
      )}
      <div
        className="col-span-5 row-span-2 h-full overflow-y-scroll "
        ref={coinListRef}
      >
        <div className="flex flex-wrap w-full justify-center align-middle gap-3 pt-2 pb-4">
          {coinsPrice.map((coin) => (
            <PricePanel
              key={coin.code}
              coin={coin}
              setIsSelect={setIsSelect}
              isSelect={isSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exchange;
