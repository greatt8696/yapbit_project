import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const OrderPanel = ({ orderbook, type }) => {
  const orders = useSelector((state) => state.myAssetReducer.orders);
  const [mark, setMark] = useState(false);
  const [price, setPrice] = useState("");

  const mark1Ref = useRef();
  const mark2Ref = useRef();
  if (type === "bid") {
    mark1Ref.current?.classList?.add("bg-green-400");
    mark2Ref.current?.classList?.add("bg-green-500");
  } else {
    {
      mark1Ref.current?.classList?.add("bg-red-400");
      mark2Ref.current?.classList?.add("bg-red-500");
    }
  }

  useEffect(() => {
    const se = orders.map((order) => {

      if (order.price === orderbook.ask_price) {
        setMark(true);
        setPrice(`${order.size} ${order.code.replace("KRW-","")}`);
      } else if (order.price === orderbook.bid_price) {
        setMark(true);
        setPrice(`${order.size} ${order.code.replace("KRW-","")}`);
      } else {
        setMark(false);
        setPrice(``);
      }

    });
  }, [orders, orderbook]);

  return (
    <div>
      {mark && (
        <div className="flex justify-center">
          <span className="flex h-3 w-3 relative m-1 mx-3">
            <span
              ref={mark1Ref}
              className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"
            ></span>
            <span
              ref={mark2Ref}
              className="relative inline-flex rounded-full h-3 w-3 "
            ></span>
          </span>
          <p className="">{price}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(OrderPanel);
