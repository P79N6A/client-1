import { gql } from "apollo-boost";
import { apollo } from "../config";

export const ossUpload = async (file: any) => {
  // graphql 请求数据生成
  const graphql = gql`
    mutation upload($files: Upload!) {
      upload(files: $files) {
        fileUrl
      }
    }
  `;

  // 数据请求
  return await apollo
    .mutate({
      variables: {
        files: file
      },
      mutation: graphql
    })
    .then((result: { data: { upload: { fileUrl: string } } }) => {
      return result.data.upload;
    })
    .catch(() => {
      return { state: "error", msg: "网络链接异常，请重试" };
    });
};
