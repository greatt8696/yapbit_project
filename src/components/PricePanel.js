import React, { useEffect, useRef } from "react";

const PricePanel = (props) => {
  // console.log("랜더링횟수");
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name,
  } = props.coin;

  const changeMark = change === "RISE" ? "+" : "-";
  const changeRate = `${changeMark} ${(change_rate * 100).toFixed(3)} %`;
  const panelRef = useRef();
  const anmatieEndHandler = () => {
    panelRef.current.classList.remove("animate-wiggle-once");
  };

  useEffect(() => {
    if (panelRef.current) panelRef.current.classList.add("animate-wiggle-once");
  }, [trade_price]);

  return (
    <div
      className="m-1 p-3 bg-slate-400/50 rounded-lg transition-all"
      onAnimationEnd={anmatieEndHandler}
      ref={panelRef}
    >
      <div>{name}</div>
      <div>{trade_price}</div>
      <div>{changeRate}</div>
      <div>{change_price}</div>
      <div>{parseInt(acc_trade_price_24h / 1000000)}</div>
    </div>
  );
};

export default React.memo(PricePanel);
