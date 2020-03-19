import { SET_BOOKS } from "./actionTypes";

import axios from "axios";

export const getAuthors = () => async dispatch => {
  try {
    const resource = await axios.get(
      "https://the-index-api.herokuapp.com/api/authors/"
    );
    const books = resource.data;
    dispatch({ type: SET_BOOKS, payload: authors });
  } catch (error) {
    console.error(error);
  }
};
