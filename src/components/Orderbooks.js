import React from "react";
import Orderbook from "./Orderbook";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
const Orderbooks = (props) => {
  const [isLoading, setLoading] = useState(false);
  const ORDERBOOK_SIZE = 14;
  const tempOrderbookSlot = { ask: [], bid: [] };
  for (let idx = 0; idx < ORDERBOOK_SIZE; idx++) {
    tempOrderbookSlot.ask.push({ ask_price: 1, ask_size: 1 });
    tempOrderbookSlot.bid.push({ ask_price: 1, ask_size: 1 });
  }

  const [orderbookSlot, setOrderbookSlot] = useState({ ...tempOrderbookSlot });

  const selectedOrderbook = useSelector(
    (state) => state.coinReducer.selectedOrderbook
  );

  useEffect(() => {
    if (selectedOrderbook.orderbook_units !== undefined) {
      selectedOrderbook.orderbook_units.map(() => {});
      console.log(selectedOrderbook.orderbook_units);
    }
  }, [selectedOrderbook]);

  //const { orderbook_units, code, total_ask_size, total_bid_size } =
  //  props.orderbooks;

  //console.log(orderbook_units);

  // console.log(orderbookSlot.ask);

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="w-full h-full text-center align-middle">
          <h1 className="text-8xl inline-block align-middle">
            잠시만 기다려주세요
          </h1>
        </div>
      )}

      {!isLoading && (
        <div className="w-full h-full grid grid-cols-6 gap-2 p-3">
          <div className="col-span-1 bg-red-300 grid grid-flow-row auto-rows-max gap-1 ">
            {orderbookSlot.ask.map((slot, idx) => (
              <Orderbook key={`ask_detail_${idx}`} orderbook={slot} />
            ))}
          </div>
          <div className="col-span-2 bg-red-300 grid grid-flow-row auto-rows-max  gap-1">
            {orderbookSlot.ask.map((slot, idx) => (
              <Orderbook key={`ask_main_${idx}`} orderbook={slot} />
            ))}
          </div>
          <div className="col-span-2 bg-green-200 grid grid-flow-row auto-rows-max  gap-1">
            {orderbookSlot.bid.map((slot, idx) => (
              <Orderbook key={`bid_detail_${idx}`} orderbook={slot} />
            ))}
          </div>
          <div className="col-span-1 bg-green-200 grid grid-flow-row auto-rows-max  gap-1">
            {orderbookSlot.bid.map((slot, idx) => (
              <Orderbook key={`bid_main_${idx}`} orderbook={slot} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orderbooks;
