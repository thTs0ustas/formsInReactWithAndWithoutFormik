import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { Provider } from "./model";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import store from "./rModel/store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Provider>
          <ScrollToTop />
          <App />
        </Provider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
