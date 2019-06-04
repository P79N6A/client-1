import { loader } from "graphql.macro";
import { client } from "../config";

/**
 * 文件上传
 * @param file
 */
export async function ossUpFileApi(file: any): Promise<{ error: boolean; msg: string }> {
  const SingleUpload = loader("./ossUpFile.graphql");
  return await client
    .mutate({
      variables: { files: file },
      mutation: SingleUpload
    })
    .then((result: { data: { singleUpload: any; }; }) => {
      return result.data.singleUpload;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
