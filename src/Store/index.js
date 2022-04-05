import {createStore, applyMiddleware } from "redux";
import {rootReducer} from "./rootReducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const middleware = [];

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware, logger)));
export const persistor = persistStore(store);
