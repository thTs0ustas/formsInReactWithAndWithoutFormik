import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Provider } from "./model";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
