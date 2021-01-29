import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";

import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//глобально используем в консоли
window.store = store;

export default store;