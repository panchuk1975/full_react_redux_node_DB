import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import "./i18next";
import "./css/main.css"

import App from "./App.js";

let rerenderEntireTree = (state) => {
  ReactDom.render(
    <Provider store={store}>
      <Suspense fallback={(<div>Loading ...</div>)}>
        <App className="bg-app"/>
      </Suspense>
    </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
