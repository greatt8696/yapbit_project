import React, { useState } from "react";

const ExchangeInputs = () => {
  const [inputs, setInputs] = useState({
    type: "market",
    price: "",
    size: "",
    value: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const sizeHandler = (e) => {
    const { name } = e.target;
    setInputs({ ...inputs, size: name });
    console.log(inputs);
  };

  return (
    <div className="grid grid-cols-2 px-2 gap-2">
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
              value={"market"}
              onChange={inputsHandler}
            />
          </div>
          <div className="flex flex-row">
            <label className="mt-1">시장가</label>
            <input
              className="text-black p-2 pl-5 m-2 rounded-full w-6 h-6"
              type={"radio"}
              name="type"
              value={"limit"}
              onChange={inputsHandler}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label>매수가격</label>
        <input
          className="text-black p-2 pl-5 m-2 rounded-full"
          type={"text"}
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
            className="p-2 px-5 mx-1 font-bold rounded-md bg-white text-black"
            name="10"
          >
            10%
          </button>
          <button
            onClick={sizeHandler}
            className="p-2 px-5 mx-1 font-bold rounded-md bg-white text-black"
            name="25"
          >
            25%
          </button>
          <button
            onClick={sizeHandler}
            className="p-2 px-5 mx-1 font-bold rounded-md bg-white text-black"
            name="50"
          >
            50%
          </button>
          <button
            onClick={sizeHandler}
            className="p-2 px-5 mx-1 font-bold rounded-md bg-white text-black"
            name="75"
          >
            75%
          </button>
          <button
            onClick={sizeHandler}
            className="p-2 px-5 mx-1 font-bold rounded-md bg-white text-black"
            name="100"
          >
            100%
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>주문총액</label>
        <input
          className="text-black p-2 pl-5 m-2 rounded-full"
          type={"text"}
          name="value"
          value={inputs.value}
          onChange={inputsHandler}
        />
      </div>
    </div>
  );
};

export default ExchangeInputs;
