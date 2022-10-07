import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const PriceContext = React.createContext({});
export const OrderbookContext = React.createContext({});

root.render(
  <Provider store={store}>
    <OrderbookContext.Provider value={{}}>
      <PriceContext.Provider value={{}}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PriceContext.Provider>
    </OrderbookContext.Provider>
  </Provider>
);
