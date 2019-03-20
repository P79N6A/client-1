import produce from "immer";

interface IState {
  user: {
    name: string;
    email: string;
  };
}

const stateDefault: IState = {
  user: {
    name: "antoninsorrento",
    email: "antonin.chenying@gamil.com"
  }
};

export const global = (state = stateDefault, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
