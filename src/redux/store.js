import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares=[logger];//scalable->can other middlewares

const store=createStore(rootReducer,applyMiddleware(...middlewares))

export default store;