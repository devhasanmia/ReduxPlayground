import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

export const colorChange = (color, changeType) => {
  return {
    type: COLORCHANGE,
    payload: { changeType, color },
  };
};

export const statusChange = (id, status) => {
  return {
    type: STATUSCHANGE,
    payload: { id, status },
  };
};
