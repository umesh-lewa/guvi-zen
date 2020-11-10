import { GET_AUTHORS } from "../actionTypes/actionTypes";
import defaultState from  "../defaultState/defaultState";

const authorReducer = (prevState , action) => {
    switch (action.type) {
    case GET_AUTHORS:
        return action.authors;
    default:
        return prevState;
    }
}

export default authorReducer;