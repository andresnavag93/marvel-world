import React from "react";
import ReactDom from "react-dom";
import { App } from "./routes/App";
import { Provider } from "react-redux";
import { store } from "./library/redux/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
