import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

export const colorChange = (color, changeType) => {
  return {
    type: COLORCHANGE,
    payload: { color, changeType },
  };
};

export const statusChange = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status
  };
};
