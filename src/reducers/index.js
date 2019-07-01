import { combineReducers } from "redux";
import { reducer as fromReducer } from "redux-form";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import { songsReducer, selectedSongReducer } from "./songsReducer";
import googleAuthReducer from "./googleAuthReducer";
import streamsReducer from "./streamsReducer";
export default combineReducers({
  blogs: postsReducer,
  users: userReducer,
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  googleAuth: googleAuthReducer,
  form: fromReducer,
  streams: streamsReducer
});
