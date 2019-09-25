import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import { store } from "./store";
import App from "./components/app";

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
