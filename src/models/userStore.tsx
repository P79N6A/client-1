import produce from "immer";
import { IAction } from "./action";

/**
 * userStore 默认数据源
 */
export interface IUserStore {
  rememberMe: string | undefined;
  userId: string | number;
}
const state: IUserStore = {
  rememberMe: undefined,
  userId: "1"
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
