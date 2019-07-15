import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  ware_id: string;
}

export const obtainWare = async ({ ware_id }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation obtainWare($ware_id: String!) {
      obtainWare(data: { ware_id: $ware_id }) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await apollo
    .mutate({
      variables: {
        ware_id: ware_id
      },
      mutation: graphql
    })
    .then(
      (result: { data: { obtainWare: { state: string; msg: string } } }) => {
        return result.data.obtainWare;
      }
    )
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
