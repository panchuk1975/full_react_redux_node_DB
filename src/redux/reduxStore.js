import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware  from "redux-thunk";
import notesReduser from "./notesReducer";

let rootReduser = combineReducers({ 
    notes: notesReduser
 });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReduser, composeEnhancers( applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
