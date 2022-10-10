import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const PricePanel = (props) => {
  // console.log("랜더링횟수");
  const dispatch = useDispatch();
  const selectedCoin = useSelector((state) => state.coinReducer.selectedCoin);
  const { isSelect, setIsSelect } = props;
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name,
  } = props.coin;

  const upDown = change === "RISE" ? "+" : "-";
  const changeRate = `${upDown} ${(change_rate * 100).toFixed(2)} %`;
  const panelRef = useRef();


  const clickHandler = () => {
    if (selectedCoin?.code === code) {
      setIsSelect(!isSelect);
    } else if (selectedCoin?.code !== code) {
      setIsSelect(true);

    } else {
      setIsSelect(!isSelect);
    }
    dispatch({
      type: "SELECT_COIN",
      payload: {
        code,
        trade_price,
        change,
        changeRate,
        change_price,
        acc_trade_price_24h,
        name,
      },
    });
  };

  const anmatieEndHandler = () => {
    panelRef.current.classList.remove("animate-wiggle-once");
    upDown === "+"
      ? panelRef.current.classList.remove("animate-blink-green")
      : panelRef.current.classList.remove("animate-blink-red");
  };

  useEffect(() => {
    panelRef.current.classList.add("animate-wiggle-once");
    upDown === "+"
      ? panelRef.current.classList.add("animate-blink-green")
      : panelRef.current.classList.add("animate-blink-red");
  }, [trade_price]);

  return (
    <div
      className="p-2 z-0 bg-slate-400/20 rounded-lg font-bold text-[5px] min-w-[99px]  max-w-[99px] cursor-pointer hover:scale-110"
      onAnimationEnd={anmatieEndHandler}
      onClick={clickHandler}
      ref={panelRef}
    >
      <div className="pointer-events-none  z-0">{name}</div>
      {/* <img src={imgUrl}></img> */}
      <div className="pointer-events-none  z-0">{trade_price}</div>
      <div className={`${upDown === "+" ? "text-green-400" : "text-red-400"} z-0`}>
        ({changeRate})
      </div>
    </div>
  );
};

export default React.memo(PricePanel);
