import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  store_id: string;
  logo: string;
  desc: string;
  name: string;
}

export const storeSet = async ({ store_id, logo, desc, name }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation setStore(
      $store_id: String!
      $logo: String!
      $name: String!
      $desc: String!
    ) {
      setStore(
        data: { store_id: $store_id, logo: $logo, name: $name, desc: $desc }
      ) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await apollo
    .mutate({
      variables: { store_id: store_id, logo: logo, name: name, desc: desc },
      mutation: graphql
    })
    .then((result: { data: { setStore: { state: string; msg: string } } }) => {
      return result.data.setStore;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
