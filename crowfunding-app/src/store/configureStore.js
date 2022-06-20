import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
// sagaMiddleware.run(rootSaga);
