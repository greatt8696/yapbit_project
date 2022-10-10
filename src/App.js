import { Body, Header, MsgSlot } from "./components";
import { initDatas } from "./localdb/db";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Exchange,
  Login,
  SignUp,
  MyWallet,
  Loading,
} from "./pages";
import Modal from "./pages/Modal";
import { useDispatch, useSelector } from "react-redux";
import upbitSocket from "./socket/upbitSocket";
import React, { useEffect} from "react";

function App() {
  initDatas();
  const onLoading = useSelector((state) => state.uiReducer.onLoading);
  const onModal = useSelector((state) => state.uiReducer.onModal);
  const onMsg = useSelector((state) => state.uiReducer.onMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new upbitSocket();
    socket.onmessage = function (e) {
      const data = socket.stringToJson(e);
      if (data.type === "ticker") {
        const {
          code,
          trade_price,
          change,
          change_rate,
          change_price,
          acc_trade_price_24h,
        } = data;
        const newData = {
          code,
          trade_price,
          change,
          change_rate,
          change_price,
          acc_trade_price_24h,
        };
        dispatch({ type: "CHANGE_COIN", payload: newData });
      }
      if (data.type === "orderbook") {
        const { code, orderbook_units, total_ask_size, total_bid_size } = data;
        const newData = {
          code,
          orderbook_units,
          total_ask_size,
          total_bid_size,
        };
        dispatch({ type: "CHANGE_ORDERBOOK", payload: newData });
      }
    };
  }, []);

  return (
    <div className="App w-screen h-screen bg-neutral-900 text-white overflow-hidden relative">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/myWallet" element={<MyWallet />} />
      </Routes>
      {onLoading && <Loading />}
      {onModal && <Modal />}
      {onMsg && <MsgSlot />}
    </div>
  );
}

export default React.memo(App);
