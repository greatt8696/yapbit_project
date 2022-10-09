import React from "react";

const Orderbook = ({ orderbook }) => {
  return <div className="bg-green-600 ">{JSON.stringify(orderbook)}</div>;
};

export default React.memo(Orderbook);
