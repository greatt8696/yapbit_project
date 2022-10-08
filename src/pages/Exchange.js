import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PricePanel from "../components/PricePanel";

const Exchange = () => {
  const [isSelect, setIsSelect] = useState(false);
  const coinsPrice = useSelector((state) => state.coinsPrice);
  const selectedCoin = useSelector((state) => state.selectedCoin);
  const coinListRef = useRef();
  const mainRef = useRef();
  const priceRef = useRef();
  const changeRef = useRef();

  useEffect(() => {
    coinListRef.current.classList = isSelect
      ? "my-1 col-span-1 flex flex-wrap content-around justify-center align-middle gap-3 transition-all overflow-y-scroll h-full transition-all"
      : "my-1 col-span-5 flex flex-wrap content-around justify-center align-middle gap-3 transition-all overflow-y-scroll h-full transition-all";
  }, [isSelect]);

  useEffect(() => {
    console.log("@@@@@@@@@@",selectedCoin);
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

  const animationEnd = (e) => {
    e.target.classList.remove("animate-blink-text-green");
    e.target.classList.remove("animate-blink-text-red");
  };

  return (
    <div className="grid grid-cols-5 grid-flow-col gap-4 w-full h-full my-5">
      {isSelect && (
        <div className="gird col-span-4  row-span-2" ref={mainRef}>
          <div className=" flex gap-5 w-full h-[60px] row-span-3 bg-slate-500 m-3 rounded-lg text-center text-xl align-middle">
            <h1 className=" transition-all ml-5 my-auto align-middle text-3xl font-bold">
              {selectedCoin?.name}
            </h1>
            <h1 className="transition-all my-auto align-middle text-sm">
              ({selectedCoin?.code})
            </h1>
            <h1
              ref={priceRef}
              onAnimationEnd={animationEnd}
              className="transition-all ml-5 my-auto align-middle text-3xl"
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
          <div className="w-full h-3/5 row-span-3 bg-slate-500 m-3 rounded-lg"></div>
          <div className="w-full h-1/5 row-span-1 bg-slate-500  m-3 mb-5 rounded-lg"></div>
        </div>
      )}
      <div
        className="col-span-5 flex flex-wrap content-around justify-center align-middle gap-3 transition-all overflow-y-scroll h-full"
        ref={coinListRef}
      >
        {coinsPrice.map((coin) => (
          <PricePanel
            key={coin.code}
            coin={coin}
            setIsSelect={setIsSelect}
            isSelect={isSelect}
          ></PricePanel>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Exchange);
