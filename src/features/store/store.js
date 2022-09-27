import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import reducers from "../reducers";
import rootEpic from "../epics";
import { getHistoryApi } from "../queries/useGetHistoryQuery";

const epicMiddleware = createEpicMiddleware();
export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getHistoryApi.middleware, epicMiddleware),
});

epicMiddleware.run(rootEpic);
