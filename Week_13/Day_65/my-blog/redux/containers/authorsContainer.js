import connect from "react-redux";
import { loadAuthorsFromApi } from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        authors: state.authors,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => {
            dispatch(loadPostsFromApi());
        }
    };
}

const AuthorsContainer = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsContainer;