interface IRxAction {
  type: string;
  payload: string | number;
}

interface IRxReducer {
  admin: {
    siderSelect: string;
  };
}

export { IRxAction, IRxReducer };
