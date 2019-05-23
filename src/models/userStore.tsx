import produce from "immer";
import { IAction } from "./action";

/**
 * userStore 默认数据源
 */
export interface IUserStore {
  rememberMe: string | undefined;
}
const state: IUserStore = {
  rememberMe: undefined
};

/**
 * reducer 操作
 */
export const userStore = produce((draft = state, action: IAction) => {
  const { type } = action;
  switch (type) {
    default:
      return draft;
  }
});
