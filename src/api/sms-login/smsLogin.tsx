import { loader } from "graphql.macro";
import { client } from "../config";

/**
 * 手机登陆验证码
 * @param phone
 */
export async function smsLoginApi(
  phone: string
): Promise<{ error: boolean; msg: string }> {
  const SmsLogin = loader("./smsLogin.graphql");
  return await client
    .mutate({
      variables: { phone: phone },
      mutation: SmsLogin
    })
    .then((result: { data: { smsLogin: any; }; }) => {
      return result.data.smsLogin;
    })
    .catch(() => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
