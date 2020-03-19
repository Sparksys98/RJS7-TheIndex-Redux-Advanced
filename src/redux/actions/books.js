import { SET_BOOKS } from "./actionTypes";

import axios from "axios";

export const getBooks = () => async dispatch => {
  try {
    const resource = await axios.get(
      "https://the-index-api.herokuapp.com/api/books/"
    );
    const books = resource.data;
    dispatch({ type: SET_BOOKS, payload: books });
  } catch (error) {
    console.error(error);
  }
};
