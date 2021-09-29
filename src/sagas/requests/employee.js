import { api } from "../../utils/api";

export const requestGetEmployee = (count) => {
  return api.request({
    method: "GET",
    url: `?results=${count}&nat=us`,
  });
};
