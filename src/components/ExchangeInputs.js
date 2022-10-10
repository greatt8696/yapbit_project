import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeInputs = () => {
  const dispatch = useDispatch();
  const myAssetReducer = useSelector((state) => state.myAssetReducer);
  const selectedCoin = useSelector((state) => state.coinReducer.selectedCoin);
  const [inputs, setInputs] = useState({
    sellBuy: "buy",
    type: "limit",
    price: selectedCoin.trade_price,
    size: "",
    value: {
      buy: `원`,
      sell: `${selectedCoin?.code?.replace("KRW-", "")}`,
    },
  });

  useEffect(() => {
    myAssetReducer.myAssets.map((asset) => {
      if (asset === "KRW") {
      }
    });
  }, [inputs]);

  useEffect(() => {
    console.log(myAssetReducer);
  }, [myAssetReducer]);

  useEffect(() => {
    setInputs({
      ...inputs,
      price: selectedCoin.trade_price,
      value: { ...inputs.value, sell: `${selectedCoin?.code?.replace("KRW-", "")}` },
    });
  }, [selectedCoin]);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sizeHandler = (e) => {
    const { name } = e.target;
    setInputs({ ...inputs, size: name });
    console.log(inputs);
  };

  return (
    <div className="grid grid-cols-2 px-2 gap-2 font-bold">
      <div>
        <label className="mt-1">주문구분</label>
        <div className="flex flex-row">
          <div className="flex flex-row mr-5">
            <label className="mt-1">지정가</label>
            <input
              className="text-black p-2 pl-5 m-2 rounded-full w-6 h-6"
              type={"radio"}
              name="type"
              defaultChecked
              value={"limit"}
              onChange={inputsHandler}
            />
          </div>
          <div className="flex flex-row">
            <label className="mt-1">시장가</label>
            <input
              className="text-black p-2 pl-5 m-2 rounded-full w-6 h-6"
              type={"radio"}
              name="type"
              value={"market"}
              onChange={inputsHandler}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label>주문가격</label>
        <input
          className="text-black p-2 pl-5 m-2 rounded-full"
          type={"number"}
          name="price"
          value={inputs.price}
          onChange={inputsHandler}
        />
      </div>

      <div className="flex flex-col">
        <label>주문수량</label>
        <input
          className="text-black m-2 rounded-full"
          type={"range"}
          name="size"
          min="0"
          max="100"
          step="5"
          value={inputs.size}
          onChange={inputsHandler}
        />
        <div className="flex justify-between px-2">
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name="10"
          >
            10%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name="25"
          >
            25%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name="50"
          >
            50%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name="75"
          >
            75%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name="100"
          >
            100%
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>주문총액</label>

        <div className="grid grid-cols-2">
          <input
            className="text-green-500 p-2 pl-5 m-2 rounded-full text-right pr-5"
            type={"text"}
            name="value"
            readOnly
            value={inputs.value.buy}
            onChange={inputsHandler}
          />
          <input
            className="text-red-500 p-2 pl-5 m-2 rounded-full text-right pr-5"
            type={"text"}
            name="value"
            readOnly
            value={inputs.value.sell}
            onChange={inputsHandler}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 col-span-full h-14 mt-2">
        <button
          name={"sellBuy"}
          onClick={inputsHandler}
          value={"buy"}
          className="col-span-1 text-green-500 rounded-lg mr-1  transition-all border-4 border-green-500 hover:bg-green-500 hover:text-white"
        >
          매 수
        </button>
        <button
          name={"sellBuy"}
          onClick={inputsHandler}
          value={"sell"}
          className="col-span-1 text-red-500 rounded-lg ml-1  transition-all border-4 border-red-500 hover:bg-red-500 hover:text-white"
        >
          매 도
        </button>
      </div>
    </div>
  );
};

export default ExchangeInputs;
