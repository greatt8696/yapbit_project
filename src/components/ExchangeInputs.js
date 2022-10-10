import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeInputs = () => {
  const dispatch = useDispatch();
  const sizeTooltipRef = useRef();
  const limitButtonRef = useRef();
  const marketButtonRef = useRef();
  const myAssetReducer = useSelector((state) => state.myAssetReducer);
  const selectedCoin = useSelector((state) => state.coinReducer.selectedCoin);
  const selectedOrderPrice = useSelector(
    (state) => state.coinReducer.selectedOrderPrice
  );
  const [inputs, setInputs] = useState({
    sellBuy: "buy",
    type: "limit",
    price: "",
    size: {
      buy: "",
      sell: "",
    },
    value: {
      buy: "",
      sell: 0,
    },
    sizePercent: "",
  });

  //initPrice
  useEffect(() => {
    setInputs({
      ...inputs,
      price: selectedCoin.trade_price,
    });
  }, []);

  //computedSizeAndValue
  useEffect(() => {
    const tempValue = {};
    const tempSize = {};
    myAssetReducer.myAssets.map((asset) => {
      const { code, price, size } = asset;

      if (code === "KRW") {
        const getSize =
          ((price * size) / inputs.price) * (inputs.sizePercent / 100);
        tempValue["buy"] = parseInt(price * size * (inputs.sizePercent / 100));
        tempSize["buy"] = inputs.price <= 1 ? 0 : getSize.toFixed(3);
      } else if (code === selectedCoin?.code) {
        const fixedNum = (size * (inputs.sizePercent / 100)).toFixed(3);
        tempValue["sell"] = fixedNum;
        tempSize["sell"] = fixedNum;
      }
    });
    setInputs({
      ...inputs,
      size: tempSize,
      value: tempValue,
    });
  }, [inputs.sizePercent, inputs.price]);

  //setType
  useEffect(() => {
    setInputs({
      ...inputs,
      price: inputs.type === "market" ? "" : inputs.price,
    });
  }, [inputs.type]);

  // changeOrderHandler
  useEffect(() => {
    limitButtonRef.current.checked = true;
    if (selectedOrderPrice.price > 0) {
      setInputs({
        ...inputs,
        type: "limit",
        price: selectedOrderPrice.price,
      });
    }
  }, [selectedOrderPrice.price]);

  // init inputs changed selectedCoin
  useEffect(() => {
    setInputs({
      sellBuy: "buy",
      type: "limit",
      price: selectedCoin.trade_price,
      size: {
        buy: "",
        sell: "",
      },
      value: {
        buy: "",
        sell: 0,
      },
      sizePercent: "",
    });
  }, [selectedCoin.code]);

  useEffect(() => {
    sizeTooltipRef.current.innerHTML = `${
      inputs.size.buy ? inputs.size.buy : ""
    }${selectedCoin?.code?.replace("KRW-", "")}`;
  }, [inputs.size.buy]);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sizeHandler = (e) => {
    const { name } = e.target;
    setInputs({ ...inputs, sizePercent: name });
  };

  const submitHandler = (e) => {
    const BuyOrSell = e.target.value;

    const sendData = {
      code: selectedCoin?.code,
      size: BuyOrSell === "buy" ? inputs.size.buy : inputs.size.sell,
      price: inputs.price,
      type: BuyOrSell,
    };

    // {code: "KRW-BTC", size: "1", price: 27830000}

    dispatch({
      type: "ON_MODAL",
      payload: {
        data: {
          title: `${BuyOrSell === "buy" ? "매수" : "매도"}주문`,
          content: `${selectedCoin?.code?.replace("KRW-", "")} 를 ${
            inputs.price
          } 에 
          ${BuyOrSell === "buy" ? inputs.size.buy : inputs.size.sell} 수량으로  
          ${BuyOrSell === "buy" ? "매수" : "매도"} 하실뀨?`,
        },
        callbackDispatch: {
          type: "ADD_ORDER",
          payload: JSON.stringify(sendData),
        },
      },
    });

    setInputs({
      sellBuy: "buy",
      type: "limit",
      price: selectedCoin.trade_price,
      size: {
        buy: "",
        sell: "",
      },
      value: {
        buy: "",
        sell: 0,
      },
      sizePercent: "",
    });
  };

  return (
    <div className="grid grid-cols-2 px-2 gap-2 font-bold">
      <div>
        <label className="mt-1">주문구분</label>
        <div className="flex flex-row">
          <div className="flex flex-row mr-5">
            <label className="mt-1">지정가</label>
            <input
              ref={limitButtonRef}
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
              ref={marketButtonRef}
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
          name="sizePercent"
          min="0"
          max="100"
          step="5"
          value={inputs.sizePercent}
          onChange={inputsHandler}
        />
        <div className="flex justify-between px-2">
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name={10}
          >
            10%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name={25}
          >
            25%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name={50}
          >
            50%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name={75}
          >
            75%
          </button>
          <button
            onClick={sizeHandler}
            className="p-1 px-5 mx-1  rounded-md bg-white text-black"
            name={100}
          >
            100%
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>주문총액</label>

        <div className="grid grid-cols-2 relative">
          <input
            className="text-green-500 p-2 pl-5 m-2 rounded-full text-right pr-9"
            type={"text"}
            name="value"
            readOnly
            value={inputs.value.buy}
            onChange={inputsHandler}
          />
          <div className="absolute left-96">
            <label
              ref={sizeTooltipRef}
              className="absolute right-36 -top-10 text-green-500 p-2 pl-5 m-2 text-right pr-5"
            ></label>
          </div>
          <label className="absolute right-60 text-green-500 p-2 pl-5 m-2 text-right pr-5">
            원
          </label>
          <label className="absolute left-0 text-green-500 p-2 pl-5 m-2 text-right pr-5">
            매수가능
          </label>
          <label className="absolute right-0 text-red-500 p-2 pl-5 m-2 text-right pr-5">{`${selectedCoin?.code?.replace(
            "KRW-",
            ""
          )}`}</label>
          <label className="absolute right-32 text-red-500 p-2 pl-5 m-2 text-right pr-5">
            매도가능
          </label>
          <input
            className="text-red-500 p-2 pl-5 m-2 rounded-full text-right pr-20"
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
          onClick={submitHandler}
          value={"buy"}
          className="col-span-1 text-green-500 rounded-lg mr-1  transition-all border-4 border-green-500 hover:bg-green-500 hover:text-white"
        >
          매 수
        </button>
        <button
          name={"sellBuy"}
          onClick={submitHandler}
          value={"sell"}
          className="col-span-1 text-red-500 rounded-lg ml-1  transition-all border-4 border-red-500 hover:bg-red-500 hover:text-white"
        >
          매 도
        </button>
      </div>
    </div>
  );
};

export default React.memo(ExchangeInputs);
