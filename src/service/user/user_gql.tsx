import user from "./user.graphql";

import { client } from "../configure";

export const userGql = client
  .query({ query: user })
  .then(result => console.log(result));
