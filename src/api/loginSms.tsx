import { gql } from "apollo-boost";
import { ajax } from "./config";

export const loginSms = async (phone: string) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation loginSms($phone: String!) {
      loginSms(data: { phone: $phone }) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await ajax
    .mutate({
      variables: { phone: phone },
      mutation: graphql
    })
    .then((result: { data: { loginSms: { state: string; msg: string } } }) => {
      return result.data.loginSms;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
