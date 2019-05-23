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

export const registerApi = ({ reduxAction, registerData }: IProps) => {
  const Register = loader("./user.graphql");
  return new Promise((resolve, reject) => {
    client
      .mutate({
        variables: { ...registerData },
        mutation: Register
      })
      .then(result => console.log(result))
      .catch(e => console.log(e));
  });
};
