import { IRxAction } from "./typeing";

export const rxAction = (type: string, payload: string | number): IRxAction => {
  console.log(type);
  return {
    type: type,
    payload: payload
  };
};
