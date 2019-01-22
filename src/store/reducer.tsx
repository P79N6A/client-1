import produce from "immer";
import { IRxAction, IRxReducer } from "./typeing";

const state: IRxReducer = {
  /**
   * admin 界面涉及数据
   */
  admin: {
    siderSelect: ""
  }
};

const rxReducer = produce((draft = state, action: IRxAction) => {
  switch (action.type) {
    case "ADMIN_SIDER_SELECT":
      draft.admin.siderSelect = action.payload;
      return draft;
    default:
      return draft;
  }
});

export default rxReducer;
