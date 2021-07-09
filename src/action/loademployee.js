import { api } from "../utils/api";

import { GET_EMPLOYEES, POST_ERROR } from "../types";

// Get posts
export const getEmployees = (count) => async (dispatch) => {
  try {
    const res = await api.get(`/api?results=${count}&nat=us`);
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: "error occured: Please check your internet connection or api url",
        status: "404",
      },
    });
  }
};
