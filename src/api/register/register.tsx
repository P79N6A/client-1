import { loader } from "graphql.macro";
import { client } from "../config";

interface IProps {
  // 项redux 中发送修改数据操作
  reduxAction({ type, payload }: { type: string; payload: string }): void;

  // 注册数据
  registerData: {
    phone: string;
    verification: string;
    password: string;
  };
}

export async function registerApi({
  reduxAction,
  registerData
}: IProps): Promise<{ error: boolean; msg: string }> {
  const Register = loader("./register.graphql");
  return await client
    .mutate({
      variables: { ...registerData },
      mutation: Register
    })
    .then((result: { data: { register: any; }; }) => {
      return result.data.register;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
