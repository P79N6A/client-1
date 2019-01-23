

interface IRxAction<T> {
  type: string;
  payload: T;
}

interface IRxReducer {
  admin: {
    siderSelect: string;
  };
}

export { IRxAction, IRxReducer };
