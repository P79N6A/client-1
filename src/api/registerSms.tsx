import { gql } from "apollo-boost";
import { ajax } from "./config";

export const registerSms = async (phone: string) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation getRegisterSms($phone: String!) {
      registerSms(data: { phone: $phone }) {
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
    .then(
      (result: { data: { registerSms: { state: string; msg: string } } }) => {
        return result.data.registerSms;
      }
    )
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
