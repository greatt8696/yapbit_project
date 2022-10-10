import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Msg = (props) => {
  const { code, size, price, type, id } = props.msg
  const dispatch = useDispatch();
  const msgRef = useRef();
  const [msg, setMsg] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const color = type === "buy" ? "bg-green-500/40" : "bg-red-500/40";

      const title =
        type === "buy" ? `${code} 매수체결 알림` : `${code} 매도체결 알림`;
      const content =
        type === "buy"
          ? `${price}원에 ${size}${code?.replace("KRW-", "")} 매수 체결 ㅇㅅㅇ`
          : `${price}원에 ${size}${code?.replace("KRW-", "")} 매도 체결 찡끗`

      setMsg({title, content})
      msgRef.current.classList.add(color);
      msgRef.current.classList.remove("translate-x-60");
      setTimeout(() => {
        msgRef.current.classList.add("-translate-y-96");
        msgRef.current.classList.add("opacity-0");
      }, 3000);
      setTimeout(() => {
        msgRef.current.classList.add("hidden");
        dispatch({ type: "DELETE_MSG", payload: id });
      }, 4000);
    }, 500);
  }, []);

  return (
    <div
      ref={msgRef}
      className="w-full z-30 h-28 font-bold rounded-lg tran backdrop-blur-sm p-3 transition-all translate-x-60 text-white "
    >
      <h1 className="z-30">{msg.title}</h1>
      <h1 className="z-30">
        {msg.content}
      </h1>
    </div>
  );
};

export default Msg;
