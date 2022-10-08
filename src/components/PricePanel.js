import React from "react";
import { coinsPrice } from "../util/ticker";

const PricePanel = (props) => {
  console.log("랜더링횟수");
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name, 
    imgUrl
  } = props.coin;
  
  const changeMark = change === "RISE" ? "+" : "-";
  const changeRate = `${changeMark} ${(change_rate * 100).toFixed(3)} %`;

  return (
    <div className="m-2 p-4 bg-slate-400/50 rounded-lg">
      <div>{code}</div>
      <img src={imgUrl}></img>
      <div>{trade_price}</div>
      <div>{changeRate}</div>
      <div>{change_price}</div>
      <div>{parseInt(acc_trade_price_24h / 1000000)}</div>
    </div>
  );
};

export default React.memo(PricePanel);
