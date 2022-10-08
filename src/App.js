import { Body, Header } from "./components";
import { initDatas } from "./localdb/db";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Posts,
  Exchange,
  Login,
  Signin,
  MyWallet,
  Loading,
  Profile,
} from "./pages";
import Modal from "./pages/Modal";
import { useDispatch, useSelector } from "react-redux";
import upbitSocket from "./socket/upbitSocket";
import React, { useEffect, useRef, useState } from "react";

function App() {
  initDatas();
  const isLoading = useSelector((state) => state.isLoading);
  const onModal = useSelector((state) => state.onModal);
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

        //        coinsRef[code] = {
        //          code,
        //          trade_price,
        //          change,
        //          change_rate,
        //          change_price,
        //          acc_trade_price_24h,
        //        };

        const newData = {
          code,
          trade_price,
          change,
          change_rate,
          change_price,
          acc_trade_price_24h,
        };
        dispatch({ type: "CHANGE_COIN", payload : newData });
      }
      if (data.type === "orderbook") {
        // console.log(d);
      }
      if (data.type === "trade") {
        // console.log(d);
      }
    };
  }, []);

  return (
    <div className="App w-screen h-screen bg-neutral-900 text-white overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/myWallet" element={<MyWallet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {isLoading && <Loading />}
      {onModal && <Modal />}
    </div>
  );
}

export default React.memo(App);
