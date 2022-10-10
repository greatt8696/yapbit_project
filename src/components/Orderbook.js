import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Orderbook = ({ orderbook, type, widths, idx }) => {
  const dispatch = useDispatch();
  const barRef = useRef();
  const data =
    type === "bid"
      ? { price: orderbook.bid_price, size: orderbook.bid_size?.toFixed(2) }
      : { price: orderbook.ask_price, size: orderbook.ask_size?.toFixed(2) };

  const classList =
    type === "bid"
      ? ` cursor-pointer transition-all duration-700 bg-green-600 ml-auto relative rounded-l-md overflow-hidden group-hover:animate-bounce`
      : ` cursor-pointer transition-all duration-700 bg-red-600 mr-auto relative rounded-r-md overflow-hidden group-hover:animate-bounce`;
    
  const sizeStyle =
    type === "bid"
      ? `pointer-events-none px-2 absolute left-0 z-10 font-bold group-hover:animate-wiggle group-hover:text-green-200`
      : `pointer-events-none px-2 absolute right-0 z-10 font-bold group-hover:animate-wiggle group-hover:text-red-200`;

  const priceStyle =
    type === "bid"
      ? `pointer-events-none px-2 absolute right-0 z-10 group-hover:animate-wiggle group-hover:text-green-200`
      : `pointer-events-none px-2 absolute left-0 z-10 group-hover:animate-wiggle group-hover:text-red-200`;

  const style = type === "bid" ? `${widths.bid[idx]}%` : `${widths.ask[idx]}%`;

  useEffect(() => {
    type === "bid"
      ? barRef.current.classList.add("animate-blink-bar-green")
      : barRef.current.classList.add("animate-blink-bar-red");
  }, [orderbook.bid_size, orderbook.ask_size]);

  const clickHandler = () => {
    dispatch({
      type: "SELECT_ORDERBOOK",
      payload: { price: data.price, code: orderbook.code },
    });
  };
  const animationEndHandler = () => {
    type === "bid"
      ? barRef.current.classList.remove("animate-blink-bar-green")
      : barRef.current.classList.remove("animate-blink-bar-red");
  };

  return (
    <div
      className="relative cursor-pointer rounded group hover:bg-black/20 transition-all duration-100 text-sm"
      onClick={clickHandler}
    >
      <p className={sizeStyle}>{data.size}</p>
      <p className={priceStyle}>
        {data.price}
        {orderbook.code?.replace("KRW-", "")}
      </p>
      <div
        ref={barRef}
        onAnimationEnd={animationEndHandler}
        className={classList}
        style={{ width: style }}
      >
        <p className="">{"ㅤ"}</p>
      </div>
    </div>
  );
};

export default React.memo(Orderbook);
