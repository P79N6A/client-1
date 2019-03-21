import { IAppletsAction } from "../../../typing/model/action";

export const appletsAction = (type: string, payload: any): IAppletsAction => {
  return {
    payload,
    type
  };
};
