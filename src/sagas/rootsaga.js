import { takeLatest } from "@redux-saga/core/effects";
import { GET_EMPLOYEES } from "../types";
import { handleGetEmployees } from "./handlers/employee";

export function* watcherSaga() {
  yield takeLatest(GET_EMPLOYEES, handleGetEmployees);
}
