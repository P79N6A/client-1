import { loader } from "graphql.macro";
import { client } from "../config";

/**
 * 发送手机注册验证码
 * @param phone
 */
export async function smsRegisterApi(
  phone: string
): Promise<{ error: boolean; msg: string }> {
  const Sms = loader("./smsRegister.graphql");
  return await client
    .mutate({
      variables: { phone: phone },
      mutation: Sms
    })
    .then(result => {
      return result.data.smsRegister;
    })
    .catch(e => {
      return { error: true, msg: "网络链接异常，请重试" };
    });
}
