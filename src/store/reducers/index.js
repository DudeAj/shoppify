import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import itemReducer from './Items';
import Thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    data: itemReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

export default store;
