import { Body, Header } from "./components";
import { initDatas } from "./localdb/db";
import { Routes, Route } from "react-router-dom";
import connectWS from "./socket/upbitSocket";
import { Main, Posts, Exchange, Login, Signin, MyWallet } from "./pages";
function App() {
  initDatas();
  // const socket = new connectWS();
  return (
    <div className="App w-screen h-screen bg-slate-900 text-white">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </div>
  );
}

export default App;
