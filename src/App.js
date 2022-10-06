import { Body, Header } from "./components";
import { initDatas } from "./localdb/db";
import { Routes, Route } from "react-router-dom";
import connectWS from "./socket/upbitSocket";
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

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const onModal = useSelector((state) => state.onModal);
  initDatas();
  const dispatch = useDispatch();
  const socket = new upbitSocket();
  socket.onmessage = function (e) {
    const d = socket.stringToJson(e);
    if (d.type === "ticker") {
      console.log(d);
    }
    if (d.type === "orderbook") {
      // console.log(d);
    }
    if (d.type === "trade") {
      // console.log(d);
    }
  };
  console.log();
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

export default App;
