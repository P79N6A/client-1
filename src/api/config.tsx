import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
const { createUploadLink } = require("apollo-upload-client");

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:7000/graphql"
  })
});
