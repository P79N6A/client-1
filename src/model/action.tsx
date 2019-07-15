export interface IAction {
  type: string;
  payload: any;
}
export interface IActionFn {
  action({ type, payload }: IAction): void;
}

export const action = ({ type, payload }: IAction): IAction => {
  return {
    payload,
    type
  };
};
