import produce from "immer";
import { IGlobalState } from "../typing/model/model";

const stateDefault: IGlobalState = {
  user: {
    email: "antonin.chenying@gamil.com",
    name: "antoninsorrento"
  }
};

export const global = (state = stateDefault, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
