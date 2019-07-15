import produce from "immer";

/**
 * userStore 默认数据源
 */
export interface IUserStore {
  userId: string | number;
  jwt: string | undefined;
  auth: boolean;
}
const state: IUserStore = {
  userId: "1",
  jwt: undefined,
  auth: false
};

/**
 * reducer 操作
 */
export const user = produce((draft = state, action: any) => {
  const { type } = action;
  switch (type) {
    case "user/auth":
      draft.auth = action.payload;
      return draft;
    case "user/register":
      draft.userId = action.payload.id;
      draft.jwt = action.payload.jwt;
      return draft;
    default:
      return draft;
  }
});
