

import { GET_EMPLOYEES, SET_EMPLOYEES, POST_ERROR } from "../types";

// Get posts
export const getEmployees = (count) => ({
  type: GET_EMPLOYEES,
  payload: count
});
export const setEmployees = (data) => ({
  type: SET_EMPLOYEES,
  payload: data,
});

export const setError = (data) => ({
  type: POST_ERROR,
  payload: data,
});
/*export const getEmployees = (count) => async (dispatch) => {
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
};*/
