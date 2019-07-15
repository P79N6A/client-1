import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  phone: string;
  verify: string;
  password: string;
  rememberMe: string;
}

export const login = async ({ phone, verify, password, rememberMe }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation login(
      $phone: String!
      $password: String!
      $verify: String!
      $rememberMe: Boolean
    ) {
      login(
        data: {
          phone: $phone
          password: $password
          verify: $verify
          rememberMe: $rememberMe
        }
      ) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await apollo
    .mutate({
      variables: {
        phone: phone,
        password: password,
        verify: verify,
        rememberMe: rememberMe
      },
      mutation: graphql
    })
    .then((result: { data: { login: { state: string; msg: string } } }) => {
      return result.data.login;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
