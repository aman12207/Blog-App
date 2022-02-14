import React from "react";
import reactDom from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  thunk  from "redux-thunk";

import App from "./components/App"
import Reducers from "./reducers"
const store = createStore(Reducers,applyMiddleware(thunk));

reactDom.render(
  <Provider store = {store}>
    <App />
 </Provider>
  ,document.getElementById("root"));