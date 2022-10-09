import React from "react";
import Orderbook from "./Orderbook";

const Orderbooks = (props) => {
  
  const { orderbook_units, code, total_ask_size, total_bid_size } =
    props.orderbooks;

  console.log(orderbook_units);
  return (
    <div>
      {orderbook_units?.map((orderbook,idx) => {
        <div className="flex h-40">
          1111
        </div>;
      })}
    </div>
  );
};

export default Orderbooks;
