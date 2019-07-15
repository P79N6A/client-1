import { gql } from "apollo-boost";
import { apollo } from "../config";

interface Props {
  user_id: string;
  page: number;
  pageCount: number;
}

export const wareGet = async ({ user_id, page, pageCount }: Props) => {
  // graphql 请求数据生成
  const graphql = gql`
    query wareGet($user_id: String!, $page: Int!, $pageCount: Int!) {
      getWare(data: { user_id: $user_id, page: $page, pageCount: $pageCount }) {
        count
        data {
          id
          user_id
          coding
          name
          price
          desc
          atlas
          delivery
          status
          group
          created
          format {
            id
            spec
            unit
            stock
            ware_id
          }
        }
      }
    }
  `;

  // 数据请求
  return await apollo
    .query({
      variables: {
        user_id: user_id,
        page: page,
        pageCount: pageCount
      },
      query: graphql
    })
    .then(
      (result: {
        data: { getWare: { state: string; count: number; data: any } };
      }) => {
        return result.data.getWare;
      }
    )
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
