import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  id: string;
  jwt: string;
}

export const auth = async ({ id, jwt }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    query jwtVerify($id: String!, $jwt: String!) {
      jwtVerify(data: { id: $id, jwt: $jwt }) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await apollo
    .query({
      variables: {
        id: id,
        jwt: jwt
      },
      query: graphql
    })
    .then((result: { data: { jwtVerify: { state: string; msg: string } } }) => {
      return result.data.jwtVerify;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
