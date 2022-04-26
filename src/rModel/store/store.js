import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import reducers from "../reducers";
import rootEpic from "../epics";

const epicMiddleware = createEpicMiddleware();
export default configureStore({
  reducer: reducers,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
