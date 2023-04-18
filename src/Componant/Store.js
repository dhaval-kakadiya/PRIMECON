import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AddformReducer from "./Store/Reducer/AddformReducer";

const store = createStore(AddformReducer, applyMiddleware(thunk));
export default store;