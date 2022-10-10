import React from "react";
import Orderbook from "./Orderbook";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import OrderPanel from "./OrderPanel";
const Orderbooks = () => {
  const [isLoading, setLoading] = useState(false);
  const [widths, setWidths] = useState({ ask: [], bid: [] });


  const selectedOrderbook = useSelector(
    (state) => state.coinReducer.selectedOrderbook
  );


  useEffect(() => {
    const { ask, bid, code, total_ask_size, total_bid_size } =
      selectedOrderbook;
    const askWidth = [];
    const bidWidth = [];
    const biggestSize = total_bid_size < total_ask_size ? total_ask_size : total_bid_size
    for (let idx = 0; idx < ask.length; idx++) {
      let addTemp = 0;
      for (let innerIdx = 0; innerIdx < idx; innerIdx++) {
        addTemp += ask[innerIdx].ask_size;
      }
      const toInt = parseInt((addTemp / biggestSize) * 100);
      const temp = toInt > 1 ? toInt : 1;
      askWidth.push(temp);
    }

    for (let idx = 0; idx < bid.length; idx++) {
      let addTemp = 0;
      for (let innerIdx = 0; innerIdx < idx; innerIdx++) {
        addTemp += bid[innerIdx].bid_size;
      }
      const toInt = parseInt((addTemp / biggestSize) * 100);
      const temp = toInt > 1 ? toInt : 1;
      bidWidth.push(temp);
    }
    setWidths({ ask: askWidth, bid: bidWidth });
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
        <div className="w-full h-full grid grid-cols-6 p-2">
          <div className="col-span-1 bg-green-200/5 rounded-md flex flex-col-reverse justify-between">
            {selectedOrderbook.bid?.map((slot, idx) => (
              <OrderPanel
                key={`bid_main_${idx}`}
                orderbook={slot}
                type={"bid"}
                idx={idx}
              />
            ))}
          </div>
          <div className="col-span-2 bg-green-200/5 rounded-md flex flex-col-reverse justify-between">
            {selectedOrderbook.bid?.map((slot, idx) => (
              <Orderbook
                key={`bid_detail_${idx}`}
                orderbook={slot}
                type={"bid"}
                idx={idx}
                widths={widths}
              />
            ))}
          </div>

          <div className="col-span-2 bg-red-200/5 rounded-md flex flex-col-reverse justify-between ">
            {selectedOrderbook.ask?.map((slot, idx) => (
              <Orderbook
                key={`ask_main_${idx}`}
                orderbook={slot}
                type={"ask"}
                idx={idx}
                widths={widths}
              />
            ))}
          </div>
          <div className="col-span-1 bg-red-200/5 rounded-md flex flex-col-reverse justify-between  ">
            {selectedOrderbook.ask?.map((slot, idx) => (
              <OrderPanel
                key={`ask_detail_${idx}`}
                orderbook={slot}
                type={"ask"}
                idx={idx}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orderbooks;
