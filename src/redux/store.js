import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root.saga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];//scalable->can add other middlewares

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)//log redux actions
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export { store, persistor };

//thunk->allows to dispatch functions instead of objects