const { GET_POSTS } = require("../actionTypes/actionTypes");

export const loadPostsFromApi = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                dispatch(loadPosts(data));
            })
            .catch(console.error);
    };
};

export const loadPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    };
};