import connect from "react-redux";
import { loadPostsFromApi } from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
}

const mapDispatchToProps = () => {
    return {
        loadPosts: () => {
            dispatch(loadPostsFromApi());
        }
    };
}

const homeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default homeContainer;