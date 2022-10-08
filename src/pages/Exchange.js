import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PricePanel from "../components/PricePanel";

const Exchange = () => {
  const coinsPrice = useSelector((state) => state.coinsPrice);

  return (
    <div className="grid grid-cols-10 gap-3 transition-all">
      {coinsPrice.map((coin) => (
        <PricePanel key={coin.code} coin={coin}></PricePanel>
      ))}
    </div>
  );
};

export default React.memo(Exchange);
