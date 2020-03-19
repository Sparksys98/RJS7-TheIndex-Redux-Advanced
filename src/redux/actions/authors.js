import { SET_AUTHORS } from "./actionTypes";

import axios from "axios";

export const getBooks = () => async dispatch => {
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
