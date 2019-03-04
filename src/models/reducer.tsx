import produce from "immer";

const state = {};

const rxReducer = produce((draft = state, action) => {
  switch (action.type) {
    default:
      return draft;
  }
});

export default rxReducer;
