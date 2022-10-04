import { Body, Header } from "./components";
import { initDatas } from "./localdb/db";
function App() {
  initDatas();
  return (
    <div className="App w-screen h-screen bg-black text-white">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
