import { GET_POSTS } from "../actionTypes/actionTypes";
import defaultState from  "../defaultState/defaultState";

const postReducer = (prevState , action) => {
    switch (action.type) {
    case GET_POSTS:
        return action.posts;
    default:
        return prevState;
    }
}

export default postReducer;