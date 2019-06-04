import { loader } from "graphql.macro";
import { client } from "../config";

export async function createShopApi({
  user_id,
  title,
  desc,
  cover
}: {
  user_id: string;
  title: string;
  desc: string;
  cover: string;
}): Promise<{ error: boolean; msg: string }> {
  const CreateShop = loader("./createShop.graphql");
  return await client
    .mutate({
      variables: {
        user_id,
        title,
        desc,
        cover
      },
      mutation: CreateShop
    })
    .then((result: { data: { createShop: any; }; }) => {
      return result.data.createShop;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
