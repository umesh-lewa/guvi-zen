const { createStore } = require("redux");
const { default: rootReducer } = require("../../../../Day_64/TodoList/redux/reducer/rootReducer");
import { applyMiddleware, createStore } from "redux";
import thunk from "";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;