import _ from "lodash";
import jsonPlaceHolder from "../api/jsonPlaceHolder";
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  /*const userIds = _.uniq(_.map(getState().blogs, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));*/
  _.chain(getState().blogs)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
//through memoize function
/*export const fetchUser = id => async dispatch => {
  _fetchuser(id, dispatch);
};
const _fetchuser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});*/
