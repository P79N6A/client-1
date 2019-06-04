import { loader } from "graphql.macro";
import { client } from "../config";

interface IProps {
  // 注册数据
  loginData: {
    phone: string;
    verification: string;
    password: string;
  };
}

export async function loginApi({
  loginData
}: IProps): Promise<{ error: boolean; msg: string }> {
  const Login = loader("./login.graphql");
  // 用以补全不存在的数据
  const mockData = {
    phone: "1",
    password: "1",
    verify: "1",
    rememberMe: false
  };

  return await client
    .mutate({
      variables: { ...mockData, ...loginData },
      mutation: Login
    })
    .then((result: { data: { login: any; }; }) => {
      return result.data.login;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
