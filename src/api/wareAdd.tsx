import { gql } from "apollo-boost";
import { ajax } from "./config";

interface Props {
  user_id: string;
  atlas: any;
  coding: any;
  name: any;
  desc: any;
  format: any;
  delivery: any;
  price: any;
}

export const wareAdd = async ({
  user_id,
  atlas,
  coding,
  name,
  desc,
  format,
  delivery,
  price
}: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation wareAdd(
      $user_id: String!
      $atlas: [String]
      $coding: String!
      $name: String!
      $desc: String!
      $format: [format]
      $delivery: String!
      $price: String!
    ) {
      addWare(
        data: {
          user_id: $user_id
          atlas: $atlas
          coding: $coding
          name: $name
          desc: $desc
          format: $format
          delivery: $delivery
          price: $price
        }
      ) {
        state
        msg
      }
    }
  `;

  // 数据请求
  return await ajax
    .mutate({
      variables: {
        user_id: user_id,
        atlas: atlas,
        coding: coding,
        name: name,
        desc: desc,
        format: format,
        delivery: delivery,
        price: price
      },
      mutation: graphql
    })
    .then((result: { data: { addWare: { state: string; msg: string } } }) => {
      return result.data.addWare;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
