import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  phone: string;
  verify: string;
  password: string;
}
export const register = async ({ phone, verify, password }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation register($phone: String!, $password: String!, $verify: String!) {
      register(data: { phone: $phone, password: $password, verify: $verify }) {
        state
        msg
        data {
          jwt
          id
        }
      }
    }
  `;

  // 数据请求
  return await apollo
    .mutate({
      variables: { phone: phone, password: password, verify: verify },
      mutation: graphql
    })
    .then(
      (result: {
        data: {
          register: {
            state: string;
            msg: string;
            data: { jwt: string; id: number };
          };
        };
      }) => {
        return result.data.register;
      }
    )
    .catch(() => {
      return {
        state: "error",
        msg: "网络链接异常，请重试",
        data: { jwt: "", id: "" }
      };
    });
};
