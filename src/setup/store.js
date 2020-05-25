// imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

import { APP_ENV } from './config/env'

// App import
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import portfolio from '../modules/portfolio/api/state'

const persistedState = sessionStorage.getItem("appstate")
  ? JSON.parse(sessionStorage.getItem("appstate"))
  : {};

const configureStore = () => {
    const middlewares = [];

    // Root Reducer
    const rootReducer = combineReducers({
        common,
        ...portfolio,
        ...user
    })
  
    middlewares.push(thunk);
  
    if (APP_ENV !== "production") {
      middlewares.push(createLogger());
    }
  
    return createStore(rootReducer, persistedState, applyMiddleware(...middlewares));
  };

const store = configureStore();

store.subscribe(() => {
  sessionStorage.setItem("appstate", JSON.stringify(store.getState()));
});



// Store
export default store

