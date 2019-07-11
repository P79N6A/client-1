import { gql } from "apollo-boost";
import { ajax } from "./config";

interface Props {
  user_id: string;
}

export const storeGet = async ({ user_id }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    query getStore($user_id: String!) {
      getStore(data: { user_id: $user_id }) {
        state
        msg {
          name
          id
          logo
          desc
        }
      }
    }
  `;

  // 数据请求

  return await ajax
    .query({
      query: graphql,
      variables: { user_id: user_id }
    })
    .then((result: { data: { getStore: { state: string; msg: string } } }) => {
      return result.data.getStore.msg;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
