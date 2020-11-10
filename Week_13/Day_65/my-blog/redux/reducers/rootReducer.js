import todosReducer from "./todosReducer";
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authorReducer from "./authorReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    authors: authorReducer,
});

export default rootReducer;