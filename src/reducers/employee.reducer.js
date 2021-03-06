import { GET_EMPLOYEES, POST_ERROR } from "../types";

const initialState = {
  employees: [],
  loading: true,
  error: {},
};

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default employeeReducer;
