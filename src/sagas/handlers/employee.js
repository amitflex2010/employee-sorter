import { call, put } from "@redux-saga/core/effects";
import { setEmployees, setError } from "../../action/loademployee";
import { requestGetEmployee } from "../requests/employee";

export function* handleGetEmployees(action) {
  try {
    const response = yield call(requestGetEmployee, action.payload);
    const { data } = response;

    yield put(setEmployees(data));
  } catch (error) {
    console.log(error);
    yield put(
      setError({
        msg: "error occured: Please check your internet connection or api url",
        status: "404",
      })
    );
  }
}
