import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Msg from "./Msg";

const MsgSlot = () => {
  const msgs = useSelector((state) => state.msgReducer.msgs);

  return (
    <div className="fixed bottom-0 right-0 w-56 h-[15px] flex flex-col-reverse py-5 mx-5 gap-2 z-0">
      {msgs.map((msg, idx) => (
        <Msg msg={msg} key={idx}></Msg>
      ))}
    </div>
  );
};

export default MsgSlot;
