import { gql } from "apollo-boost";
import { ajax } from "./config";

interface Props {
  user_id: string;
  logo: string;
  desc: string;
  name: string;
}

export const storeAdd = async ({ user_id, logo, desc, name }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation register(
      $user_id: String!
      $logo: String!
      $name: String!
      $desc: String!
    ) {
      addStore(
        data: { user_id: $user_id, logo: $logo, name: $name, desc: $desc }
      ) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await ajax
    .mutate({
      variables: { user_id: user_id, logo: logo, name: name, desc: desc },
      mutation: graphql
    })
    .then((result: { data: { addStore: { state: string; msg: string } } }) => {
      return result.data.addStore;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
