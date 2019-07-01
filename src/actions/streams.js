import streamApi from "../api/streams";
import history from "../history";
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().googleAuth;
  const response = await streamApi.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/streams");
};

export const fetchStreams = () => async dispatch => {
  const response = await streamApi.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streamApi.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streamApi.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/streams");
};

export const deleteStream = id => async dispatch => {
  await streamApi.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/streams");
};
