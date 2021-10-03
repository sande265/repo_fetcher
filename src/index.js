import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/style.scss";
import "./assets/demo/demo.css";
import App from "./App";
import store from "store";

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  // </BrowserRouter>
  ,
  document.getElementById("root")
);
