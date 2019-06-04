import { loader } from "graphql.macro";
import { client } from "../config";

interface IProps {
  // 注册数据
  pwdResetData: {
    phone: string;
    verification: string;
    password: string;
  };
}

export async function pwdResetApi({
  pwdResetData
}: IProps): Promise<{ error: boolean; msg: string }> {
  const PwdReset = loader("./pwdReset.graphql");
  return await client
    .mutate({
      variables: { ...pwdResetData },
      mutation: PwdReset
    })
    .then((result: { data: { pwdReset: any; }; }) => {
      return result.data.pwdReset;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
