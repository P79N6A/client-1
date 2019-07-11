import { gql } from "apollo-boost";
import { ajax } from "./config";

interface Props {
  store_id: string;
}

export const storeRemove = async ({ store_id }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation remove($store_id: String!) {
        removeStore(data: { store_id: $store_id }) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await ajax
    .mutate({
      variables: { store_id: store_id },
      mutation: graphql
    })
    .then(
      (result: { data: { removeStore: { state: string; msg: string } } }) => {
        return result.data.removeStore;
      }
    )
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
