import { client } from "../../index";
import user from "./user.graphql";

export const userGql = client.query({ query: user });
