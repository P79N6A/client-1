import produce from "immer";

/**
 * userStore 默认数据源
 */
export interface IUserStore {
  userId: string | number;
}
const state: IUserStore = {
  userId: "1"
};

/**
 * reducer 操作
 */
export const userStore = produce((draft = state, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return draft;
  }
});
