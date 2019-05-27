import { loader } from "graphql.macro";

import { client } from "../config";

export const smsApi = (phone: string) => {
  const Sms = loader("./sms.graphql");
  return new Promise((resolve, reject) => {
    client
      .mutate({
        variables: { phone: `${phone}` },
        mutation: Sms
      })
      .then(result => console.log(result))
      .catch(e => console.log(e));
  });
};
