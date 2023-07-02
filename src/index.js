import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// redux
import store from "./components/test2july/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);